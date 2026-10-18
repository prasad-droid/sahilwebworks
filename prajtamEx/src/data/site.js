/**
 * Centralised, data-driven copy for the single-page site.
 * Everything here can be edited without touching component markup.
 */

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "products", label: "Products" },
  { id: "services", label: "Services" },
  { id: "global-markets", label: "Global Markets" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const heroEyebrow = "IMPORT • EXPORT • AGRICULTURE • RECYCLING";

export const heroHighlights = [
  { id: "hero-agri", icon: "leaf", label: "Agriculture", image: "/images/agriculture/spice-bazaar.jpg" },
  { id: "hero-recycle", icon: "recycle", label: "Recycling", image: "/images/recycling/metal-cubes.jpg" },
  { id: "hero-trade", icon: "ship", label: "Import & Export", image: "/images/trade/container-port.jpg" },
];

export const trustStrip = [
  { id: "trust-1", icon: "ship", label: "Import & Export" },
  { id: "trust-2", icon: "leaf", label: "Agriculture Focus" },
  { id: "trust-3", icon: "recycle", label: "Recycling Sector" },
  { id: "trust-4", icon: "package", label: "Product Portfolio" },
  { id: "trust-5", icon: "globe", label: "Global Markets" },
  { id: "trust-6", icon: "briefcase", label: "Business Services" },
];

export const focusPillars = [
  {
    id: "focus-agriculture",
    number: "01",
    title: "Agriculture",
    description:
      "Focused on opportunities related to the agriculture sector and agricultural products.",
    image: "/images/agriculture/grain-spice-market.jpg",
    imageAlt:
      "Wholesale market stall stacked with sacks of grains and spices — representative industry imagery",
    points: ["Agricultural products", "Agri-related markets", "Buyer & supplier connections"],
    stock: true,
  },
  {
    id: "focus-recycling",
    number: "02",
    title: "Recycling",
    description:
      "Focused on business opportunities and products related to recycling companies and the recycling sector.",
    image: "/images/recycling/scrap-crane.jpg",
    imageAlt:
      "Magnet crane handling scrap metal inside an industrial recycling yard — representative industry imagery",
    points: ["Recycling companies", "Recovered materials", "Circular economy trade"],
    stock: true,
  },
];

export const portfolioAreas = [
  {
    id: "portfolio-agriculture",
    title: "Agriculture",
    description: "Agriculture-related products and opportunities.",
    image: "/images/agriculture/fields-aerial.jpg",
    imageAlt: "Aerial view of green agricultural fields — representative industry imagery",
    stock: true,
  },
  {
    id: "portfolio-recycling",
    title: "Recycling",
    description: "Recycling-sector related business opportunities.",
    image: "/images/recycling/recyclable-stacks.jpg",
    imageAlt: "Aerial view of sorted recyclable material stacks — representative industry imagery",
    stock: true,
  },
  {
    id: "portfolio-import-export",
    title: "Import & Export",
    description: "International and domestic trading opportunities.",
    image: "/images/trade/port-cranes.jpg",
    imageAlt: "Cranes loading a container ship at a commercial port — representative industry imagery",
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
    description: "Coordinate the relevant business/trading process.",
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
    id: "why-connectivity",
    icon: "link",
    title: "Market Connectivity",
    description: "Focused on connecting businesses and markets.",
  },
  {
    id: "why-agriculture",
    icon: "leaf",
    title: "Agriculture Focus",
    description: "Focused on opportunities within agriculture-related markets.",
  },
  {
    id: "why-recycling",
    icon: "recycle",
    title: "Recycling Sector",
    description: "Focused on opportunities related to recycling companies.",
  },
  {
    id: "why-import-export",
    icon: "globe",
    title: "Import & Export",
    description: "Built around international and domestic trading opportunities.",
  },
  {
    id: "why-portfolio",
    icon: "layers",
    title: "Growing Portfolio",
    description: "Designed to support an expanding range of products and services.",
  },
  {
    id: "why-enquiry",
    icon: "chat",
    title: "Direct Enquiry",
    description: "Easy access through phone, WhatsApp and email.",
  },
];

export const requirementTypes = [
  "Product Enquiry",
  "Import",
  "Export",
  "Agriculture",
  "Recycling",
  "Business Service",
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
