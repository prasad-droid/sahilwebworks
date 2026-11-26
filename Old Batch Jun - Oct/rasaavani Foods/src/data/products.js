import { images } from './images.js'

// Data-driven product catalogue.
//
// Add new products by appending an object below — no component changes needed.
// `status` must be one of: 'available' | 'coming-soon'.
// The confirmed signature product is the only item currently marked available.
// Do NOT state prices, pack sizes, weights, shelf life, ingredient lists,
// certifications or availability windows — none have been confirmed.

export const products = [
  {
    id: 'lal-mirch-bharwa-achaar',
    name: 'Lal Mirch Bharwa Achaar',
    category: 'Signature Pickle',
    status: 'available',
    featured: true,
    image: images.productAchaar,
    alt: 'Whole red chillies stuffed with a traditional Indian spice blend',
    shortDescription:
      'A whole red chilli. A traditional spice blend. A burst of Indian flavour.',
    description:
      'Our Lal Mirch Bharwa Achaar brings together the boldness of red chillies with the aromatic character of traditional Indian spices. Whole red chillies are carefully prepared and generously stuffed with a traditional spice mixture before being preserved to develop their distinctive flavour. The result? Spicy. Tangy. Aromatic. Rich. Absolutely Indian.',
    servingSuggestions: [
      'Dal',
      'Rice',
      'Roti',
      'Paratha',
      'Puri',
      'Khichdi',
      'Curd',
      'Snacks',
    ],
  },
  {
    id: 'traditional-pickles',
    name: 'Traditional Pickles',
    category: 'Pickles',
    status: 'coming-soon',
    image: images.productPickleJars,
    alt: 'Jars of traditional Indian pickles (representative image)',
    shortDescription:
      'Regional pickles inspired by the seasonal produce and spice blends of Indian households.',
  },
  {
    id: 'regional-specialities',
    name: 'Regional Specialities',
    category: 'Regional',
    status: 'coming-soon',
    image: images.heritageSouthThali,
    alt: 'A South Indian vegetarian thali (representative image)',
    shortDescription:
      'Recipes that belong to a place — drawn from the distinct food cultures of India.',
  },
  {
    id: 'seasonal-preserves',
    name: 'Seasonal Preserves',
    category: 'Preserves',
    status: 'coming-soon',
    image: images.storyPreserves,
    alt: 'Glass jars of preserves on a shelf (representative image)',
    shortDescription:
      'Capturing produce at its peak, guided by traditional preservation wisdom.',
  },
  {
    id: 'traditional-condiments',
    name: 'Traditional Condiments',
    category: 'Condiments',
    status: 'coming-soon',
    image: images.preserveJalapeno,
    alt: 'Preserved chillies in a jar (representative image)',
    shortDescription:
      'Everyday accompaniments that complete the Indian meal.',
  },
  {
    id: 'heritage-foods',
    name: 'Heritage Foods',
    category: 'Heritage',
    status: 'coming-soon',
    image: images.heritageDarjeel,
    alt: 'Indian spices, seeds and nuts (representative image)',
    shortDescription:
      'Time-honoured foods rediscovered for contemporary tables.',
  },
  {
    id: 'regional-indian-recipes',
    name: 'Regional Indian Recipes',
    category: 'Recipes',
    status: 'coming-soon',
    image: images.heritageMeal,
    alt: 'A traditional Indian thali (representative image)',
    shortDescription:
      "A growing collection inspired by India's many culinary traditions.",
  },
]

export const availabilityLabel = {
  available: 'Available Now',
  'coming-soon': 'Coming Soon',
}

export default products
