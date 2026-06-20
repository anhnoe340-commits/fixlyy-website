import React, { Suspense } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Hero from '../sections/Hero';

const ProblemStats  = React.lazy(() => import('../sections/ProblemStats'));
const ROICalculator = React.lazy(() => import('../sections/ROICalculator'));
const HowItWorks    = React.lazy(() => import('../sections/HowItWorks'));
const ForWho        = React.lazy(() => import('../sections/ForWho'));
const SocialProof   = React.lazy(() => import('../sections/SocialProof'));
const Pricing       = React.lazy(() => import('../sections/Pricing'));
const FAQ           = React.lazy(() => import('../sections/FAQ'));
const FinalCTA      = React.lazy(() => import('../sections/FinalCTA'));
const Footer        = React.lazy(() => import('../components/Footer'));

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-dark">
        <Hero />
        <Suspense fallback={null}>
          <ProblemStats />
          <ROICalculator />
          <HowItWorks />
          <ForWho />
          <SocialProof />
          <Pricing />
          <FAQ />
          <FinalCTA />
          <Footer />
        </Suspense>
      </main>
    </ThemeProvider>
  );
}
