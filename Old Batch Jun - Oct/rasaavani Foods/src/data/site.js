export const site = {
  brand: 'RASAVAANI',
  tagline: 'The Taste of Tradition. Crafted for the World.',
  description:
    "Celebrating India's traditional recipes, authentic flavours and culinary heritage—thoughtfully brought to today's tables.",
  location: 'India',
  email: 'rasavaanifoods@gmail.com',
  phoneDisplay: '+91 96651 38552',
  phoneHref: '+919665138552',
  whatsapp: '919665138552',
}

export const whatsappMessages = {
  default:
    'Hello Rasavaani, I would like to know more about your traditional Indian food products.',
  b2b:
    'Hello Rasavaani, I am interested in discussing a retail, distribution or import partnership. Please share more information.',
}

export function whatsappLink(message = whatsappMessages.default) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'products', label: 'Our Products' },
  { id: 'philosophy', label: 'Our Philosophy' },
  { id: 'journey', label: 'Our Journey' },
  { id: 'partner', label: 'Partner With Us' },
  { id: 'contact', label: 'Contact' },
]

export const enquiryTypes = [
  'Product Enquiry',
  'Retail / Wholesale',
  'Import / Distribution',
  'Business Partnership',
  'General Enquiry',
]
