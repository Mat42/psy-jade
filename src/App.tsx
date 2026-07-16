import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import FAQTarifs from './components/FAQTarifs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  // Scroll to hash elements if present on load or direct navigation
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash;
      const element = document.querySelector(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

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
