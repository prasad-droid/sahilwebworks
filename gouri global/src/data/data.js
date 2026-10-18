// ============================================================
// PRODUCT DATA — Edit product details here
// Placeholders are provided for information not yet supplied.
// Place product image at: public/images/gir-cow-ghee.jpg
// ============================================================

export const business = {
  name: 'GOURI GLOBAL TRADE',
  tagline: 'Sourcing Locally. Serving Globally.',
  type: 'Merchant Exporter',
  phone: '9156334101',
  phoneDisplay: '+91 9156334101',
  whatsappNumber: '+91 9156334101',
  email: 'Gouriglobaltrade@gmail.com',
  office: 'D304, Aswani Galaxy, Pink City Road, Wakad, Pune 411 057',
  copyrightYear: '2026',
};

export const about = {
  heading: 'Connecting Indian Excellence With Global Markets',
  paragraphs: [
    'Gouri Global Trade is an India-based trading and export business focused on delivering quality Made-in-India food products to domestic and international markets.',
    'Our portfolio includes Gir Cow Ghee, Dry Fruit Laddu, Groundnut Jaggery Laddu, and Whole Wheat Biscuits, reflecting India\u2019s rich food heritage and authentic flavours.',
    'Backed by knowledge in Food Technology and Dairy Technology, we focus on quality, food safety, reliable sourcing, and professional business practices.',
    'We aim to build long-term partnerships with importers, distributors, wholesalers, retailers, and global buyers, connecting trusted Indian products with markets worldwide.',
  ],
  focus: [
    'Quality',
    'Reliable Sourcing',
    'Product Knowledge',
    'Professional Service',
    'Global Reach',
    'Long-Term Partnerships',
  ],
};

export const products = [
  {
    id: 'gir-cow-ghee',
    name: 'Gir Cow Ghee',
    description:
      'Premium Gir Cow Ghee crafted from traditional recipes, reflecting the richness of Indian heritage and a choice product for domestic and international markets.',
    image: '/images/gir-cow-ghee.jpg',
    imageAlt: 'Gir Cow Ghee in a premium jar',
    hsCode: '04059020',
    // Editable placeholders — add real data when available
    sizes: 'Add available pack sizes',
    packaging: 'Add packaging information',
    moq: 'Add minimum order quantity',
  },
  {
    id: 'dry-fruit-laddu',
    name: 'Dry Fruit Laddu',
    description:
      'A handcrafted Indian sweet made with select dry fruits, offering authentic taste rooted in India\u2019s rich food tradition.',
    image: '/images/dry-fruit-laddu.jpeg',
    imageAlt: 'Dry Fruit Laddu sweet',
    hsCode: '21069099',
    sizes: 'Add available pack sizes',
    packaging: 'Add packaging information',
    moq: 'Add minimum order quantity',
  },
  {
    id: 'groundnut-jaggery-laddu',
    name: 'Groundnut Jaggery Laddu',
    description:
      'A traditional Indian sweet combining roasted groundnuts and natural jaggery for an authentic, wholesome flavour.',
    image: '/images/groundnut-jaggery-laddu.jpeg',
    imageAlt: 'Groundnut Jaggery Laddu sweet',
    hsCode: '17049090',
    sizes: 'Add available pack sizes',
    packaging: 'Add packaging information',
    moq: 'Add minimum order quantity',
  },
  {
    id: 'whole-wheat-biscuits',
    name: 'Whole Wheat Biscuits',
    description:
      'Wholesome whole wheat biscuits made with quality ingredients, capturing authentic Indian baking traditions.',
    image: '/images/whole-wheat-biscuits.jpeg',
    imageAlt: 'Whole Wheat Biscuits',
    hsCode: '19503100',
    sizes: 'Add available pack sizes',
    packaging: 'Add packaging information',
    moq: 'Add minimum order quantity',
  },
  {
    id: 'wheat-flour',
    name: 'Wheat Flour',
    description:
      'Quality wheat flour milled from selected wheat grains, supplied in consistent grades for food manufacturing and bulk buyers.',
    image: '/images/wheat-flour.jpg',
    imageAlt: 'Wheat Flour',
    hsCode: '11010000',
    sizes: 'Add available pack sizes',
    packaging: 'Add packaging information',
    moq: 'Add minimum order quantity',
  },
];

export const whyChooseUs = [
  {
    icon: 'leaf',
    title: 'Local Sourcing',
    description: 'Connecting buyers with authentic Indian products, sourced through reliable local channels.',
  },
  {
    icon: 'globe',
    title: 'Global Vision',
    description: 'Focused on building lasting connections with international buyers and markets worldwide.',
  },
  {
    icon: 'package',
    title: 'Product Focus',
    description: 'Specialized presentation around Gir Cow Ghee and other traditional Indian food products.',
  },
  {
    icon: 'message',
    title: 'Direct Enquiry',
    description: 'Easy communication for buyers interested in our products, with a straightforward enquiry process.',
  },
];

export const gallery = [
  {
    id: 'collage',
    src: '/images/products-collage.jpeg',
    alt: 'GOURI GLOBAL TRADE product range — Gir Cow Ghee, Dry Fruit Laddu, Groundnut Jaggery Laddu and Whole Wheat Biscuits',
    caption: 'Our product range',
  },
  {
    id: 'dry-fruit-laddu',
    src: '/images/dry-fruit-laddu.jpeg',
    alt: 'Dry Fruit Laddu',
    caption: 'Dry Fruit Laddu',
  },
  {
    id: 'groundnut-jaggery-laddu',
    src: '/images/groundnut-jaggery-laddu.jpeg',
    alt: 'Groundnut Jaggery Laddu',
    caption: 'Groundnut Jaggery Laddu',
  },
  {
    id: 'whole-wheat-biscuits',
    src: '/images/whole-wheat-biscuits.jpeg',
    alt: 'Whole Wheat Biscuits',
    caption: 'Whole Wheat Biscuits',
  },
];

// Official authority logos live in public/images/certifications/.
export const certifications = [
  {
    id: 'udyog-aadhaar',
    name: 'Udyog Aadhaar',
    subtitle: 'MSME Registration',
    description:
      'Registered under the Government of India MSME (Udyam) framework as a recognised enterprise.',
    logo: '/images/certifications/msme.svg',
    logoAlt: 'Ministry of Micro, Small and Medium Enterprises (MSME) logo',
  },
  {
    id: 'gstin',
    name: 'GSTIN',
    subtitle: 'Goods and Services Tax',
    description:
      'GST-registered business, ensuring transparent and compliant trade and invoicing.',
    logo: '/images/certifications/gst.png',
    logoAlt: 'Goods and Services Tax (GST) logo — Government of India',
  },
  {
    id: 'fssai',
    name: 'FSSAI',
    subtitle: 'Food Safety Licence',
    description:
      'Licensed by the Food Safety and Standards Authority of India for handling food products.',
    logo: '/images/certifications/fssai.png',
    logoAlt: 'Food Safety and Standards Authority of India (FSSAI) logo',
  },
  {
    id: 'iec',
    name: 'IEC',
    subtitle: 'Import Export Code',
    description:
      'Import Export Code issued by the DGFT, enabling legitimate international trade from India.',
    logo: '/images/certifications/dgft.png',
    logoAlt: 'Directorate General of Foreign Trade (DGFT) logo',
  },
  {
    id: 'apeda',
    name: 'APEDA',
    subtitle: 'Registered Exporter',
    description:
      'Registered with APEDA under the Ministry of Commerce & Industry for export of agri and processed food products.',
    logo: '/images/certifications/apeda.png',
    logoAlt: 'Agricultural and Processed Food Products Export Development Authority (APEDA) logo',
  },
];

// Social profile links — replace href="#" with the real profile URLs.
export const socialLinks = [
  { label: 'Facebook', icon: 'facebook', href: '#' },
  { label: 'Instagram', icon: 'instagram', href: '#' },
  { label: 'LinkedIn', icon: 'linkedin', href: '#' },
  { label: 'YouTube', icon: 'youtube', href: '#' },
  { label: 'X (Twitter)', icon: 'x', href: '#' },
];

export const targetCustomers = [
  {
    id: 'food-marts',
    title: 'Food Marts',
    description: 'For retailers looking to offer premium Indian food products.',
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    description: 'For food businesses looking for quality ghee products.',
  },
  {
    id: 'wholesalers',
    title: 'Wholesalers',
    description: 'For bulk distribution opportunities.',
  },
  {
    id: 'retailers',
    title: 'Retailers',
    description: 'For businesses serving consumers directly.',
  },
  {
    id: 'families',
    title: 'Families',
    description: 'For consumers seeking traditional food products.',
  },
  {
    id: 'international-buyers',
    title: 'International Buyers',
    description: 'For buyers looking to source Indian products.',
  },
];
