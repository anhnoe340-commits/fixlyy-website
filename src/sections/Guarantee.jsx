import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="breathing-room bg-white relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-secondary"
        >
          {/* Background Elements */}
          <div className="absolute top-0 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full p-1 shadow-lg shadow-primary/30">
                <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center">
                  <ShieldCheck size={48} className="text-accent" />
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-white">
              <h2 className="text-3xl font-extrabold mb-2 tracking-tight">Notre garantie simple</h2>
              <div className="inline-block bg-accent text-secondary font-black text-sm uppercase tracking-widest px-4 py-1 rounded-full mb-6 shadow-sm">
                🛡️ 30 JOURS SATISFAIT OU REMBOURSÉ
              </div>
              
              <div className="text-lg text-gray-300 font-medium space-y-4 mb-6 leading-relaxed">
                <p>
                  Essayez Fixlyy pendant 30 jours.<br/>
                  Si vous ne récupérez pas AU MOINS le prix de l'abonnement en clients sauvés, <strong className="text-white">on vous rembourse intégralement.</strong>
                </p>
                <p className="text-sm opacity-80 italic">
                  Pas de question. Pas de friction.<br/>
                  Juste un email à support@fixlyy.fr
                </p>
              </div>

              <blockquote className="bg-white/5 border-l-4 border-accent p-4 rounded-xl rounded-l-none text-sm text-blue-100 font-medium italic">
                "Pourquoi cette garantie ? Parce qu'on sait que ça marche. 50+ artisans utilisent Fixlyy. 0 remboursements demandés à ce jour."
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
