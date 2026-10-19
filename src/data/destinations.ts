import { Destination } from '@/types/destination';

export const destinations: Destination[] = [
  {
    id: 'dest-1',
    slug: 'kedarnath',
    name: 'Kedarnath',
    tagline: 'A sacred pilgrimage in the lap of the Himalayas',
    description:
      'Journey to one of the holiest Hindu temples, nestled at 3,583 metres in the Garhwal Himalayas. Experience spiritual serenity amidst breathtaking mountain scenery.',
    longDescription:
      'Kedarnath is one of the four Char Dham pilgrimage sites and home to one of the twelve Jyotirlinga temples dedicated to Lord Shiva. The trek to the temple through the majestic Himalayan terrain is a transformative experience, offering stunning views of snow-capped peaks, lush valleys, and the sacred Mandakini river. Whether you seek spiritual fulfilment or natural beauty, Kedarnath delivers an unforgettable journey.',
    image: '/images/owner/owner-kedarnath-portrait.png',
    category: 'pilgrimage',
    highlights: [
      'Kedarnath Temple darshan',
      'Scenic Himalayan trek',
      'Mandakini River views',
      'Snow-capped mountain panoramas',
      'Spiritual atmosphere',
    ],
    suggestedActivities: [
      'Temple visit and prayers',
      'Trek to Kedarnath',
      'Photography',
      'Meditation and reflection',
      'Explore Gaurikund',
    ],
    bestTimeToVisit: 'May to June, September to October',
    suggestedDuration: '4–6 days',
    featured: true,
  },
  {
    id: 'dest-2',
    slug: 'manali',
    name: 'Manali',
    tagline: 'Snow-covered peaks and endless adventure',
    description:
      'Discover the magic of Manali — from snow-covered slopes to lush green valleys. Perfect for adventure seekers and nature lovers alike.',
    longDescription:
      'Manali, nestled in the Kullu Valley of Himachal Pradesh, is a paradise for travellers seeking adventure, natural beauty, and cultural experiences. From the snow-covered Solang Valley to the serene Hadimba Temple, Manali offers diverse experiences for every type of traveller. Enjoy snowboarding, paragliding, river crossing, and cosy evenings by the fireplace in mountain lodges.',
    image: '/images/travel-groups/group-snow-fun.png',
    category: 'hill-station',
    highlights: [
      'Solang Valley snow activities',
      'Rohtang Pass excursion',
      'Old Manali culture walk',
      'Hadimba Temple',
      'Mall Road shopping',
    ],
    suggestedActivities: [
      'Snow sports and skiing',
      'Paragliding',
      'River rafting',
      'Temple visits',
      'Café hopping in Old Manali',
    ],
    bestTimeToVisit: 'October to February (snow), March to June (pleasant)',
    suggestedDuration: '5–7 days',
    featured: true,
  },
  {
    id: 'dest-3',
    slug: 'rishikesh',
    name: 'Rishikesh',
    tagline: 'Adventure and spirituality by the Ganges',
    description:
      'Experience the thrill of river rafting, bungee jumping, and camping alongside the spiritual essence of yoga and meditation by the holy Ganges.',
    longDescription:
      'Known as the "Yoga Capital of the World," Rishikesh offers a unique blend of adrenaline-pumping adventure and deep spiritual experiences. Nestled in the foothills of the Himalayas along the sacred Ganges, this destination is perfect for those seeking both excitement and inner peace. From white-water rafting to evening Ganga Aarti ceremonies, Rishikesh is a complete travel experience.',
    image: '/images/travel-groups/group-rafting.png',
    category: 'adventure',
    highlights: [
      'White-water river rafting',
      'Laxman Jhula and Ram Jhula',
      'Ganga Aarti ceremony',
      'Bungee jumping',
      'Yoga and meditation retreats',
    ],
    suggestedActivities: [
      'River rafting (Grade III–IV rapids)',
      'Bungee jumping',
      'Camping by the river',
      'Attend Ganga Aarti',
      'Explore ashrams and temples',
    ],
    bestTimeToVisit: 'September to November, February to May',
    suggestedDuration: '3–5 days',
    featured: true,
  },
  {
    id: 'dest-4',
    slug: 'kerala-backwaters',
    name: 'Kerala Backwaters',
    tagline: 'Serene waters, swaying palms, and houseboat magic',
    description:
      'Cruise through the enchanting backwaters of Kerala on a traditional houseboat, surrounded by coconut palms, lotus-filled waters, and golden sunsets.',
    longDescription:
      'The Kerala Backwaters are a network of interconnected canals, rivers, lakes, and inlets that stretch along the Malabar Coast. A houseboat cruise through Alleppey or Kumarakom is one of India\'s most iconic travel experiences. Watch the sun set over still waters, savour authentic Kerala cuisine, and immerse yourself in the tranquil beauty of God\'s Own Country.',
    image: '/images/owner/owner-backwaters.png',
    category: 'honeymoon',
    highlights: [
      'Houseboat cruise',
      'Coconut palm-lined waterways',
      'Traditional Kerala cuisine',
      'Stunning sunsets',
      'Village life experiences',
    ],
    suggestedActivities: [
      'Houseboat stay in Alleppey',
      'Canoe ride through narrow canals',
      'Visit Kumarakom Bird Sanctuary',
      'Enjoy Ayurvedic spa treatments',
      'Sample local seafood cuisine',
    ],
    bestTimeToVisit: 'September to March',
    suggestedDuration: '4–6 days',
    featured: true,
  },
  {
    id: 'dest-5',
    slug: 'goa',
    name: 'Goa',
    tagline: 'Sun, sand, and vibrant culture',
    description:
      'From golden beaches to Portuguese heritage, Goa offers the perfect blend of relaxation, nightlife, and cultural exploration.',
    image: '/images/destinations/goa.jpg',
    category: 'beach',
    highlights: [
      'Beach hopping',
      'Water sports',
      'Old Goa churches',
      'Spice plantation tours',
      'Vibrant nightlife',
    ],
    bestTimeToVisit: 'November to February',
    suggestedDuration: '4–6 days',
    featured: false,
  },
  {
    id: 'dest-6',
    slug: 'rajasthan',
    name: 'Rajasthan',
    tagline: 'Royal palaces, golden deserts, and timeless heritage',
    description:
      'Explore the majestic forts, vibrant bazaars, and vast Thar Desert of Rajasthan — a land of kings and unforgettable cultural experiences.',
    image: '/images/destinations/rajasthan.jpg',
    category: 'heritage',
    highlights: [
      'Jaipur\'s Amber Fort',
      'Udaipur\'s Lake Palace',
      'Jaisalmer desert safari',
      'Jodhpur\'s blue city',
      'Traditional Rajasthani cuisine',
    ],
    bestTimeToVisit: 'October to March',
    suggestedDuration: '7–10 days',
    featured: false,
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}
