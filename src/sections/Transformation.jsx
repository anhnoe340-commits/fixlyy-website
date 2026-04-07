import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Transformation() {
  const [callsPerWeek, setCallsPerWeek] = useState(8);

  // ROI Calculations
  const callsPerMonth = callsPerWeek * 4;
  const avgCallValue = 300;
  const lostRevenue = callsPerMonth * avgCallValue;
  const fixlyyCost = 79;
  const savedRevenue = lostRevenue - fixlyyCost;
  const roi = fixlyyCost > 0 ? ((savedRevenue / fixlyyCost) * 100).toFixed(0) : 0;

  return (
    <section className="breathing-room bg-white border-y border-neutral-200 relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-error/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-64 h-64 bg-success/5 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-4"
        >
          Votre vie <span className="text-error relative">AVANT<div className="absolute -bottom-2 left-0 w-full h-1 bg-error/30" /></span> Fixlyy vs <span className="text-success relative">APRÈS<div className="absolute -bottom-2 left-0 w-full h-1 bg-success/30" /></span> Fixlyy
        </motion.h2>
      </div>

      {/* Comparison Split */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch mb-20 relative z-10">
        
        {/* Before */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-neutral-light/50 border border-error/20 rounded-3xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="text-6xl font-black text-error">❌</span>
          </div>
          <h3 className="text-2xl font-bold text-error mb-8 flex items-center">
            <span className="bg-error/10 p-2 rounded-xl mr-3">❌</span> AVANT FIXLYY
          </h3>
          <ul className="space-y-4 font-medium text-gray-600">
            <li className="flex items-center"><span className="text-error mr-3 font-bold">−</span> 8h/semaine admin</li>
            <li className="flex items-center"><span className="text-error mr-3 font-bold">−</span> 2h/jour devis</li>
            <li className="flex items-center"><span className="text-error mr-3 font-bold">−</span> 8 appels ratés/semaine</li>
            <li className="flex items-center"><span className="text-error mr-3 font-bold">−</span> Stress constant</li>
            <li className="flex items-center"><span className="text-error mr-3 font-bold">−</span> 2 400€/mois perdus</li>
            <li className="flex items-center"><span className="text-error mr-3 font-bold">−</span> Client attend 2 jours</li>
            <li className="flex items-center"><span className="text-error mr-3 font-bold">−</span> Téléphone qui sonne</li>
          </ul>
          <div className="mt-8 pt-6 border-t border-error/10 text-xl font-bold text-error">
            = CHAOS
          </div>
        </motion.div>

        {/* Arrow (Desktop), Down Arrow (Mobile) */}
        <div className="flex items-center justify-center lg:w-16">
          <div className="bg-white rounded-full p-4 shadow-xl border border-neutral-100 text-primary z-20">
            <ArrowRight size={32} className="hidden lg:block" />
            <ArrowRight size={32} className="block lg:hidden rotate-90" />
          </div>
        </div>

        {/* After */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-success/5 border border-success/30 rounded-3xl p-8 relative overflow-hidden shadow-lg shadow-success/10"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="text-6xl font-black text-success">✅</span>
          </div>
          <h3 className="text-2xl font-bold text-success mb-8 flex items-center">
            <span className="bg-success/20 p-2 rounded-xl mr-3">✅</span> AVEC FIXLYY
          </h3>
          <ul className="space-y-4 font-medium text-secondary">
            <li className="flex items-center"><span className="text-success mr-3 font-bold">✓</span> <strong className="mr-1">0h</strong> admin</li>
            <li className="flex items-center"><span className="text-success mr-3 font-bold">✓</span> <strong className="mr-1">15min/jour</strong> devis</li>
            <li className="flex items-center"><span className="text-success mr-3 font-bold">✓</span> <strong className="mr-1">0</strong> appel raté</li>
            <li className="flex items-center"><span className="text-success mr-3 font-bold">✓</span> Sérénité totale</li>
            <li className="flex items-center"><span className="text-success mr-3 font-bold">✓</span> <strong className="text-success mr-1">+2 400€</strong> récupérés</li>
            <li className="flex items-center"><span className="text-success mr-3 font-bold">✓</span> Devis en 2 minutes</li>
            <li className="flex items-center"><span className="text-success mr-3 font-bold">✓</span> Vous travaillez</li>
          </ul>
          <div className="mt-8 pt-6 border-t border-success/20 text-xl font-black text-success">
            = CONTRÔLE ABSOLU
          </div>
        </motion.div>

      </div>

      <div className="text-center mb-16 relative z-10">
        <p className="inline-block bg-secondary text-white px-8 py-3 rounded-2xl text-xl md:text-2xl font-medium shadow-xl">
          La différence ? <strong className="text-accent underline decoration-accent/50 underline-offset-4">79€/mois.</strong>
        </p>
      </div>

      {/* ROI Calculator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden relative z-10"
      >
        <div className="bg-secondary p-6 text-white text-center">
          <h3 className="text-2xl font-bold tracking-tight">Calculez vos économies instantanées</h3>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="mb-10">
            <label className="block text-lg font-bold text-secondary mb-4 text-center">
              Combien d'appels ratez-vous par <span className="underline decoration-primary underline-offset-2">semaine</span> ?
            </label>
            <div className="flex items-center justify-center max-w-xs mx-auto relative">
              <input 
                type="range" 
                min="0" 
                max="30" 
                value={callsPerWeek}
                onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                className="w-full h-3 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
            <div className="text-center mt-6">
              <span className="text-5xl font-black text-primary font-mono bg-primary/10 px-6 py-2 rounded-2xl inline-block border border-primary/20 shadow-sm">{callsPerWeek}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-error/5 p-6 rounded-2xl border border-error/10 flex flex-col justify-center">
              <div className="text-sm text-gray-500 font-bold mb-1 uppercase tracking-wider">Vous perdez :</div>
              <div className="text-2xl font-black text-error font-mono">{lostRevenue.toLocaleString()}€ <span className="text-sm font-medium">/mois</span></div>
            </div>
            <div className="bg-success/5 p-6 rounded-2xl border border-success/30 flex flex-col justify-center">
              <div className="text-sm text-gray-600 font-bold mb-1 uppercase tracking-wider">Fixlyy récupère :</div>
              <div className="text-2xl font-black text-success font-mono">+{savedRevenue.toLocaleString()}€ <span className="text-sm font-medium">/mois net</span></div>
            </div>
          </div>
          
          {callsPerWeek > 0 && (
            <div className="mt-6 bg-gradient-to-r from-primary to-accent p-6 rounded-2xl text-white text-center shadow-lg shadow-primary/20">
              <div className="text-sm font-bold opacity-90 mb-1 uppercase tracking-wider">Retour sur Investissement (ROI)</div>
              <div className="text-4xl font-black tracking-tight"><span className="text-emerald-300">+</span>{roi}%</div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
