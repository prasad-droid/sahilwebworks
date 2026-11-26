/**
 * Service portfolio.
 *
 * Broad, editable categories only — detailed capabilities such as customs
 * clearance, freight forwarding or certification have not been supplied and are
 * intentionally not claimed here.
 *
 * {
 *   id: "unique-service-id",
 *   title: "Service Name",
 *   description: "Service description",
 *   image: "/images/services/service.jpg",
 *   imageAlt: "Descriptive alt text",
 *   icon: "import" | "export" | "trade" | "recycle" | "business",
 *   available: true
 * }
 */

export const services = [
  {
    id: "service-import",
    title: "Import Services",
    description:
      "Support for sourcing and importing products through relevant supplier and market connections.",
    image: "/images/trade/container-port.jpg",
    imageAlt: "Container port with cargo ships and cranes",
    icon: "import",
    available: true,
  },
  {
    id: "service-export",
    title: "Export Services",
    description:
      "Connecting products and suppliers with potential international buyers.",
    image: "/images/trade/stacked-containers.jpg",
    imageAlt: "Shipping containers stacked at a commercial port",
    icon: "export",
    available: true,
  },
  {
    id: "service-agriculture",
    title: "Agriculture Trade",
    description:
      "Business opportunities and product trading related to the agriculture sector.",
    image: "/images/agriculture/grain-spice-market.jpg",
    imageAlt: "Sacks of grains and spices at a wholesale market",
    icon: "leaf",
    available: true,
  },
  {
    id: "service-recycling",
    title: "Recycling Industry",
    description:
      "Business connections and trade opportunities for recycling companies.",
    image: "/images/recycling/plastic-bottles.jpg",
    imageAlt: "Crushed plastic bottles collected for recycling",
    icon: "recycle",
    available: true,
  },
  {
    id: "service-business",
    title: "Business Support",
    description:
      "General import-export and trade-related support shaped around your requirement.",
    image: "/images/trade/warehouse.jpg",
    imageAlt: "Workers walking through a logistics warehouse",
    icon: "business",
    available: true,
  },
];

export default services;
