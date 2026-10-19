import { TourPackage } from '@/types/package';

export const packages: TourPackage[] = [
  {
    id: 'pkg-1',
    slug: 'kedarnath-spiritual-journey',
    title: 'Kedarnath Spiritual Journey',
    destination: 'Kedarnath',
    destinationSlug: 'kedarnath',
    description:
      'A soul-stirring pilgrimage to the sacred Kedarnath Temple, nestled high in the Garhwal Himalayas. Trek through stunning mountain scenery and experience deep spiritual fulfilment.',
    longDescription:
      'Embark on a transformative journey to one of the most revered pilgrimage sites in India. This carefully planned trip takes you from the foothills to the ancient Kedarnath Temple at 3,583 metres, with comfortable stays, guided treks, and ample time for darshan and reflection.',
    image: '/images/owner/owner-kedarnath-portrait.png',
    days: 5,
    nights: 4,
    travelType: 'group',
    category: 'pilgrimage',
    highlights: [
      'Kedarnath Temple darshan',
      'Guided Himalayan trek',
      'Comfortable accommodation',
      'Group travel experience',
      'Scenic mountain views',
    ],
    inclusions: [
      'Transport from meeting point',
      'Accommodation (twin/triple sharing)',
      'Meals as per itinerary',
      'Experienced guide',
      'First aid kit',
    ],
    exclusions: [
      'Personal expenses',
      'Travel insurance',
      'Pony/palki charges',
      'Any items not mentioned in inclusions',
    ],
    availability: 'available',
    featured: true,
  },
  {
    id: 'pkg-2',
    slug: 'manali-snow-adventure',
    title: 'Manali Snow Adventure',
    destination: 'Manali',
    destinationSlug: 'manali',
    description:
      'An action-packed adventure in the snow-covered paradise of Manali. Enjoy snowboarding, Solang Valley, and cosy mountain evenings with your travel group.',
    image: '/images/travel-groups/group-snow-fun.png',
    days: 6,
    nights: 5,
    travelType: 'group',
    category: 'adventure',
    highlights: [
      'Solang Valley snow activities',
      'Snowboarding and skiing',
      'Rohtang Pass visit',
      'Old Manali exploration',
      'Bonfire and group activities',
    ],
    availability: 'available',
    featured: true,
  },
  {
    id: 'pkg-3',
    slug: 'rishikesh-rafting-expedition',
    title: 'Rishikesh Rafting Expedition',
    destination: 'Rishikesh',
    destinationSlug: 'rishikesh',
    description:
      'Conquer the rapids of the Ganges with this thrilling river rafting expedition. A perfect mix of adventure, camping, and spiritual exploration.',
    image: '/images/travel-groups/group-rafting.png',
    days: 3,
    nights: 2,
    travelType: 'group',
    category: 'adventure',
    highlights: [
      'Grade III–IV river rafting',
      'Riverside camping',
      'Cliff jumping',
      'Ganga Aarti experience',
      'Body surfing',
    ],
    availability: 'available',
    featured: true,
  },
  {
    id: 'pkg-4',
    slug: 'kerala-backwater-retreat',
    title: 'Kerala Backwater Retreat',
    destination: 'Kerala Backwaters',
    destinationSlug: 'kerala-backwaters',
    description:
      'A serene escape through the enchanting backwaters of Kerala. Cruise on a traditional houseboat, savour local cuisine, and witness magical sunsets.',
    image: '/images/owner/owner-backwaters.png',
    days: 5,
    nights: 4,
    travelType: 'couple',
    category: 'honeymoon',
    highlights: [
      'Houseboat stay',
      'Alleppey backwater cruise',
      'Kerala cuisine experience',
      'Ayurvedic spa session',
      'Sunset photography',
    ],
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
  return packages.filter((p) => p.destinationSlug === destinationSlug);
}
