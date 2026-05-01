import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X as XIcon } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import Phone3D from '../components/Phone3D';

const APP_URL = 'https://app.fixlyy.fr';

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col bg-dark overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand/4 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(59,91,245,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,91,245,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/logo-full-clean.svg" alt="Fixlyy" className="h-9 md:h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-2">
            <a href="#how-it-works" className="hover:text-white transition-colors">Comment ça marche</a>
            <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
            <a href="#comparison" className="hover:text-white transition-colors">Comparatif</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle />
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-lg transition-colors">
              Essai gratuit
            </a>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden p-2 text-muted-2 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? <XIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-dark/95 px-4 py-4 flex flex-col gap-4">
            {[
              { href: '#how-it-works', label: 'Comment ça marche' },
              { href: '#pricing',      label: 'Tarifs' },
              { href: '#comparison',   label: 'Comparatif' },
              { href: '#faq',          label: 'FAQ' },
            ].map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="text-muted-2 hover:text-white text-sm transition-colors py-1">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12 md:pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left — Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                <span className="inline-flex items-center gap-2 glass-pill text-brand text-sm font-medium px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                  Secrétaire IA 24h/24 · Île-de-France
                </span>
                <span className="inline-flex items-center gap-1.5 glass-pill text-white/70 text-sm font-medium px-3 py-2 rounded-full">
                  🌍 Parle 10+ langues
                </span>
                <span className="inline-flex items-center gap-1.5 glass-pill text-white/70 text-sm font-medium px-3 py-2 rounded-full">
                  ∞ 1 000 appels simultanés
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-5 md:mb-6"
              >
                Ne ratez plus<br />
                <span className="text-brand">jamais</span> un<br />
                appel client.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-2 leading-relaxed mb-8 max-w-md"
              >
                Fixlyy répond à vos appels 24h/24 — en français, anglais, arabe ou espagnol — et vous envoie le résumé par SMS en 30 secondes.
                Récupérez <span className="text-white font-bold">2 400 €/mois</span> de CA perdu, même la nuit.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 mb-8"
              >
                <a href={APP_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-brand hover:shadow-none">
                  Démarrer mon essai gratuit →
                </a>
                <a href="#how-it-works"
                  className="inline-flex items-center justify-center text-muted-2 hover:text-white text-base px-6 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                  Voir comment ça marche
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-5 text-sm text-muted"
              >
                {['Sans engagement', '30 jours satisfait ou remboursé', 'Configuration en 10 min'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="text-success text-base">✓</span> {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — Phone 3D */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <Phone3D size="lg" showNotifications={true} />
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="flex justify-center pb-8">
        <a href="#how-it-works" className="text-muted hover:text-brand transition-colors">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
