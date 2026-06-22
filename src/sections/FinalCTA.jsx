import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Check } from 'lucide-react';

const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';
const DEMO_TEL = 'tel:+33939247081';
const DEMO_NUMBER = '09 39 24 70 81';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 md:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">
          Prêt à démarrer
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
          Ne perdez plus<br />
          <span className="text-brand">un seul appel.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-2 leading-relaxed mb-10 max-w-xl mx-auto">
          Mia est active en 3 minutes. 7 jours d'essai gratuit — aucune carte débitée avant le 8ème jour.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href={COMMENCER_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold text-lg px-10 py-4 rounded-xl transition-all shadow-brand hover:shadow-none">
            Démarrer mon essai gratuit →
          </a>
          <a href={DEMO_TEL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/12 border border-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all">
            <Phone className="w-4 h-4" /> Entendre Mia · {DEMO_NUMBER}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted">
          {[
            'Essai 7 jours gratuit',
            'Aucune CB débitée avant le 8ème jour',
            'Résiliable à tout moment',
            'Mise en service 3 min',
            'Conforme RGPD',
          ].map(b => (
            <span key={b} className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-success flex-shrink-0" /> {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
