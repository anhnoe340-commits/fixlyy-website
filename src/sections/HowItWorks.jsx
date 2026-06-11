import React from 'react';
import { motion } from 'framer-motion';

const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-dark-2">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-16">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Simple comme bonjour</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            3 minutes pour activer Mia
          </h2>
          <p className="text-muted-2 text-lg max-w-xl mx-auto">
            Pas d'application à installer, pas de technicien. Juste un code à composer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          {/* ── ÉTAPE 1 ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0 }}
            className="glass rounded-2xl p-7 relative flex flex-col gap-4">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand flex items-center justify-center text-xs font-black text-white">1</div>
            <div className="text-4xl">📱</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Activez le renvoi d'appel</h3>
              <p className="text-muted-2 text-sm leading-relaxed">Lors de l'inscription, vous recevez votre numéro Mia dédié. Puis vous composez un code universel sur votre mobile.</p>
            </div>

            {/* Sous-étapes */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-brand/20 border border-brand/30 text-brand text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">①</span>
                <p className="text-xs text-muted-2 leading-relaxed">Fixlyy vous attribue un numéro dédié : <span className="text-white font-mono">09 39 XX XX XX</span></p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-brand/20 border border-brand/30 text-brand text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">②</span>
                <p className="text-xs text-muted-2 leading-relaxed">Sur votre téléphone, composez ce code puis appuyez sur <span className="text-white">Appel</span> :</p>
              </div>
            </div>

            {/* Code visuel */}
            <div className="bg-dark-4 rounded-xl border border-brand/20 px-4 py-3 flex items-center justify-between gap-3">
              <code className="text-brand font-mono text-sm font-bold tracking-wide">**21*09 39 XX XX XX#</code>
              <span className="text-lg flex-shrink-0">📞</span>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-brand/20 border border-brand/30 text-brand text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">③</span>
              <p className="text-xs text-muted-2 leading-relaxed">Vous entendez un bip. <span className="text-white font-medium">C'est activé.</span> Vos appels sont redirigés vers Mia.</p>
            </div>

            <p className="text-xs text-muted border-t border-white/5 pt-3">Compatible Free, Orange, SFR, Bouygues · Désactivable à tout moment avec <span className="font-mono">##21#</span></p>
          </motion.div>

          {/* ── ÉTAPE 2 ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 }}
            className="glass rounded-2xl p-7 relative flex flex-col gap-4">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-success flex items-center justify-center text-xs font-black text-white">2</div>
            <div className="text-4xl">🎙️</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Mia décroche à votre place</h3>
              <p className="text-muted-2 text-sm leading-relaxed">En moins de 2 secondes, Mia répond avec le nom de votre entreprise. Elle qualifie la demande comme une vraie secrétaire.</p>
            </div>

            {/* Simulation conversation */}
            <div className="flex flex-col gap-2">
              <p className="text-xs text-muted uppercase tracking-widest mb-1">Ce que vos clients entendent</p>

              <div className="flex justify-start">
                <div className="bg-success/10 border border-success/20 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                  <p className="text-xs text-white leading-relaxed">"Bonjour, Plomberie Dupont. Comment puis-je vous aider ?"</p>
                  <p className="text-[10px] text-muted mt-0.5">Mia · 1 seconde</p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-white/6 border border-white/10 rounded-xl rounded-tr-sm px-3 py-2 max-w-[85%]">
                  <p className="text-xs text-muted-2 leading-relaxed">"Bonjour, j'ai une fuite d'eau chez moi..."</p>
                  <p className="text-[10px] text-muted mt-0.5">Client</p>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-success/10 border border-success/20 rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                  <p className="text-xs text-white leading-relaxed">"Je comprends. C'est urgent ? Vous pouvez me donner votre adresse ?"</p>
                  <p className="text-[10px] text-muted mt-0.5">Mia · recueille les infos</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted border-t border-white/5 pt-3">24h/24 · 7j/7 · Même à 23h et le dimanche</p>
          </motion.div>

          {/* ── ÉTAPE 3 ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.24 }}
            className="glass rounded-2xl p-7 relative flex flex-col gap-4">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: '#F59E0B' }}>3</div>
            <div className="text-4xl">📩</div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Vous recevez le SMS récap</h3>
              <p className="text-muted-2 text-sm leading-relaxed">30 secondes après l'appel, tout est dans votre poche. Rappelez quand vous êtes libre, avec toutes les infos.</p>
            </div>

            {/* Mock SMS */}
            <div className="bg-dark-4 rounded-2xl border border-white/8 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/6 bg-white/3">
                <div className="w-7 h-7 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center">
                  <span className="text-xs text-brand font-bold">M</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white leading-none">Mia • Fixlyy</p>
                  <p className="text-[10px] text-muted">À l'instant</p>
                </div>
              </div>
              <div className="px-4 py-3 flex flex-col gap-1.5">
                <p className="text-xs text-white font-medium">📞 Appel reçu — 14h32</p>
                <p className="text-xs text-muted-2 leading-relaxed">
                  <span className="text-white">Marie G.</span> · 06 12 34 56 78<br />
                  Fuite robinet cuisine<br />
                  <span className="text-red-400 font-medium">🔴 URGENT</span> · 12 rue Voltaire, Paris 11
                </p>
                <p className="text-[10px] text-muted mt-1 italic">"Eau qui coule depuis ce matin, disponible jusqu'à 18h"</p>
              </div>
            </div>

            <p className="text-xs text-muted border-t border-white/5 pt-3">Nom · Numéro · Adresse · Motif · Urgence · Disponibilités</p>
          </motion.div>

        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center">
          <a href={COMMENCER_URL}
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-brand hover:shadow-none">
            Activer Mia maintenant →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
