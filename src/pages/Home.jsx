import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Hero from '../sections/Hero';
import AudioDemo from '../sections/AudioDemo';
import Problem from '../sections/Problem';
import Features from '../sections/Features';
import PhoneScroll from '../sections/PhoneScroll';
import HowItWorks from '../sections/HowItWorks';
import Comparison from '../sections/Comparison';
import Pricing from '../sections/Pricing';
import WhyTeam from '../sections/WhyTeam';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-dark">
        <Hero />
        <AudioDemo />
        <Problem />
        <Features />
        <PhoneScroll />
        <HowItWorks />
        <Comparison />
        <Pricing />
        <WhyTeam />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
