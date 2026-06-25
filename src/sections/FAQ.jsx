import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "Comment Mia répond-elle à la place de mon téléphone ?",
    a: "Vous activez un renvoi d'appel conditionnel sur votre mobile (si occupé ou sans réponse). Le code se compose en 30 secondes depuis votre téléphone. Quand vous ne décrochez pas, Mia prend l'appel, répond avec le nom de votre entreprise, et vous envoie un SMS récap.",
  },
  {
    q: "Est-ce que Mia comprend bien le français des artisans ?",
    a: "Oui. Mia est entraînée sur des conversations du secteur du bâtiment et des services à domicile. Elle comprend les termes techniques, les accents régionaux, et sait reformuler pour s'assurer qu'elle a bien capté la demande.",
  },
  {
    q: "Qu'est-ce qui se passe si un client est vraiment urgent ?",
    a: "Mia identifie les urgences (fuite, panne, blocage) et vous en informe en priorité dans le SMS récap. Le champ urgence est clairement marqué pour que vous puissiez rappeler en premier le bon client.",
  },
  {
    q: "Combien de temps pour activer Mia ?",
    a: "3 minutes. Vous créez votre compte, renseignez votre entreprise, composez le code de renvoi sur votre téléphone, et c'est actif. Pas de technicien, pas d'installation.",
  },
  {
    q: "Est-ce que mes clients savent qu'ils parlent à Mia ?",
    a: "Mia se présente avec le nom de votre entreprise — elle ne se présente pas comme une IA. Elle répond naturellement en voix naturelle. La grande majorité des clients pensent parler à une vraie secrétaire.",
  },
  {
    q: "Que se passe-t-il si je dépasse mon quota de minutes ?",
    a: "Les minutes supplémentaires sont facturées à 0,20€/min. Vous êtes notifié à 80% de votre quota. Pas de coupure brutale — Mia continue de décrocher.",
  },
  {
    q: "Puis-je résilier à tout moment ?",
    a: "Après la période d'engagement initiale de 3 mois, vous pouvez résilier à tout moment sans frais ni délai. Vous résiliez depuis votre compte en quelques clics et la facturation s'arrête à la fin de la période en cours.",
  },
  {
    q: "Mes données clients sont-elles sécurisées ?",
    a: "Toutes les données sont hébergées en France (Supabase EU). Les appels ne sont pas enregistrés au-delà du traitement du récap. Fixlyy est conforme RGPD. Vous pouvez exporter ou supprimer vos données à tout moment.",
  },
];

function Item({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/6 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white leading-snug">{item.q}</span>
        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-muted-2">
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-muted-2 text-sm leading-relaxed pb-5 pr-10">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-dark-2">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Questions fréquentes
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl px-6 md:px-8">
          {FAQS.map((item, i) => (
            <Item
              key={i}
              item={item}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
