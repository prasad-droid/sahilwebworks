import moringa from '../assets/images/moringa.jpg';
import turmeric from '../assets/images/turmeric.jpg';
import amla from '../assets/images/amla.jpg';
import ginger from '../assets/images/ginger.jpg';
import cinnamon from '../assets/images/cinnamon.jpg';
import banana from '../assets/images/banana.jpg';
import spinach from '../assets/images/spinach.jpg';
import greenApple from '../assets/images/green-apple.jpg';

export const WHATSAPP_NUMBER = '919225354180';
export const EMAIL = 'trade.vancorix@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/vancorix.global/';
export const DEVELOPER_URL = 'https://www.sahilwebworks.com/';

export const MAX_ORDER_QUANTITY = 20;

export const BULK_NOTE = 'B2B, bulk and custom MOQ options are negotiable.';

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/**
 * All SKUs are available for B2B, bulk and custom enquiries.
 * Only Moringa Powder has a retail pack and can be ordered directly with COD.
 */
export const PRODUCTS = [
  {
    id: '01',
    name: 'Moringa Powder',
    botanical: 'Moringa oleifera',
    status: 'available',
    image: moringa,
    imageAlt: 'Green moringa powder in a glass dish',
    retail: {
      fineness: '80 mesh',
      drying: 'Shade-dried',
      pack: '200 g pouch',
      price: 'Price on request',
    },
    bulk: BULK_NOTE,
  },
  {
    id: '02',
    name: 'Haldi (Turmeric)',
    botanical: 'Curcuma longa',
    status: 'available',
    image: turmeric,
    imageAlt: 'Golden turmeric powder on a wooden spoon',
    spec: '100–120 mesh · 20 kg PP pack',
  },
  {
    id: '03',
    name: 'Amla (Gooseberry)',
    botanical: 'Phyllanthus emblica',
    status: 'available',
    image: amla,
    imageAlt: 'Amla gooseberry powder in a ceramic bowl',
    spec: '80–100 mesh · 25 kg foil pack',
  },
  {
    id: '04',
    name: 'Ginger Powder',
    botanical: 'Zingiber officinale',
    status: 'available',
    image: ginger,
    imageAlt: 'Pale golden ginger powder on dark slate',
    spec: '100–120 mesh · 25 kg foil pack',
  },
  {
    id: '05',
    name: 'Cinnamon Powder',
    botanical: 'Cinnamomum verum',
    status: 'available',
    image: cinnamon,
    imageAlt: 'Cinnamon powder with whole quills',
    spec: '80–100 mesh · 20 kg PP pack',
  },
  {
    id: '06',
    name: 'Banana Powder',
    botanical: 'Musa sapientum',
    status: 'available',
    image: banana,
    imageAlt: 'Cream banana powder in a white dish',
    spec: '100–120 mesh · 25 kg foil pack',
  },
  {
    id: '07',
    name: 'Spinach Powder',
    botanical: 'Spinacia oleracea',
    status: 'available',
    image: spinach,
    imageAlt: 'Deep green spinach powder in a glass jar',
    spec: '100–120 mesh · 25 kg foil pack',
  },
  {
    id: '08',
    name: 'Green Apple Powder',
    botanical: 'Malus domestica',
    status: 'available',
    image: greenApple,
    imageAlt: 'Pale green apple powder with an apple slice',
    spec: '100–120 mesh · 20 kg PP pack',
  },
];

export const AVAILABLE_PRODUCTS = PRODUCTS.filter(
  (product) => product.status === 'available',
);

export const QUALITY_POINTS = [
  { value: '100%', label: 'Lab-tested per lot' },
  { value: 'FSSAI', label: '+ APEDA registration' },
  { value: 'Batch', label: 'Full traceability codes' },
  { value: 'Vacuum', label: 'Sealed pouch, shelf-stable' },
];

export const COUNTRIES = [
  'United Arab Emirates', 'Netherlands', 'China', 'United Kingdom', 'Germany',
  'Bangladesh', 'Saudi Arabia', 'Singapore', 'Australia', 'Italy', 'Nepal',
  'France', 'Hong Kong, China', 'South Africa', 'Brazil', 'Spain', 'Belgium',
  'Malaysia', 'Japan',
];

export const PROCESS_STEPS = [
  { id: '01', title: 'Sourcing', description: 'Contract farms, verified origin lots.' },
  { id: '02', title: 'Milling', description: 'Uniform mesh, controlled moisture.' },
  { id: '03', title: 'Testing', description: 'COA, microbial & heavy-metal screen.' },
  { id: '04', title: 'Seal & ship', description: 'Vacuum pouch, FCL/LCL dispatch.' },
];

export const quoteMessage = (productName) =>
  productName
    ? `Hello Vancorix International, I would like to request a quote for ${productName}. Please share the current price, packing options and delivery terms.`
    : 'Hello Vancorix International, I would like to request a quote. Please share your current product range, prices and delivery terms.';

export const buildOrderMessage = ({ product, quantity, name, phone, location, notes }) =>
  [
    'New direct order request — Vancorix International',
    `Product: ${product.name} (${product.retail.pack})`,
    `Spec: ${product.retail.fineness}, ${product.retail.drying.toLowerCase()}`,
    `Quantity: ${quantity} pouch(es)`,
    'Payment: Cash on Delivery (COD)',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Delivery location: ${location}`,
    `Notes: ${notes || '—'}`,
    'Please confirm the price, shipping charge and delivery availability before dispatch.',
  ].join('\n');
