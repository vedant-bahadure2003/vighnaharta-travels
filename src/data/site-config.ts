export const siteConfig = {
  name: 'Vighnaharta Tours and Adventures',
  tagline: 'Explore • Experience • Excel',
  shortDescription:
    'Crafting unforgettable travel experiences across India — from sacred pilgrimages to thrilling adventures and serene retreats.',
  logoPath: '/images/brand/logooo.jpeg',

  // Owner / Lead Host details
  owner: {
    name: 'Lead Travel Host',
    role: 'Founder & Expedition Host',
    introduction:
      'Passionate about creating meaningful travel experiences that bring people together. Every trip is thoughtfully planned to ensure comfort, adventure, and lasting memories.',
    philosophy:
      'Travel is not just about visiting places — it\'s about the stories we create, the connections we build, and the perspectives we gain along the way.',
    personalMessage:
      'Whether you\'re seeking a spiritual journey to the Himalayas, an adrenaline-pumping adventure, or a relaxing getaway with loved ones, I\'m here to make it happen. Let\'s plan something extraordinary together.',
    images: {
      portrait: '/images/owner/owner-kedarnath-portrait.png',
      backwaters: '/images/owner/owner-backwaters.png',
      couple: '/images/owner/owner-kedarnath-couple.png',
      waterfall: '/images/owner/owner-waterfall.png',
    },
  },

  // Contact details
  contact: {
    phone: '+91 9009 25 9005',
    whatsapp: '+91 98819 53564',
    email: 'Vighnahartatours.Adventure@gmail.com',
    address: 'Pan-India Tours & Expeditions',
  },

  social: {
    instagram: '#',
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
