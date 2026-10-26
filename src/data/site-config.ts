export const siteConfig = {
  name: 'Vighnaharta Tours and Adventures',
  tagline: 'Explore • Experience • Excel',
  shortDescription:
    'Crafting unforgettable travel experiences across India — from sacred pilgrimages to thrilling adventures and serene retreats.',
  logoPath: '/images/brand/logooo.jpeg',

  // Owner / Lead Host details
  owner: {
    name: 'Aditya Khursade',
    role: 'Founder & Lead Expedition Host',
    introduction:
      'Passionate mountaineer and expedition host creating meaningful travel experiences across India. Every trip is thoughtfully planned and personally hosted to ensure safety, adventure, and lifelong memories.',
    philosophy:
      'Travel is not just about visiting places — it is about the stories we create, the camaraderie we build, and the transformative perspectives we gain along the way.',
    personalMessage:
      'Whether you are seeking a sacred pilgrimage to the Himalayas, an adrenaline-pumping Sahyadri trek, or a relaxing getaway with friends and family, I accompany you every step of the way. Let us explore something extraordinary together.',
    images: {
      portrait: '/images/char-dham/WhatsApp Image 2026-10-26 at 10.49.01 PM (1).jpeg',
      backwaters: '/images/owner/owner-backwaters.png',
      couple: '/images/char-dham/WhatsApp Image 2026-10-26 at 10.48.24 PM.jpeg',
      waterfall: '/images/secret-waterfall/WhatsApp Image 2026-10-26 at 10.42.11 PM.jpeg',
    },
  },

  // Contact details
  contact: {
    phone: '+91 98819 53564',
    whatsapp: '+91 98819 53564',
    secondaryPhone: '+91 9009 25 9005',
    alternatePhone: '+91 95290 85965',
    email: 'vighnahartatours.adventure@gmail.com',
    address: 'Pan-India Tours & Expeditions | Base: Akola / Washim / Pune',
  },

  social: {
    instagram: 'https://instagram.com/vighnaharta_tours_and_adventure',
    facebook: '#',
    youtube: '#',
    twitter: '#',
  },

  // SEO defaults
  seo: {
    defaultTitle: 'Vighnaharta Tours & Adventures — Unforgettable Travel Experiences Across India',
    defaultDescription:
      'Discover handcrafted travel experiences across India with Vighnaharta Tours and Adventures. Group trips, pilgrimages, adventure tours, and customized itineraries.',
    siteUrl: 'https://vighnahartatours.com',
  },

  // Enquiry form settings
  enquiry: {
    minTravellers: 1,
    maxTravellers: 50,
    budgetRanges: [
      'Under ₹10,000',
      '₹10,000 – ₹25,000',
      '₹25,000 – ₹50,000',
      '₹50,000 – ₹1,00,000',
      'Above ₹1,00,000',
      'Flexible / Not decided',
    ],
    durationOptions: [
      '2–3 Days',
      '4–5 Days',
      '6–7 Days',
      '1–2 Weeks',
      'More than 2 Weeks',
      'Not decided',
    ],
    contactMethods: ['Phone', 'WhatsApp', 'Email'] as const,
    travelTypes: [
      'Group Trip',
      'Family Trip',
      'Couple Trip',
      'Solo Trip',
      'Customized Trip',
      'Other',
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
