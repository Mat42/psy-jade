import React, { useState } from 'react';
import { Calendar, Euro, Clock, HelpCircle, ChevronDown, ChevronUp, FileText, CheckCircle, CreditCard } from 'lucide-react';
import { FAQS, RATES, CABINET_INFO } from '../data';

export default function FAQTarifs() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section 
      id="tarifs" 
      className="py-20 sm:py-24 bg-brand-beige/30 border-y border-brand-sage/5"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
          <span className="font-sans text-xs font-semibold tracking-widest text-brand-terracotta uppercase">Informations pratiques & FAQ</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-teal">
            Modalités &amp; <span className="italic font-medium text-brand-sage font-serif">Tarifs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: RATES CARD (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="font-serif text-lg font-semibold text-brand-charcoal flex items-center gap-2 border-b border-brand-sage/10 pb-2">
              <Euro className="w-5 h-5 text-brand-sage" />
              <span>Tarifs des consultations</span>
            </h3>

            {/* Rates Stack */}
            <div className="space-y-4">
              {RATES.map((rate, idx) => (
                <div 
                  id={`rate-card-${idx}`}
                  key={idx} 
                  className="bg-white p-5 rounded-xl border border-brand-sage/10 shadow-sm transition-all flex justify-between items-start gap-4"
                >
                  <div className="space-y-1">
                    <span className="font-sans text-[10px] uppercase tracking-wider font-semibold text-brand-terracotta">
                      {rate.target}
                    </span>
                    <h4 className="font-serif text-sm font-semibold text-brand-charcoal">
                      {rate.title}
                    </h4>
                    <p className="font-sans text-xs text-brand-charcoal/60 leading-normal">
                      {rate.details}
                    </p>
                  </div>
                  
                  <div className="font-serif text-lg font-bold text-brand-sage bg-brand-sage/5 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    {rate.price}
                  </div>
                </div>
              ))}
            </div>

            {/* Paiement Info */}
            <div className="bg-white border border-brand-sage/20 p-5 rounded-2xl space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-brand-sage/10 text-brand-sage rounded-lg mt-0.5">
                  <CreditCard className="w-4 h-4 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-charcoal">Paiement</h4>
                  <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed mt-1">
                    Les modalités de règlement se font par chèque, virement ou espèces.
                  </p>
                </div>
              </div>
              <div className="pt-2 border-t border-brand-sage/10 space-y-1.5">
                <p className="font-sans text-[11px] text-brand-charcoal/60 leading-normal">
                  <strong>Pour la téléconsultation :</strong> Afin de garantir le bon déroulement de votre rendez-vous, le règlement doit être reçu avant la consultation. À défaut de réception du paiement, la séance ne pourra pas avoir lieu et devra être reprogrammée. Les coordonnées bancaires nécessaires au règlement vous seront communiquées lors de la prise de rendez-vous.
                </p>
              </div>
            </div>

            <div className="bg-brand-sage/5 border border-brand-sage/20 p-5 rounded-2xl">
              <div className="flex items-start gap-3">
                <div className="p-1.5 bg-brand-sage/10 text-brand-sage rounded-lg mt-0.5">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-brand-charcoal">Consultations</h4>
                  <p className="font-sans text-[11px] text-brand-charcoal/70 leading-relaxed mt-1">
                    Les consultations ont lieu uniquement sur rendez-vous, au cabinet ou en téléconsultation.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: FAQ ACCORDION (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="font-serif text-lg font-semibold text-brand-charcoal flex items-center gap-2 border-b border-brand-sage/10 pb-2">
              <HelpCircle className="w-5 h-5 text-brand-terracotta" />
              <span>Questions fréquentes</span>
            </h3>

            {/* Accordion Stack */}
            <div className="space-y-3">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index}
                    id={`faq-item-${index}`}
                    className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen 
                        ? 'border-brand-sage/40 shadow-sm' 
                        : 'border-brand-sage/10 hover:border-brand-sage/25'
                    }`}
                  >
                    {/* Header trigger */}
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left gap-4"
                    >
                      <span className="font-sans text-xs sm:text-sm font-semibold text-brand-charcoal leading-snug">
                        {faq.question}
                      </span>
                      <div className={`p-1 rounded-full bg-brand-beige text-brand-charcoal/50 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-sage' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* Content */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? 'max-h-[300px] border-t border-brand-beige' : 'max-h-0'
                      }`}
                    >
                      <div className="p-5 bg-brand-beige/10 font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Quick notice of code de déontologie */}
            <div className="flex items-center gap-2 px-4 py-3.5 bg-white border border-brand-sage/10 rounded-xl">
              <CheckCircle className="w-4 h-4 text-brand-sage flex-shrink-0" />
              <p className="font-sans text-[11px] sm:text-xs text-brand-charcoal/65">
                {CABINET_INFO.name} est habilitée par l'<strong>ARS Auvergne-Rhône-Alpes</strong>, assurant que ses diplômes universitaires de niveau Bac+5 ont été dûment validés par l'État.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
