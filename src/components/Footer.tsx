import React from 'react';
import { MapPin, Phone, Mail, Award, Clock, ArrowRight, Compass } from 'lucide-react';
import { CABINET_INFO } from '../data';

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-beige border-t border-brand-charcoal pt-16 pb-12 text-left relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-sage/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid split */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-brand-beige/10 pb-12 mb-12">
          
          {/* Col 1: Psychologist Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-tight">
              {CABINET_INFO.name}
            </h3>
            <p className="font-sans text-xs text-brand-beige/60 font-semibold tracking-wider uppercase leading-snug">
              {CABINET_INFO.title}
            </p>
            <p className="font-sans text-xs text-brand-beige/70 leading-relaxed">
              Cabinet de psychologie accompagnant les adultes, les professionnels, les personnes âgées, et les institutions. Écoute active et approche systémique.
            </p>
            <div className="pt-2 flex flex-col gap-1 text-[11px] text-brand-beige/50">
              <span className="font-mono">{CABINET_INFO.rpps}</span>
              <span className="font-mono">{CABINET_INFO.siret}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold text-white uppercase tracking-widest">
              Plan du site
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Accueil', href: '#accueil' },
                { label: 'Approche Thérapeutique', href: '#approche' },
                { label: 'Secteurs d’Intervention', href: '#pour-qui' },
                { label: 'Tarifs et Mutuelles', href: '#tarifs' },
                { label: 'Prendre Rendez-vous', href: '#contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-sans text-xs text-brand-beige/70 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-brand-terracotta" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Practical Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold text-white uppercase tracking-widest">
              Horaires &amp; Consultations
            </h4>
            <div className="space-y-2 text-xs text-brand-beige/70">
              {CABINET_INFO.hours.map((h, idx) => (
                <div key={idx} className="flex justify-between border-b border-brand-beige/5 pb-1 last:border-0 last:pb-0">
                  <span>{h.days}</span>
                  <span className="font-mono text-white">{h.hours}</span>
                </div>
              ))}
            </div>
            <div className="bg-brand-beige/5 p-3.5 rounded-lg border border-brand-beige/10">
              <p className="font-sans text-[11px] text-brand-beige/60 leading-normal">
                📞 <strong>Urgence psychologique :</strong> Si vous faites face à une détresse aiguë immédiate en dehors de ces horaires, veuillez contacter le <strong>15 (SAMU)</strong> ou le <strong>3114</strong> (Numéro national de prévention du suicide).
              </p>
            </div>
          </div>

          {/* Col 4: Cabinet & Access directions (Compass) */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1">
              <Compass className="w-4 h-4 text-brand-terracotta" />
              <span>Accès &amp; Localisation</span>
            </h4>
            <p className="font-sans text-xs text-brand-beige/70 leading-relaxed">
              📍 <strong>{CABINET_INFO.address}</strong>
            </p>
            
            {/* Visual Mini MAP box simulation */}
            <div className="bg-brand-charcoal/80 border border-brand-beige/10 rounded-xl p-3 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-brand-sage uppercase tracking-wider">Plan de quartier</span>
                <span className="text-[10px] text-brand-beige/40">Bus à proximité</span>
              </div>
              
              {/* Minimalist Grid representing streets */}
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CABINET_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 bg-brand-charcoal border border-brand-beige/5 rounded relative overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity block cursor-pointer"
                aria-label="Ouvrir dans Google Maps"
              >
                {/* Horizontal road */}
                <div className="absolute left-0 right-0 h-4 bg-brand-beige/5" />
                {/* Vertical road */}
                <div className="absolute top-0 bottom-0 w-4 bg-brand-beige/5 left-1/2 -translate-x-1/2" />
                {/* Center marker */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-terracotta text-white p-1 rounded-full animate-pulse shadow-md z-10">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
              </a>

              <p className="font-sans text-[10px] text-brand-beige/60 leading-tight">
                🚗 <strong>Accès :</strong> Entrée juste après le portail violet. Stationnement disponible.
              </p>
            </div>
          </div>

        </div>

        {/* Lower Legal Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-brand-beige/40 gap-4">
          <div>
            <p>© {currentYear} Cabinet de Psychologie {CABINET_INFO.name}. Tous droits réservés.</p>
          </div>
          
          <div className="flex gap-4 flex-wrap justify-center">
            <span>Enregistrement ARS RPPS : {CABINET_INFO.rpps.split(': ')[1]}</span>
            <span>•</span>
            <span>Membre d'une association agréée</span>
            <span>•</span>
            <span className="hover:text-brand-beige/70 cursor-pointer">Mentions Légales</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
