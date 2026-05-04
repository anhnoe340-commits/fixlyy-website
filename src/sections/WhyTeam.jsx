import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Users, BarChart2, Star } from 'lucide-react';

const reasons = [
  {
    icon: PhoneCall,
    title: 'Plusieurs lignes, zéro raté',
    body: "Quand toute l'équipe est sur chantier, personne ne peut décrocher. Fixlyy répond sur toutes vos lignes simultanément — chaque appel client est capté, même en heure de pointe.",
  },
  {
    icon: Users,
    title: 'Un numéro par technicien',
    body: "Chaque membre de l'équipe garde son numéro dédié. Les clients joignent directement la bonne personne, et chacun reçoit ses résumés d'appels par SMS.",
  },
  {
    icon: BarChart2,
    title: 'Pilotez l\'activité en temps réel',
    body: "Le tableau de bord Équipe centralise tous les appels de vos collaborateurs. Identifiez les pics d'appels, les urgences non traitées, et répartissez la charge efficacement.",
  },
  {
    icon: Star,
    title: 'Reporting hebdomadaire automatique',
    body: "Chaque lundi matin, recevez un rapport complet : volume d'appels, taux de transformation, urgences traitées. Pour piloter sans passer vos week-ends à compiler des données.",
  },
];

export default function WhyTeam() {
  return (
    <section className="bg-dark-2 py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">Plan Équipe</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Pourquoi choisir le plan&nbsp;Équipe&nbsp;?
          </h2>
          <p className="text-muted-2 text-lg max-w-xl mx-auto">
            Pour les TPE avec plusieurs techniciens, Fixlyy s'adapte à votre organisation — pas l'inverse.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex gap-5"
            >
              <div className="shrink-0 w-11 h-11 rounded-xl bg-brand/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-muted-2 text-sm leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a
            href="mailto:contact@fixlyy.fr"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl transition-all shadow-brand hover:shadow-none text-sm"
          >
            <Users className="w-4 h-4" />
            Discuter du plan Équipe
          </a>
          <p className="text-muted text-xs mt-3">Réponse sous 24h · Démo offerte · Devis sur mesure</p>
        </motion.div>
      </div>
    </section>
  );
}
