import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Est-ce que mes clients vont savoir qu\'ils parlent à une IA ?',
    a: 'La voix est naturelle et parle un français parfait avec le vocabulaire du bâtiment. La grande majorité des clients ne font pas la différence. Si vous préférez, vous pouvez choisir de présenter Fixlyy comme "votre secrétaire".',
  },
  {
    q: 'Que se passe-t-il si l\'IA ne comprend pas la demande ?',
    a: 'Fixlyy est entraîné sur les métiers de la plomberie et de l\'électricité. Si une demande est trop complexe ou ambiguë, l\'IA l\'indique au client et vous envoie quand même un SMS complet pour que vous puissiez rappeler.',
  },
  {
    q: 'Combien de temps prend la mise en service ?',
    a: 'Moins de 10 minutes. Vous renseignez votre profil (nom, métier, zone, tarifs), on configure la voix, et c\'est opérationnel. Notre équipe vous accompagne en cas de question via le chat support.',
  },
  {
    q: 'Pourquoi Fixlyy plutôt qu\'un autre service ?',
    a: 'Trois différences majeures : (1) Tarif fixe mensuel vs facturation à la minute — fini les factures imprévisibles. (2) SMS récap en 30 secondes avec qualification des urgences incluse dès le plan Pro. (3) Vocabulaire métier bâtiment 100% français, équipe et support français.',
  },
  {
    q: 'Puis-je changer de plan ou résilier à tout moment ?',
    a: 'Oui. Sans engagement, sans frais de résiliation. Vous changez ou annulez depuis votre dashboard en 2 clics. L\'abonnement prend fin à la fin de la période en cours.',
  },
  {
    q: 'Comment Fixlyy qualifie-t-il les urgences ?',
    a: 'Fixlyy est entraîné sur les métiers de la plomberie et de l\'électricité. Il reconnaît les situations urgentes (fuite active, coupure électrique, canalisation bouchée…) et vous envoie immédiatement un SMS prioritaire pour que vous puissiez rappeler en premier.',
  },
  {
    q: 'Que se passe-t-il après les 150 appels du plan Solo ?',
    a: 'Vous êtes notifié à 80% d\'utilisation. Si vous dépassez, vous pouvez passer au plan Pro (appels illimités) directement depuis votre dashboard. Les appels ne sont jamais refusés.',
  },
  {
    q: 'Fixlyy fonctionne-t-il en dehors de l\'Île-de-France ?',
    a: 'Fixlyy est actuellement optimisé pour les artisans d\'Île-de-France — notre zone de déploiement prioritaire. Le produit fonctionne partout en France, mais notre support terrain est concentré sur l\'IDF.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-dark-2 py-16 md:py-24 px-4 md:px-6 relative overflow-hidden" id="faq">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[140px]" />
      </div>
      <div className="max-w-3xl mx-auto relative">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-5">
            Questions fréquentes
          </h2>
          <p className="text-muted-2 text-lg">
            Pas de réponse ici ? Écrivez-nous à{' '}
            <a href="mailto:support@fixlyy.fr" className="text-brand hover:underline">support@fixlyy.fr</a>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <span className="text-white font-medium text-sm leading-snug">{faq.q}</span>
                <span className="text-brand shrink-0">
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-muted-2 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
