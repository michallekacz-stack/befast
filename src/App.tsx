/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Main Application Entry Point
 */

import { LanguageProvider } from './context/language-context';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { VanCapacity } from './components/VanCapacity';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-500/30">
        <Navbar />
        <main>
          <Hero />
          <About />
          <WhyUs />
          <VanCapacity />
          <Testimonials />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
