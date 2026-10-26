import { TourPackage } from '@/types/package';

export const packages: TourPackage[] = [
  {
    id: 'pkg-1',
    slug: 'char-dham-himalayan-yatra',
    title: 'Char Dham Sacred Himalayan Yatra',
    destination: 'Kedarnath & Badrinath',
    destinationSlug: 'kedarnath',
    description:
      'The sacred 4-Dham pilgrimage covering Yamunotri, Gangotri, Kedarnath & Badrinath with Tungnath and Rishikesh rafting included. All-inclusive train, stays, and pure vegetarian meals.',
    longDescription:
      'Embark on a transformative journey across the sacred Garhwal Himalayas. This all-inclusive tour includes dedicated train tickets, comfortable stays, pure vegetarian food, darshan and permit assistance, basic medical support, and an experienced tour manager accompanying the group throughout.',
    image: '/images/char-dham/WhatsApp Image 2026-10-26 at 10.48.24 PM.jpeg',
    days: 12,
    nights: 11,
    travelType: 'group',
    category: 'pilgrimage',
    highlights: [
      'Kedarnath Jyotirlinga darshan',
      'Shri Badrinath Dham darshan',
      'Mana Village (First Indian Village)',
      'Tungnath (Highest Shiva Temple) & Chandrashila',
      'Celebratory river rafting in Rishikesh',
    ],
    inclusions: [
      'Train Journey (Sleeper / AC options)',
      'Comfortable hotel accommodation',
      'Pure vegetarian meals (Breakfast & Dinner)',
      'Local sightseeing & tempo traveler',
      'Darshan, permits & toll charges',
      'Experienced Tour Manager & First Aid kit',
    ],
    exclusions: [
      'Personal expenses & shopping',
      'Pony / Doli / Helicopter charges',
      'Travel insurance',
      'Any items not mentioned in inclusions',
    ],
    availability: 'available',
    featured: true,
  },
  {
    id: 'pkg-2',
    slug: 'kullu-manali-kasol-snow',
    title: 'Kullu, Manali & Solang Valley Snow Tour',
    destination: 'Kullu & Manali',
    destinationSlug: 'manali',
    description:
      'An action-packed adventure in snowy Solang Valley, Rohtang heights, and Kasol. Includes 3-star hotel stays, complimentary river rafting, and scenic road trips.',
    longDescription:
      'Experience the magic of winter in Himachal Pradesh. Enjoy Solang Valley snow sports, a 4x4 snow convoy drive, white-water river rafting on the icy Beas river in Kullu, cafe hopping in Old Manali, and optional extension to the Golden Temple in Amritsar and Wagah border.',
    image: '/images/kullu-manali/WhatsApp Image 2026-10-26 at 10.52.04 PM.jpeg',
    days: 4,
    nights: 3,
    travelType: 'group',
    category: 'adventure',
    highlights: [
      'Solang Valley & Rohtang Pass snow activities',
      'Complimentary river rafting in Kullu',
      'Old Manali & Hadimba Temple cedar woods',
      'Kasol & Parvati Valley exploration',
      'Campfire, music & group bonding',
    ],
    inclusions: [
      'Ex-Delhi Volvo / Tempo Traveler transport',
      '3-Star Hotel Stay with mountain views',
      'Breakfast and Dinner buffet',
      'Free river rafting activity',
      'All sightseeing as per itinerary',
    ],
    exclusions: [
      'Personal adventure gear rentals (snow suits/boots)',
      'Paragliding / Skiing personal activity fees',
      'Any meal outside the itinerary',
    ],
    availability: 'available',
    featured: true,
  },
  {
    id: 'pkg-3',
    slug: 'harishchandragad-monsoon-trek',
    title: 'Harishchandragad & Kokankada Monsoon Trek',
    destination: 'Harishchandragad',
    destinationSlug: 'harishchandragad',
    description:
      'Hike through driving monsoon clouds to the colossal 2,000-ft Kokankada cliff, ancient 6th-century stone temple, and the mysterious Kedareshwar cave.',
    image: '/images/harishchandragad/WhatsApp Image 2026-10-26 at 10.55.17 PM.jpeg',
    days: 2,
    nights: 1,
    travelType: 'group',
    category: 'adventure',
    highlights: [
      'Kokankada reverse waterfall phenomenon',
      'Harishchandreshwar 1,400-year-old carved temple',
      'Kedareshwar water cave exploration',
      'Monsoon cascading waterfall staircases',
      'Authentic village meals and tent camping',
    ],
    inclusions: [
      'Transport from meeting point / base',
      'Tented stay or local cave/homestay accommodation',
      'Breakfast, lunch & traditional dinner',
      'Experienced trek leaders & first aid support',
      'Forest entry fees and safety gear',
    ],
    exclusions: ['Personal bottled water', 'Personal backpack and rainwear'],
    availability: 'available',
    featured: true,
  },
  {
    id: 'pkg-4',
    slug: 'secret-waterfall-one-day-trek',
    title: 'Secret Waterfall One Day Wilderness Trek',
    destination: 'Secret Waterfall Canyon',
    destinationSlug: 'secret-waterfall',
    description:
      'Our signature budget-friendly Sunday monsoon trail! 150-ft natural waterfall, river wading, safe plunge pool swimming, breakfast and transport included.',
    image: '/images/secret-waterfall/WhatsApp Image 2026-10-26 at 10.42.11 PM.jpeg',
    days: 1,
    nights: 0,
    travelType: 'group',
    category: 'adventure',
    highlights: [
      'Untouched 150-ft secluded waterfall',
      'Safe river swimming with safety coordinators',
      'Off-the-grid jungle trail with zero crowds',
      'Great for college batches, friends & beginners',
      'Morning hot tea & breakfast included',
    ],
    inclusions: [
      'Private bus / traveler transport from pickup point',
      'Morning tea, coffee & hot breakfast',
      'Guided forest walk with safety team',
      'First aid & emergency safety gear',
    ],
    exclusions: ['Personal change of clothes and towels'],
    availability: 'available',
    featured: true,
  },
  {
    id: 'pkg-5',
    slug: 'jivdhan-fort-zipline-adventure',
    title: 'Jivdhan Fort Trek & Vanar Lingi Zipline',
    destination: 'Jivdhan Fort & Vanar Lingi',
    destinationSlug: 'jivdhan-fort',
    description:
      'The ultimate adrenaline rush in the Sahyadris! Fly across a 1,000-ft valley on a zipline beside the 400-ft Vanar Lingi rock needle with cliff rappelling.',
    image: '/images/jivdhan-fort/WhatsApp Image 2026-10-26 at 10.50.05 PM (1).jpeg',
    days: 2,
    nights: 1,
    travelType: 'group',
    category: 'adventure',
    highlights: [
      'Valley zipline crossing past Vanar Lingi pinnacle',
      'Rock cliff rappelling with certified experts',
      'Historical Maratha fort exploration',
      'Camping stay under the stars',
      'All meals and technical climbing gear',
    ],
    inclusions: [
      'Roundtrip transport (Akola / Washim / Pune)',
      'Camping tent stay with sleeping gear',
      'Breakfast, lunch and dinner',
      'All technical climbing equipment & UIAA gear',
      'Certified climbing instructors & trek leaders',
    ],
    exclusions: ['Personal expenses and camera charges'],
    availability: 'available',
    featured: true,
  },
  {
    id: 'pkg-6',
    slug: 'kerala-backwaters-cultural-tour',
    title: 'Kerala Backwaters & Cultural Experience',
    destination: 'Kerala Backwaters & Hills',
    destinationSlug: 'kerala-backwaters',
    description:
      'Immerse yourself in God\'s Own Country. Houseboat cruises on Alleppey backwaters, Munnar tea valleys, live Kathakali shows, and tropical relaxation.',
    image: '/images/kerla/WhatsApp Image 2026-10-26 at 10.54.27 PM.jpeg',
    days: 6,
    nights: 5,
    travelType: 'group',
    category: 'honeymoon',
    highlights: [
      'Private houseboat stay in Alleppey',
      'Munnar tea gardens and spice walk',
      'Kathakali & Mohiniyattam classical performances',
      'Authentic Kerala cuisine & banana leaf feast',
      'Maha Ganapathi sacred outdoor shrine',
    ],
    inclusions: [
      'Private AC vehicle with dedicated driver',
      'Premium resort & houseboat accommodation',
      'Daily breakfast and dinner (full board on houseboat)',
      'Sightseeing permits & show entry passes',
    ],
    exclusions: ['Airfare / train fare to Cochin', 'Personal Ayurvedic spa treatments'],
    availability: 'available',
    featured: true,
  },
];

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return packages.find((p) => p.slug === slug);
}

export function getFeaturedPackages(): TourPackage[] {
  return packages.filter((p) => p.featured);
}

export function getPackagesByDestination(destinationSlug: string): TourPackage[] {
  return packages.filter(
    (p) =>
      p.destinationSlug === destinationSlug ||
      p.slug.includes(destinationSlug) ||
      destinationSlug.includes(p.destinationSlug || '')
  );
}

