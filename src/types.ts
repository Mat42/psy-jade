export interface TherapyMethod {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  benefits: string[];
}

export interface SpecialtyItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  symptoms: string[];
  description: string;
  link?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  type: string; // e.g. "Adulte", "Parent d'adolescent", "Couple"
  date: string;
}

export interface AppointmentRequest {
  id: string;
  patientType: 'adult' | 'adolescent' | 'couple';
  therapyType: string; // e.g., "Consultation Individuelle", "Thérapie de Couple"
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDay: string; // e.g. "Lundi", "Mardi" etc.
  preferredTime: string; // e.g. "Matin", "Après-midi", "Fin de journée"
  message?: string;
  submittedAt: string;
  status: 'pending' | 'accepted' | 'declined';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}
