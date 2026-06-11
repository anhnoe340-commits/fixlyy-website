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

function SMSNotification() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-6 right-0 md:-right-4 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] p-4 w-72 max-w-[90vw] z-10"
        >
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 text-[18px]">
              💬
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-brand uppercase tracking-wide mb-0.5">Nouveau message de Mia</p>
              <p className="text-[12px] text-gray-700 leading-snug">
                Jean-Luc · Fuite salle de bain · URGENT · 07 82 xx xx xx · 14 rue de Rivoli
              </p>
              <p className="text-[10px] text-gray-400 mt-1">à l'instant · via Fixlyy</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MiaOrb() {
  return (
    <div className="relative flex items-center justify-center w-full h-72 md:h-96">
      <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-brand/10 animate-pulse" />
      <div className="absolute w-48 h-48 md:w-60 md:h-60 rounded-full border border-brand/20" />
      <div
        className="relative w-36 h-36 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center animate-float"
        style={{
          background: 'radial-gradient(circle at 38% 35%, #5B7FFF 0%, #3B5BF5 45%, #1E3AB8 100%)',
          boxShadow: '0 0 60px rgba(59,91,245,0.5), 0 0 120px rgba(59,91,245,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
        }}
      >
        <span className="text-4xl md:text-5xl">📞</span>
        <p className="text-white text-[11px] font-bold mt-1 tracking-wide">Mia</p>
      </div>
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-dark-3/90 border border-white/10 rounded-full px-3 py-1.5">
        <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
        <span className="text-[11px] font-semibold text-white/80">En ligne · répond maintenant</span>
      </div>
      <SMSNotification />
    </div>
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col bg-dark overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand/4 rounded-full blur-[100px]" />
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(59,91,245,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,91,245,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/logo-full-clean.svg" alt="Fixlyy" className="h-9 md:h-10 w-auto" />
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
            <a href={COMMENCER_URL}
              className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-colors shadow-brand-sm">
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
          </div>
        )}
      </nav>

      {/* Hero content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center gap-2 glass-pill text-brand text-sm font-medium px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  Assistante téléphonique 24h/24
                </span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                Vos clients appellent.<br />
                <span className="text-brand">Vous ne pouvez</span><br />
                <span className="text-brand">pas répondre.</span><br />
                <span className="text-white">Mia le fait pour vous.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-2 leading-relaxed mb-8 max-w-md">
                Votre assistante téléphonique qui décroche, qualifie et vous envoie un SMS récap en 30 secondes.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href={COMMENCER_URL}
                  className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-brand hover:shadow-none">
                  Démarrer mon essai gratuit →
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-2">
                {BADGES.map(b => (
                  <span key={b} className="flex items-center gap-1.5 text-xs text-muted bg-white/5 border border-white/8 rounded-full px-3 py-1.5">
                    <span className="text-success text-base">✓</span> {b}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center lg:justify-end relative">
              <MiaOrb />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-8">
        <a href="#problem" className="text-muted hover:text-brand transition-colors text-2xl animate-bounce">↓</a>
      </div>
    </section>
  );
}
