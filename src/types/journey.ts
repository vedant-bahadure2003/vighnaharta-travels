export interface JourneyImage {
  id: string;
  journeyId: string;
  src: string;
  title: string;
  caption: string;
  location: string;
  width: number;
  height: number;
  vibeTag: string;
  hostNote?: string;
  isCover?: boolean;
  isFlyer?: boolean;
}

export type JourneyCategory =
  | 'all'
  | 'pilgrimage'
  | 'himalayas'
  | 'sahyadri'
  | 'monsoon'
  | 'leisure';

export interface PastJourney {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: JourneyCategory;
  categoryLabel: string;
  coverImage: string;
  flyerImage?: string;
  duration: string;
  location: string;
  elevationOrTerrain: string;
  groupSize: string;
  yearOrSeason: string;
  priceSnippet?: string;
  highlights: string[];
  story: string;
  hostTip: string;
  images: JourneyImage[];
}
