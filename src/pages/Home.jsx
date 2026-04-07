import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Hero from '../sections/Hero';
import Problem from '../sections/Problem';
import HowItWorks from '../sections/HowItWorks';
import Comparison from '../sections/Comparison';
import Pricing from '../sections/Pricing';
import Testimonials from '../sections/Testimonials';
import AudioDemo from '../sections/AudioDemo';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-dark">
        <Hero />
        <Problem />
        <HowItWorks />
        <AudioDemo />
        <Comparison />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
