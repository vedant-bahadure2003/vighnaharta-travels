import { Destination } from '@/types/destination';

export const destinations: Destination[] = [
  {
    id: 'dest-1',
    slug: 'kedarnath',
    name: 'Kedarnath & Char Dham',
    tagline: 'A sacred pilgrimage in the lap of the Himalayas',
    description:
      'Journey to one of the holiest Hindu temples, nestled at 3,583 metres in the Garhwal Himalayas. Experience spiritual serenity amidst breathtaking mountain scenery.',
    longDescription:
      'Kedarnath is one of the four Char Dham pilgrimage sites and home to one of the twelve Jyotirlinga temples dedicated to Lord Shiva. The trek to the temple through the majestic Himalayan terrain is a transformative experience, offering stunning views of snow-capped peaks, lush valleys, and the sacred Mandakini river. Whether you seek spiritual fulfilment or natural beauty, Kedarnath delivers an unforgettable journey.',
    image: '/images/char-dham/WhatsApp Image 2026-10-26 at 10.48.24 PM.jpeg',
    category: 'pilgrimage',
    highlights: [
      'Kedarnath Temple darshan & evening aarti',
      'Scenic Himalayan trek from Gaurikund',
      'First Indian Village Mana & Saraswati river gorge',
      'Badrinath Dham & Neelkanth peak vistas',
      'Tungnath & Chandrashila summit climb',
    ],
    suggestedActivities: [
      'Temple visit and prayers',
      'Trek to Kedarnath & Tungnath',
      'Photography & glacial viewpoints',
      'Meditation at holy sangams',
      'White-water rafting in Rishikesh',
    ],
    bestTimeToVisit: 'May to June, September to October',
    suggestedDuration: '4–12 days',
    featured: true,
  },
  {
    id: 'dest-2',
    slug: 'manali',
    name: 'Kullu & Manali',
    tagline: 'Snow-covered peaks, Solang thrills, and endless adventure',
    description:
      'Discover the magic of Manali — from snow-covered slopes in Solang Valley to lush deodar cedar woods. Perfect for adventure seekers and nature lovers alike.',
    longDescription:
      'Manali, nestled in the Kullu Valley of Himachal Pradesh, is a paradise for travellers seeking adventure, natural beauty, and cultural experiences. From the snow-covered Solang Valley to the serene Hadimba Temple, Manali offers diverse experiences for every type of traveller. Enjoy snowboarding, 4x4 snow drives, river rafting on the Beas, and cosy evenings by the fireplace in mountain lodges.',
    image: '/images/kullu-manali/WhatsApp Image 2026-10-26 at 10.52.04 PM.jpeg',
    category: 'hill-station',
    highlights: [
      'Solang Valley deep snow activities',
      'Rohtang Pass & Atal Tunnel excursion',
      'White-water river rafting in Kullu',
      'Ancient Hadimba Temple cedar woods',
      'Heritage extension to Amritsar & Wagah Border',
    ],
    suggestedActivities: [
      'Snow sports and skiing',
      'Paragliding & zipline',
      'River rafting on the Beas',
      'Temple visits & Golden Temple darshan',
      'Café hopping in Old Manali',
    ],
    bestTimeToVisit: 'October to February (snow), March to June (pleasant)',
    suggestedDuration: '4–7 days',
    featured: true,
  },
  {
    id: 'dest-3',
    slug: 'harishchandragad',
    name: 'Harishchandragad & Kokankada',
    tagline: 'The crowning jewel of Sahyadri trekking & 2,000-ft cliff',
    description:
      'Trek through rolling monsoon clouds to the legendary concave cliff of Kokankada and the 1,400-year-old stone temple of Harishchandreshwar.',
    longDescription:
      'Harishchandragad is widely revered as the king of forts in Maharashtra. Located in the Malshej Ghat region, it boasts ancient rock-cut caves, natural water cisterns, the mystifying Kedareshwar cave lingam, and the breathtaking Kokankada cliff where reverse winds blow raindrops into the sky.',
    image: '/images/harishchandragad/WhatsApp Image 2026-10-26 at 10.55.17 PM.jpeg',
    category: 'adventure',
    highlights: [
      'Kokankada 2,000-foot semicircular cliff',
      'Ancient Harishchandreshwar temple (6th Century AD)',
      'Reverse waterfall wind phenomenon',
      'Hiking stone-cut stairways through monsoon cascades',
      'Camping under starry skies on the plateau',
    ],
    suggestedActivities: [
      'Monsoon & winter trekking',
      'Cave exploration (Kedareshwar Cave)',
      'Reverse waterfall experience',
      'Landscape photography',
      'Stargazing & campfire',
    ],
    bestTimeToVisit: 'July to October (Monsoon waterfalls), November to February (Clear skies)',
    suggestedDuration: '1–2 days',
    featured: true,
  },
  {
    id: 'dest-4',
    slug: 'secret-waterfall',
    name: 'Secret Waterfall Canyon',
    tagline: 'Untouched jungle cascades and natural plunge pools',
    description:
      'An off-beat wilderness trek deep inside a secluded Sahyadri valley, featuring a 150-foot natural waterfall plunging into a volcanic rock amphitheatre.',
    longDescription:
      'Leave the crowds behind on our exclusive Secret Waterfall trek. Wading through crystal-clear forest streams and beneath thick green canopies, you will discover a thundering waterfall surrounded by raw basalt cliffs, complete with safe natural swimming pools monitored by our safety guides.',
    image: '/images/secret-waterfall/WhatsApp Image 2026-10-26 at 10.42.11 PM.jpeg',
    category: 'adventure',
    highlights: [
      '150-foot untouched natural waterfall',
      'Crystal-clear natural plunge pool swimming',
      'River-wading through dense forest trails',
      'Safe, host-accompanied group environment',
      'Delicious hot breakfast & trail chai included',
    ],
    suggestedActivities: [
      'Forest canopy trail hike',
      'Waterfall bathing & swimming',
      'Photography & nature journaling',
      'College batch & group bonding',
    ],
    bestTimeToVisit: 'July to October (Peak monsoon season)',
    suggestedDuration: '1 day',
    featured: true,
  },
  {
    id: 'dest-5',
    slug: 'kerala-backwaters',
    name: 'Kerala Backwaters & Hills',
    tagline: 'Serene waters, swaying palms, and living cultural arts',
    description:
      'Cruise through the enchanting backwaters of Alleppey on a traditional houseboat, surrounded by coconut palms, Kathakali artists, and golden sunsets.',
    longDescription:
      'The Kerala Backwaters are a network of interconnected canals, rivers, lakes, and inlets that stretch along the Malabar Coast. A houseboat cruise through Alleppey paired with Munnar misty tea gardens and classical Kathakali and Mohiniyattam performances delivers the ultimate rejuvenating getaway.',
    image: '/images/kerla/WhatsApp Image 2026-10-26 at 10.54.27 PM.jpeg',
    category: 'honeymoon',
    highlights: [
      'Alleppey private houseboat cruise',
      'Live Kathakali & Mohiniyattam classical shows',
      'Munnar rolling tea plantations & waterfalls',
      'Maha Ganapathi sacred outdoor shrine',
      'Authentic Kerala cuisine & Ayurvedic wellness',
    ],
    suggestedActivities: [
      'Houseboat stay in Alleppey',
      'Canoe ride through narrow village canals',
      'Munnar tea factory & plantation tour',
      'Classical arts interaction',
      'Ayurvedic spa treatments',
    ],
    bestTimeToVisit: 'September to March',
    suggestedDuration: '4–6 days',
    featured: true,
  },
  {
    id: 'dest-6',
    slug: 'jivdhan-fort',
    name: 'Jivdhan Fort & Vanar Lingi',
    tagline: 'Maratha hill fort, 400-ft rock needle, zipline & rappelling',
    description:
      'Conquer the historic Maratha fort of Jivdhan near Naneghat and experience extreme adrenaline with high-wire ziplining past the iconic Vanar Lingi pinnacle.',
    longDescription:
      'Guarding the ancient Naneghat trade pass, Jivdhan Fort offers rugged rock-cut steps, historic water cisterns, and a front-row seat to the colossal 400-foot Vanar Lingi rock needle. Our certified adventure package includes valley zipline and cliff rappelling for the ultimate rush.',
    image: '/images/jivdhan-fort/WhatsApp Image 2026-10-26 at 10.50.05 PM (1).jpeg',
    category: 'adventure',
    highlights: [
      'High-tension valley zipline past Vanar Lingi needle',
      'Cliff face rappelling with certified mountaineering team',
      'Kalyan Darwaja historic rock-cut stairs',
      'Panoramic summit views over the Western Ghats',
      'Night camping with campfire under the stars',
    ],
    suggestedActivities: [
      'Rock climbing & rappelling',
      'Valley zipline crossing',
      'Historical exploration of fort ruins',
      'Tent camping & stargazing',
    ],
    bestTimeToVisit: 'October to February',
    suggestedDuration: '1–2 days',
    featured: true,
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}
