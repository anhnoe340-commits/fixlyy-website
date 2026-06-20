import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneOff, Loader, Zap, Moon, Globe, Flag } from 'lucide-react';
import Vapi from '@vapi-ai/web';

const VAPI_PUBLIC_KEY = '261b2bc5-839e-4830-969d-fa940d83b0d7';
const ASSISTANT_ID = 'aca557fb-b451-455c-b8a5-ed1aad643476';

// ── Voice Orb Component ──────────────────────────────────────────
function VoiceOrb({ status, speaking }) {
  const isActive = status === 'active';
  const isConnecting = status === 'connecting';

  const rippleVariants = {
    idle: {
      scale: [1, 1.18, 1],
      opacity: [0.18, 0.06, 0.18],
      transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
    },
    active: {
      scale: [1, 1.35, 1],
      opacity: [0.28, 0.06, 0.28],
      transition: { duration: 1.1, repeat: Infinity, ease: 'easeInOut' }
    },
    speaking: {
      scale: [1, 1.55, 1],
      opacity: [0.38, 0.05, 0.38],
      transition: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const orbVariants = {
    idle: {
      scale: [1, 1.04, 1],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
    },
    active: {
      scale: [1, 1.08, 1],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
    },
    speaking: {
      scale: [1, 1.14, 0.96, 1],
      transition: { duration: 0.5, repeat: Infinity, ease: 'easeInOut' }
    }
  };

  const currentVariant = speaking ? 'speaking' : isActive ? 'active' : 'idle';

  const gradientIdle = 'radial-gradient(circle at 38% 35%, #6B8AFF 0%, #3B5BF5 40%, #1E2A6E 80%, #0D1220 100%)';
  const gradientActive = 'radial-gradient(circle at 38% 35%, #818CF8 0%, #6366F1 35%, #3B5BF5 65%, #1E1B4B 100%)';
  const gradientSpeaking = 'radial-gradient(circle at 38% 35%, #A78BFA 0%, #7C3AED 35%, #4338CA 65%, #1E1B4B 100%)';

  const gradient = speaking ? gradientSpeaking : isActive ? gradientActive : gradientIdle;

  return (
    <div className="relative flex items-center justify-center" style={{ width: 220, height: 220 }}>
      {/* Ripple 3 — outermost */}
      <motion.div
        variants={rippleVariants}
        animate={currentVariant}
        style={{
          position: 'absolute',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(59,91,245,0.10)',
        }}
      />
      {/* Ripple 2 */}
      <motion.div
        variants={rippleVariants}
        animate={currentVariant}
        transition={{ delay: 0.4 }}
        style={{
          position: 'absolute',
          width: 168,
          height: 168,
          borderRadius: '50%',
          background: 'rgba(59,91,245,0.14)',
        }}
      />
      {/* Ripple 1 — inner */}
      <motion.div
        variants={rippleVariants}
        animate={currentVariant}
        transition={{ delay: 0.8 }}
        style={{
          position: 'absolute',
          width: 136,
          height: 136,
          borderRadius: '50%',
          background: 'rgba(59,91,245,0.18)',
        }}
      />

      {/* Orbe principale */}
      <motion.div
        variants={orbVariants}
        animate={currentVariant}
        style={{
          width: 108,
          height: 108,
          borderRadius: '50%',
          background: gradient,
          boxShadow: speaking
            ? '0 0 60px rgba(124,58,237,0.55), 0 0 120px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.25)'
            : isActive
            ? '0 0 48px rgba(59,91,245,0.50), 0 0 100px rgba(59,91,245,0.20), inset 0 1px 0 rgba(255,255,255,0.20)'
            : '0 0 32px rgba(59,91,245,0.35), 0 0 80px rgba(59,91,245,0.12), inset 0 1px 0 rgba(255,255,255,0.15)',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background 0.6s ease, box-shadow 0.4s ease',
        }}
      >
        {/* Reflet spéculaire */}
        <div style={{
          position: 'absolute',
          top: '14%',
          left: '20%',
          width: '38%',
          height: '24%',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.22)',
          filter: 'blur(4px)',
          transform: 'rotate(-20deg)',
        }} />

        {/* Icône spinner si connecting */}
        {isConnecting && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Loader size={28} color="rgba(255,255,255,0.9)"
              style={{ animation: 'spin 1s linear infinite' }} />
          </div>
        )}
      </motion.div>

      {/* Badge statut */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            style={{
              position: 'absolute',
              bottom: -4,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(16,185,129,0.15)',
              border: '1px solid rgba(16,185,129,0.35)',
              borderRadius: 20,
              padding: '3px 12px',
              fontSize: 11,
              fontWeight: 700,
              color: '#10B981',
              whiteSpace: 'nowrap',
              backdropFilter: 'blur(8px)',
            }}
          >
            <span style={{
              display: 'inline-block',
              width: 6, height: 6,
              borderRadius: '50%',
              background: '#10B981',
              marginRight: 5,
              animation: 'pulse 1.5s infinite',
            }} />
            {speaking ? 'Mia parle…' : 'En écoute'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────
const buttonStates = {
  idle:       { label: 'Parler à Mia',         cls: 'bg-brand hover:bg-brand-dark' },
  connecting: { label: 'Mia arrive (3-5s)…',   cls: 'bg-brand/70 cursor-wait'      },
  active:     { label: "Terminer l'appel",      cls: 'bg-red-500 hover:bg-red-600'  },
};

export default function AudioDemo() {
  const [status, setStatus] = useState('idle');
  const [speaking, setSpeaking] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const vapiRef = useRef(null);
  const sectionRef = useRef(null);

  function initVapi() {
    if (vapiRef.current) return;
    const vapi = new Vapi(VAPI_PUBLIC_KEY);
    vapi.on('call-start',   () => { setStatus('active'); setErrorMsg(null); });
    vapi.on('call-end',     () => { setStatus('idle'); setSpeaking(false); });
    vapi.on('speech-start', () => setSpeaking(true));
    vapi.on('speech-end',   () => setSpeaking(false));
    vapi.on('error',        (e) => {
      console.error('[Vapi]', e);
      setErrorMsg('Microphone inaccessible ou erreur réseau. Autorisez le micro et réessayez.');
      setStatus('idle');
    });
    vapiRef.current = vapi;
  }

  useEffect(() => {
    // Pré-chauffe le WebSocket Vapi dès que la section entre dans le viewport
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) initVapi(); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { observer.disconnect(); vapiRef.current?.stop(); };
  }, []);

  const toggle = async () => {
    if (status === 'active') { vapiRef.current?.stop(); return; }

    setErrorMsg(null);
    setStatus('connecting');
    initVapi(); // fallback si IntersectionObserver n'a pas encore tiré

    try {
      await vapiRef.current.start(ASSISTANT_ID);
    } catch (e) {
      console.error('[Vapi start]', e);
      setErrorMsg('Impossible de démarrer. Autorisez le microphone dans votre navigateur et réessayez.');
      setStatus('idle');
    }
  };

  const btn = buttonStates[status];

  return (
    <section ref={sectionRef} className="bg-dark py-16 md:py-24 px-4 md:px-6 relative overflow-hidden" id="demo">

      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/8 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mb-12 md:mb-16"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-4">Démo live</p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Écoutez Mia.<br />
            <span className="text-brand">Elle décroche à votre place.</span>
          </h2>
          <p className="text-muted-2 text-lg max-w-lg mx-auto">
            Cliquez et parlez — exactement comme un client appellerait votre numéro.
          </p>
        </motion.div>

        {/* Layout 2 colonnes */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Colonne gauche — carte démo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-2xl p-8 md:p-10 flex flex-col items-center gap-6">

              {/* Orbe */}
              <VoiceOrb status={status} speaking={speaking} />

              {/* Nom + statut */}
              <div className="text-center">
                <p className="text-white font-bold text-xl mb-1">Mia</p>
                <p className="text-muted-2 text-sm">
                  {status === 'idle'       && 'Secrétaire IA Fixlyy · Prête'}
                  {status === 'connecting' && 'Mia se prépare, ça prend 3-5 secondes…'}
                  {status === 'active'     && (speaking ? 'Mia vous parle...' : 'Mia vous écoute...')}
                </p>
              </div>

              {/* Bouton */}
              <button
                onClick={toggle}
                disabled={status === 'connecting'}
                className={`flex items-center gap-3 ${btn.cls} text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all duration-200 shadow-brand-sm disabled:opacity-50`}
              >
                {status === 'active'
                  ? <PhoneOff className="w-5 h-5" />
                  : status === 'connecting'
                  ? <Loader className="w-5 h-5 animate-spin" />
                  : <Phone className="w-5 h-5" />
                }
                {btn.label}
              </button>

              {/* Message d'erreur */}
              <AnimatePresence>
                {errorMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="text-xs text-red-400 text-center bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2 max-w-xs"
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2">
                {['Démo gratuite', '2 minutes max', 'Aucune inscription'].map(tag => (
                  <span key={tag}
                    className="text-xs text-muted-2 bg-white/5 border border-white/8 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Colonne droite — arguments */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {[
              { Icon: Flag,  color: '#3B5BF5', title: 'Parle français comme vous', body: 'Vocabulaire plomberie, électricité, chauffage — Mia comprend les vraies demandes terrain.' },
              { Icon: Zap,   color: '#F59E0B', title: 'SMS récap en 30 secondes', body: 'Après chaque appel, vous recevez un résumé complet — nom, numéro, urgence, motif.' },
              { Icon: Moon,  color: '#8B5CF6', title: 'Disponible 24h/24, 7j/7', body: 'Même la nuit, même le week-end, même pendant vos interventions. Mia ne décroche jamais.' },
              { Icon: Globe, color: '#10B981', title: 'Répond en 10+ langues', body: 'Anglais, arabe, espagnol, portugais — Mia détecte la langue du client automatiquement.' },
            ].map(({ Icon, color, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="glass rounded-xl p-5 flex gap-4"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: color + '18', border: `1px solid ${color}30` }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{title}</p>
                  <p className="text-muted-2 text-xs leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
