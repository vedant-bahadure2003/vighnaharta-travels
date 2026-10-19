export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Tour Packages', href: '/packages' },
  { label: 'About Us', href: '/about' },
  { label: 'Travel Memories', href: '/memories' },
  { label: 'Contact', href: '/contact' },
] as const;

export type NavigationLink = (typeof navigationLinks)[number];
