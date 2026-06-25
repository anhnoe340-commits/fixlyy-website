import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Phone, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';
const DEMO_NUMBER   = '09 39 24 70 81';
const DEMO_TEL      = 'tel:+33939247081';
const SUPABASE_URL  = 'https://hxkpmmekaotwmzgqxafp.supabase.co';

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
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.10)',
    boxShadow: '0 0 80px rgba(59,91,245,0.14)',
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
        <p className="text-white font-black text-xl mb-1">C'est noté !</p>
        <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
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
        <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.25)' }}>
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
      <div className="px-6 pt-6 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white"
              style={{ background: 'linear-gradient(135deg,#4A6EFF,#3B5BF5)' }}>
              M
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 animate-pulse"
              style={{ borderColor: '#0A0B0F' }} />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Testez Mia en direct</p>
            <p className="text-xs text-emerald-400">Disponible maintenant · Gratuit</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={submit} className="px-6 py-5 flex flex-col gap-3">
        <p className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Laissez vos coordonnées pour lancer un vrai appel de démo.
        </p>

        <input
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
          onFocus={e => e.target.style.border = '1px solid rgba(59,91,245,0.6)'}
          onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.10)'}
        />

        <input
          type="tel"
          placeholder="06 12 34 56 78"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
          onFocus={e => e.target.style.border = '1px solid rgba(59,91,245,0.6)'}
          onBlur={e => e.target.style.border = '1px solid rgba(255,255,255,0.10)'}
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

        <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.22)' }}>
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
        background: 'rgba(255,255,255,0.035)',
        border: '1px solid rgba(255,255,255,0.08)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${t.color}40`;
        e.currentTarget.style.boxShadow = `0 0 30px ${t.color}12`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={t.photo}
          alt={t.name}
          className="w-11 h-11 rounded-full object-cover flex-shrink-0"
          style={{ border: `2px solid ${t.color}40` }}
        />
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-white font-bold text-sm">{t.name}</p>
            <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold"
              style={{ background: `${t.color}18`, color: t.color }}>
              {t.job}
            </span>
          </div>
          <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.30)' }}>{t.city}</p>
        </div>
      </div>

      {/* Result badge */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg w-fit"
        style={{ background: `${t.color}14` }}>
        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: t.color }} />
        <p className="text-xs font-bold" style={{ color: t.color }}>{t.result}</p>
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.60)' }}>
        "{t.quote}"
      </p>
    </motion.div>
  );
}

/* ─── Page principale ─── */
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#080910', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* ── Ambient background ── */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        {/* Grille */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: 'linear-gradient(rgba(59,91,245,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,91,245,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        {/* Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[200px]"
          style={{ background: 'radial-gradient(ellipse, rgba(59,91,245,0.10) 0%, transparent 70%)' }} />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: 'rgba(59,91,245,0.05)' }}
        />
      </div>

      {/* ── Logo ── */}
      <div className="relative pt-8 pb-2 text-center">
        <a href="/"><img src="/logo-full-clean.svg" alt="Fixlyy" className="h-14 w-auto mx-auto" /></a>
      </div>

      {/* ── HERO ── */}
      <section className="relative max-w-xl mx-auto px-5 text-center pt-10 pb-16">

        {/* Badge animé */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest"
          style={{ background: 'rgba(59,91,245,0.12)', border: '1px solid rgba(59,91,245,0.25)', color: '#7C9FFF' }}
        >
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
          />
          47 artisans actifs en ce moment
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="font-black text-white leading-[1.05] mb-5"
          style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)' }}
        >
          Ne perdez plus jamais<br />
          <span style={{
            background: 'linear-gradient(90deg, #4A6EFF, #818CF8, #4A6EFF)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 3s linear infinite',
          }}>
            un client
          </span>
          {' '}à cause<br />d'un appel raté.
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14 }}
          className="text-lg leading-relaxed mb-4 max-w-md mx-auto"
          style={{ color: 'rgba(255,255,255,0.48)' }}
        >
          Mia répond à vos appels 24h/24, qualifie les urgences et vous envoie un SMS récap en 30 secondes. Passez-lui un vrai appel.
        </motion.p>

        {/* Widget démo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mb-10"
        >
          <DemoWidget />
        </motion.div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.32 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href={COMMENCER_URL}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 text-white font-black text-base px-10 py-4 rounded-xl w-full"
            style={{
              background: 'linear-gradient(135deg,#4A6EFF,#3B5BF5)',
              boxShadow: '0 0 40px rgba(59,91,245,0.40)',
              maxWidth: 380,
            }}
          >
            Démarrer mon essai gratuit <ArrowRight className="w-4 h-4" />
          </motion.a>
          <div className="flex items-center gap-5 text-xs" style={{ color: 'rgba(255,255,255,0.28)' }}>
            {['7 jours gratuit', 'Actif en 3 min', '497€/mois'].map(l => (
              <span key={l} className="flex items-center gap-1.5">
                <Check className="w-3 h-3 text-emerald-400" /> {l}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="relative py-8" style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(255,255,255,0.018)',
      }}>
        <div className="max-w-2xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <p className="font-black text-white mb-0.5" style={{ fontSize: '1.85rem' }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.30)' }}>{s.label}</p>
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
          <h2 className="font-black text-white" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}>
            Ce que disent <span style={{ color: '#5B78FF' }}>nos artisans</span>
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
            background: 'linear-gradient(145deg, rgba(59,91,245,0.10) 0%, rgba(59,91,245,0.04) 100%)',
            border: '1px solid rgba(59,91,245,0.22)',
          }}
        >
          <h2 className="font-black text-white mb-3" style={{ fontSize: 'clamp(1.8rem, 5vw, 2.6rem)' }}>
            Prêt à ne plus rater<br />
            <span style={{ color: '#5B78FF' }}>un seul appel ?</span>
          </h2>
          <p className="mb-8 text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
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
          <div className="flex items-center justify-center gap-6 mt-5 text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            <span>Engagement 3 mois</span>
            <span>·</span>
            <span>RGPD conforme</span>
            <span>·</span>
            <span>Hébergé en France</span>
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER MINIMAL ── */}
      <footer className="py-8 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <img src="/logo-full-clean.svg" alt="Fixlyy" className="h-10 w-auto mx-auto mb-5 opacity-80" />
        <div className="flex items-center justify-center gap-4 text-xs mb-4" style={{ color: 'rgba(255,255,255,0.22)' }}>
          {[
            { to: '/cgv', label: 'CGV' },
            { to: '/cgu', label: 'CGU' },
            { to: '/confidentialite', label: 'Confidentialité' },
            { to: '/mentions-legales', label: 'Mentions légales' },
          ].map((l, i, arr) => (
            <React.Fragment key={l.to}>
              <Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link>
              {i < arr.length - 1 && <span>·</span>}
            </React.Fragment>
          ))}
        </div>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.10)' }}>
          © 2026 Fixlyy · Secrétaire IA pour artisans
        </p>
      </footer>

      {/* ── Gradient animation keyframes ── */}
      <style>{`
        @keyframes gradientShift {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        input::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>
    </div>
  );
}
