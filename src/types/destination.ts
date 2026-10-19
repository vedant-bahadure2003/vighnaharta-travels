export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  image: string;
  category: DestinationCategory;
  highlights?: string[];
  suggestedActivities?: string[];
  bestTimeToVisit?: string;
  suggestedDuration?: string;
  featured: boolean;
}

export type DestinationCategory =
  | 'pilgrimage'
  | 'adventure'
  | 'hill-station'
  | 'beach'
  | 'heritage'
  | 'wildlife'
  | 'honeymoon';

export const DESTINATION_CATEGORY_LABELS: Record<DestinationCategory, string> = {
  pilgrimage: 'Pilgrimage',
  adventure: 'Adventure',
  'hill-station': 'Hill Station',
  beach: 'Beach',
  heritage: 'Heritage',
  wildlife: 'Wildlife',
  honeymoon: 'Honeymoon',
};
