import React, { useState } from 'react';
import { Eye, ShieldAlert, Heart, Check, HelpCircle, Activity, Users } from 'lucide-react';
import { THERAPY_METHODS } from '../data';

export default function Approaches() {
  const [activeTab, setActiveTab] = useState<string>("systemique");

  const currentMethod = THERAPY_METHODS.find(m => m.id === activeTab) || THERAPY_METHODS[0];

  const getMethodIcon = (id: string) => {
    switch (id) {
      case 'systemique': return <Users className="w-5 h-5 text-brand-sage" />;
      case 'clinique': return <Heart className="w-5 h-5 text-brand-terracotta" />;
      default: return <Activity className="w-5 h-5 text-brand-sage" />;
    }
  };

  const getMethodSubtitle = (id: string) => {
    switch(id) {
      case 'systemique': return 'Comprendre les relations';
      case 'clinique': return 'Écoute et soutien psychologique';
      default: return '';
    }
  }

  const getExpectationText = (id: string) => {
    switch (id) {
      case 'systemique':
        return "Nous prenons le temps d'explorer l'ensemble de votre situation : les difficultés que vous rencontrez, mais aussi votre histoire, vos relations et votre environnement. C'est un espace d'échange interactif où nous cherchons ensemble de nouvelles perspectives, avec une attention particulière aux dynamiques relationnelles.";
      case 'clinique':
        return "Je vous offre une écoute active et bienveillante, sans jugement. La parole est libre et nous avançons à votre rythme pour vous aider à mettre des mots sur ce que vous traversez, apaiser la souffrance et mobiliser vos ressources internes.";
      default:
        return "";
    }
  };

  return (
    <section 
      id="approche-detail" 
      className="py-20 sm:py-24 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
          <span className="font-sans text-xs font-semibold tracking-widest text-brand-terracotta uppercase">Méthodologie</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-charcoal">
            Une approche respectueuse &amp; <span className="italic font-medium text-brand-sage font-serif">adaptative</span>
          </h2>
          <p className="font-sans text-brand-charcoal/65 text-sm sm:text-base leading-relaxed">
            Mon accompagnement s'adapte à votre histoire et vos besoins. Il ne s'agit pas d'appliquer une méthode toute faite, mais de cheminer ensemble vers un équilibre qui vous correspond.
          </p>
        </div>

        {/* Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Tab buttons (Left column) */}
          <div className="lg:col-span-4 flex flex-col justify-start space-y-3">
            <h3 className="font-serif text-sm font-semibold text-brand-charcoal/55 uppercase tracking-wider text-left mb-2 pl-2">
              Mes approches :
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {THERAPY_METHODS.map((method) => {
                const isActive = activeTab === method.id;
                return (
                  <button
                    key={method.id}
                    onClick={() => setActiveTab(method.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 ${
                      isActive 
                        ? 'bg-brand-cream/60 border-brand-cream shadow-sm ring-1 ring-brand-cream/50' 
                        : 'bg-white border-brand-charcoal/10 hover:border-brand-sage/20 hover:bg-brand-beige/50'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-white shadow-sm' : 'bg-brand-beige/80'}`}>
                      {getMethodIcon(method.id)}
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-brand-charcoal leading-tight">
                        {method.title}
                      </h4>
                      <p className="font-sans text-[11px] text-brand-charcoal/50 mt-0.5">
                        {getMethodSubtitle(method.id)}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Reassuring note */}
            <div className="hidden lg:block bg-brand-cream/30 p-4 rounded-xl border border-brand-cream/60 text-left mt-6">
              <div className="flex gap-2.5 text-brand-terracotta">
                <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                  <strong>Le saviez-vous ?</strong> L'approche systémique est particulièrement adaptée lorsque l'on ressent le besoin de dénouer des blocages relationnels, qu'ils soient familiaux ou professionnels.
                </p>
              </div>
            </div>
          </div>

          {/* Active Tab Panel (Right column) */}
          <div className="lg:col-span-8 bg-brand-beige/40 rounded-2xl border border-brand-sage/15 p-6 sm:p-8 flex flex-col justify-between text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-brand-sage border-b border-brand-sage/10 pb-3">
                {getMethodIcon(currentMethod.id)}
                <h3 className="font-serif text-lg sm:text-xl font-medium text-brand-charcoal">
                  {currentMethod.title}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-medium">
                {currentMethod.shortDesc}
              </p>
              <p className="font-sans text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed">
                {currentMethod.description}
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-3">
                <h4 className="font-sans text-xs font-bold text-brand-charcoal uppercase tracking-wider">
                  Principaux objectifs :
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentMethod.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-brand-charcoal/80">
                      <div className="p-0.5 bg-brand-sage/20 text-brand-sage rounded">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Practical "Expectation Box" */}
            <div className="mt-8 bg-white p-5 rounded-xl border border-brand-sage/10 shadow-sm">
              <h4 className="font-serif text-xs font-semibold text-brand-terracotta uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <HelpCircle className="w-4 h-4 text-brand-terracotta" />
                Concrètement, comment se passe la séance ?
              </h4>
              <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                {getExpectationText(currentMethod.id)}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
