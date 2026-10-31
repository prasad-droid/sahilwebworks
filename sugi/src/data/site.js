// ==========================================================================
// SITE-WIDE CONSTANTS
// --------------------------------------------------------------------------
// Contact details are centralised here. Replace the values in this single
// file once the client supplies the confirmed address, phone and website.
// ==========================================================================

export const COMPANY = "SUGI INTERNATIONAL PVT. LTD.";
export const COMPANY_LONG = "Sugi International Pvt. Ltd.";

export const TAGLINE = "Your Trusted & Reliable Agro Commodity Supply Chain Partner";

export const EMAIL = "rohanparicharak111@gmail.com";
export const PHONE_DISPLAY = "+91 9405000111";
export const PHONE_TEL = "+919405000111";
export const WHATSAPP_TEL = "919405000111";

export const ADDRESS =
  "Flat No-B-13 Suvarna Park, LB S- No.18/1 Bavdhan K, Bavdhan, Haveli, Pune- 411021, Maharashtra";
export const ADDRESS_PENDING = false;

export const BUSINESS_HOURS = [
  { days: "Monday - Saturday", time: "9:00 AM - 6:00 PM (IST)" },
  { days: "Sunday", time: "Closed" },
];

export const SOCIAL_LINKS = [
  // Placeholder profiles — point these at the real accounts when available.
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "X", href: "https://x.com/" },
];

export function waLink(msg) {
  return `https://wa.me/${WHATSAPP_TEL}?text=${encodeURIComponent(
    msg || `Hello ${COMPANY}, I would like to discuss an agro commodity requirement.`
  )}`;
}

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Certifications", to: "/certifications" },
  { label: "Articles", to: "/articles" },
  { label: "Contact Us", to: "/contact" },
];
