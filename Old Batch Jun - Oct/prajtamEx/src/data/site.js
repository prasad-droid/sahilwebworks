/**
 * Centralised, data-driven copy for the single-page site.
 * Everything here can be edited without touching component markup.
 */

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "services", label: "Services / Products", match: ["services", "products"] },
  {
    id: "portfolio",
    label: "Portfolio",
    match: ["portfolio", "global-markets", "process", "gallery"],
  },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact Us" },
];

export const heroEyebrow = "IMPORT • EXPORT • AGRICULTURE • RECYCLING";

export const heroHighlights = [
  {
    id: "hero-trade",
    icon: "ship",
    label: "Global Trade",
    image: "/images/trade/container-ship.jpg",
  },
  {
    id: "hero-agri",
    icon: "leaf",
    label: "Agriculture",
    image: "/images/agriculture/harvester.jpg",
  },
  {
    id: "hero-recycle",
    icon: "recycle",
    label: "Recycling & Sustainability",
    image: "/images/recycling/metal-cubes.jpg",
  },
];

export const trustStrip = [
  { id: "trust-1", icon: "ship", label: "Import & Export" },
  { id: "trust-2", icon: "leaf", label: "Agriculture Focus" },
  { id: "trust-3", icon: "recycle", label: "Recycling Sector" },
  { id: "trust-4", icon: "globe", label: "Global Markets" },
  { id: "trust-5", icon: "package", label: "Product Portfolio" },
  { id: "trust-6", icon: "briefcase", label: "Business Services" },
];

export const portfolioAreas = [
  {
    id: "portfolio-agriculture",
    title: "Agriculture",
    description: "Agriculture-related products and business opportunities.",
    image: "/images/agriculture/coco-pith-3.jpg",
    imageAlt: "Coco pith product imagery supplied by PrajtamEx",
    stock: false,
  },
  {
    id: "portfolio-recycling",
    title: "Recycling",
    description: "Business connections and trade opportunities for recycling companies.",
    image: "/images/recycling/scrap-crane.jpg",
    imageAlt:
      "Magnet crane handling scrap metal inside a recycling yard — representative industry imagery",
    stock: true,
  },
  {
    id: "portfolio-import-export",
    title: "Import & Export",
    description: "International and domestic trading opportunities.",
    image: "/images/trade/port-cranes.jpg",
    imageAlt: "Container cranes at a commercial port — representative industry imagery",
    stock: true,
  },
];

export const processSteps = [
  {
    id: "process-requirement",
    number: "01",
    title: "Requirement",
    description: "Understand the buyer's product or service requirement.",
  },
  {
    id: "process-connect",
    number: "02",
    title: "Connect",
    description: "Connect relevant products, businesses or opportunities.",
  },
  {
    id: "process-coordinate",
    number: "03",
    title: "Coordinate",
    description: "Coordinate the relevant business or trading process.",
  },
  {
    id: "process-grow",
    number: "04",
    title: "Grow",
    description: "Build long-term business opportunities and market connections.",
  },
];

export const whyItems = [
  {
    id: "why-connections",
    icon: "globe",
    title: "Global Business Connections",
    description:
      "Focused on connecting buyers, suppliers and business partners across domestic and international markets.",
  },
  {
    id: "why-focus",
    icon: "leaf",
    title: "Agriculture & Recycling Focus",
    description:
      "Built around opportunities in agriculture-related industries and the recycling sector.",
  },
  {
    id: "why-customer",
    icon: "chat",
    title: "Customer-Focused Approach",
    description:
      "Every enquiry starts with understanding the requirement and responding with relevant next steps.",
  },
  {
    id: "why-long-term",
    icon: "link",
    title: "Long-Term Business Relationships",
    description:
      "A relationship-led approach that supports repeat business and lasting market connections.",
  },
];

export const requirementTypes = [
  "Product Enquiry",
  "Import Services",
  "Export Services",
  "Agriculture Trade",
  "Recycling Industry",
  "Business Support",
  "Other",
];

export const globalMarketNodes = [
  { id: "node-arabian-sea", lon: 60, lat: 20 },
  { id: "node-indian-ocean", lon: 70, lat: -16 },
  { id: "node-mediterranean", lon: 20, lat: 34 },
  { id: "node-south-china-sea", lon: 112, lat: 8 },
  { id: "node-north-pacific", lon: 160, lat: 32 },
  { id: "node-mid-atlantic", lon: -38, lat: 36 },
  { id: "node-south-atlantic", lon: -26, lat: -24 },
  { id: "node-east-pacific", lon: -136, lat: 26 },
];

export const globalMarketLegend = [
  { id: "legend-suppliers", icon: "package", label: "Suppliers" },
  { id: "legend-buyers", icon: "users", label: "Buyers" },
  { id: "legend-agriculture", icon: "leaf", label: "Agriculture" },
  { id: "legend-recycling", icon: "recycle", label: "Recycling" },
  { id: "legend-trade", icon: "ship", label: "Trade" },
  { id: "legend-logistics", icon: "truck", label: "Logistics" },
];
