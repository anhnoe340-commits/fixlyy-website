import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Clock, FileText, MessageSquare, ChevronDown } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

const APP_URL = 'https://app.fixlyy.fr';

const liveNotifications = [
  { time: '08:42', name: 'M. Dupont', type: 'Fuite sous évier', urgence: 'URGENT', devis: '280 €' },
  { time: '11:15', name: 'Mme Bernard', type: 'Chauffe-eau en panne', urgence: 'RDV', devis: '450 €' },
  { time: '14:33', name: 'M. Martin', type: 'Prise électrique HS', urgence: 'URGENT', devis: '180 €' },
  { time: '17:08', name: 'SCI Les Lilas', type: 'Tableau électrique', urgence: 'RDV', devis: '890 €' },
];

export default function Hero() {
  const [notifIndex, setNotifIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setNotifIndex(i => (i + 1) % liveNotifications.length);
        setVisible(true);
      }, 400);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const notif = liveNotifications[notifIndex];

  return (
    <section className="relative min-h-screen flex flex-col bg-dark overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px]" />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/logo-full-clean.svg" alt="Fixlyy" className="h-10 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-2">
            <a href="#how-it-works" className="hover:text-white transition-colors">Comment ça marche</a>
            <a href="#pricing" className="hover:text-white transition-colors">Tarifs</a>
            <a href="#comparison" className="hover:text-white transition-colors">Comparatif</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              Essai gratuit
            </a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left — Copy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-sm font-medium px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                Secrétaire IA 100% française · Île-de-France
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6"
              >
                Ne ratez plus<br />
                <span className="text-brand">jamais</span> un<br />
                appel client.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-2 leading-relaxed mb-8 max-w-md"
              >
                Fixlyy répond à vos appels 24h/24, génère vos devis en 2 minutes, et vous envoie le résumé par SMS en 30 secondes.
                Récupérez <span className="text-white font-bold">2 400 €/mois</span> de CA perdu.
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

            {/* Right — Live widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-dark-3 rounded-2xl border border-white/10 p-6 shadow-card">

                {/* Status header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-muted uppercase tracking-widest mb-1">Tableau de bord live</p>
                    <p className="text-white font-semibold text-sm">Fixlyy répond à votre place</p>
                  </div>
                  <div className="flex items-center gap-2 bg-success/10 border border-success/20 text-success text-xs font-medium px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                    Actif 24/7
                  </div>
                </div>

                {/* Rotating notification */}
                <div className={`transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}>
                  <div className="bg-dark-4 rounded-xl p-4 mb-3 border border-white/5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-white font-semibold text-sm">{notif.name}</p>
                        <p className="text-muted-2 text-xs mt-0.5">{notif.type}</p>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        notif.urgence === 'URGENT'
                          ? 'bg-brand/20 text-brand border border-brand/30'
                          : 'bg-brand/10 text-brand-light border border-brand/20'
                      }`}>
                        {notif.urgence}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 text-muted-2">
                        <Clock className="w-3.5 h-3.5" /> {notif.time}
                      </span>
                      <span className="flex items-center gap-1.5 text-success font-bold">
                        <FileText className="w-3.5 h-3.5" /> Devis {notif.devis}
                      </span>
                    </div>
                  </div>
                </div>

                {/* SMS preview */}
                <div className="bg-dark-4 rounded-xl p-4 border border-white/5 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-3.5 h-3.5 text-brand" />
                    <p className="text-xs text-muted uppercase tracking-widest">SMS · envoyé en 30 sec</p>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed font-mono">
                    📞 <span className="text-white">{notif.name}</span> · {notif.type}<br />
                    ⚡ {notif.urgence} · Devis estimé : <span className="text-success">{notif.devis}</span><br />
                    📍 Île-de-France · <span className="text-brand">{notif.time}</span>
                  </p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: <PhoneCall className="w-3.5 h-3.5" />, val: '127', label: 'appels' },
                    { icon: <FileText className="w-3.5 h-3.5" />, val: '94', label: 'devis' },
                    { icon: <MessageSquare className="w-3.5 h-3.5" />, val: '127', label: 'SMS' },
                  ].map((s, i) => (
                    <div key={i} className="bg-dark/60 rounded-lg p-2.5 text-center">
                      <div className="text-brand mb-1 flex justify-center">{s.icon}</div>
                      <p className="text-white font-bold text-sm">{s.val}</p>
                      <p className="text-muted text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 bg-brand text-white text-xs font-bold px-4 py-2 rounded-full shadow-brand whitespace-nowrap"
              >
                +2 400 €/mois récupérés
              </motion.div>
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
