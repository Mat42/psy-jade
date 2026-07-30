import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { CABINET_INFO } from '../data';
import Footer from './Footer';
import Navbar from './Navbar';

export default function MentionsLegales() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Mentions Légales | Jade Bourloux Psychologue";
    return () => {
      document.title = "Jade Bourloux | Psychologue Clinicienne à Villefranche-sur-Saône";
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-beige text-brand-charcoal selection:bg-brand-sage/20 selection:text-brand-charcoal flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <a
            href="#/"
            className="inline-flex items-center gap-2 text-brand-sage hover:text-brand-teal transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </a>

          <div className="space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-brand-sage/10 shadow-sm text-left">
            <h1 className="font-serif text-3xl sm:text-4xl font-normal text-brand-teal mb-8">
              Mentions <span className="italic font-medium text-brand-sage font-serif">Légales</span>
            </h1>

            <div className="prose prose-brand max-w-none font-sans text-brand-charcoal/80 leading-relaxed space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-brand-charcoal mb-3">Éditeur du site et coordonnées</h2>
                <p>
                  <strong>Dénomination :</strong> Jade BOURLOUX (EI)<br />
                  <strong>Adresse :</strong> 46 rue Alexandre Richetta, 69400 Villefranche-sur-Saône<br />
                  <strong>Téléphone :</strong> 07 64 01 02 41<br />
                  <strong>Email :</strong> <a href="mailto:jade.bourloux@gmail.com" className="text-brand-sage hover:underline">jade.bourloux@gmail.com</a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-brand-charcoal mb-3">Informations d'entreprise</h2>
                <p>
                  <strong>SIREN :</strong> 107995037<br />
                  <strong>SIRET :</strong> {CABINET_INFO.siret.replace('SIRET: ', '')}<br />
                  <strong>Code APE :</strong> 86.90F (Activités de santé humaine non classées ailleurs)<br />
                  <strong>Enregistrement ARS (RPPS) :</strong> {CABINET_INFO.rpps.replace('N° RPPS: ', '')}
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-brand-charcoal mb-3">Hébergement</h2>
                <p>
                  Ce site est hébergé par GitHub Pages (GitHub Inc.).<br />
                  Adresse : 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
