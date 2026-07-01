import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { getRelated } from './posts';

const COMMENCER_URL = 'https://app.fixlyy.fr/commencer';

/**
 * Layout partagé pour tous les articles de blog.
 * Gère le SEO (title + meta description + canonical), l'en-tête,
 * le CTA final, le maillage interne "À lire aussi" et le footer.
 */
export default function BlogLayout({
  slug,
  title,
  description,
  keyword,
  date,
  readTime,
  children,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const related = getRelated(slug, 3);
  const canonical = `https://fixlyy.fr/blog/${slug}`;

  return (
    <div style={{ background: '#F8FAFF', minHeight: '100vh' }}>
      <Helmet>
        <title>{`${title} | Fixlyy`}</title>
        <meta name="description" content={description} />
        {keyword && <meta name="keywords" content={keyword} />}
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${title} | Fixlyy`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
      </Helmet>

      {/* En-tête */}
      <header
        className="py-5 px-6"
        style={{ borderBottom: '1px solid #E0E7FF', background: '#fff' }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <a href="/">
            <img src="/logo-full-clean.svg" alt="Fixlyy" className="h-8 w-auto" />
          </a>
          <Link
            to="/blog"
            className="text-sm font-medium hover:underline"
            style={{ color: '#3B5BFA' }}
          >
            ← Tous les articles
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <article className="blog-article">
          <p className="text-sm mb-3" style={{ color: '#3B5BFA', fontWeight: 600 }}>
            {keyword}
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#0D1117', lineHeight: 1.2 }}
          >
            {title}
          </h1>
          <p className="text-sm mb-10" style={{ color: '#9CA3AF' }}>
            Publié le {date} · {readTime} de lecture
          </p>

          <div className="blog-content" style={{ color: '#374151', fontSize: 17, lineHeight: 1.75 }}>
            {children}
          </div>

          {/* CTA final */}
          <div
            className="mt-14 p-8 rounded-2xl text-center"
            style={{
              background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
              border: '1px solid #C7D2FE',
            }}
          >
            <h3 className="text-2xl font-bold mb-2" style={{ color: '#0D1117' }}>
              Prêt à ne plus rater un appel ?
            </h3>
            <p className="mb-5" style={{ color: '#4B5563' }}>
              Essayez Mia gratuitement pendant 7 jours. Elle décroche à votre place,
              24h/24, et vous envoie un SMS récap en 30 secondes.
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

          {/* Maillage interne */}
          <div className="mt-14">
            <h3 className="text-xl font-bold mb-5" style={{ color: '#0D1117' }}>
              À lire aussi
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="block p-4 rounded-xl transition-shadow hover:shadow-md"
                  style={{ background: '#fff', border: '1px solid #E0E7FF' }}
                >
                  <span
                    className="font-semibold text-sm"
                    style={{ color: '#0D1117' }}
                  >
                    {p.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer
        className="py-8 text-center"
        style={{ borderTop: '1px solid #E0E7FF' }}
      >
        <div
          className="flex flex-wrap items-center justify-center gap-4 text-xs mb-4"
          style={{ color: '#9CA3AF' }}
        >
          <Link to="/blog" className="hover:text-[#3B5BFA]">Blog</Link>
          <span>·</span>
          <Link to="/cgv" className="hover:text-[#3B5BFA]">CGV</Link>
          <span>·</span>
          <Link to="/cgu" className="hover:text-[#3B5BFA]">CGU</Link>
          <span>·</span>
          <Link to="/confidentialite" className="hover:text-[#3B5BFA]">Confidentialité</Link>
          <span>·</span>
          <Link to="/mentions-legales" className="hover:text-[#3B5BFA]">Mentions légales</Link>
        </div>
        <p className="text-xs" style={{ color: '#C7D2FE' }}>
          © 2026 Fixlyy · Secrétaire IA pour artisans
        </p>
      </footer>

      {/* Styles typographiques des articles */}
      <style>{`
        .blog-content h2 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #0D1117;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.25;
        }
        .blog-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0D1117;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p { margin-bottom: 1.15rem; }
        .blog-content ul, .blog-content ol {
          margin: 0 0 1.15rem 1.25rem;
          padding-left: 1rem;
        }
        .blog-content ul { list-style: disc; }
        .blog-content ol { list-style: decimal; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content strong { color: #0D1117; }
        .blog-content a { color: #3B5BFA; text-decoration: underline; }
        .blog-content blockquote {
          border-left: 4px solid #3B5BFA;
          background: #EEF2FF;
          padding: 1rem 1.25rem;
          margin: 1.5rem 0;
          border-radius: 0 8px 8px 0;
          font-style: italic;
          color: #1E293B;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 15px;
        }
        .blog-content th, .blog-content td {
          border: 1px solid #E0E7FF;
          padding: 0.75rem;
          text-align: left;
          vertical-align: top;
        }
        .blog-content th {
          background: #EEF2FF;
          font-weight: 700;
          color: #0D1117;
        }
        .blog-callout {
          background: #FFF7ED;
          border: 1px solid #FED7AA;
          border-radius: 12px;
          padding: 1.25rem;
          margin: 1.5rem 0;
        }
        .blog-callout p:last-child { margin-bottom: 0; }
      `}</style>
    </div>
  );
}
