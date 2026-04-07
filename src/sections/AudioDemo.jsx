import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Check } from 'lucide-react';

const scenarios = [
  { label:'Fuite urgente', duration:'1:24', src:null },
  { label:'Demande de devis', duration:'0:58', src:null },
  { label:'Prise de RDV',  duration:'1:12', src:null },
];

const highlights = [
  'A qualifié l\'urgence et le type de panne',
  'A collecté le nom, adresse et disponibilités',
  'A généré un devis estimé : 280 €',
  'A envoyé le SMS récap en 30 secondes',
];

export default function AudioDemo() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const toggle = () => {
    if (!audioRef.current?.src) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play(); setPlaying(true); }
  };

  const onTimeUpdate = () => {
    const a = audioRef.current;
    if (a) setProgress((a.currentTime / a.duration) * 100 || 0);
  };

  const pick = (i) => { setActive(i); setPlaying(false); setProgress(0); };

  return (
    <section className="bg-dark-2 py-24 px-6" id="demo">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">🎧 Écoutez Fixlyy en action</h2>
          <p className="text-muted-2 text-lg">Un vrai appel géré par Fixlyy — aucun humain impliqué</p>
        </motion.div>

        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.15}} className="bg-dark-3 border border-white/8 rounded-2xl p-8">
          {/* Scenario tabs */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {scenarios.map((s,i) => (
              <button key={i} onClick={() => pick(i)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${active===i ? 'bg-brand text-white' : 'bg-dark-4 text-muted-2 hover:text-white border border-white/8'}`}>
                {s.label}
              </button>
            ))}
          </div>

          {/* Player */}
          <div className="flex items-center gap-5 mb-8">
            <button onClick={toggle} className="w-14 h-14 rounded-full bg-brand hover:bg-brand-dark flex items-center justify-center text-white transition-colors shrink-0">
              {playing ? <Pause className="w-6 h-6"/> : <Play className="w-6 h-6 ml-0.5"/>}
            </button>
            <div className="flex-1">
              <div className="flex justify-between text-xs text-muted mb-2">
                <span>{scenarios[active].label}</span>
                <span>{scenarios[active].duration}</span>
              </div>
              <div className="h-2 bg-dark-4 rounded-full overflow-hidden cursor-pointer" onClick={e => {
                if (!audioRef.current?.duration) return;
                const rect = e.currentTarget.getBoundingClientRect();
                audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * audioRef.current.duration;
              }}>
                <div className="h-full bg-brand rounded-full transition-all" style={{width:`${progress}%`}}/>
              </div>
            </div>
          </div>

          {/* Hidden audio */}
          {scenarios[active].src && (
            <audio ref={audioRef} src={scenarios[active].src} onTimeUpdate={onTimeUpdate} onEnded={() => { setPlaying(false); setProgress(0); }}/>
          )}

          {/* What Fixlyy did */}
          <div className="border-t border-white/8 pt-6">
            <p className="text-xs text-muted uppercase tracking-wider font-semibold mb-4">Ce que Fixlyy a fait pendant cet appel</p>
            <ul className="space-y-2.5">
              {highlights.map((h,i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-2">
                  <Check className="w-4 h-4 text-success shrink-0 mt-0.5"/>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.3}} className="text-center text-xs text-muted mt-6">
          Enregistrements synthétiques à titre de démonstration · Voix IA Fixlyy
        </motion.p>
      </div>
    </section>
  );
}
