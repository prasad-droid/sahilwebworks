// ==========================================================================
// PRODUCT PORTFOLIO DATA
// --------------------------------------------------------------------------
// IMPORTANT: These are neutral positioning categories, NOT confirmed products.
// Replace portfolio categories with confirmed product list after client call.
//
// To add a real product later, add a new object to PRODUCTS with the same
// shape. Each product supports: image, name, description, origin, packaging,
// applications and an enquiry action.
//
// Only display fields once confirmed by the client. Fields such as MOQ,
// certifications, grade, shelf life and quantity are intentionally omitted.
// ==========================================================================

export const PRODUCTS = [
  {
    id: "agro-commodities",
    categoryTag: "AGRO COMMODITIES",
    name: "Agricultural Commodities",
    description:
      "Quality agricultural commodities sourced for international markets.",
    origin: "India",
    packaging: "As per buyer requirement",
    applications: "Food processing · Retail · Industrial use",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=70",
    imageAlt:
      "Golden agricultural field representing agro commodity sourcing from India",
  },
  {
    id: "bulk-supply",
    categoryTag: "BULK SUPPLY",
    name: "Bulk Supply Solutions",
    description:
      "Solutions designed for B2B buyers and bulk requirements.",
    origin: "India",
    packaging: "Export-grade bulk packaging",
    applications: "Importers · Wholesalers · Distributors",
    image:
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=900&q=70",
    imageAlt: "Bulk grains in sacks ready for export packaging",
  },
  {
    id: "export-supply",
    categoryTag: "EXPORT SUPPLY",
    name: "Export Supply Coordination",
    description:
      "Commodity sourcing and export coordination for international buyers.",
    origin: "India",
    packaging: "Standard export packing",
    applications: "Cross-border trade · International buyers",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=900&q=70",
    imageAlt: "Shipping containers at a port representing export trade",
  },
  {
    id: "custom-requirements",
    categoryTag: "CUSTOM REQUIREMENTS",
    name: "Custom Sourcing",
    description:
      "Product sourcing based on specific buyer requirements.",
    origin: "India",
    packaging: "Tailored to requirement",
    applications: "Buyer-specified sourcing",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=70",
    imageAlt: "Assorted agricultural produce representing custom sourcing",
  },
];
