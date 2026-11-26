/**
 * CENTRAL PRODUCT DATA — the single source of truth for the whole website.
 *
 * To add a product ............ append an object to `products`
 * To remove a product ......... delete the object
 * To change packaging ......... edit the `packaging` array
 * To change an image .......... point `image` at a file in /public/images
 * To add a longer description . fill `longDescription` (optional)
 * To add specifications ....... add keys to `specs` (optional, { label, value })
 *
 * No component hardcodes product names, packaging or descriptions.
 * `imageAlt` doubles as the accessible description and SEO text, so keep it
 * descriptive. Where no product photograph was supplied, images are stock
 * photographs used as category / visual inspiration, not as the actual pack.
 */

export const categories = [
  {
    id: 'masala',
    name: 'Masala',
    tagline: 'Traditional blended masalas',
    description:
      'Traditional masala blends prepared for everyday cooking, including our fried kanda lasun kala masala.',
    image: '/images/kala-masala.jpg',
    imageAlt:
      'Traditional ground masala spices in bowls, photographed as a visual reference for the masala range',
  },
  {
    id: 'mukhwas',
    name: 'Mukhwas',
    tagline: 'After-meal mukhwas',
    description:
      'Mukhwas prepared with crushed Ayurvedic ingredients, offered in three convenient pack sizes.',
    image: '/images/mukhwas.jpg',
    imageAlt:
      'Mukhwas, a traditional Indian after-meal snack of crushed seeds and spices',
  },
  {
    id: 'farali-flour',
    name: 'Farali Flour',
    /* Section header. Set only when it should differ from `name`. */
    heading: 'Farali Flour Range',
    tagline: 'Upvas & fasting flours',
    description:
      'A dedicated farali flour range for upvas and fasting preparations, including thalepeeth, dosa, bhakari, rajgira, bhagar and shabudana peeth.',
    image: '/images/upvas-thalepeeth-peeth.jpg',
    imageAlt:
      'Traditional Maharashtrian thalipeeth prepared from farali flour, shown as a visual reference',
  },
  {
    id: 'multigrain-flour',
    name: 'Multigrain Flour',
    tagline: 'Bhajani peeth for everyday meals',
    description:
      'Multigrain bhajani flours for everyday cooking, including thalepeeth bhajani peeth and chakali bhajani peeth.',
    image: '/images/thalepeeth-bhajani-peeth.jpg',
    imageAlt:
      'Multigrain bhajani flour and the traditional thalipeeth it is used to prepare',
  },
]

export const products = [
  /* ------------------------------- MASALA ------------------------------- */
  {
    id: 'kala-masala',
    category: 'Masala',
    categoryId: 'masala',
    name: 'Kala Masala',
    description: 'Fried Kanda Lasun',
    longDescription:
      'Kala masala prepared with fried kanda lasun, a traditional savoury blend used across Maharashtrian and everyday cooking.',
    packaging: ['200 g', '500 g'],
    image: '/images/kala-masala.jpg',
    imageAlt:
      'Ground masala spices in small bowls, a stock visual reference for the Krishima Foods masala range',
    specs: [
      { label: 'Category', value: 'Masala' },
      { label: 'Preparation', value: 'Fried Kanda Lasun' },
    ],
  },
  {
    id: 'jain-kala-masala',
    category: 'Masala',
    categoryId: 'masala',
    name: 'Jain Kala Masala',
    description: '',
    longDescription:
      'A kala masala variant from the Krishima Foods masala range. Further details are available on request.',
    packaging: ['200 g', '500 g'],
    image: '/images/jain-kala-masala.jpg',
    imageAlt:
      'Assorted whole Indian spices, a stock visual reference for Jain Kala Masala',
    specs: [{ label: 'Category', value: 'Masala' }],
  },

  /* ------------------------------- MUKHWAS ------------------------------ */
  {
    id: 'testy-mukhwas',
    category: 'Mukhwas',
    categoryId: 'mukhwas',
    name: 'Testy Mukhwas',
    description: 'Mukhwas prepared with crushed Ayurvedic ingredients.',
    longDescription:
      'Mukhwas prepared with crushed Ayurvedic ingredients, offered in three pack sizes for an after-meal refreshment.',
    packaging: ['50 g', '100 g', '200 g'],
    image: '/images/mukhwas.jpg',
    imageAlt:
      'Mukhwas with crushed seeds and spices, a stock visual reference for Testy Mukhwas',
    specs: [
      { label: 'Category', value: 'Mukhwas' },
      { label: 'Preparation', value: 'Crushed Ayurvedic ingredients' },
    ],
  },

  /* ---------------------------- FARALI FLOUR --------------------------- */
  {
    id: 'upvas-thalepeeth-peeth',
    category: 'Farali Flour',
    categoryId: 'farali-flour',
    name: 'Upvas Thalepeeth Peeth',
    description: '',
    longDescription:
      'Farali flour for preparing upvas thalepeeth at home. Further details are available on request.',
    packaging: ['200 g', '500 g', '1 kg'],
    image: '/images/upvas-thalepeeth-peeth.jpg',
    imageAlt:
      'Traditional Maharashtrian thalipeeth, a stock visual reference for Upvas Thalepeeth Peeth',
    specs: [{ label: 'Category', value: 'Farali Flour' }],
  },
  {
    id: 'upvas-instant-dosa-peeth',
    category: 'Farali Flour',
    categoryId: 'farali-flour',
    name: 'Upvas Instant Dosa Peeth',
    description: '',
    longDescription:
      'Farali flour prepared for upvas dosa-style preparations. Further details are available on request.',
    packaging: ['200 g', '500 g', '1 kg'],
    image: '/images/upvas-instant-dosa-peeth.jpg',
    imageAlt:
      'Crisp dosa served with chutney and sambhar, a stock visual reference for Upvas Instant Dosa Peeth',
    specs: [{ label: 'Category', value: 'Farali Flour' }],
  },
  {
    id: 'upvas-bhakari-peeth',
    category: 'Farali Flour',
    categoryId: 'farali-flour',
    name: 'Upvas Bhakari Peeth',
    description: '',
    longDescription:
      'Farali flour for preparing upvas bhakari at home. Further details are available on request.',
    packaging: ['200 g', '500 g', '1 kg'],
    image: '/images/upvas-bhakari-peeth.jpg',
    imageAlt:
      'Traditional Maharashtrian bhakri, a stock visual reference for Upvas Bhakari Peeth',
    specs: [{ label: 'Category', value: 'Farali Flour' }],
  },
  {
    id: 'upvas-rajgira-peeth',
    category: 'Farali Flour',
    categoryId: 'farali-flour',
    name: 'Upvas Rajgira Peeth',
    description: '',
    longDescription:
      'A farali flour from the traditional upvas range. Ingredient details are available on request.',
    packaging: ['200 g', '500 g', '1 kg'],
    image: '/images/upvas-rajgira-peeth.jpg',
    imageAlt:
      'Rajgira grain used for traditional upvas preparations, a stock visual reference for Upvas Rajgira Peeth',
    specs: [{ label: 'Category', value: 'Farali Flour' }],
  },
  {
    id: 'upvas-bhagar-peeth',
    category: 'Farali Flour',
    categoryId: 'farali-flour',
    name: 'Upvas Bhagar Peeth',
    description: '',
    longDescription:
      'A farali flour from the traditional upvas range. Ingredient details are available on request.',
    packaging: ['200 g', '500 g', '1 kg'],
    image: '/images/upvas-bhagar-peeth.jpg',
    imageAlt:
      'Pulses and beans, a stock visual reference for Upvas Bhagar Peeth',
    specs: [{ label: 'Category', value: 'Farali Flour' }],
  },
  {
    id: 'upvas-shabudana-peeth',
    category: 'Farali Flour',
    categoryId: 'farali-flour',
    name: 'Upvas Shabudana Peeth',
    description: '',
    longDescription:
      'A farali flour from the traditional upvas range. Ingredient details are available on request.',
    packaging: ['200 g', '500 g', '1 kg'],
    image: '/images/upvas-shabudana-peeth.jpg',
    imageAlt:
      'Sago pearls, a stock visual reference for Upvas Shabudana Peeth',
    specs: [{ label: 'Category', value: 'Farali Flour' }],
  },

  /* --------------------------- MULTIGRAIN FLOUR ------------------------ */
  {
    id: 'thalepeeth-bhajani-peeth',
    category: 'Multigrain Flour',
    categoryId: 'multigrain-flour',
    name: 'Thalepeeth Bhajani Peeth',
    description: '',
    longDescription:
      'Multigrain bhajani flour used to prepare traditional thalepeeth. Further details are available on request.',
    packaging: ['200 g', '500 g', '1 kg'],
    image: '/images/thalepeeth-bhajani-peeth.jpg',
    imageAlt:
      'Thalipeeth made from bhajani multigrain flour, a stock visual reference for Thalepeeth Bhajani Peeth',
    specs: [{ label: 'Category', value: 'Multigrain Flour' }],
  },
  {
    id: 'chakali-bhajani-peeth',
    category: 'Multigrain Flour',
    categoryId: 'multigrain-flour',
    name: 'Chakali Bhajani Peeth',
    description: '',
    longDescription:
      'Multigrain bhajani flour used to prepare traditional chakali. Further details are available on request.',
    packaging: ['200 g', '500 g', '1 kg'],
    image: '/images/chakali-bhajani-peeth.jpg',
    imageAlt:
      'Traditional chakali rice crackers, a stock visual reference for Chakali Bhajani Peeth',
    specs: [{ label: 'Category', value: 'Multigrain Flour' }],
  },
]

/* ------------------------------ derived data --------------------------- */

/** Grams for a packaging label like "500 g" or "1 kg". */
function sizeInGrams(size) {
  const value = parseFloat(size)
  if (Number.isNaN(value)) return Number.POSITIVE_INFINITY
  return /kg/i.test(size) ? value * 1000 : value
}

/** Every packaging size that appears anywhere, smallest first. */
export const allPackagingSizes = [
  ...new Set(products.flatMap((product) => product.packaging)),
].sort((a, b) => sizeInGrams(a) - sizeInGrams(b))

/** Unique category names, ordered as supplied. */
export const categoryNames = [...new Set(products.map((p) => p.category))]

/** Products belonging to a category id ("masala", "farali-flour", ...). */
export function getProductsByCategory(categoryId) {
  return products.filter((product) => product.categoryId === categoryId)
}

/** Look up a single product by id. */
export function getProductById(id) {
  return products.find((product) => product.id === id) ?? null
}

/** Fallback used for the enquiry form dropdown. */
export const generalEnquiryOption = 'General enquiry'
