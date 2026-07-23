import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { CABINET_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Approche', href: '#approche' },
    { label: 'Pour qui ?', href: '#pour-qui' },
    { label: 'Tarifs & Séance', href: '#tarifs' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-beige/95 backdrop-blur-md shadow-sm border-b border-brand-sage/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand Name */}
          <div className="flex flex-col">
            <a 
              href="#accueil" 
              onClick={(e) => handleLinkClick(e, '#accueil')}
              className="font-serif text-xl sm:text-2xl font-semibold text-brand-charcoal hover:text-brand-sage transition-colors leading-tight tracking-tight"
            >
              {CABINET_INFO.name}
            </a>
            <span className="font-sans text-[10px] sm:text-xs tracking-widest text-brand-sage uppercase font-medium mt-0.5">
              {CABINET_INFO.title}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-sm font-medium transition-colors text-brand-charcoal hover:text-brand-sage"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Booking CTA */}
            <a
              id="nav-cta-booking"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center gap-2 bg-brand-teal hover:bg-[#2A756C] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre RDV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-charcoal hover:text-brand-sage p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-beige border-b border-brand-sage/10 shadow-lg px-4 pt-2 pb-6 space-y-3 z-50 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-brand-charcoal hover:bg-brand-teal/5 hover:text-brand-teal transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-brand-sage/10 flex flex-col gap-3 px-3">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full bg-brand-teal hover:bg-[#2A756C] text-white py-2.5 rounded-lg text-sm font-medium transition-all shadow"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre Rendez-vous</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
