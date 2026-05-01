import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Phone3D from '../components/Phone3D';

const steps = [
  {
    number: '01',
    title: 'Un client appelle à 22h',
    desc: 'Vous êtes sous un évier, les mains dans les tuyaux. Le téléphone sonne. Vous ne pouvez pas décrocher.',
    highlight: 'Sans Fixlyy → client perdu.',
    accent: '#EF4444',
  },
  {
    number: '02',
    title: 'Mia décroche en 1 seconde',
    desc: 'Votre assistante IA répond immédiatement, dans la langue du client. Elle pose les bonnes questions, détecte l\'urgence, rassure le client.',
    highlight: 'Avec Fixlyy → client pris en charge.',
    accent: '#3B5BF5',
  },
  {
    number: '03',
    title: 'SMS sur votre mobile en 30s',
    desc: 'Nom, numéro, type d\'intervention, niveau d\'urgence, adresse. Tout résumé et envoyé sur votre téléphone avant même que vous ayez posé vos outils.',
    highlight: 'Vous rappellez en 3 min → contrat signé.',
    accent: '#10B981',
  },
  {
    number: '04',
    title: '2 400 €/mois récupérés',
    desc: '8 appels manqués par semaine × 300 € de valeur moyenne = 2 400 €/mois qui restaient chez la concurrence. Maintenant ils restent chez vous.',
    highlight: 'ROI positif dès le 1er mois.',
    accent: '#F59E0B',
  },
];

export default function PhoneScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-4, 0, 4]);

  return (
    <section ref={containerRef} className="bg-dark py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/4 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">Comment ça marche</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-5">
            De l'appel au SMS<br />en <span className="text-brand">30 secondes.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Phone — sticky on desktop */}
          <div className="lg:sticky lg:top-32 flex justify-center lg:justify-start w-full lg:w-auto shrink-0">
            <motion.div style={{ y: phoneY, rotate: phoneRotate }}>
              <Phone3D size="md" showNotifications={false} />
            </motion.div>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-10 flex-1 lg:pt-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-14 w-px h-10 bg-white/10 hidden lg:block" />
                )}

                <div className="flex items-start gap-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                    style={{ background: step.accent + '20', border: `2px solid ${step.accent}40`, color: step.accent }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg md:text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-2 text-sm md:text-base leading-relaxed mb-3">{step.desc}</p>
                    <div
                      className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl"
                      style={{ background: step.accent + '15', color: step.accent, border: `1px solid ${step.accent}30` }}
                    >
                      → {step.highlight}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
