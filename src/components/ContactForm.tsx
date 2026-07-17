import React from 'react';
import { Mail, Phone, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { CABINET_INFO } from '../data';

export default function ContactForm() {
  return (
    <section 
      id="contact" 
      className="py-20 sm:py-24 bg-white relative"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-terracotta/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
          <span className="font-sans text-xs font-semibold tracking-widest text-brand-terracotta uppercase">Contact &amp; Cabinet</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-terracotta">
            Prendre contact ou <span className="italic font-medium text-brand-sage font-serif">planifier un rendez-vous</span>
          </h2>
          <p className="font-sans text-brand-charcoal/65 text-sm sm:text-base leading-relaxed">
            Prenez rendez-vous directement ci-dessous via Doctolib ou envoyez-moi un message pour toute demande d'informations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: CABINET COORDINATES & INFOS */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="bg-brand-beige/50 p-6 sm:p-8 rounded-2xl border border-brand-sage/10 space-y-6">
              <h3 className="font-serif text-lg font-semibold text-brand-charcoal">Coordonnées du Cabinet</h3>
              
              {/* Phone info */}
              <div className="flex gap-4">
                <div className="p-3 bg-white rounded-xl text-brand-sage shadow-sm border border-brand-sage/10 flex-shrink-0 self-start">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-brand-charcoal uppercase tracking-wider">Téléphone</h4>
                  <a href={`tel:${CABINET_INFO.phone}`} className="font-sans text-base font-semibold text-brand-sage hover:underline mt-1 block">
                    {CABINET_INFO.phone}
                  </a>
                  <p className="font-sans text-[11px] text-brand-charcoal/50 mt-0.5">Si je ne suis pas disponible, n'hésitez pas à me laisser un message vocal ou un SMS. Je vous recontacterai dès que possible.</p>
                </div>
              </div>

              {/* Email info */}
              <div className="flex gap-4">
                <div className="p-3 bg-white rounded-xl text-brand-sage shadow-sm border border-brand-sage/10 flex-shrink-0 self-start">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-brand-charcoal uppercase tracking-wider">Adresse Email</h4>
                  <a href={`mailto:${CABINET_INFO.email}`} className="font-sans text-sm font-semibold text-brand-charcoal hover:text-brand-sage mt-1 block break-all">
                    {CABINET_INFO.email}
                  </a>
                  <p className="font-sans text-[11px] text-brand-charcoal/50 mt-0.5">Réponse confidentielle par messagerie sécurisée</p>
                </div>
              </div>

              {/* Address info */}
              <div className="flex gap-4">
                <div className="p-3 bg-white rounded-xl text-brand-sage shadow-sm border border-brand-sage/10 flex-shrink-0 self-start">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-brand-charcoal uppercase tracking-wider">Adresse du Cabinet</h4>
                  <p className="font-sans text-sm text-brand-charcoal leading-relaxed font-semibold mt-1">
                    {CABINET_INFO.address}
                  </p>
                  <p className="font-sans text-[11px] text-brand-charcoal/50 mt-1">
                    📍 Entrée juste après le portail violet. Des places de stationnement sont disponibles dans l'enceinte de l'établissement.
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white border border-brand-sage/10 p-6 sm:p-8 rounded-2xl text-left space-y-4">
              <h3 className="font-serif text-base font-semibold text-brand-charcoal border-b border-brand-sage/10 pb-2">Horaires d'ouverture :</h3>
              <div className="space-y-2.5">
                {CABINET_INFO.hours.map((h, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="font-sans text-brand-charcoal/70 font-medium">{h.days}</span>
                    <span className="font-mono text-brand-charcoal font-semibold">{h.hours}</span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-[11px] text-brand-charcoal/50 italic mt-4 pt-2 border-t border-brand-beige">
                * Les consultations ont lieu uniquement sur rendez-vous préalablement programmé.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT INTERACTIVE FORM (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-brand-beige/25 border border-brand-sage/10 rounded-2xl p-6 sm:p-8 relative">
            
            {/* DOCTOLIB INFO */}
            <div className="space-y-4 animate-fadeIn text-left">
              <div className="bg-brand-sage/5 border border-brand-sage/10 rounded-xl p-6 text-brand-charcoal/80 leading-relaxed mb-4 text-center">
                <h3 className="font-serif text-2xl mb-4 text-brand-charcoal">Prenez rendez-vous via Doctolib</h3>
                <p className="text-sm mb-8 max-w-lg mx-auto">
                  Pour votre confort, mon agenda de consultation est accessible directement sur Doctolib. Sélectionnez un créneau (en cabinet ou en téléconsultation) pour réserver instantanément votre séance.
                </p>
                
                <a
                  href={CABINET_INFO.doctolibUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0596DE] hover:bg-[#047bb5] text-white px-8 py-4 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Ouvrir mon agenda Doctolib</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
