import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Phone, Check, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';
const DEMO_NUMBER   = '09 39 24 70 81';
const DEMO_TEL      = 'tel:+33939247081';
const SUPABASE_URL  = 'https://hxkpmmekaotwmzgqxafp.supabase.co';

/* ─── Scarcity system ─── */
const FAKE_SIGNUPS = [
  { name: 'Martin',  trade: 'Plombier',     city: 'Lyon' },
  { name: 'Thomas',  trade: 'Électricien',  city: 'Marseille' },
  { name: 'Léa',     trade: 'Peintre',      city: 'Bordeaux' },
  { name: 'Kevin',   trade: 'Serrurier',    city: 'Toulouse' },
  { name: 'David',   trade: 'Chauffagiste', city: 'Nantes' },
  { name: 'Sophie',  trade: 'Maçon',        city: 'Lille' },
  { name: 'Julien',  trade: 'Garagiste',    city: 'Strasbourg' },
  { name: 'Ahmed',   trade: 'Menuisier',    city: 'Nice' },
  { name: 'Pierre',  trade: 'Plombier',     city: 'Rennes' },
  { name: 'Marie',   trade: 'Électricienne',city: 'Montpellier' },
  { name: 'Karim',   trade: 'Serrurier',    city: 'Paris' },
  { name: 'Lucas',   trade: 'Chauffagiste', city: 'Grenoble' },
]

function useSocialProof() {
  const [remaining, setRemaining] = useState(10)
  const [loaded, setLoaded]       = useState(false)

  useEffect(() => {
    fetch(`${SUPABASE_URL}/functions/v1/get-slots-remaining`)
      .then(r => r.json())
      .then(d => { setRemaining(d.remaining ?? 10); setLoaded(true) })
      .catch(() => { setRemaining(10); setLoaded(true) })
  }, [])

  const decrement = useCallback(() => setRemaining(p => Math.max(1, p - 1)), [])
  return { remaining, loaded, decrement }
}

function ScarcityBadge({ remaining, loaded }) {
  const [display, setDisplay] = useState(remaining)
  const [flash, setFlash]     = useState(false)
  const prevRef               = useRef(remaining)

  useEffect(() => {
    if (remaining !== prevRef.current) {
      setFlash(true)
      const t = setTimeout(() => { setDisplay(remaining); setFlash(false) }, 200)
      prevRef.current = remaining
      return () => clearTimeout(t)
    } else {
      setDisplay(remaining)
    }
  }, [remaining])

  if (!loaded) return null

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '9px 16px', borderRadius: 10,
      background: 'rgba(251,146,60,0.10)', border: '1px solid rgba(251,146,60,0.38)',
      animation: 'scarcityPulse 2.5s ease-in-out infinite',
    }}>
      <span style={{ fontSize: 15 }}>⚠️</span>
      <span style={{ fontSize: 13, fontWeight: 700, color: '#FB923C' }}>
        Il ne reste que{' '}
        <span style={{ animation: flash ? 'scarcityFlash 0.4s ease' : 'none', display: 'inline-block' }}>
          {display}
        </span>
        {' '}place{display > 1 ? 's' : ''} ce mois-ci — Prix fondateurs{' '}
        <strong style={{ color: '#0D1117' }}>197€</strong>
      </span>
    </div>
  )
}

function SocialProofToast({ onDecrement }) {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(null)
  const lastIdx  = useRef(-1)
  const timerRef = useRef(null)
  const aliveRef = useRef(true)

  const scheduleNext = useCallback(() => {
    const delay = 25_000 + Math.random() * 20_000
    timerRef.current = setTimeout(() => {
      if (!aliveRef.current) return
      let idx
      do { idx = Math.floor(Math.random() * FAKE_SIGNUPS.length) }
      while (idx === lastIdx.current)
      lastIdx.current = idx
      setCurrent(FAKE_SIGNUPS[idx])
      setVisible(true)
      setTimeout(() => { if (aliveRef.current) onDecrement() }, 2_000)
      setTimeout(() => { if (!aliveRef.current) return; setVisible(false); scheduleNext() }, 4_000)
    }, delay)
  }, [onDecrement])

  useEffect(() => {
    aliveRef.current = true
    scheduleNext()
    return () => { aliveRef.current = false; if (timerRef.current) clearTimeout(timerRef.current) }
  }, [scheduleNext])

  if (!visible || !current) return null

  return (
    <div style={{
      position: 'fixed', bottom: 24, left: 24, zIndex: 9999,
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 16px', borderRadius: 12,
      background: '#1A1A2E', border: '1px solid #3B5BFA',
      color: '#fff', boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      animation: 'spSlideIn 0.35s ease', maxWidth: 320,
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
        background: 'linear-gradient(135deg,#4A6EFF,#3B5BF5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 900, fontSize: 14,
      }}>
        {current.name.charAt(0)}
      </div>
      <div>
        <p style={{ fontSize: 13, fontWeight: 600, margin: 0, lineHeight: 1.3 }}>
          ✅ {current.name} ({current.trade}, {current.city})
        </p>
        <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', margin: 0 }}>
          vient de rejoindre Fixlyy
        </p>
      </div>
    </div>
  )
}

const TESTIMONIALS = [
  {
    photo: 'https://randomuser.me/api/portraits/men/54.jpg',
    name: 'Karim B.', job: 'Plombier', city: 'Paris 15e',
    color: '#3B5BF5', size: 'large',
    result: '+2 clients récupérés ce mois',
    quote: "Je ratais 3-4 appels par jour en chantier. Depuis Mia, j'ai récupéré 2 nouveaux clients fixes. Je rappelle avec le contexte complet — les clients sont bluffés.",
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/10.jpg',
    name: 'Stéphane M.', job: 'Électricien', city: 'Lyon',
    color: '#10B981', size: 'small',
    result: 'Contrat signé à 23h',
    quote: "Mia a répondu à 23h pour une panne urgente. Contrat signé le lendemain. Sans elle, il appelait le concurrent.",
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/91.jpg',
    name: 'Rachid O.', job: 'Serrurier', city: 'Marseille',
    color: '#F59E0B', size: 'small',
    result: '+30% CA en 2 mois',
    quote: "Je perdais des appels pendant mes interventions. Depuis Mia, +30% de CA en 2 mois. Elle qualifie parfaitement les urgences.",
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/14.jpg',
    name: 'Jean-Paul T.', job: 'Peintre', city: 'Bordeaux',
    color: '#8B5CF6', size: 'large',
    result: 'Image pro transformée',
    quote: "Mes clients pensent que j'ai une vraie secrétaire. L'un d'eux m'a dit 'votre assistante est très professionnelle'. Ça change tout pour décrocher des gros chantiers.",
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: 'Mokhtar A.', job: 'Chauffagiste', city: 'Toulouse',
    color: '#EF4444', size: 'large',
    result: '0 appel raté la nuit',
    quote: "Les urgences chauffage arrivent la nuit. Mia décroche, qualifie, m'envoie un SMS. Le matin j'ai tout le contexte. Depuis janvier, 0 appel raté.",
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/94.jpg',
    name: 'Sébastien R.', job: 'Maçon', city: 'Nantes',
    color: '#06B6D4', size: 'small',
    result: '4 devis de plus',
    quote: "J'étais sceptique. 3 semaines plus tard : 4 devis supplémentaires. Je savais pas que j'avais autant d'appels manqués.",
  },
];

const METIERS = [
  { label: 'Plombier',      emoji: '🔧', appels: 7,  manques: 35, conversion: 15, panier: 280  },
  { label: 'Électricien',   emoji: '⚡', appels: 6,  manques: 35, conversion: 12, panier: 350  },
  { label: 'Serrurier',     emoji: '🔑', appels: 10, manques: 40, conversion: 22, panier: 150  },
  { label: 'Chauffagiste',  emoji: '🔥', appels: 6,  manques: 35, conversion: 15, panier: 380  },
  { label: 'Peintre',       emoji: '🎨', appels: 4,  manques: 30, conversion: 12, panier: 1200 },
  { label: 'Maçon',         emoji: '🧱', appels: 4,  manques: 30, conversion: 10, panier: 2500 },
  { label: 'Menuisier',     emoji: '🪵', appels: 4,  manques: 30, conversion: 10, panier: 850  },
  { label: 'Carreleur',     emoji: '🪟', appels: 3,  manques: 25, conversion: 10, panier: 750  },
];

const PRIX_MIA = 497;
const TAUX_RECUPERATION = 0.70; // Mia récupère 70% des appels manqués

/* ─── Simulateur de ROI ─── */
function ROICalculator() {
  const [metierIdx, setMetierIdx] = useState(0);
  const m = METIERS[metierIdx];
  const [appels, setAppels] = useState(m.appels);
  const [panier, setPanier] = useState(m.panier);
  const [joursOuvres, setJoursOuvres] = useState(20);

  useEffect(() => {
    setAppels(METIERS[metierIdx].appels);
    setPanier(METIERS[metierIdx].panier);
  }, [metierIdx]);


  const appelsManques   = Math.round(appels * joursOuvres * (m.manques / 100));
  const chantiersPerdus = Math.round(appelsManques * (m.conversion / 100) * 10) / 10;
  const perteMensuelle  = Math.round(chantiersPerdus * panier);
  const gainAvecMia     = Math.round(perteMensuelle * TAUX_RECUPERATION);
  const benéficeNet     = gainAvecMia - PRIX_MIA;
  const roiX            = Math.round(gainAvecMia / PRIX_MIA * 10) / 10;

  const fmt = n => n >= 1000 ? `${(n / 1000).toFixed(1)}k€` : `${n}€`;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E0E7FF',
        boxShadow: '0 4px 24px rgba(59,91,245,0.08)',
      }}
    >
      {/* Titre compact */}
      <div className="px-5 pt-5 pb-3" style={{ borderBottom: '1px solid #EEF2FF' }}>
        <p className="text-xs font-black uppercase tracking-widest mb-0.5" style={{ color: '#F87171' }}>
          💸 Simulateur de pertes
        </p>
        <p className="font-black text-[#0D1117] text-base">
          Combien tu perds <span style={{ color: '#F87171' }}>sans Mia</span> ?
        </p>
      </div>

      <div className="p-5 space-y-4">
        {/* Sélecteur métier */}
        <div className="flex flex-wrap gap-1.5">
          {METIERS.map((met, i) => (
            <button
              key={met.label}
              onClick={() => setMetierIdx(i)}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-150"
              style={i === metierIdx ? {
                background: '#3B5BFA', color: '#fff', border: '1px solid #3B5BFA',
              } : {
                background: '#EEF2FF', color: '#4B5563',
                border: '1px solid #C7D2FE',
              }}
            >
              {met.emoji} {met.label}
            </button>
          ))}
        </div>

        {/* Sliders */}
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs" style={{ color: '#6B7280' }}>Appels ratés / jour</span>
              <span className="font-black text-sm text-[#0D1117]">{appels}</span>
            </div>
            <input type="range" min={3} max={20} value={appels}
              onChange={e => setAppels(Number(e.target.value))}
              className="w-full appearance-none cursor-pointer roi-slider" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs" style={{ color: '#6B7280' }}>Jours ouvrés / mois</span>
              <span className="font-black text-sm text-[#0D1117]">{joursOuvres}</span>
            </div>
            <input type="range" min={15} max={25} value={joursOuvres}
              onChange={e => setJoursOuvres(Number(e.target.value))}
              className="w-full appearance-none cursor-pointer roi-slider" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs" style={{ color: '#6B7280' }}>Panier moyen</span>
              <span className="font-black text-sm text-[#0D1117]">{fmt(panier)}</span>
            </div>
            <input type="range" min={100} max={5000} step={50} value={panier}
              onChange={e => setPanier(Number(e.target.value))}
              className="w-full appearance-none cursor-pointer roi-slider" />
          </div>
        </div>

        {/* Résultats — 3 blocs compacts */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl p-3 text-center"
            style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.15)' }}>
            <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: 'rgba(248,113,113,0.6)' }}>Pertes</p>
            <p className="font-black text-lg leading-none" style={{ color: '#F87171' }}>{fmt(perteMensuelle)}</p>
            <p className="text-[10px] mt-0.5" style={{ color: '#9CA3AF' }}>/mois</p>
          </div>
          <div className="rounded-xl p-3 text-center"
            style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.15)' }}>
            <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: 'rgba(52,211,153,0.6)' }}>Avec Mia</p>
            <p className="font-black text-lg leading-none" style={{ color: '#34D399' }}>+{fmt(gainAvecMia)}</p>
            <p className="text-[10px] mt-0.5" style={{ color: '#9CA3AF' }}>/mois</p>
          </div>
          <div className="rounded-xl p-3 text-center"
            style={{ background: 'rgba(59,91,245,0.08)', border: '1px solid rgba(59,91,245,0.18)' }}>
            <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: 'rgba(124,159,255,0.6)' }}>ROI</p>
            <p className="font-black text-lg leading-none" style={{ color: '#7C9FFF' }}>{roiX}×</p>
            <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>invest.</p>
          </div>
        </div>

        {/* CTA */}
        <motion.a
          href={COMMENCER_URL}
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center gap-2 text-white font-black text-sm px-5 py-3 rounded-xl w-full"
          style={{ background: 'linear-gradient(135deg,#4A6EFF,#3B5BF5)', boxShadow: '0 0 24px rgba(59,91,245,0.35)' }}
        >
          Récupérer mes chantiers perdus <ArrowRight className="w-4 h-4" />
        </motion.a>
        <p className="text-center text-[10px]" style={{ color: '#9CA3AF' }}>
          7 jours gratuits · Aucune CB avant le 8ème jour
        </p>
      </div>
    </motion.div>
  );
}

const STATS = [
  { value: 47,    suffix: '',    label: 'artisans actifs' },
  { value: 1200,  suffix: '+',   label: 'appels traités' },
  { value: 4.9,   suffix: '★',   label: 'satisfaction' },
  { value: 2,     suffix: 's',   label: 'décroche en' },
];

/* ─── Counter animé ─── */
function Counter({ value, suffix }) {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true });
  const mv   = useMotionValue(0);
  const sp   = useSpring(mv, { stiffness: 80, damping: 22 });
  const [display, setDisplay] = useState(0);

  useEffect(() => { if (inView) mv.set(value); }, [inView]);
  useEffect(() => sp.on('change', v => setDisplay(v)), [sp]);

  const fmt = n => Number.isInteger(value) ? Math.round(n) : n.toFixed(1);

  return <span ref={ref}>{fmt(display)}{suffix}</span>;
}

/* ─── Widget démo avec capture lead ─── */
function DemoWidget() {
  const [step, setStep]   = useState('form'); // form | loading | success
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [err, setErr]     = useState('');

  async function submit(e) {
    e.preventDefault();
    if (!email) { setErr('Votre email est requis.'); return; }
    if (!phone) { setErr("Votre numéro est requis pour lancer l'appel."); return; }
    setErr('');
    setStep('loading');
    try {
      await fetch(`${SUPABASE_URL}/functions/v1/capture-demo-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone }),
      });
    } catch {}
    setStep('success');
  }

  const glassCard = {
    background: '#FFFFFF',
    border: '1px solid #E0E7FF',
    boxShadow: '0 4px 40px rgba(59,91,245,0.10)',
  };

  if (step === 'success') return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl overflow-hidden mx-auto"
      style={{ ...glassCard, maxWidth: 420 }}
    >
      <div className="px-7 py-8 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}>
          <Check className="w-7 h-7 text-emerald-400" />
        </div>
        <p className="font-black text-xl mb-1 text-[#0D1117]">C'est noté !</p>
        <p className="text-sm mb-6" style={{ color: '#6B7280' }}>
          Appelez maintenant — Mia va répondre comme pour un vrai client.
        </p>
        <a
          href={DEMO_TEL}
          className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-black text-white text-xl transition-all"
          style={{ background: 'linear-gradient(135deg,#4A6EFF,#3B5BF5)', boxShadow: '0 0 40px rgba(59,91,245,0.45)' }}
        >
          <Phone className="w-5 h-5" />
          {DEMO_NUMBER}
        </a>
        <p className="text-xs mt-4" style={{ color: '#9CA3AF' }}>
          Durée ~2 min · Mia parle comme avec un vrai artisan
        </p>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="rounded-2xl overflow-hidden mx-auto"
      style={{ ...glassCard, maxWidth: 420 }}
    >
      {/* Header widget */}
      <div className="px-6 pt-6 pb-4" style={{ borderBottom: '1px solid #EEF2FF' }}>
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white"
              style={{ background: 'linear-gradient(135deg,#4A6EFF,#3B5BF5)' }}>
              M
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 animate-pulse"
              style={{ borderColor: '#FFFFFF' }} />
          </div>
          <div>
            <p className="font-bold text-sm text-[#0D1117]">Testez Mia en direct</p>
            <p className="text-xs text-emerald-600">Disponible maintenant · Gratuit</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={submit} className="px-6 py-5 flex flex-col gap-3">
        <p className="text-sm mb-1" style={{ color: '#6B7280' }}>
          Laissez vos coordonnées pour lancer un vrai appel de démo.
        </p>

        <input
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl text-sm text-[#0D1117] outline-none transition-all"
          style={{
            background: '#F5F7FF',
            border: '1px solid #D1D9FF',
          }}
          onFocus={e => e.target.style.border = '1px solid #3B5BFA'}
          onBlur={e => e.target.style.border = '1px solid #D1D9FF'}
        />

        <input
          type="tel"
          placeholder="06 12 34 56 78"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl text-sm text-[#0D1117] outline-none transition-all"
          style={{
            background: '#F5F7FF',
            border: '1px solid #D1D9FF',
          }}
          onFocus={e => e.target.style.border = '1px solid #3B5BFA'}
          onBlur={e => e.target.style.border = '1px solid #D1D9FF'}
        />

        {err && <p className="text-red-400 text-xs">{err}</p>}

        <button
          type="submit"
          disabled={step === 'loading'}
          className="w-full py-3.5 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all mt-1"
          style={{
            background: step === 'loading' ? 'rgba(59,91,245,0.5)' : 'linear-gradient(135deg,#4A6EFF,#3B5BF5)',
            boxShadow: step === 'loading' ? 'none' : '0 0 30px rgba(59,91,245,0.4)',
          }}
        >
          {step === 'loading' ? (
            <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Chargement…</>
          ) : (
            <><Phone className="w-4 h-4" /> Lancer l'appel avec Mia →</>
          )}
        </button>

        <p className="text-center text-xs" style={{ color: '#9CA3AF' }}>
          100% gratuit · ~2 min · Sans engagement
        </p>
      </form>
    </motion.div>
  );
}

/* ─── Bento testimonials ─── */
function TestimonialCard({ t, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="rounded-2xl p-5 flex flex-col gap-4 h-full cursor-default"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E0E7FF',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        boxShadow: '0 2px 12px rgba(59,91,245,0.05)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${t.color}50`;
        e.currentTarget.style.boxShadow = `0 4px 24px ${t.color}18`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#E0E7FF';
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(59,91,245,0.05)';
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={t.photo}
          alt={t.name}
          loading="lazy"
          decoding="async"
          className="w-11 h-11 rounded-full object-cover flex-shrink-0"
          style={{ border: `2px solid ${t.color}40` }}
        />
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-bold text-sm text-[#0D1117]">{t.name}</p>
            <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold"
              style={{ background: `${t.color}18`, color: t.color }}>
              {t.job}
            </span>
          </div>
          <p className="text-[11px]" style={{ color: '#9CA3AF' }}>{t.city}</p>
        </div>
      </div>

      {/* Result badge */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg w-fit"
        style={{ background: `${t.color}14` }}>
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: t.color }} />
        <p className="text-xs font-bold" style={{ color: t.color }}>{t.result}</p>
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: '#374151' }}>
        "{t.quote}"
      </p>
    </motion.div>
  );
}

/* ─── Page principale ─── */
export default function Home() {
  const { remaining, loaded, decrement } = useSocialProof()

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#F5F7FF', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ── Ambient background — léger sur fond clair ── */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[200px]"
          style={{ background: 'radial-gradient(ellipse, rgba(59,91,245,0.06) 0%, transparent 70%)' }} />
      </div>

      {/* ── Logo ── */}
      <div className="relative pt-8 pb-2 text-center">
        <a href="/"><img src="/logo-full-clean.svg" alt="Fixlyy" className="h-14 w-auto mx-auto" /></a>
      </div>

      {/* ── HERO ── */}
      <section className="relative max-w-4xl mx-auto px-5 text-center pt-10 pb-16">

        {/* H1 — VSL — ligne fluide sans <br> forcé */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="font-black mb-6"
          style={{ fontSize: 'clamp(1.1rem, 1.58vw, 1.38rem)', lineHeight: 1.5 }}
        >
          <span style={{
            background: '#EEF2FF',
            color: '#3B5BFA',
            borderRadius: '6px',
            padding: '2px 10px',
            display: 'inline',
            marginRight: '6px',
          }}>
            [VIDÉO EXCLUSIVE]
          </span>
          <span style={{ color: '#0D1117' }}>Pourquoi Ton Téléphone Te Coûte </span>
          <span style={{
            color: '#3B5BFA',
            fontSize: '1.2em',
            fontWeight: 900,
          }}>12 000€ / Mois</span>
          <span style={{ color: '#0D1117' }}> Sans Que Tu T'en Rendes Compte</span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14 }}
          className="text-lg leading-relaxed mb-8 max-w-lg mx-auto"
          style={{ color: '#6B7280' }}
        >
          Regarde cette courte vidéo maintenant :
        </motion.p>

        {/* Player vidéo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mx-auto mb-10"
          style={{ maxWidth: '800px' }}
        >
          <div
            className="relative w-full flex flex-col items-center justify-center cursor-pointer"
            style={{
              aspectRatio: '16 / 9',
              background: '#000000',
              borderRadius: '12px',
              boxShadow: '0 0 60px rgba(59,91,250,0.30), 0 0 120px rgba(59,91,250,0.12)',
              border: '1px solid rgba(59,91,250,0.20)',
            }}
          >
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 72,
                height: 72,
                background: 'rgba(255,255,255,0.12)',
                border: '2px solid rgba(255,255,255,0.30)',
                marginBottom: '12px',
              }}
            >
              <Play className="w-8 h-8 text-white" fill="white" />
            </div>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
              La vidéo arrive bientôt
            </p>
          </div>
        </motion.div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href="/commencer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 text-white font-black text-base px-10 py-4 rounded-xl w-full"
            style={{
              background: 'linear-gradient(135deg,#4A6EFF,#3B5BFA)',
              boxShadow: '0 0 40px rgba(59,91,250,0.45)',
              maxWidth: 420,
            }}
          >
            Essayer Mia 7 jours gratuits <ArrowRight className="w-4 h-4" />
          </motion.a>

          <ScarcityBadge remaining={remaining} loaded={loaded} />

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs" style={{ color: '#9CA3AF' }}>
            {[
              '✓ 7 jours gratuits',
              '✓ Aucune carte débitée avant le 8ème jour',
              '✓ Engagement 3 mois après l\'essai',
            ].map(l => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── DEMO + ROI CÔTE À CÔTE ── */}
      <section className="relative max-w-6xl mx-auto px-5 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Colonne gauche — Demo widget */}
          <div>
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: '#EEF2FF', border: '1px solid #C7D2FE', color: '#3B5BFA' }}
              >
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                />
                47 artisans actifs en ce moment
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <DemoWidget />
            </motion.div>
          </div>

          {/* Colonne droite — Simulateur ROI */}
          <div>
            <ROICalculator />
          </div>

        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="relative py-8" style={{
        borderTop: '1px solid #E0E7FF',
        borderBottom: '1px solid #E0E7FF',
        background: '#EEF2FF',
      }}>
        <div className="max-w-2xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <p className="font-black mb-0.5 text-[#0D1117]" style={{ fontSize: '1.85rem' }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs" style={{ color: '#6B7280' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES BENTO ── */}
      <section className="relative max-w-6xl mx-auto px-5 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: '#3B5BF5' }}>
            Résultats réels
          </p>
          <h2 className="font-black text-[#0D1117]" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
            Ce que disent <span style={{ color: '#3B5BFA' }}>nos artisans</span>
          </h2>
        </motion.div>

        {/* Grille paysage — 3 colonnes égales sur desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TestimonialCard t={TESTIMONIALS[0]} delay={0} />
          <TestimonialCard t={TESTIMONIALS[1]} delay={0.06} />
          <TestimonialCard t={TESTIMONIALS[2]} delay={0.12} />
          <TestimonialCard t={TESTIMONIALS[3]} delay={0.18} />
          <TestimonialCard t={TESTIMONIALS[4]} delay={0.24} />
          <TestimonialCard t={TESTIMONIALS[5]} delay={0.30} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative max-w-xl mx-auto px-5 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl px-8 py-12"
          style={{
            background: '#EEF2FF',
            border: '1px solid #C7D2FE',
          }}
        >
          <h2 className="font-black text-[#0D1117] mb-3" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.6rem)' }}>
            Prêt à ne plus rater<br />
            <span style={{ color: '#3B5BFA' }}>un seul appel ?</span>
          </h2>
          <p className="mb-8 text-sm" style={{ color: '#6B7280' }}>
            7 jours d'essai gratuit — aucune CB débitée avant le 8ème jour.
          </p>
          <motion.a
            href={COMMENCER_URL}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 text-white font-black text-lg px-10 py-4 rounded-xl w-full transition-all"
            style={{
              background: 'linear-gradient(135deg,#4A6EFF,#3B5BF5)',
              boxShadow: '0 0 50px rgba(59,91,245,0.45)',
              maxWidth: 380,
            }}
          >
            Démarrer mon essai gratuit <ArrowRight className="w-5 h-5" />
          </motion.a>
          <div className="flex items-center justify-center gap-6 mt-5 text-xs" style={{ color: '#9CA3AF' }}>
            <span>Engagement 3 mois</span>
            <span>·</span>
            <span>RGPD conforme</span>
            <span>·</span>
            <span>Hébergé en France</span>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER MINIMAL ── */}
      <footer className="py-8 text-center" style={{ borderTop: '1px solid #E0E7FF' }}>
        <img src="/logo-full-clean.svg" alt="Fixlyy" className="h-10 w-auto mx-auto mb-5 opacity-80" />
        <div className="flex items-center justify-center gap-4 text-xs mb-4" style={{ color: '#9CA3AF' }}>
          {[
            { to: '/cgv', label: 'CGV' },
            { to: '/cgu', label: 'CGU' },
            { to: '/confidentialite', label: 'Confidentialité' },
            { to: '/mentions-legales', label: 'Mentions légales' },
          ].map((l, i, arr) => (
            <React.Fragment key={l.to}>
              <Link to={l.to} className="hover:text-[#3B5BFA] transition-colors">{l.label}</Link>
              {i < arr.length - 1 && <span>·</span>}
            </React.Fragment>
          ))}
        </div>
        <p className="text-xs" style={{ color: '#C7D2FE' }}>
          © 2026 Fixlyy · Secrétaire IA pour artisans
        </p>
      </footer>

      <SocialProofToast onDecrement={decrement} />

      {/* ── Gradient animation keyframes ── */}
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scarcityPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.65; }
        }
        @keyframes scarcityFlash {
          0%   { opacity: 1; }
          40%  { opacity: 0.2; }
          100% { opacity: 1; }
        }
        @keyframes spSlideIn {
          from { transform: translateX(-110%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        input::placeholder { color: #9CA3AF; }

        /* Sliders ROI */
        .roi-slider {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          width: 100%;
          height: 20px;
          background: transparent;
          outline: none;
          cursor: pointer;
        }
        .roi-slider::-webkit-slider-runnable-track {
          height: 6px;
          border-radius: 4px;
          background: #C7D2FE;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          margin-top: -7px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3B5BFA;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(59,91,245,0.35), 0 0 0 3px rgba(59,91,245,0.15);
          border: 2px solid #fff;
        }
        .roi-slider::-moz-range-track {
          height: 6px;
          border-radius: 4px;
          background: #C7D2FE;
        }
        .roi-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3B5BFA;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(59,91,245,0.35);
          border: 2px solid #fff;
        }
      `}</style>
    </div>
  );
}
