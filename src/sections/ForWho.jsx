import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, KeyRound, Hammer, Paintbrush, Car, Smartphone, Mic, MessageSquare, ArrowRight, ArrowDown } from 'lucide-react';

const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';

const SCENARIOS = [
  {
    Icon: Wrench,
    trade: 'Plombier / Chauffagiste',
    situation: 'Vous êtes sous un évier à réparer une fuite',
    mia: '"Bonjour, Plomberie Dupont. En quoi puis-je vous aider ?"',
    sms: 'Marie G. · 06 12 XX XX · Fuite robinet cuisine · Non urgent · 12 rue Voltaire',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.07)',
    border: 'rgba(59,130,246,0.15)',
  },
  {
    Icon: Zap,
    trade: 'Électricien',
    situation: 'Vous tirez un câble au tableau électrique',
    mia: '"Bonjour, Électricité Martin. Dites-moi ce qui se passe."',
    sms: 'Pascal B. · 07 82 XX XX · Prise qui grille · URGENT · 5 allée des Lilas',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.15)',
  },
  {
    Icon: KeyRound,
    trade: 'Serrurier',
    situation: 'Vous installez une serrure chez un client',
    mia: '"Bonjour, Serrurerie Lebrun. Je vous écoute."',
    sms: 'Anne-Sophie · 06 54 XX XX · Clé cassée dans serrure · URGENT · 8 rue de la Paix',
    color: '#8B5CF6',
    bg: 'rgba(139,92,246,0.07)',
    border: 'rgba(139,92,246,0.15)',
  },
  {
    Icon: Hammer,
    trade: 'Menuisier',
    situation: 'Vous posez une fenêtre sur un chantier',
    mia: '"Bonjour, Menuiserie Laurent. Comment puis-je vous aider ?"',
    sms: "Thomas D. · 06 77 XX XX · Devis porte d'entrée · Pas urgent · 3 impasse des Pins",
    color: '#10B981',
    bg: 'rgba(16,185,129,0.07)',
    border: 'rgba(16,185,129,0.15)',
  },
  {
    Icon: Paintbrush,
    trade: 'Peintre / Plâtrier',
    situation: "Vous êtes en train d'enduire un mur",
    mia: '"Bonjour, Peinture Moreau. En quoi puis-je vous aider ?"',
    sms: 'Sylvie D. · 06 33 XX XX · Devis peinture salon · Pas urgent · 19 avenue du Général',
    color: '#EC4899',
    bg: 'rgba(236,72,153,0.07)',
    border: 'rgba(236,72,153,0.15)',
  },
  {
    Icon: Car,
    trade: 'Garagiste / Mécanicien',
    situation: 'Vous êtes sous un véhicule en pleine vidange',
    mia: '"Bonjour, Garage Dupont. Que puis-je faire pour vous ?"',
    sms: 'Marc L. · 06 45 XX XX · Voiture ne démarre plus · URGENT · 12 rue de la Forge',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.07)',
    border: 'rgba(249,115,22,0.15)',
  },
];

const FLOW_STEPS = [
  { Icon: Smartphone, label: 'Un client appelle',    sub: 'Pendant votre intervention' },
  { Icon: Mic,        label: 'Mia décroche',         sub: 'En moins de 2 secondes' },
  { Icon: MessageSquare, label: 'Vous recevez le SMS', sub: 'Nom · Numéro · Urgence' },
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
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: s.color + '18', border: `1px solid ${s.color}30` }}
        >
          <s.Icon className="w-4 h-4" style={{ color: s.color }} />
        </div>
        <span className="font-bold text-white text-sm">{s.trade}</span>
      </div>

      <p className="text-xs text-muted leading-relaxed border-l-2 pl-3" style={{ borderColor: s.color }}>
        {s.situation}
      </p>

      <div className="rounded-xl bg-dark-4/60 p-3 text-xs text-muted-2 leading-relaxed">
        <span className="font-semibold" style={{ color: s.color }}>Mia&nbsp;→&nbsp;</span>
        {s.mia}
      </div>

      <div className="flex items-start gap-2 bg-white/5 rounded-xl p-3">
        <MessageSquare className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: s.color }} />
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
            {FLOW_STEPS.map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center px-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mb-2">
                    <step.Icon className="w-5 h-5 text-brand" />
                  </div>
                  <p className="text-sm font-bold text-white">{step.label}</p>
                  <p className="text-xs text-muted mt-0.5">{step.sub}</p>
                </div>
                {i < 2 && (
                  <ArrowRight className="w-5 h-5 text-brand/40 hidden md:block mx-2 flex-shrink-0" />
                )}
                {i < 2 && (
                  <ArrowDown className="w-5 h-5 text-brand/40 md:hidden flex-shrink-0" />
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
            Activer Mia pour mon entreprise
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
