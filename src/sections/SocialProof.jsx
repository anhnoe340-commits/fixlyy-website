import React from 'react';
import { motion } from 'framer-motion';

export default function SocialProof() {
  const stats = [
    "✅ 50+ artisans IDF",
    "✅ 2 847 appels traités ce mois",
    "✅ 97% satisfaction",
    "✅ 143 800€ récupérés collectivement",
    // Duplicated for marquee effect
    "✅ 50+ artisans IDF",
    "✅ 2 847 appels traités ce mois",
    "✅ 97% satisfaction",
    "✅ 143 800€ récupérés collectivement",
  ];

  const testimonials = [
    "\"Plus jamais un appel manqué\" - Marc, plombier Paris 15",
    "\"3h/jour gagnées\" - Ahmed, électricien Montreuil",
    "\"Devis en 2 min au lieu de 30\" - Sophie, plomberie Versailles",
    // Duplicated
    "\"Plus jamais un appel manqué\" - Marc, plombier Paris 15",
    "\"3h/jour gagnées\" - Ahmed, électricien Montreuil",
    "\"Devis en 2 min au lieu de 30\" - Sophie, plomberie Versailles",
  ];

  return (
    <section className="bg-white border-y border-neutral-200 overflow-hidden py-6 flex flex-col gap-4 relative z-20 shadow-sm">
      
      {/* Stats Ticker */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ ease: "linear", duration: 25, repeat: Infinity, repeatType: 'loop' }}
          className="flex whitespace-nowrap"
        >
          {stats.map((stat, i) => (
            <div key={`stat-${i}`} className="mx-8 text-neutral-600 font-semibold flex items-center gap-2">
              {stat}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mini Testimonials Ticker (Moves opposite direction) */}
      <div className="relative flex overflow-x-hidden mt-2">
        <motion.div 
          animate={{ x: [-1000, 0] }} 
          transition={{ ease: "linear", duration: 30, repeat: Infinity, repeatType: 'loop' }}
          className="flex whitespace-nowrap"
        >
          {testimonials.map((test, i) => (
            <div key={`test-${i}`} className="mx-12 text-sm text-neutral-500 italic">
              {test}
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
