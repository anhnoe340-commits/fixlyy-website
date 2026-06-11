import React from 'react';
import { motion } from 'framer-motion';

// Numéro de démo Fixlyy — TODO: remplacer par le numéro dédié en prod
const DEMO_NUMBER = '09 39 24 70 81';
const DEMO_TEL = 'tel:+33939247081';
const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';

export default function SocialProof() {
  return (
    <section id="proof" className="py-20 md:py-28 bg-dark-2">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Accès anticipé</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Construit avec des artisans<br className="hidden md:block" /> d'Île-de-France
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Early access badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-8 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-brand/10 flex items-center justify-center text-2xl">🚀</div>
              <div>
                <p className="text-sm font-bold text-white">Accès anticipé actif</p>
                <p className="text-xs text-muted">Île-de-France · Depuis 2025</p>
              </div>
            </div>
            <p className="text-muted-2 text-sm leading-relaxed">
              Fixlyy est actuellement en accès anticipé avec des artisans indépendants d'Île-de-France.
              Nous construisons le produit avec eux, au plus près du terrain.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              {['Plombiers', 'Électriciens', 'Serruriers', 'Chauffagistes'].map(m => (
                <span key={m} className="text-xs bg-brand/10 text-brand border border-brand/20 rounded-full px-3 py-1">{m}</span>
              ))}
            </div>
          </motion.div>

          {/* Demo call CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-8 flex flex-col gap-5 bg-brand/8 border border-brand/20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-brand/20 flex items-center justify-center text-2xl">📞</div>
              <div>
                <p className="text-sm font-bold text-white">Entendez Mia en direct</p>
                <p className="text-xs text-brand">Démo disponible maintenant</p>
              </div>
            </div>
            <p className="text-muted-2 text-sm leading-relaxed">
              Appelez notre numéro de démo pour entendre Mia répondre comme elle le ferait pour votre entreprise.
              Elle décroche, qualifie, prend les infos — en vrai.
            </p>
            <a href={DEMO_TEL}
              className="inline-flex items-center justify-center gap-3 bg-brand hover:bg-brand-dark text-white font-bold text-base px-6 py-3.5 rounded-xl transition-all shadow-brand hover:shadow-none">
              <span className="text-xl">📞</span>
              Entendre Mia maintenant · {DEMO_NUMBER}
            </a>
            <p className="text-xs text-muted text-center">Appel gratuit · Durée ~60 secondes</p>
          </motion.div>
        </div>

        {/* Placeholder testimonials — updated when real reviews arrive */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-2 leading-relaxed">
            Les premiers avis clients seront publiés ici dès nos 10 premiers artisans actifs.
            En attendant — <a href={DEMO_TEL} className="text-brand hover:text-brand-light underline underline-offset-2 transition-colors">appelez le {DEMO_NUMBER}</a> pour juger par vous-même.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
