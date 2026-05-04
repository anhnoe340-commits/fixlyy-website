import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Users } from 'lucide-react';

const APP_URL = 'https://app.fixlyy.fr';

const PRICE_PER_USER = 50; // €/utilisateur/mois

function getDiscount(count) {
  if (count >= 20) return 0.15;
  if (count >= 10) return 0.10;
  if (count >= 5)  return 0.05;
  return 0;
}

function getTeamPrice(count, annual) {
  const discount = getDiscount(count);
  const base = PRICE_PER_USER * count * (1 - discount);
  return annual ? Math.round(base * 0.8) : Math.round(base);
}

const soloFeatures = [
  "Jusqu'à 150 appels/mois",
  'Secrétaire IA 24h/24, 7j/7',
  'SMS récap en 30 secondes',
  'Qualification automatique des urgences',
  'Prise de rendez-vous pendant l\'appel',
  '1 utilisateur',
  'Support par email',
  'Mise en service gratuite',
];

const proFeatures = [
  'Appels illimités',
  'Tout ce qui est inclus dans Solo',
  'Qualification des urgences',
  'Planification des RDV',
  'Rapport d\'appels hebdomadaire',
  'Intégration Google Calendar',
  'Statistiques détaillées',
  "Jusqu'à 3 utilisateurs",
  'Support prioritaire par email',
  'Numéro de téléphone dédié',
];

const teamFeatures = [
  'Tout ce qui est inclus dans Pro',
  'Appels illimités sur plusieurs lignes',
  'Utilisateurs illimités',
  'Multi-numéros',
  'Tableau de bord équipe',
  'Reporting hebdomadaire',
  'Support prioritaire dédié',
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [teamCount, setTeamCount] = useState(3);

  const soloPrice  = annual ? Math.round(79 * 0.8)  : 79;
  const proPrice   = annual ? Math.round(149 * 0.8) : 149;
  const teamPrice  = getTeamPrice(teamCount, annual);
  const discount   = getDiscount(teamCount);

  return (
    <section className="bg-dark-2 py-16 md:py-24 px-4 md:px-6 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand/7 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-purple-500/4 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-6xl mx-auto relative">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">Tarifs</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-5">
            Tarif fixe. Zéro surprise.
          </h2>
          <p className="text-muted-2 text-lg max-w-lg mx-auto mb-8">
            Un forfait mensuel clair, sans facturation à la minute. Pas de mauvaises surprises en fin de mois.
          </p>

          {/* Toggle mensuel / annuel */}
          <div className="inline-flex items-center glass rounded-xl p-1 gap-1">
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

        <div className="grid md:grid-cols-3 gap-6 items-stretch">

          {/* ── Solo ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-7 flex flex-col"
          >
            <div className="mb-5">
              <p className="text-2xl mb-2">🔧</p>
              <h3 className="text-white font-black text-xl mb-1">Solo</h3>
              <p className="text-muted text-sm">Idéal pour l'artisan indépendant</p>
            </div>
            <div className="mb-6">
              <div className="flex items-end gap-1">
                <span className="text-5xl font-black text-white">{soloPrice}</span>
                <span className="text-muted-2 text-lg mb-2">€/mois</span>
              </div>
              {annual && <p className="text-success text-xs font-medium mt-1">Économisez {Math.round(79 * 0.2 * 12)} €/an</p>}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {soloFeatures.map(f => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span className="text-muted-2">{f}</span>
                </li>
              ))}
            </ul>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="w-full text-center py-4 rounded-xl font-bold text-base transition-all bg-dark-4 hover:bg-dark text-white border border-white/10 hover:border-brand/30">
              Démarrer mon essai gratuit
            </a>
            <p className="text-center text-xs text-muted mt-3">✓ Essai gratuit 7 jours · ✓ Sans engagement</p>
          </motion.div>

          {/* ── Pro ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-brand shadow-brand rounded-2xl p-7 flex flex-col relative"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap">
              <Zap className="w-3 h-3" /> Recommandé
            </div>
            <div className="mb-5">
              <p className="text-2xl mb-2">⚡</p>
              <h3 className="text-white font-black text-xl mb-1">Pro</h3>
              <p className="text-muted text-sm">Pour les artisans avec un bon volume</p>
            </div>
            <div className="mb-6">
              <div className="flex items-end gap-1">
                <span className="text-5xl font-black text-white">{proPrice}</span>
                <span className="text-muted-2 text-lg mb-2">€/mois</span>
              </div>
              {annual && <p className="text-success text-xs font-medium mt-1">Économisez {Math.round(149 * 0.2 * 12)} €/an</p>}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {proFeatures.map(f => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span className="text-muted-2">{f}</span>
                </li>
              ))}
            </ul>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="w-full text-center py-4 rounded-xl font-bold text-base transition-all bg-brand hover:bg-brand-dark text-white shadow-brand hover:shadow-none">
              Démarrer mon essai gratuit
            </a>
            <p className="text-center text-xs text-muted mt-3">✓ Essai gratuit 7 jours · ✓ Sans engagement</p>
          </motion.div>

          {/* ── Équipe — prix à la carte ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-7 flex flex-col"
          >
            <div className="mb-5">
              <p className="text-2xl mb-2">👥</p>
              <h3 className="text-white font-black text-xl mb-1">Équipe</h3>
              <p className="text-muted text-sm">Pour les TPE et petites équipes</p>
            </div>

            {/* Sélecteur d'utilisateurs */}
            <div className="mb-6 glass rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-semibold flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand" /> Utilisateurs
                </span>
                <span className="text-brand font-black text-xl">{teamCount}</span>
              </div>
              <input
                type="range" min="2" max="30" value={teamCount}
                onChange={e => setTeamCount(Number(e.target.value))}
                className="w-full accent-brand h-1.5 rounded-full"
              />
              <div className="flex justify-between text-[10px] text-muted mt-1.5">
                <span>2</span><span>10</span><span>20</span><span>30+</span>
              </div>
            </div>

            {/* Prix calculé */}
            <div className="mb-4">
              <div className="flex items-end gap-1">
                <span className="text-5xl font-black text-white">{teamPrice}</span>
                <span className="text-muted-2 text-lg mb-2">€/mois</span>
              </div>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <span className="text-muted text-xs">{PRICE_PER_USER} €/utilisateur</span>
                {discount > 0 && (
                  <span className="text-success text-xs font-bold bg-success/10 px-2 py-0.5 rounded-full">
                    -{Math.round(discount * 100)}% volume
                  </span>
                )}
              </div>
              {annual && <p className="text-success text-xs font-medium mt-1">-20% annuel inclus</p>}
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {teamFeatures.map(f => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                  <span className="text-muted-2">{f}</span>
                </li>
              ))}
            </ul>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer"
              className="w-full text-center py-4 rounded-xl font-bold text-base transition-all bg-dark-4 hover:bg-dark text-white border border-white/10 hover:border-brand/30">
              Nous contacter
            </a>
          </motion.div>

        </div>

        {/* Garantie */}
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
