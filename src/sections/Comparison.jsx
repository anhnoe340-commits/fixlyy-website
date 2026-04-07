import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const APP_URL = 'https://app.fixlyy.fr';

const rows = [
  { feature: 'Réponse 24h/24, 7j/7', fixlyy: true, maxi: true },
  { feature: 'Tarif fixe mensuel prévisible', fixlyy: true, maxi: false },
  { feature: 'Génération de devis automatique', fixlyy: true, maxi: false },
  { feature: 'SMS récap en 30 secondes', fixlyy: true, maxi: false },
  { feature: 'Mise en service en 10 minutes', fixlyy: true, maxi: false, maxiNote: '20+ minutes' },
  { feature: 'Vocabulaire métier artisan FR', fixlyy: true, maxi: true },
  { feature: 'Support en français', fixlyy: true, maxi: true },
  { feature: 'Équipe 100% française', fixlyy: true, maxi: false },
  { feature: 'Sans engagement', fixlyy: true, maxi: false },
  { feature: 'Garantie 30 jours remboursé', fixlyy: true, maxi: false },
];

export default function Comparison() {
  return (
    <section className="bg-dark py-24 px-6" id="comparison">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">Comparatif</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Fixlyy vs Allo Maxi
          </h2>
          <p className="text-muted-2 text-lg max-w-xl mx-auto">
            Allo Maxi facture à la minute — votre facture varie chaque mois. Fixlyy, c'est un forfait fixe avec plus de fonctionnalités incluses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="bg-dark-3 border border-white/8 rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-white/8">
            <div className="p-5 text-muted-2 text-sm font-medium">Fonctionnalité</div>
            <div className="p-5 text-center border-l border-white/8">
              <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-sm font-bold px-4 py-1.5 rounded-full">
                Fix<span className="text-white">lyy</span>
                <span className="text-xs bg-brand text-white px-2 py-0.5 rounded-full">Recommandé</span>
              </div>
            </div>
            <div className="p-5 text-center border-l border-white/8">
              <span className="text-muted-2 text-sm font-medium">Allo Maxi</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 border-b border-white/5 last:border-0 ${i % 2 === 0 ? 'bg-transparent' : 'bg-white/2'}`}>
              <div className="p-4 pl-5 text-sm text-muted-2 flex items-center">{row.feature}</div>
              <div className="p-4 border-l border-white/5 flex items-center justify-center">
                {row.fixlyy
                  ? <div className="w-7 h-7 bg-brand/20 border border-brand/30 rounded-full flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-brand" />
                    </div>
                  : <div className="w-7 h-7 bg-error/10 border border-error/20 rounded-full flex items-center justify-center">
                      <X className="w-3.5 h-3.5 text-error" />
                    </div>
                }
              </div>
              <div className="p-4 border-l border-white/5 flex items-center justify-center gap-2">
                {row.maxi
                  ? <div className="w-7 h-7 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-muted" />
                    </div>
                  : <div className="flex flex-col items-center gap-1">
                      <div className="w-7 h-7 bg-error/10 border border-error/20 rounded-full flex items-center justify-center">
                        <X className="w-3.5 h-3.5 text-error" />
                      </div>
                      {row.maxiNote && <span className="text-xs text-muted">{row.maxiNote}</span>}
                    </div>
                }
              </div>
            </div>
          ))}

          {/* Pricing row */}
          <div className="grid grid-cols-3 bg-dark-4 border-t border-white/10">
            <div className="p-5 text-white font-semibold text-sm flex items-center">Prix mensuel</div>
            <div className="p-5 border-l border-white/8 text-center">
              <p className="text-2xl font-black text-white">79 €<span className="text-muted text-sm font-normal">/mois</span></p>
              <p className="text-brand text-xs font-medium mt-0.5">Tarif fixe · Appels illimités dès Pro</p>
            </div>
            <div className="p-5 border-l border-white/8 text-center">
              <p className="text-2xl font-black text-muted-2">0,50 €<span className="text-muted text-sm font-normal">/min</span></p>
              <p className="text-error text-xs font-medium mt-0.5">Variable · Factures imprévisibles</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-brand hover:shadow-none"
          >
            Essayer Fixlyy gratuitement 30 jours →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
