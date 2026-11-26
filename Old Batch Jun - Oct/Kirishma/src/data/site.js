/**
 * Centralised business information.
 * Source of truth: information supplied by Krishima Foods Pvt Ltd.
 * Edit values here only — components never hardcode business details.
 */

export const site = {
  name: 'Krishima Foods Pvt Ltd',
  shortName: 'Krishima Foods',
  tagline: 'Nourished by tradition, homemade for you',
  businessType: 'Food Products Manufacturing',
  year: 2026,

  address: {
    line1: 'Shree A/211 Karnik Nagar',
    city: 'Solapur',
    region: 'Maharashtra',
    pin: '413006',
  },

  // Digits only, used for wa.me links
  whatsappNumber: '919130669990',
  phoneDisplay: '+91 9130669990',
  phoneHref: 'tel:+919130669990',
  email: 'info@krishima.com',
  website: 'www.krishima.com',
  websiteHref: 'http://www.krishima.com',
  mapsUrl: 'https://maps.app.goo.gl/8XCeUerqdxhJzuXS9?g_st=ac',
  mapsLabel: 'View Our Location',

  logo: '/images/logo.png',

  defaultWhatsappMessage:
    'Hello Krishima Foods, I would like to know more about your products.',

  seo: {
    title:
      'Krishima Foods Pvt Ltd | Traditional Masala, Mukhwas & Farali Flour',
    description:
      "Explore Krishima Foods Pvt Ltd's range of traditional masalas, mukhwas, farali flour and multigrain flour, available in multiple packaging options.",
    keywords:
      'Krishima Foods, masala, kala masala, mukhwas, farali flour, upvas peeth, multigrain flour, bhajani peeth, Solapur',
  },
}

/** Builds a WhatsApp deep link with a pre-filled message. */
export function whatsappLink(message = site.defaultWhatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/** Product-specific WhatsApp message, as supplied. */
export function productWhatsappMessage(productName) {
  return `Hello Krishima Foods, I am interested in ${productName}. Please share more details about this product.`
}

/** Full address as a single line, built from the structured address above. */
export const addressLine = `${site.address.line1}, ${site.address.city}, ${site.address.region} ${site.address.pin}`

/** Single-page navigation. Ids must match the section ids rendered in App.jsx. */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'process', label: 'Our Process' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]
