/**
 * Single source of truth for the business identity, contact details and
 * conversion links. Everything else in the site reads from here, so the
 * owner only ever needs to edit this file for contact changes.
 */

export const BUSINESS_NAME = 'AARAMBH WORLDTRADE';
export const BUSINESS_NAME_CAPS = 'AARAMBH WORLDTRADE';
export const TAGLINE = 'FROM INDIA TO THE WORLD';
export const BUSINESS_TYPE = 'Merchant Exporter | Multi-Product Exporter';
export const EYEBROW = 'INDIAN AGRICULTURAL & FOOD EXPORTS';

export const PHONE_DISPLAY = '+91 9421606630';
export const PHONE_TEL = '+919421606630';
export const PHONE_WA = '919421606630';

/**
 * Secondary contact number, shown as an additional direct-dial option in the
 * contact section and the footer. It is deliberately NOT the WhatsApp number,
 * so every quote CTA and the floating WhatsApp button keep using PHONE_WA.
 */
export const PHONE_2_DISPLAY = '+91 86003 16716';
export const PHONE_2_TEL = '+918600316716';

export const EMAIL = 'aarambhworldtrade@gmail.com';

export const ADDRESS = {
  line1: 'Soygaon, Tal- Malegaon',
  line2: 'Dist- Nashik, Maharashtra, India',
  postcode: '423203',
  country: 'India',
  get singleLine() {
    return `${this.line1}, ${this.line2} - ${this.postcode}`;
  },
};

export const MAP_URL = 'https://goo.gl/maps/qoteGGHe6cbye7ReA?g_st=ac';

const MAP_QUERY = encodeURIComponent(
  'Soygaon, Tal- Malegaon, Dist- Nashik, Maharashtra, India 423203'
);

/**
 * Keyless Google Maps embed (legacy `output=embed` endpoint), so the map
 * renders without an API key. The visible "View Location" button always points
 * at the location supplied by the business.
 */
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

export const LOGO = {
  // Transparent-background version. The original logo.png has an opaque white
  // matte baked in (89% of its pixels), so it is not used anywhere.
  // Regenerate with: node scripts/make-logo-transparent.mjs
  src: '/images/business/logo-transparent.png',
  width: 512,
  height: 512,
  alt: 'AARAMBH WORLDTRADE logo',
};

/** Photographs supplied by the business (as opposed to stock imagery). */
export const BUSINESS_IMAGES = {
  logo: LOGO.src,
  dehydratedOnionPowder: '/images/products/onion-powder.jpg',
  moringaPowder: '/images/products/moringa-powder.jpg',
};

export const SOCIAL = [];

const DEFAULT_WA_MESSAGE =
  'Hello AARAMBH WORLDTRADE, I am interested in sourcing Indian agricultural/food products. I would like to discuss my requirements.';

/** Build a wa.me deep link. `product` switches to the product-specific wording. */
export function whatsappLink(productName = '') {
  const message = productName
    ? WHATSAPP_PRODUCT_MESSAGE(productName)
    : DEFAULT_WA_MESSAGE;
  return `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGE = DEFAULT_WA_MESSAGE;

export const WHATSAPP_PRODUCT_MESSAGE = (productName) =>
  `Hello AARAMBH WORLDTRADE, I am interested in ${productName}. Please share product details, packaging options and quotation information.`;

/**
 * Build a wa.me deep link from a fully pre-written message, such as a completed
 * quote form. Use this whenever the text is already composed, instead of
 * whatsappLink(), which expects only a product name and builds its own wording.
 */
export function whatsappMessageLink(message) {
  const text = (message || '').trim() || DEFAULT_WA_MESSAGE;
  return `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(text)}`;
}
