// Single source of truth for every editable piece of website content.
// Deliberately omitted: cable specifications, voltage ratings, materials,
// standards, certifications, export destinations, statistics and testimonials.
// Add such details here only when verified information is supplied.

const address =
  '303, C Building, Saidham Society, Dhanori Road, Dhanori, Near Marathi School, Vishrantwadi, Pune, Maharashtra, India.'

export const company = {
  name: 'Sujata Global Exim',
  tagline: 'Flexible Cable Trading for Global Markets',
  email: 'menaka.kerimani@gmail.com',
  phones: [
    { label: '+91 7066258070', href: 'tel:+917066258070' },
    { label: '+91 9156183008', href: 'tel:+919156183008' },
  ],
  whatsappNumber: '919156183008',
  whatsappMessage:
    'Hello Sujata Global Exim, I am interested in your flexible cable products. Please share more information about your products and trading options.',
  address,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`,

  // The supplied Google Drive assets require sign-in, so no logo file is bundled.
  // To use the real logo: save it as public/logo.png and set logo: '/logo.png'.
  // Until then the Logo component renders a simple text wordmark placeholder.
  logo: '',

  // Optional. When a backend URL is provided, the inquiry form POSTs JSON to it
  // and only shows a success message after a successful response.
  // With no endpoint, the form opens a prefilled email as a honest fallback.
  inquiryEndpoint: '',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Contact Us', href: '#contact' },
]

export const images = {
  hero: '/images/hero-cables.webp',
  heroSecondary: '/images/cable-spools.webp',
  about: '/images/cable-reel.webp',
  trade: '/images/cargo-ships.webp',
  inquiry: '/images/container-terminal.webp',
}

// Add further products here as the business supplies verified images/details.
export const products = [
  {
    id: 'flexible-cables',
    name: 'Flexible Cables',
    description:
      'Flexible cables designed for applications requiring flexibility and electrical connectivity. Contact our team to discuss your product requirements and available options.',
    image: '/images/flexible-cables.webp',
    alt: 'Stack of flexible electrical cables for international trading inquiries',
    tag: 'Our Trading Focus',
  },
]

export const whyChooseUs = [
  {
    title: 'International Business Focus',
    description: 'Focused on connecting with buyers and exploring overseas trading opportunities.',
    icon: 'globe',
  },
  {
    title: 'Product-Focused Trading',
    description: 'Dedicated business focus on flexible cable trading.',
    icon: 'package',
  },
  {
    title: 'Professional Communication',
    description: 'Clear communication and attention to buyer requirements.',
    icon: 'message',
  },
  {
    title: 'Long-Term Relationships',
    description: 'Committed to building lasting business relationships with buyers.',
    icon: 'handshake',
  },
]

export const productInterestOptions = [
  'Flexible Cables',
  'Other / Custom Requirement',
]
