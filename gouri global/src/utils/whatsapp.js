import { business } from '../data/data';

// Build a WhatsApp deep-link from the business number.
export function waLink(message) {
  const number = business.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const defaultEnquiry =
  'Hello GOURI GLOBAL TRADE, I am interested in Gir Cow Ghee. Please share product details, pricing and export information.';