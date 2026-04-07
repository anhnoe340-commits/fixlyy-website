import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const APP_URL = 'https://app.fixlyy.fr';

const plans = [
  {
    name: 'Solo',
    icon: '🔧',
    price: 79,
    desc: 'Idéal pour l\'artisan indépendant',
    color: 'border-white/10',
    features: [
      "Jusqu'à 150 appels/mois",
      'Secrétaire IA 24h/24, 7j/7',
      'Génération de devis automatique',
      'SMS récap en 30 secondes',
      'Qualification des urgences',
      'Planification des RDV',
      '1 utilisateur',
      'Support par email',
      'Mise en service gratuite',
    ],
  },
  {
    name: 'Pro',
    icon: '⚡',
    price: 149,
    desc: 'Pour les artisans avec un bon volume',
    popular: true,
    color: 'border-brand',
    features: [
      'Appels illimités',
      'Tout ce qui est inclus dans Solo',
      'Devis personnalisés avec votre logo',
      'Intégration Google Calendar',
      'Statistiques détaillées',
      '2 utilisateurs',
      'Support prioritaire par email',
      'Numéro de téléphone dédié',
    ],
  },
  {
    name: 'Équipe',
    icon: '👥',
    price: 249,
    desc: 'Pour les TPE et petites équipes',
    color: 'border-white/10',
    features: [
      'Tout ce qui est inclus dans Pro',
      'Appels illimités sur plusieurs lignes',
      "Jusqu'à 5 utilisateurs",
      'Multi-numéros',
      "Tableau de bord équipe",
      'Reporting hebdomadaire',
      'Support prioritaire',
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="bg-dark-2 py-24 px-6" id="pricing">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">Tarifs</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Tarif fixe. Zéro surprise.
          </h2>
          <p className="text-muted-2 text-lg max-w-lg mx-auto mb-8">
            Contrairement à Allo Maxi qui facture à la minute, Fixlyy vous propose un forfait mensuel clair. Pas de mauvaises surprises en fin de mois.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-dark-3 border border-white/10 rounded-xl p-1 gap-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${!annual ? 'bg-brand text-white' : 'text-muted-2 hover:text-white'}`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${annual ? 'bg-brand text-white' : 'text-muted-2 hover:text-white'}`}
            >
              Annuel
              <span className="text-xs bg-success/20 text-success px-2 py-0.5 rounded-full font-bold">-20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => {
            const price = annual ? Math.round(plan.price * 0.8) : plan.price;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-dark-3 rounded-2xl border-2 ${plan.color} p-7 flex flex-col ${plan.popular ? 'shadow-brand' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                    <Zap className="w-3 h-3" /> Recommandé
                  </div>
                )}

                <div className="mb-5">
                  <p className="text-2xl mb-2">{plan.icon}</p>
                  <h3 className="text-white font-black text-xl mb-1">{plan.name}</h3>
                  <p className="text-muted text-sm">{plan.desc}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-black text-white">{price}</span>
                    <span className="text-muted-2 text-lg mb-2">€/mois</span>
                  </div>
                  {annual && (
                    <p className="text-success text-xs font-medium mt-1">
                      Économisez {Math.round(plan.price * 0.2 * 12)} €/an
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      <span className="text-muted-2">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-4 rounded-xl font-bold text-base transition-all ${
                    plan.popular
                      ? 'bg-brand hover:bg-brand-dark text-white shadow-brand hover:shadow-none'
                      : 'bg-dark-4 hover:bg-dark text-white border border-white/10 hover:border-brand/30'
                  }`}
                >
                  Démarrer mon essai gratuit
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="mt-12 bg-dark-3 border border-success/20 rounded-2xl p-6 text-center"
        >
          <p className="text-2xl mb-3">🛡️</p>
          <p className="text-white font-bold text-lg mb-2">Garantie 30 jours satisfait ou remboursé</p>
          <p className="text-muted-2 text-sm max-w-md mx-auto">
            Sans engagement, résiliable à tout moment. Si Fixlyy ne répond pas à vos attentes dans les 30 premiers jours, on vous rembourse intégralement. Aucune question posée.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
