import { images } from './images.js'

export const products = [
  {
    id: 'garlic',
    number: '01',
    title: 'Dehydrated Garlic Powder',
    enquiryValue: 'Dehydrated Garlic Powder',
    description:
      'A versatile dehydrated ingredient designed for food manufacturers, seasoning companies, sauces, soups, snacks and other B2B applications.',
    tags: ['Food', 'Seasoning', 'Sauces', 'Snacks'],
    image: images.garlic.src,
    alt: images.garlic.alt,
    cta: 'Enquire About Garlic Powder',
  },
  {
    id: 'onion',
    number: '02',
    title: 'Red Onion Powder',
    enquiryValue: 'Red Onion Powder',
    description:
      'A convenient dehydrated onion ingredient for food manufacturers, seasoning, soup, sauce and snack applications.',
    tags: ['Seasoning', 'Soups', 'Sauces', 'Snacks'],
    image: images.onion.src,
    alt: images.onion.alt,
    cta: 'Enquire About Onion Powder',
  },
  {
    id: 'moringa',
    number: '03',
    title: 'Moringa Powder',
    enquiryValue: 'Moringa Powder',
    description:
      'A natural plant-based ingredient suited to nutraceutical, wellness and herbal product applications.',
    tags: ['Wellness', 'Nutraceutical', 'Herbal'],
    image: images.moringa.src,
    alt: images.moringa.alt,
    cta: 'Enquire About Moringa',
  },
]