import React from 'react';
import { Calendar, Phone, Shield, MapPin, Award } from 'lucide-react';
import { CABINET_INFO } from '../data';
import therapyOfficeImg from '../assets/images/therapy_office_1783681138701.jpg';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
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

  return (
    <section 
      id="accueil" 
      className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-brand-cream/40 via-brand-beige to-white"
    >
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-cream/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-sage/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-sage/10 text-brand-sage rounded-full text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Psychologue clinicienne diplômée d'État</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-brand-charcoal leading-[1.1] tracking-tight">
              Retrouver un espace de <span className="italic text-brand-sage font-medium font-serif">parole</span> et de <span className="italic text-brand-terracotta font-medium font-serif">clarté</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-brand-charcoal/75 leading-relaxed max-w-2xl">
              Au sein de mon cabinet à <strong>{CABINET_INFO.shortAddress}</strong>, je vous propose un accompagnement psychologique sur-mesure, confidentiel et profondément bienveillant. Pour traverser une crise passagère ou accomplir un travail thérapeutique durable.
            </p>

            {/* Badges row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="mt-1 p-1 bg-brand-sage/5 text-brand-sage rounded-lg">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-semibold text-brand-charcoal uppercase tracking-wider">Secret Professionnel</h4>
                  <p className="font-sans text-[11px] text-brand-charcoal/60 mt-0.5">Code de Déontologie national</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2.5">
                <div className="mt-1 p-1 bg-brand-sage/5 text-brand-sage rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-semibold text-brand-charcoal uppercase tracking-wider">Cabinet physique</h4>
                  <p className="font-sans text-[11px] text-brand-charcoal/60 mt-0.5">Accès PMR à Villefranche</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="mt-1 p-1 bg-brand-sage/5 text-brand-sage rounded-lg">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-semibold text-brand-charcoal uppercase tracking-wider">N° ADELI Certifié</h4>
                  <p className="font-sans text-[11px] text-brand-charcoal/60 mt-0.5">Enregistré en Préfecture</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={(e) => handleCtaClick(e, '#contact')}
                className="flex items-center justify-center gap-2 bg-brand-sage hover:bg-brand-olive text-brand-beige px-7 py-3.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Prendre un rendez-vous</span>
              </button>
              
              <button
                onClick={(e) => handleCtaClick(e, '#approche')}
                className="flex items-center justify-center gap-2 bg-transparent hover:bg-brand-charcoal/5 border border-brand-charcoal/20 text-brand-charcoal px-7 py-3.5 rounded-full text-sm font-medium transition-all"
              >
                <span>Découvrir mon approche</span>
              </button>
            </div>

            <div className="pt-2 text-xs text-brand-charcoal/50 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Consultations en cabinet &amp; Téléconsultation sécurisée</span>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Elegant framing decoration */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-terracotta/40 rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-sage/40 rounded-br-xl pointer-events-none" />
            
            {/* Main Office Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] lg:aspect-[3/4] bg-brand-cream/30">
              <img
                src={therapyOfficeImg}
                alt="Cabinet de psychologie de Sarah Lambert"
                className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlapping Info card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/40 flex items-center justify-between">
                <div>
                  <p className="font-serif text-sm font-medium text-brand-charcoal">Cabinet de Villefranche</p>
                  <p className="font-sans text-[11px] text-brand-charcoal/60">Un cadre serein, propice à l'apaisement</p>
                </div>
                <a
                  href={`tel:${CABINET_INFO.phone}`}
                  className="p-2.5 bg-brand-sage/10 text-brand-sage rounded-full hover:bg-brand-sage hover:text-white transition-colors"
                  title="Téléphoner au cabinet"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
