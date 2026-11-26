/**
 * Editorial content for the non-product sections.
 * Kept out of JSX so copy can be edited without touching component logic.
 *
 * Content rule: only information supplied by Krishima Foods Pvt Ltd is stated
 * as fact. Stock photography is used as visual inspiration, never presented as
 * an actual Krishima Foods product.
 */

import { site } from './site.js'

/* ------------------------------- hero ---------------------------------- */

export const heroContent = {
  eyebrow: 'Traditional Indian Food Products',
  title: 'Nourished by Tradition, Homemade for You',
  text: 'Traditional flavours and thoughtfully prepared food products made for everyday enjoyment, wellness and fasting needs.',
  image: '/images/hero-main.jpg',
  imageAlt:
    'Herbs, spices and ingredients arranged on a board in a traditional Indian kitchen',
  primaryCta: { label: 'Explore Our Products', target: 'products' },
  secondaryCta: { label: 'Get in Touch', target: 'contact' },
}

export const heroHighlights = [
  { id: 'traditional-recipes', title: 'Traditional Recipes', text: 'Masalas and flours rooted in familiar Indian kitchen traditions.' },
  { id: 'quality-ingredients', title: 'Quality Ingredients', text: 'Thoughtfully selected ingredients for every preparation.' },
  { id: 'product-varieties', title: 'Multiple Product Varieties', text: 'Masala, mukhwas, farali flour and multigrain flour.' },
  { id: 'everyday-fasting', title: 'Everyday & Fasting Options', text: 'A dedicated farali range alongside everyday cooking staples.' },
]

/* ------------------------------- about --------------------------------- */

export const aboutContent = {
  label: 'About Krishima Foods',
  heading: 'Traditional Flavours, Made for Today',
  paragraphs: [
    'Krishima Foods Pvt Ltd is a food products manufacturing company based in Solapur, Maharashtra. We prepare traditional food products for everyday kitchens, wellness preferences and fasting needs.',
    'Our range includes masalas, mukhwas, farali flours and multigrain flours — from a fried kanda lasun kala masala to a full farali peeth range for upvas preparations.',
  ],
  points: [
    'Masalas for everyday cooking',
    'Mukhwas prepared with crushed Ayurvedic ingredients',
    'A complete farali flour range for upvas',
    'Multigrain bhajani flours for thalepeeth and chakali',
  ],
  image: '/images/about-main.jpg',
  imageAlt: 'Fresh spices and ingredients laid out for traditional Indian cooking',
  imageNote: 'Visual reference imagery',
  secondaryImage: '/images/kanda-lasun.jpg',
  secondaryImageAlt: 'Garlic bulbs, a traditional ingredient used in kanda lasun preparations',
}

/* ------------------------- products portfolio -------------------------- */

export const productsContent = {
  label: 'Our Products',
  heading: 'A Variety of Traditional Favourites',
  text: 'Explore our range of traditional masalas, mukhwas, farali flours and multigrain flours.',
  note: 'Product photography shown is illustrative. Product images can be added per product in src/data/products.js.',
}

/* ------------------------- making process ------------------------------ */

export const makingProcess = {
  label: 'Making Process',
  heading: 'From Traditional Ingredients to Your Table',
  text: 'A simple look at how each Krishima Foods product moves from ingredient to finished pack.',
  steps: [
    {
      id: 'ingredient-selection',
      number: '01',
      title: 'Ingredient Selection',
      text: 'The selected ingredients used for the product are chosen and kept ready for preparation.',
      image: '/images/spices-colorful.jpg',
      imageAlt: 'A colourful assortment of whole spices used in traditional masalas',
    },
    {
      id: 'preparation',
      number: '02',
      title: 'Preparation',
      text: 'Traditional ingredients are prepared according to the product.',
      image: '/images/kanda-lasun.jpg',
      imageAlt: 'Garlic bulbs being prepared, illustrating kanda lasun used in kala masala',
    },
    {
      id: 'processing',
      number: '03',
      title: 'Processing',
      text: 'Ingredients are processed into the respective masala, mukhwas or flour product.',
      image: '/images/gallery/flour.jpg',
      imageAlt: 'Flour being prepared, illustrating the processing of masala, mukhwas and flour products',
    },
    {
      id: 'packaging',
      number: '04',
      title: 'Packaging',
      text: 'Products are prepared in the available packaging sizes.',
      image: '/images/spices-indian-kitchen.jpg',
      imageAlt: 'Spices arranged in an Indian kitchen, illustrating finished product packaging',
    },
    {
      id: 'ready-to-enjoy',
      number: '05',
      title: 'Ready to Enjoy',
      text: 'Finished products are ready for customers.',
      image: '/images/mukhwas-market.jpg',
      imageAlt: 'Mukhwas served at an Indian market stall, illustrating a finished product',
    },
  ],
}

/* ---------------------------- packaging -------------------------------- */

export const packagingContent = {
  label: 'Packaging',
  heading: 'Packaging Options',
  text: 'Our products are available across the following pack sizes. Availability may vary by product.',
  note: 'Pack sizes below are shown as a size visualisation, not as final pack artwork.',
  visualNote: 'Design visualisation — not final packaging artwork',
}

/* ---------------------- tradition & modern living ---------------------- */

export const traditionContent = {
  label: 'Everyday Use',
  heading: 'Tradition That Fits Your Everyday Life',
  text: 'The same traditional foods, prepared for the way families cook today.',
  image: '/images/gallery/jhunka-bhakri.jpg',
  imageAlt: 'Traditional Maharashtrian bhakri prepared for an everyday meal',
  items: [
    {
      id: 'everyday-cooking',
      title: 'Everyday Cooking',
      text: 'Traditional masalas and flours for everyday food preparation.',
    },
    {
      id: 'fasting-upvas',
      title: 'Fasting & Upvas',
      text: 'A dedicated range of farali flour products.',
    },
    {
      id: 'after-meal',
      title: 'After-Meal Refreshment',
      text: 'Mukhwas prepared with crushed ingredients.',
    },
  ],
}

/* ------------------------------ why us --------------------------------- */

export const whyChooseUs = {
  label: 'Why Krishima Foods',
  heading: 'Why Explore Krishima Foods?',
  items: [
    {
      id: 'traditional-range',
      title: 'Traditional Product Range',
      text: 'A selection of traditional Indian food products.',
    },
    {
      id: 'variety',
      title: 'Variety for Different Needs',
      text: 'Masalas, mukhwas, farali flours and multigrain flours.',
    },
    {
      id: 'packaging',
      title: 'Multiple Packaging Options',
      text: 'Products available in multiple specified pack sizes.',
    },
    {
      id: 'everyday',
      title: 'Made for Everyday Use',
      text: 'Products designed around everyday cooking and traditional food preferences.',
    },
  ],
}

/* --------------------------- target audience --------------------------- */

export const audienceContent = {
  label: 'Who We Serve',
  heading: 'Made for Different Food Traditions',
  items: [
    {
      id: 'homemakers',
      title: 'Homemakers',
      text: 'Traditional products for everyday cooking.',
    },
    {
      id: 'wellness',
      title: 'Health & Wellness Enthusiasts',
      text: 'A variety of traditional food products and ingredient-based options.',
    },
    {
      id: 'fasters',
      title: 'Traditional Fasters',
      text: 'Farali flour options for upvas and fasting preparations.',
    },
  ],
}

/* ------------------------------ contact -------------------------------- */

export const contactContent = {
  label: 'Contact',
  heading: "We'd Love to Hear From You",
  text: 'Have a question about our products or want to know more about our range? Get in touch with Krishima Foods Pvt Ltd.',
  formNote:
    'This form is not connected to an email service yet. Please use WhatsApp, phone or email and we will respond.',
  whatsappCta: 'Chat on WhatsApp',
  emailCta: 'Email Us',
  callCta: 'Call Us',
}

/* ------------------------------ footer --------------------------------- */

export const footerContent = {
  about:
    'Krishima Foods Pvt Ltd is a food products manufacturing company in Solapur, Maharashtra, preparing traditional masalas, mukhwas, farali flours and multigrain flours.',
  quickLinksTitle: 'Quick Links',
  categoriesTitle: 'Product Categories',
  contactTitle: 'Contact',
  copyright: `© ${site.year} Krishima Foods Pvt Ltd. All Rights Reserved.`,
}
