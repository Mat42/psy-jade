import { CheckCircle2, Award, BookOpen, Quote, ArrowRight } from 'lucide-react';
import { CABINET_INFO } from '../data';

export default function About() {
  return (
    <section 
      id="approche" 
      className="py-20 sm:py-24 bg-white relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Qui suis-je ? */}
        <div className="space-y-6 text-left">
          <div className="space-y-3 text-center sm:text-left">
            <span className="font-sans text-xs font-semibold tracking-widest text-brand-terracotta uppercase">Qui suis-je ?</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-teal leading-tight">
              Mon <span className="italic font-medium text-brand-sage font-serif">parcours</span>
            </h2>
          </div>
          <div className="prose prose-brand max-w-none font-sans text-brand-charcoal/75 leading-relaxed text-base space-y-4">
            <p>
              Psychologue diplômée depuis 2012, j'ai travaillé de nombreuses années dans le secteur médico-social. Cela m'a permis de travailler auprès des patients, de leurs familles, des équipes soignantes, et de la direction. J'ai également exercé plusieurs années dans les ressources humaines, ce qui me permet de porter un regard éclairé sur les réalités du monde du travail.
            </p>
            <p>
              Aujourd'hui, je mets ces expériences au service des personnes que j'accompagne.
            </p>
            <a 
              href="#/annexe/1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-sage hover:text-brand-teal transition-colors font-medium text-sm pt-2"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mon approche */}
        <div className="space-y-6 text-left border-t border-brand-sage/10 pt-16">
          <div className="space-y-3 text-center sm:text-left">
            <span className="font-sans text-xs font-semibold tracking-widest text-brand-terracotta uppercase">Mon approche</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-teal leading-tight">
              Comprendre pour <span className="italic font-medium text-brand-sage font-serif">avancer</span>
            </h2>
          </div>
          <div className="prose prose-brand max-w-none font-sans text-brand-charcoal/75 leading-relaxed text-base space-y-4">
            <p>
              Chaque histoire mérite d'être comprise dans son contexte.
            </p>
            <p>
              Mon approche s'appuie sur la thérapie systémique, qui considère que nous évoluons tous au sein de relations, de familles, de groupes et d'environnements qui influencent notre manière de vivre les événements et d'y faire face.
            </p>
            <p>
              Ensemble, nous chercherons à mieux comprendre votre situation afin de retrouver un équilibre qui vous corresponde.
            </p>
            <div className="bg-brand-terracotta/5 p-6 rounded-xl mt-8 text-center sm:text-left">
              <p className="font-serif text-lg text-brand-teal font-medium italic">
                Parce qu'aucune personne ne se construit seule, aucune difficulté ne se comprend seule.
              </p>
            </div>
            <a 
              href="#/annexe/2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-sage hover:text-brand-teal transition-colors font-medium text-sm pt-2"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
