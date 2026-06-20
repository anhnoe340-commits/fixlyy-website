import React from 'react';
import { motion } from 'framer-motion';

const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';

const SCENARIOS = [
  {
    emoji: '🔧',
    trade: 'Plombier / Chauffagiste',
    situation: 'Vous êtes sous un évier à réparer une fuite',
    mia: 'Mia décroche : "Bonjour, Plomberie Dupont. En quoi puis-je vous aider ?"',
    sms: 'Marie G. · 06 12 XX XX · Fuite robinet cuisine · Non urgent · 12 rue Voltaire',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.07)',
    border: 'rgba(59,130,246,0.15)',
  },
  {
    emoji: '⚡',
    trade: 'Électricien',
    situation: 'Vous tirez un câble au tableau électrique',
    mia: 'Mia décroche : "Bonjour, Électricité Martin. Dites-moi ce qui se passe."',
    sms: 'Pascal B. · 07 82 XX XX · Prise qui grille · URGENT · 5 allée des Lilas',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.15)',
  },
  {
    emoji: '🔐',
    trade: 'Serrurier',
    situation: 'Vous installez une serrure chez un client',
    mia: 'Mia décroche : "Bonjour, Serrurerie Lebrun. Je vous écoute."',
    sms: 'Anne-Sophie · 06 54 XX XX · Clé cassée dans serrure · URGENT · 8 rue de la Paix',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.07)',
    border: 'rgba(139,92,246,0.15)',
  },
  {
    emoji: '🪚',
    trade: 'Menuisier',
    situation: 'Vous posez une fenêtre sur un chantier',
    mia: 'Mia décroche : "Bonjour, Menuiserie Laurent. Comment puis-je vous aider ?"',
    sms: 'Thomas D. · 06 77 XX XX · Devis porte d\'entrée · Pas urgent · 3 impasse des Pins',
    color: '#10B981',
    bg: 'rgba(16,185,129,0.07)',
    border: 'rgba(16,185,129,0.15)',
  },
  {
    emoji: '🎨',
    trade: 'Peintre / Plâtrier',
    situation: 'Vous êtes en train d\'enduire un mur',
    mia: 'Mia décroche : "Bonjour, Peinture Moreau. En quoi puis-je vous aider ?"',
    sms: 'Sylvie D. · 06 33 XX XX · Devis peinture salon · Pas urgent · 19 avenue du Général',
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.07)',
    border: 'rgba(236,72,153,0.15)',
  },
  {
    emoji: '🚗',
    trade: 'Garagiste / Mécanicien',
    situation: 'Vous êtes sous un véhicule en pleine vidange',
    mia: 'Mia décroche : "Bonjour, Garage Dupont. Que puis-je faire pour vous ?"',
    sms: 'Marc L. · 06 45 XX XX · Voiture ne démarre plus · URGENT · 12 rue de la Forge',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.07)',
    border: 'rgba(249,115,22,0.15)',
  },
];

function ScenarioCard({ s, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="rounded-2xl p-6 flex flex-col gap-4"
      style={{ background: s.bg, border: `1px solid ${s.border}` }}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{s.emoji}</span>
        <span className="font-bold text-white text-sm">{s.trade}</span>
      </div>

      <p className="text-xs text-muted leading-relaxed border-l-2 pl-3" style={{ borderColor: s.color }}>
        {s.situation}
      </p>

      <div className="rounded-xl bg-dark-4/60 p-3 text-xs text-muted-2 leading-relaxed">
        <span className="font-semibold" style={{ color: s.color }}>Mia&nbsp;→&nbsp;</span>
        {s.mia.replace(/^Mia [^:]+: /, '')}
      </div>

      <div className="flex items-start gap-2 bg-white/5 rounded-xl p-3">
        <span className="text-base flex-shrink-0">📩</span>
        <p className="text-xs text-muted-2 leading-relaxed">{s.sms}</p>
      </div>
    </motion.div>
  );
}

export default function ForWho() {
  return (
    <section id="for-who" className="py-20 md:py-28 bg-dark">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Pour tous les artisans</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Vous bossez.<br className="hidden md:block" /> Mia s'occupe du reste.
          </h2>
          <p className="text-muted-2 text-lg max-w-xl mx-auto">
            Voici exactement ce qui se passe quand votre téléphone sonne pendant une intervention.
          </p>
        </motion.div>

        {/* Central flow */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-5 md:p-7 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {[
              { icon: '📱', label: 'Un client appelle', sub: 'Pendant votre intervention' },
              { icon: '🎙️', label: 'Mia décroche', sub: 'En moins de 2 secondes' },
              { icon: '📩', label: 'Vous recevez le SMS', sub: 'Nom · Numéro · Urgence' },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center px-4">
                  <div className="text-4xl mb-2">{step.icon}</div>
                  <p className="text-sm font-bold text-white">{step.label}</p>
                  <p className="text-xs text-muted mt-0.5">{step.sub}</p>
                </div>
                {i < 2 && (
                  <div className="text-2xl text-brand/40 hidden md:block mx-2">→</div>
                )}
                {i < 2 && (
                  <div className="text-2xl text-brand/40 md:hidden">↓</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Scenario cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SCENARIOS.map((s, i) => (
            <ScenarioCard key={i} s={s} i={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center">
          <a href={COMMENCER_URL}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-brand hover:shadow-none">
            Activer Mia pour mon entreprise →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
