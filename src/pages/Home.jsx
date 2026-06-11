import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Hero from '../sections/Hero';
import ProblemStats from '../sections/ProblemStats';
import ROICalculator from '../sections/ROICalculator';
import HowItWorks from '../sections/HowItWorks';
import ForWho from '../sections/ForWho';
import SocialProof from '../sections/SocialProof';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-dark">
        <Hero />
        <ProblemStats />
        <ROICalculator />
        <HowItWorks />
        <ForWho />
        <SocialProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
