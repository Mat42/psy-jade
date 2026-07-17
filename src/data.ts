import { TherapyMethod, SpecialtyItem, FAQItem, TestimonialItem } from './types';

export const CABINET_INFO = {
  name: "Jade Bourloux",
  title: "Psychologue clinicienne – Thérapeute",
  rpps: "N° RPPS: 10112203913",
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
    title: "Accompagnement des adultes",
    subtitle: "Couples, familles et parentalité",
    iconName: "User",
    description: "Consulter un psychologue ne signifie pas que l'on est « faible » ou que l'on ne parvient plus à faire face. C'est avant tout s'accorder un temps pour comprendre ce qui se joue, mettre des mots sur ce qui est vécu et retrouver ses propres ressources.",
    symptoms: [],
    link: "#/annexe/3"
  },
  {
    id: "vieillissement",
    title: "Vieillissement, aidants et familles",
    subtitle: "Accompagnement et soutien",
    iconName: "Heart",
    description: "Vieillir, accompagner un proche ou faire face à une perte d'autonomie sont des étapes de vie qui peuvent susciter de nombreuses émotions et parfois mettre les relations familiales à l'épreuve.",
    symptoms: [
      "Perte d’autonomie et avancée en âge",
      "Maladies et pathologies neuro-évolutives",
      "Deuil et séparation",
      "Être aidant et soutenir un proche",
      "Entrée en établissement"
    ],
    link: "#/annexe/4"
  },
  {
    id: "travail",
    title: "Travail et vie professionnelle",
    subtitle: "Souffrance et transitions de carrière",
    iconName: "Briefcase",
    description: "Le travail peut parfois devenir une source de stress, de souffrance ou de perte de sens, avec des répercussions sur l’ensemble de la vie. Je vous accompagne pour retrouver vos ressources.",
    symptoms: [
      "Burn-out, risque de burn-out",
      "Perte de sens",
      "Stress, surcharge de travail",
      "Difficultés relationnelles, conflits professionnels",
      "Changements professionnels",
      "Sentiment de solitude lié à la fonction"
    ],
    link: "#/annexe/5"
  },
  {
    id: "entreprises",
    title: "Entreprises, établissements et équipes",
    subtitle: "Soutien et accompagnement sur mesure",
    iconName: "Building",
    description: "Parce que la qualité des relations humaines est un enjeu essentiel au sein des organisations, j'interviens auprès des entreprises, établissements médico-sociaux, associations et collectivités.",
    symptoms: [],
    link: "#/annexe/6"
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Pratique",
    question: "Quand consulter ?",
    answer: "Chaque démarche est unique. Qu'il s'agisse d'une difficulté ponctuelle ou d'un questionnement plus ancien, nous prendrons le temps de comprendre ensemble ce qui vous amène aujourd'hui."
  },
  {
    category: "Pratique",
    question: "Comment savoir si j'ai besoin de consulter ?",
    answer: "Il n'est pas nécessaire d'attendre d'aller très mal pour consulter un psychologue. Vous pouvez ressentir le besoin d'être accompagné(e) à la suite d'un événement particulier, d'une période de stress, d'un questionnement ou simplement parce que vous avez le sentiment de ne plus parvenir à prendre suffisamment de recul sur votre situation."
  },
  {
    category: "Pratique",
    question: "Combien de temps dure une consultation ?",
    answer: "Une consultation dure environ 45 à 60 minutes."
  },
  {
    category: "Pratique",
    question: "Combien de séances sont nécessaires ?",
    answer: "Le rythme et la durée de l'accompagnement sont toujours définis ensemble, en fonction de votre demande et de vos besoins."
  },
  {
    category: "Finances",
    question: "Les consultations sont-elles remboursées ?",
    answer: "Aujourd'hui de nombreuses mutuelles proposent un remboursement partiel ou total de plusieurs séances par an. Je vous invite à vous rapprocher de votre complémentaire santé."
  },
  {
    category: "Déontologie",
    question: "Les échanges sont-ils confidentiels ?",
    answer: "Oui. Comme tout psychologue, je suis tenue au secret professionnel. Les échanges ont lieu dans un cadre confidentiel, respectueux de votre vie privée."
  },
  {
    category: "Pratique",
    question: "Puis-je annuler un rendez-vous ?",
    answer: "En cas d'empêchement, je vous remercie de me prévenir au moins 48 heures à l'avance afin de pouvoir proposer ce créneau à une autre personne. Toute séance annulée moins de 48 heures avant le rendez-vous, sauf cas de force majeure, reste due."
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
