import React, { useState } from 'react';
import { Eye, ShieldAlert, Heart, Check, HelpCircle, Activity } from 'lucide-react';
import { THERAPY_METHODS } from '../data';

export default function Approaches() {
  const [activeTab, setActiveTab] = useState<string>("tcc");

  const currentMethod = THERAPY_METHODS.find(m => m.id === activeTab) || THERAPY_METHODS[0];

  const getMethodIcon = (id: string) => {
    switch (id) {
      case 'tcc': return <Activity className="w-5 h-5 text-brand-sage" />;
      case 'emdr': return <Eye className="w-5 h-5 text-brand-terracotta" />;
      case 'humaniste': return <Heart className="w-5 h-5 text-emerald-600" />;
      default: return <Activity className="w-5 h-5 text-brand-sage" />;
    }
  };

  const getExpectationText = (id: string) => {
    switch (id) {
      case 'tcc':
        return "Une séance de TCC est très interactive. Nous définissons ensemble un objectif précis (ex: réussir à prendre l'ascenseur, calmer une crise d'angoisse). Nous analysons vos pensées automatiques, puis réalisons des petits exercices comportementaux ou émotionnels pendant la séance, avec des tâches simples à expérimenter chez vous entre les rendez-vous.";
      case 'emdr':
        return "Après avoir préparé et sécurisé la séance (apprentissage d'un lieu sûr), nous activons le souvenir douloureux. Vous suivez ensuite mes doigts des yeux (ou des tapotements alternés sur vos mains). Ces séries stimulent alternativement vos deux hémisphères cérébraux, aidant votre cerveau à archiver définitivement le souvenir de façon neutre.";
      case 'humaniste':
        return "Ici, pas de programme pré-établi ni de questionnaire. Vous amenez ce qui est vivant pour vous à l'instant T. Mon rôle est de reformuler, de refléter vos émotions avec une empathie totale et de vous aider à vous connecter à votre propre boussole intérieure pour dénouer vos conflits inconscients.";
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
            Une approche moderne, intégrative &amp; <span className="italic font-medium text-brand-sage font-serif">adaptative</span>
          </h2>
          <p className="font-sans text-brand-charcoal/65 text-sm sm:text-base leading-relaxed">
            Parce que chaque esprit fonctionne différemment, je ne m'enferme pas dans une seule théorie. J'associe plusieurs outils validés scientifiquement pour répondre au mieux à votre sensibilité.
          </p>
        </div>

        {/* Tab Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Tab buttons (Left column) */}
          <div className="lg:col-span-4 flex flex-col justify-start space-y-3">
            <h3 className="font-serif text-sm font-semibold text-brand-charcoal/55 uppercase tracking-wider text-left mb-2 pl-2">
              Sélectionnez une méthode :
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {THERAPY_METHODS.map((method) => {
                const isActive = activeTab === method.id;
                return (
                  <button
                    key={method.id}
                    onClick={() => setActiveTab(method.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 ${
                      isActive 
                        ? 'bg-brand-sage/5 border-brand-sage/40 shadow-sm ring-1 ring-brand-sage/10' 
                        : 'bg-white border-brand-charcoal/10 hover:border-brand-sage/20 hover:bg-brand-beige/20'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-white shadow-sm' : 'bg-brand-beige/40'}`}>
                      {getMethodIcon(method.id)}
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-brand-charcoal leading-tight">
                        {method.title.split(' (')[0]}
                      </h4>
                      <p className="font-sans text-[11px] text-brand-charcoal/50 mt-0.5">
                        {method.id === 'emdr' ? 'Mouvements oculaires' : method.id === 'tcc' ? 'Cognitif & Comportement' : 'Relation d’aide'}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Reassuring note */}
            <div className="hidden lg:block bg-brand-beige/40 p-4 rounded-xl border border-brand-sage/10 text-left mt-6">
              <div className="flex gap-2.5 text-brand-sage">
                <HelpCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p className="font-sans text-xs text-brand-charcoal/70 leading-relaxed">
                  <strong>Le saviez-vous ?</strong> L'EMDR et les TCC font partie des thérapies recommandées officiellement par l'<strong>OMS</strong> et la <strong>Haute Autorité de Santé (HAS)</strong> pour le stress post-traumatique et l'anxiété.
                </p>
              </div>
            </div>
          </div>

          {/* Active Tab Panel (Right column) */}
          <div className="lg:col-span-8 bg-brand-beige/10 rounded-2xl border border-brand-sage/10 p-6 sm:p-8 flex flex-col justify-between text-left">
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
                  Principaux domaines d'application :
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentMethod.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-brand-charcoal/80">
                      <div className="p-0.5 bg-brand-sage/10 text-brand-sage rounded">
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
                <HelpCircle className="w-4 h-4" />
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
