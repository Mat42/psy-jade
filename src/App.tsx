import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import FAQTarifs from './components/FAQTarifs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnnexePage from './components/AnnexePage';

import MentionsLegales from './components/MentionsLegales';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to hash elements if present on load or direct navigation (for anchor links)
  useEffect(() => {
    if (currentHash && currentHash !== '#' && currentHash !== '#/' && !currentHash.startsWith('#/annexe/') && currentHash !== '#/mentions-legales') {
      try {
        const id = currentHash;
        const element = document.querySelector(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } catch (e) {
        // Ignore invalid selectors
      }
    } else if (currentHash === '' || currentHash === '#' || currentHash === '#/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentHash]);

  // Handle Mentions Légales route
  if (currentHash === '#/mentions-legales') {
    return (
      <>
        <MentionsLegales />
        <Analytics />
      </>
    );
  }

  // Handle Annexe routes
  if (currentHash.startsWith('#/annexe/')) {
    const annexeId = currentHash.replace('#/annexe/', '');
    return (
      <>
        <AnnexePage id={annexeId} />
        <Analytics />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-brand-beige text-brand-charcoal selection:bg-brand-sage/20 selection:text-brand-charcoal relative">
      <a 
        href="#main-content" 
        className="absolute top-[-40px] left-4 z-[100] px-4 py-2 bg-brand-teal text-white font-medium focus:top-4 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal shadow-md"
      >
        Aller au contenu principal
      </a>

      {/* Universal elegant header */}
      <Navbar />

      <main id="main-content">
        <Hero onScrollToSection={(id) => {}} />
        <About />
        <Specialties />
        <FAQTarifs />
        <ContactForm />
      </main>

      {/* Universal professional footer */}
      <Footer />
      <Analytics />
    </div>
  );
}
