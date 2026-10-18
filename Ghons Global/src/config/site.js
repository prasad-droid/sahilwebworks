export const company = {
  name: "GHONS Global Impex",
  shortName: "GHONS",
  tagline: "Smart Supply for Modern Markets",
  type: "Merchant Trader & Exporter",
  phone: "+91 7039281981",
  whatsapp: "917039281981",
  email: "ghonsglobal@gmail.com",
  addressLines: ["1A, 503, Shankheshwar Palm", "Dombivli West, Maharashtra, India"],
  addressShort: "Dombivli West, Maharashtra, India",
  mapQuery: "Shankheshwar Palm, Dombivli West, Maharashtra",
  url: "https://ghonsglobalimpex.com/",
};

export const WHATSAPP_BASE = "https://wa.me/917039281981";

export const waLink = (message) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
