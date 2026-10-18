/**
 * Service portfolio.
 *
 * Broad, editable categories only — detailed service information has not been
 * supplied. Add or replace entries as the company's portfolio grows; every card,
 * the enquiry form dropdown and the footer follow this data.
 *
 * {
 *   id: "unique-service-id",
 *   title: "Service Name",
 *   description: "Service description",
 *   image: "/images/services/service.jpg",
 *   icon: "import" | "export" | "trade" | "business",
 *   available: true
 * }
 */

export const services = [
  {
    id: "service-import",
    title: "Import Services",
    description: "Support for import-related business requirements.",
    image: "",
    icon: "import",
    available: true,
  },
  {
    id: "service-export",
    title: "Export Services",
    description: "Support for export-related product requirements.",
    image: "",
    icon: "export",
    available: true,
  },
  {
    id: "service-trading",
    title: "Product Trading",
    description: "Connecting products with potential buyers and markets.",
    image: "",
    icon: "trade",
    available: true,
  },
  {
    id: "service-business",
    title: "Business Services",
    description:
      "Additional services can be added as the company's portfolio grows.",
    image: "",
    icon: "business",
    available: true,
  },
];

export default services;
