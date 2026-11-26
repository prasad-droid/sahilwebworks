// Central site configuration. Update these values when final assets/details are supplied.
export const site = {
  name: 'Sunscape Enterprises',
  tagline: 'Connecting Words, Creating Opportunities.',
  // Temporary brand mark: replace these files with the supplied logo when available.
  logo: '/brand/logo-mark.svg',
  logoLight: '/brand/logo-mark-light.svg',
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Services / Products' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact Us' },
  ],
  contact: {
    phone: '+91 7770007019',
    whatsapp: '+91 7770007019',
    email: 'sunscapeenterprises@gmail.com',
  },
  whatsapp: {
    number: '917770007019',
    defaultMessage:
      'Hello Sunscape Enterprises, I would like to know more about your products and business opportunities.',
  },
  images: {
    hero: '/images/hero-port.webp',
    about: '/images/about-meeting.webp',
    globalTrade: '/images/global-shipping.webp',
    partnership: '/images/partnership-team.webp',
    catalogue: '/images/containers.webp',
  },
}

export const inquiryTypes = [
  'Product Inquiry',
  'Bulk Order',
  'Buyer Inquiry',
  'Business Partnership',
  'General Inquiry',
  'Other',
]
