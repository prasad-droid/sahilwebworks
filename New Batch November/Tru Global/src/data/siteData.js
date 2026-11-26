// Single source of truth for all editable website content.
// Product details (grades, specs, certifications, quantities) are intentionally
// omitted — add them here only when verified information is available.

export const company = {
  name: 'Tru Source Global',
  tagline: 'From Indian Farm to Global Market',
  email: 'tsourceglobal@gmail.com',
  phone: '+91 8591156344',
  whatsappNumber: '918591156344',
  whatsappMessage:
    'Hello Tru Source Global, I am interested in your products and would like to discuss an international sourcing requirement.',
  location: 'Navi Mumbai, Maharashtra, India',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Our Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
]

export const productCategories = [
  {
    id: 'agricultural-commodities',
    number: '01',
    title: 'Agricultural Commodities',
    description:
      'Quality Indian agricultural commodities sourced for wholesale, food manufacturing and international trading requirements.',
    image: '/images/hero-field.jpg',
    products: [
      {
        name: 'Isabgol (Psyllium Husk)',
        description:
          'Premium Indian psyllium husk sourced for international bulk buyers and food-industry requirements.',
        image: '/images/product-isabgol.jpg',
      },
      {
        name: 'Jeera (Cumin Seeds & Powder)',
        description: 'Quality Indian cumin available in seed and powder forms.',
        image: '/images/product-jeera.jpg',
      },
      {
        name: 'Saunf (Fennel Seeds)',
        description:
          'Carefully sourced fennel seeds for food processing, wholesale and international trading.',
        image: '/images/product-saunf.jpg',
      },
      {
        name: 'Green Chilli – G4',
        description: 'Fresh Indian G4 green chillies sourced for international agricultural markets.',
        image: '/images/product-green-chilli.jpg',
      },
      {
        name: 'Fresh Red Onion',
        description: 'Fresh Indian red onions for international wholesalers, distributors and food businesses.',
        image: '/images/product-onion.jpg',
      },
      {
        name: 'Cavendish Banana',
        description: 'Indian Cavendish bananas for international fruit buyers and distributors.',
        image: '/images/product-banana.jpg',
      },
      {
        name: 'Wheat Flour',
        description: 'Indian wheat flour suitable for food manufacturing, wholesale and commercial requirements.',
        image: '/images/product-wheat-flour.jpg',
      },
    ],
  },
  {
    id: 'spices-masala',
    number: '02',
    title: 'Spices & Masala',
    description:
      'Indian spices and masala products sourced with a focus on consistency, bulk supply and customized packaging options.',
    image: '/images/spice-blends.jpg',
    products: [
      {
        name: 'Jeera Powder',
        description: 'Ground cumin sourced for food manufacturing, wholesale and international spice markets.',
        image: '/images/product-jeera.jpg',
      },
      {
        name: 'Onion Powder',
        description: 'Onion powder sourced for food processing, seasoning blends and bulk buyers.',
        image: '/images/onion-garlic-powder.jpg',
      },
      {
        name: 'Garlic Powder',
        description: 'Garlic powder sourced for food manufacturing, seasoning applications and international trading.',
        image: '/images/spice-blends.jpg',
      },
      {
        name: 'Traditional Indian Spice Blends',
        description: 'Authentic Indian masala blends sourced to suit diverse culinary and market requirements.',
        image: '/images/product-saunf.jpg',
      },
      {
        name: 'Other Spices & Masala Products',
        description: 'Additional spices and masala products sourced against specific buyer requirements.',
        image: '/images/hero-spices.jpg',
      },
    ],
  },
  {
    id: 'processed-food',
    number: '03',
    title: 'Processed Food Products',
    description:
      'Processed Indian food products and ingredients sourced for international food businesses and distributors.',
    image: '/images/ready-to-eat.jpg',
    products: [
      {
        name: 'Onion & Garlic Powder',
        description: 'Processed onion and garlic powders sourced for food manufacturing and bulk supply.',
        image: '/images/onion-garlic-powder.jpg',
      },
      {
        name: 'Ready-to-Eat Food Products',
        description: 'Ready-to-eat Indian food products sourced for international retail and distribution markets.',
        image: '/images/ready-to-eat.jpg',
      },
      {
        name: 'Coconut Products',
        description: 'Coconut-based food products sourced for international food and beverage requirements.',
        image: '/images/coconut.jpg',
      },
      {
        name: 'Other Processed Food Ingredients',
        description: 'Additional processed food ingredients sourced against buyer specifications.',
        image: '/images/product-wheat-flour.jpg',
      },
    ],
  },
]

export const highlights = [
  {
    title: 'Quality-Focused Sourcing',
    description: 'Every product is sourced with attention to quality, consistency and buyer expectations.',
  },
  {
    title: 'Transparent Business Practices',
    description: 'Clear communication and honest dealing at every stage of the sourcing relationship.',
  },
  {
    title: 'Reliable Global Supply',
    description: 'Dependable sourcing and export coordination for international buyers and distributors.',
  },
]

export const whyChooseUs = [
  {
    number: '01',
    title: 'Verified Sourcing',
    description: 'Connect with reliable Indian manufacturers, farmers and suppliers.',
    icon: 'badge-check',
  },
  {
    number: '02',
    title: 'Quality-Focused Supply',
    description: 'Maintain a focus on product inspection, quality consistency and buyer specifications.',
    icon: 'shield-check',
  },
  {
    number: '03',
    title: 'Competitive Pricing',
    description: 'Work towards commercially competitive sourcing solutions for international buyers.',
    icon: 'scale',
  },
  {
    number: '04',
    title: 'Customized Packaging',
    description: 'Support bulk packaging and customized private-label requirements according to buyer needs.',
    icon: 'package',
  },
  {
    number: '05',
    title: 'Long-Term Partnerships',
    description: 'Build dependable business relationships rather than focusing only on one-time transactions.',
    icon: 'handshake',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Requirement Understanding',
    description: 'Understand buyer requirements, product specifications, quantity and destination.',
    icon: 'clipboard',
    image: '/images/process-requirement.jpg',
  },
  {
    number: '02',
    title: 'Supplier Identification',
    description: 'Identify suitable Indian manufacturers, farmers and verified suppliers.',
    icon: 'search',
    image: '/images/process-supplier.jpg',
  },
  {
    number: '03',
    title: 'Product Sourcing',
    description: 'Source products according to the agreed requirements.',
    icon: 'sprout',
    image: '/images/process-sourcing.jpg',
  },
  {
    number: '04',
    title: 'Quality Inspection',
    description: 'Coordinate applicable product testing, quality checks and inspection.',
    icon: 'microscope',
    image: '/images/process-quality.jpg',
  },
  {
    number: '05',
    title: 'Packaging & Documentation',
    description: 'Arrange suitable packaging, labeling and export documentation.',
    icon: 'file-text',
    image: '/images/process-packaging.jpg',
  },
  {
    number: '06',
    title: 'Shipment Coordination',
    description: 'Coordinate shipment and logistics arrangements according to the agreed terms.',
    icon: 'ship',
    image: '/images/process-shipment.jpg',
  },
]

export const packagingServices = [
  {
    number: '01',
    title: 'Bulk Packaging Solutions',
    description: 'Practical bulk packaging options for importers, distributors and food manufacturers.',
    image: '/images/packaging-bulk.jpg',
  },
  {
    number: '02',
    title: 'Customized Product Packaging',
    description: 'Packaging formats and labelling adapted to product requirements and destination markets.',
    image: '/images/packaging-custom.jpg',
  },
  {
    number: '03',
    title: 'Private Label Support',
    description: 'Sourcing and packaging support for buyers developing their own product lines.',
    image: '/images/packaging-private-label.jpg',
  },
]

// Placeholder only. Replace with verified customer feedback when supplied.
// Set `active: true` on an entry to display it.
export const testimonials = [
  {
    active: false,
    quote: '',
    name: '',
    company: '',
    country: '',
  },
]

export const productInterestOptions = [
  'Isabgol (Psyllium Husk)',
  'Jeera',
  'Saunf',
  'G4 Green Chilli',
  'Fresh Red Onion',
  'Cavendish Banana',
  'Wheat Flour',
  'Onion & Garlic Powder',
  'Spices & Masala',
  'Ready-to-Eat Products',
  'Coconut Products',
  'Other',
]
