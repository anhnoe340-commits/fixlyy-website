import React from 'react';

const APP_URL = 'https://app.fixlyy.fr';

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-white/5 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-white font-black text-xl tracking-tight mb-4 block">
              Fix<span className="text-brand">lyy</span>
            </span>
            <p className="text-muted-2 text-sm leading-relaxed max-w-xs mb-5">
              Secrétaire IA 24/7 pour plombiers et électriciens indépendants en Île-de-France. Ne ratez plus jamais un appel client.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Démarrer gratuitement →
            </a>
          </div>

          {/* Product */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Produit</p>
            <ul className="space-y-3 text-sm text-muted-2">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Comment ça marche</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#comparison" className="hover:text-white transition-colors">Comparatif</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href={APP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Se connecter</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-muted-2">
              <li>
                <a href="mailto:support@fixlyy.fr" className="hover:text-white transition-colors">
                  support@fixlyy.fr
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  Support 7j/7 · 8h–20h
                </span>
              </li>
              <li className="text-xs text-muted pt-2">
                Île-de-France, France
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© 2025 Fixlyy. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
