import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLUE        = '#3B5BFA';
const BLUE_LIGHT  = '#EEF2FF';
const BG          = '#F5F7FF';
const BG_CARD     = '#FFFFFF';
const TEXT        = '#0D1117';
const TEXT_MUTED  = '#6B7280';
const SUPABASE_URL = 'https://hxkpmmekaotwmzgqxafp.supabase.co';
const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';

const METIERS = [
  'Plombier', 'Électricien', 'Serrurier', 'Chauffagiste',
  'Peintre', 'Maçon', 'Menuisier', 'Carreleur', 'Autre',
];

const TESTIMONIALS = [
  {
    name: 'Karim B.', job: 'Plombier · Paris 15e',
    result: '+2 clients récupérés ce mois',
    quote: "Je ratais 3-4 appels par jour en chantier. Depuis Mia, j'ai récupéré 2 nouveaux clients fixes. Je rappelle avec le contexte complet — les clients sont bluffés.",
    photo: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    name: 'Stéphane M.', job: 'Électricien · Lyon',
    result: 'Contrat signé à 23h',
    quote: "Mia a répondu à 23h pour une panne urgente. Contrat signé le lendemain. Sans elle, il appelait le concurrent.",
    photo: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    name: 'Rachid O.', job: 'Serrurier · Marseille',
    result: '+30% CA en 2 mois',
    quote: "Je perdais des appels pendant mes interventions. Depuis Mia, +30% de CA en 2 mois. Elle qualifie parfaitement les urgences.",
    photo: 'https://randomuser.me/api/portraits/men/91.jpg',
  },
];

/* ─── Formulaire de candidature ─── */
function CandidatureForm({ id }) {
  const [step, setStep]   = useState('form');
  const [form, setForm]   = useState({ prenom: '', email: '', phone: '', metier: '', appels: '' });
  const [err, setErr]     = useState('');

  function update(k, v) { setForm(f => ({ ...f, [k]: v })); }

  async function submit(e) {
    e.preventDefault();
    if (!form.prenom || !form.email || !form.phone || !form.metier) {
      setErr('Tous les champs sont requis.');
      return;
    }
    setErr('');
    setStep('loading');
    try {
      await fetch(`${SUPABASE_URL}/functions/v1/capture-demo-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, phone: form.phone, metier: form.metier, prenom: form.prenom }),
      });
    } catch {}
    window.location.href = COMMENCER_URL;
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '10px',
    border: `1.5px solid #E5E7EB`,
    background: '#FAFBFF',
    fontSize: '15px',
    color: TEXT,
    outline: 'none',
    transition: 'border-color 0.15s',
    fontFamily: 'inherit',
  };

  return (
    <div id={id} className="w-full">
      {step === 'loading' ? (
        <div className="text-center py-10">
          <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
          <p style={{ color: TEXT_MUTED }}>Enregistrement…</p>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              style={inputStyle}
              placeholder="Prénom"
              value={form.prenom}
              onChange={e => update('prenom', e.target.value)}
              onFocus={e => e.target.style.borderColor = BLUE}
              onBlur={e => e.target.style.borderColor = '#E5E7EB'}
            />
            <input
              style={inputStyle}
              placeholder="Email professionnel"
              type="email"
              value={form.email}
              onChange={e => update('email', e.target.value)}
              onFocus={e => e.target.style.borderColor = BLUE}
              onBlur={e => e.target.style.borderColor = '#E5E7EB'}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              style={inputStyle}
              placeholder="Téléphone (ex: 06 12 34 56 78)"
              type="tel"
              value={form.phone}
              onChange={e => update('phone', e.target.value)}
              onFocus={e => e.target.style.borderColor = BLUE}
              onBlur={e => e.target.style.borderColor = '#E5E7EB'}
            />
            <select
              style={{ ...inputStyle, cursor: 'pointer' }}
              value={form.metier}
              onChange={e => update('metier', e.target.value)}
              onFocus={e => e.target.style.borderColor = BLUE}
              onBlur={e => e.target.style.borderColor = '#E5E7EB'}
            >
              <option value="">Ton métier</option>
              {METIERS.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <select
            style={{ ...inputStyle, cursor: 'pointer' }}
            value={form.appels}
            onChange={e => update('appels', e.target.value)}
            onFocus={e => e.target.style.borderColor = BLUE}
            onBlur={e => e.target.style.borderColor = '#E5E7EB'}
          >
            <option value="">Combien d'appels reçois-tu par jour ?</option>
            <option value="1-3">1 à 3 appels / jour</option>
            <option value="4-7">4 à 7 appels / jour</option>
            <option value="8-15">8 à 15 appels / jour</option>
            <option value="15+">Plus de 15 appels / jour</option>
          </select>
          {err && <p className="text-red-500 text-sm">{err}</p>}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center gap-2 font-black text-white text-base py-4 rounded-xl"
            style={{ background: `linear-gradient(135deg, #4A6EFF, ${BLUE})`, boxShadow: `0 4px 24px rgba(59,91,245,0.35)` }}
          >
            Je veux Mia pour mon activité <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="text-center text-xs" style={{ color: TEXT_MUTED }}>
            ✓ 7 jours gratuits · ✓ Sans engagement · ✓ Activation en 5 min
          </p>
        </form>
      )}
    </div>
  );
}

/* ─── Carte témoignage ─── */
function TestiCard({ t, delay }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{ background: BG_CARD, border: '1.5px solid #E8ECFF', boxShadow: '0 2px 16px rgba(59,91,245,0.06)' }}
    >
      <div className="flex items-center gap-3">
        <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
        <div>
          <p className="font-black text-sm" style={{ color: TEXT }}>{t.name}</p>
          <p className="text-xs" style={{ color: TEXT_MUTED }}>{t.job}</p>
        </div>
      </div>
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg w-fit"
        style={{ background: BLUE_LIGHT }}>
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: BLUE }} />
        <p className="text-xs font-bold" style={{ color: BLUE }}>{t.result}</p>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>"{t.quote}"</p>
    </motion.div>
  );
}

/* ─── Page principale ─── */
export default function Apply() {
  return (
    <div style={{ background: BG, fontFamily: 'Inter, system-ui, sans-serif', minHeight: '100vh' }}>

      {/* ── Logo ── */}
      <div className="text-center py-6 border-b" style={{ borderColor: '#E8ECFF', background: BG_CARD }}>
        <a href="/"><img src="/logo-full-clean.svg" alt="Fixlyy" className="h-10 w-auto mx-auto" /></a>
      </div>

      <div className="max-w-3xl mx-auto px-5">

        {/* ── HERO ── */}
        <section className="pt-12 pb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{ background: BLUE_LIGHT, color: BLUE, border: `1px solid ${BLUE}30` }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Places limitées — 47 artisans actifs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="font-black leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', color: TEXT }}
          >
            Remplis ta candidature{' '}
            <span style={{ color: BLUE }}>en 60 secondes</span>{' '}
            et Active Mia pour ton activité
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-base mb-8 max-w-xl mx-auto"
            style={{ color: TEXT_MUTED, lineHeight: 1.7 }}
          >
            Mia décroche à ta place 24h/7j, qualifie chaque appel et t'envoie un résumé SMS. Tu ne rates plus aucun chantier.
          </motion.p>

          {/* Formulaire hero */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-6 sm:p-8 text-left"
            style={{ background: BG_CARD, border: `2px solid ${BLUE}25`, boxShadow: `0 8px 40px rgba(59,91,245,0.10)` }}
          >
            <p className="font-black text-lg mb-5" style={{ color: TEXT }}>
              📋 Remplis le formulaire ci-dessous <span style={{ color: BLUE }}>(60 secondes)</span>
            </p>
            <CandidatureForm id="candidature_form" />
          </motion.div>
        </section>

        {/* ── VIDÉO ── */}
        <section className="py-10 text-center">
          <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: BLUE }}>
            À regarder maintenant
          </p>
          <h2 className="font-black mb-2" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', color: TEXT }}>
            <span
              style={{
                background: BLUE_LIGHT, color: BLUE,
                borderRadius: '6px', padding: '2px 10px',
                marginRight: '8px', display: 'inline-block',
              }}
            >
              [VIDÉO EXCLUSIVE]
            </span>
            Les 3 raisons pour lesquelles tu rates des chantiers
          </h2>
          <p className="text-sm mb-6" style={{ color: TEXT_MUTED }}>Regarde cette courte vidéo maintenant :</p>

          {/* Player placeholder */}
          <div
            className="relative rounded-2xl overflow-hidden mx-auto flex items-center justify-center"
            style={{
              aspectRatio: '16/9', maxWidth: 700,
              background: '#0D1117',
              border: `2px solid ${BLUE}30`,
              boxShadow: `0 8px 40px rgba(59,91,245,0.15)`,
            }}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer"
                style={{ background: `${BLUE}CC`, boxShadow: `0 0 30px ${BLUE}60` }}
              >
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>La vidéo arrive bientôt</p>
            </div>
          </div>
        </section>

        {/* ── BÉNÉFICES ── */}
        <section className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '📞', title: 'Décroche en 2s', sub: '24h/7j, même la nuit et le week-end' },
              { icon: '📋', title: 'Résumé SMS', sub: 'Nom, raison, numéro — tout dans ton SMS' },
              { icon: '📅', title: 'Prise de RDV', sub: 'Mia note les rendez-vous directement' },
            ].map(b => (
              <div key={b.title} className="rounded-xl p-5 flex gap-4 items-start"
                style={{ background: BG_CARD, border: '1.5px solid #E8ECFF' }}>
                <span className="text-2xl">{b.icon}</span>
                <div>
                  <p className="font-black text-sm mb-0.5" style={{ color: TEXT }}>{b.title}</p>
                  <p className="text-xs" style={{ color: TEXT_MUTED }}>{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── RÉSULTATS CLIENTS ── */}
        <section className="py-10">
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest mb-2" style={{ color: BLUE }}>
              Résultats réels
            </p>
            <h2 className="font-black" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', color: TEXT }}>
              Découvre les résultats de{' '}
              <span style={{ color: BLUE }}>nos artisans</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => <TestiCard key={t.name} t={t} delay={i * 0.08} />)}
          </div>
        </section>

        {/* ── CTA RÉPÉTÉ ── */}
        <section className="py-10">
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: `linear-gradient(135deg, ${BLUE}12 0%, ${BLUE}06 100%)`,
              border: `2px solid ${BLUE}25`,
            }}
          >
            <h2 className="font-black mb-3" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', color: TEXT }}>
              Réserve ton accès Mia maintenant
            </h2>
            <p className="text-sm mb-6" style={{ color: TEXT_MUTED }}>
              7 jours gratuits · Activation en 5 minutes · Sans engagement
            </p>
            <motion.a
              href="#candidature_form"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 font-black text-white px-8 py-4 rounded-xl"
              style={{ background: `linear-gradient(135deg, #4A6EFF, ${BLUE})`, boxShadow: `0 4px 24px rgba(59,91,245,0.35)` }}
              onClick={e => {
                e.preventDefault();
                document.getElementById('candidature_form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Phone className="w-5 h-5" />
              RÉSERVER MON ACCÈS ET ACTIVER MIA
            </motion.a>
            <div className="flex items-center justify-center gap-6 mt-5 text-xs" style={{ color: TEXT_MUTED }}>
              {['✓ 7 jours gratuits', '✓ RGPD conforme', '✓ Hébergé en France'].map(s => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ── FOOTER ── */}
      <footer className="py-8 text-center border-t" style={{ borderColor: '#E8ECFF' }}>
        <img src="/logo-full-clean.svg" alt="Fixlyy" className="h-9 w-auto mx-auto mb-4 opacity-70" />
        <div className="flex items-center justify-center gap-4 text-xs mb-3" style={{ color: TEXT_MUTED }}>
          {[
            { to: '/cgv', label: 'CGV' },
            { to: '/cgu', label: 'CGU' },
            { to: '/confidentialite', label: 'Confidentialité' },
            { to: '/mentions-legales', label: 'Mentions légales' },
          ].map((l, i, arr) => (
            <React.Fragment key={l.to}>
              <Link to={l.to} className="hover:underline">{l.label}</Link>
              {i < arr.length - 1 && <span>·</span>}
            </React.Fragment>
          ))}
        </div>
        <p className="text-xs" style={{ color: '#9CA3AF' }}>© 2026 Fixlyy · Secrétaire IA pour artisans</p>
        <p className="text-[10px] mt-2 max-w-lg mx-auto" style={{ color: '#C4C9D4' }}>
          Ce site n'est pas affilié à Facebook ou Meta. Les résultats présentés sont ceux de clients réels et ne garantissent pas les mêmes résultats pour chaque utilisateur.
        </p>
      </footer>

    </div>
  );
}
