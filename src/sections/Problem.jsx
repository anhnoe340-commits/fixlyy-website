import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMissed, TrendingDown, Clock } from 'lucide-react';

const pains = [
  {
    icon: <PhoneMissed className="w-6 h-6" />,
    stat: '8 appels',
    label: 'ratés chaque semaine',
    desc: 'Vous êtes sur chantier, les mains dans la plomberie. Le téléphone sonne. Vous ne pouvez pas décrocher. Le client rappelle un concurrent.',
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    stat: '2 400 €',
    label: 'perdus chaque mois',
    desc: '8 appels × 300 € de valeur moyenne = 2 400 €/mois qui partent chez quelqu\'un d\'autre. Soit 28 800 € par an de chiffre d\'affaires envolé.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    stat: '2h/jour',
    label: 'perdues sur les devis',
    desc: 'Rappeler les clients, rédiger les devis à la main, envoyer les PDF... 15 heures par semaine sur de l\'administratif au lieu de facturer.',
  },
];

export default function Problem() {
  return (
    <section className="bg-dark-2 py-24 px-6" id="problem">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">Le problème</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Chaque appel raté,<br />c'est un client perdu.
          </h2>
          <p className="text-muted-2 text-lg max-w-xl mx-auto">
            Les artisans indépendants perdent en moyenne 2 400 €/mois simplement parce qu'ils ne peuvent pas décrocher leur téléphone en plein travail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-3 border border-white/8 rounded-2xl p-7"
            >
              <div className="w-12 h-12 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand mb-5">
                {p.icon}
              </div>
              <p className="text-3xl font-black text-brand mb-1">{p.stat}</p>
              <p className="text-white font-semibold text-sm mb-3">{p.label}</p>
              <p className="text-muted-2 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-dark-3 border border-brand/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left"
        >
          <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center text-brand text-2xl font-black shrink-0">
            T
          </div>
          <div>
            <p className="text-white text-lg italic mb-2">
              "J'ai compté : en une semaine j'avais raté 11 appels. 3 clients m'ont dit avoir rappelé un concurrent parce que ça ne répondait pas. C'est là que j'ai réalisé le problème."
            </p>
            <p className="text-muted text-sm">Thomas D. — Plombier, Vincennes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
