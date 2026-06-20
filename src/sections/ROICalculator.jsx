import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Rocket } from 'lucide-react';

const APP_URL = 'https://app.fixlyy.fr';
const COMMENCER_URL = `${APP_URL}/commencer`;

const METIERS = [
  { label: 'Plombier',        value: 'plombier',      default_val: 180 },
  { label: 'Chauffagiste',    value: 'chauffagiste',  default_val: 200 },
  { label: 'Électricien',     value: 'electricien',   default_val: 150 },
  { label: 'Serrurier',       value: 'serrurier',     default_val: 120 },
  { label: 'Menuisier',       value: 'menuisier',     default_val: 160 },
  { label: 'Autre artisan',   value: 'autre',         default_val: 150 },
];

function Slider({ label, value, min, max, step = 1, unit = '', onChange }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm text-muted-2 font-medium">{label}</label>
        <span className="text-sm font-bold text-white tabular-nums">{value}{unit}</span>
      </div>
      <div className="relative h-5 flex items-center">
        <div className="absolute w-full h-1.5 rounded-full bg-white/10" />
        <div className="absolute h-1.5 rounded-full bg-brand" style={{ width: `${pct}%` }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div className="absolute h-4 w-4 rounded-full bg-brand border-2 border-white shadow-brand-sm pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }} />
      </div>
    </div>
  );
}

function ResultCard({ icon, label, value, color, bg, border }) {
  return (
    <div className="rounded-2xl p-5 flex items-center gap-4" style={{ background: bg, border: `1px solid ${border}` }}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: color + '18', border: `1px solid ${color}30` }}>
        <div style={{ color }}>{icon}</div>
      </div>
      <div className="min-w-0">
        <p className="text-sm text-muted-2 mb-0.5">{label}</p>
        <p className="text-2xl font-black" style={{ color }}>{value}</p>
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [metier, setMetier]     = useState('plombier');
  const [appelsJour, setAppels]           = useState(15);
  const [appelsRatesParDix, setRates]     = useState(4);

  const currentMetier = METIERS.find(m => m.value === metier);
  const [valeurIntervention, setValeur] = useState(currentMetier.default_val);

  function handleMetierChange(val) {
    const m = METIERS.find(x => x.value === val);
    setMetier(val);
    setValeur(m.default_val);
  }

  const results = useMemo(() => {
    const appelsManquesMois = Math.round(appelsJour * (appelsRatesParDix / 10) * 22);
    const caPerduMois       = Math.round(appelsManquesMois * valeurIntervention * 0.5);
    const caRecupere        = Math.round(caPerduMois * 0.8);
    const prixPro           = 197;
    const gainNet           = caRecupere - prixPro;
    const roiX              = caRecupere > 0 ? (caRecupere / prixPro).toFixed(1) : '0';
    return { appelsManquesMois, caPerduMois, caRecupere, gainNet, roiX };
  }, [appelsJour, appelsRatesParDix, valeurIntervention]);

  const fmt = n => n.toLocaleString('fr-FR') + ' €';

  return (
    <section id="roi" className="py-20 md:py-28 bg-dark">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Calculateur ROI</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Ce que Mia vous rapporte,<br className="hidden md:block" /> en chiffres
          </h2>
          <p className="text-muted-2 text-lg max-w-xl mx-auto">
            Renseignez votre situation et voyez votre retour sur investissement en temps réel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6 md:p-8 space-y-7">
            <div>
              <p className="text-sm text-muted-2 font-medium mb-3">Votre métier</p>
              <div className="flex flex-wrap gap-2">
                {METIERS.map(m => (
                  <button key={m.value} onClick={() => handleMetierChange(m.value)}
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

            <Slider label="Appels reçus par jour" value={appelsJour} min={5} max={50} onChange={setAppels} unit=" appels/j" />
            <Slider label="Appels ratés sur 10" value={appelsRatesParDix} min={1} max={9} onChange={setRates} unit="/10" />
            <Slider label="Valeur moyenne d'une intervention" value={valeurIntervention} min={50} max={500} step={10} onChange={setValeur} unit=" €" />

            <p className="text-xs text-muted leading-relaxed pt-2 border-t border-white/5">
              Calcul basé sur 22 jours ouvrés/mois, taux de conversion 50%, récupération estimée à 80% avec Mia. Résultats indicatifs.
            </p>
          </motion.div>

          {/* Results */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 justify-center">

            <ResultCard
              icon={<TrendingDown className="w-5 h-5" />}
              label="Vous perdez environ / mois en appels manqués"
              value={fmt(results.caPerduMois)}
              color="#EF4444" bg="rgba(239,68,68,0.07)" border="rgba(239,68,68,0.2)"
            />
            <ResultCard
              icon={<TrendingUp className="w-5 h-5" />}
              label="Mia vous en récupère environ / mois"
              value={fmt(results.caRecupere)}
              color="#10B981" bg="rgba(16,185,129,0.07)" border="rgba(16,185,129,0.2)"
            />
            <ResultCard
              icon={<Rocket className="w-5 h-5" />}
              label={`Gain net / mois (après 197 €/mois Fixlyy) · ROI ×${results.roiX}`}
              value={fmt(results.gainNet)}
              color="#3B5BF5" bg="rgba(59,91,245,0.08)" border="rgba(59,91,245,0.2)"
            />

            <div className="rounded-2xl p-5 bg-brand/8 border border-brand/20 mt-2">
              <p className="text-sm text-white leading-relaxed">
                Pour <span className="font-bold text-brand">197 €/mois</span>, vous récupérez environ{' '}
                <span className="font-bold text-success">{fmt(results.caRecupere)}</span> — soit un gain net de{' '}
                <span className="font-bold text-white">{fmt(results.gainNet)}/mois</span>.
              </p>
              <p className="text-xs text-muted mt-2">{results.appelsManquesMois} appels manqués/mois estimés</p>
            </div>

            <a href={COMMENCER_URL}
              className="inline-flex items-center justify-center bg-brand hover:bg-brand-dark text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-brand hover:shadow-none mt-2">
              Démarrer mon essai gratuit →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
