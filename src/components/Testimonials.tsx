import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section 
      id="temoignages" 
      className="py-16 sm:py-20 bg-brand-cream/30 overflow-hidden relative"
    >
      {/* Quotation icon background accent */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-brand-sage/5 transform -scale-x-100 pointer-events-none hidden md:block">
        <Quote className="w-48 h-48" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Quote icon overlay */}
        <div className="inline-flex p-3 bg-brand-sage/10 text-brand-sage rounded-full mb-6">
          <Quote className="w-6 h-6" />
        </div>

        {/* Carousel Container */}
        <div className="min-h-[220px] flex flex-col justify-between items-center">
          
          {/* Active Testimonial Card */}
          <div 
            id={`testimonial-active-${activeIndex}`}
            className="transition-all duration-500 ease-in-out transform scale-100 opacity-100"
          >
            <blockquote className="font-serif text-lg sm:text-xl md:text-2xl font-light text-brand-charcoal italic leading-relaxed max-w-3xl">
              "{TESTIMONIALS[activeIndex].quote}"
            </blockquote>
            
            <div className="mt-6">
              <cite className="not-italic font-sans text-xs sm:text-sm font-semibold text-brand-charcoal">
                {TESTIMONIALS[activeIndex].author}
              </cite>
              <span className="block font-sans text-[10px] sm:text-xs text-brand-sage uppercase tracking-wider font-medium mt-1">
                {TESTIMONIALS[activeIndex].type} — {TESTIMONIALS[activeIndex].date}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-brand-sage/20 bg-white hover:bg-brand-sage hover:text-white text-brand-charcoal transition-all shadow-sm"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Slider Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx 
                      ? 'bg-brand-sage w-6' 
                      : 'bg-brand-sage/20 hover:bg-brand-sage/40'
                  }`}
                  aria-label={`Aller au témoignage ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-brand-sage/20 bg-white hover:bg-brand-sage hover:text-white text-brand-charcoal transition-all shadow-sm"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        <p className="font-sans text-[10px] text-brand-charcoal/40 text-center mt-6 uppercase tracking-widest leading-none">
          Par respect du secret médical, tous les prénoms de patients ont été modifiés.
        </p>

      </div>
    </section>
  );
}
