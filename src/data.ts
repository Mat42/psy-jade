import { TherapyMethod, SpecialtyItem, FAQItem, TestimonialItem } from './types';

export const CABINET_INFO = {
  name: "Jade Bourloux",
  title: "Psychologue – Thérapeute systémicienne",
  adeli: "ADELI: 699312345", // Official french register for health practitioners
  siret: "SIRET: 812 345 678 00012",
  phone: "04 74 12 34 56",
  phoneFormatted: "+33 4 74 12 34 56",
  email: "contact@jadebourloux-psychologue.fr",
  address: "46 rue Alexandre Richetta, 69400 Villefranche-sur-Saône",
  shortAddress: "Villefranche-sur-Saône",
  hours: [
    { days: "Lundi - Vendredi", hours: "08:30 - 19:30" },
    { days: "Samedi", hours: "09:00 - 13:00" },
    { days: "Dimanche", hours: "Fermé" }
  ],
  doctolibUrl: "https://www.doctolib.fr", // Standard platform in France
  lat: 45.9833,
  lng: 4.7167
};

export const THERAPY_METHODS: TherapyMethod[] = [
  {
    id: "systemique",
    title: "Thérapie Systémique",
    shortDesc: "Prendre en compte la personne dans son histoire, ses relations et son environnement.",
    description: "La thérapie systémique considère que les difficultés ne peuvent pas toujours être comprises de manière isolée. Elles s'inscrivent souvent dans un contexte plus large : une histoire familiale, des relations construites au fil du temps, un environnement professionnel ou des événements de vie. Il ne s'agit pas de rechercher un responsable, mais de mieux comprendre les interactions qui influencent votre situation aujourd'hui pour faire émerger de nouvelles possibilités de changement.",
    benefits: [
      "Comprendre les schémas relationnels qui se répètent",
      "Identifier vos ressources personnelles",
      "Prendre du recul sur les événements vécus",
      "Retrouver un équilibre plus satisfaisant"
    ]
  },
  {
    id: "clinique",
    title: "Psychologie Clinique",
    shortDesc: "Une approche d'écoute et de soutien centrée sur la singularité de chaque personne.",
    description: "Je conçois la thérapie comme un espace de réflexion, de dialogue et de co-construction. Mon rôle n'est pas de vous dire quoi faire, mais de vous accompagner dans la compréhension de votre situation afin que vous puissiez mobiliser vos propres ressources et avancer vers des solutions qui aient du sens pour vous.",
    benefits: [
      "Mettre des mots sur ce qui est vécu",
      "Retrouver ses propres ressources",
      "Espace de dialogue sans jugement",
      "Accompagnement sur mesure"
    ]
  }
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: "adultes",
    title: "Accompagnement des Adultes",
    subtitle: "Retrouver vos ressources face aux événements de la vie",
    iconName: "User",
    description: "Consulter un psychologue ne signifie pas que l'on est « faible » ou que l'on ne parvient plus à faire face. C'est avant tout s'accorder un temps pour comprendre ce qui se joue, mettre des mots sur ce qui est vécu et retrouver ses propres ressources.",
    symptoms: [
      "Stress, anxiété ou mal-être",
      "Perte de confiance en soi",
      "Séparation, deuil ou changement de vie",
      "Difficultés relationnelles, familiales ou de couple",
      "Épuisement lié aux responsabilités",
      "Fausse couche, IMG ou deuil périnatal"
    ]
  },
  {
    id: "vieillissement",
    title: "Vieillir, accompagner, traverser",
    subtitle: "Accompagnement face aux enjeux du vieillissement",
    iconName: "Heart",
    description: "L'avancée en âge s'accompagne parfois de nombreux changements : évolution de l'état de santé, perte d'autonomie, départ à la retraite, isolement, deuils successifs. Chacun les traverse avec son histoire, ses émotions et ses ressources.",
    symptoms: [
      "Personnes avançant en âge",
      "Aidants familiaux",
      "Familles confrontées à une perte d'autonomie",
      "Accompagnement face à la maladie neuro-évolutive",
      "Personnes vivant un deuil"
    ]
  },
  {
    id: "travail",
    title: "Travail et Souffrance Professionnelle",
    subtitle: "Retrouver un équilibre durable",
    iconName: "Briefcase",
    description: "Le travail peut être source d'épanouissement, de reconnaissance, mais aussi de souffrance. Ensemble, nous chercherons à comprendre ce qui a conduit à cette situation et les changements permettant de retrouver un équilibre durable.",
    symptoms: [
      "Burn-out ou risque de burn-out",
      "Perte de sens, surcharge de travail",
      "Stress chronique, conflits professionnels",
      "Difficultés relationnelles",
      "Reconversion professionnelle",
      "Retour au travail après un arrêt"
    ]
  },
  {
    id: "entreprises",
    title: "Entreprises et Équipes",
    subtitle: "Soutien et accompagnement sur mesure",
    iconName: "Building",
    description: "Les organisations sont avant tout composées d'hommes et de femmes. J'interviens au sein des structures (entreprises, établissements médico-sociaux) pour proposer un accompagnement adapté aux réalités du terrain.",
    symptoms: [
      "Groupes de parole",
      "Analyse de pratiques professionnelles",
      "Accompagnement des équipes",
      "Prévention des risques psychosociaux (RPS)",
      "Soutien des managers et accompagnement du changement",
      "Gestion des crises institutionnelles"
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Pratique",
    question: "Comment savoir si j'ai besoin de consulter ?",
    answer: "Il n'est pas nécessaire d'attendre d'aller très mal. Le simple fait de ressentir le besoin d'être écouté, de prendre du recul ou de mieux comprendre ce que vous traversez est déjà une raison suffisante."
  },
  {
    category: "Pratique",
    question: "Combien de temps dure une consultation ?",
    answer: "Une consultation dure de 45 à 60 minutes."
  },
  {
    category: "Pratique",
    question: "Combien de séances sont nécessaires ?",
    answer: "Le nombre de séances est défini ensemble selon votre demande et vos besoins."
  },
  {
    category: "Finances",
    question: "Les consultations sont-elles remboursées ?",
    answer: "Certaines mutuelles proposent une prise en charge partielle ou totale."
  },
  {
    category: "Déontologie",
    question: "Les échanges sont-ils confidentiels ?",
    answer: "Oui. Le secret professionnel s'applique."
  },
  {
    category: "Pratique",
    question: "Puis-je annuler un rendez-vous ?",
    answer: "Merci de prévenir au moins 48 heures à l'avance. Toute séance annulée moins de 48 heures avant le rendez-vous (hors cas de force majeure) reste due."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote: "J'ai consulté suite à un épuisement professionnel. L'approche systémique m'a permis de comprendre mon rapport au travail et de retrouver un équilibre.",
    author: "Marc D.",
    type: "Adulte - Accompagnement Burn-out",
    date: "Mars 2026"
  },
  {
    id: "2",
    quote: "Notre thérapie de couple nous a permis de rétablir le dialogue. Jade a su nous accompagner avec beaucoup de neutralité et de bienveillance pour comprendre nos schémas relationnels.",
    author: "Amandine & Julien",
    type: "Thérapie de Couple",
    date: "Janvier 2026"
  }
];

export const RATES = [
  {
    title: "Consultation Individuelle",
    target: "Adultes",
    price: "60 €",
    duration: "45 - 60 min",
    details: "En cabinet ou en téléconsultation."
  },
  {
    title: "Consultation de Couple",
    target: "Couples",
    price: "80 €",
    duration: "45 - 60 min",
    details: "En cabinet ou en téléconsultation."
  },
  {
    title: "Intervention professionnelle",
    target: "Entreprises, établissements et équipes",
    price: "Sur devis",
    duration: "Variable",
    details: "Groupes de parole, analyse de pratiques, accompagnement au changement."
  }
];
