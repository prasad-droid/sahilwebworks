/**
 * PRODUCT CATALOGUE
 * =================
 * This is the only file you need to edit to add, remove or update products.
 *
 * HOW TO ADD A NEW PRODUCT
 * ------------------------
 * Append an object to `products` below. Only `id`, `name` and `image` are
 * required - every other field falls back to the shared "Available on request"
 * string, so nothing is ever invented on the buyer's behalf.
 *
 * FIELD GUIDE
 * -----------
 * id            Unique slug. Used for anchors, forms and analytics.
 * name          Product name shown on cards, in the detail view and in the
 *               enquiry form.
 * category      Grouping shown as a small tag on the card.
 * image         Path to the product image in /public/images/products/.
 * imageAlt      Descriptive alt text (required for accessibility + SEO).
 * imageKind     'company'  -> a real photograph supplied by AARAMBH WORLDTRADE.
 *                              Badged "Product photo" on the card.
 *               'category' -> a stock image representing the product CATEGORY.
 *                              No card badge. The imageAlt text says it represents
 *                              the category, and the detail view labels it
 *                              "Product category visual", so it is never
 *                              presented as an actual product shot.
 * description   One or two sentences for the card.
 * details       Longer paragraph for the product detail panel.
 * specifications  Array of { label, value }. Leave empty -> "Available on request".
 * forms         Array of strings. Empty -> "Available on request".
 * varieties     Array of strings. Empty -> "Available on request".
 * packaging     Array of strings. Empty -> "Available on request".
 * moq           Minimum order quantity. Leave '' -> "Available on request".
 * bulkNote      Short bulk-supply line. Leave '' -> "Available on request".
 * featured      true pins the product to the front of the grid.
 * available     false greys the card out and hides the quote CTA.
 */

export const ON_REQUEST = 'Available on request';

export const products = [
  {
    id: 'dehydrated-onion-powder',
    name: 'Dehydrated Onion Powder',
    category: 'Dehydrated Ingredients',
    image: '/images/products/onion-powder.jpg',
    imageAlt:
      'Dehydrated onion powder supplied by AARAMBH WORLDTRADE, shown as a fine pale-yellow culinary powder',
    imageKind: 'company',
    description:
      'Bulk dehydrated onion powder sourced for food manufacturers, spice processors and ingredient distributors.',
    details:
      'AARAMBH WORLDTRADE supplies dehydrated onion powder for bulk and B2B requirements. Grades, moisture and specification sheets are shared against each buyer requirement.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Supplied in bulk quantities for B2B orders.',
    featured: true,
    available: true,
  },
  {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    category: 'Herbal Ingredients',
    image: '/images/products/moringa-powder.jpg',
    imageAlt:
      'Moringa powder supplied by AARAMBH WORLDTRADE, shown as a fine green herbal powder',
    imageKind: 'company',
    description:
      'Indian moringa powder available for bulk B2B requirements across supplement and food manufacturers.',
    details:
      'AARAMBH WORLDTRADE sources moringa powder for importers, wholesalers and food businesses. Colour, moisture and available forms are confirmed per enquiry.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Supplied in bulk quantities for B2B orders.',
    featured: true,
    available: true,
  },
  {
    id: 'tomato-powder',
    name: 'Tomato Powder',
    category: 'Dehydrated Ingredients',
    image: '/images/products/tomato-powder.jpg',
    imageAlt:
      'Dried tomato, the dehydrated source of tomato powder, used to represent the tomato powder product category',
    imageKind: 'category',
    description:
      'Tomato powder for food manufacturers, seasoning houses and bulk ingredient distributors.',
    details:
      'Tomato powder is sourced against buyer specification. Available forms, grades and packaging options are shared on request.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Supplied in bulk quantities for B2B orders.',
    available: true,
  },
  {
    id: 'garlic-powder',
    name: 'Garlic Powder',
    category: 'Dehydrated Ingredients',
    image: '/images/products/garlic-powder.jpg',
    imageAlt: 'A bowl of garlic powder, used to represent the garlic powder product category',
    imageKind: 'category',
    description:
      'Garlic powder for food manufacturers, seasoning houses and bulk ingredient distributors.',
    details:
      'Garlic powder is sourced against buyer specification. Available forms, grades and packaging options are shared on request.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Supplied in bulk quantities for B2B orders.',
    available: true,
  },
  {
    id: 'ginger-powder',
    name: 'Ginger Powder',
    category: 'Spices & Powders',
    image: '/images/products/ginger-powder.jpg',
    imageAlt: 'Ginger powder, used to represent the ginger powder product category',
    imageKind: 'category',
    description:
      'Ginger powder sourced for spice traders, food manufacturers and wholesale buyers.',
    details:
      'Ginger powder is coordinated with Indian suppliers and matched to the specification provided by the buyer. Grades and packing formats are confirmed per enquiry.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Supplied in bulk quantities for B2B orders.',
    available: true,
  },
  {
    id: 'coriander-powder',
    name: 'Coriander Powder',
    category: 'Spices & Powders',
    image: '/images/products/coriander-powder.jpg',
    imageAlt: 'Ground coriander spice, used to represent the coriander powder product category',
    imageKind: 'category',
    description:
      'Coriander powder sourced for spice traders, food manufacturers and wholesale buyers.',
    details:
      'Coriander powder is coordinated with Indian suppliers and matched to the specification provided by the buyer. Grades and packing formats are confirmed per enquiry.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Supplied in bulk quantities for B2B orders.',
    available: true,
  },
  {
    id: 'beetroot-powder',
    name: 'Beetroot Powder',
    category: 'Herbal Ingredients',
    image: '/images/products/beetroot-powder.jpg',
    imageAlt: 'Fresh beetroot, the source of beetroot powder, used to represent the beetroot powder product category',
    imageKind: 'category',
    description:
      'Beetroot powder for supplement, beverage and food manufacturing buyers.',
    details:
      'Beetroot powder is sourced in line with the buyer requirement. Available colour grades, forms and packaging are shared on request.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Supplied in bulk quantities for B2B orders.',
    available: true,
  },
  {
    id: 'banana-powder',
    name: 'Banana Powder',
    category: 'Fruit Powders',
    image: '/images/products/banana-powder.jpg',
    imageAlt: 'Banana powder, used to represent the banana powder product category',
    imageKind: 'category',
    description:
      'Banana powder for bakery, snack, beverage and instant-food manufacturers.',
    details:
      'Banana powder is coordinated with suppliers according to the buyer specification. Available forms and packaging options are confirmed per enquiry.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Supplied in bulk quantities for B2B orders.',
    available: true,
  },
  {
    id: 'spices',
    name: 'Spices',
    category: 'Whole & Ground Spices',
    image: '/images/products/spices.jpg',
    imageAlt: 'An array of Indian spices, used to represent the spices product category',
    imageKind: 'category',
    description:
      'Indian spices - whole and ground - for spice traders, wholesalers and food manufacturers.',
    details:
      'AARAMBH WORLDTRADE coordinates Indian spice requirements with suppliers, covering the product, quantity and specification required by the buyer.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Supplied in bulk quantities for B2B orders.',
    available: true,
  },
  {
    id: 'rice',
    name: 'Rice',
    category: 'Grains & Cereals',
    image: '/images/products/rice.jpg',
    imageAlt: 'Basmati rice grains used to represent the rice product category',
    imageKind: 'category',
    description:
      'Indian rice sourced for importers, distributors, supermarket chains and food businesses.',
    details:
      'Rice requirements are matched against grade, quantity and destination as provided by the buyer. Available varieties and packaging are shared on request.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Supplied in bulk quantities for B2B orders.',
    available: true,
  },
  {
    id: 'raisins',
    name: 'Raisins',
    category: 'Dried Fruits',
    image: '/images/products/raisins.jpg',
    imageAlt: 'Raisins used to represent the dried fruit product category',
    imageKind: 'category',
    description:
      'Raisins and dried fruit products for wholesalers, confectionery makers and retailers.',
    details:
      'Raisin requirements are coordinated with suppliers based on the buyer specification. Available varieties, grading and packing options are confirmed per enquiry.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Supplied in bulk quantities for B2B orders.',
    available: true,
  },
  {
    id: 'other-food-agro-products',
    name: 'Other Food & Agro Products',
    category: 'Multi-Product Sourcing',
    image: '/images/products/other-agro.jpg',
    imageAlt: 'Red lentils used to represent the wider food and agro product range',
    imageKind: 'category',
    description:
      'Additional Indian food and agro products sourced to order for bulk B2B buyers.',
    details:
      'AARAMBH WORLDTRADE is a multi-product exporter. Share the product, quantity and specification you need and we will confirm what can be sourced and quoted.',
    specifications: [],
    forms: [],
    varieties: [],
    packaging: [],
    moq: '',
    bulkNote: 'Multi-product sourcing on request.',
    available: true,
  },
];

/** Products the footer links to (the nine named categories). */
export const FOOTER_PRODUCT_IDS = [
  'dehydrated-onion-powder',
  'moringa-powder',
  'tomato-powder',
  'ginger-powder',
  'beetroot-powder',
  'banana-powder',
  'spices',
  'rice',
  'raisins',
];

export const getProductById = (id) => products.find((p) => p.id === id) || null;

export const featuredProducts = products.filter((p) => p.featured);

/** Normalises a field to an array, so the UI never has to branch. */
export const asList = (value) =>
  Array.isArray(value) ? value.filter(Boolean) : value ? [value] : [];

/** Always returns something truthful - never an invented specification. */
export const displayValue = (value) => {
  const list = asList(value);
  return list.length ? list : ON_REQUEST;
};
