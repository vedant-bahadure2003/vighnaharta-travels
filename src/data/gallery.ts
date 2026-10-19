export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  location?: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: '/images/travel-groups/group-rafting.png',
    alt: 'Group enjoying river rafting adventure',
    width: 1080,
    height: 1222,
    caption: 'Thrilling river rafting adventure',
    location: 'Adventure trip',
  },
  {
    id: 'gallery-2',
    src: '/images/travel-groups/group-snow-mountains.png',
    alt: 'Travel group posing in front of snow-covered mountains',
    width: 1080,
    height: 1318,
    caption: 'Unforgettable mountain memories',
    location: 'Mountain trip',
  },
  {
    id: 'gallery-3',
    src: '/images/travel-groups/group-snow-fun.png',
    alt: 'Group having fun in the snow with a snowman',
    width: 1080,
    height: 806,
    caption: 'Snow day celebrations',
    location: 'Winter trip',
  },
  {
    id: 'gallery-4',
    src: '/images/travel-groups/group-hotel.png',
    alt: 'Travel group at their accommodation',
    width: 1080,
    height: 974,
    caption: 'Great company, great stays',
    location: 'Group trip',
  },
  {
    id: 'gallery-5',
    src: '/images/owner/owner-backwaters.png',
    alt: 'Enjoying the serene backwaters at sunset',
    width: 1080,
    height: 1331,
    caption: 'Backwater serenity',
    location: 'Kerala',
  },
  {
    id: 'gallery-6',
    src: '/images/owner/owner-kedarnath-couple.png',
    alt: 'Couple at a temple in the Himalayas',
    width: 1080,
    height: 1320,
    caption: 'Sacred moments together',
    location: 'Kedarnath',
  },
  {
    id: 'gallery-7',
    src: '/images/owner/owner-waterfall.png',
    alt: 'Relaxing by a beautiful waterfall',
    width: 1080,
    height: 1255,
    caption: 'Nature at its finest',
  },
];
