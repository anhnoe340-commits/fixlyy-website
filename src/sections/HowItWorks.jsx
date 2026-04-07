import React from 'react';
import { motion } from 'framer-motion';
import { PhoneForwarded, Settings2, Sparkles } from 'lucide-react';

const steps = [
  { n:'1', icon: PhoneForwarded, badge:'⏱ 5 min', title:'Redirigez votre numéro', desc:'Transférez vos appels vers votre numéro Fixlyy depuis les paramètres de votre téléphone — aucune connaissance technique.' },
  { n:'2', icon: Settings2,      badge:'⏱ 5 min', title:'Configurez Fixlyy',       desc:'Renseignez votre métier, votre zone, vos tarifs. Fixlyy apprend votre vocabulaire et adapte ses réponses.' },
  { n:'3', icon: Sparkles,       badge:'24/7 actif', title:'Détendez-vous',         desc:'Fixlyy prend le relais. Vous recevez un SMS récap en 30 secondes après chaque appel.' },
];

export default function HowItWorks() {
  return (
    <section className="bg-dark py-24 px-6" id="how-it-works">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">🚀 C'est simple.</h2>
          <p className="text-muted-2 text-lg max-w-lg mx-auto">En 3 étapes vers votre secrétaire IA personnelle</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s,i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.15}} className="flex flex-col items-center text-center">
                <div className="w-[52px] h-[52px] rounded-full bg-brand flex items-center justify-center text-white font-black text-xl mb-6 shadow-brand-sm">{s.n}</div>
                <div className="bg-dark-3 border border-white/8 rounded-2xl p-7 w-full hover:border-brand/30 transition-colors">
                  <div className="w-14 h-14 bg-brand/10 rounded-xl flex items-center justify-center text-brand mx-auto mb-4"><Icon className="w-7 h-7"/></div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-2 bg-dark-4 border border-white/8 px-3 py-1 rounded-full mb-4">{s.badge}</span>
                  <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-muted-2 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.5}} className="mt-10 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2.5 border border-success/30 bg-success/5 text-success text-sm font-semibold px-5 py-2.5 rounded-full">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse"/>
            Configuration terminée en moins de 10 minutes ✅
          </div>
          <p className="text-muted text-sm">Aucune connaissance technique requise. Notre équipe vous accompagne.</p>
        </motion.div>
      </div>
    </section>
  );
}
