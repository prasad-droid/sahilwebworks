// Central configuration for VINEXA GLOBAL ENTERPRISES.
// Update contact details, links and placeholders here only once.

import riceDalCatalog from "../assets/Rice and Dal Final Catalog.pdf";
import spicesCatalog from "../assets/Spices Final Catalog.pdf";
import engineeringCatalog from "../assets/Engineering Products Final Catalog.pdf";
import cattleFeedCatalog from "../assets/Cattle feed catalog.pdf";

export const site = {
  name: "VINEXA GLOBAL ENTERPRISES",
  shortName: "VINEXA",
  tagline: "Taking India's Best To Worldwide",
  businessType: "Indian Merchant Exporter & Global Sourcing Partner",
  url: "https://www.vinexaglobal.com/",
  description:
    "VINEXA GLOBAL ENTERPRISES is an Indian merchant exporter and sourcing partner for agricultural products, engineering products and engineering services, serving global B2B buyers.",
  keywords:
    "Indian exporter, merchant exporter India, agricultural products exporter, basmati rice export, spices export India, cattle feed export, engineering products India, B2B sourcing India, global sourcing partner, Nagpur exporter, Maharashtra exporter, rice supplier India, pulses export, food grains export, industrial components export",
};

export const contact = {
  phone: "+91 89830 05342",
  phoneRaw: "+918983005342",
  whatsapp: "+91 89830 05342",
  whatsappRaw: "918983005342",
  email: "contact.vinexaglobal@gmail.com",
  addressLines: ["Netaji Nagar, Old Pardi Naka", "Nagpur, Maharashtra", "India"],
};

// Pre-filled WhatsApp message.
export const whatsappMessage =
  "Hello VINEXA GLOBAL ENTERPRISES, I am interested in your export products and would like to discuss my requirement.";

export const whatsappLink = () =>
  `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

// Social media links. Leave empty strings until official profiles are provided.
// Only active (non-empty) links render in the UI.
export const social = {
  linkedin: "",
  facebook: "",
  instagram: "",
  twitter: "",
  youtube: "",
};

// Product catalogue downloads.
// Each category catalogue is imported from src/assets and served as a
// downloadable PDF. To add or replace a catalogue, drop the PDF into
// src/assets/ and update this list.
export const catalogues = [
  {
    id: "rice-dal",
    label: "Cereals and Pulses",
    description: "Cereals and pulses product range",
    url: riceDalCatalog,
    fileName: "Rice and Dal Final Catalog.pdf",
  },
  {
    id: "spices",
    label: "Spices",
    description: "Spices product range",
    url: spicesCatalog,
    fileName: "Spices Final Catalog.pdf",
  },
  {
    id: "cattle-feed",
    label: "Cattle Feed",
    description: "Cattle feed product range",
    url: cattleFeedCatalog,
    fileName: "Cattle Feed Catalog.pdf",
  },
  {
    id: "engineering",
    label: "Engineering Products",
    description: "Engineering products range",
    url: engineeringCatalog,
    fileName: "Engineering Products Final Catalog.pdf",
  },
];

// Google Maps embed — generated from the company address.
export const mapEmbedUrl =
  "https://www.google.com/maps?q=Netaji+Nagar,+Old+Pardi+Naka,+Nagpur,+Maharashtra,+India&z=15&output=embed";

// Optional OAuth/contact form integration.
// Wire these to your backend service when ready.
export const formEndpoint = "";
