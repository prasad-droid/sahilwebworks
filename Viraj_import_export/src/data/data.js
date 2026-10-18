const carpets = Object.values(
  import.meta.glob("../assets/images/carpets/*.jpg", { eager: true, as: "url" })
);

const towels = Object.values(
  import.meta.glob("../assets/images/towels/*.jpg", { eager: true, as: "url" })
);

const handicrafts = Object.values(
  import.meta.glob("../assets/images/handicrafts/*.jpg", { eager: true, as: "url" })
);

const galleryItems = [
  ...carpets.map((src, i) => ({
    src,
    alt: "Handmade Indian carpet – hand knotted rug for export",
    category: "Carpets",
    title: "Handmade Carpet",
  })),
  ...towels.map((src, i) => ({
    src,
    alt: "Premium 100% cotton terry towel for hotel and spa",
    category: "Terry Towels",
    title: "Premium Terry Towel",
  })),
  ...handicrafts.map((src, i) => ({
    src,
    alt: "Handcrafted wooden décor and gift items made in India",
    category: "Wooden Handicrafts",
    title: "Wooden Handicraft",
  })),
];

const testimonials = [
  {
    name: "David Thompson",
    country: "Australia",
    business: "Wholesale Importer",
    rating: 5,
    review:
      "Outstanding quality and a very professional export partner. The handmade carpets exceeded our expectations and arrived exactly on schedule.",
  },
  {
    name: "Ahmed Al-Rashid",
    country: "UAE",
    business: "Hospitality Procurement",
    rating: 5,
    review:
      "We source hotel towels and rugs from Viraj on a regular basis. Consistent quality, clean packaging, and reliable documentation every single time.",
  },
  {
    name: "Sarah Mitchell",
    country: "United Kingdom",
    business: "Home Décor Retailer",
    rating: 5,
    review:
      "The wooden handicrafts are beautifully crafted and our customers love them. Viraj is now our trusted long-term sourcing partner.",
  },
  {
    name: "Michael Chen",
    country: "Singapore",
    business: "E-commerce Business",
    rating: 4,
    review:
      "Great communication and very competitive pricing. Custom sizes and branding were handled smoothly from start to finish.",
  },
  {
    name: "Priya Fernando",
    country: "Sri Lanka",
    business: "Interior Design Studio",
    rating: 5,
    review:
      "Elegant, premium products with a truly ethical sourcing story. A pleasure to work with and always responsive to custom requests.",
  },
  {
    name: "James Anderson",
    country: "United States",
    business: "Retail Chain Buyer",
    rating: 5,
    review:
      "From first inquiry to final delivery, the process was seamless. Export documentation support saved us a lot of time and hassle.",
  },
];

const services = [
  {
    title: "Merchant Export",
    desc: "End-to-end export management with a dedicated team handling every detail of your order.",
  },
  {
    title: "Product Sourcing",
    desc: "Trusted manufacturer network across India to source premium products at the right price.",
  },
  {
    title: "Quality Inspection",
    desc: "Rigorous multi-stage quality checks so every shipment meets international standards.",
  },
  {
    title: "Export Documentation",
    desc: "Complete paperwork handled — from commercial invoices to certificates of origin.",
  },
  {
    title: "Packaging Solutions",
    desc: "Premium export-grade packaging that keeps your products safe from factory to destination.",
  },
  {
    title: "Logistics & Shipping",
    desc: "Reliable sea and air freight with real-time coordination for worldwide delivery.",
  },
  {
    title: "Custom Orders",
    desc: "Custom sizes, designs, and branding tailored to your market and customer needs.",
  },
];

const whyChooseUs = [
  { title: "Premium Quality Products", desc: "Hand-picked products that consistently meet international quality standards." },
  { title: "Reliable Manufacturer Network", desc: "Partnered with skilled artisans and certified manufacturers across India." },
  { title: "Competitive Pricing", desc: "Direct sourcing from origin ensures fair, factory-competitive pricing." },
  { title: "Timely Delivery", desc: "Disciplined production planning and logistics for on-time worldwide delivery." },
  { title: "Export Documentation Support", desc: "Hassle-free paperwork handled by an experienced export documentation team." },
  { title: "Customized Solutions", desc: "Bespoke sizes, designs, and branding built around your exact requirements." },
  { title: "Professional Customer Support", desc: "A responsive single point of contact from inquiry to final delivery." },
  { title: "Customer Satisfaction", desc: "Long-term relationships built on trust, transparency, and consistent service." },
];

const industries = [
  "Importers",
  "Wholesalers",
  "Retail Chains",
  "Hospitality Industry",
  "Hotels",
  "Resorts",
  "Interior Designers",
  "Home Décor Stores",
  "Gift Shops",
  "E-commerce Businesses",
];

const processSteps = [
  { step: "01", title: "Inquiry", desc: "Share your requirements through our inquiry form or WhatsApp." },
  { step: "02", title: "Product Selection", desc: "We recommend the best products and samples matched to your needs." },
  { step: "03", title: "Customization", desc: "Customize sizes, designs, GSM, colors, and private labeling." },
  { step: "04", title: "Quality Inspection", desc: "Every order passes strict multi-stage quality checks." },
  { step: "05", title: "Packaging & Documentation", desc: "Export-grade packaging and complete documentation prepared." },
  { step: "06", title: "Worldwide Shipping", desc: "Reliable sea and air freight with tracking to your destination." },
];

const countries = [
  "Australia",
  "UAE",
  "Saudi Arabia",
  "Singapore",
  "Sri Lanka",
  "United Kingdom",
  "United States",
  "Canada",
  "Germany",
  "France",
  "Netherlands",
  "Italy",
  "South Africa",
  "Qatar",
  "Oman",
  "Kuwait",
  "Bahrain",
  "Malaysia",
  "New Zealand",
];

const productCategories = [
  "Handmade Carpets",
  "Premium Terry Towels",
  "Wooden Handicrafts",
];

const WHATSAPP_NUMBER = "919226559225";
const CONTACT = {
  phone: "+91 9226559225",
  whatsapp: "+91 9226559225",
  email: "Sachin@virajimportexport.com",
  addressLines: ["Viraj, Islampur", "District Sangli, Maharashtra 415409", "India"],
};

export {
  carpets,
  towels,
  handicrafts,
  galleryItems,
  testimonials,
  services,
  whyChooseUs,
  industries,
  processSteps,
  countries,
  productCategories,
  WHATSAPP_NUMBER,
  CONTACT,
};
