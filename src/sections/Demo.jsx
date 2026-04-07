import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, PhoneCall } from 'lucide-react';

export default function Demo() {
  return (
    <section id="demo" className="breathing-room bg-secondary text-white relative overflow-hidden">
      
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        >
          Écoutez Fixlyy en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">action</span>
        </motion.h2>
        <p className="text-xl text-gray-400 font-medium">
          Désactivez le silencieux et écoutez une vraie conversation IA.
        </p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-12">
        
        {/* Audio Player Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-xl flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6 animate-pulse">
            <Headphones size={32} />
          </div>
          <h3 className="text-xl font-bold mb-8 text-center">
            🎧 Conversation réelle Fixlyy avec un client
          </h3>
          
          <div className="w-full max-w-md bg-secondary/80 rounded-full p-2 pr-6 flex items-center shadow-inner border border-white/5">
            <audio 
              controls 
              className="w-full outline-none [&::-webkit-media-controls-panel]:bg-transparent [&::-webkit-media-controls-current-time-display]:text-white [&::-webkit-media-controls-time-remaining-display]:text-white"
            >
              <source src="/demo-conversation-fixlyy.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <p className="text-gray-400 font-medium text-sm mt-4">Durée : 1min30</p>
        </motion.div>

        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-24 bg-white/20" />
          <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">OU</span>
          <div className="h-[1px] w-24 bg-white/20" />
        </div>

        {/* Live Call CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary via-[#1E4FDD] to-secondary border border-primary/50 p-8 rounded-3xl shadow-2xl text-center relative overflow-hidden group"
        >
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <PhoneCall size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Testez-le vous-même maintenant</h3>
          <p className="text-blue-200 mb-8 font-medium">Appelez ce numéro d'essai. C'est un robot, n'ayez pas peur !</p>
          
          <div className="inline-block bg-white text-secondary px-8 py-4 rounded-full text-3xl font-black font-mono shadow-xl border-4 border-white/20 hover:bg-neutral-light transition-colors cursor-pointer active:scale-95">
            <a href="tel:+33123456789" className="select-all block">+33 1 23 45 67 89</a>
          </div>
          
          <p className="mt-6 text-sm text-blue-200 font-medium opacity-80">
            Gratuit. Sans engagement. Juste pour voir.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}
