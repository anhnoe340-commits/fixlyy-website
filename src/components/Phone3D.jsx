import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { PhoneCall, MessageSquare, Clock, Zap, Globe } from 'lucide-react';

const screens = [
  {
    badge: 'URGENT',
    badgeColor: '#EF4444',
    name: 'M. Dupont',
    type: 'Fuite sous évier',
    time: '22:14',
    flag: '🇫🇷',
    lang: 'Français',
    sms: '📞 M. Dupont · Fuite sous évier\n⚡ URGENT · Rappeler maintenant\n📍 Paris 15e · 22h14',
  },
  {
    badge: 'RDV PRIS',
    badgeColor: '#10B981',
    name: 'Mrs. Smith',
    type: 'Boiler breakdown',
    time: '08:42',
    flag: '🇬🇧',
    lang: 'English',
    sms: '📞 Mrs. Smith · Boiler breakdown\n✅ RDV demain 10h confirmé\n📍 Boulogne · 08h42',
  },
  {
    badge: 'URGENT',
    badgeColor: '#EF4444',
    name: 'M. Karim',
    type: 'قطع الكهرباء',
    time: '19:33',
    flag: '🇲🇦',
    lang: 'Arabe',
    sms: '📞 M. Karim · Panne électrique\n⚡ URGENT · Intervention soir\n📍 Saint-Denis · 19h33',
  },
];

export default function Phone3D({ size = 'md', showNotifications = true, className = '' }) {
  const ref = useRef(null);
  const [screenIndex, setScreenIndex] = useState(0);
  const [smsVisible, setSmsVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rawRotateX = useTransform(y, [-120, 120], [12, -12]);
  const rawRotateY = useTransform(x, [-120, 120], [-18, 18]);
  const rotateX = useSpring(rawRotateX, { stiffness: 120, damping: 20 });
  const rotateY = useSpring(rawRotateY, { stiffness: 120, damping: 20 });

  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set(e.clientX - cx);
    y.set(e.clientY - cy);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Rotate screens
  useEffect(() => {
    const t = setInterval(() => {
      setSmsVisible(false);
      setTimeout(() => {
        setScreenIndex(i => (i + 1) % screens.length);
        setTimeout(() => setSmsVisible(true), 600);
      }, 400);
    }, 4000);
    setSmsVisible(true);
    return () => clearInterval(t);
  }, []);

  const sizes = {
    sm: { w: 180, h: 370, radius: 28, bezel: 6, notch: 80, screen: 22 },
    md: { w: 240, h: 490, radius: 36, bezel: 8, notch: 100, screen: 28 },
    lg: { w: 280, h: 580, radius: 40, bezel: 10, notch: 120, screen: 32 },
  };
  const s = sizes[size];
  const screen = screens[screenIndex];

  return (
    <div
      ref={ref}
      className={`relative select-none ${className}`}
      style={{ width: s.w + 40, height: s.h + 40 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59,91,245,0.15) 0%, transparent 70%)',
          filter: 'blur(20px)',
          transform: 'scale(1.3)',
        }}
      />

      <motion.div
        style={{
          perspective: 1200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Phone body */}
          <div
            style={{
              width: s.w,
              height: s.h,
              borderRadius: s.radius,
              background: 'linear-gradient(145deg, #1a2040 0%, #0d1220 60%, #0a0e1a 100%)',
              border: '2px solid rgba(59,91,245,0.25)',
              boxShadow: `
                0 0 0 ${s.bezel}px #141830,
                0 0 0 ${s.bezel + 1}px rgba(59,91,245,0.15),
                0 30px 80px rgba(0,0,0,0.7),
                0 0 60px rgba(59,91,245,0.2),
                inset 0 1px 0 rgba(255,255,255,0.08)
              `,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Volume buttons */}
            {[28, 68, 108].map(top => (
              <div
                key={top}
                style={{
                  position: 'absolute',
                  left: -4,
                  top,
                  width: 3,
                  height: 26,
                  background: 'linear-gradient(to bottom, #2a3050, #1a2040)',
                  borderRadius: '2px 0 0 2px',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              />
            ))}
            {/* Power button */}
            <div
              style={{
                position: 'absolute',
                right: -4,
                top: 60,
                width: 3,
                height: 60,
                background: 'linear-gradient(to bottom, #2a3050, #1a2040)',
                borderRadius: '0 2px 2px 0',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
              }}
            />

            {/* Screen */}
            <div
              style={{
                position: 'absolute',
                inset: s.bezel - 2,
                borderRadius: s.radius - 4,
                background: '#080c18',
                overflow: 'hidden',
              }}
            >
              {/* Status bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px 4px', fontSize: 10, color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
                <span style={{ fontWeight: 600 }}>{screen.time}</span>
                <span>●●●○○ 5G</span>
              </div>

              {/* Dynamic island */}
              <div
                style={{
                  width: s.notch,
                  height: 28,
                  background: '#000',
                  borderRadius: 14,
                  margin: '0 auto 8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#1a2040', border: '1.5px solid rgba(59,91,245,0.4)' }} />
                <div style={{ width: 22, height: 6, borderRadius: 3, background: '#111' }} />
              </div>

              {/* App content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={screenIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  style={{ padding: '4px 12px 0', fontFamily: 'Inter, sans-serif' }}
                >
                  {/* App header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(59,91,245,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <PhoneCall size={14} color="#3B5BF5" />
                    </div>
                    <div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>FIXLYY · APPEL ENTRANT</div>
                      <div style={{ fontSize: 10, color: '#fff', fontWeight: 700 }}>Mia répond…</div>
                    </div>
                    <div style={{ marginLeft: 'auto', background: screen.badgeColor + '25', border: `1px solid ${screen.badgeColor}50`, color: screen.badgeColor, fontSize: 8, fontWeight: 700, padding: '2px 6px', borderRadius: 4 }}>
                      {screen.badge}
                    </div>
                  </div>

                  {/* Call card */}
                  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '10px 12px', marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                      <div>
                        <div style={{ fontSize: 13, color: '#fff', fontWeight: 700 }}>{screen.name}</div>
                        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 1 }}>{screen.type}</div>
                      </div>
                      <span style={{ fontSize: 16 }}>{screen.flag}</span>
                    </div>
                    {/* Waveform */}
                    <div style={{ display: 'flex', gap: 2, alignItems: 'center', height: 20, marginTop: 4 }}>
                      {[4, 8, 14, 10, 18, 12, 7, 16, 10, 6, 14, 9, 17, 11, 5].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [h, h * 1.8, h] }}
                          transition={{ duration: 0.8 + i * 0.05, repeat: Infinity, ease: 'easeInOut', delay: i * 0.06 }}
                          style={{ width: 2.5, borderRadius: 2, background: '#3B5BF5', opacity: 0.7 }}
                        />
                      ))}
                    </div>
                    <div style={{ fontSize: 9, color: '#3B5BF5', marginTop: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Globe size={9} />
                      <span>Réponse en {screen.lang}</span>
                    </div>
                  </div>

                  {/* SMS preview */}
                  <AnimatePresence>
                    {smsVisible && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 6 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 12, padding: '8px 10px' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
                          <MessageSquare size={9} color="#10B981" />
                          <span style={{ fontSize: 8, color: '#10B981', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>SMS envoyé · {screen.time}</span>
                        </div>
                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', whiteSpace: 'pre-line', lineHeight: 1.6, fontFamily: 'monospace' }}>
                          {screen.sms}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </AnimatePresence>

              {/* Home indicator */}
              <div style={{ position: 'absolute', bottom: 6, left: '50%', transform: 'translateX(-50%)', width: 100, height: 4, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }} />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating notification cards */}
      {showNotifications && (
        <>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
            transition={{ delay: 0.5, duration: 3.5, repeat: Infinity, ease: 'easeInOut', opacity: { duration: 0.5 } }}
            style={{
              position: 'absolute',
              top: '10%',
              right: -10,
              background: 'rgba(22,28,46,0.95)',
              border: '1px solid rgba(59,91,245,0.25)',
              borderRadius: 12,
              padding: '8px 12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              backdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap',
              zIndex: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
              <span style={{ fontSize: 11, color: '#fff', fontWeight: 600 }}>Actif 24/7</span>
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>1 000 appels en simultané</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
            transition={{ delay: 1.2, duration: 4, repeat: Infinity, ease: 'easeInOut', opacity: { duration: 0.5 } }}
            style={{
              position: 'absolute',
              bottom: '22%',
              left: -10,
              background: 'rgba(22,28,46,0.95)',
              border: '1px solid rgba(16,185,129,0.25)',
              borderRadius: 12,
              padding: '8px 12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              backdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap',
              zIndex: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Zap size={10} color="#10B981" />
              <span style={{ fontSize: 11, color: '#10B981', fontWeight: 700 }}>SMS envoyé en 28s</span>
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>M. Dupont · Fuite cuisine</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            style={{
              position: 'absolute',
              bottom: '8%',
              right: -5,
              background: 'rgba(59,91,245,0.12)',
              border: '1px solid rgba(59,91,245,0.3)',
              borderRadius: 12,
              padding: '8px 12px',
              boxShadow: '0 8px 24px rgba(59,91,245,0.15)',
              backdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap',
              zIndex: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Globe size={10} color="#3B5BF5" />
              <span style={{ fontSize: 11, color: '#3B5BF5', fontWeight: 700 }}>🌍 10+ langues</span>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}
