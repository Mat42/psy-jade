import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { annexes } from '../data/annexes';

interface AnnexePageProps {
  id: string;
}

export default function AnnexePage({ id }: AnnexePageProps) {
  const data: any = annexes[id as keyof typeof annexes];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) return null;

  const contentWithBreaks = data.content.split('\n\n').join('\n\n');

  return (
    <div className="min-h-screen bg-brand-beige text-brand-charcoal selection:bg-brand-sage/20 selection:text-brand-charcoal">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-20">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-brand-sage hover:text-brand-teal transition-colors mb-12 font-sans text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </a>

        <article className="space-y-12">
          <header className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-brand-teal leading-tight">
              {data.title}
            </h1>
            {data.subtitle && (
              <h2 className="font-serif text-2xl text-brand-charcoal/80 italic">
                {data.subtitle}
              </h2>
            )}
          </header>

          <div className="font-sans text-base sm:text-lg text-brand-charcoal/80 leading-relaxed space-y-6">
            {data.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="whitespace-pre-wrap">{paragraph}</p>
            ))}
          </div>

          {(data.quote || data.quoteAuthor) && (
            <blockquote className="mt-16 pt-8 border-t border-brand-sage/20">
              <p className="font-serif text-xl sm:text-2xl text-brand-teal italic text-center leading-relaxed">
                {data.quote}
              </p>
              <footer className="mt-4 text-center font-sans text-sm text-brand-charcoal/60 uppercase tracking-widest">
                — {data.quoteAuthor}
              </footer>
            </blockquote>
          )}
        </article>
      </div>
    </div>
  );
}
