export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  destination: string;
  destinationSlug: string;
  description: string;
  longDescription?: string;
  image: string;
  days: number;
  nights: number;
  startingPrice?: number;
  priceLabel?: string;
  travelType: TravelType;
  category: string;
  highlights?: string[];
  itinerary?: ItineraryDay[];
  inclusions?: string[];
  exclusions?: string[];
  importantNotes?: string[];
  availability: PackageAvailability;
  featured: boolean;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export type TravelType =
  | 'group'
  | 'family'
  | 'couple'
  | 'solo'
  | 'customized';

export type PackageAvailability =
  | 'available'
  | 'limited'
  | 'upcoming'
  | 'sold-out';

export const TRAVEL_TYPE_LABELS: Record<TravelType, string> = {
  group: 'Group Trip',
  family: 'Family Trip',
  couple: 'Couple Trip',
  solo: 'Solo Trip',
  customized: 'Customized Trip',
};

export const AVAILABILITY_LABELS: Record<PackageAvailability, string> = {
  available: 'Available',
  limited: 'Limited Seats',
  upcoming: 'Upcoming',
  'sold-out': 'Sold Out',
};
