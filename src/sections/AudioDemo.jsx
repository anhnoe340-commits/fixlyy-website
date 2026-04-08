import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, PhoneOff, Mic, Loader } from 'lucide-react';
import Vapi from '@vapi-ai/web';

const VAPI_PUBLIC_KEY = '261b2bc5-839e-4830-969d-fa940d83b0d7';
const ASSISTANT_ID = 'aca557fb-b451-455c-b8a5-ed1aad643476';

const states = {
  idle:       { label: 'Parler à Emily',      icon: Phone,    cls: 'bg-brand hover:bg-brand-dark' },
  connecting: { label: 'Connexion...',         icon: Loader,   cls: 'bg-brand/70 cursor-wait' },
  active:     { label: 'Terminer l\'appel',    icon: PhoneOff, cls: 'bg-red-500 hover:bg-red-600' },
};

export default function AudioDemo() {
  const [status, setStatus] = useState('idle');
  const [speaking, setSpeaking] = useState(false);
  const vapiRef = useRef(null);

  useEffect(() => {
    const vapi = new Vapi(VAPI_PUBLIC_KEY);
    vapiRef.current = vapi;
    vapi.on('call-start',  () => setStatus('active'));
    vapi.on('call-end',    () => { setStatus('idle'); setSpeaking(false); });
    vapi.on('speech-start',() => setSpeaking(true));
    vapi.on('speech-end',  () => setSpeaking(false));
    return () => vapi.stop();
  }, []);

  const toggle = async () => {
    if (status === 'active') { vapiRef.current.stop(); return; }
    setStatus('connecting');
    await vapiRef.current.start(ASSISTANT_ID);
  };

  const s = states[status];
  const Icon = s.icon;

  return (
    <section className="bg-dark-2 py-24 px-6" id="demo">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">🎧 Essayez Fixlyy en direct</h2>
          <p className="text-muted-2 text-lg">Cliquez et parlez — Emily décroche immédiatement</p>
        </motion.div>

        <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.15}}
          className="bg-dark-3 border border-white/8 rounded-2xl p-10 flex flex-col items-center gap-8">

          {/* Avatar animé */}
          <div className="relative">
            <div className={`w-24 h-24 rounded-full bg-brand/20 flex items-center justify-center transition-all duration-300 ${speaking ? 'scale-110 bg-brand/30' : ''}`}>
              <div className={`w-16 h-16 rounded-full bg-brand/40 flex items-center justify-center ${speaking ? 'animate-pulse' : ''}`}>
                <Mic className="w-8 h-8 text-brand"/>
              </div>
            </div>
            {status === 'active' && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-dark-3 animate-pulse"/>
            )}
          </div>

          <div>
            <p className="text-white font-bold text-xl mb-1">Emily</p>
            <p className="text-muted-2 text-sm">
              {status === 'idle' && 'Secrétaire IA Fixlyy · Plomberie Paris'}
              {status === 'connecting' && 'Connexion en cours...'}
              {status === 'active' && (speaking ? 'Emily parle...' : 'En écoute...')}
            </p>
          </div>

          <button onClick={toggle} disabled={status === 'connecting'}
            className={`flex items-center gap-3 ${s.cls} text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-200 shadow-brand-sm disabled:opacity-50`}>
            <Icon className={`w-6 h-6 ${status === 'connecting' ? 'animate-spin' : ''}`}/>
            {s.label}
          </button>

          <p className="text-muted text-xs">
            {status === 'idle' ? 'Démo gratuite · 2 minutes max · Aucune inscription requise' : 'Appel en cours · Parlez normalement'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
