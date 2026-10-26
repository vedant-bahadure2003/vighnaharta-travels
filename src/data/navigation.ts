export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Tour Packages', href: '/packages' },
  { label: 'Past Journeys', href: '/memories' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export type NavigationLink = (typeof navigationLinks)[number];
