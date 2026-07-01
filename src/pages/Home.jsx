import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Phone, Check, ArrowRight, ChevronDown } from 'lucide-react';
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
  const countRef = useRef(0)

  const scheduleNext = useCallback(() => {
    if (countRef.current >= 5) return
    const delay = 25_000 + Math.random() * 20_000
    timerRef.current = setTimeout(() => {
      if (!aliveRef.current || countRef.current >= 5) return
      let idx
      do { idx = Math.floor(Math.random() * FAKE_SIGNUPS.length) }
      while (idx === lastIdx.current)
      lastIdx.current = idx
      countRef.current += 1
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
  const [appels, setAppels] = useState(3);
  const [panier, setPanier] = useState(200);
  const [joursOuvres, setJoursOuvres] = useState(20);
  const [tauxSignature, setTauxSignature] = useState(50);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    setAppels(METIERS[metierIdx].appels);
    setPanier(METIERS[metierIdx].panier);
  }, [metierIdx]);

  const appelsMois  = appels * joursOuvres;
  const potentielMax = appelsMois * panier;
  const gainDirect  = Math.round(potentielMax * (tauxSignature / 100));
  const nbClients   = Math.round(appelsMois * (tauxSignature / 100));
  const roiX        = Math.round(gainDirect / PRIX_MIA * 10) / 10;

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
          <div>
            <div className="mb-1">
              <p className="text-xs" style={{ color: '#6B7280' }}>
                Sur ces <span className="font-black" style={{ color: '#0D1117' }}>{appelsMois}</span> appels manqués, combien tu penses pouvoir en signer avec Mia ?
              </p>
              <p className="text-xs font-black mt-0.5" style={{ color: '#0D1117' }}>
                {tauxSignature}% — soit {nbClients} clients/mois
              </p>
            </div>
            <input type="range" min={10} max={100} step={5} value={tauxSignature}
              onChange={e => setTauxSignature(Number(e.target.value))}
              className="w-full appearance-none cursor-pointer roi-slider" />
          </div>
        </div>

        {/* Résultats — 3 blocs compacts */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl p-3 text-center"
            style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.15)' }}>
            <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: 'rgba(248,113,113,0.6)' }}>Pertes</p>
            <p className="font-black text-lg leading-none" style={{ color: '#F87171' }}>{fmt(potentielMax)}</p>
            <p className="text-[10px] mt-0.5" style={{ color: '#9CA3AF' }}>/mois</p>
          </div>
          <div className="rounded-xl p-3 text-center"
            style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.15)' }}>
            <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: 'rgba(52,211,153,0.6)' }}>Gain direct</p>
            <p className="font-black text-lg leading-none" style={{ color: '#34D399' }}>+{fmt(gainDirect)}</p>
            <p className="text-[10px] mt-0.5" style={{ color: '#9CA3AF' }}>1er mois</p>
          </div>
          <div className="rounded-xl p-3 text-center"
            style={{ background: 'rgba(59,91,245,0.08)', border: '1px solid rgba(59,91,245,0.18)' }}>
            <p className="text-[10px] font-semibold uppercase mb-1" style={{ color: 'rgba(124,159,255,0.6)' }}>ROI</p>
            <p className="font-black text-lg leading-none" style={{ color: '#7C9FFF' }}>{roiX}×</p>
            <p className="text-[10px] mt-0.5" style={{ color: '#9CA3AF' }}>invest.</p>
          </div>
        </div>

        {/* Phrase dynamique */}
        <p className="text-xs text-center leading-relaxed" style={{ color: '#6B7280' }}>
          Sur tes <strong style={{ color: '#0D1117' }}>{appelsMois}</strong> appels manqués par mois, si tu en signes{' '}
          <strong style={{ color: '#0D1117' }}>{tauxSignature}%</strong> ({nbClients} clients), c'est{' '}
          <strong style={{ color: '#059669' }}>+{fmt(gainDirect)}</strong> dès le premier mois.
        </p>

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
  { value: 47,    suffix: '',    label: 'artisans actifs', color: '#3B5BFA' },
  { value: 1200,  suffix: '+',   label: 'appels traités',  color: '#10B981' },
  { value: 4.9,   suffix: '★',   label: 'satisfaction',    color: '#F59E0B' },
  { value: 2,     suffix: 's',   label: 'décroche en',     color: '#8B5CF6' },
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
  const [openFaq, setOpenFaq] = useState(null)

  const FAQ_ITEMS = [
    {
      q: "Comment fonctionne le renvoi d'appel ?",
      a: "Tu fais un simple renvoi d'appel depuis ton téléphone vers ton numéro Fixlyy. Ça prend 2 minutes. Si tu n'as qu'un numéro perso, tu peux aussi mettre directement ton numéro Fixlyy sur Google, Pages Jaunes, ou ton site.",
    },
    {
      q: "Est-ce que Mia comprend vraiment mon métier ?",
      a: "Oui. Lors de l'activation, tu présentes ton activité à Mia — tes tarifs, ton équipe, tes types d'interventions, tes clients réguliers. Plus elle en sait, plus elle travaille comme si elle bossait avec toi depuis des années.",
    },
    {
      q: "Qu'est-ce qui se passe pendant les 7 jours gratuits ?",
      a: "Mia est active sur ton numéro dès la première heure. Tu reçois les récaps SMS de chaque appel. Aucune carte n'est débitée avant le 8ème jour. Tu peux annuler à tout moment pendant cette période.",
    },
    {
      q: "Est-ce que je peux garder mon numéro habituel ?",
      a: "Oui. Tu n'as pas besoin de changer de numéro. Tu fais juste un renvoi d'appel vers ton numéro Fixlyy. Tes clients continuent d'appeler le même numéro qu'avant.",
    },
    {
      q: "Que se passe-t-il si c'est une urgence ?",
      a: "Mia détecte automatiquement les urgences. Elle te transfère l'appel directement sur ton mobile — et t'envoie une alerte SMS en même temps.",
    },
    {
      q: "Comment résilier ?",
      a: "L'engagement est de 3 mois minimum. Après cette période, tu peux résilier à tout moment depuis ton dashboard, sans frais ni justification.",
    },
  ]

  const FEATURES_GRID = [
    { icon: '🌙', title: 'Disponible 24h/24', desc: "Même le dimanche à 23h. Tes clients urgences sont toujours pris en charge." },
    { icon: '🌍', title: '10 langues', desc: "Français, anglais, arabe, espagnol, portugais, allemand, italien, néerlandais, polonais, russe." },
    { icon: '📱', title: 'SMS récap en 30 secondes', desc: "Après chaque appel — nom, numéro, problème, adresse, urgence, disponibilité." },
    { icon: '🚨', title: 'Transfert urgences', desc: "Mia détecte les urgences et te transfère l'appel direct sur ton mobile." },
    { icon: '📊', title: 'Rapport hebdomadaire', desc: "Chaque lundi matin — stats, appels, récap de la semaine." },
    { icon: '🔄', title: 'Rappel automatique', desc: "Client qui a raccroché ? Mia le rappelle automatiquement 5 minutes après." },
    { icon: '🧠', title: "Mia apprend ton activité", desc: "Elle connaît ton équipe, tes tarifs, tes clients réguliers, ta façon de travailler." },
    { icon: '📅', title: 'Prise de RDV', desc: "Mia prend les rendez-vous directement en fonction de tes disponibilités." },
    { icon: '🌐', title: 'Numéro dédié professionnel', desc: "Un numéro pro rien que pour toi. Tu le mets partout — Google, Pages Jaunes, site." },
  ]

  const NAV_LINKS = [
    { href: '#how-it-works', label: 'Comment ça marche' },
    { href: '#features',     label: 'Features' },
    { href: '#testimonials', label: 'Témoignages' },
    { href: '#pricing',      label: 'Tarifs' },
    { href: '#faq',          label: 'FAQ' },
  ]

  const fmt = n => new Intl.NumberFormat('fr-FR').format(n)

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#F8F9FF', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* Ambient bg */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[200px]"
          style={{ background: 'radial-gradient(ellipse, rgba(59,91,245,0.05) 0%, transparent 70%)' }} />
      </div>

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ background: 'rgba(248,249,255,0.93)', borderBottom: '1px solid #E0E7FF' }}>
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="/"><img src="/logo-full-clean.svg" alt="Fixlyy" className="h-8 w-auto" /></a>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href}
                className="text-sm font-medium transition-colors"
                style={{ color: '#6B7280' }}
                onMouseEnter={e => e.target.style.color = '#3B5BFA'}
                onMouseLeave={e => e.target.style.color = '#6B7280'}>
                {l.label}
              </a>
            ))}
          </div>
          <a href={COMMENCER_URL} target="_blank" rel="noopener noreferrer"
            className="text-sm font-bold px-5 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
            style={{ background: '#3B5BFA' }}>
            Essai gratuit →
          </a>
        </div>
      </nav>

      {/* ── S1: HERO ── */}
      <section className="max-w-3xl mx-auto px-5 text-center pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-8"
          style={{ background: '#EEF2FF', border: '1px solid #C7D2FE', color: '#3B5BFA' }}
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full"
            style={{ background: '#34D399' }}
          />
          47 artisans actifs en ce moment
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-black text-[#0D1117] mb-5"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.15 }}
        >
          Récupère jusqu'à 1800 € / mois<br />
          <span style={{ color: '#3B5BFA' }}>sans décrocher ton téléphone.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.18 }}
          className="text-lg leading-relaxed mb-10 max-w-lg mx-auto"
          style={{ color: '#6B7280' }}
        >
          Mia répond à ta place en 3 secondes.<br />
          24h/24, 7j/7. Tu reçois le récap SMS en 30 secondes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.26 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href={COMMENCER_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 text-white font-black text-base px-10 py-4 rounded-xl"
            style={{
              background: 'linear-gradient(135deg,#4A6EFF,#3B5BFA)',
              boxShadow: '0 0 40px rgba(59,91,250,0.4)',
              minWidth: 300,
            }}
          >
            Essayer Mia 7 jours gratuits <ArrowRight className="w-4 h-4" />
          </motion.a>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium" style={{ color: '#6B7280' }}>
            {['✓ 7 jours gratuits', "✓ Aucune carte débitée avant le 8ème jour", '✓ Prix fondateurs 197€ le 1er mois'].map(b => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── S2: STATS ── */}
      <section className="py-8" style={{ borderTop: '1px solid #E0E7FF', borderBottom: '1px solid #E0E7FF', background: '#EEF2FF' }}>
        <div className="max-w-2xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <p className="font-black mb-0.5" style={{ fontSize: '1.85rem', color: s.color }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs" style={{ color: '#6B7280' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S3: PROBLÈME ── */}
      <section className="py-20 px-5" style={{ background: '#F8F9FF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-black text-[#0D1117] mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
              Combien d'appels tu rates chaque jour ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              { bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.15)', icon: '📞', num: '3 appels manqués/jour', desc: 'Certains jours plus, certains jours moins. Mais en moyenne — 3.' },
              { bg: 'rgba(251,146,60,0.06)', border: 'rgba(251,146,60,0.15)', icon: '📅', num: '60 appels manqués/mois', desc: "Sur 20 jours ouvrés — c'est 60 clients qui sont tombés sur personne." },
              { bg: 'rgba(239,68,68,0.10)', border: 'rgba(239,68,68,0.25)', icon: '💸', num: '12 000€ perdus/mois', desc: "À 200€ le dépannage moyen — c'est le chiffre qui part chez ton concurrent. Chaque mois." },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6"
                style={{ background: c.bg, border: `1px solid ${c.border}` }}
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <p className="font-black text-[#0D1117] mb-2" style={{ fontSize: '1.1rem' }}>{c.num}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-semibold mb-8"
            style={{ color: '#374151', fontSize: '1rem' }}
          >
            Et le pire — tu le vois même pas.<br />
            <span style={{ color: '#6B7280', fontWeight: 400 }}>Personne ne t'envoie une facture pour les appels manqués.</span>
          </motion.p>

          <div className="flex justify-center">
            <a href={COMMENCER_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: '#3B5BFA', boxShadow: '0 4px 20px rgba(59,91,250,0.3)' }}>
              Récupérer mes clients perdus <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── S4: COMMENT ÇA MARCHE ── */}
      <section id="how-it-works" className="py-20 px-5" style={{ background: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-black text-[#0D1117] mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
              Comment Mia récupère tes clients
            </h2>
            <p style={{ color: '#6B7280' }}>3 piliers. Zéro changement dans ta façon de travailler.</p>
          </motion.div>

          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0 flex items-center gap-4">
                <span className="font-black text-3xl" style={{ color: '#3B5BFA' }}>01</span>
                <span className="text-3xl">📞</span>
              </div>
              <div className="rounded-2xl p-6 flex-1" style={{ background: '#F8F9FF', border: '1px solid #E0E7FF' }}>
                <h3 className="font-black text-[#0D1117] mb-2" style={{ fontSize: '1.15rem' }}>Elle décroche en 3 secondes</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  Mia répond à ta place, 24h/24, 7j/7. Même quand t'es sous un évier, sur un toit, ou en pleine intervention. Elle parle comme une vraie secrétaire — pas comme un robot.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0 flex items-center gap-4">
                <span className="font-black text-3xl" style={{ color: '#3B5BFA' }}>02</span>
                <span className="text-3xl">💬</span>
              </div>
              <div className="flex-1">
                <div className="rounded-2xl p-6 mb-4" style={{ background: '#F8F9FF', border: '1px solid #E0E7FF' }}>
                  <h3 className="font-black text-[#0D1117] mb-2" style={{ fontSize: '1.15rem' }}>Elle qualifie et te résume l'appel</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                    Mia pose les bonnes questions : c'est quoi le problème, c'est où, c'est urgent, et il est libre quand. 30 secondes après — tu reçois le récap SMS complet sur ton téléphone.
                  </p>
                </div>
                <div className="rounded-2xl p-4" style={{ background: '#1A1A2E', border: '1px solid rgba(59,91,250,0.3)', maxWidth: 360 }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center font-black text-white text-xs"
                      style={{ background: '#3B5BFA' }}>M</div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.06em' }}>MIA — 14h32</span>
                  </div>
                  <div className="rounded-xl p-3" style={{ background: '#252547', fontSize: 12, lineHeight: 1.8, color: '#fff' }}>
                    <p>👤 <strong>Jean-Luc Moreau</strong> — 06 XX XX XX XX</p>
                    <p>🔧 Fuite sous évier cuisine</p>
                    <p>📍 12 rue des Lilas, Paris 15e</p>
                    <p>🚨 Urgence : <strong>OUI</strong> — eau qui coule</p>
                    <p>📅 Dispo : ce soir après 18h ou demain matin</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0 flex items-center gap-4">
                <span className="font-black text-3xl" style={{ color: '#3B5BFA' }}>03</span>
                <span className="text-3xl">🔄</span>
              </div>
              <div className="rounded-2xl p-6 flex-1" style={{ background: '#F8F9FF', border: '1px solid #E0E7FF' }}>
                <h3 className="font-black text-[#0D1117] mb-2" style={{ fontSize: '1.15rem' }}>Elle relance automatiquement</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  Si un client raccroche avant de parler à Mia — elle le rappelle 5 minutes après. Si c'est une urgence — elle te transfère l'appel direct. Si quelqu'un est impoli — elle reste pro et prend les coordonnées.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-12">
            <a href={COMMENCER_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: '#3B5BFA', boxShadow: '0 4px 20px rgba(59,91,250,0.3)' }}>
              Activer Mia sur mon numéro <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── S5: APPELS SORTANTS ── */}
      <section className="py-20 px-5" style={{ background: '#F8F9FF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-black text-[#0D1117] mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
              Mia ne se contente pas de répondre.<br />
              <span style={{ color: '#3B5BFA' }}>Elle relance aussi.</span>
            </h2>
            <p className="text-base" style={{ color: '#6B7280' }}>100 appels sortants inclus chaque mois.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: '📞', title: 'Rappel client manqué', desc: "Un client a raccroché avant de parler à Mia ? Elle le rappelle automatiquement 5 minutes après. Zéro client perdu." },
              { icon: '📋', title: 'Suivi devis automatique', desc: "Mia détecte quand un devis a été évoqué pendant l'appel. Elle rappelle le prospect 48h après pour faire le suivi." },
              { icon: '📅', title: 'Confirmation de RDV', desc: "La veille d'un rendez-vous pris par Mia, elle appelle le client pour confirmer. Moins d'annulations de dernière minute." },
              { icon: '🔄', title: 'Relance client inactif', desc: "Un client n'a pas rappelé depuis 30 jours ? Mia le contacte pour reprendre le lien. Sans que tu aies à y penser." },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-5"
                style={{ background: '#FFFFFF', border: '1px solid #E0E7FF', boxShadow: '0 2px 8px rgba(59,91,245,0.04)' }}
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <p className="font-bold text-[#0D1117] mb-1 text-sm">{c.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
              style={{ background: '#EEF2FF', border: '1px solid #C7D2FE', color: '#3B5BFA' }}>
              ✓ 100 appels sortants inclus — remis à zéro chaque mois
            </div>
            <a href={COMMENCER_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: '#3B5BFA', boxShadow: '0 4px 20px rgba(59,91,250,0.3)' }}>
              Activer Mia sur mon numéro <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── S6: AGENDA & DISPONIBILITÉS ── */}
      <section className="py-20 px-5" style={{ background: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-black text-[#0D1117] mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
              Mia gère ton agenda.<br />
              <span style={{ color: '#3B5BFA' }}>Même quand t'es pas dispo.</span>
            </h2>
            <p className="text-base" style={{ color: '#6B7280' }}>Elle sait quand tu es libre — et quand tu ne l'es pas.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: '📅', title: 'Prise de RDV automatique', desc: "Mia prend les rendez-vous directement pendant l'appel, en fonction de tes disponibilités configurées." },
              { icon: '🚫', title: 'Gestion des indisponibilités', desc: "Tu poses une indisponibilité dans l'app — Mia le sait. Elle propose le prochain créneau libre. Sans jamais donner la raison de ton absence." },
              { icon: '👥', title: 'Redirection équipe', desc: "Un membre de ton équipe est absent ? Mia le détecte et redirige vers un collègue disponible. Sans friction pour le client." },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-5"
                style={{ background: '#F8F9FF', border: '1px solid #E0E7FF', boxShadow: '0 2px 8px rgba(59,91,245,0.04)' }}
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <p className="font-bold text-[#0D1117] mb-1 text-sm">{c.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <a href={COMMENCER_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: '#3B5BFA', boxShadow: '0 4px 20px rgba(59,91,250,0.3)' }}>
              Essayer Mia 7 jours gratuits <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── S7: FEATURES ── */}
      <section id="features" className="py-20 px-5" style={{ background: '#F8F9FF' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-black text-[#0D1117] mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
              Tout ce que Mia fait pour toi
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES_GRID.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl p-5"
                style={{ background: '#FFFFFF', border: '1px solid #E0E7FF', boxShadow: '0 2px 8px rgba(59,91,245,0.04)' }}
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <p className="font-bold text-[#0D1117] mb-1 text-sm">{f.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: '#6B7280' }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S8: TESTEZ MIA EN DIRECT ── */}
      <section className="py-20 px-5" style={{ background: '#F8F9FF' }}>
        <div className="max-w-xl mx-auto flex justify-center">
          <DemoWidget />
        </div>
      </section>

      {/* ── S9: SIMULATEUR ── */}
      <section className="py-20 px-5" style={{ background: '#FFFFFF' }}>
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-black text-[#0D1117] mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>
              Calcule ce que tu perds sans Mia
            </h2>
            <p style={{ color: '#6B7280', fontSize: '0.95rem' }}>
              Entre tes chiffres — vois en temps réel ce que Mia peut te rapporter.
            </p>
          </motion.div>
          <ROICalculator />
        </div>
      </section>

      {/* ── S7: TÉMOIGNAGES ── */}
      <section id="testimonials" className="py-20 px-5" style={{ background: '#F8F9FF' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: '#3B5BFA' }}>Résultats réels</p>
            <h2 className="font-black text-[#0D1117]" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
              Ce que disent <span style={{ color: '#3B5BFA' }}>nos artisans</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} t={t} delay={i * 0.06} />
            ))}
          </div>
          <div className="flex justify-center">
            <a href={COMMENCER_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: '#3B5BFA', boxShadow: '0 4px 20px rgba(59,91,250,0.3)' }}>
              Rejoins les 47 artisans qui ne ratent plus un seul appel <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── S8: PRICING ── */}
      <section id="pricing" className="relative py-24 px-5 overflow-hidden" style={{ background: '#F0F4FF' }}>
        {/* Blob décoratif léger */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[180px]"
            style={{ background: 'radial-gradient(ellipse, rgba(59,91,250,0.10) 0%, transparent 70%)' }} />
        </div>

        <div className="relative max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-black text-[#0D1117] mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>
              Une seule offre.<br />
              <span style={{ color: '#3B5BFA' }}>Transparente. Sans surprise.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 20px 80px rgba(59,91,250,0.22), 0 4px 24px rgba(59,91,250,0.12)', border: '1.5px solid #C7D2FE' }}
          >
            {/* Header gradient vif */}
            <div className="relative px-8 py-10 text-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #3B5BFA 0%, #4F46E5 100%)' }}>
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 55%)' }} />

              <motion.span
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(255,255,255,0.18)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-yellow-300"
                />
                Prix fondateurs — offre limitée
              </motion.span>

              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-2xl font-bold line-through" style={{ color: 'rgba(255,255,255,0.45)' }}>497€</span>
                <motion.span
                  initial={{ scale: 0.75, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25, type: 'spring', stiffness: 180, damping: 14 }}
                  className="font-black text-white"
                  style={{ fontSize: 'clamp(4rem, 12vw, 5.5rem)', lineHeight: 1 }}
                >
                  197€
                </motion.span>
              </div>
              <p className="text-sm font-medium mb-5" style={{ color: 'rgba(255,255,255,0.72)' }}>
                /mois le 1er mois — puis 497€/mois
              </p>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: 'rgba(52,211,153,0.22)', color: '#6EE7B7', border: '1px solid rgba(52,211,153,0.35)' }}>
                ✓ Tu économises 300€ dès le 1er mois
              </div>
            </div>

            {/* Body blanc */}
            <div className="px-8 py-7 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
                {[
                  'Appels entrants 24h/24, 7j/7',
                  'SMS récap en 30 secondes',
                  '100 appels sortants/mois',
                  'Prise de RDV automatique',
                  'Détection et transfert urgences',
                  'Qualification automatique',
                  "Mia apprend ton activité",
                  '1 500 minutes incluses/mois',
                  '1 numéro dédié professionnel',
                  '10 langues',
                  'Rapport hebdomadaire',
                  'Support prioritaire <4h',
                ].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold"
                      style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981' }}>✓</span>
                    <span className="text-xs font-medium" style={{ color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs mb-6 text-center" style={{ color: '#9CA3AF' }}>Au-delà de 1 500 min : 0,20€/min</p>

              <motion.a
                href={COMMENCER_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white font-black text-base"
                style={{
                  background: 'linear-gradient(135deg, #4A6EFF, #3B5BFA)',
                  boxShadow: '0 8px 30px rgba(59,91,250,0.45)',
                }}
              >
                Commencer mon essai gratuit <ArrowRight className="w-4 h-4" />
              </motion.a>

              <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-center" style={{ color: '#9CA3AF' }}>
                {['✓ 7 jours gratuits', "✓ CB débitée au 8ème jour", "✓ Engagement 3 mois", '✓ Résiliation simple'].map(b => (
                  <span key={b}>{b}</span>
                ))}
              </div>
            </div>

            {/* Comparison footer */}
            <div className="px-8 py-4 text-center text-xs" style={{ background: '#F8F9FF', borderTop: '1px solid #E0E7FF', color: '#6B7280' }}>
              Secrétaire classique : <strong style={{ color: '#374151' }}>1 800€/mois</strong>
              {' '}· Mia : <strong style={{ color: '#374151' }}>197€ puis 497€</strong>
              {' '}· <strong style={{ color: '#3B5BFA' }}>3,6× moins cher</strong> pour un service 24h/24.
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── S9: FAQ ── */}
      <section id="faq" className="py-20 px-5" style={{ background: '#F8F9FF' }}>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-black text-[#0D1117]" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>
              Questions fréquentes
            </h2>
          </motion.div>
          <div className="flex flex-col gap-2">
            {FAQ_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl overflow-hidden"
                style={{ background: '#FFFFFF', border: '1px solid #E0E7FF' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 gap-3"
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  <span className="font-semibold text-sm text-[#0D1117]">{item.q}</span>
                  <ChevronDown
                    className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
                    style={{ color: '#3B5BFA', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: '#6B7280', borderTop: '1px solid #EEF2FF' }}>
                    <p className="pt-3">{item.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── S10: FINAL CTA ── */}
      <section className="py-20 px-5 text-center">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl px-8 py-12"
            style={{ background: '#EEF2FF', border: '1px solid #C7D2FE' }}
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
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 text-white font-black text-lg px-10 py-4 rounded-xl w-full mb-4"
              style={{
                background: 'linear-gradient(135deg,#4A6EFF,#3B5BF5)',
                boxShadow: '0 0 50px rgba(59,91,245,0.45)',
                maxWidth: 380,
              }}
            >
              Démarrer mon essai gratuit <ArrowRight className="w-5 h-5" />
            </motion.a>
            <div className="flex justify-center">
              <ScarcityBadge remaining={remaining} loaded={loaded} />
            </div>
            <div className="flex items-center justify-center gap-6 mt-5 text-xs" style={{ color: '#9CA3AF' }}>
              <span>Engagement 3 mois</span>
              <span>·</span>
              <span>RGPD conforme</span>
              <span>·</span>
              <span>Hébergé en France</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 text-center" style={{ borderTop: '1px solid #E0E7FF' }}>
        <img src="/logo-full-clean.svg" alt="Fixlyy" className="h-10 w-auto mx-auto mb-5 opacity-80" />
        <div className="flex items-center justify-center gap-4 text-xs mb-4" style={{ color: '#9CA3AF' }}>
          {[
            { to: '/cgv',              label: 'CGV' },
            { to: '/cgu',              label: 'CGU' },
            { to: '/confidentialite',  label: 'Confidentialité' },
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

      <style>{`
        @keyframes scarcityPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.65; } }
        @keyframes scarcityFlash { 0% { opacity: 1; } 40% { opacity: 0.2; } 100% { opacity: 1; } }
        @keyframes spSlideIn { from { transform: translateX(-110%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        input::placeholder { color: #9CA3AF; }
        .roi-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 20px; background: transparent; outline: none; cursor: pointer; }
        .roi-slider::-webkit-slider-runnable-track { height: 6px; border-radius: 4px; background: #C7D2FE; }
        .roi-slider::-webkit-slider-thumb { -webkit-appearance: none; margin-top: -7px; width: 20px; height: 20px; border-radius: 50%; background: #3B5BFA; cursor: pointer; box-shadow: 0 2px 8px rgba(59,91,245,0.35), 0 0 0 3px rgba(59,91,245,0.15); border: 2px solid #fff; }
        .roi-slider::-moz-range-track { height: 6px; border-radius: 4px; background: #C7D2FE; }
        .roi-slider::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: #3B5BFA; cursor: pointer; box-shadow: 0 2px 8px rgba(59,91,245,0.35); border: 2px solid #fff; }
      `}</style>
    </div>
  )
}
