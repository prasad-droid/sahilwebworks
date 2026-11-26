export const SITE = {
  name: "DVK Enterprises",
  tagline: "We Grow Together.",
  phoneIndia: "+91 9930439581",
  phoneUae: "+971 503879581",
  email: "dvk.enterprises29@gmail.com",
  whatsappIndia: "+91 8655871571",
  whatsappIndiaAlt: "+91 9930439581",
  whatsappUae: "+971 503879581",
  address:
    "J 104, Tulsi Aarambh, Raj Group, Tulsi City, Badlapur East, Maharashtra – 421503, India.",
  whatsappMessage:
    "Hello DVK Enterprises, I am interested in your products. Please share your product catalogue, pricing, and available options.",
};

export const LINKS = {
  telIndia: "tel:+919930439581",
  telUae: "tel:+971503879581",
  mail: "mailto:dvk.enterprises29@gmail.com",
  waIndia: "https://wa.me/919930439581",
  waIndiaAlt: "https://wa.me/918655871571",
  waUae: "https://wa.me/971503879581",
  directions:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "J 104, Tulsi Aarambh, Raj Group, Tulsi City, Badlapur East, Maharashtra 421503, India",
    ),
};

export const waLink = (number, message = SITE.whatsappMessage) =>
  `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export const PRODUCT_OPTIONS = [
  "Moringa Powder",
  "Carpets",
  "Rugs",
  "Hair Clips",
  "Rubber Bands",
  "Multiple Products",
];

export const CUSTOMER_TYPES = [
  "Wholesale Buyer",
  "Distributor",
  "Retailer",
  "Individual Customer",
  "Business Partner",
  "Other",
];

export const CATEGORY_IDS = {
  moringa: "moringa",
  carpets: "carpets",
  hair: "hair-accessories",
  rubber: "rubber-bands",
};

/**
 * Optional form backend. Set VITE_INQUIRY_ENDPOINT in a local .env file to a
 * POST endpoint that accepts JSON. When it is empty the form falls back to a
 * pre-filled WhatsApp message instead of pretending a submission succeeded.
 */
export const INQUIRY_ENDPOINT = import.meta.env.VITE_INQUIRY_ENDPOINT || "";

/**
 * Add genuine, client-approved testimonials here when they are available.
 * Shape: { quote, name, role, company }
 * The section displays a trust placeholder while this list is empty.
 */
export const TESTIMONIALS = [];
