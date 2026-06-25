import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';

const FEATURES = [
  '1 500 minutes incluses / mois',
  'Mia répond 24h/24, 7j/7',
  'SMS récap en 30 secondes',
  'Qualification des urgences',
  '1 numéro dédié',
  'CRM clients natif',
  'FAQ tarifaire configurable',
  "Jusqu'à 20 motifs d'appel",
  'Rapport hebdomadaire',
  'Statistiques détaillées',
  "Transfert appel urgent vers l'artisan",
  'Multilingue (FR EN AR ES PT DE IT NL PL RU)',
  "Jusqu'à 10 utilisateurs",
  'Support prioritaire',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-10">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Tarif</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Transparent. Sans surprise.
          </h2>
          <p className="text-muted-2 text-lg max-w-xl mx-auto">
            Une seule offre. Tout inclus. 7 jours d'essai gratuit.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl flex flex-col overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(59,91,245,0.18) 0%, rgba(59,91,245,0.08) 100%)',
            border: '2px solid rgba(59,91,245,0.6)',
            boxShadow: '0 0 40px rgba(59,91,245,0.25), 0 0 80px rgba(59,91,245,0.08)',
          }}
        >
          <div
            className="text-white text-xs font-bold text-center py-2.5 px-4 tracking-widest uppercase"
            style={{ background: 'var(--color-brand, #3B5BF5)' }}
          >
            Tout inclus · Toutes les fonctionnalités
          </div>

          <div className="p-7 md:p-10 flex flex-col gap-6">
            <div>
              <p className="text-lg font-bold text-white mb-0.5">Fixlyy</p>
              <div className="flex items-end gap-1.5 mb-1">
                <span className="text-5xl font-black text-white leading-none">497€</span>
                <span className="text-muted text-sm mb-1.5">/mois HT</span>
              </div>
              <p className="text-xs text-brand font-medium">Rentabilisé dès 3 clients récupérés / mois</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand" />
                  {f}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a href={COMMENCER_URL}
                className="w-full inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold text-base py-4 rounded-xl transition-all shadow-brand hover:shadow-none whitespace-nowrap">
                Démarrer mon essai gratuit →
              </a>
              <p className="text-xs text-muted text-center">Au-delà des 1 500 min : 0,20€/min</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center space-y-2 mt-8">
          <p className="text-sm text-muted">
            Essai gratuit 7 jours · Aucune CB débitée avant le 8ème jour ·{' '}
            <Link to="/cgv" className="underline underline-offset-2 hover:text-white transition-colors">Engagement 3 mois</Link>
            {' '}· puis résiliable à tout moment
          </p>
          <p className="text-xs text-muted/60">Prix HT · TVA 20% applicable · Facturation mensuelle</p>
        </motion.div>
      </div>
    </section>
  );
}
