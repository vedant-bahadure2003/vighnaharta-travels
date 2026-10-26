import { getAllJourneyImages } from './past-journeys';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  location?: string;
  journeyId?: string;
  title?: string;
  vibeTag?: string;
  hostNote?: string;
  isCover?: boolean;
  isFlyer?: boolean;
}

// Convert all 61 real expedition photos into gallery images
export const galleryImages: GalleryImage[] = getAllJourneyImages().map((img) => ({
  id: img.id,
  src: img.src,
  alt: `${img.title} - ${img.location}`,
  width: img.width,
  height: img.height,
  caption: img.caption,
  location: img.location,
  journeyId: img.journeyId,
  title: img.title,
  vibeTag: img.vibeTag,
  hostNote: img.hostNote,
  isCover: img.isCover,
  isFlyer: img.isFlyer,
}));
