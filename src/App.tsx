import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import FAQTarifs from './components/FAQTarifs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnnexePage from './components/AnnexePage';

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
    if (currentHash && currentHash !== '#' && currentHash !== '#/' && !currentHash.startsWith('#/annexe/')) {
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

  // Handle Annexe routes
  if (currentHash.startsWith('#/annexe/')) {
    const annexeId = currentHash.replace('#/annexe/', '');
    return <AnnexePage id={annexeId} />;
  }

  return (
    <div className="min-h-screen bg-brand-beige text-brand-charcoal selection:bg-brand-sage/20 selection:text-brand-charcoal">
      {/* Universal elegant header */}
      <Navbar />

      <main>
        <Hero onScrollToSection={(id) => {}} />
        <About />
        <Specialties />
        <FAQTarifs />
        <ContactForm />
      </main>

      {/* Universal professional footer */}
      <Footer />
    </div>
  );
}
