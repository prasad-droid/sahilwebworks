export const company = {
  name: 'Shakti Global Exim',
  tagline: 'Global Reach. Trusted Quality.',
  phoneDisplay: '+91 96198 41882',
  phoneHref: 'tel:+919619841882',
  whatsappNumber: '919619841882',
  whatsappDisplay: '+91 96198 41882',
  email: 'shaktiglobalexim@gmail.com',
  emailHref: 'mailto:shaktiglobalexim@gmail.com',
  address: {
    lines: [
      '0863, Karave Village,',
      'Near Vitthal Mandir, Sector 36,',
      'Seawoods, Nerul, Navi Mumbai,',
      'Thane, Maharashtra - 400706, India.',
    ],
    full: '0863, Karave Village, Near Vitthal Mandir, Sector 36, Seawoods, Nerul, Navi Mumbai, Thane, Maharashtra - 400706, India.',
  },
  videoDriveUrl: 'https://drive.google.com/open?id=1rT5wRE3Gy8ncXG320MHfEirNkVfYXyF0',
  videoEmbedUrl: 'https://drive.google.com/file/d/1rT5wRE3Gy8ncXG320MHfEirNkVfYXyF0/preview',
}

export const whatsappMessages = {
  general:
    'Hello Shakti Global Exim, I am interested in your products (Frozen French Fries / Turmeric). Please share product specifications, pricing, packaging, and export requirements.',
  quote:
    'Hello Shakti Global Exim, I would like to request a quotation. Please share product specifications, packaging details, and export requirements for my requirement.',
}

export const navItems = [
  { label: 'Home', href: '#home', section: 'home' },
  { label: 'About Us', href: '#about', section: 'about' },
  {
    label: 'Products & Services',
    href: '#products',
    section: 'products',
    children: [
      { label: 'Frozen French Fries', href: '#products', section: 'products' },
      { label: 'Turmeric', href: '#turmeric', section: 'turmeric' },
      { label: 'Product Categories', href: '#categories', section: 'products' },
      { label: 'Export Services', href: '#services', section: 'services' },
    ],
  },
  { label: 'Why Choose Us', href: '#why-us', section: 'why-us' },
  { label: 'Testimonials', href: '#testimonials', section: 'testimonials' },
  { label: 'Contact Us', href: '#contact', section: 'contact' },
]

export const heroHighlights = [
  {
    title: 'Frozen French Fries',
    description: 'Our primary export product',
  },
  {
    title: 'Export-Ready Packaging',
    description: 'Packing coordination for international orders',
  },
  {
    title: 'International B2B Enquiries',
    description: 'Built around buyer requirements',
  },
]

export const productSpecs = [
  { label: 'Cut', value: '9 mm' },
  { label: 'Type', value: 'Coated Frozen French Fries' },
  { label: 'Packing', value: '10 kg' },
  { label: 'Storage', value: '-18°C' },
  {
    label: 'Suitable for',
    value:
      'Restaurants, QSRs, hotels, food-service distributors, and wholesalers',
    wide: true,
  },
  {
    label: 'Target export markets',
    value: 'Middle East and Southeast Asia',
    wide: true,
  },
]

export const productCategories = [
  {
    title: 'Agricultural Products',
    shortTitle: 'Agricultural Products',
    description:
      'A category of Indian agricultural products for international sourcing discussions. Product-specific details can be shared on enquiry.',
    image: '/images/category-agriculture.jpg',
    imageAlt:
      'Representative image of fresh potatoes, an agricultural product category',
    icon: 'Wheat',
  },
  {
    title: 'Processed Food',
    shortTitle: 'Processed Food',
    description:
      'Processed food categories for importers, distributors, and food-service businesses. Specific products and packing can be discussed.',
    image: '/images/category-processed.jpg',
    imageAlt:
      'Representative image of packaged food and canned goods in a storage setting',
    icon: 'Factory',
  },
  {
    title: 'Frozen Food',
    shortTitle: 'Frozen Food',
    description:
      'Our frozen-food offering includes frozen French fries, with additional frozen lines open for discussion based on buyer requirements.',
    image: '/images/category-frozen.jpg',
    imageAlt:
      'Representative image of frozen vegetables, a frozen food category',
    icon: 'Snowflake',
    featured: true,
    badge: 'Includes our primary product',
  },
  {
    title: 'Spices',
    shortTitle: 'Spices',
    description:
      'Indian spices for international food businesses. Availability, packing, and product-specific information can be discussed on enquiry.',
    image: '/images/category-spices.jpg',
    imageAlt:
      'Representative image of assorted Indian spices in bowls',
    icon: 'CookingPot',
  },
]

export const services = [
  {
    number: '01',
    title: 'Global Food Export',
    description:
      'Supply of Indian food products to international importers, distributors, and food-service businesses.',
    icon: 'Globe2',
  },
  {
    number: '02',
    title: 'Frozen Food Supply',
    description:
      'Reliable supply of frozen French fries according to agreed product specifications, packaging, and order requirements.',
    icon: 'Snowflake',
  },
  {
    number: '03',
    title: 'Export-Ready Packaging',
    description:
      'Products prepared in suitable export packaging for international transportation and frozen-food logistics.',
    icon: 'PackageCheck',
  },
  {
    number: '04',
    title: 'Export Documentation',
    description:
      'Coordination of required commercial and export documentation for international shipments.',
    icon: 'FileText',
  },
  {
    number: '05',
    title: 'Logistics Coordination',
    description:
      'Support with shipment planning, container coordination, and communication with logistics partners.',
    icon: 'Ship',
  },
  {
    number: '06',
    title: 'B2B Buyer Support',
    description:
      'Professional communication with importers, distributors, procurement teams, and food-service buyers from enquiry through shipment.',
    icon: 'MessagesSquare',
  },
  {
    number: '07',
    title: 'Long-Term Supply Relationships',
    description:
      'A focus on building reliable, repeat business relationships with international buyers.',
    icon: 'Repeat2',
  },
]

export const benefits = [
  {
    title: 'Quality-Focused Supply',
    description: 'Focus on product requirements and agreed specifications.',
    icon: 'ListChecks',
  },
  {
    title: 'Clear Product Information',
    description:
      'Provide buyers with relevant product details for informed sourcing discussions.',
    icon: 'FileSearch',
  },
  {
    title: 'Export Documentation Coordination',
    description:
      'Coordinate relevant commercial and export documents according to the shipment requirements.',
    icon: 'FileCheck2',
  },
  {
    title: 'Buyer-Focused Communication',
    description:
      'Maintain professional communication from initial enquiry through shipment coordination.',
    icon: 'MessageSquareText',
  },
  {
    title: 'Flexible Order Discussions',
    description:
      'Discuss packaging, specifications, and container quantities based on buyer requirements.',
    icon: 'SlidersHorizontal',
  },
  {
    title: 'Long-Term Partnerships',
    description:
      'Focus on dependable service and repeat international business relationships.',
    icon: 'Handshake',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Share Your Requirement',
    description:
      'Tell us the product, desired specifications, quantity, destination, and packaging requirements.',
  },
  {
    number: '02',
    title: 'Product Discussion',
    description:
      'Discuss available product specifications and relevant supply requirements.',
  },
  {
    number: '03',
    title: 'Quotation and Commercial Terms',
    description:
      'Review the quotation, order quantities, packing requirements, and applicable commercial terms.',
  },
  {
    number: '04',
    title: 'Documentation and Logistics Coordination',
    description:
      'Coordinate relevant documentation and shipment arrangements according to the agreed transaction.',
  },
  {
    number: '05',
    title: 'Shipment Communication',
    description:
      'Maintain communication with the buyer during the agreed shipment and follow-up process.',
  },
]

export const commitments = [
  {
    title: 'Clear communication',
    description:
      'We keep buyers informed from the first enquiry through shipment coordination, with clear product and order discussions.',
    icon: 'MessagesSquare',
  },
  {
    title: 'Dependable follow-through',
    description:
      'We focus on agreed requirements, relevant documentation, and responsive support at every stage of the export journey.',
    icon: 'ClipboardCheck',
  },
  {
    title: 'A partnership mindset',
    description:
      'We aim to build repeat, long-term relationships with international buyers rather than one-off transactions.',
    icon: 'Handshake',
  },
]

// Add authentic, approved buyer feedback here when it becomes available.
// Each entry should follow this shape: { quote, name, company, country }.
export const testimonials = []

export const targetMarkets = [
  {
    region: 'Middle East',
    description:
      'Sourcing discussions for importers, distributors, and food-service buyers across the region.',
    icon: 'MapPin',
  },
  {
    region: 'Southeast Asia',
    description:
      'Export enquiries from food-service companies, wholesalers, and distributors in the region.',
    icon: 'MapPin',
  },
]

export const footerProductLinks = [
  { label: 'Frozen French Fries', href: '#products' },
  { label: 'Turmeric', href: '#turmeric' },
  { label: 'Agricultural Products', href: '#categories' },
  { label: 'Processed Food', href: '#categories' },
  { label: 'Frozen Food', href: '#categories' },
  { label: 'Spices', href: '#categories' },
]

export const footerNavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Export Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact Us', href: '#contact' },
]
