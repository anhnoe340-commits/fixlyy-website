import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const APP_URL = 'https://app.fixlyy.fr';

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo-full-clean.svg" alt="Fixlyy" className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href={APP_URL} target="_blank" rel="noopener noreferrer"
            className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Essai gratuit
          </a>
        </div>
      </div>
    </nav>
  );
}

function FooterBar() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
        <p>© 2025 Fixlyy. Tous droits réservés.</p>
        <div className="flex gap-6">
          <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
          <Link to="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
          <Link to="/cgu" className="hover:text-white transition-colors">CGU</Link>
        </div>
      </div>
    </footer>
  );
}

export default function LegalLayout({ title, lastUpdated, children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} — Fixlyy`;
    return () => { document.title = 'Fixlyy - Secrétaire IA 24/7 pour Artisans | Zéro Appel Manqué'; };
  }, [title]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-dark">
        <NavBar />
        <main className="max-w-4xl mx-auto px-6 pt-28 pb-8">
          <div className="mb-10">
            <Link to="/" className="text-brand text-sm hover:underline">← Retour à l'accueil</Link>
            <h1 className="text-3xl md:text-4xl font-black text-white mt-4 mb-2">{title}</h1>
            {lastUpdated && (
              <p className="text-muted text-sm">Dernière mise à jour : {lastUpdated}</p>
            )}
          </div>
          <div className="prose-legal">
            {children}
          </div>
        </main>
        <FooterBar />
      </div>
    </ThemeProvider>
  );
}
