import React from 'react';
import Hero from '../sections/Hero';
import Problem from '../sections/Problem';
import HowItWorks from '../sections/HowItWorks';
import Comparison from '../sections/Comparison';
import Pricing from '../sections/Pricing';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Hero />
      <Problem />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
