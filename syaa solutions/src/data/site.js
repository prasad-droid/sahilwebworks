/**
 * SYAA SOLUTION — editable site content
 * ---------------------------------------------------------------
 * All copy, product details, image paths and contact information
 * live in this file so the website can be updated without touching
 * component code. Product specifications are intentionally left as
 * editable placeholders; add confirmed details only when supplied
 * by the business owner.
 */

export const brand = {
  name: 'SYAA SOLUTION',
  tagline: 'The Core of Modern Trade',
  // The supplied Google Drive logo required sign-in and could not be
  // downloaded. Replace these two placeholder files with the real logo.
  logo: '/brand/logo-placeholder.svg',
  logoInverse: '/brand/logo-placeholder-inverse.svg',
};

export const contact = {
  phoneDisplay: '7038636260',
  phoneHref: 'tel:+917038636260',
  email: 'syaasolution@gmail.com',
  whatsappDisplay: '7038636360',
  whatsappNumber: '917038636360',
  whatsappHref:
    'https://wa.me/917038636360?text=Hello%20SYAA%20SOLUTION%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.',
  location: 'Pimple Gurav, Pune, Maharashtra, India',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Packaging Solutions', href: '#packaging' },
  { label: 'Banana Leaves', href: '#banana-leaves' },
  { label: 'Industries', href: '#industries' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
];

export const heroHighlights = [
  'Packaging Solutions',
  'Domestic Supply',
  'Fresh Banana Leaf Exports',
];

export const aboutHighlights = [
  {
    title: 'Packaging product portfolio',
    detail: 'Corrugated boxes, honeycomb paper and printed gift boxes.',
  },
  {
    title: 'Multiple industry applications',
    detail: 'Solutions for e-commerce, food, hospitality and manufacturing.',
  },
  {
    title: 'Domestic business supply',
    detail: 'Packaging materials for businesses across India.',
  },
  {
    title: 'Fresh agricultural product exports',
    detail: 'Fresh Indian banana leaves for international buyers.',
  },
  {
    title: 'Customer-focused approach',
    detail: 'Responsive communication and clear business discussions.',
  },
];

/**
 * Packaging products — keep specifications empty until the owner
 * confirms actual sizes, GSM, print options and pricing.
 */
export const packagingProducts = [
  {
    id: 'corrugated-boxes',
    index: '01',
    name: 'Corrugated Boxes',
    description:
      'Corrugated boxes for packaging, storage, transportation, and product protection across different business applications.',
    image: '/images/corrugated-boxes.jpg',
    imageAlt: 'Stack of plain corrugated cardboard boxes',
    cta: 'Enquire About Corrugated Boxes',
    specifications: 'Additional specifications can be added once confirmed.',
  },
  {
    id: 'honeycomb-paper',
    index: '02',
    name: 'Honeycomb Paper',
    description:
      'Honeycomb paper packaging material designed for protective wrapping, cushioning, and packaging applications.',
    image: '/images/honeycomb-paper.jpg',
    imageAlt: 'Expanded kraft honeycomb paper packaging material',
    cta: 'Enquire About Honeycomb Paper',
    specifications: 'Additional specifications can be added once confirmed.',
  },
  {
    id: 'printed-gift-boxes',
    index: '03',
    name: 'Printed Gift Boxes',
    description:
      'Printed gift boxes for attractive product presentation, gifting, and customized packaging requirements.',
    image: '/images/gift-boxes.jpg',
    imageAlt: 'Premium printed gift boxes arranged for product presentation',
    cta: 'Enquire About Printed Gift Boxes',
    specifications: 'Additional specifications can be added once confirmed.',
  },
];

export const bananaLeaves = {
  image: '/images/banana-leaves-bundle.jpg',
  imageAlt: 'Fresh green banana leaves arranged in a bundle',
  highlights: ['Fresh Banana Leaves', 'Export-Oriented Supply', 'Bulk Inquiry Support'],
  note: 'Product details are shared on request and are subject to confirmation.',
  cta: 'Enquire About Banana Leaves',
};

export const industries = [
  {
    name: 'E-Commerce',
    description: 'Packaging solutions for shipping and online business requirements.',
    image: '/images/industry-ecommerce.jpg',
    imageAlt: 'Parcel boxes prepared for e-commerce shipping',
  },
  {
    name: 'Bakeries',
    description: 'Packaging materials for bakery product presentation and distribution.',
    image: '/images/industry-bakery.jpg',
    imageAlt: 'Fresh bakery products ready for packaging',
  },
  {
    name: 'Industrial Manufacturers',
    description: 'Packaging products for storage, handling, and transportation requirements.',
    image: '/images/industry-manufacturing.jpg',
    imageAlt: 'Industrial manufacturing and handling environment',
  },
  {
    name: 'Hotels',
    description: 'Packaging solutions for hospitality-related business requirements.',
    image: '/images/industry-hotels.jpg',
    imageAlt: 'Elegant hotel hospitality setting',
  },
  {
    name: 'Restaurants',
    description: 'Packaging products for food-service and restaurant-related needs.',
    image: '/images/industry-restaurants.jpg',
    imageAlt: 'Restaurant food service setting',
  },
  {
    name: 'Retail & Gifting',
    description: 'Printed gift boxes and packaging for product presentation.',
    image: '/images/industry-retail.jpg',
    imageAlt: 'Retail products arranged for gifting and presentation',
  },
];

export const whyChooseUs = [
  {
    title: 'Multiple Packaging Solutions',
    description:
      'A portfolio covering corrugated boxes, honeycomb paper, and printed gift boxes.',
    icon: 'package',
  },
  {
    title: 'Multi-Industry Focus',
    description:
      'Serving packaging requirements across e-commerce, bakeries, manufacturing, hospitality, and other sectors.',
    icon: 'layers',
  },
  {
    title: 'Domestic & International Trade',
    description:
      'Business activities spanning domestic packaging supply and fresh banana leaf exports.',
    icon: 'globe',
  },
  {
    title: 'Customer-Focused Communication',
    description:
      'Understanding buyer requirements and supporting clear business discussions.',
    icon: 'messages',
  },
];

/** Portfolio items are grouped into two clearly separate categories. */
export const portfolio = [
  {
    category: 'Packaging Portfolio',
    categoryId: 'packaging-portfolio',
    items: [
      {
        title: 'Corrugated Boxes',
        caption: 'Protective packaging and transport solutions.',
        image: '/images/corrugated-gallery.jpg',
        imageAlt: 'Corrugated cardboard boxes in a warehouse setting',
      },
      {
        title: 'Honeycomb Paper',
        caption: 'Protective wrapping and cushioning material.',
        image: '/images/honeycomb-detail.jpg',
        imageAlt: 'Close-up texture of expanded honeycomb kraft paper',
      },
      {
        title: 'Printed Gift Boxes',
        caption: 'Presentations designed for gifting and retail.',
        image: '/images/gift-boxes-gallery.jpg',
        imageAlt: 'Printed gift boxes arranged for product presentation',
      },
    ],
  },
  {
    category: 'Agricultural Export Portfolio',
    categoryId: 'agricultural-export-portfolio',
    items: [
      {
        title: 'Fresh Banana Leaves',
        caption: 'Fresh Indian banana leaves for export inquiries.',
        image: '/images/banana-leaves-gallery.jpg',
        imageAlt: 'Fresh green banana leaves with natural texture',
      },
    ],
  },
];

export const productOptions = [
  'Corrugated Boxes',
  'Honeycomb Paper',
  'Printed Gift Boxes',
  'Fresh Banana Leaves',
  'Other',
];

export const businessTypeOptions = [
  'E-Commerce',
  'Bakery',
  'Industrial Manufacturer',
  'Hotel',
  'Restaurant',
  'Retail & Distribution',
  'Other',
];

export const testimonialPlaceholder =
  'Customer experiences will be featured here once genuine feedback has been provided.';
