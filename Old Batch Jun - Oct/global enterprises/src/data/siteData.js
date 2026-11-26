/**
 * GLOBAL ENTERPRISES — Central content configuration
 * ---------------------------------------------------
 * This is the single source of truth for editable website content.
 * Replace the placeholder values below with the final approved
 * company profile, product catalogue and business information.
 *
 * Anything marked with `isPlaceholder: true` is demo content that
 * should be replaced before the site goes live.
 */

export const company = {
  name: 'GLOBAL ENTERPRISES',
  tagline: 'Engineering Excellence, Globally Delivered.',
  businessActivity: 'Supplying of engineering goods',
  industry: 'Engineering Industries',
  email: 'yasir.globalent@gmail.com',
  phone: '9082076026',
  phoneIntl: '+919082076026',
  whatsapp: '919082076026',
  address: {
    lines: ['52/424, Motilal Nagar-1,', 'Goregaon West,', 'Mumbai - 400104,', 'Maharashtra, India.'],
  },
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Services / Products' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'testimonials', label: 'Testimonials' },
]

/**
 * Product categories — PLACEHOLDER.
 * The actual categories, images and descriptions will be supplied later.
 * Just edit this array; the ProductCategories component renders it automatically.
 */
export const productCategories = [
  {
    id: 'category-1',
    name: 'Product Category One',
    description:
      'Placeholder description. Replace with the products belonging to this category and their key applications.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true,
  },
  {
    id: 'category-2',
    name: 'Product Category Two',
    description:
      'Placeholder description. Add a concise summary of the range supplied under this category.',
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true,
  },
  {
    id: 'category-3',
    name: 'Product Category Three',
    description:
      'Placeholder description. Describe specifications, materials or variants available on enquiry.',
    image:
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true,
  },
  {
    id: 'category-4',
    name: 'Product Category Four',
    description:
      'Placeholder description. Use this space to explain how the category supports industrial buyers.',
    image:
      'https://images.unsplash.com/photo-1487875961445-47a00398c267?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true,
  },
  {
    id: 'category-5',
    name: 'Product Category Five',
    description:
      'Placeholder description. Note the industries or applications this category is suited to.',
    image:
      'https://images.unsplash.com/photo-1591120843276-2a34ab5c05a9?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true,
  },
  {
    id: 'category-6',
    name: 'Product Category Six',
    description:
      'Placeholder description. Replace with the final category name, image and supporting copy.',
    image:
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80',
    isPlaceholder: true,
  },
]

/**
 * Featured products — PLACEHOLDER.
 * Populate from a data array or API later. Each entry supports:
 * name, category, image, description, specs[] and an enquiry CTA.
 */
export const featuredProducts = [
  {
    id: 'product-1',
    name: 'Featured Product Name',
    category: 'Product Category One',
    image:
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
    description:
      'Placeholder description for a featured engineering product. Add the material, size range or application details here.',
    specs: ['Specification placeholder', 'Specification placeholder'],
    isPlaceholder: true,
  },
  {
    id: 'product-2',
    name: 'Featured Product Name',
    category: 'Product Category Two',
    image:
      'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80',
    description:
      'Placeholder description. Summarise the product and the industrial requirement it addresses.',
    specs: ['Specification placeholder', 'Specification placeholder'],
    isPlaceholder: true,
  },
  {
    id: 'product-3',
    name: 'Featured Product Name',
    category: 'Product Category Three',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    description:
      'Placeholder description. Note technical specifications, materials and variants where available.',
    specs: ['Specification placeholder', 'Specification placeholder'],
    isPlaceholder: true,
  },
  {
    id: 'product-4',
    name: 'Featured Product Name',
    category: 'Product Category Four',
    image:
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80',
    description:
      'Placeholder description. Describe how customers can enquire about this product and its availability.',
    specs: ['Specification placeholder', 'Specification placeholder'],
    isPlaceholder: true,
  },
]

/**
 * Why choose us — SUGGESTED MESSAGING THEMES.
 * Confirm or adjust these once the business details are provided.
 */
export const whyChooseUs = [
  {
    id: 'why-1',
    icon: 'supply',
    title: 'Engineering Product Supply',
    text: 'A focused approach to supplying engineering goods that meet defined industrial requirements.',
  },
  {
    id: 'why-2',
    icon: 'support',
    title: 'Customer-Focused Service',
    text: 'We work around your requirement, offering coordination and clear communication at every step.',
  },
  {
    id: 'why-3',
    icon: 'response',
    title: 'Responsive Enquiry Support',
    text: 'Enquiries are handled directly so you can discuss products, specifications and availability.',
  },
  {
    id: 'why-4',
    icon: 'coordination',
    title: 'Product Requirement Coordination',
    text: 'Share your product and quantity requirements and we help coordinate the suitable supply.',
  },
  {
    id: 'why-5',
    icon: 'communication',
    title: 'Professional Communication',
    text: 'Clear, business-ready communication suited to procurement and engineering teams.',
  },
  {
    id: 'why-6',
    icon: 'relationship',
    title: 'Long-Term Business Relationships',
    text: 'Building dependable supplier relationships based on trust and consistent service.',
  },
]

/**
 * Industries served — EXAMPLES ONLY.
 * Keep editable until the business confirms its actual target industries.
 */
export const industriesServed = [
  {
    id: 'ind-1',
    icon: 'factory',
    title: 'Industrial Manufacturing',
    text: 'Placeholder — describe how engineering goods support manufacturing operations.',
    isPlaceholder: true,
  },
  {
    id: 'ind-2',
    icon: 'weld',
    title: 'Engineering & Fabrication',
    text: 'Placeholder — describe the requirements served across fabrication work.',
    isPlaceholder: true,
  },
  {
    id: 'ind-3',
    icon: 'maintenance',
    title: 'Maintenance & Operations',
    text: 'Placeholder — describe support for ongoing maintenance and operations.',
    isPlaceholder: true,
  },
  {
    id: 'ind-4',
    icon: 'procurement',
    title: 'Industrial Procurement',
    text: 'Placeholder — describe how the business serves procurement teams.',
    isPlaceholder: true,
  },
  {
    id: 'ind-5',
    icon: 'commercial',
    title: 'Commercial & Industrial Supply',
    text: 'Placeholder — describe commercial and industrial supply coverage.',
    isPlaceholder: true,
  },
]

/**
 * Our values — editable content blocks.
 * Update wording when the official values and philosophy are supplied.
 */
export const ourValues = [
  { id: 'val-1', icon: 'quality', title: 'Quality', text: 'Placeholder — describe the confirmed quality approach.' },
  { id: 'val-2', icon: 'reliability', title: 'Reliability', text: 'Placeholder — describe what reliability means to the business.' },
  { id: 'val-3', icon: 'customer', title: 'Customer Focus', text: 'Placeholder — describe the commitment to customers.' },
  { id: 'val-4', icon: 'transparency', title: 'Transparency', text: 'Placeholder — describe the approach to open communication.' },
  { id: 'val-5', icon: 'service', title: 'Professional Service', text: 'Placeholder — describe the standard of service provided.' },
  { id: 'val-6', icon: 'relationship', title: 'Long-Term Relationships', text: 'Placeholder — describe the value placed on lasting relationships.' },
]

/**
 * Testimonials — PLACEHOLDER.
 * Keep `enabled: false` until genuine, verified customer feedback is supplied.
 * Do NOT publish invented names, quotes or ratings.
 */
export const testimonials = {
  enabled: true, // renders clearly-marked placeholders; set to false to hide the section entirely
  items: [
    {
      id: 'test-1',
      quote: 'Placeholder testimonial. Replace with genuine customer feedback once it is available.',
      name: '[Customer Name]',
      role: '[Designation]',
      company: '[Company Name]',
      isPlaceholder: true,
    },
    {
      id: 'test-2',
      quote: 'Placeholder testimonial. Do not publish invented endorsements — replace with verified feedback.',
      name: '[Customer Name]',
      role: '[Designation]',
      company: '[Company Name]',
      isPlaceholder: true,
    },
    {
      id: 'test-3',
      quote: 'Placeholder testimonial. This space is reserved for authentic customer reviews.',
      name: '[Customer Name]',
      role: '[Designation]',
      company: '[Company Name]',
      isPlaceholder: true,
    },
  ],
}

/**
 * About Us — EDITABLE PLACEHOLDER COPY.
 * Replace each block with the final approved company profile.
 */
export const aboutContent = {
  intro:
    'Placeholder introduction. GLOBAL ENTERPRISES is an engineering goods supply business. Replace this paragraph with the approved company introduction once the final profile is supplied.',
  blocks: [
    {
      id: 'bg',
      title: 'Business Background',
      text: 'Placeholder — add the confirmed business background here, without unsupported claims.',
      isPlaceholder: true,
    },
    {
      id: 'sourcing',
      title: 'Product Sourcing & Supply',
      text: 'Placeholder — describe the product sourcing and supply capabilities.',
      isPlaceholder: true,
    },
    {
      id: 'quality',
      title: 'Quality & Service Approach',
      text: 'Placeholder — describe the quality and service approach once confirmed.',
      isPlaceholder: true,
    },
    {
      id: 'vision',
      title: 'Our Vision',
      text: 'Placeholder — add the company vision statement.',
      isPlaceholder: true,
    },
    {
      id: 'mission',
      title: 'Our Mission',
      text: 'Placeholder — add the company mission statement.',
      isPlaceholder: true,
    },
  ],
}

export const formEndpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT || ''

export const socialLinks = {
  whatsapp: `https://wa.me/${company.whatsapp}`,
}
