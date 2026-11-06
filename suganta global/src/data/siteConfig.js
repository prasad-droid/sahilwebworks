const fallbackWhatsAppNumber = '917028175779';

/**
 * The supplied WhatsApp number is shown without a country code.
 * India (+91) is used as a working default — confirm this with the
 * business owner before launch, or set VITE_WHATSAPP_NUMBER in .env.
 */
export const siteConfig = {
  name: 'SUGANTA GLOBAL',
  tagline: 'Connecting Market, Delivering Trust',
  description:
    'SUGANTA GLOBAL connects international buyers with Indian agricultural products, including rice, tea, and flowers, with a focus on export opportunities in the UAE and Iraq.',
  phone: {
    display: '7028175779',
    international: '+917028175779',
    href: 'tel:+917028175779',
  },
  email: 'sugantaglobal@gmail.com',
  whatsapp: {
    display: '7028175779',
    number: (import.meta.env.VITE_WHATSAPP_NUMBER || fallbackWhatsAppNumber).replace(/\D/g, ''),
  },
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
  markets: ['United Arab Emirates', 'Iraq'],
  assets: {
    /**
     * The Google Drive logo could not be accessed without a Google sign-in.
     * This is a replaceable brand-mark placeholder. Save the supplied logo
     * and update this path (or replace /public/images/logo-mark.svg).
     */
    logoMark: '/images/logo-mark.svg',
    /**
     * Replace this stock placeholder with the business-provided image.
     * Suggested final path: /images/business-photo.webp
     */
    businessImage: '/images/about-farmer.webp',
  },
};

export const defaultWhatsAppMessage =
  'Hello SUGANTA GLOBAL, I would like to discuss an agricultural sourcing requirement.';

export function buildWhatsAppUrl(message = defaultWhatsAppMessage) {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function buildInquiryWhatsAppUrl(form) {
  const lines = [
    'Hello SUGANTA GLOBAL, I would like to make an export inquiry.',
    form.fullName ? `Name: ${form.fullName}` : '',
    form.company ? `Company: ${form.company}` : '',
    form.email ? `Email: ${form.email}` : '',
    form.phone ? `Phone: ${form.phone}` : '',
    form.country ? `Country: ${form.country}` : '',
    form.product ? `Product interested in: ${form.product}` : '',
    form.quantity ? `Required quantity: ${form.quantity}` : '',
    form.message ? `Message: ${form.message}` : '',
  ].filter(Boolean);

  return buildWhatsAppUrl(lines.join('\n'));
}
