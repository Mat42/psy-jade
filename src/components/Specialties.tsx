import React, { useState } from 'react';
import { User, Sparkles, Heart, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { SPECIALTIES } from '../data';

export default function Specialties() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Heart': return <Heart className="w-5 h-5" />;
      default: return <User className="w-5 h-5" />;
    }
  };

  const toggleExpand = (id: string) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section 
      id="pour-qui" 
      className="py-20 sm:py-24 bg-brand-beige/50 border-y border-brand-sage/5 relative"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cream/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
          <span className="font-sans text-xs font-semibold tracking-widest text-brand-terracotta uppercase">Champs d'intervention</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-charcoal">
            Pour qui ? Pour quoi <span className="italic font-medium text-brand-sage font-serif">consulter</span> ?
          </h2>
          <p className="font-sans text-brand-charcoal/65 text-sm sm:text-base leading-relaxed">
            Il n'y a pas de mauvaise raison pour faire la démarche de rencontrer un psychologue. Qu'il s'agisse d'un moment de crise aigu ou d'un besoin de fond, j'adapte ma thérapie à chaque profil.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIALTIES.map((spec) => {
            const isExpanded = expandedCard === spec.id;
            return (
              <div
                id={`specialty-card-${spec.id}`}
                key={spec.id}
                className={`bg-white rounded-2xl border transition-all duration-300 text-left flex flex-col justify-between ${
                  isExpanded 
                    ? 'border-brand-sage shadow-md ring-1 ring-brand-sage/20' 
                    : 'border-brand-sage/10 shadow-sm hover:shadow-md hover:border-brand-sage/30'
                }`}
              >
                {/* Upper Content */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-sage/10 text-brand-sage rounded-xl">
                      {getIcon(spec.iconName)}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-brand-charcoal">{spec.title}</h3>
                      <p className="font-sans text-xs text-brand-sage font-medium">{spec.subtitle}</p>
                    </div>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                    {spec.description}
                  </p>

                  {/* Expandable Section */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-brand-sage/10 space-y-3">
                      <h4 className="font-sans text-xs font-bold text-brand-charcoal uppercase tracking-wider">
                        Motifs fréquents de consultation :
                      </h4>
                      <ul className="space-y-2">
                        {spec.symptoms.map((symp, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-brand-charcoal/85">
                            <span className="mt-0.5 text-brand-terracotta flex-shrink-0">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                            <span>{symp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Button footer */}
                <div className="p-6 bg-brand-beige/20 border-t border-brand-sage/5 rounded-b-2xl">
                  <button
                    onClick={() => toggleExpand(spec.id)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-brand-beige border border-brand-sage/15 hover:border-brand-sage/30 hover:bg-brand-sage/5 text-brand-charcoal text-xs font-medium rounded-xl transition-all"
                  >
                    <span>{isExpanded ? 'Masquer les détails' : 'Voir les motifs fréquents'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick reassuring notice */}
        <div className="mt-12 bg-white/60 backdrop-blur-sm max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl border border-brand-sage/10 text-center">
          <p className="font-sans text-xs text-brand-charcoal/70 italic">
            "Le titre de psychologue clinicien est protégé par la loi française. Les séances de thérapie se font dans le respect strict du secret professionnel et de la liberté individuelle."
          </p>
        </div>

      </div>
    </section>
  );
}
