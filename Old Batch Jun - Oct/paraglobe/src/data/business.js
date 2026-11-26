// ============================================================
// BUSINESS CONTACT DATA — edit values here to update the site.
// ============================================================

export const business = {
  name: "Paraglobe Exims",
  tagline: "Inspiring solutions with excellence",
  description:
    "Sustainable biodegradable tableware and takeaway food packaging solutions for global businesses.",
  phone: "9359313665",
  phoneDisplay: "+91 93593 13665",
  phone2: "9175623468",
  phone2Display: "+91 91756 23468",
  whatsapp: "919359313665",
  whatsappDisplay: "+91 93593 13665",
  emailSales: "sales@paraglobeexims.com",
  emailExport: "export@paraglobeexims.com",
  website: "www.paraglobeexims.com",
  websiteUrl: "https://www.paraglobeexims.com",
  catalogPdf: "/paraglobe-exims-catalog.pdf",
  address: "54/34/16, Wadgaon BK, Sinhgad Road, Pune – 411041",
  social: {
    linkedin: "https://www.linkedin.com/company/paraglobe-exims/",
    facebook: "https://www.facebook.com/share/19UCoheffq/",
    instagram: "https://www.instagram.com/paraglobe_exims",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const whatsappNumber = business.whatsapp;

export const buildWhatsAppLink = (message = "") => {
  const text = encodeURIComponent(
    message ||
      "Hello Paraglobe Exims, I would like to know more about your biodegradable tableware and packaging solutions."
  );
  return `https://wa.me/${whatsappNumber}?text=${text}`;
};

export default business;