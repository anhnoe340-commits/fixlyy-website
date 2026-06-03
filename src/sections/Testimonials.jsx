import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ShieldCheck } from 'lucide-react';

const APP_URL = 'https://app.fixlyy.fr';

const earlySignals = [
  {
    icon: Clock,
    color: '#3B5BF5',
    title: 'Lancement en Île-de-France',
    body: 'Fixlyy est en phase de lancement actif sur la région parisienne. Les premières places sont limitées pour garantir un accompagnement personnalisé à chaque artisan.',
  },
  {
    icon: ShieldCheck,
    color: '#10B981',
    title: '30 jours satisfait ou remboursé',
    body: "On ne vous demande pas de nous faire confiance sur parole. Essayez pendant 30 jours. Si Fixlyy ne vous convient pas, on vous rembourse intégralement — sans question.",
  },
  {
    icon: Sparkles,
    color: '#F59E0B',
    title: 'Construit avec des artisans IDF',
    body: "Fixlyy a été conçu après des dizaines d'entretiens téléphoniques avec des plombiers et électriciens parisiens. Chaque fonctionnalité répond à un vrai besoin terrain.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-dark py-16 md:py-24 px-4 md:px-6" id="testimonials">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">Pourquoi nous faire confiance</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-5">
            Un produit jeune,<br />
            <span className="text-brand">une garantie béton.</span>
          </h2>
          <p className="text-muted-2 text-lg max-w-xl mx-auto">
            On ne va pas vous inventer des avis. Fixlyy est en lancement — et c'est pour ça qu'on offre 30 jours remboursés, sans condition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {earlySignals.map(({ icon: Icon, color, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-7 flex flex-col gap-4"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: color + '18', border: `1px solid ${color}30` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="text-white font-bold text-base">{title}</h3>
              <p className="text-muted-2 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA honnête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-brand rounded-2xl p-8 text-center"
        >
          <p className="text-white font-bold text-xl mb-3">
            Soyez parmi les premiers artisans à tester Fixlyy.
          </p>
          <p className="text-muted-2 text-sm max-w-lg mx-auto mb-6">
            Essai gratuit 7 jours, aucune carte bancaire requise. Et si dans les 30 jours suivant votre abonnement vous n'êtes pas convaincu, on vous rembourse.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-all shadow-brand hover:shadow-none text-sm"
          >
            Démarrer mon essai gratuit →
          </a>
          <p className="text-muted text-xs mt-4">Sans engagement · Configuration en 10 min · Support français</p>
        </motion.div>

      </div>
    </section>
  );
}
