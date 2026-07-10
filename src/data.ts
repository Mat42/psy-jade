import { TherapyMethod, SpecialtyItem, FAQItem, TestimonialItem } from './types';

export const CABINET_INFO = {
  name: "Sarah Lambert",
  title: "Psychologue Clinicienne & Psychothérapeute",
  adeli: "ADELI: 699312345", // Official french register for health practitioners
  siret: "SIRET: 812 345 678 00012",
  phone: "04 74 12 34 56",
  phoneFormatted: "+33 4 74 12 34 56",
  email: "contact@sarahlambert-psychologue.fr",
  address: "142 Rue de la République, 69400 Villefranche-sur-Saône",
  shortAddress: "Villefranche-sur-Saône",
  hours: [
    { days: "Lundi - Vendredi", hours: "08:30 - 19:30" },
    { days: "Samedi", hours: "09:00 - 13:00" },
    { days: "Dimanche", hours: "Fermé" }
  ],
  doctolibUrl: "https://www.doctolib.fr", // Standard platform in France
  calendlyUrl: "https://calendly.com/sarahlambert-psychologue", // Lien pour la prise de rendez-vous en ligne
  lat: 45.9833,
  lng: 4.7167
};

export const THERAPY_METHODS: TherapyMethod[] = [
  {
    id: "tcc",
    title: "Thérapies Cognitives et Comportementales (TCC)",
    shortDesc: "Une approche active et structurée axée sur les difficultés actuelles et le changement de schémas de pensée.",
    description: "Les TCC s'intéressent au lien entre vos pensées, vos émotions et vos comportements. Ensemble, nous identifions les réactions automatiques ou les croyances limitantes qui génèrent de la souffrance pour les remplacer progressivement par des comportements plus adaptés et épanouissants.",
    benefits: [
      "Gestion des troubles anxieux et phobies",
      "Outils concrets applicables au quotidien",
      "Traitement des troubles obsessionnels (TOC)",
      "Accompagnement de la dépression"
    ]
  },
  {
    id: "emdr",
    title: "Intégration Neuro-Émotionnelle par l'EMDR",
    shortDesc: "Une thérapie scientifiquement reconnue pour libérer la charge émotionnelle associée aux traumatismes.",
    description: "L'EMDR (Eye Movement Desensitization and Reprocessing) permet de débloquer et de retraiter des souvenirs douloureux ou traumatiques que le cerveau n'a pas réussi à digérer. Par des stimulations bilatérales alternées (mouvements oculaires, tapotements), nous réactivons le processus d'auto-guérison cérébrale.",
    benefits: [
      "Soulagement du stress post-traumatique (PTSD)",
      "Traitement des blessures d'enfance ou chocs émotionnels",
      "Apaisement des deuils pathologiques",
      "Réduction des états d'angoisse aigus"
    ]
  },
  {
    id: "humaniste",
    title: "Thérapie Humaniste & Clinique",
    shortDesc: "Une écoute centrée sur la personne, favorisant l'exploration de soi et l'autonomie.",
    description: "Inspirée des travaux de Carl Rogers, cette approche considère que chaque personne possède en elle les ressources nécessaires pour s'épanouir. Mon rôle est de vous offrir un espace d'accueil inconditionnel, de sécurité et d'empathie profonde pour vous aider à clarifier votre vécu et faire vos propres choix.",
    benefits: [
      "Amélioration de l'estime de soi et confiance",
      "Épanouissement personnel et quête de sens",
      "Soutien face aux crises existentielles ou de vie",
      "Développement de l'auto-compassion"
    ]
  }
];

export const SPECIALTIES: SpecialtyItem[] = [
  {
    id: "adultes",
    title: "Accompagnement des Adultes",
    subtitle: "Retrouver l'équilibre face aux tempêtes de la vie",
    iconName: "User",
    description: "Chaque vie comporte son lot de difficultés. Que vous traversiez une période de stress intense, une transition douloureuse ou que vous ressentiez un mal-être diffus sans cause apparente, je vous accompagne pour dénouer ces blocages et retrouver de la clarté.",
    symptoms: [
      "Troubles anxieux, crises de panique, stress chronique",
      "Épuisement professionnel (Burn-out)",
      "Dépendances affectives, ruptures douloureuses",
      "Deuil, perte, sentiment de solitude",
      "Baisse de confiance en soi et sentiment d'illégitimité"
    ]
  },
  {
    id: "adolescents",
    title: "Soutien aux Adolescents",
    subtitle: "Traverser la transition vers l'âge adulte en sécurité",
    iconName: "Sparkles",
    description: "L'adolescence est une période de mutations physiques, émotionnelles et sociales majeures. C'est parfois le moment de replis sur soi, d'incompréhensions ou de mal-être scolaire. J'offre aux adolescents un espace neutre, confidentiel et dénué de tout jugement.",
    symptoms: [
      "Harcèlement scolaire, phobie scolaire, décrochage",
      "Gestion difficile des émotions et impulsivité",
      "Conflits familiaux et rupture de communication",
      "Troubles du comportement alimentaire (TCA) débutants",
      "Questions identitaires et mal-être corporel"
    ]
  },
  {
    id: "couples",
    title: "Thérapie de Couple",
    subtitle: "Rétablir le dialogue et réinventer le lien",
    iconName: "Heart",
    description: "Le couple traverse des cycles et des épreuves : arrivée d'un enfant, routine, conflits répétés, infidélité. La thérapie de couple n'est pas un tribunal, mais un espace sécurisé où chacun peut exprimer ses besoins et blessures, pour comprendre la dynamique relationnelle et prendre des décisions constructives.",
    symptoms: [
      "Communication rompue ou devenue agressive",
      "Baisse du désir et sentiment de s'être éloignés",
      "Accompagnement à la parentalité (crise du post-partum)",
      "Difficultés à surmonter une trahison ou un deuil",
      "Aide à la séparation sereine si nécessaire"
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    category: "Pratique",
    question: "Comment se déroule la première consultation ?",
    answer: "La première séance est un temps d'accueil et d'échange mutuel. C'est l'occasion pour vous d'exposer ce qui vous amène, à votre rythme, et d'exprimer vos attentes. De mon côté, cela me permet de comprendre votre demande et de vous proposer un cadre d'accompagnement adapté (rythme, type de thérapie). C'est également le moment idéal pour poser toutes vos questions sur ma pratique."
  },
  {
    category: "Pratique",
    question: "Quelle est la durée et le rythme des séances ?",
    answer: "Une séance individuelle dure généralement 55 à 60 minutes. Pour la thérapie de couple, le format est plus long (environ 1h15). Le rythme est défini ensemble, selon vos besoins et votre budget. Au début, un rythme d'une séance toutes les deux semaines est souvent préconisé pour installer une dynamique thérapeutique, puis les séances s'espacent progressivement."
  },
  {
    category: "Finances",
    question: "Les consultations sont-elles remboursées par la Sécurité Sociale ?",
    answer: "Actuellement, n'étant pas conventionnée dans le dispositif 'Mon Soutien Psy', mes consultations ne sont pas remboursées par la Sécurité Sociale. En revanche, de très nombreuses mutuelles complémentaires remboursent tout ou partie des consultations de psychologues sous forme de forfait annuel ou de montant par séance. Je vous délivre une facture acquittée à la fin de chaque séance pour vos démarches."
  },
  {
    category: "Pratique",
    question: "Quelle est votre politique d'annulation ?",
    answer: "Votre créneau de consultation vous est entièrement réservé. Si vous devez annuler ou déplacer un rendez-vous, je vous demande de me prévenir au moins 48 heures à l'avance. Tout rendez-vous non décommandé dans ce délai sera considéré comme dû, par respect pour le travail clinique et pour les personnes en attente de rendez-vous rapide."
  },
  {
    category: "Déontologie",
    question: "Qu'est-ce que le secret professionnel ?",
    answer: "Le psychologue clinicien est soumis au Code de Déontologie des Psychologues de France. Le secret professionnel est absolu et garantit la confidentialité totale de nos échanges. Rien de ce que vous me confiez n'est transmis à un tiers (famille, conjoint, employeur, médecin), sauf en cas d'obligation légale d'assistance à personne en danger."
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote: "J'ai consulté Mme Lambert suite à un burn-out professionnel. Son écoute extrêmement bienveillante, dépourvue de tout jugement, et ses conseils en TCC m'ont permis de reconstruire mes limites et de reprendre confiance en mes capacités.",
    author: "Marc D.",
    type: "Adulte - Accompagnement Burn-out",
    date: "Mars 2026"
  },
  {
    id: "2",
    quote: "Notre fille de 15 ans était en grand repli sur elle-même avec de fortes angoisses scolaires. Grâce à Sarah, elle a trouvé un espace de liberté pour parler de ses doutes. Nous avons vu notre fille revivre et s'apaiser au fil des mois.",
    author: "Karine et Thomas, parents de Léa",
    type: "Parents d'Adolescent",
    date: "Mai 2026"
  },
  {
    id: "3",
    quote: "La thérapie de couple nous a sauvés de la séparation. Nous ne savions plus nous écouter sans crier. Sarah Lambert a agi comme un médiateur neutre et doux, nous aidant à comprendre nos blessures réciproques.",
    author: "Amandine & Julien",
    type: "Thérapie de Couple",
    date: "Janvier 2026"
  }
];

export const RATES = [
  {
    title: "Consultation Individuelle",
    target: "Adultes & Adolescents",
    price: "60 €",
    duration: "55 - 60 min",
    details: "En cabinet ou en téléconsultation (vidéo sécurisée). Suivi régulier ou soutien ponctuel."
  },
  {
    title: "Thérapie de Couple",
    target: "Couples",
    price: "80 €",
    duration: "1h15",
    details: "Présence indispensable des deux partenaires. Espace de médiation et de reconstruction du dialogue."
  },
  {
    title: "Bilan Psychologique initial",
    target: "Première rencontre",
    price: "60 €",
    duration: "60 min",
    details: "Évaluation de la situation, ciblage des objectifs thérapeutiques, définition du cadre de suivi."
  }
];
