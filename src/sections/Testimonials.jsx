import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Thomas D.',
    role: 'Plombier indépendant',
    city: 'Vincennes (94)',
    avatar: 'T',
    stars: 5,
    text: 'En 3 semaines, j\'ai récupéré 7 clients que j\'aurais perdus. Fixlyy répond quand je suis sous un évier — c\'est exactement ce dont j\'avais besoin. Le devis auto, c\'est du bonus.',
    highlight: '+7 clients en 3 semaines',
  },
  {
    name: 'Karim B.',
    role: 'Électricien',
    city: 'Saint-Denis (93)',
    avatar: 'K',
    stars: 5,
    text: 'J\'étais sceptique sur l\'IA. Mais la voix est vraiment naturelle, les clients ne se rendent pas compte. Et les SMS récap en 30 secondes... je les reçois avant même d\'avoir rangé mes outils.',
    highlight: 'Clients ne voient pas la différence',
  },
  {
    name: 'Sophie M.',
    role: 'Plombière chauffagiste',
    city: 'Boulogne (92)',
    avatar: 'S',
    stars: 5,
    text: 'Avant je passais 2h par jour à rappeler les gens et faire des devis. Maintenant c\'est fait automatiquement. J\'ai gagné du temps et de l\'argent. La mise en service était vraiment simple.',
    highlight: '2h/jour récupérées',
  },
  {
    name: 'Marc L.',
    role: 'Plombier',
    city: 'Massy (91)',
    avatar: 'M',
    stars: 5,
    text: 'Le tarif fixe c\'est ce qui m\'a convaincu. Allo Maxi m\'envoyait des factures à 200€+ certains mois. Avec Fixlyy je sais exactement ce que je paye. 149€ et c\'est réglé.',
    highlight: 'Tarif prévisible vs Allo Maxi',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-dark py-24 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">Témoignages</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Ce que disent les artisans.
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-brand fill-brand" />
            ))}
          </div>
          <p className="text-muted-2 text-sm">4.9/5 · 87 avis vérifiés</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-3 border border-white/8 rounded-2xl p-7 flex flex-col gap-4"
            >
              <div className="flex items-center gap-1">
                {Array(t.stars).fill(0).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-brand fill-brand" />
                ))}
              </div>

              <p className="text-white/90 text-base leading-relaxed italic">"{t.text}"</p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center text-brand font-black text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-muted text-xs">{t.role} · {t.city}</p>
                  </div>
                </div>
                <span className="text-xs text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full font-medium">
                  {t.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
