import { CheckCircle2, Award, BookOpen, Heart } from 'lucide-react';
import { CABINET_INFO } from '../data';
import psychologuePortraitImg from '../assets/images/psychologue_portrait_1783681154743.jpg';

export default function About() {
  const qualities = [
    {
      title: "Écoute inconditionnelle & active",
      desc: "Un accueil sécurisant, sans jugement ni attente. Chaque mot, chaque silence est respecté dans sa singularité."
    },
    {
      title: "Déontologie & Confidentialité",
      desc: "Le secret professionnel est absolu. Je me réfère scrupuleusement au Code de Déontologie des Psychologues."
    },
    {
      title: "Pratique collaborative active",
      desc: "Nous formons une équipe. Je ne suis pas un miroir silencieux : nous échangeons, expérimentons et trouvons des clés ensemble."
    }
  ];

  const credentials = [
    { year: "2018", text: "Master II de Psychologie Clinique et Psychopathologie — Université Lumière Lyon 2" },
    { year: "2019", text: "Certification de Praticienne EMDR France / Europe — Institut français d'EMDR" },
    { year: "2021", text: "Formation complémentaire en TCC et thérapie des schémas — Association Française de TCC (AFTCC)" },
    { year: "2023", text: "Spécialisation en prise en charge de l'épuisement professionnel & souffrance au travail — Lyon" }
  ];

  return (
    <section 
      id="approche" 
      className="py-20 sm:py-24 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-cream/40 rounded-full blur-2xl -z-10 pointer-events-none" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-brand-beige border-8 border-brand-beige aspect-[3/4]">
              <img
                src={psychologuePortraitImg}
                alt="Sarah Lambert, Psychologue à Villefranche"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-brand-charcoal/90 backdrop-blur-sm p-4 rounded-xl text-white border border-brand-charcoal/20">
                <p className="font-serif text-base font-medium">Sarah Lambert</p>
                <p className="font-sans text-xs text-brand-beige/70 mt-0.5">Enregistrée sous le N° ADELI {CABINET_INFO.adeli.replace('ADELI: ', '')}</p>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 text-left">
            <div className="space-y-3">
              <span className="font-sans text-xs font-semibold tracking-widest text-brand-terracotta uppercase">Qui suis-je ?</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-charcoal leading-tight">
                Ma pratique, entre écoute clinique et <span className="italic font-medium text-brand-sage font-serif">méthodes actives</span>
              </h2>
            </div>

            <p className="font-sans text-brand-charcoal/75 leading-relaxed text-base">
              Je m'appelle <strong>Sarah Lambert</strong>. Installée en tant que psychologue clinicienne et psychothérapeute à {CABINET_INFO.shortAddress}, j'ai à cœur de proposer une psychologie humaine, vivante et résolument tournée vers le mieux-être concret.
            </p>

            <p className="font-sans text-brand-charcoal/75 leading-relaxed text-base">
              Mon parcours m'a appris qu'il n'existe pas une méthode unique convenant à tous. C'est pourquoi ma pratique est <strong>intégrative</strong> : j'associe la finesse de l'écoute analytique traditionnelle aux outils pragmatiques des TCC et à la libération émotionnelle par l'EMDR.
            </p>

            {/* Core Values / Qualities */}
            <div className="space-y-4 pt-2">
              <h3 className="font-serif text-lg font-medium text-brand-charcoal border-b border-brand-sage/10 pb-2">Ma charte thérapeutique :</h3>
              <div className="space-y-4">
                {qualities.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="mt-0.5 text-brand-sage">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-brand-charcoal">{item.title}</h4>
                      <p className="font-sans text-xs text-brand-charcoal/60 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Training Accordion/List */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-2 text-brand-terracotta font-serif text-lg font-medium">
                <BookOpen className="w-5 h-5" />
                <h3>Titres et Formations</h3>
              </div>
              <div className="border-l-2 border-brand-cream pl-4 space-y-3">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="relative pl-2 text-left">
                    <div className="absolute -left-[23px] top-1.5 w-2 h-2 rounded-full bg-brand-sage border border-white" />
                    <span className="font-mono text-xs font-semibold text-brand-sage tracking-wider">{cred.year}</span>
                    <p className="font-sans text-xs text-brand-charcoal/75 mt-0.5">{cred.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
