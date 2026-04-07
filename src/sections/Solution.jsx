import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, FileText, MessageSquare } from 'lucide-react';

export default function Solution() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <section className="breathing-room bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight mb-6"
        >
          <span className="text-primary">Fixlyy</span> = Votre secrétaire IA qui travaille<br />
          pendant que VOUS travaillez
        </motion.h2>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
      >
        {/* Feature 1 */}
        <motion.div variants={item} className="bg-neutral-light rounded-3xl p-8 border border-neutral-200 hover:shadow-xl transition-shadow relative overflow-hidden group">
          <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-primary/30 group-hover:scale-110 transition-transform">
            <PhoneCall size={28} />
          </div>
          <h3 className="text-xl font-bold mb-6 text-secondary tracking-tight pr-4">
            RÉPOND 24/7 À VOS APPELS
          </h3>
          <div className="space-y-4 text-gray-600 font-medium">
            <p>Client appelle à 21h le dimanche ?</p>
            <p className="text-primary font-bold text-lg bg-primary/5 p-2 rounded-lg inline-block">Fixlyy décroche.</p>
            <p>Pose les bonnes questions.</p>
            <p>Note tout.</p>
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <p className="text-success font-bold flex items-center gap-2">
                <span className="text-xl">✓</span> Vous ? Vous dormez tranquille.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature 2 (Accentuated) */}
        <motion.div variants={item} className="bg-secondary text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden group scale-100 md:scale-105 z-10 border border-secondary hover:border-accent transition-colors">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-accent text-secondary rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-accent/20 group-hover:scale-110 transition-transform">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-bold mb-6 text-white tracking-tight">
              GÉNÈRE VOS DEVIS AUTOMATIQUEMENT
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>Fuite d'eau cuisine ? Fixlyy calcule :</p>
              
              <ul className="bg-white/10 p-4 rounded-xl space-y-2 font-mono text-sm border border-white/10">
                <li className="flex justify-between"><span>Diagnostic</span><span>80€</span></li>
                <li className="flex justify-between"><span>Main d'œuvre</span><span>120€</span></li>
                <li className="flex justify-between"><span>Pièces</span><span>45€</span></li>
                <li className="flex justify-between font-bold text-accent pt-2 border-t border-white/20 mt-2">
                  <span>Total</span><span>245€ TTC</span>
                </li>
              </ul>
              
              <p className="text-accent font-bold text-lg pt-2 tracking-tight">Devis PDF envoyé au client en 2 min.</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white font-bold flex items-center gap-2">
                  <span className="text-xl text-success">✓</span> Vous ? Vous validez en 1 clic.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 3 */}
        <motion.div variants={item} className="bg-neutral-light rounded-3xl p-8 border border-neutral-200 hover:shadow-xl transition-shadow relative overflow-hidden group">
          <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-primary/30 group-hover:scale-110 transition-transform">
            <MessageSquare size={28} />
          </div>
          <h3 className="text-xl font-bold mb-6 text-secondary tracking-tight pr-4">
            VOUS ENVOIE TOUT PAR SMS EN 30 SEC
          </h3>
          
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-neutral-100 text-sm">
            <div className="text-xs text-gray-400 mb-2 font-medium flex items-center">
              <MessageSquare size={12} className="mr-1" /> SMS reçu à l'instant
            </div>
            <div className="text-secondary font-medium space-y-1">
              <p>🔔 Client : M. Dupont</p>
              <p className="text-alert">Urgence : OUI ⚠️</p>
              <p>Type : Fuite cuisine</p>
              <p>Adresse : 15 rue X, 75015</p>
              <p>Budget : 200-300€</p>
              <p>Tél : <span className="text-primary hover:underline cursor-pointer">06 12 34 56 78</span></p>
              <p className="mt-2 text-primary font-bold cursor-pointer hover:underline">🔗 Devis.pdf généré</p>
              <p className="mt-2 font-bold select-none cursor-pointer hover:text-primary">Rappeler le client ?</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
