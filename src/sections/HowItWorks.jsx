import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Zap, MessageSquare, Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Phone className="w-6 h-6" />,
    title: 'Votre client appelle',
    desc: 'Fixlyy répond instantanément, 24h/24, 7j/7 — même à 22h, même le dimanche. Voix naturelle en français, vocabulaire métier maîtrisé.',
    detail: 'Temps de réponse : < 2 secondes',
  },
  {
    number: '02',
    icon: <Zap className="w-6 h-6" />,
    title: 'L\'IA qualifie et génère un devis',
    desc: 'En 2 minutes, Fixlyy pose les bonnes questions, identifie l\'urgence, calcule le devis et envoie un PDF professionnel au client par email.',
    detail: 'Devis généré en 2 minutes',
  },
  {
    number: '03',
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Vous recevez le résumé SMS',
    desc: 'En 30 secondes après l\'appel, vous recevez un SMS avec tout : nom, adresse, type d\'intervention, niveau d\'urgence, montant du devis.',
    detail: 'SMS reçu en 30 secondes',
  },
  {
    number: '04',
    icon: <Check className="w-6 h-6" />,
    title: 'Vous décidez en 1 clic',
    desc: 'Accepter, planifier, déléguer. Vous gardez le contrôle total. Fixlyy ne fait rien sans votre accord final sur le rendez-vous.',
    detail: 'Vous restez maître de votre agenda',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-dark py-24 px-6" id="how-it-works">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">Comment ça marche</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Opérationnel en 10 minutes.
          </h2>
          <p className="text-muted-2 text-lg max-w-xl mx-auto">
            Pas d'installation complexe. Vous renseignez votre profil, on configure la voix, et Fixlyy commence à répondre à vos appels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-dark-3 border border-white/8 rounded-2xl p-6 group hover:border-brand/30 transition-colors"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-2.5 w-5 h-px bg-white/10 z-10" />
              )}

              <div className="text-xs font-mono text-brand/50 mb-4">{s.number}</div>

              <div className="w-11 h-11 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center text-brand mb-4 group-hover:bg-brand group-hover:text-white transition-all">
                {s.icon}
              </div>

              <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
              <p className="text-muted-2 text-sm leading-relaxed mb-4">{s.desc}</p>

              <div className="inline-flex items-center gap-1.5 text-xs text-brand font-medium bg-brand/10 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-brand rounded-full" />
                {s.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Setup promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-2 text-sm">
            Mise en service gratuite incluse dans tous les plans.{' '}
            <span className="text-white font-medium">Notre équipe vous accompagne étape par étape.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
