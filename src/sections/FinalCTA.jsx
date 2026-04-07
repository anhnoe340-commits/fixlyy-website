import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

const APP_URL = 'https://app.fixlyy.fr';

export default function FinalCTA() {
  return (
    <section className="bg-dark py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative bg-dark-3 border border-brand/30 rounded-3xl p-12 text-center overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand/10 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand text-sm font-medium px-4 py-2 rounded-full mb-6">
              <PhoneCall className="w-4 h-4" />
              Prêt en 10 minutes · Sans engagement
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Commencez à récupérer<br />
              <span className="text-brand">2 400 €/mois</span> dès demain.
            </h2>

            <p className="text-muted-2 text-lg max-w-xl mx-auto mb-10">
              Rejoignez les artisans d'Île-de-France qui ne ratent plus jamais un appel client. Essai gratuit 30 jours, aucune carte bancaire requise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-lg px-10 py-5 rounded-xl transition-all shadow-brand hover:shadow-none"
              >
                Démarrer mon essai gratuit
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted">
              {['30 jours satisfait ou remboursé', 'Sans engagement', 'Support français inclus', 'Configuration en 10 min'].map(t => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="text-success">✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
