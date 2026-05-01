import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, MessageSquare, Zap, Globe, Clock, Shield } from 'lucide-react';
import Phone3D from '../components/Phone3D';

const APP_URL = 'https://app.fixlyy.fr';

const features = [
  {
    icon: PhoneCall,
    color: '#3B5BF5',
    title: 'Répond 24h/24, 7j/7',
    desc: 'Votre IA décroche à 3h du matin, le dimanche, pendant vos vacances. Jamais occupée, jamais fatiguée.',
    badge: '∞ Appels illimités',
  },
  {
    icon: Globe,
    color: '#8B5CF6',
    title: 'Parle 10+ langues',
    desc: 'Détecte automatiquement la langue du client — français, anglais, arabe, espagnol, portugais — et lui répond naturellement.',
    badge: '🌍 Multilingue',
  },
  {
    icon: Zap,
    color: '#F59E0B',
    title: 'Détecte les urgences',
    desc: '200+ situations d\'urgence connues par métier (fuite gaz, effraction, panne électrique). Réaction immédiate, pas de faux positifs.',
    badge: '⚡ IA spécialisée',
  },
  {
    icon: MessageSquare,
    color: '#10B981',
    title: 'SMS récap en 30 sec',
    desc: 'Nom, téléphone, urgence, type d\'intervention, adresse — tout résumé et envoyé sur votre mobile en moins de 30 secondes.',
    badge: '📱 Toujours en français',
  },
  {
    icon: Clock,
    color: '#3B5BF5',
    title: 'Prise de RDV automatique',
    desc: 'Propose des créneaux disponibles, confirme les rendez-vous et les ajoute à votre calendrier. Zéro friction.',
    badge: '📅 Cal.com intégré',
  },
  {
    icon: Shield,
    color: '#EF4444',
    title: 'Transfert intelligent',
    desc: 'En cas d\'urgence vitale (fuite gaz, inondation), l\'IA peut vous transférer l\'appel EN DIRECT sur votre mobile.',
    badge: '🔴 Urgence vitale',
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="bg-dark-2 py-16 md:py-24 px-4 md:px-6 overflow-hidden relative" id="features">
      {/* Glows behind glass */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">Fonctionnalités</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-5">
            Tout ce que fait Fixlyy<br />
            <span className="text-brand">pendant que vous travaillez.</span>
          </h2>
          <p className="text-muted-2 text-base md:text-lg max-w-xl mx-auto">
            Une seule IA, formée sur votre métier, qui gère tout — de l'appel au SMS — sans que vous ayez à intervenir.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Feature list */}
          <div className="flex flex-col gap-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              const isActive = activeFeature === i;
              return (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setActiveFeature(i)}
                  className={`w-full text-left p-4 md:p-5 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? 'glass-brand'
                      : 'glass hover:border-white/15'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: f.color + '18', border: `1px solid ${f.color}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: f.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`font-bold text-sm ${isActive ? 'text-white' : 'text-white/80'}`}>{f.title}</p>
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: f.color + '15', color: f.color }}
                        >
                          {f.badge}
                        </span>
                      </div>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-muted-2 text-sm leading-relaxed overflow-hidden"
                          >
                            {f.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right — Phone 3D */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Phone3D size="md" showNotifications={true} />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-brand hover:shadow-none"
          >
            Essayer gratuitement 30 jours →
          </a>
          <p className="text-muted text-sm mt-3">Sans engagement · Configuration en 10 min · Support français</p>
        </motion.div>

      </div>
    </section>
  );
}
