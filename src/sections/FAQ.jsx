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
    q: 'Quelle est la différence avec Allo Maxi ?',
    a: 'Trois différences majeures : (1) Tarif fixe mensuel vs facturation à la minute — fini les factures imprévisibles. (2) Génération de devis automatique incluse — Allo Maxi ne fait pas ça. (3) SMS récap en 30 secondes garanti. De plus, Fixlyy est 100% français : équipe, support et vocabulaire métier.',
  },
  {
    q: 'Puis-je changer de plan ou résilier à tout moment ?',
    a: 'Oui. Sans engagement, sans frais de résiliation. Vous changez ou annulez depuis votre dashboard en 2 clics. L\'abonnement prend fin à la fin de la période en cours.',
  },
  {
    q: 'Les devis sont-ils vraiment professionnels ?',
    a: 'Fixlyy génère des PDF avec votre logo, vos coordonnées, une numérotation automatique et les postes détaillés (main d\'oeuvre + matériaux). Vous pouvez les personnaliser depuis votre dashboard avant envoi.',
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
    <section className="bg-dark-2 py-24 px-6" id="faq">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
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
              className="bg-dark-3 border border-white/8 rounded-xl overflow-hidden"
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
