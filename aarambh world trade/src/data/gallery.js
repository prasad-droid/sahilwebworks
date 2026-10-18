/**
 * GALLERY ITEMS
 * =============
 * Two clearly separated kinds of image are used:
 *
 *   source: 'company'  - a photograph supplied by AARAMBH WORLDTRADE.
 *   source: 'stock'    - openly-licensed stock photography representing a
 *                        product CATEGORY or an industry activity.
 *
 * Stock items carry a visible caption so they are never mistaken for
 * photographs of actual AARAMBH WORLDTRADE products.
 */

export const galleryItems = [
  {
    id: 'onion-powder',
    src: '/images/products/onion-powder.jpg',
    alt: 'Dehydrated onion powder supplied by AARAMBH WORLDTRADE',
    caption: 'Dehydrated Onion Powder',
    credit: 'Photograph supplied by AARAMBH WORLDTRADE',
    source: 'company',
    span: 'tall',
  },
  {
    id: 'moringa-powder',
    src: '/images/products/moringa-powder.jpg',
    alt: 'Moringa powder supplied by AARAMBH WORLDTRADE',
    caption: 'Moringa Powder',
    credit: 'Photograph supplied by AARAMBH WORLDTRADE',
    source: 'company',
    span: 'wide',
  },
  {
    id: 'g1',
    src: '/images/gallery/g1.jpg',
    alt: 'Dried chilli and paprika displayed for sale at a spice market',
    caption: 'Dried Chilli & Paprika',
    credit: 'Product category visual',
    source: 'stock',
    span: 'tall',
  },
  {
    id: 'g2',
    src: '/images/gallery/g2.jpg',
    alt: 'Fresh turmeric roots',
    caption: 'Turmeric Root',
    credit: 'Product category visual',
    source: 'stock',
    span: 'wide',
  },
  {
    id: 'g4',
    src: '/images/gallery/g4.jpg',
    alt: 'A field of wheat growing towards harvest',
    caption: 'Wheat Growing',
    credit: 'Agricultural reference',
    source: 'stock',
    span: 'standard',
  },
  {
    id: 'g9',
    src: '/images/gallery/g9.jpg',
    alt: 'A busy vegetable market in India with produce stacked on stalls',
    caption: 'Indian Vegetable Market',
    credit: 'Agricultural reference',
    source: 'stock',
    span: 'standard',
  },
  {
    id: 'g12',
    src: '/images/gallery/g12.jpg',
    alt: 'A green paddy plantation stretching across the landscape',
    caption: 'Paddy Plantation',
    credit: 'Agricultural reference',
    source: 'stock',
    span: 'wide',
  },
  {
    id: 'g6',
    src: '/images/gallery/g6.jpg',
    alt: 'Black peppercorns, a widely traded Indian spice',
    caption: 'Black Pepper',
    credit: 'Product category visual',
    source: 'stock',
    span: 'tall',
  },
  {
    id: 'g5',
    src: '/images/gallery/g5.jpg',
    alt: 'Green cardamom pods, a major Indian spice export',
    caption: 'Cardamom',
    credit: 'Product category visual',
    source: 'stock',
    span: 'standard',
  },
  {
    id: 'g3',
    src: '/images/gallery/g3.jpg',
    alt: 'Mustard seeds and mustard oil at a market in Kolkata',
    caption: 'Mustard Seeds',
    credit: 'Product category visual',
    source: 'stock',
    span: 'standard',
  },
  {
    id: 'g11',
    src: '/images/gallery/g11.jpg',
    alt: 'Sacks of grain stacked inside a traditional rice mill',
    caption: 'Bulk Grain Sacks',
    credit: 'Packaging reference',
    source: 'stock',
    span: 'wide',
  },
  {
    id: 'g7',
    src: '/images/gallery/g7.jpg',
    alt: 'Bananas, the raw material for banana powder',
    caption: 'Banana',
    credit: 'Product category visual',
    source: 'stock',
    span: 'standard',
  },
  {
    id: 'g10',
    src: '/images/gallery/g10.jpg',
    alt: 'Unripened cashew nuts on the tree',
    caption: 'Cashew & Agro Products',
    credit: 'Product category visual',
    source: 'stock',
    span: 'standard',
  },
  {
    id: 'g8',
    src: '/images/gallery/g8.jpg',
    alt: 'A mustard field in India during harvest',
    caption: 'Mustard Cultivation',
    credit: 'Agricultural reference',
    source: 'stock',
    span: 'wide',
  },
];

/** Shown in the About section. */
export const aboutImages = {
  primary: {
    src: '/images/products/onion-powder.jpg',
    alt: 'Dehydrated onion powder supplied by AARAMBH WORLDTRADE',
    caption: 'Dehydrated onion powder',
    credit: 'Product photo',
  },
  secondary: {
    src: '/images/products/moringa-powder.jpg',
    alt: 'Moringa powder supplied by AARAMBH WORLDTRADE',
    caption: 'Moringa powder',
    credit: 'Product photo',
  },
};

/** Shown in the Sourcing Process section. */
export const processImages = {
  sourcing: {
    src: '/images/business/packaging.jpg',
    alt: 'Stacked sacks ready for dispatch',
    caption: 'Packaging coordination',
    credit: 'Industry reference',
  },
  logistics: {
    src: '/images/business/loading.jpg',
    alt: 'A container ship being loaded at a port terminal',
    caption: 'Logistics coordination',
    credit: 'Industry reference',
  },
  bulk: {
    src: '/images/business/warehouse-bulk.jpg',
    alt: 'Bulk grain sacks stored in a mill',
    caption: 'Bulk quantity handling',
    credit: 'Industry reference',
  },
  global: {
    src: '/images/stock/global-shipping.jpg',
    alt: 'A container ship passing the Golden Gate on an international sea route',
    caption: 'International freight',
    credit: 'Industry reference',
  },
};

/** Hero collage. */
export const heroImages = {
  primary: {
    src: '/images/stock/hero-spices.jpg',
    alt: 'Shop selling spices at Khari Baoli, Old Delhi',
    caption: 'Product category visual',
  },
  secondary: {
    src: '/images/stock/hero-trade.jpg',
    alt: 'A container ship at sea carrying international freight',
    caption: 'Industry reference',
  },
};
