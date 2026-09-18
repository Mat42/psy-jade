import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('dist/index.html does not exist. Please run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

const PAGES = [
  {
    slug: 'qui-suis-je',
    numericId: '1',
    title: 'Qui suis-je ?',
    subtitle: 'Psychologue clinicienne à Villefranche-sur-Saône',
    seoTitle: 'Qui suis-je ? | Jade Bourloux, Psychologue à Villefranche-sur-Saône',
    seoDescription: "Découvrez le parcours de Jade Bourloux, psychologue clinicienne diplômée en 2012, formée à l'approche systémique à Villefranche-sur-Saône.",
    paragraphs: [
      "Je suis psychologue clinicienne depuis 2012, et j'accompagne les adultes, les couples, les familles, les aidants ainsi que les professionnels confrontés à des périodes de changement, de souffrance ou de questionnement.",
      "Au cours de mon parcours, j'ai exercé au sein de différentes structures médico-sociales et hospitalières (service d'oncologie, EHPAD, accueils de jour, résidences autonomie). Cette expérience m'a permis d'accompagner les personnes face à des situations de vulnérabilité, aux enjeux du vieillissement, de la perte d'autonomie, de la maladie ou du deuil, ainsi que leurs proches, souvent confrontés à des décisions difficiles et à une profonde charge émotionnelle.",
      "J'ai également travaillé aux côtés des équipes soignantes, dont je connais les réalités du quotidien, les exigences et l'investissement humain. En parallèle, mon engagement bénévole auprès de professionnels de santé m'a permis de contribuer à la formation des équipes au tact, à la bienveillance et l’humanisme dans leurs soins.",
      "J'ai ensuite choisi d'élargir mon parcours en exerçant plusieurs années dans les ressources humaines. Cette expérience m'a offerte une compréhension concrète du monde du travail, des organisations, des relations professionnelles et des défis rencontrés par les salariés, les managers et les dirigeants. Elle nourrit aujourd'hui ma pratique auprès des personnes en souffrance au travail, en situation d'épuisement professionnel ou confrontées à des difficultés relationnelles dans leur environnement professionnel.",
      "Tout au long de mon parcours, j'ai travaillé en lien étroit avec les directions et les équipes afin d'accompagner les évolutions des organisations et de favoriser des environnements de travail où chacun puisse trouver sa place et s'épanouir.",
      "Ces expériences ont renforcé ma conviction qu’une difficulté ne peut être comprise sans tenir compte de son contexte, de l'histoire de la personne et des relations qui l'entourent. C'est cette vision qui m'a naturellement conduite à me spécialiser en thérapie systémique.",
      "Je suis attachée aux valeurs déontologiques de ma profession, à la confidentialité, au respect de chacun, et je suis convaincue qu'il n'existe pas de réponse toute faite. Mon rôle est de vous offrir un espace d'écoute et de réflexion pour mieux comprendre ce que vous traversez, mobiliser vos ressources et avancer vers un équilibre qui vous corresponde."
    ],
    quote: "« L'attention est la forme la plus rare et la plus pure de la générosité. »",
    quoteAuthor: "Simone Weil"
  },
  {
    slug: 'mon-approche',
    numericId: '2',
    title: 'Mon approche thérapeutique',
    subtitle: 'Psychologie clinique & Thérapie systémique',
    seoTitle: 'Mon Approche : Thérapie Systémique | Jade Bourloux Psychologue Villefranche',
    seoDescription: 'Comprendre pour avancer : une approche fondée sur la psychologie clinique et la thérapie systémique à Villefranche-sur-Saône.',
    paragraphs: [
      "Chaque personne possède une histoire qui lui est propre. Nos expériences, nos relations, notre environnement familial, social et professionnel façonnent notre manière de vivre les événements et d'y faire face.",
      "C'est pourquoi je m'appuie sur la psychologie clinique couplée avec l'approche systémique.",
      "La thérapie systémique considère que les difficultés ne peuvent pas toujours être comprises de manière isolée. Elles s'inscrivent souvent dans un contexte plus large : une histoire familiale, des relations qui se sont construites au fil du temps, un environnement professionnel, des événements de vie ou encore des périodes de transition.",
      "Il ne s'agit pas de rechercher un responsable ou de désigner ce qui ne fonctionne pas, mais de mieux comprendre les interactions qui influencent votre situation aujourd'hui.",
      "Cette approche permet de prendre du recul, de porter un regard différent sur ce qui est vécu et de faire émerger de nouvelles possibilités de changement.",
      "Chaque accompagnement est unique.",
      "Selon votre demande, nous pourrons explorer ce qui vous amène à consulter, identifier vos ressources, comprendre les schémas relationnels qui se répètent parfois malgré vous et réfléchir ensemble aux ajustements qui pourront vous permettre de retrouver un équilibre plus satisfaisant.",
      "Je conçois la thérapie comme un espace de réflexion, de dialogue et de co-construction. Mon rôle n'est pas de vous dire quoi faire, mais de vous accompagner dans la compréhension de votre situation afin que vous puissiez mobiliser vos propres ressources et avancer vers des solutions qui aient du sens pour vous.",
      "Je crois profondément que les difficultés ne définissent pas une personne. Elles racontent souvent une histoire, un contexte, des relations, des épreuves traversées. Prendre le temps de les comprendre, c'est déjà ouvrir la possibilité d'un changement."
    ],
    quote: "« Ce qui compte, ce n'est pas ce qui nous arrive, mais ce que nous faisons de ce qui nous arrive. »",
    quoteAuthor: "Jean-Paul Sartre"
  },
  {
    slug: 'accompagnement-adultes',
    numericId: '3',
    title: 'Accompagnement des adultes',
    subtitle: 'Individuel, couples, familles et parentalité',
    seoTitle: 'Psychologue Adultes & Couples à Villefranche-sur-Saône | Jade Bourloux',
    seoDescription: 'Consultation psychologique pour adultes et couples à Villefranche-sur-Saône : anxiété, séparation, deuil, deuil périnatal, difficultés relationnelles.',
    paragraphs: [
      "Au cours de notre vie, nous pouvons être confrontés à des événements qui viennent bousculer nos repères. Parfois, ces difficultés s'installent progressivement. D'autres fois, elles surviennent de manière plus soudaine et donnent le sentiment de ne plus savoir comment avancer.",
      "Je vous accueille dans un espace d'écoute, de réflexion et d'échange, où nous pourrons prendre le temps d'explorer ensemble votre situation, dans le respect de votre histoire et de vos besoins, à votre rythme et sans jugement.",
      "Je peux notamment vous accompagner lorsque vous traversez :",
      "• Une période de stress, d'anxiété ou un sentiment de mal-être\n• Une perte de confiance en vous ou des difficultés d'estime de soi\n• Une séparation, un deuil ou un changement de vie important\n• Des difficultés relationnelles, familiales ou de couple\n• Un épuisement lié à des responsabilités personnelles ou familiales\n• Une souffrance au travail ou une perte de sens\n• Une perte de grossesse (fausse couche), une interruption médicale de grossesse ou un deuil périnatal\n• Plus largement, toute période où vous ressentez le besoin d'être accompagné(e)",
      "Chaque parcours est unique. Il n'existe pas de réponse universelle ni de chemin tout tracé. Mon rôle est de vous aider à mieux comprendre ce que vous traversez, à mobiliser vos ressources et à retrouver un équilibre qui vous corresponde."
    ],
    quote: "« Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux. »",
    quoteAuthor: "Marcel Proust"
  },
  {
    slug: 'vieillissement-aidants-familles',
    numericId: '4',
    title: 'Vieillir, accompagner, traverser',
    subtitle: 'Personnes âgées, aidants et familles',
    seoTitle: 'Soutien aux Aidants & Personnes Âgées | Jade Bourloux Psychologue Villefranche',
    seoDescription: 'Accompagnement psychologique pour personnes âgées, aidants familiaux et familles confrontées à la perte d\'autonomie ou à la maladie à Villefranche-sur-Saône.',
    paragraphs: [
      "L'avancée en âge est une étape de vie qui s'accompagne parfois de nombreux changements : évolution de l'état de santé, perte d'autonomie, départ à la retraite, isolement, deuils successifs ou questionnements autour de la place que l'on occupe au sein de la famille.",
      "Ces changements concernent également les proches. Devenir aidant d'un parent, prendre des décisions importantes, accompagner une entrée en EHPAD ou faire face à une maladie neuro-évolutive peut être source d'épuisement, de culpabilité et de nombreuses émotions parfois difficiles à partager.",
      "Je propose un accompagnement destiné :",
      "• Aux personnes qui avancent en âge et souhaitent traverser cette période avec un espace d'écoute et de soutien\n• Aux aidants familiaux confrontés à la fatigue, aux doutes ou à la culpabilité\n• Aux personnes et familles qui vivent une entrée en établissement, une perte d'autonomie ou une maladie neuro-évolutive\n• Aux personnes confrontées au deuil ou aux nombreux changements que peut apporter l'avancée en âge",
      "Il n'existe pas de « bonne manière » de vivre ces étapes de vie. Chacun les traverse avec son histoire, ses émotions et ses ressources. Mon rôle est de vous offrir un espace où ces expériences peuvent être entendues, comprises et accompagnées avec respect et humanité."
    ],
    quote: "« Toute relation est le reflet de la relation que nous entretenons avec nous-mêmes. »",
    quoteAuthor: "Jacques Salomé"
  },
  {
    slug: 'souffrance-au-travail-burnout',
    numericId: '5',
    title: 'Travail, souffrance professionnelle et transitions de carrière',
    subtitle: 'Burn-out, perte de sens, surcharge et transitions professionnelles',
    seoTitle: 'Souffrance au Travail & Burn-out | Psychologue Villefranche-sur-Saône',
    seoDescription: 'Accompagnement en souffrance au travail, burn-out, harcèlement, stress chronique et réorientation de carrière à Villefranche-sur-Saône.',
    paragraphs: [
      "Le travail occupe une place importante dans nos vies. Il peut être source d'épanouissement, de reconnaissance et de satisfaction. Mais il peut également devenir un lieu de tensions, d'épuisement, de perte de sens ou de conflits.",
      "Lorsqu'une difficulté professionnelle s'installe, elle dépasse souvent le cadre du travail. Elle peut avoir des répercussions sur la vie familiale, le sommeil, la santé, la confiance en soi ou les relations avec les autres.",
      "Au cours de mon parcours, j'ai exercé plusieurs années dans les ressources humaines. Cette expérience me permet de connaître concrètement les réalités du monde du travail, les enjeux des organisations et les responsabilités qui peuvent peser sur les salariés, managers comme les dirigeants.",
      "Je vous accompagne notamment lorsque vous êtes confronté(e) à :",
      "• Un épuisement professionnel (burn-out) ou un risque de burn-out\n• Une perte de sens dans votre activité\n• Un stress chronique ou une surcharge de travail\n• Des conflits avec un collègue, un manager ou une équipe\n• Des difficultés relationnelles au sein de votre environnement professionnel\n• Une période de changement : évolution de poste, reconversion, prise de responsabilités ou retour au travail après un arrêt\n• Un sentiment de solitude lié à une fonction de management ou de direction",
      "Mon approche ne consiste pas uniquement à soulager la souffrance. Ensemble, nous chercherons à comprendre ce qui a conduit à cette situation, les ressources sur lesquelles vous pouvez vous appuyer et les changements qui pourront vous permettre de retrouver un équilibre durable."
    ],
    quote: "« Sans travail, toute vie pourrit. Mais sous un travail sans âme, la vie étouffe et meurt. »",
    quoteAuthor: "Albert Camus"
  },
  {
    slug: 'entreprises-etablissements-equipes',
    numericId: '6',
    title: 'Entreprises, établissements et équipes',
    subtitle: 'Groupes de parole, analyse des pratiques professionnelles et prévention des RPS',
    seoTitle: 'Intervention en Entreprise & Analyse des Pratiques | Jade Bourloux Villefranche',
    seoDescription: 'Interventions pour entreprises et établissements médico-sociaux : groupes de parole, analyse de pratiques professionnelles, prévention RPS dans le Rhône.',
    paragraphs: [
      "Les organisations sont avant tout composées d'hommes et de femmes. Derrière chaque équipe, il y a des relations, des responsabilités, des émotions, des contraintes et parfois des situations complexes qui peuvent fragiliser l'équilibre collectif.",
      "J'interviens auprès des structures qui souhaitent offrir à leurs équipes un espace de réflexion, de prévention et d'accompagnement face aux réalités du terrain.",
      "J'interviens notamment pour :",
      "• L'animation de groupes de parole\n• Les analyses de pratiques professionnelles\n• L'accompagnement des équipes confrontées à des situations complexes\n• La prévention de l'épuisement professionnel et des risques psychosociaux (RPS)\n• Le soutien des managers et des dirigeants\n• L'accompagnement des périodes de changement au sein des équipes\n• Des interventions autour des relations professionnelles, de la communication et de la coopération\n• Pour apaiser des contextes de crise professionnelle",
      "Mon expérience de près de dix ans en EHPAD me permet également de bien connaître les réalités du secteur médico-social, les enjeux auxquels sont confrontés les professionnels ainsi que les répercussions émotionnelles de leur engagement au quotidien.",
      "Chaque intervention est construite en fonction des besoins de la structure, de son contexte et de ses objectifs. Je privilégie une approche collaborative, respectueuse des réalités de terrain et des ressources déjà présentes au sein des équipes."
    ],
    quote: "« Se réunir est un début, rester ensemble est un progrès, travailler ensemble est la réussite. »",
    quoteAuthor: "Henry Ford"
  },
  {
    slug: 'accompagnement-adolescents',
    numericId: '7',
    title: 'Accompagnement des adolescents',
    subtitle: 'Un espace pour pouvoir parler… même quand on ne sait pas quoi dire.',
    seoTitle: 'Psychologue pour Adolescents à Villefranche-sur-Saône | Jade Bourloux',
    seoDescription: 'Consultation psychologique pour adolescents et accompagnement parental à Villefranche-sur-Saône : mal-être, anxiété, relations, confiance en soi.',
    paragraphs: [
      "L’adolescence est une période particulière, entre l’enfance et l’âge adulte. Le corps change, les relations évoluent, les attentes se multiplient et les questions sur soi, sur les autres et sur l’avenir prennent parfois beaucoup de place.",
      "Pour certains adolescents, cette période se traverse facilement. Pour d’autres, elle peut être source de doutes, de tensions ou de souffrance.",
      "Il n’est pas toujours simple de dire à ses parents que l’on ne va pas bien. Et parfois, on ne sait tout simplement pas comment expliquer ce que l’on ressent.",
      "Le cabinet peut alors devenir un espace différent : un endroit où l’adolescent peut déposer ce qu’il vit, sans avoir à protéger ses parents, à rassurer son entourage ou à donner une « bonne » réponse.",
      "Pourquoi consulter ?",
      "Une consultation peut être envisagée lorsque vous observez un changement chez votre adolescent ou lorsqu’il exprime lui-même le besoin d’être accompagné. Les motifs peuvent être très variés et concerner aussi bien la relation au corps, la relation aux autres, le rapport à l’alimentation, la confiance en soi ou encore la projection dans l’avenir.",
      "Un accompagnement à son rythme",
      "Je propose à l’adolescent un espace qui lui appartient, dans lequel il peut parler librement de ce qu’il souhaite, à son rythme. Mon rôle est de l’accompagner pour comprendre ce qu’il traverse, mettre des mots sur ce qui peut parfois être difficile à exprimer, identifier ses ressources et retrouver progressivement un équilibre qui lui corresponde.",
      "Et les parents dans tout ça ?",
      "Lorsqu’un adolescent consulte, les parents ont naturellement une place importante. Une première rencontre peut permettre de faire le point sur la situation et de comprendre ce qui amène à consulter. Selon les besoins, certains temps peuvent être proposés avec les parents, tandis que les séances individuelles permettent à l’adolescent de bénéficier d’un véritable espace de confidentialité."
    ]
  },
  {
    slug: 'mentions-legales',
    title: 'Mentions Légales',
    subtitle: 'Informations réglementaires et déontologiques',
    seoTitle: 'Mentions Légales | Jade Bourloux Psychologue Clinicienne Villefranche',
    seoDescription: 'Mentions légales, numéro RPPS, hébergement et politique de confidentialité du cabinet de psychologie Jade Bourloux à Villefranche-sur-Saône.',
    paragraphs: [
      "Cabinet de Psychologie Jade Bourloux (Entreprise Individuelle).",
      "Adresse du cabinet : 46 rue Alexandre Richetta, 69400 Villefranche-sur-Saône.",
      "Téléphone : 07 64 01 02 41 — Email : jade.bourloux@gmail.com",
      "Enregistrement ARS (RPPS) : 10112203913 — SIREN : 107995037 — SIRET : 10799503700010.",
      "Code APE : 86.90F (Activités de santé humaine non classées ailleurs). Membre d'une association agréée acceptant le règlement des honoraires par chèque ou virement.",
      "Hébergement du site internet : GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA)."
    ]
  }
];

// Helper to escape HTML characters
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

console.log('Generating pre-rendered static HTML pages for SEO...');

PAGES.forEach((page) => {
  const pageCanonicalUrl = `https://www.jadebourloux.fr/${page.slug}/`;

  // Pre-rendered HTML to put inside <div id="root">
  let preRenderedContent = `
    <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #F8F6F0; color: #2D3130; min-height: 100vh; padding: 2rem 1rem;">
      <div style="max-width: 800px; margin: 0 auto; background: #FFFFFF; border-radius: 1.5rem; padding: 2.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); border: 1px solid rgba(138, 154, 134, 0.2);">
        <nav aria-label="Fil d'ariane" style="margin-bottom: 2rem; font-size: 0.875rem; color: #6b7280;">
          <a href="/" style="color: #3B867D; text-decoration: none; font-weight: 500;">Accueil</a> &rsaquo;
          <span>${escapeHtml(page.title)}</span>
        </nav>
        
        <header style="border-bottom: 1px solid rgba(138, 154, 134, 0.2); padding-bottom: 1.5rem; margin-bottom: 2rem;">
          <h1 style="font-size: 2.25rem; font-weight: 400; color: #3B867D; margin-bottom: 0.75rem; line-height: 1.2;">${escapeHtml(page.title)}</h1>
          ${page.subtitle ? `<p style="font-size: 1.25rem; font-style: italic; color: #4b5563; margin: 0;">${escapeHtml(page.subtitle)}</p>` : ''}
        </header>

        <article style="line-height: 1.75; font-size: 1.05rem; color: #374151;">
  `;

  page.paragraphs.forEach((p) => {
    if (p.startsWith('•')) {
      const items = p.split('\n').filter(Boolean);
      preRenderedContent += `<ul style="background: rgba(248, 246, 240, 0.8); border-radius: 0.75rem; padding: 1.25rem 1.5rem 1.25rem 2.5rem; margin: 1.5rem 0;">`;
      items.forEach((item) => {
        preRenderedContent += `<li style="margin-bottom: 0.5rem;">${escapeHtml(item.replace(/^•\s*/, ''))}</li>`;
      });
      preRenderedContent += `</ul>`;
    } else if (p.endsWith('?') || p.startsWith('Un accompagnement') || p.startsWith('Et les parents')) {
      preRenderedContent += `<h2 style="font-size: 1.5rem; color: #3B867D; margin-top: 2rem; margin-bottom: 1rem;">${escapeHtml(p)}</h2>`;
    } else {
      preRenderedContent += `<p style="margin-bottom: 1.25rem;">${escapeHtml(p)}</p>`;
    }
  });

  if (page.quote) {
    preRenderedContent += `
      <blockquote style="margin: 2.5rem 0; padding: 1.5rem; background: rgba(239, 235, 228, 0.6); border-left: 4px solid #8A9A86; border-radius: 0.5rem;">
        <p style="font-size: 1.25rem; font-style: italic; color: #3B867D; margin: 0 0 0.5rem 0;">${escapeHtml(page.quote)}</p>
        ${page.quoteAuthor ? `<footer style="font-size: 0.875rem; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">— ${escapeHtml(page.quoteAuthor)}</footer>` : ''}
      </blockquote>
    `;
  }

  // Pre-rendered Consultation Booking Box
  preRenderedContent += `
        <div style="margin-top: 3rem; padding: 2rem; background: #F8F6F0; border-radius: 1rem; border: 1px solid rgba(138, 154, 134, 0.3);">
          <h3 style="font-size: 1.35rem; color: #3B867D; margin-top: 0; margin-bottom: 0.75rem;">Cabinet de Psychologie Jade Bourloux</h3>
          <p style="font-size: 0.95rem; color: #4b5563; margin-bottom: 1.25rem;">
            Consultations au cabinet au <strong>46 rue Alexandre Richetta, 69400 Villefranche-sur-Saône</strong> ou en téléconsultation.
          </p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="https://www.doctolib.fr/psychologue/villefranche-sur-saone/jade-bourloux" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #3B867D; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 500;">Prendre RDV sur Doctolib</a>
            <a href="tel:0764010241" style="display: inline-block; background: white; color: #2D3130; border: 1px solid #8A9A86; padding: 0.75rem 1.5rem; border-radius: 0.5rem; text-decoration: none; font-weight: 500;">07 64 01 02 41</a>
          </div>
        </div>
  `;

  // Internal linking mesh for SEO
  const otherPages = PAGES.filter((p) => p.slug !== page.slug && p.slug !== 'mentions-legales');
  preRenderedContent += `
        <section style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(138, 154, 134, 0.2);">
          <h3 style="font-size: 1.25rem; color: #3B867D; margin-bottom: 1rem;">Autres spécialités et consultations</h3>
          <ul style="list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.75rem;">
            ${otherPages.map((p) => `
              <li style="margin: 0;">
                <a href="/${p.slug}/" style="color: #374151; text-decoration: none; font-size: 0.95rem; display: block; padding: 0.5rem; border-radius: 0.5rem; background: rgba(248, 246, 240, 0.6);">
                  &rsaquo; <strong>${escapeHtml(p.title)}</strong>
                </a>
              </li>
            `).join('')}
          </ul>
        </section>

        </article>
      </div>
    </div>
  `;

  // Schema.org structured data JSON-LD
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://www.jadebourloux.fr/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": page.title,
            "item": pageCanonicalUrl
          }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "@id": pageCanonicalUrl,
        "name": page.seoTitle,
        "description": page.seoDescription,
        "url": pageCanonicalUrl,
        "inLanguage": "fr-FR",
        "author": {
          "@type": "Person",
          "name": "Jade Bourloux",
          "jobTitle": "Psychologue clinicienne",
          "identifier": "10112203913"
        }
      }
    ]
  };

  let pageHtml = templateHtml;

  // Replace Title
  pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.seoTitle)}</title>`);

  // Replace or inject Meta Description
  if (pageHtml.includes('<meta name="description"')) {
    pageHtml = pageHtml.replace(/<meta\s+name="description"\s+content="[^"]*"/i, `<meta name="description" content="${escapeHtml(page.seoDescription)}"`);
  } else {
    pageHtml = pageHtml.replace('</head>', `  <meta name="description" content="${escapeHtml(page.seoDescription)}">\n</head>`);
  }

  // Replace OpenGraph Title & Description
  pageHtml = pageHtml.replace(/<meta\s+property="og:title"\s+content="[^"]*"/i, `<meta property="og:title" content="${escapeHtml(page.seoTitle)}"`);
  pageHtml = pageHtml.replace(/<meta\s+property="og:description"\s+content="[^"]*"/i, `<meta property="og:description" content="${escapeHtml(page.seoDescription)}"`);

  // Replace Canonical and og:url cleanly without duplicate tags
  if (pageHtml.includes('<link rel="canonical"')) {
    pageHtml = pageHtml.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${pageCanonicalUrl}" />`);
  } else {
    pageHtml = pageHtml.replace('</head>', `  <link rel="canonical" href="${pageCanonicalUrl}" />\n</head>`);
  }

  if (pageHtml.includes('<meta property="og:url"')) {
    pageHtml = pageHtml.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${pageCanonicalUrl}" />`);
  } else {
    pageHtml = pageHtml.replace('</head>', `  <meta property="og:url" content="${pageCanonicalUrl}" />\n</head>`);
  }

  // Update Twitter Title & Description
  pageHtml = pageHtml.replace(/<meta\s+property="twitter:title"\s+content="[^"]*"/i, `<meta property="twitter:title" content="${escapeHtml(page.seoTitle)}"`);
  pageHtml = pageHtml.replace(/<meta\s+property="twitter:description"\s+content="[^"]*"/i, `<meta property="twitter:description" content="${escapeHtml(page.seoDescription)}"`);

  // Inject Schema.org JSON-LD tag
  const seoTags = `
    <script type="application/ld+json">
      ${JSON.stringify(schemaJsonLd, null, 2)}
    </script>
  `;
  pageHtml = pageHtml.replace('</head>', `${seoTags}\n</head>`);

  // Inject Pre-rendered content inside <div id="root">
  pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${preRenderedContent}</div>`);

  // Ensure relative asset paths work from subdirectories like /qui-suis-je/
  // Replace relative paths like href="./assets/" with href="/assets/" or ensure base is handled
  pageHtml = pageHtml.replace(/href="\.\/assets\//g, 'href="/assets/');
  pageHtml = pageHtml.replace(/src="\.\/assets\//g, 'src="/assets/');

  // Target directory
  const pageDir = path.join(DIST_DIR, page.slug);
  fs.mkdirSync(pageDir, { recursive: true });
  fs.writeFileSync(path.join(pageDir, 'index.html'), pageHtml, 'utf-8');
  console.log(`Generated: ${page.slug}/index.html`);

  // Backward-compatible redirect for numericId (e.g. /annexe/1 -> /qui-suis-je/)
  if (page.numericId) {
    const annexeDir = path.join(DIST_DIR, 'annexe', page.numericId);
    fs.mkdirSync(annexeDir, { recursive: true });
    const redirectHtml = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirection...</title>
    <meta http-equiv="refresh" content="0; url=/${page.slug}/">
    <link rel="canonical" href="${pageCanonicalUrl}">
  </head>
  <body>
    <p>Redirection vers <a href="/${page.slug}/">${escapeHtml(page.title)}</a>...</p>
  </body>
</html>`;
    fs.writeFileSync(path.join(annexeDir, 'index.html'), redirectHtml, 'utf-8');
  }
});

console.log('Static referenced pages generation completed successfully!');
