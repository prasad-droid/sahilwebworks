export const PRODUCTS = [
  {
    id: 'turmeric',
    title: 'Turmeric Fingers (Double Polished)',
    tag: 'Best Seller',
    image: '/termaric product/termeric_1.jpeg',
    tagline: 'Sortex-cleaned / Erode-origin turmeric with high curcumin content (min 3%). Available in double-polished finger form, moisture below 10%.',
    specs: [
      'Curcumin: 3-5%',
      'Moisture: <10%',
      'Packing: 25/50 kg PP or jute',
      'MOQ: 15-18 MT / 20ft FCL',
      'Double Polished (Premium Glaze)',
      'Machine Cleaned & Sorted'
    ],
    packaging: [
      '25kg PP Bags',
      '50kg PP Bags',
      'Jute Bag Packaging',
      'Custom Packaging Available'
    ],
    applications: [
      'Spices & Seasoning Manufacture',
      'Food Processing Industries',
      'Ayurvedic Products',
      'Herbal & Nutraceutical Sector'
    ],
    extraInfo: 'SGS inspection certification available. Storage in dry, cool conditions ensures a shelf life of up to 24 months. Origin: Maharashtra, India.',
    packagingImages: [{ src: '/packaging/turmeric packing 50kg.jpeg', title: '50kg PP Bag Packing' }]
  },
  {
    id: 'fruits',
    title: 'Fresh Fruits & Vegetable',
    tag: 'Fresh Harvest',
    image: '/fruits/fruit_5.jpeg',
    tagline: 'GAP-certified fresh produce in temperature-controlled reefer containers, ensuring quality and traceability from farm to port.',
    specs: [
      'Reefer: 5-8 \u00B0C',
      'Modified-atmosphere cartons',
      'Phytosanitary certified',
      'APEDA registered',
      'GAP Certified'
    ],
    packaging: [
      'Corrugated Cartons (5kg/10kg)',
      'Individual Foam Sleeves',
      'Pre-Cooled Sea Containers',
      'Custom Retail Box Labeling'
    ],
    applications: [
      'Supermarket & Retail Chains',
      'Fruit Juice & Puree Plants',
      'Hospitality & Catering Industry',
      'Fresh Produce Wholesalers'
    ],
    extraInfo: 'Available seasonally and year-round based on specific variety schedules. Custom packing options for retail. Cold chain integrity guaranteed.'
  },
  {
    id: 'raisins',
    title: 'Dry Fruits (Raisins, Almonds & Cashews)',
    tag: 'Premium Grade',
    image: '/dry fruits/dryfruit_2.jpeg',
    tagline: 'Export-grade Indian golden raisins, almond kernels and W180\u2013W320 cashew kernels \u2014 vacuum-packed for long shelf life.',
    specs: [
      'Raisins: Golden, Green, Black',
      'Cashew grades: W180\u2013W320',
      'Packing: 10 kg cartons / vacuum',
      'Machine Sorted & Size Graded',
      'High Brix Sweetness & Grade Checked'
    ],
    packaging: [
      '10kg / 25kg Corrugated Cartons',
      'Vacuum Packed Inner Foil Bags',
      'PP & Jute Bulk Bag Options',
      'Retail Pouch Packing Available'
    ],
    applications: [
      'Direct Snacking & Health Mixes',
      'Bakery, Cakes & Cookies',
      'Confectionery & Sweets',
      'Supermarket Retail Packs'
    ],
    extraInfo: 'Moisture content strictly regulated. Vacuum sealed options available for extreme climates. Packed under hygienic atmosphere.',
    packagingImages: [{ src: '/packaging/raisin packing 15kg.jpeg', title: '15kg Carton Packing' }]
  },
  {
    id: 'vermicompost',
    title: 'Vermicompost (Organic Fertilizer)',
    tag: '100% Organic',
    image: '/Vermicompost/product 1.jpeg',
    tagline: '100% organic, screened vermicompost rich in NPK and beneficial microbes \u2014 ideal for horticulture, greenhouse and organic farms.',
    specs: [
      'NPK: 1.5 / 0.9 / 1.2 (typical)',
      'Moisture: 25\u201330%',
      'Packing: 25/50 kg PP bags',
      'MOQ: 20 MT / FCL',
      '100% Chemical-Free Organic'
    ],
    packaging: [
      '25kg PP Bags',
      '50kg PP Bags',
      'Bulk Supply Available',
      'Custom Branded Bags'
    ],
    applications: [
      'Organic Farming Projects',
      'Horticulture & Landscaping',
      'Home Gardening & Nurseries',
      'Large-Scale Agricultural Projects'
    ],
    extraInfo: '100% environment-friendly. Free from synthetic chemicals or pathogens. Certified organic standards.',
    packagingImages: [{ src: '/packaging/compost packing.jpeg', title: '50kg PP Bag Packing' }]
  }
];

export const HERO_SLIDES = [
  {
    image: '/termaric product/termeric_1.jpeg',
    title: 'Double Polished Turmeric Fingers'
  },
  {
    image: '/dry fruits/dryfruit_2.jpeg',
    title: 'Premium Dry Fruits Selection'
  },
  {
    image: '/dry fruits/rasin_product .jpeg',
    title: 'Export Grade Raisins'
  },
  {
    image: '/Vermicompost/product 1.jpeg',
    title: 'Organic Vermicompost Manure'
  },
  {
    image: '/Vermicompost/product 2.jpeg',
    title: 'Nutrient-Rich Organic Vermicompost'
  },
  {
    image: '/fruits/fruit_5.jpeg',
    title: 'GAP-Certified Fresh Fruits'
  },
  {
    image: '/fruits/fruit_8.jpeg',
    title: 'Export Quality Fresh Fruits'
  },
  {
    image: '/fruits/fruit_11.jpeg',
    title: 'Premium Pomegranate Harvest'
  },
  {
    image: '/vegetables/WhatsApp Image 2026-06-05 at 11.15.49 AM.jpeg',
    title: 'Farm Fresh Sorted Vegetables'
  },
  {
    image: '/vegetables/WhatsApp Image 2026-06-05 at 11.15.48 AM.jpeg',
    title: 'Cleaned & Sorted Fresh Vegetables'
  },
  {
    image: '/vegetables/WhatsApp Image 2026-06-05 at 11.15.50 AM.jpeg',
    title: 'Green Chillies'
  }
];

export const REGION_DATA = {
  'middle-east': {
    title: 'Middle East Hubs',
    ports: 'Dubai (Jebel Ali), Jeddah, Muscat',
    products: 'Turmeric Fingers, Golden Raisins',
    transit: '7 - 10 Days'
  },
  'europe': {
    title: 'European Markets',
    ports: 'Rotterdam, Hamburg, Felixstowe',
    products: 'Premium Curcumin Turmeric, Black Raisins',
    transit: '24 - 28 Days'
  },
  'asia': {
    title: 'Asia-Pacific Gateways',
    ports: 'Singapore, Port Klang, Ho Chi Minh',
    products: 'Vermicompost, Sorted Raisins',
    transit: '10 - 15 Days'
  },
  'africa': {
    title: 'African Trade Corridors',
    ports: 'Mombasa, Durban, Casablanca',
    products: 'Organic Vermicompost, Turmeric Fingers',
    transit: '18 - 22 Days'
  },
  'north-america': {
    title: 'North American Gateways',
    ports: 'New York, Los Angeles, Vancouver',
    products: 'High Curcumin Turmeric, Jumbo Raisins',
    transit: '28 - 32 Days'
  }
};

export const FRUIT_IMAGES = [
  { src: '/fruits/fruit_1.jpeg', title: 'Premium Harvest Muskmelon', description: 'Export-grade muskmelon with high Brix sweetness, uniform texture, and crisp freshness.' },
  { src: '/fruits/fruit_2.jpeg', title: 'Fresh Guava Selection', description: 'Uniform size and maturity citrus fruits, sorted for premium quality.' },
  { src: '/fruits/fruit_3.jpeg', title: 'Tropical Bananas', description: 'Freshly harvested sweet bananas.' },
  { src: '/fruits/fruit_4.jpeg', title: 'QC Inspected Dragon Fruit/Pitaya', description: 'Residue-free and GAP standard verified fresh fruits.' },
  { src: '/fruits/fruit_5.jpeg', title: 'Premium Custard Apple Harvest', description: 'Rich Indian Custard Apple with optimal Brix sugar levels.' },
  { src: '/fruits/fruit_7.jpeg', title: 'Fresh Export Grapes', description: 'Crunchy and delicious premium quality local Grapes.' },
  { src: '/fruits/fruit_8.jpeg', title: 'WaterMelon Selection', description: 'Fully matured, sweet, and pre-cooled WaterMelons.' },
  { src: '/fruits/fruit_10.jpeg', title: 'Quality SweetLime', description: 'Cleaned, graded, and insect-controlled sorting process.' },
  { src: '/fruits/fruit_11.jpeg', title: 'Pomegranates', description: 'Pre-cooled fruits inside our cold storage to extend shelf life.' },
  { src: '/fruits/fruit_9.jpeg', title: 'Papaya/Pawpaw', description: 'Durable temperature-controlled corrugated cartons for shipping.' }
];

export const VEGETABLE_IMAGES = [
  { src: '/vegetables/WhatsApp Image 2026-06-05 at 11.15.48 AM.jpeg', title: 'Onions', description: 'Premium export-grade onions, clean and sorted for size and firmness.' },
  { src: '/vegetables/WhatsApp Image 2026-06-05 at 11.15.49 AM.jpeg', title: 'Tomato', description: 'Farm-fresh ripe tomatoes, uniform size and color, sorted for export quality.' },
  { src: '/vegetables/WhatsApp Image 2026-06-05 at 11.15.50 AM.jpeg', title: 'Green Chillies', description: 'Fresh green chillies sorted by length and freshness, packed in ventilated boxes.' }
];

export const DRY_FRUIT_IMAGES = [
  { src: '/dry fruits/rasin_product .jpeg', title: 'Dried Raisins (Golden)', description: 'Sun-dried high brix premium raisins, machine-cleaned and stem-free.' },
  { src: '/dry fruits/dryfruit_1.jpeg', title: 'Premium Almonds', description: 'Top-grade whole raw almonds, sorted for size and uniformity.' },
  { src: '/dry fruits/dryfruit_2.jpeg', title: 'Premium Cashews', description: 'Export-quality large cashew kernels, sorted and grade-checked.' }
];

export const TURMERIC_IMAGES = [
  { src: '/termaric product/termeric_1.jpeg', title: 'Double Polished Turmeric Fingers', description: 'High curcumin premium yellow-orange turmeric fingers sorted and polished.' },
  { src: '/termaric product/termeric_2.jpeg', title: 'Premium Turmeric Fingers', description: 'Premium turmeric fingers with uniform cut, polished for superior appearance and export quality.' }
];

export const VERMICOMPOST_IMAGES = [
  { src: '/Vermicompost/product 2.jpeg', title: 'Organic Vermicompost', description: 'Organic vermicompost straight from the farm, ideal for direct application.' },
  { src: '/Vermicompost/product 1.jpeg', title: 'Screened Vermicompost Manure', description: 'Premium organic vermicompost rich in NPK and beneficial microbes.' },
];

export const getProductGalleryImages = (id) => {
  if (id === 'fruits') return [...FRUIT_IMAGES, ...VEGETABLE_IMAGES];
  if (id === 'vegetables') return VEGETABLE_IMAGES;
  if (id === 'raisins') return DRY_FRUIT_IMAGES;
  if (id === 'turmeric') return TURMERIC_IMAGES;
  if (id === 'vermicompost') return VERMICOMPOST_IMAGES;
  return [];
};

export const CERTIFICATIONS = [
  { id: "msme", logo: "/msme_logo.png?v=3", title: "MSME" },
  { id: "fssai", logo: "/fssai_logo.png?v=3", title: "FSSAI" },
  { id: "apeda", logo: "/apeda_logo.png?v=3", title: "APEDA" },
  { id: "spices", logo: "/spices_board_logo.png?v=3", title: "SPICE BOARD" },
  { id: "fieo", logo: "/fieo.jpg", title: "FIEO" }
];
