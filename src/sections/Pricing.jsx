import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';

const PLANS = [
  {
    id: 'solo',
    name: 'Solo',
    price: 97,
    annualMonthly: 77.60,
    annualTotal: 931.20,
    launchPrice: null,
    launchBadge: null,
    includedMin: 300,
    overageRate: '0,25',
    roi: 'Amorti dès 1 client récupéré / mois',
    popular: false,
    features: [
      '300 minutes incluses / mois',
      'Mia répond 24h/24, 7j/7',
      'SMS récap en 30 secondes',
      'Qualification des urgences',
      '1 numéro dédié',
      '1 utilisateur',
      'Support par email',
    ],
    cta: 'Démarrer Solo',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 197,
    annualMonthly: 157.60,
    annualTotal: 1891.20,
    launchPrice: 98.50,
    launchBadge: 'OFFRE LANCEMENT -50%',
    includedMin: 500,
    overageRate: '0,25',
    roi: 'Rentabilisé à 2 clients récupérés / mois',
    popular: true,
    features: [
      '500 minutes incluses / mois',
      'Tout Solo inclus',
      'SMS confirmation client',
      'CRM clients natif',
      'FAQ tarifaire configurable',
      "Jusqu'à 10 motifs d'appel",
      'Rapport hebdomadaire',
      'Statistiques détaillées',
      "Jusqu'à 3 utilisateurs",
      'Support prioritaire',
    ],
    cta: 'Démarrer Pro',
  },
  {
    id: 'max',
    name: 'Max',
    price: 347,
    annualMonthly: 277.60,
    annualTotal: 3331.20,
    launchPrice: 242.90,
    launchBadge: 'OFFRE LANCEMENT -30%',
    includedMin: 1000,
    overageRate: '0,20',
    roi: 'Pour les artisans multi-équipes',
    popular: false,
    features: [
      '1 000 minutes incluses / mois',
      'Tout Pro inclus',
      'Multilingue (FR EN AR ES PT)',
      "Jusqu'à 20 motifs d'appel",
      "Transfert appel urgent vers l'artisan",
      'Appels simultanés illimités',
      "Jusqu'à 10 utilisateurs",
      'Réponse sous 4h (manager@fixlyy.fr)',
    ],
    cta: 'Démarrer Max',
  },
];

const FLOAT_PARAMS = [
  { delay: '0s',    duration: '3.8s' },
  { delay: '0.6s',  duration: '4.2s' },
  { delay: '1.2s',  duration: '3.5s' },
];

function fmt(n) {
  return n.toFixed(2).replace('.', ',');
}

function PlanCard({ plan, index, isAnnual }) {
  const overageLabel = `Au-delà des ${plan.includedMin >= 1000 ? '1 000' : plan.includedMin} min : ${plan.overageRate}€/min`;
  const float = FLOAT_PARAMS[index];
  const ctaHref = `${COMMENCER_URL}?plan=${plan.id}${isAnnual ? '&billing=annual' : ''}`;

  const showLaunch = !isAnnual && plan.launchBadge;
  const topBadge = showLaunch ? plan.launchBadge : plan.popular ? (isAnnual ? 'Le plus populaire · -20%' : 'Le plus populaire · 80% des artisans') : null;
  const topBadgeGreen = showLaunch || (plan.popular && isAnnual);

  if (plan.popular) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative rounded-2xl flex flex-col overflow-hidden z-10 animate-float"
        style={{
          animationDelay: float.delay,
          animationDuration: float.duration,
          background: 'linear-gradient(145deg, rgba(59,91,245,0.18) 0%, rgba(59,91,245,0.08) 100%)',
          border: '2px solid rgba(59,91,245,0.6)',
          boxShadow: '0 0 40px rgba(59,91,245,0.25), 0 0 80px rgba(59,91,245,0.08)',
        }}
      >
        {topBadge && (
          <div
            className="text-white text-xs font-bold text-center py-2.5 px-4 tracking-widest uppercase"
            style={{ background: topBadgeGreen ? '#059669' : 'var(--color-brand, #3B5BF5)' }}
          >
            {topBadge}
          </div>
        )}
        <div className="p-7 flex flex-col flex-1 gap-5">
          <div>
            <p className="text-lg font-bold text-white mb-0.5">{plan.name}</p>
            {isAnnual ? (
              <div className="mb-1">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-emerald-400 leading-none">{fmt(plan.annualMonthly)}€</span>
                  <span className="text-muted text-sm mb-1.5">/mois HT</span>
                </div>
                <p className="text-xs text-white/50 mt-0.5">
                  Soit <span className="line-through">{fmt(plan.price * 12)}€</span> {fmt(plan.annualTotal)}€/an
                </p>
              </div>
            ) : showLaunch ? (
              <div className="mb-1">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-emerald-400 leading-none">{fmt(plan.launchPrice)}€</span>
                  <span className="text-muted text-sm mb-1.5">1er mois HT</span>
                </div>
                <p className="text-xs text-white/50 mt-0.5">Puis {plan.price}€/mois</p>
              </div>
            ) : (
              <div className="flex items-end gap-1.5 mb-1">
                <span className="text-5xl font-black text-white leading-none">{plan.price}€</span>
                <span className="text-muted text-sm mb-1.5">/mois HT</span>
              </div>
            )}
            <p className="text-xs text-brand font-medium">{plan.roi}</p>
          </div>

          <ul className="flex flex-col gap-3 flex-1">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2">
            <a href={ctaHref}
              className="w-full inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold text-base py-4 rounded-xl transition-all shadow-brand hover:shadow-none whitespace-nowrap">
              {plan.cta} →
            </a>
            <p className="text-xs text-muted text-center">{overageLabel}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative rounded-2xl flex flex-col overflow-hidden animate-float"
      style={{
        animationDelay: float.delay,
        animationDuration: float.duration,
        background: 'rgba(255,255,255,0.03)',
        border: (showLaunch || isAnnual) ? '1px solid rgba(5,150,105,0.4)' : '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {(showLaunch || isAnnual) && (
        <div className="text-white text-xs font-bold text-center py-2 px-4 tracking-widest uppercase"
          style={{ background: '#059669' }}>
          {isAnnual ? '-20% ANNUEL' : plan.launchBadge}
        </div>
      )}
      <div className="p-7 flex flex-col flex-1 gap-5">
        <div>
          <p className="text-base font-bold text-white mb-0.5">{plan.name}</p>
          {isAnnual ? (
            <div className="mb-1">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-emerald-400 leading-none">{fmt(plan.annualMonthly)}€</span>
                <span className="text-muted text-sm mb-1.5">/mois HT</span>
              </div>
              <p className="text-xs text-white/40 mt-0.5">
                Soit <span className="line-through">{fmt(plan.price * 12)}€</span> {fmt(plan.annualTotal)}€/an
              </p>
            </div>
          ) : showLaunch ? (
            <div className="mb-1">
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-emerald-400 leading-none">{fmt(plan.launchPrice)}€</span>
                <span className="text-muted text-sm mb-1.5">1er mois HT</span>
              </div>
              <p className="text-xs text-white/40 mt-0.5">Puis {plan.price}€/mois</p>
            </div>
          ) : (
            <div className="flex items-end gap-1.5 mb-1">
              <span className="text-4xl font-black text-white leading-none">{plan.price}€</span>
              <span className="text-muted text-sm mb-1.5">/mois HT</span>
            </div>
          )}
          <p className="text-xs text-muted-2">{plan.roi}</p>
        </div>

        <ul className="flex flex-col gap-3 flex-1">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-muted-2">
              <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-white/30" />
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2">
          <a href={ctaHref}
            className="w-full inline-flex items-center justify-center bg-white/8 hover:bg-white/14 border border-white/10 text-white font-semibold text-base py-3.5 rounded-xl transition-all whitespace-nowrap">
            {plan.cta} →
          </a>
          <p className="text-xs text-muted text-center">{overageLabel}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-10">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Tarifs</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Transparent. Sans surprise.
          </h2>
          <p className="text-muted-2 text-lg max-w-xl mx-auto">
            7 jours d'essai gratuit sur tous les plans.
          </p>
        </motion.div>

        {/* Toggle mensuel / annuel */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-white/40'}`}>
            Mensuel
          </span>
          <button
            onClick={() => setIsAnnual(a => !a)}
            className="relative w-14 h-7 rounded-full transition-colors duration-200 focus:outline-none"
            style={{ background: isAnnual ? '#059669' : 'rgba(255,255,255,0.15)' }}
            aria-label="Basculer facturation annuelle"
          >
            <span
              className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform duration-200"
              style={{ transform: isAnnual ? 'translateX(28px)' : 'translateX(0)' }}
            />
          </button>
          <span className={`text-sm font-medium flex items-center gap-2 transition-colors ${isAnnual ? 'text-white' : 'text-white/40'}`}>
            Annuel
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full" style={{ background: '#059669', color: '#fff' }}>
              -20%
            </span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-stretch mb-10">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} isAnnual={isAnnual} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center space-y-2">
          <p className="text-sm text-muted">
            Essai gratuit 7 jours · Satisfait ou remboursé 30 jours ·{' '}
            {isAnnual
              ? <span>Engagement 12 mois · Facturé annuellement</span>
              : <><Link to="/cgv" className="underline underline-offset-2 hover:text-white transition-colors">Engagement 3 mois</Link>{' '}· puis résiliable à tout moment</>
            }
          </p>
          <p className="text-xs text-muted/60">Prix HT · TVA 20% applicable · {isAnnual ? 'Facturation annuelle' : 'Facturation mensuelle'}</p>
        </motion.div>
      </div>
    </section>
  );
}
