import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import FAQTarifs from './components/FAQTarifs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Home page layout. Shared by the client app (App.tsx) and the build-time
// pre-renderer (entry-server.tsx), so it must not touch window/document during render.
export default function HomePage({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-beige text-brand-charcoal selection:bg-brand-sage/20 selection:text-brand-charcoal relative overflow-x-clip">
      <a
        href="#main-content"
        className="absolute top-[-40px] left-4 z-[100] px-4 py-2 bg-brand-teal text-white font-medium focus:top-4 transition-all rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal shadow-md"
      >
        Aller au contenu principal
      </a>

      <header>
        <Navbar />
      </header>

      <main id="main-content">
        <Hero onScrollToSection={() => {}} />
        <About />
        <Specialties />
        <FAQTarifs />
        <ContactForm />
      </main>

      <Footer />
      {children}
    </div>
  );
}
