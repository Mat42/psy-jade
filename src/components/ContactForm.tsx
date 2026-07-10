import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { CABINET_INFO } from '../data';

interface ContactFormProps {
  onAddMessage?: (msg: { name: string; email: string; subject: string; message: string }) => void;
}

type FormTab = 'calendly' | 'message';

export default function ContactForm({ onAddMessage }: ContactFormProps) {
  const [activeTab, setActiveTab] = useState<FormTab>('calendly');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Message Form State
  const [messageForm, setMessageForm] = useState({
    name: '',
    email: '',
    subject: 'Renseignement général',
    message: ''
  });

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMessageForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateMessage = () => {
    const errs: Record<string, string> = {};
    if (!messageForm.name.trim()) errs.name = "Le nom est obligatoire";
    if (!messageForm.email.trim()) {
      errs.email = "L'adresse email est obligatoire";
    } else if (!/\S+@\S+\.\S+/.test(messageForm.email)) {
      errs.email = "L'adresse email n'est pas valide";
    }
    if (!messageForm.message.trim()) errs.message = "Le message ne peut pas être vide";
    return errs;
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateMessage();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (onAddMessage) {
      onAddMessage({
        name: messageForm.name,
        email: messageForm.email,
        subject: messageForm.subject,
        message: messageForm.message
      });
    }

    setIsSubmitted(true);
    setErrors({});
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setMessageForm({
      name: '',
      email: '',
      subject: 'Renseignement général',
      message: ''
    });
  };

  // Calendly URL with beautiful custom color parameters that match Sarah's brand palette
  // Background: #fbfbf9 -> fbfbf9
  // Text: #2d332f -> 2d332f
  // Primary (Buttons): #5f7464 -> 5f7464
  const calendlyEmbedUrl = `${CABINET_INFO.calendlyUrl}?background_color=fbfbf9&text_color=2d332f&primary_color=5f7464&hide_landing_page_details=1&hide_gdpr_banner=1`;

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-24 bg-white relative"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-terracotta/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16 text-center">
          <span className="font-sans text-xs font-semibold tracking-widest text-brand-terracotta uppercase">Contact &amp; Cabinet</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-brand-charcoal">
            Prendre contact ou <span className="italic font-medium text-brand-sage font-serif">planifier un rendez-vous</span>
          </h2>
          <p className="font-sans text-brand-charcoal/65 text-sm sm:text-base leading-relaxed">
            Prenez rendez-vous directement ci-dessous via mon agenda Calendly sécurisé ou envoyez-moi un message pour toute demande d'informations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: CABINET COORDINATES & INFOS */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="bg-brand-beige/50 p-6 sm:p-8 rounded-2xl border border-brand-sage/10 space-y-6">
              <h3 className="font-serif text-lg font-semibold text-brand-charcoal">Coordonnées du Cabinet</h3>
              
              {/* Phone info */}
              <div className="flex gap-4">
                <div className="p-3 bg-white rounded-xl text-brand-sage shadow-sm border border-brand-sage/10 flex-shrink-0 self-start">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-brand-charcoal uppercase tracking-wider">Téléphone</h4>
                  <a href={`tel:${CABINET_INFO.phone}`} className="font-sans text-base font-semibold text-brand-sage hover:underline mt-1 block">
                    {CABINET_INFO.phone}
                  </a>
                  <p className="font-sans text-[11px] text-brand-charcoal/50 mt-0.5">Ligne directe, du lundi au samedi</p>
                </div>
              </div>

              {/* Email info */}
              <div className="flex gap-4">
                <div className="p-3 bg-white rounded-xl text-brand-sage shadow-sm border border-brand-sage/10 flex-shrink-0 self-start">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-brand-charcoal uppercase tracking-wider">Adresse Email</h4>
                  <a href={`mailto:${CABINET_INFO.email}`} className="font-sans text-sm font-semibold text-brand-charcoal hover:text-brand-sage mt-1 block break-all">
                    {CABINET_INFO.email}
                  </a>
                  <p className="font-sans text-[11px] text-brand-charcoal/50 mt-0.5">Réponse confidentielle par messagerie sécurisée</p>
                </div>
              </div>

              {/* Address info */}
              <div className="flex gap-4">
                <div className="p-3 bg-white rounded-xl text-brand-sage shadow-sm border border-brand-sage/10 flex-shrink-0 self-start">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-bold text-brand-charcoal uppercase tracking-wider">Adresse du Cabinet</h4>
                  <p className="font-sans text-sm text-brand-charcoal leading-relaxed font-semibold mt-1">
                    {CABINET_INFO.address}
                  </p>
                  <p className="font-sans text-[11px] text-brand-charcoal/50 mt-1">
                    📍 1er étage avec ascenseur. Accès handicapé. Parking de la République à 50 mètres.
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white border border-brand-sage/10 p-6 sm:p-8 rounded-2xl text-left space-y-4">
              <h3 className="font-serif text-base font-semibold text-brand-charcoal border-b border-brand-sage/10 pb-2">Horaires d'ouverture :</h3>
              <div className="space-y-2.5">
                {CABINET_INFO.hours.map((h, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="font-sans text-brand-charcoal/70 font-medium">{h.days}</span>
                    <span className="font-mono text-brand-charcoal font-semibold">{h.hours}</span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-[11px] text-brand-charcoal/50 italic mt-4 pt-2 border-t border-brand-beige">
                * Les consultations ont lieu uniquement sur rendez-vous préalablement programmé.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT INTERACTIVE FORM (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-brand-beige/25 border border-brand-sage/10 rounded-2xl p-6 sm:p-8 relative">
            
            {/* Form Navigation Tabs */}
            <div className="flex border-b border-brand-sage/10 pb-4 justify-center sm:justify-start mb-6">
              <button
                onClick={() => { setActiveTab('calendly'); setErrors({}); setIsSubmitted(false); }}
                className={`pb-2 px-4 text-xs sm:text-sm font-semibold transition-all border-b-2 -mb-[18px] flex items-center gap-2 ${
                  activeTab === 'calendly'
                    ? 'border-brand-sage text-brand-charcoal'
                    : 'border-transparent text-brand-charcoal/50 hover:text-brand-charcoal/85'
                }`}
              >
                <Calendar className="w-4 h-4 text-brand-sage" />
                <span>Prendre Rendez-vous en Ligne</span>
              </button>
              <button
                onClick={() => { setActiveTab('message'); setErrors({}); setIsSubmitted(false); }}
                className={`pb-2 px-4 text-xs sm:text-sm font-semibold transition-all border-b-2 -mb-[18px] flex items-center gap-2 ${
                  activeTab === 'message'
                    ? 'border-brand-sage text-brand-charcoal'
                    : 'border-transparent text-brand-charcoal/50 hover:text-brand-charcoal/85'
                }`}
              >
                <Mail className="w-4 h-4 text-brand-sage" />
                <span>Message Simple</span>
              </button>
            </div>

            {/* TAB 1: CALENDLY EMBED */}
            {activeTab === 'calendly' && (
              <div className="space-y-4 animate-fadeIn text-left">
                <div className="bg-brand-sage/5 border border-brand-sage/10 rounded-xl p-4 text-xs text-brand-charcoal/80 leading-relaxed mb-4">
                  Pour votre confort, l'agenda de consultation est directement synchronisé. Sélectionnez un créneau de votre choix (En Cabinet ou en Téléconsultation) pour réserver instantanément votre séance.
                </div>
                
                {/* Calendly Inline Widget Iframe */}
                <div className="w-full bg-brand-beige rounded-xl overflow-hidden border border-brand-sage/10 relative h-[650px] shadow-inner">
                  <iframe
                    src={calendlyEmbedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Calendly Sarah Lambert"
                    className="w-full h-full"
                  />
                </div>

                <div className="flex justify-center pt-2">
                  <a
                    href={CABINET_INFO.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-sage hover:text-brand-olive font-sans text-xs font-semibold transition-colors py-2 px-4 border border-brand-sage/20 rounded-full bg-white hover:bg-brand-sage/5 shadow-sm"
                  >
                    <span>Ouvrir dans une nouvelle fenêtre</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* TAB 2: GENERAL CONTACT MESSAGE FORM */}
            {activeTab === 'message' && (
              <div className="animate-fadeIn">
                {isSubmitted ? (
                  <div className="py-12 px-4 text-center space-y-6 animate-fadeIn">
                    <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-brand-charcoal">
                        Message Envoyé avec Succès !
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-brand-charcoal/75 max-w-lg mx-auto leading-relaxed">
                        Merci de votre intérêt. Votre message a bien été envoyé. Sarah Lambert en prendra connaissance personnellement et vous fera un retour par email à l'adresse <strong className="text-brand-sage">{messageForm.email}</strong> sous 24h à 48h.
                      </p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-brand-sage hover:bg-brand-olive text-brand-beige rounded-full text-xs font-semibold transition-all shadow-sm"
                    >
                      Écrire un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleMessageSubmit} className="space-y-5 text-left">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="font-sans text-[11px] font-bold text-brand-charcoal uppercase tracking-wider block">
                        Votre nom complet <span className="text-brand-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={messageForm.name}
                        onChange={handleMessageChange}
                        placeholder="Ex: Alice Martin"
                        className={`w-full px-4 py-2.5 bg-white border rounded-xl text-xs sm:text-sm text-brand-charcoal focus:ring-1 focus:ring-brand-sage focus:border-brand-sage focus:outline-none transition-all ${
                          errors.name ? 'border-brand-terracotta' : 'border-brand-sage/15'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-brand-terracotta flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="font-sans text-[11px] font-bold text-brand-charcoal uppercase tracking-wider block">
                        Votre adresse email <span className="text-brand-terracotta">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={messageForm.email}
                        onChange={handleMessageChange}
                        placeholder="Ex: alice.martin@example.com"
                        className={`w-full px-4 py-2.5 bg-white border rounded-xl text-xs sm:text-sm text-brand-charcoal focus:ring-1 focus:ring-brand-sage focus:border-brand-sage focus:outline-none transition-all ${
                          errors.email ? 'border-brand-terracotta' : 'border-brand-sage/15'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-brand-terracotta flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div className="space-y-1">
                      <label className="font-sans text-[11px] font-bold text-brand-charcoal uppercase tracking-wider block">
                        Sujet de votre message
                      </label>
                      <select
                        name="subject"
                        value={messageForm.subject}
                        onChange={handleMessageChange}
                        className="w-full px-4 py-2.5 bg-white border border-brand-sage/15 rounded-xl text-xs sm:text-sm text-brand-charcoal focus:ring-1 focus:ring-brand-sage focus:border-brand-sage focus:outline-none transition-all"
                      >
                        <option value="Renseignement général">Renseignement général</option>
                        <option value="Demande d'information tarifaire">Demande d'information tarifaire</option>
                        <option value="Autre demande spécifique">Autre demande spécifique</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="font-sans text-[11px] font-bold text-brand-charcoal uppercase tracking-wider block">
                        Votre Message <span className="text-brand-terracotta">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={messageForm.message}
                        onChange={handleMessageChange}
                        placeholder="Écrivez votre question de manière confidentielle..."
                        className={`w-full px-4 py-2.5 bg-white border rounded-xl text-xs sm:text-sm text-brand-charcoal focus:ring-1 focus:ring-brand-sage focus:border-brand-sage focus:outline-none transition-all resize-none ${
                          errors.message ? 'border-brand-terracotta' : 'border-brand-sage/15'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[10px] text-brand-terracotta flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-brand-sage hover:bg-brand-olive text-brand-beige py-3.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow"
                    >
                      <Send className="w-4 h-4" />
                      <span>Envoyer mon message sécurisé</span>
                    </button>
                  </form>
                )}
              </div>
            )}
            
          </div>

        </div>
      </div>
    </section>
  );
}
