import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X as XIcon } from 'lucide-react';

const APP_URL = 'https://app.fixlyy.fr';
const COMMENCER_URL = `${APP_URL}/commencer`;

const NAV_LINKS = [
  { href: '#how-it-works', label: 'Comment ça marche' },
  { href: '#roi',          label: 'Calculateur ROI' },
  { href: '#pricing',      label: 'Tarifs' },
  { href: '#faq',          label: 'FAQ' },
];

const BADGES = [
  'Essai gratuit 7 jours',
  'Satisfait ou remboursé 30 jours',
  'Mise en service en 3 minutes',
  'Conforme RGPD',
];

const DEMO_MSGS = [
  { name: 'Jean-Luc B.', detail: 'Fuite salle de bain', urgency: true,  phone: '07 82 ×× ×× ××', time: "à l'instant" },
  { name: 'Sarah M.',    detail: 'Devis peinture salon', urgency: false, phone: '06 14 ×× ×× ××', time: 'il y a 8 min' },
  { name: 'Marc D.',     detail: 'Voiture ne démarre plus', urgency: true, phone: '06 77 ×× ×× ××', time: 'il y a 23 min' },
];

function HeroVisual() {
  const [phase, setPhase] = useState('call');

  useEffect(() => {
    const t = setTimeout(() => setPhase('done'), 2000);
    return () => clearTimeout(t);
  }, []);

  const msgs = phase === 'done' ? DEMO_MSGS : DEMO_MSGS.slice(1);

  return (
    <div className="relative w-full max-w-[340px] mx-auto select-none">
      <div className="absolute inset-4 rounded-3xl blur-3xl bg-brand/25 -z-10" />

      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(11,15,34,0.98)',
          border: '1px solid rgba(255,255,255,0.09)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/6">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black"
              style={{ background: 'linear-gradient(135deg,#5B7FFF,#3B5BF5)' }}
            >
              M
            </div>
            <span className="text-sm font-semibold text-white">Mia</span>
            <span className="text-[10px] text-muted px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
              Fixlyy
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-emerald-400 font-semibold">En direct</span>
          </div>
        </div>

        {/* Live call / resolved */}
        <AnimatePresence mode="wait">
          {phase === 'call' ? (
            <motion.div
              key="calling"
              exit={{ opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0 }}
              transition={{ duration: 0.3 }}
              className="px-4 py-4 flex items-center gap-3 border-b border-white/6"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse"
                style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)' }}
              >
                <span className="text-lg">📞</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-widest mb-0.5">Appel entrant</p>
                <p className="text-xs text-white font-medium">Mia décroche...</p>
              </div>
              <div className="flex items-end gap-[3px] h-4 flex-shrink-0">
                {[0, 1, 2, 1, 0].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-[3px] rounded-full bg-emerald-400"
                    animate={{ height: ['4px', '14px', '4px'] }}
                    transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="px-4 py-3 border-b border-white/6"
              style={{ background: 'rgba(16,185,129,0.05)' }}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-emerald-400 text-xs font-bold">✓</span>
                <p className="text-[10px] text-emerald-400 font-semibold uppercase tracking-widest">Appel traité · SMS envoyé</p>
              </div>
              <p className="text-xs text-white/90">
                Jean-Luc B. · Fuite salle de bain ·{' '}
                <span className="text-red-400 font-bold">URGENT</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SMS list */}
        <div className="divide-y divide-white/5">
          {msgs.map((m, i) => (
            <motion.div
              key={m.name}
              initial={i === 0 && phase === 'done' ? { opacity: 0, y: -6 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="px-4 py-3 flex items-start gap-3"
            >
              <span className="text-base mt-0.5 flex-shrink-0">📩</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-semibold text-white">{m.name}</span>
                  {m.urgency && (
                    <span
                      className="text-[9px] font-bold text-red-400 rounded-full px-1.5 py-0.5 flex-shrink-0"
                      style={{ background: 'rgba(239,68,68,0.12)' }}
                    >
                      URGENT
                    </span>
                  )}
                </div>
                <p className="text-[11px]" style={{ color: 'rgba(156,163,175,0.85)' }}>{m.detail}</p>
                <p className="text-[10px] mt-0.5" style={{ color: 'rgba(107,114,128,0.8)' }}>
                  {m.phone} · {m.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat footer */}
        <div
          className="px-4 py-3 border-t border-white/6 flex items-center justify-between"
          style={{ background: 'rgba(255,255,255,0.02)' }}
        >
          <span className="text-[11px]" style={{ color: 'rgba(107,114,128,0.9)' }}>Ce mois-ci</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-black text-white">0</span>
            <span className="text-[11px]" style={{ color: 'rgba(156,163,175,0.85)' }}>appel manqué</span>
            <span>🎯</span>
          </div>
        </div>
      </div>

      {/* 24/7 badge */}
      <div
        className="absolute -top-3 -right-2 text-white text-[10px] font-bold px-3 py-1.5 rounded-full"
        style={{ background: '#3B5BF5', boxShadow: '0 4px 16px rgba(59,91,245,0.5)' }}
      >
        24h/24 · 7j/7
      </div>
    </div>
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand/8 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px]" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,91,245,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,91,245,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/logo-full-clean.svg" alt="Fixlyy" className="h-9 md:h-10 w-auto" width="120" height="40" />
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-muted-2">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <a href={`${APP_URL}/connexion`} className="hidden md:block text-sm text-muted-2 hover:text-white transition-colors px-3 py-2">
              Se connecter
            </a>
            <a
              href={COMMENCER_URL}
              className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-colors shadow-brand-sm"
            >
              Essai gratuit
            </a>
            <button onClick={() => setMenuOpen(o => !o)} className="md:hidden p-2 text-muted-2 hover:text-white" aria-label="Menu">
              {menuOpen ? <XIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-dark-2/95 backdrop-blur-md border-t border-white/5 px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-muted-2 hover:text-white text-sm transition-colors py-1">{l.label}</a>
            ))}
            <a href={`${APP_URL}/connexion`} onClick={() => setMenuOpen(false)}
              className="text-muted-2 hover:text-white text-sm transition-colors py-1 border-t border-white/5 pt-3 mt-1">
              Se connecter
            </a>
          </div>
        )}
      </nav>

      {/* Hero content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                <span className="inline-flex items-center gap-2 glass-pill text-brand text-sm font-medium px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  Assistante téléphonique 24h/24
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] mb-4"
              >
                Prends le risque<br />
                <span className="text-brand">de ne rater</span><br />
                <span className="text-brand">aucun appel.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="text-xl md:text-2xl font-semibold mb-6 italic"
                style={{ color: 'rgba(156,163,175,0.75)' }}
              >
                On va voir ce qui se passe.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.22 }}
                className="text-base text-muted-2 leading-relaxed mb-8 max-w-md"
              >
                Votre assistante téléphonique qui décroche, qualifie et vous envoie un SMS récap en 30 secondes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.28 }}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <a
                  href={COMMENCER_URL}
                  className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-brand hover:shadow-none"
                >
                  Démarrer mon essai gratuit →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.38 }}
                className="flex flex-wrap gap-2"
              >
                {BADGES.map(b => (
                  <span key={b} className="flex items-center gap-1.5 text-xs text-muted bg-white/5 border border-white/8 rounded-full px-3 py-1.5">
                    <span className="text-success text-base">✓</span> {b}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-end relative"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-8">
        <a href="#problem" className="text-muted hover:text-brand transition-colors text-2xl animate-bounce" aria-label="Défiler vers le bas">↓</a>
      </div>
    </section>
  );
}
