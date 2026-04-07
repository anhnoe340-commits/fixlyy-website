import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function FeatureQuotes() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Diagnostic problème",
    "Liste matériel nécessaire",
    "Temps main d'œuvre estimé",
    "Calcul prix total HT/TTC",
    "PDF professionnel avec logo",
    "Envoi email client automatique"
  ];

  // Rotate through steps for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="breathing-room bg-white overflow-hidden">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-4"
        >
          Devis en 2 minutes. <span className="text-alert border-b-4 border-alert/30 pb-1">Pas 2 heures.</span>
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-center">
        
        {/* Animated quote generation */}
        <div className="flex-1 w-full bg-secondary text-white rounded-3xl p-8 border border-secondary shadow-2xl relative">
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
            Fixlyy génère le devis...
          </h3>
          
          <div className="space-y-4 mb-8">
            {steps.map((step, index) => {
              const isActive = index === currentStep;
              const isDone = index < currentStep;
              
              return (
                <div 
                  key={index} 
                  className={`flex items-center p-3 rounded-xl transition-all duration-300 ${
                    isActive ? 'bg-primary/20 border border-primary/30' : 
                    isDone ? 'bg-white/5 opacity-60' : 'opacity-20'
                  }`}
                >
                  <CheckCircle2 
                    size={20} 
                    className={`mr-3 ${
                      isDone ? 'text-success' : 
                      isActive ? 'text-primary' : 'text-gray-500'
                    }`} 
                  />
                  <span className={`font-medium ${isActive ? 'text-white font-bold' : ''}`}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Info Area */}
        <div className="flex-1 w-full space-y-8">
          
          <div className="bg-neutral-light border border-neutral-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-6 mb-4">
              <div className="text-lg font-bold text-error line-through flex-1 text-right">Avant</div>
              <div className="text-secondary font-black">→</div>
              <div className="text-2xl font-black text-success flex-1">Après</div>
            </div>
            <div className="flex items-center gap-6 border-t border-neutral-200 pt-4">
              <div className="text-lg font-bold text-gray-500 line-through flex-1 text-right">30-45 min</div>
              <div className="text-gray-300">|</div>
              <div className="text-3xl font-black text-primary flex-1">
                2 min*
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 font-medium mt-4 italic">
              * dont 1min50 pour boire un café ☕
            </p>
          </div>

          {/* Inline Testimonial */}
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 relative">
            <div className="absolute top-4 left-6 text-6xl text-primary/20 font-serif leading-none">"</div>
             <blockquote className="relative z-10 text-lg font-medium text-secondary italic mb-4 pt-4 px-2">
              Je faisais 8 devis/semaine = 6h de travail. Maintenant Fixlyy les fait. Je valide juste. 6h récupérées = 900€ de CA en plus.
            </blockquote>
            <cite className="font-bold text-primary not-italic flex items-center justify-end px-2">
              - Marc D., plombier Paris
            </cite>
          </div>

        </div>

      </div>
    </section>
  );
}
