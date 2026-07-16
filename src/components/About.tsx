import { CheckCircle2, Award, BookOpen, Quote } from 'lucide-react';
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
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-charcoal leading-tight">
              Mon <span className="italic font-medium text-brand-sage font-serif">parcours</span>
            </h2>
          </div>

          <div className="prose prose-brand max-w-none font-sans text-brand-charcoal/75 leading-relaxed text-base space-y-4">
            <p>
              Je suis psychologue clinicienne depuis 2012, et j'accompagne les adultes, les couples, les familles, les aidants ainsi que les professionnels confrontés à des périodes de changement, de souffrance ou de questionnement.
            </p>
            <p>
              Pendant plus de dix ans, j'ai exercé en EHPAD, accueils de jour et résidences autonomie. Cette expérience m'a permis d'accompagner les personnes âgées face aux enjeux du vieillissement, de la perte d'autonomie, de la maladie ou du deuil, mais aussi leurs proches, souvent confrontés à des décisions difficiles et à une profonde charge émotionnelle. J'y ai également travaillé aux côtés des équipes soignantes, sensibles aux exigences et à l'intensité de leur métier.
            </p>
            <p>
              J'ai ensuite évolué plusieurs années dans les ressources humaines. Cette expérience m'a offert une compréhension concrète du monde du travail, des organisations, des relations professionnelles et des défis rencontrés par les salariés, les managers et les dirigeants. Elle nourrit aujourd'hui ma pratique auprès des personnes en souffrance au travail, en situation d'épuisement professionnel ou confrontées à des difficultés relationnelles dans leur environnement professionnel.
            </p>
            <p>
              Ces expériences ont renforcé ma conviction qu'une difficulté ne peut être comprise sans tenir compte du contexte dans lequel elle s'inscrit. C'est pourquoi je me suis spécialisée en thérapie systémique.
            </p>
            <p>
              Parce que chaque histoire est unique, je suis convaincue qu'il n'existe pas de réponse toute faite. Mon rôle est de vous aider à retrouver vos ressources, à porter un regard différent sur les difficultés rencontrées et à avancer vers un équilibre qui vous corresponde.
            </p>

            <blockquote className="border-l-4 border-brand-sage pl-4 italic text-brand-charcoal/80 my-8 bg-brand-beige/30 py-4 px-6 rounded-r-xl">
              <Quote className="w-5 h-5 text-brand-sage/50 mb-2" />
              « Ce qui compte, ce n'est pas ce qui nous arrive, mais ce que nous faisons de ce qui nous arrive. »
              <br/>
              <span className="not-italic font-semibold text-brand-charcoal text-sm block mt-2">— Jean-Paul Sartre</span>
            </blockquote>
          </div>
        </div>

        {/* Mon approche */}
        <div className="space-y-6 text-left border-t border-brand-sage/10 pt-16">
          <div className="space-y-3 text-center sm:text-left">
            <span className="font-sans text-xs font-semibold tracking-widest text-brand-terracotta uppercase">Mon approche</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-charcoal leading-tight">
              Comprendre pour <span className="italic font-medium text-brand-sage font-serif">avancer</span>
            </h2>
          </div>

          <div className="prose prose-brand max-w-none font-sans text-brand-charcoal/75 leading-relaxed text-base space-y-4">
            <p>
              Chaque personne possède une histoire qui lui est propre. Nos expériences, nos relations, notre environnement familial, social et professionnel façonnent notre manière de vivre les événements et d'y faire face.
            </p>
            <p>
              C'est pourquoi je m'appuie sur la psychologie clinique couplée avec l'approche systémique.
            </p>
            <p>
              La thérapie systémique considère que les difficultés ne peuvent pas toujours être comprises de manière isolée. Elles s'inscrivent souvent dans un contexte plus large :
            </p>
            <ul className="list-disc pl-5 space-y-1 marker:text-brand-sage">
              <li>une histoire familiale ;</li>
              <li>des relations construites au fil du temps ;</li>
              <li>un environnement professionnel ;</li>
              <li>des événements de vie ;</li>
              <li>des périodes de transition.</li>
            </ul>
            <p>
              Il ne s'agit pas de rechercher un responsable ou de désigner ce qui ne fonctionne pas, mais de mieux comprendre les interactions qui influencent votre situation aujourd'hui. Cette approche permet de prendre du recul, de porter un regard différent sur ce qui est vécu et de faire émerger de nouvelles possibilités de changement.
            </p>

            <h3 className="font-serif text-xl font-medium text-brand-charcoal pt-4">Chaque accompagnement est unique.</h3>
            <p>Selon votre demande, nous pourrons :</p>
            <ul className="list-disc pl-5 space-y-1 marker:text-brand-sage">
              <li>explorer ce qui vous amène à consulter ;</li>
              <li>identifier vos ressources ;</li>
              <li>comprendre les schémas relationnels qui se répètent ;</li>
              <li>réfléchir ensemble aux ajustements permettant de retrouver un équilibre plus satisfaisant.</li>
            </ul>
            <p>
              Je conçois la thérapie comme un espace de réflexion, de dialogue et de co-construction. Mon rôle n'est pas de vous dire quoi faire, mais de vous accompagner dans la compréhension de votre situation afin que vous puissiez mobiliser vos propres ressources et avancer vers des solutions qui aient du sens pour vous.
            </p>
            <p>
              Je crois profondément que les difficultés ne définissent pas une personne. Elles racontent souvent une histoire, un contexte, des relations et des épreuves traversées.
            </p>

            <div className="bg-brand-terracotta/5 p-6 rounded-xl mt-8 text-center sm:text-left">
              <p className="font-serif text-lg text-brand-terracotta font-medium italic">
                Parce qu'aucune personne ne se construit seule, aucune difficulté ne se comprend seule.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
