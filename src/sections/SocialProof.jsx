import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SUPABASE_URL = 'https://hxkpmmekaotwmzgqxafp.supabase.co';
const DEMO_FN_URL  = `${SUPABASE_URL}/functions/v1/demo-call`;

const METIERS = [
  { value: 'plombier',      label: 'Plombier' },
  { value: 'chauffagiste',  label: 'Chauffagiste' },
  { value: 'electricien',   label: 'Électricien' },
  { value: 'serrurier',     label: 'Serrurier' },
  { value: 'menuisier',     label: 'Menuisier' },
  { value: 'autre',         label: 'Autre artisan' },
];

function PhoneInput({ value, onChange }) {
  return (
    <div className="flex items-center gap-0 border border-white/10 rounded-xl overflow-hidden bg-white/5 focus-within:border-brand/50 transition-colors">
      <div className="flex items-center gap-1.5 px-3 py-3.5 border-r border-white/10 flex-shrink-0">
        <span className="text-base">🇫🇷</span>
        <span className="text-sm text-muted-2">+33</span>
      </div>
      <input
        type="tel"
        placeholder="6 12 34 56 78"
        value={value}
        onChange={e => onChange(e.target.value.replace(/\D/g, '').slice(0, 10))}
        className="flex-1 bg-transparent px-3 py-3.5 text-white placeholder:text-muted text-sm outline-none min-w-0"
      />
    </div>
  );
}

export default function SocialProof() {
  const [metier, setMetier]   = useState('plombier');
  const [phone, setPhone]     = useState('');
  const [email, setEmail]     = useState('');
  const [status, setStatus]   = useState('idle'); // idle | loading | success | error
  const [errMsg, setErrMsg]   = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setErrMsg('');

    const rawPhone = phone.replace(/\D/g, '');
    if (rawPhone.length < 9) { setErrMsg('Numéro invalide (minimum 9 chiffres)'); return; }
    if (!email.includes('@')) { setErrMsg('Email invalide'); return; }

    setStatus('loading');

    const international = rawPhone.startsWith('0')
      ? '+33' + rawPhone.slice(1)
      : '+33' + rawPhone;

    try {
      const res = await fetch(DEMO_FN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: international, email: email.trim().toLowerCase(), metier }),
      });

      if (res.status === 429) { setErrMsg('Trop de tentatives. Réessayez dans quelques minutes.'); setStatus('idle'); return; }
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error || 'Erreur'); }
      setStatus('success');
    } catch (err) {
      setErrMsg('Une erreur est survenue. Réessayez dans quelques instants.');
      setStatus('idle');
    }
  }

  return (
    <section id="demo" className="py-20 md:py-28 bg-dark-2">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-12">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Démo gratuite</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Testez Mia en 30 secondes
          </h2>
          <p className="text-muted-2 text-lg max-w-xl mx-auto">
            Renseignez votre numéro. Mia vous appelle. Vous vivez l'expérience comme vos futurs clients.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-7 md:p-10 max-w-xl mx-auto">

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div key="success"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-4xl">
                  📞
                </div>
                <div>
                  <p className="text-2xl font-black text-white mb-2">Mia vous appelle !</p>
                  <p className="text-muted-2 text-sm leading-relaxed">
                    Décrochez dans les 10 prochaines secondes.<br />
                    Mia va se présenter et répondre à vos questions.
                  </p>
                </div>
                <div className="w-full rounded-xl bg-success/8 border border-success/20 px-5 py-4 text-sm text-success text-center">
                  Nous vous recontacterons pour un suivi personnalisé.
                </div>
                <button onClick={() => { setStatus('idle'); setPhone(''); setEmail(''); }}
                  className="text-sm text-muted hover:text-white transition-colors underline underline-offset-2">
                  Refaire une démo
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <p className="text-sm font-semibold text-white mb-3">Votre métier</p>
                  <div className="flex flex-wrap gap-2">
                    {METIERS.map(m => (
                      <button key={m.value} type="button" onClick={() => setMetier(m.value)}
                        className="text-sm px-4 py-2 rounded-xl font-medium transition-all"
                        style={metier === m.value
                          ? { background: '#3B5BF5', color: '#fff' }
                          : { background: 'rgba(255,255,255,0.06)', color: '#9CA3AF', border: '1px solid rgba(255,255,255,0.08)' }
                        }>
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-white block mb-2">
                    Votre numéro de téléphone
                  </label>
                  <PhoneInput value={phone} onChange={setPhone} />
                  <p className="text-xs text-muted mt-1.5">Mia vous appelle sur ce numéro dans les 10 secondes</p>
                </div>

                <div>
                  <label className="text-sm font-semibold text-white block mb-2">
                    Votre adresse email
                  </label>
                  <input
                    type="email"
                    placeholder="vous@exemple.fr"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-muted text-sm outline-none focus:border-brand/50 transition-colors"
                  />
                  <p className="text-xs text-muted mt-1.5">Pour vous envoyer le récap de la démo</p>
                </div>

                <div className="rounded-xl bg-brand/8 border border-brand/15 px-4 py-3.5">
                  <p className="text-sm text-white/80 leading-relaxed">
                    <span className="font-semibold text-white">Ce qui va se passer :</span>{' '}
                    Mia va vous appeler dans les 10 secondes et décrocher comme elle le ferait pour un vrai client de votre activité. Parlez-lui comme si vous appeliez un artisan.
                  </p>
                </div>

                {errMsg && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">{errMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading' || !email.includes('@') || email.length < 5}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-bold text-base py-4 rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3">
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Connexion en cours...
                    </>
                  ) : (
                    <>📞 Recevoir l'appel de Mia →</>
                  )}
                </button>

                <p className="text-xs text-muted text-center leading-relaxed">
                  Appel gratuit · Aucun engagement · Aucun spam
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
