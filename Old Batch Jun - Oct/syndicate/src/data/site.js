/**
 * Single source of truth for all website copy, products, specifications and images.
 * Update this file to change site content — components contain no hard-coded copy.
 */

/** Build an optimized, consistently cropped Pexels image URL from a photo id. */
const px = (id, w = 1000, h = 750) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const company = {
  name: 'Syndicate Global EXIM',
  shortName: 'Syndicate Global',
  tagline: 'Trust, Progress, Prosperity',
  description:
    'An Indian export business connecting international buyers with carefully sourced fresh agricultural produce and precision technical textiles.',
  phoneDisplay: '+91 7517331951',
  phoneHref: 'tel:+917517331951',
  email: 'rahul@syndicateglobalexim.com',
  whatsapp: 'https://wa.me/917517331951?text=Hello%20Syndicate%20Global%20EXIM%2C%20I%20would%20like%20to%20discuss%20a%20sourcing%20requirement.',
  address: {
    line: 'Chikalthana, Chh. Sambhajinagar – 431003, Maharashtra, India',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chikalthana%20Chh.%20Sambhajinagar%20431003%20Maharashtra%20India',
  },
  // Drop logo.png into /public to replace the typographic fallback mark.
  logoUrl: '/logo.png',
  // Drop supplied-business-photo.jpg into /public to replace the About placeholder.
  suppliedPhotoUrl: '/supplied-business-photo.jpg',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact Us', href: '#contact' },
];

export const productNav = [
  { label: 'Fresh Agricultural Produce', href: '#agriculture' },
  { label: 'Technical Textiles', href: '#textiles' },
  { label: 'Quality Control', href: '#quality' },
  { label: 'Export Packaging', href: '#packaging' },
  { label: 'Documentation', href: '#compliance' },
];

export const hero = {
  eyebrow: 'Indian exporter · International B2B supply',
  title: ['Reliable Sourcing.', 'Verifiable Quality.', 'Global Reach.'],
  description:
    'Syndicate Global EXIM is your dedicated export partner for fresh Indian agricultural produce and precision technical textiles. We focus on disciplined sourcing, product specifications, quality control, and transparent export coordination.',
  primaryCta: { label: 'Explore Our Products', href: '#products' },
  secondaryCta: { label: 'Request a Quote', href: '#contact' },
  highlights: [
    { icon: 'Sprout', title: 'Agricultural Exports', detail: 'Fresh produce, graded and packed for transit.' },
    { icon: 'Layers3', title: 'Technical Textiles', detail: 'Custom narrow fabric woven tapes.' },
    { icon: 'Globe2', title: 'International B2B Supply', detail: 'Documentation-led export coordination.' },
  ],
  images: {
    produce: { src: px(12955689, 900, 1000), alt: 'Close-up of fresh green chilli peppers', position: 'hero-produce' },
    textile: { src: px(6634334, 900, 760), alt: 'Woven textile threads on a loom', position: 'hero-textile' },
    logistics: { src: px(14020705, 900, 620), alt: 'Cargo containers ready for international shipment', position: 'hero-logistics' },
  },
};

export const about = {
  id: 'about',
  eyebrow: 'About the company',
  heading: 'Building Global Trade Through Verifiable Trust.',
  paragraphs: [
    'At Syndicate Global EXIM, we believe that successful international trade is built on verifiable trust, not just one-time transactions.',
    'We bridge the gap between Indian agricultural and manufacturing excellence and the rigorous demands of global supply chain teams.',
    'Our approach focuses on reducing uncertainty in international sourcing through careful product selection, quality verification, export-grade packaging, and disciplined shipment coordination.',
    'From agricultural produce to technical woven tapes, we aim to build dependable business relationships through transparency, consistency, and a long-term partnership approach.',
  ],
  values: [
    { title: 'Trust', text: 'Clear communication and verifiable information at every stage.' },
    { title: 'Quality Focus', text: 'Selection, grading and specification checks before dispatch.' },
    { title: 'Operational Discipline', text: 'Structured processes for packing, paperwork and handover.' },
    { title: 'Long-Term Partnerships', text: 'Built around repeat supply, not one-off transactions.' },
  ],
  image: { src: px(33175650, 1000, 1200), alt: 'Business partners shaking hands after an agreement' },
  // Shown until the owner-supplied photograph is placed in public/.
  fallbackPhoto: { src: px(9870223, 1000, 1200), alt: 'Business partners reviewing documents together' },
};

export const categories = {
  id: 'products',
  eyebrow: 'What we supply',
  heading: 'Our Export Product Categories',
  intro:
    'Two focused business lines, one accountable export relationship. Each category is handled with its own sourcing, verification and packaging discipline.',
  cards: [
    {
      number: '01',
      title: 'Fresh Agricultural Produce',
      description:
        'Carefully sourced and graded Indian agricultural produce prepared for international B2B sourcing requirements.',
      image: { src: px(5501512, 1100, 800), alt: 'Fresh green chillies laid out on a rustic surface' },
      cta: { label: 'Explore Agricultural Products', href: '#agriculture' },
      accent: 'agri',
      tags: ['G4 Green Chillies', 'Red Onions', 'Pink Onions', 'White Onions'],
    },
    {
      number: '02',
      title: 'Technical Textiles',
      description:
        'Customizable woven tapes manufactured for mat bordering and industrial applications, with attention to width, weave consistency, and technical specifications.',
      image: { src: px(6634749, 1100, 800), alt: 'Close-up of a weaving loom producing narrow fabric' },
      cta: { label: 'Explore Technical Textiles', href: '#textiles' },
      accent: 'textile',
      tags: ['Custom widths', 'Colour options', 'Patterned weaves'],
    },
  ],
};

export const agriculture = {
  id: 'agriculture',
  eyebrow: 'Fresh agricultural produce',
  heading: 'Fresh Indian Produce. Prepared for Global Markets.',
  intro:
    'Product information is shared in clear, verifiable terms. Exact grades, sizes, pricing and availability are confirmed against the specific lot and buyer requirement.',
  products: [
    {
      name: 'G4 Green Chillies',
      subtitle: 'G4 variety · export-oriented handling',
      description:
        'Fresh G4 Green Chillies sourced and graded for international buyers, with attention to size uniformity, surface quality, freshness, and export packaging.',
      image: { src: px(10899475, 1000, 800), alt: 'Abundant pile of fresh green G4 style chillies' },
      highlights: [
        'G4 Green Chilli variety',
        'Size and appearance grading',
        'Freshness-focused handling',
        'Ventilated carton packaging',
      ],
      process: [
        'Sourcing and maturity selection',
        'Early harvesting, where applicable',
        'Lot-level grading',
        'Pre-cooling and handling',
        'Ventilated CFB carton packaging',
        'Temperature-controlled shipment coordination, where available',
      ],
    },
    {
      name: 'Fresh Red Onions',
      subtitle: 'Red variety · wholesale and distribution',
      description:
        'Indian red onions selected and graded for international wholesale and distribution requirements.',
      image: { src: px(38709102, 1000, 800), alt: 'Bulk pile of fresh red onions with natural skin' },
      highlights: [
        'Red onion variety',
        'Field curing',
        'Bulb-size uniformity',
        'Firmness and skin quality',
        'Export-oriented packaging',
      ],
    },
    {
      name: 'Fresh Pink Onions',
      subtitle: 'Pink variety · bulk sourcing',
      description:
        'Fresh pink onions prepared for bulk sourcing and international agricultural trade requirements.',
      image: { src: px(12353768, 1000, 800), alt: 'Fresh pink shallot-style onions in a wicker basket' },
      highlights: ['Pink onion variety', 'Grading and selection', 'Quality inspection', 'Packaging suitable for transit'],
    },
    {
      name: 'Fresh White Onions',
      subtitle: 'White variety · appearance selection',
      description:
        'White onions sourced and presented for international buyers seeking Indian agricultural produce.',
      image: { src: px(15442013, 1000, 800), alt: 'Fresh white onions displayed in a rustic wooden bowl' },
      highlights: ['White onion variety', 'Size and appearance selection', 'Firmness assessment', 'Export-oriented packaging'],
    },
  ],
  note: 'Specifications, dimensions, shelf life and availability are shared only after lot verification. Nothing is assumed or quoted in advance.',
  cta: { label: 'Request Product Details', href: '#contact' },
};

export const textiles = {
  id: 'textiles',
  eyebrow: 'Technical textiles',
  heading: 'Precision Woven Tapes. Custom-Built for Industry.',
  description:
    'Syndicate Global EXIM manufactures and exports narrow fabric woven tapes designed for plastic mat bordering and other industrial applications. Our woven tapes are available in customized widths, colors, and weave patterns according to buyer requirements.',
  features: [
    { title: 'Custom Widths', text: 'Made against the buyer’s stated width requirement.' },
    { title: 'Multiple Color Options', text: 'Colour selection aligned to your product or brand.' },
    { title: 'Plain and Patterned Weaves', text: 'Weave style chosen for the intended application.' },
    { title: 'Consistent Weave Density', text: 'Monitored during the weaving process.' },
    { title: 'Width Tolerance Specifications', text: 'Agreed before production and verified afterward.' },
    { title: 'Tensile Strength Verification', text: 'Checked against the agreed requirement.' },
  ],
  applications: ['Plastic mat bordering', 'Industrial textile applications', 'Manufacturing and product finishing'],
  gallery: [
    { src: px(6634338, 900, 900), alt: 'Close-up texture of colourful narrow woven fabric', caption: 'Weave texture' },
    { src: px(18484185, 900, 900), alt: 'Colourful array of woven textile tapes', caption: 'Colour options' },
    { src: px(4614231, 900, 900), alt: 'Neatly arranged fabric rolls in a textile workshop', caption: 'Roll presentation' },
    { src: px(8246482, 900, 900), alt: 'Industrial weaving machinery in an Indian textile factory', caption: 'Production discipline' },
  ],
  specTitle: 'Editable technical specification sheet',
  specNote: 'No numerical values are published here. Every field is completed against the confirmed buyer requirement.',
  specs: [
    { field: 'Product Type', value: 'Available on Request' },
    { field: 'Width', value: 'Available on Request' },
    { field: 'Color', value: 'Available on Request' },
    { field: 'Weave Pattern', value: 'Available on Request' },
    { field: 'Tensile Strength', value: 'Available on Request' },
    { field: 'Customization Requirements', value: 'Available on Request' },
  ],
  cta: { label: 'Discuss Custom Requirements', href: '#contact' },
};

export const quality = {
  id: 'quality',
  eyebrow: 'Quality control & verification',
  heading: 'Quality Is a Process, Not Just a Promise.',
  intro:
    'International buyers need to understand how a product is checked, not just how it is described. These are the verification stages we apply within each business line.',
  processes: [
    {
      title: 'Agricultural Quality Process',
      icon: 'Sprout',
      accent: 'agri',
      steps: [
        { title: 'Source Selection', text: 'Selection of suitable agricultural produce.' },
        { title: 'Maturity and Appearance Checks', text: 'Inspection of size, freshness and visible quality.' },
        { title: 'Lot-Level Grading', text: 'Removal of unsuitable and under-grade products.' },
        { title: 'Pre-Cooling and Handling', text: 'Appropriate freshness-preserving handling where available.' },
        { title: 'Packaging Inspection', text: 'Checking packaging suitability and product protection.' },
        { title: 'Dispatch Coordination', text: 'Preparing goods for the intended shipment.' },
      ],
    },
    {
      title: 'Technical Textile Quality Process',
      icon: 'Layers3',
      accent: 'textile',
      steps: [
        { title: 'Yarn and Material Selection', text: 'Input material checked against the requirement.' },
        { title: 'Weaving Process Monitoring', text: 'Production observed for consistency.' },
        { title: 'Width and Weave Inspection', text: 'Dimensional and weave checks before winding.' },
        { title: 'Tensile Strength Verification', text: 'Strength verified against the agreed specification.' },
        { title: 'Roll Winding and Packaging Inspection', text: 'Rolls prepared for safe transit.' },
      ],
    },
  ],
  image: { src: px(5479390, 900, 700), alt: 'Inspector examining fresh produce for quality' },
};

export const packaging = {
  id: 'packaging',
  eyebrow: 'Export packaging & transit',
  heading: 'Protecting Product Quality Beyond the Point of Dispatch.',
  intro:
    'Packaging and transit arrangements are discussed against the actual product, destination and buyer requirement. Cold-chain and reefer options are only offered where they are operationally confirmed.',
  blocks: [
    {
      title: 'Agricultural Packaging & Transit',
      icon: 'PackageOpen',
      accent: 'agri',
      image: { src: px(6590922, 1000, 800), alt: 'Fresh produce packed securely in a cardboard carton' },
      items: [
        'Ventilated CFB cartons for green chillies',
        'Suitable export packaging for onions',
        'Pre-cooling and temperature management where available',
        'Reefer transport coordination where available',
        'Product handling and shipment monitoring',
      ],
    },
    {
      title: 'Technical Textile Packaging',
      icon: 'Scroll',
      accent: 'textile',
      image: { src: px(236748, 1000, 800), alt: 'Rows of textile rolls stored in a factory' },
      items: [
        'Tightly wound fabric rolls',
        'Moisture-resistant protective wrapping',
        'Secure stacking and loading',
        'Protection against deformation and transit damage',
      ],
    },
  ],
  supportingImage: { src: px(6170405, 900, 700), alt: 'Warehouse worker inspecting shipment packages' },
};

export const compliance = {
  id: 'compliance',
  eyebrow: 'Global trade compliance',
  heading: 'Transparent Documentation. Confident Trade.',
  intro:
    'Export paperwork is handled as part of the supply conversation. The exact document set is confirmed per product, destination and shipment — nothing is promised universally.',
  documents: [
    { title: 'Commercial Invoice', text: 'Prepared to match the agreed commercial terms.' },
    { title: 'Packing List', text: 'Details the packed consignment for handover.' },
    { title: 'Certificate of Origin', text: 'Arranged where the destination requires it.' },
    { title: 'Applicable Product Certificates', text: 'Discussed only where relevant and verifiable.' },
    { title: 'Shipping and Export Documents', text: 'Coordinated with the nominated logistics route.' },
    { title: 'Buyer-Specific Documentation', text: 'Reviewed against the buyer’s stated requirements.' },
  ],
  note: 'APEDA and FIEO are referred to only as relevant Indian export industry organisations and standards bodies. No membership, registration or certification is claimed here. Registration badges appear only when valid documents are supplied.',
  cta: { label: 'Discuss Export Documentation', href: '#contact' },
};

/**
 * Certificate cards stay in placeholder mode until genuine document files are
 * supplied. When a file is placed in /public, set its `file` path below and
 * add the verified registration/issue details.
 */
export const certificates = {
  id: 'certificates',
  eyebrow: 'Registrations & documentation',
  heading: 'Registrations & Export Documentation',
  intro:
    'We will only publish a document once it has been supplied and verified. Until then, each card clearly states that details are available on request.',
  cards: [
    {
      title: 'GST Registration',
      file: null,
      registrationNumber: '',
      issueDetails: '',
      note: 'Document details available upon request.',
    },
    {
      title: 'APEDA Registration',
      file: null,
      registrationNumber: '',
      issueDetails: '',
      note: 'Document details available upon request.',
    },
    {
      title: 'FIEO Membership / Registration',
      file: null,
      registrationNumber: '',
      issueDetails: '',
      note: 'Document details available upon request.',
    },
    {
      title: 'Other Applicable Business Registrations',
      file: null,
      registrationNumber: '',
      issueDetails: '',
      note: 'Document details available upon request.',
    },
  ],
  footnote: 'No registration number, badge or preview is generated without a genuine, supplied document.',
};

export const whyUs = {
  id: 'why-us',
  eyebrow: 'Why work with us',
  heading: 'A Procurement Partner Focused on Reliability.',
  intro: 'Built for buyers who value clear information and repeatable execution over marketing claims.',
  cards: [
    {
      icon: 'Boxes',
      title: 'Multi-Category Sourcing',
      text: 'Agricultural products and technical textile solutions through one business relationship.',
    },
    {
      icon: 'ScanSearch',
      title: 'Quality-Focused Operations',
      text: 'Attention to sourcing, grading, specifications and product verification.',
    },
    {
      icon: 'MessagesSquare',
      title: 'Transparent Communication',
      text: 'Clear discussions around product requirements, packaging and export documentation.',
    },
    {
      icon: 'Handshake',
      title: 'Long-Term Business Approach',
      text: 'Focus on building dependable relationships with international buyers.',
    },
  ],
};

export const exportProcess = {
  id: 'services',
  eyebrow: 'How we work',
  heading: 'From Inquiry to International Delivery.',
  intro: 'A clear six-step path so international buyers know exactly how to begin and what happens next.',
  steps: [
    { title: 'Buyer Inquiry', text: 'You share the product, market and broad requirement.', icon: 'Mail' },
    { title: 'Product Requirement Discussion', text: 'We clarify specifications, packaging and destination needs.', icon: 'MessageCircle' },
    { title: 'Specification and Quotation', text: 'A requirement-led specification and commercial quote are shared.', icon: 'FileText' },
    { title: 'Sourcing and Quality Verification', text: 'Product is selected and checked against the agreed requirement.', icon: 'ClipboardCheck' },
    { title: 'Packaging and Documentation', text: 'Packing and the agreed document set are prepared.', icon: 'PackageCheck' },
    { title: 'Shipment Coordination', text: 'Goods are handed over for the intended shipment route.', icon: 'Ship' },
  ],
  note: 'No tracking portal, cold-chain monitoring or digital automation is implied. Coordination details are confirmed directly with the buyer.',
};

export const contact = {
  id: 'contact',
  eyebrow: 'Contact & request a quote',
  heading: "Let's Build a Reliable Supply Partnership.",
  description:
    'Share your product requirements, specifications, and destination details. Our team will connect with you to discuss suitable sourcing and export possibilities.',
  formOptions: {
    categories: ['Agricultural Produce', 'Technical Textiles', 'Both / Not sure yet'],
    products: [
      'G4 Green Chillies',
      'Red Onions',
      'Pink Onions',
      'White Onions',
      'Narrow Fabric Woven Tapes',
      'Other',
    ],
    timelines: ['Immediately', 'Within 1 month', '1–3 months', '3–6 months', 'Exploring options'],
  },
};

export const footer = {
  quickLinks: navLinks,
  productLinks: [
    { label: 'G4 Green Chillies', href: '#agriculture' },
    { label: 'Fresh Onions', href: '#agriculture' },
    { label: 'Narrow Fabric Woven Tapes', href: '#textiles' },
    { label: 'Quality Control', href: '#quality' },
  ],
};
