import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X as XIcon, MessageSquare } from 'lucide-react';

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

const CONVO = [
  { from: 'caller', text: "Bonjour, j'ai une fuite d'eau, c'est urgent !" },
  { from: 'mia',   text: "D'accord. Votre nom et votre adresse ?" },
  { from: 'caller', text: "Jean-Luc, 14 rue de Rivoli Paris 4e." },
  { from: 'mia',   text: "Noté. L'artisan vous rappelle sous 30 min." },
];

function TypingDots() {
  return (
    <div className="flex items-center gap-[5px] px-1 py-1">
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="w-[6px] h-[6px] rounded-full bg-white/50"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function HeroVisual() {
  const [step, setStep]     = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const schedule = [
      { at: 500,  fn: () => setStep(1) },
      { at: 950,  fn: () => setTyping(true) },
      { at: 2000, fn: () => { setTyping(false); setStep(2); } },
      { at: 2800, fn: () => setStep(3) },
      { at: 3250, fn: () => setTyping(true) },
      { at: 4300, fn: () => { setTyping(false); setStep(4); } },
      { at: 5100, fn: () => setStep(5) },
    ];
    const timers = schedule.map(({ at, fn }) => setTimeout(fn, at));
    return () => timers.forEach(clearTimeout);
  }, []);

  const callerBubble = 'rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm leading-snug max-w-[85%]';
  const miaBubble    = 'rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm leading-snug max-w-[85%]';

  return (
    <div className="relative w-full max-w-xs mx-auto select-none" aria-hidden>
      {/* Ambient glow behind */}
      <div className="absolute inset-0 rounded-3xl blur-[80px] bg-brand/20 -z-10 scale-75" />

      {/* Top label */}
      <div className="flex items-center gap-2 mb-4 px-1">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
        <span className="text-xs text-emerald-400 font-semibold tracking-wide">Appel en direct</span>
        <span className="ml-auto text-xs font-mono" style={{ color: 'rgba(107,114,128,0.7)' }}>0:47</span>
      </div>

      {/* Chat bubbles */}
      <div className="flex flex-col gap-2.5">

        {/* Caller #1 */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div key="c1" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}
              className="flex justify-start">
              <div className={callerBubble} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.88)' }}>
                {CONVO[0].text}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mia typing / bubble #1 */}
        <AnimatePresence mode="wait">
          {typing && step < 2 && (
            <motion.div key="t1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex justify-end">
              <div className={miaBubble} style={{ background: 'rgba(59,91,245,0.35)', border: '1px solid rgba(59,91,245,0.4)' }}>
                <TypingDots />
              </div>
            </motion.div>
          )}
          {step >= 2 && (
            <motion.div key="m1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}
              className="flex justify-end">
              <div className={miaBubble} style={{ background: 'linear-gradient(135deg,#4A6EFF,#3B5BF5)', color: '#fff' }}>
                {CONVO[1].text}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Caller #2 */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div key="c2" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}
              className="flex justify-start">
              <div className={callerBubble} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.88)' }}>
                {CONVO[2].text}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mia typing / bubble #2 */}
        <AnimatePresence mode="wait">
          {typing && step >= 3 && step < 4 && (
            <motion.div key="t2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex justify-end">
              <div className={miaBubble} style={{ background: 'rgba(59,91,245,0.35)', border: '1px solid rgba(59,91,245,0.4)' }}>
                <TypingDots />
              </div>
            </motion.div>
          )}
          {step >= 4 && (
            <motion.div key="m2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.35 }}
              className="flex justify-end">
              <div className={miaBubble} style={{ background: 'linear-gradient(135deg,#4A6EFF,#3B5BF5)', color: '#fff' }}>
                {CONVO[3].text}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SMS sent confirmation */}
        <AnimatePresence>
          {step >= 5 && (
            <motion.div key="sms"
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-1 rounded-xl p-3"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.22)' }}
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <MessageSquare className="w-3 h-3 text-emerald-400" />
                <p className="text-xs text-emerald-400 font-semibold">SMS envoyé à l'artisan</p>
              </div>
              <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Jean-Luc · Fuite eau · <span className="text-red-400 font-semibold">URGENT</span> · 14 rue de Rivoli
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom label */}
      <div className="flex items-center justify-between mt-5 px-1">
        <span className="text-[11px]" style={{ color: 'rgba(107,114,128,0.7)' }}>Mia · Fixlyy</span>
        <span className="text-[11px] text-emerald-400">24h/24 · 7j/7</span>
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
