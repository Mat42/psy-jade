import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Phone, MapPin, CheckCircle, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { getAnnexeBySlugOrId, ANNEXES_LIST } from '../data/annexes';
import { CABINET_INFO } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';

interface AnnexePageProps {
  id: string;
}

export default function AnnexePage({ id }: AnnexePageProps) {
  const data = getAnnexeBySlugOrId(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!data) return;

    // Update Page Title
    const originalTitle = document.title;
    document.title = data.seoTitle || `${data.title} | Jade Bourloux Psychologue Villefranche-sur-Saône`;

    // Update or create Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (data.seoDescription) {
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', data.seoDescription);
    }

    // Update or create Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    const originalCanonical = canonical ? canonical.getAttribute('href') : '';
    const pageCanonicalUrl = `https://www.jadebourloux.fr/${data.slug}/`;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageCanonicalUrl);

    // Update or create OpenGraph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', data.seoTitle || data.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', data.seoDescription || '');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', pageCanonicalUrl);

    // Schema.org Structured Data
    const scriptId = 'jsonld-annexe-page';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const schemaData = {
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
              "name": data.title,
              "item": pageCanonicalUrl
            }
          ]
        },
        {
          "@type": "MedicalWebPage",
          "@id": pageCanonicalUrl,
          "name": data.seoTitle || data.title,
          "description": data.seoDescription,
          "url": pageCanonicalUrl,
          "inLanguage": "fr-FR",
          "about": {
            "@type": "MedicalCondition",
            "name": data.title
          },
          "author": {
            "@type": "Person",
            "name": CABINET_INFO.name,
            "jobTitle": CABINET_INFO.title,
            "identifier": CABINET_INFO.rpps
          }
        }
      ]
    };

    script.textContent = JSON.stringify(schemaData);

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) metaDesc.setAttribute('content', originalDesc);
      if (canonical && originalCanonical) canonical.setAttribute('href', originalCanonical);
      const injectedScript = document.getElementById(scriptId);
      if (injectedScript) injectedScript.remove();
    };
  }, [id, data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-brand-beige flex flex-col justify-center items-center px-4 text-center">
        <h1 className="font-serif text-3xl text-brand-teal mb-4">Page non trouvée</h1>
        <p className="text-brand-charcoal/70 mb-8 font-sans">La page que vous recherchez n'est pas disponible ou a été déplacée.</p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-teal text-white rounded-xl font-medium text-sm hover:bg-[#2A756C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </a>
      </div>
    );
  }

  // Other related pages for internal linking
  const relatedPages = ANNEXES_LIST.filter(item => item.id !== data.id);

  return (
    <div className="min-h-screen bg-brand-beige text-brand-charcoal selection:bg-brand-sage/20 selection:text-brand-charcoal flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Breadcrumb & Back Link */}
          <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-brand-charcoal/60">
            <div className="flex items-center gap-2">
              <a href="/" className="hover:text-brand-teal transition-colors font-medium">Accueil</a>
              <span>/</span>
              <span className="text-brand-charcoal/40 font-normal">Spécialités</span>
              <span>/</span>
              <span className="text-brand-teal font-medium truncate max-w-[200px] sm:max-w-none">{data.title}</span>
            </div>

            <a 
              href="/" 
              className="inline-flex items-center gap-1.5 text-brand-sage hover:text-brand-teal transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour à l'accueil</span>
            </a>
          </nav>

          {/* Main Article Container */}
          <article className="bg-white rounded-3xl border border-brand-sage/15 p-6 sm:p-10 md:p-14 shadow-sm text-left space-y-10">
            
            {/* Header */}
            <header className="space-y-4 border-b border-brand-sage/10 pb-8">
              <div className="inline-block px-3 py-1 rounded-full bg-brand-terracotta/10 text-brand-terracotta text-xs font-semibold uppercase tracking-wider">
                Consultation &amp; Accompagnement
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-teal leading-tight tracking-tight">
                {data.title}
              </h1>
              {data.subtitle && (
                <p className="font-serif text-xl sm:text-2xl text-brand-charcoal/80 italic font-normal leading-relaxed">
                  {data.subtitle}
                </p>
              )}
            </header>

            {/* Structured Content */}
            <div className="prose prose-brand max-w-none font-sans text-base sm:text-lg text-brand-charcoal/85 leading-relaxed space-y-6">
              {data.content.split('\n\n').map((paragraph, idx) => {
                const trimmed = paragraph.trim();
                // Check if this paragraph is a list of bullet points
                if (trimmed.startsWith('•')) {
                  const bulletPoints = trimmed.split('\n').filter(line => line.trim().length > 0);
                  return (
                    <ul key={idx} className="my-6 space-y-3 bg-brand-beige/30 p-6 rounded-2xl border border-brand-sage/10">
                      {bulletPoints.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start gap-3 text-brand-charcoal/85 text-base">
                          <CheckCircle className="w-5 h-5 text-brand-sage shrink-0 mt-0.5" />
                          <span>{point.replace(/^•\s*/, '')}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Check if paragraph is a question or subheading (like "Pourquoi consulter ?")
                if (trimmed.length < 70 && (trimmed.endsWith('?') || trimmed.startsWith('Un accompagnement') || trimmed.startsWith('Et les parents'))) {
                  return (
                    <h2 key={idx} className="font-serif text-2xl font-medium text-brand-teal pt-4">
                      {trimmed}
                    </h2>
                  );
                }

                return (
                  <p key={idx} className="text-justify sm:text-left leading-relaxed">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Inspirational Quote */}
            {(data.quote || data.quoteAuthor) && (
              <blockquote className="my-10 p-6 sm:p-8 bg-brand-cream/60 rounded-2xl border-l-4 border-brand-sage text-left space-y-2">
                <p className="font-serif text-xl sm:text-2xl text-brand-teal italic leading-relaxed">
                  {data.quote}
                </p>
                {data.quoteAuthor && (
                  <footer className="font-sans text-xs text-brand-charcoal/60 uppercase tracking-widest font-semibold pt-2">
                    — {data.quoteAuthor}
                  </footer>
                )}
              </blockquote>
            )}

            {/* Direct Consultation Booking Call to Action */}
            <div className="mt-12 bg-gradient-to-br from-brand-teal/5 via-brand-sage/10 to-brand-cream/40 p-6 sm:p-8 rounded-2xl border border-brand-sage/20 space-y-6">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-normal text-brand-teal">
                  Prendre rendez-vous au cabinet ou en téléconsultation
                </h3>
                <p className="font-sans text-sm text-brand-charcoal/70 leading-relaxed">
                  Le cabinet de Jade Bourloux vous accueille au <strong>{CABINET_INFO.address}</strong> à Villefranche-sur-Saône. Les séances sont dispensées dans le strict respect du secret professionnel.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={CABINET_INFO.doctolibUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-teal hover:bg-[#2A756C] text-white rounded-xl font-medium text-sm transition-all shadow-sm hover:shadow"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Réserver sur Doctolib</span>
                </a>

                <a
                  href={CABINET_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-brand-sage/30 hover:border-brand-sage/60 text-brand-charcoal rounded-xl font-medium text-sm transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-brand-sage" />
                  <span>{CABINET_INFO.phone}</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-brand-charcoal/60 font-sans border-t border-brand-sage/15">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-sage" />
                  <span>Secret professionnel absolu</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-sage" />
                  <span>Consultations 45 à 60 min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-sage" />
                  <span>Villefranche-sur-Saône (69400)</span>
                </div>
              </div>
            </div>

          </article>

          {/* Related Pages & Discoveries (Mesh linking for SEO) */}
          <section className="space-y-6 pt-4 text-left">
            <div className="space-y-1">
              <span className="font-sans text-xs font-semibold tracking-wider text-brand-terracotta uppercase">
                Explorer
              </span>
              <h2 className="font-serif text-2xl text-brand-teal">
                Autres thématiques &amp; consultations
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedPages.slice(0, 6).map((rel) => (
                <a
                  key={rel.id}
                  href={`/${rel.slug}/`}
                  className="p-5 bg-white rounded-2xl border border-brand-sage/10 hover:border-brand-sage/30 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h3 className="font-serif text-base font-semibold text-brand-charcoal group-hover:text-brand-teal transition-colors">
                      {rel.title}
                    </h3>
                    <p className="font-sans text-xs text-brand-charcoal/60 line-clamp-2">
                      {rel.subtitle || rel.seoDescription}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs text-brand-sage font-medium group-hover:translate-x-1 transition-transform">
                    <span>Lire la page</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
