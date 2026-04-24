import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SERVICE_ROLE_KEY')!
)

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type, x-vapi-secret',
}

async function sendSMS(to: string, from: string, body: string) {
  const accountSid = Deno.env.get('TWILIO_ACCOUNT_SID')
  const authToken = Deno.env.get('TWILIO_AUTH_TOKEN')
  if (!accountSid || !authToken) {
    console.log('Twilio credentials not configured, skipping SMS')
    return
  }
  const credentials = btoa(`${accountSid}:${authToken}`)
  const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ To: to, From: from, Body: body }).toString(),
  })
  if (!res.ok) {
    const err = await res.text()
    console.error('Twilio SMS error:', err)
  }
}

// ── Outil : vérifier les créneaux disponibles ─────────────────────────────────
async function checkAvailability(artisanId: string, daysAhead = 7): Promise<string> {
  const slots: string[] = []
  const now = new Date()

  // Charger les RDV existants pour les 7 prochains jours
  const fromDate = new Date(now); fromDate.setHours(0, 0, 0, 0)
  const toDate = new Date(now); toDate.setDate(toDate.getDate() + daysAhead); toDate.setHours(23, 59, 59, 999)

  const { data: existing } = await supabase
    .from('appointments')
    .select('appointment_date, appointment_time, duration_minutes')
    .eq('artisan_id', artisanId)
    .eq('status', 'confirmed')
    .gte('appointment_date', fromDate.toISOString().split('T')[0])
    .lte('appointment_date', toDate.toISOString().split('T')[0])

  const bookedSlots = new Set((existing || []).map(a => `${a.appointment_date}T${a.appointment_time}`))

  // Générer créneaux Lun–Sam 8h–18h, par tranche d'1h
  for (let d = 0; d < daysAhead; d++) {
    const day = new Date(now)
    day.setDate(day.getDate() + d)
    day.setHours(0, 0, 0, 0)

    const dow = day.getDay() // 0=dim, 6=sam
    if (dow === 0) continue // pas le dimanche

    const dateStr = day.toISOString().split('T')[0]
    const dayLabel = day.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })

    const daySlots: string[] = []
    for (let h = 8; h < 18; h++) {
      const timeStr = `${String(h).padStart(2, '0')}:00:00`
      const slotKey = `${dateStr}T${timeStr}`

      // Ignorer les créneaux passés (aujourd'hui)
      if (d === 0 && h <= now.getHours()) continue
      if (!bookedSlots.has(slotKey)) {
        daySlots.push(`${String(h).padStart(2, '0')}h00`)
      }
    }
    if (daySlots.length > 0) {
      // Inclure la date ISO pour que le modèle utilise le bon format et la bonne année
      slots.push(`${dayLabel} ${day.getFullYear()} [date:${dateStr}] : ${daySlots.join(', ')}`)
    }
  }

  if (slots.length === 0) return 'Aucun créneau disponible dans les 7 prochains jours.'
  return `Créneaux disponibles (utilise exactement le champ date: entre crochets pour book_appointment) :\n${slots.join('\n')}`
}

// ── Parseurs de date/heure robustes ──────────────────────────────────────────
const FR_MONTHS: Record<string, string> = {
  'janvier':'01','février':'02','fevrier':'02','mars':'03','avril':'04','mai':'05','juin':'06',
  'juillet':'07','aout':'08','août':'08','septembre':'09','octobre':'10','novembre':'11','décembre':'12','decembre':'12'
}

function parseDate(raw: string): string | null {
  const s = raw.trim()
  // ISO format déjà bon
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s
  // DD/MM/YYYY ou DD-MM-YYYY
  const dmy = s.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/)
  if (dmy) return `${dmy[3]}-${dmy[2].padStart(2,'0')}-${dmy[1].padStart(2,'0')}`
  // "21 avril 2026" ou "mardi 21 avril 2026" ou "mardi 21 avril"
  const fr = s.toLowerCase().match(/(\d{1,2})\s+(janvier|f[eé]vrier|mars|avril|mai|juin|juillet|ao[uû]t|septembre|octobre|novembre|d[eé]cembre)(?:\s+(\d{4}))?/)
  if (fr) {
    const day = fr[1].padStart(2,'0')
    const month = FR_MONTHS[fr[2]] ?? '01'
    const now = new Date()
    let year = fr[3] ? fr[3] : String(now.getFullYear())
    // Si la date calculée est déjà passée, prendre l'année suivante
    const candidate = new Date(`${year}-${month}-${day}`)
    if (candidate < now && !fr[3]) year = String(now.getFullYear() + 1)
    return `${year}-${month}-${day}`
  }
  return null
}

function parseTime(raw: string): string | null {
  const s = raw.trim()
  // HH:MM:SS ou HH:MM
  if (/^\d{2}:\d{2}:\d{2}$/.test(s)) return s
  if (/^\d{2}:\d{2}$/.test(s)) return s + ':00'
  // HH:M ou H:MM
  const hm = s.match(/^(\d{1,2}):(\d{2})$/)
  if (hm) return `${hm[1].padStart(2,'0')}:${hm[2]}:00`
  // HHhMM ou HHh
  const hfr = s.match(/^(\d{1,2})h(\d{0,2})$/)
  if (hfr) return `${hfr[1].padStart(2,'0')}:${(hfr[2] || '00').padStart(2,'0')}:00`
  // Juste l'heure "14"
  if (/^\d{1,2}$/.test(s)) return `${s.padStart(2,'0')}:00:00`
  return null
}

// ── Outil : réserver un créneau ───────────────────────────────────────────────
async function bookAppointment(
  artisanId: string,
  args: { client_name?: string; client_phone?: string; date: string; time: string; reason?: string; vapi_call_id?: string }
): Promise<string> {
  const appointmentDate = parseDate(args.date)
  const appointmentTime = parseTime(args.time)

  if (!appointmentDate) {
    console.error('book_appointment: invalid date:', args.date)
    return `Je n'ai pas pu interpréter la date "${args.date}". Pouvez-vous préciser au format jour/mois/année ?`
  }
  if (!appointmentTime) {
    console.error('book_appointment: invalid time:', args.time)
    return `Je n'ai pas pu interpréter l'heure "${args.time}". Pouvez-vous préciser (ex: 14h00) ?`
  }

  // Vérifier que le créneau est encore libre
  const { data: conflict } = await supabase
    .from('appointments')
    .select('id')
    .eq('artisan_id', artisanId)
    .eq('appointment_date', appointmentDate)
    .eq('appointment_time', appointmentTime)
    .eq('status', 'confirmed')
    .maybeSingle()

  if (conflict) return 'Ce créneau vient d\'être réservé. Proposez un autre horaire au client.'

  const { error } = await supabase.from('appointments').insert({
    artisan_id: artisanId,
    client_name: args.client_name || null,
    client_phone: args.client_phone || null,
    reason: args.reason || null,
    appointment_date: appointmentDate,
    appointment_time: appointmentTime,
    duration_minutes: 60,
    status: 'confirmed',
    vapi_call_id: args.vapi_call_id || null,
  })

  if (error) {
    console.error('book_appointment DB error:', error)
    return 'Erreur lors de la réservation. Veuillez réessayer.'
  }

  const dateLabel = new Date(appointmentDate + 'T12:00:00').toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })
  const timeLabel = appointmentTime.slice(0, 5).replace(':', 'h')
  return `Rendez-vous confirmé le ${dateLabel} à ${timeLabel}. L'artisan vous attend.`
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: CORS })

  // Vérification du secret Vapi (optionnel mais recommandé)
  const vapiSecret = Deno.env.get('VAPI_WEBHOOK_SECRET')
  if (vapiSecret) {
    const incoming = req.headers.get('x-vapi-secret')
    if (incoming !== vapiSecret) {
      return new Response('Unauthorized', { status: 401, headers: CORS })
    }
  }

  let body: any
  try {
    body = await req.json()
  } catch {
    return new Response('Invalid JSON', { status: 400, headers: CORS })
  }

  const type = body?.message?.type

  // ── tool-calls : Mia appelle check_availability ou book_appointment ──────────
  if (type === 'tool-calls') {
    const toolCallList = body.message?.toolCallList ?? []
    const assistantId: string | undefined = body.message?.call?.assistantId

    // Retrouver l'artisan
    let artisanId: string | null = null
    if (assistantId) {
      const { data } = await supabase
        .from('profiles')
        .select('id')
        .eq('vapi_assistant_id', assistantId)
        .single()
      artisanId = data?.id ?? null
    }

    const results: { toolCallId: string; result: string }[] = []

    for (const call of toolCallList) {
      const { id: toolCallId, function: fn } = call
      const args = typeof fn.arguments === 'string' ? JSON.parse(fn.arguments) : fn.arguments

      let result = 'Erreur interne.'
      if (artisanId) {
        if (fn.name === 'check_availability') {
          result = await checkAvailability(artisanId, args.days_ahead ?? 7)
        } else if (fn.name === 'book_appointment') {
          result = await bookAppointment(artisanId, {
            ...args,
            vapi_call_id: body.message?.call?.id ?? null,
          })
        }
      } else {
        result = 'Artisan introuvable.'
      }

      results.push({ toolCallId, result })
    }

    return new Response(JSON.stringify({ results }), {
      headers: { ...CORS, 'Content-Type': 'application/json' },
    })
  }

  // ── end-of-call-report : on sauvegarde l'appel + SMS artisan ────────────────
  if (type === 'end-of-call-report') {
    const msg = body.message
    const call = msg.call ?? {}
    const assistantId: string | undefined = call.assistantId

    // Retrouver l'artisan + ses coordonnées
    let artisan: { id: string; phone: string | null; email: string | null; twilio_number: string | null; assistant_name: string; company_name: string; subscription_plan: string | null } | null = null
    if (assistantId) {
      const { data } = await supabase
        .from('profiles')
        .select('id, phone, email, twilio_number, assistant_name, company_name, subscription_plan')
        .eq('vapi_assistant_id', assistantId)
        .single()
      artisan = data ?? null
    }

    if (!artisan) {
      console.log('Artisan not found for assistantId:', assistantId)
      return new Response(JSON.stringify({ received: true, skipped: true }), {
        headers: { ...CORS, 'Content-Type': 'application/json' },
      })
    }

    const callerPhone: string | null = call.customer?.number ?? null
    const vapiSummary: string | null = msg.summary ?? null
    const transcript: string | null = msg.transcript ?? null
    const duration: number | null = call.durationSeconds ?? null
    const vapiCallId: string | null = call.id ?? null

    // Données structurées en premier (nécessaires pour le résumé)
    const structuredData = msg.analysis?.structuredData ?? {}
    const urgency: string | undefined = structuredData.urgency
    const callType: string | undefined = structuredData.call_type
    const serviceRequested: string | null = structuredData.service_requested ?? null

    // Résumé en français construit depuis les données structurées
    // (Vapi génère son résumé en anglais — on génère le nôtre à partir des champs français)
    const callerNameForSummary = structuredData.caller_name ?? call.customer?.name ?? null
    const addrForSummary = structuredData.caller_address ?? null
    const who = callerNameForSummary || callerPhone || 'Client inconnu'
    const summaryParts: string[] = []
    if (serviceRequested) summaryParts.push(`${who} — ${serviceRequested}`)
    else summaryParts.push(`Appel de ${who}`)
    if (addrForSummary) summaryParts.push(`Adresse : ${addrForSummary}`)
    if (urgency === 'urgent') summaryParts.push('⚠️ Intervention urgente demandée')
    const summary: string | null = summaryParts.length > 0
      ? summaryParts.join('. ') + '.'
      : vapiSummary || transcript?.slice(0, 500) || null

    // Détection prospection : les DEUX conditions doivent être vraies pour éviter les faux positifs
    // Un devis/rénovation ne doit PAS être classé spam
    const SPAM_REGEX = /\b(prospecti|démarch|partenariat|référencement|publicit|assurance|mutuelle|fibr[eé]|fournisseur d.énergi|télécommunicati)\b/i
    const isProspection = callType === 'prospection' && SPAM_REGEX.test(summary || transcript || '')

    const status = isProspection ? 'spam' : urgency === 'urgent' ? 'urgent' : 'new'

    // Priorité : nom capturé par l'IA (structuredData) > nom Twilio > null
    const callerName: string | null = structuredData.caller_name ?? call.customer?.name ?? null
    const callerAddress: string | null = structuredData.caller_address ?? null

    // Sauvegarder l'appel
    await supabase.from('calls').insert({
      artisan_id: artisan.id,
      caller_name: callerName,
      caller_phone: callerPhone,
      summary: summary || transcript?.slice(0, 800) || null,
      transcript: transcript || null,
      reason: serviceRequested,
      caller_address: callerAddress,
      status,
      vapi_call_id: vapiCallId,
      duration_seconds: duration,
    })

    // ── Limites d'appels mensuels ────────────────────────────────────────────
    // Solo (ou null/trial) = 150 appels/mois. Pro/Équipe = illimité.
    const plan = (artisan.subscription_plan ?? '').toLowerCase()
    const isUnlimited = plan.includes('pro') || plan.includes('équipe') || plan.includes('equipe') || plan.includes('team')

    if (!isUnlimited) {
      const SOLO_LIMIT = 150
      const WARN_AT    = 120

      const startOfMonth = new Date()
      startOfMonth.setDate(1)
      startOfMonth.setHours(0, 0, 0, 0)

      const { count: monthCount } = await supabase
        .from('calls')
        .select('id', { count: 'exact', head: true })
        .eq('artisan_id', artisan.id)
        .gte('created_at', startOfMonth.toISOString())

      const count = monthCount ?? 0
      const resendKey = Deno.env.get('RESEND_API_KEY')

      if (count >= SOLO_LIMIT) {
        // Désactiver l'assistante IA
        await supabase.from('profiles').update({ vapi_enabled: false }).eq('id', artisan.id)

        // Email : limite atteinte
        if (resendKey && artisan.email) {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
              from: 'Fixlyy <support@fixlyy.fr>',
              to: [artisan.email],
              subject: '🚫 Limite d\'appels atteinte — votre assistante est en pause',
              html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#fff">
  <img src="https://app.fixlyy.fr/logo-icon.png" alt="Fixlyy" style="height:32px;margin-bottom:24px"/>
  <div style="background:#FEE2E2;border-left:4px solid #EF4444;padding:12px 16px;border-radius:4px;margin-bottom:20px">
    <strong style="color:#B91C1C">Votre assistante est temporairement en pause</strong>
  </div>
  <p style="color:#374151;font-size:14px;line-height:1.6">
    Vous avez atteint la limite de <strong>${SOLO_LIMIT} appels</strong> inclus dans votre forfait Solo ce mois-ci.
    Votre assistante IA ne répondra plus aux appels jusqu'au 1er du mois prochain.
  </p>
  <p style="color:#374151;font-size:14px;line-height:1.6;margin-top:12px">
    Pour continuer sans interruption, passez au forfait <strong>Pro (149€/mois)</strong> — appels illimités.
  </p>
  <a href="https://app.fixlyy.fr" style="display:inline-block;background:#2850c8;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;margin-top:20px">
    Passer au forfait Pro →
  </a>
  <p style="margin-top:32px;font-size:12px;color:#9CA3AF">Questions ? Répondez à cet email ou écrivez à support@fixlyy.fr</p>
</div>`,
            }),
          }).catch(e => console.error('Resend limit-reached error:', e))
        }
      } else if (count === WARN_AT) {
        // Email : avertissement 80%
        if (resendKey && artisan.email) {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({
              from: 'Fixlyy <support@fixlyy.fr>',
              to: [artisan.email],
              subject: '⚠️ Vous approchez de votre limite d\'appels',
              html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#fff">
  <img src="https://app.fixlyy.fr/logo-icon.png" alt="Fixlyy" style="height:32px;margin-bottom:24px"/>
  <div style="background:#FFFBEB;border-left:4px solid #F59E0B;padding:12px 16px;border-radius:4px;margin-bottom:20px">
    <strong style="color:#92400E">Vous avez utilisé ${WARN_AT} appels sur ${SOLO_LIMIT} ce mois-ci</strong>
  </div>
  <p style="color:#374151;font-size:14px;line-height:1.6">
    Il vous reste <strong>${SOLO_LIMIT - WARN_AT} appels</strong> inclus dans votre forfait Solo.
    Passé cette limite, votre assistante sera mise en pause jusqu'au 1er du mois.
  </p>
  <p style="color:#374151;font-size:14px;line-height:1.6;margin-top:12px">
    Passez au forfait <strong>Pro (149€/mois)</strong> pour des appels illimités.
  </p>
  <a href="https://app.fixlyy.fr" style="display:inline-block;background:#2850c8;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;margin-top:20px">
    Voir mon abonnement →
  </a>
  <p style="margin-top:32px;font-size:12px;color:#9CA3AF">Questions ? Écrivez à support@fixlyy.fr</p>
</div>`,
            }),
          }).catch(e => console.error('Resend warning error:', e))
        }
      }
    }
    // ── Fin limites d'appels ─────────────────────────────────────────────────

    // Créer ou mettre à jour le contact
    if (callerPhone) {
      const { data: existing } = await supabase
        .from('contacts')
        .select('id, name')
        .eq('user_id', artisan.id)
        .eq('phone', callerPhone)
        .maybeSingle()

      if (!existing) {
        await supabase.from('contacts').insert({
          user_id: artisan.id,
          name: callerName || callerPhone,
          phone: callerPhone,
          address: callerAddress,
        })
      } else if (callerName && existing.name === callerPhone) {
        await supabase.from('contacts').update({
          name: callerName,
          ...(callerAddress ? { address: callerAddress } : {}),
        }).eq('id', existing.id)
      }
    }

    // Normaliser le téléphone en E.164 (+33...)
    const normalizePhone = (p: string) => {
      const digits = p.replace(/\s/g, '')
      if (digits.startsWith('+')) return digits
      if (digits.startsWith('0')) return '+33' + digits.slice(1)
      return '+33' + digits
    }

    // Envoyer le SMS récapitulatif à l'artisan
    if (artisan.phone && artisan.twilio_number) {
      const artisanPhone = normalizePhone(artisan.phone)
      const callerInfo = callerName
        ? `${callerName}${callerPhone ? ` (${callerPhone})` : ''}`
        : callerPhone || 'Numéro inconnu'

      const urgentTag = status === 'urgent' ? '🚨 URGENT — ' : ''
      const durationStr = duration ? ` | ${Math.round(duration / 60)} min` : ''

      const summaryShort = summary
        ? summary.length > 250 ? summary.slice(0, 247) + '...' : summary
        : 'Aucun résumé disponible.'

      const smsBody =
        `${urgentTag}📞 ${artisan.assistant_name || 'Emily'} a répondu à un appel${durationStr}\n` +
        `De : ${callerInfo}\n\n` +
        `${summaryShort}\n\n` +
        `→ Répondre sur fixlyy.fr`

      await sendSMS(artisanPhone, artisan.twilio_number, smsBody)
    }

    // Envoyer email de notification via Resend
    const resendKey = Deno.env.get('RESEND_API_KEY')
    const artisanEmail = artisan.email
    if (resendKey && artisanEmail && !isProspection) {
      const callerInfo = callerName
        ? `${callerName}${callerPhone ? ` · ${callerPhone}` : ''}`
        : callerPhone || 'Numéro inconnu'
      const isUrgent = status === 'urgent'
      const subjectPrefix = isUrgent ? '🚨 URGENT — ' : '📞 '
      const urgentBanner = isUrgent
        ? `<div style="background:#FEE2E2;border-left:4px solid #EF4444;padding:12px 16px;border-radius:4px;margin-bottom:16px">
            <strong style="color:#B91C1C">⚠️ Intervention urgente demandée</strong>
           </div>`
        : ''
      const rows = [
        callerName   ? `<tr><td style="padding:8px 0;color:#6B7280;font-size:13px">Nom</td><td style="padding:8px 0;font-size:13px;font-weight:600">${callerName}</td></tr>` : '',
        callerPhone  ? `<tr><td style="padding:8px 0;color:#6B7280;font-size:13px">Téléphone</td><td style="padding:8px 0;font-size:13px"><a href="tel:${callerPhone}" style="color:#2850c8">${callerPhone}</a></td></tr>` : '',
        structuredData.caller_address ? `<tr><td style="padding:8px 0;color:#6B7280;font-size:13px">Adresse</td><td style="padding:8px 0;font-size:13px">${structuredData.caller_address}</td></tr>` : '',
        serviceRequested ? `<tr><td style="padding:8px 0;color:#6B7280;font-size:13px">Motif</td><td style="padding:8px 0;font-size:13px">${serviceRequested}</td></tr>` : '',
        structuredData.callback_availability ? `<tr><td style="padding:8px 0;color:#6B7280;font-size:13px">Disponibilités</td><td style="padding:8px 0;font-size:13px">${structuredData.callback_availability}</td></tr>` : '',
      ].filter(Boolean).join('')

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: `${artisan.assistant_name || 'Mia'} de Fixlyy <mia@fixlyy.fr>`,
          to: [artisanEmail],
          subject: `${subjectPrefix}Appel de ${callerInfo}`,
          html: `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;background:#fff">
  <div style="margin-bottom:24px">
    <img src="https://app.fixlyy.fr/logo-icon.png" alt="Fixlyy" style="height:32px"/>
  </div>

  ${urgentBanner}

  <h2 style="font-size:18px;font-weight:700;color:#111;margin:0 0 4px">Nouvel appel reçu</h2>
  <p style="color:#6B7280;font-size:13px;margin:0 0 24px">
    ${new Date().toLocaleDateString('fr-FR', { weekday:'long', day:'numeric', month:'long' })} · ${new Date().toLocaleTimeString('fr-FR', { hour:'2-digit', minute:'2-digit' })}
  </p>

  <table style="width:100%;border-collapse:collapse;border-top:1px solid #F3F4F6;margin-bottom:24px">
    ${rows}
  </table>

  ${summary ? `
  <div style="background:#F9FAFB;border-radius:8px;padding:16px;margin-bottom:24px">
    <p style="font-size:12px;font-weight:600;color:#6B7280;text-transform:uppercase;letter-spacing:.05em;margin:0 0 8px">Résumé de l'appel</p>
    <p style="font-size:14px;color:#374151;margin:0;line-height:1.6">${summary}</p>
  </div>` : ''}

  <a href="https://app.fixlyy.fr" style="display:inline-block;background:#2850c8;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px">
    Voir l'appel dans Fixlyy →
  </a>

  <p style="margin-top:32px;font-size:12px;color:#9CA3AF">
    Cet email a été envoyé automatiquement par ${artisan.assistant_name || 'Mia'}, votre secrétaire IA Fixlyy.<br/>
    ${artisan.company_name || ''}
  </p>
</div>`,
        }),
      }).catch(e => console.error('Resend error:', e))
    }
  }

  // ── status-update : log uniquement ──────────────────────────────────────────
  if (type === 'status-update') {
    console.log('Call status update:', body.message?.status)
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { ...CORS, 'Content-Type': 'application/json' },
  })
})
