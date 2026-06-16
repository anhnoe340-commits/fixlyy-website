import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import CGU from './pages/CGU';
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
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
