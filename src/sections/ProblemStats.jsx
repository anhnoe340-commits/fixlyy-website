import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Banknote, PhoneMissed } from 'lucide-react';

const STATS = [
  {
    Icon: TrendingDown,
    number: '1 sur 3',
    label: 'artisans rate plus de 10 appels par semaine',
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.07)',
    border: 'rgba(239,68,68,0.15)',
  },
  {
    Icon: Banknote,
    number: '180 €',
    label: 'en moyenne par intervention manquée',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.07)',
    border: 'rgba(245,158,11,0.15)',
  },
  {
    Icon: PhoneMissed,
    number: '70 %',
    label: "des clients qui tombent sur messagerie n'attendent pas",
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.07)',
    border: 'rgba(239,68,68,0.15)',
  },
];

export default function ProblemStats() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-dark-2">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Le problème</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Combien vous coûtent<br className="hidden md:block" /> vos appels manqués ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-7 text-center"
              style={{ background: s.bg, border: `1px solid ${s.border}` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: s.color + '18', border: `1px solid ${s.color}30` }}>
                <s.Icon className="w-6 h-6" style={{ color: s.color }} />
              </div>
              <p className="text-4xl md:text-5xl font-black mb-2" style={{ color: s.color }}>{s.number}</p>
              <p className="text-muted-2 text-sm leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block rounded-2xl px-8 py-5 bg-error/8 border border-error/20">
            <p className="text-xl md:text-2xl font-bold text-white">
              Un appel manqué = un client perdu.{' '}
              <span className="text-error">Définitivement.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
