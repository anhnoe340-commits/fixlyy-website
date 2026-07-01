import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Apply from './pages/Apply';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import CGU from './pages/CGU';
import CGV from './pages/CGV';
import Blog from './pages/Blog';
import Article1 from './pages/blog/Article1';
import Article2 from './pages/blog/Article2';
import Article3 from './pages/blog/Article3';
import Article4 from './pages/blog/Article4';
import Article5 from './pages/blog/Article5';
import Article6 from './pages/blog/Article6';
import Article7 from './pages/blog/Article7';
import Article8 from './pages/blog/Article8';
import Article9 from './pages/blog/Article9';
import Article10 from './pages/blog/Article10';
import { trackEvent } from './utils/pixel';

function App() {
  useEffect(() => {
    function handleClick(e) {
      const link = e.target.closest('a[href]')
      if (link && link.href.includes('/commencer')) {
        trackEvent('Lead')
      }
    }
    document.addEventListener('click', handleClick, { capture: true })
    return () => document.removeEventListener('click', handleClick, { capture: true })
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidature" element={<Apply />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/cgv" element={<CGV />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/appels-manques-cout" element={<Article1 />} />
        <Route path="/blog/artisans-perdent-clients" element={<Article2 />} />
        <Route path="/blog/secretaire-vs-ia" element={<Article3 />} />
        <Route path="/blog/receptionniste-ia-comment-ca-marche" element={<Article4 />} />
        <Route path="/blog/5-erreurs-telephone-artisan" element={<Article5 />} />
        <Route path="/blog/renvoi-appel-guide-operateurs" element={<Article6 />} />
        <Route path="/blog/artisan-solo-ne-plus-rater-client" element={<Article7 />} />
        <Route path="/blog/mia-assistante-ia-fixlyy" element={<Article8 />} />
        <Route path="/blog/temoignages-artisans" element={<Article9 />} />
        <Route path="/blog/ia-artisans-mythe-realite" element={<Article10 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
