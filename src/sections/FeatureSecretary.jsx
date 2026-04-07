import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Brain, MessageCircle } from 'lucide-react';

export default function FeatureSecretary() {
  return (
    <section className="breathing-room bg-neutral-light border-b border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight"
          >
            Votre secrétaire qui ne dort <span className="text-primary italic">JAMAIS</span>
          </motion.h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Video Demo Area */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="bg-secondary rounded-3xl p-2 md:p-4 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-50 pointer-events-none" />
              
              <div className="relative aspect-video bg-neutral-900 rounded-2xl overflow-hidden flex flex-col items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                <video 
                  controls 
                  poster="/demo-thumbnail.jpg"
                  src="/demo-fixlyy-30sec.mp4"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                >
                  Votre navigateur ne supporte pas la vidéo.
                </video>
                
                {/* Fallback play button overlay if video doesn't load/play immediately */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white pl-1 shadow-lg shadow-black/50 opacity-0 group-hover:opacity-0 transition-opacity">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Features List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-8 w-full"
          >
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">DISPONIBLE 24/7</h3>
                <ul className="text-gray-600 font-medium space-y-1">
                  <li>• Même à 3h du matin.</li>
                  <li>• Même le dimanche.</li>
                  <li>• Même pendant vos vacances.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 text-accent rounded-xl flex items-center justify-center shrink-0">
                <Brain size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">INTELLIGENTE</h3>
                <ul className="text-gray-600 font-medium space-y-1">
                  <li>• Comprend parfaitement le français.</li>
                  <li>• Pose les bonnes questions (métier, urgence).</li>
                  <li>• Détecte le stress du client.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div className="w-12 h-12 bg-success/10 text-success rounded-xl flex items-center justify-center shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">NATURELLE</h3>
                <ul className="text-gray-600 font-medium space-y-1">
                  <li>• Voix humaine ultra-réaliste.</li>
                  <li>• Conversations fluides sans latence.</li>
                  <li>• Clients pensent parler à une vraie personne.</li>
                </ul>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
