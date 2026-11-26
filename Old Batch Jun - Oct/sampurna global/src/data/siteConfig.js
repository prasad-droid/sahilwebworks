/**
 * Central site configuration for Sampurnm Global.
 * ------------------------------------------------------------------
 * PLACEHOLDERS: Values marked "CONFIRM" must be verified with the
 * company PDF / brand owner before launch. Edit values here once and
 * they propagate across the whole website.
 */

export const siteConfig = {
  brand: {
    name: "Sampurnm Global",
    shortName: "Sampurnm",
    tagline: "Complete Solution. Global VISION.",
    activity: "T-Shirt Supply",
    businessType: "Wholesale Retailer",
    primaryGoal: "T-Shirt Export",
  },

  contact: {
    phoneDisplay: "+91 92724 43357",
    phoneHref: "tel:+919272443357",
    whatsappDisplay: "+91 92724 43357",
    whatsappHref: "https://wa.me/919272443357",
    addressLines: [
      "B704 Kashinath Anant Towar,",
      "Tisgoan, Kalyan East 421306,",
      "Maharashtra, India.",
    ],
    // CONFIRM: The supplied field "Info.smapurnmglobal.com" is NOT a valid
    // email address (no "@"). It is intentionally kept unlinked below.
    // Replace `email` with the verified address to enable a mailto link.
    email: null,
    emailRawProvided: "Info.smapurnmglobal.com",
    // CONFIRM: Add a real website URL when available to enable this link.
    website: null,
  },

  navLinks: [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "products", label: "Services / Products" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact Us" },
  ],

  enquiryTypes: [
    "Wholesale Enquiry",
    "Retail Enquiry",
    "Export Enquiry",
    "Product Information",
    "Other Business Enquiry",
  ],
};

export default siteConfig;
