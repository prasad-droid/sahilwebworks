// ==========================================================================
// WEBSITE CONTENT — DEFAULTS
// --------------------------------------------------------------------------
// Single source of truth for every editable piece of copy on the website.
// The public site merges `content` from the admin backend over these defaults,
// so a blank field always keeps the text below instead of blanking the site.
//
// Admin Panel > Website Content edits this structure directly. The editor
// schema lives in src/admin/contentSchema.js.
// ==========================================================================

import logoMark from "../assets/brand/logo-mark.webp";
import operationsImage from "../assets/brand/company-operations.jpg";
import { CERTIFICATIONS } from "../data/certifications";
import { DESTINATIONS } from "../data/countries";
import { NAV_LINKS } from "../data/site";

// --------------------------------------------------------------------------
// Homepage section lists
// --------------------------------------------------------------------------

const WHY_REASONS = [
  { title: "Premium Export Quality Products", text: "Carefully selected, graded and packed produce built for international markets." },
  { title: "Direct Farm Sourcing", text: "Sourced directly from experienced farmers and carefully selected growers." },
  { title: "International Food Safety Standards", text: "Handled and documented in line with international food safety expectations." },
  { title: "Fresh & Hygienic Packing", text: "Hygienic packing practices that protect freshness from farm to destination." },
  { title: "Competitive Prices", text: "Straightforward, competitive pricing for long-term B2B relationships." },
  { title: "Fast Worldwide Shipping", text: "Efficient logistics and dependable worldwide shipping coordination." },
  { title: "Customized Packaging", text: "Packaging tailored to your brand, market and buyer requirements." },
  { title: "Export Documentation Support", text: "Full support with export documentation for smooth customs clearance." },
  { title: "Timely Delivery", text: "Planned shipments and reliable schedules to keep your supply on time." },
  { title: "Professional Customer Service", text: "A responsive, professional team that stays with you through every order." },
];

const PROCESS_STEPS = [
  { num: "01", title: "Farm Selection", text: "Selecting the right farms and growers." },
  { num: "02", title: "Harvesting", text: "Harvesting at the right stage of maturity." },
  { num: "03", title: "Quality Inspection", text: "Inspecting produce for quality and safety." },
  { num: "04", title: "Sorting & Grading", text: "Sorting and grading to export specifications." },
  { num: "05", title: "Hygienic Packing", text: "Packing hygienically in the required format." },
  { num: "06", title: "Cold Storage", text: "Storing under temperature-controlled conditions." },
  { num: "07", title: "Container Loading", text: "Careful container loading for safe transit." },
  { num: "08", title: "Worldwide Shipping", text: "Coordinated shipping to destinations worldwide." },
];

const EXPORT_LIST = [
  "Fresh Bananas (G9-Cavendish)",
  "Pomegranates",
  "Mangoes",
  "Grapes (Thomson, Chrimson, Sharad-Black)",
  "Onions (Red, Pink-Garwa)",
  "Ginger",
  "Green Chillies (G4-Gauri)",
  "Tomatoes",
  "Okra",
  "Sweet Corn",
  "Maize",
  "Semi-Husked Coconuts",
  "Fresh Vegetables",
  "Fresh Fruits",
  "Indian Spices",
  "Customized Agricultural Products",
];

const MISSION_POINTS = [
  "Delivering premium-quality fresh produce sourced directly from trusted Indian farms.",
  "Maintaining international standards in grading, sorting, packaging, and cold-chain logistics.",
  "Building long-term relationships based on trust, transparency, and dependable service.",
  "Providing customized packaging and export solutions to meet the specific needs of global buyers.",
  "Ensuring timely deliveries through efficient supply chain management and reliable logistics.",
  "Continuously improving our processes through innovation, technology, and customer feedback.",
];

const ABOUT_WHY = [
  "Trusted Indian Exporter & Importer",
  "Premium Farm Fresh Produce",
  "Direct Sourcing from Certified Farms",
  "International Quality Standards",
  "Competitive Pricing",
  "Customized Packaging Solutions",
  "Efficient Global Logistics",
  "Timely Worldwide Deliveries",
  "Experienced Export Documentation Support",
  "Customer-Centric Business Approach",
];

const PACKAGING = [
  "Carton Boxes",
  "PP Mesh Bags",
  "Jute Bags",
  "Food Grade",
  "Customized Branding",
  "Private Label",
];

const QUALITY_STEPS = [
  "Farm Selection",
  "Quality Inspection",
  "Sorting & Grading",
  "Hygienic Packing",
  "Cold Storage",
  "Container Loading",
];

const CERT_QUALITY_CHECKS = [
  "Farm Inspection",
  "Sorting",
  "Grading",
  "Cleaning",
  "Quality Testing",
  "Hygienic Packing",
  "Container Loading Inspection",
];

const CONTACT_WHY = [
  { title: "Quick & Transparent Response", text: "Our team replies to genuine business enquiries with clear information." },
  { title: "Export Documentation Support", text: "Help with the paperwork your shipment needs to clear customs." },
  { title: "Customized Packaging Solutions", text: "Packaging tailored to your brand, market and buyer requirements." },
  { title: "Bulk Supply Capability", text: "Container-scale and repeat orders planned around your schedule." },
  { title: "Worldwide Shipping Assistance", text: "Coordination with freight partners for deliveries across the globe." },
];

const QUOTE_POINTS = [
  "Product, grade and quantity",
  "Preferred packing and private label requirements",
  "Destination port and expected timeline",
  "Any inspection or documentation requirements",
];

const PRIVACY_SECTIONS = [
  {
    title: "Information we collect",
    paragraphs: [
      "When you submit an enquiry or a quotation request through this website, we collect the details you enter, such as your name, company, email address, phone number, country and your product requirement.",
      "We do not collect any sensitive financial information through this website. There is no payment or checkout functionality on this site.",
    ],
  },
  {
    title: "How we use your information",
    paragraphs: [
      "We use the information you provide only to respond to your enquiry, prepare a quotation, and coordinate product, packing, shipping and documentation details for your order.",
      "We may also use your contact details to follow up on an existing conversation, or to share an update directly related to your requirement.",
    ],
  },
  {
    title: "Who we share it with",
    paragraphs: [
      "We do not sell or rent your personal information. Details you share are used internally by our team and, where needed to fulfil your order, with our logistics, freight and documentation partners and with the relevant authorities for export compliance.",
    ],
  },
  {
    title: "Third-party services used on this site",
    paragraphs: [
      "This website embeds a Google Map to show our location, and links to our social media profiles. Those services operate under their own privacy policies, which we do not control.",
      "No analytics, advertising or tracking cookies are set by this website at this time.",
    ],
  },
  {
    title: "Data retention",
    paragraphs: [
      "Enquiry records are kept only for as long as needed to handle your request and for our ordinary business and export record-keeping obligations. You can ask us to delete your details at any time.",
    ],
  },
  {
    title: "Your choices",
    paragraphs: [
      "You are free to share only the information you are comfortable sharing. If you prefer not to use the online forms, you can reach us directly by email or phone instead.",
      "You may request access to, correction of, or deletion of the personal information we hold about you by contacting us.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We take reasonable steps to protect the information you send us. As with any online communication, no transmission over the internet can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Children's privacy",
    paragraphs: [
      "This website is intended for business use and is not directed at children. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy from time to time. Any changes will be published on this page with an updated date.",
    ],
  },
  {
    title: "Contact us",
    paragraphs: [
      "If you have any questions about this privacy policy or about how your information is handled, please contact {company} at {email}.",
    ],
  },
];

const SECTIONS = [
  { id: "heroSlider", label: "Hero Slider", visible: true },
  { id: "homeIntro", label: "Home Intro (headline)", visible: true },
  { id: "about", label: "About Us (homepage)", visible: true },
  { id: "productsIndian", label: "Products — Indian Origin", visible: true },
  { id: "productsImported", label: "Products — Imported", visible: true },
  { id: "services", label: "Services", visible: true },
  { id: "categories", label: "Categories", visible: true },
  { id: "gallery", label: "Gallery", visible: true },
  { id: "whyChooseUs", label: "Why Choose Us", visible: true },
  { id: "exportProcess", label: "Export Process", visible: true },
  { id: "exportMap", label: "Export Map", visible: true },
  { id: "commitment", label: "Our Commitment", visible: true },
  { id: "testimonials", label: "Customer Reviews", visible: true },
  { id: "offers", label: "Offers & Promotions", visible: true },
  { id: "quoteCta", label: "Get a Quote CTA", visible: true },
  { id: "blog", label: "Blog & News", visible: true },
  { id: "certifications", label: "Certifications", visible: true },
];

// --------------------------------------------------------------------------
// DEFAULT CONTENT
// --------------------------------------------------------------------------

export const DEFAULT_CONTENT = {
  header: {
    logo: logoMark,
    ctaLabel: "Get a Quote",
    ctaHref: "/quote",
    nav: NAV_LINKS.map((l) => ({ ...l })),
  },

  footer: {
    brandSub: "EXPORT · IMPORT · DISTRIBUTION",
    description:
      "Exporter of Indian origin fresh fruits, vegetables, spices and agricultural products, and importer of premium dry fruits processed and distributed across India and worldwide.",
    navigationHeading: "Navigation",
    contactHeading: "Contact",
    findUsHeading: "Find Us",
    privacyLabel: "Privacy Policy",
    copyright: "© {year} {company}. All rights reserved.",
  },

  homeIntro: {
    title: "Connecting Indian & Globally Sourced Agro Commodities",
    titleAccent: "with Global Markets",
    text: "Delivering farm-fresh fruits, vegetables, spices, dry fruits and other agricultural products from India to customers worldwide. We provide premium quality produce sourced directly from certified farms with international export standards, competitive pricing, and timely global delivery.",
    primaryLabel: "Get a Quote",
    secondaryLabel: "Explore Products",
  },

  about: {
    eyebrow: "About Us",
    title: "Welcome to Sugi International",
    image: operationsImage,
    badgeTop: "GLOBAL",
    badgeBottom: "WORLD",
    ctaLabel: "Discover More About Us",
    paragraphs: [
      "Sugi International Pvt. Ltd. is a leading exporter of Indian origin fresh fruits, vegetables, spices, Sweet Corn, Maize, Semi Husked Coconuts & Raisins and other agricultural products from India.",
      "We also import premium dry fruits from worldwide suppliers and process them in our world class processing units and export to the global market.",
      "We specialize in supplying premium-quality products to wholesalers, supermarkets, distributors, retailers, and importers across the world. We distribute our imported dry fruits in the PAN India market.",
      "With a strong network of experienced farmers, modern packing facilities, and efficient logistics, we ensure every shipment meets international quality and food safety standards. Our commitment to freshness, reliability, and customer satisfaction has made us a trusted export partner in the global agricultural industry.",
    ],
  },

  quoteCta: {
    eyebrow: "Get a Quote",
    title: "Looking for a reliable fruit and vegetable exporter from India?",
    text: "Tell us what you need, in which quantity and for which destination market, and our export team will come back to you with pricing, packing options and shipping schedules.",
    primaryLabel: "Get a Quote",
    secondaryLabel: "Explore Products",
  },

  sections: SECTIONS,

  home: {
    productsIndian: {
      eyebrow: "Our Products",
      title: "Indian Origin",
      intro: "We export a wide variety of premium Indian origin agricultural products.",
    },
    productsImported: {
      eyebrow: "Our Products",
      title: "Imported",
      intro: "We also import premium dry fruits from worldwide suppliers and process them in our world class processing units and export to the global market.",
    },
    services: {
      eyebrow: "Our Services",
      title: "What We Do",
      intro: "End-to-end sourcing, processing and export services for international buyers.",
    },
    categories: {
      eyebrow: "Categories",
      title: "Browse By Category",
      intro: "Product and service categories we work across.",
    },
    gallery: {
      eyebrow: "Gallery",
      title: "From Our Operations",
      intro: "Sourcing, processing, packing and shipping — a look at how we work.",
    },
    whyChooseUs: {
      eyebrow: "Why Choose Us",
      title: "Why Choose Sugi International?",
      items: WHY_REASONS,
    },
    exportProcess: {
      eyebrow: "Export Process",
      title: "From Farm to Worldwide Delivery",
      steps: PROCESS_STEPS,
    },
    exportMap: {
      eyebrow: "Global Reach",
      title: "Countries We Export To",
      intro:
        "Shipping from India to major markets across the Middle East, Africa, Asia, Europe, North America and Oceania — and many other international destinations.",
      footNote: "…and many other international destinations.",
      destinations: DESTINATIONS.map((d) => ({ ...d })),
    },
    commitment: {
      eyebrow: "Our Commitment",
      title: "Our Commitment",
      text: "Our mission is simple — deliver the freshest agricultural products from Indian farms to international markets while maintaining the highest standards of quality, safety, and customer satisfaction.",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What Our Customers Say",
    },
    offers: {
      eyebrow: "Special Offers",
      title: "Current Promotions",
    },
    blog: {
      eyebrow: "Blog & News",
      title: "Latest Updates",
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Registered with India's export authorities",
    },
  },

  certifications: {
    items: CERTIFICATIONS,
  },

  pages: {
    about: {
      hero: {
        eyebrow: "About Us",
        title: "Sugi International Pvt. Ltd.",
        intro:
          "Our commitment to quality, integrity, and customer satisfaction has made us a preferred partner for buyers seeking reliable agricultural exports from India. We strive to deliver excellence in every shipment and build strong business relationships that grow for years to come.",
      },
      intro: {
        image: operationsImage,
        paragraphs: [
          "Sugi International Pvt. Ltd. is a trusted Indian exporter and importer of premium fresh fruits, vegetables, spices, and agricultural products, committed to delivering exceptional quality to customers across the globe. Based in India, we source our products directly from carefully selected farms and certified growers, ensuring freshness, superior quality, and compliance with international export standards.",
          "With extensive knowledge of global agricultural trade, we specialize in supplying fresh produce that meets the quality, safety, and packaging requirements of international markets. Our strong farmer network, advanced post-harvest handling practices, and efficient logistics enable us to deliver products that retain their freshness from farm to destination.",
        ],
      },
      range: {
        title:
          "We proudly export a wide range of premium Indian agricultural products, including:",
        items: EXPORT_LIST,
        notes: [
          "Every shipment undergoes strict quality inspection, grading, sorting, hygienic packing, and careful container loading to ensure that our customers receive products in excellent condition.",
          "Whether you are a wholesaler, supermarket chain, food distributor, importer, or retail supplier, Sugi International Pvt. Ltd. is dedicated to building long-term partnerships through reliability, transparency, competitive pricing, and consistent product quality.",
        ],
      },
      vision: {
        eyebrow: "Our Vision",
        title: "Our Vision",
        paragraphs: [
          "Our vision is to become one of India's most trusted and globally recognized exporters of fresh fruits, vegetables, and agricultural products by delivering premium-quality produce, embracing sustainable farming practices, and creating lasting value for farmers, customers, and international partners.",
          "We aim to strengthen India's position as a leading global supplier of fresh agricultural products while continuously expanding into new international markets through innovation, quality, and customer satisfaction.",
        ],
      },
      mission: {
        eyebrow: "Our Mission",
        title: "Our Mission",
        paragraphs: [
          "Our mission is to deliver farm-fresh, safe, and high-quality fruits and vegetables to customers worldwide while maintaining the highest standards of food safety, quality control, and international trade compliance.",
        ],
        commitmentLabel: "We are committed to:",
        items: MISSION_POINTS,
      },
      why: {
        eyebrow: "Why Choose Us",
        title: "Why Choose Sugi International Pvt. Ltd.?",
        items: ABOUT_WHY,
        closing:
          "Our commitment to quality, integrity, and customer satisfaction has made us a preferred partner for buyers seeking reliable agricultural exports from India. We strive to deliver excellence in every shipment and build strong business relationships that grow for years to come.",
      },
    },

    products: {
      hero: {
        eyebrow: "Our Products",
        title: "Premium Agro Commodities from India",
        intro:
          "We export a wide variety of premium Indian origin agricultural products, and import premium dry fruits that are processed in our world class processing units and supplied across India and worldwide.",
      },
      indian: {
        eyebrow: "Our Products",
        title: "Indian Origin Products",
        intro:
          "Sourced directly from carefully selected farms and certified growers across India.",
      },
      imported: {
        eyebrow: "Our Products",
        title: "Imported Products",
        intro:
          "We Import Dry Fruits and process it in our world class processing units, repack it and re-export to various destinations and distribute in PAN India domestic market as well. ",
      },
      packaging: {
        eyebrow: "Export Packaging",
        title: "Export Packaging",
        intro:
          "Packaging is selected to protect product quality in transit and to suit your destination market, branding and shelf requirements.",
        items: PACKAGING,
      },
      quality: {
        eyebrow: "Quality Assurance",
        title: "Quality Assurance",
        text: "Every shipment passes through a defined set of checks before it is released for export, so that the product that arrives at your port matches the product that left ours.",
        items: QUALITY_STEPS,
        ctaLabel: "Download Catalogue",
      },
    },

    certifications: {
      hero: {
        eyebrow: "Certifications",
        title: "Certifications & Registrations",
        intro:
          "Sugi International Pvt. Ltd. is registered with India's export and food safety authorities.",
      },
      intro:
        "At Sugi International Pvt. Ltd., quality is our highest priority. Every shipment is prepared following international food safety standards and export regulations. We work closely with certified growers and government-authorized agencies to ensure our products meet the requirements of global markets.",
      downloadLabel: "Download Certificate",
      quality: {
        title: "Quality Control",
        lead: "Every shipment passes through:",
        items: CERT_QUALITY_CHECKS,
        text: "Our experienced quality control team ensures that products maintain freshness, appearance, and shelf life throughout transportation.",
      },
      safety: {
        title: "Food Safety",
        paragraphs: [
          "We are committed to supplying safe, hygienic, and premium-quality agricultural products while meeting the import regulations of destination countries.",
          "Our objective is to build long-term partnerships based on quality, trust, transparency, and customer satisfaction.",
        ],
      },
    },

    articles: {
      hero: {
        eyebrow: "Articles",
        title: "Insights & Articles",
        intro:
          "Notes on Indian agro exports, product handling, packaging and international trade.",
      },
      notice: {
        title: "Export notes from the field",
        text: "A short series on how Indian agro commodities are sourced, packed and shipped. Start with any topic below, or talk to our team directly about a specific product, market or shipment.",
        primaryLabel: "Contact Us",
        primaryHref: "/contact",
        secondaryLabel: "Explore Products",
        secondaryHref: "/products",
        topicsTitle: "Topics we will cover",
        latestTitle: "Latest articles",
        readLabel: "Read Article",
      },
      detail: {
        backLabel: "All articles",
        ctaEyebrow: "Need more detail?",
        ctaTitle: "Talk to our export team",
        ctaText:
          "Share your destination market, product and volume and we will come back with a specification and quotation.",
        ctaPrimaryLabel: "Get a Quote",
        ctaSecondaryLabel: "Contact Us",
        relatedTitle: "More articles",
        relatedAllLabel: "View All Articles",
        notFoundEyebrow: "Articles",
        notFoundTitle: "Article not found",
        notFoundText: "The article you are looking for is not available.",
        notFoundBackLabel: "Back to Articles",
      },
    },

    contact: {
      hero: {
        eyebrow: "Contact Us",
        title: "Let's Talk About Your Requirement",
        intro:
          "Our export experts are ready to assist you with product information, pricing, packaging options, shipping schedules and documentation.",
      },
      form: {
        eyebrow: "Send Us Your Requirement",
        title: "Contact Us Form",
        text: "Our concerned team will definitely respond to you. Fields marked with * are required.",
      },
      why: {
        eyebrow: "Why Contact Us?",
        title: "Why Contact Us?",
        items: CONTACT_WHY,
      },
      partner: {
        eyebrow: "Become a Partner",
        title:
          "Are you a farmer, grower or supplier looking for a trusted export partner?",
        text: "If you supply quality agricultural produce and want access to international markets, we would like to hear from you.",
        primaryLabel: "Partner With Us",
        secondaryLabel: "Email Us",
      },
    },

    quote: {
      hero: {
        eyebrow: "Get a Quote",
        title: "Request a Quotation",
        intro:
          "Tell us what you need, in which quantity and for which destination, and our export team will respond with pricing, packing options and shipping schedules.",
      },
      form: {
        eyebrow: "Quotation Request",
        title: "Tell us your requirement",
        text: "The more detail you share, the faster we can come back with an accurate quotation.",
      },
      panel: {
        title: "Helpful to include",
        items: QUOTE_POINTS,
        contactTitle: "Prefer to talk?",
      },
    },

    privacy: {
      hero: {
        eyebrow: "Legal",
        title: "Privacy Policy",
        intro: "How we handle the information you share with us through this website.",
      },
      tocTitle: "On this page",
      sections: PRIVACY_SECTIONS,
    },
  },
};

// --------------------------------------------------------------------------
// MERGE HELPERS
// --------------------------------------------------------------------------
// Rules:
//   • text left blank      → keep the bundled default (never blank the site)
//   • lists                → an admin list (even empty) replaces the default,
//                            so items can be removed intentionally
//   • objects              → merged key by key
// --------------------------------------------------------------------------

function clone(value) {
  return typeof structuredClone === "function"
    ? structuredClone(value)
    : JSON.parse(JSON.stringify(value));
}

export function mergeContent(base, override) {
  if (override === undefined || override === null) return clone(base);

  if (Array.isArray(base)) {
    return Array.isArray(override) ? clone(override) : clone(base);
  }

  if (typeof base === "object") {
    if (typeof override !== "object" || Array.isArray(override)) {
      return clone(base);
    }
    const out = clone(base);
    for (const key of Object.keys(override)) {
      out[key] = key in base ? mergeContent(base[key], override[key]) : override[key];
    }
    return out;
  }

  if (typeof base === "string") {
    return typeof override === "string" && override.trim() === ""
      ? base
      : override;
  }

  return override;
}

// --------------------------------------------------------------------------
// SAVE PATCH
// --------------------------------------------------------------------------
// Returns only the values that differ from the bundled defaults, so the admin
// only persists real edits. In particular this keeps hashed build asset URLs
// (logo/images) out of the database, so they never go stale after a rebuild.
// Blank text is treated as "use the default" and omitted.
// --------------------------------------------------------------------------

const isPlainObject = (value) =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const sameValue = (a, b) => JSON.stringify(a) === JSON.stringify(b);

export function diffContent(defaults, current) {
  if (Array.isArray(defaults) || Array.isArray(current)) {
    if (sameValue(defaults, current)) return undefined;
    return clone(current);
  }

  if (isPlainObject(defaults) && isPlainObject(current)) {
    const out = {};
    for (const key of Object.keys(current)) {
      const next = diffContent(defaults[key], current[key]);
      if (next !== undefined) out[key] = next;
    }
    return Object.keys(out).length ? out : undefined;
  }

  if (typeof defaults === "string") {
    const value = typeof current === "string" ? current : "";
    return value.trim() === "" || value === defaults ? undefined : value;
  }

  if (current === defaults) return undefined;
  if (typeof current === "string" && current.trim() === "") return undefined;
  return current;
}
