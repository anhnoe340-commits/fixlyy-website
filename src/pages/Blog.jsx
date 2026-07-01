import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { POSTS } from './blog/posts';

const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: '#F8FAFF', minHeight: '100vh' }}>
      <Helmet>
        <title>Blog Fixlyy — Conseils pour ne plus rater d'appels | Fixlyy</title>
        <meta
          name="description"
          content="Le blog des artisans qui veulent arrêter de perdre des clients. Appels manqués, secrétaire IA, renvoi d'appel : nos guides concrets pour plombiers, électriciens et serruriers."
        />
        <link rel="canonical" href="https://fixlyy.fr/blog" />
      </Helmet>

      {/* En-tête */}
      <header
        className="py-5 px-6"
        style={{ borderBottom: '1px solid #E0E7FF', background: '#fff' }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/">
            <img src="/logo-full-clean.svg" alt="Fixlyy" className="h-8 w-auto" />
          </a>
          <a
            href={COMMENCER_URL}
            className="text-sm font-bold px-5 py-2 rounded-lg"
            style={{ background: '#3B5BFA', color: '#fff' }}
          >
            Essai gratuit
          </a>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-14">
        <p className="text-sm mb-3" style={{ color: '#3B5BFA', fontWeight: 600 }}>
          Le blog Fixlyy
        </p>
        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: '#0D1117', lineHeight: 1.2 }}
        >
          Arrêtez de perdre des clients au téléphone
        </h1>
        <p className="text-lg mb-12" style={{ color: '#4B5563', maxWidth: 640 }}>
          Des conseils concrets pour les artisans indépendants : combien coûtent
          vos appels manqués, comment configurer votre renvoi d'appel, et pourquoi
          une assistante IA change la donne quand on travaille seul.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block p-6 rounded-2xl transition-shadow hover:shadow-lg"
              style={{ background: '#fff', border: '1px solid #E0E7FF' }}
            >
              <span
                className="inline-block text-xs font-semibold mb-3 px-2.5 py-1 rounded-full"
                style={{ background: '#EEF2FF', color: '#3B5BFA' }}
              >
                {post.keyword}
              </span>
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: '#0D1117', lineHeight: 1.3 }}
              >
                {post.title}
              </h2>
              <p className="text-sm mb-4" style={{ color: '#4B5563' }}>
                {post.excerpt}
              </p>
              <p className="text-xs" style={{ color: '#9CA3AF' }}>
                {post.date} · {post.readTime} de lecture
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-16 p-8 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
            border: '1px solid #C7D2FE',
          }}
        >
          <h3 className="text-2xl font-bold mb-2" style={{ color: '#0D1117' }}>
            Testez Mia sur votre propre activité
          </h3>
          <p className="mb-5" style={{ color: '#4B5563' }}>
            7 jours pour voir combien d'appels vous récupérez. Sans risque.
          </p>
          <a
            href={COMMENCER_URL}
            className="inline-block font-bold px-8 py-3 rounded-xl transition-transform hover:scale-105"
            style={{ background: '#3B5BFA', color: '#fff' }}
          >
            Démarrer l'essai gratuit →
          </a>
          <p className="text-xs mt-3" style={{ color: '#6B7280' }}>
            7 jours gratuits · 497€/mois · Engagement 3 mois
          </p>
        </div>
      </div>

      <footer
        className="py-8 text-center"
        style={{ borderTop: '1px solid #E0E7FF' }}
      >
        <p className="text-xs" style={{ color: '#C7D2FE' }}>
          © 2026 Fixlyy · Secrétaire IA pour artisans
        </p>
      </footer>
    </div>
  );
}
