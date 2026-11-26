/**
 * Single source of truth for company details, contact links and local imagery.
 *
 * Every photograph on the site is served from /public/images so the page has no
 * runtime dependency on third-party image hosts. Replace the logo placeholder at
 * /public/images/logo.svg with the supplied business logo when it is available.
 */

export const company = {
  name: "PrajtamEx",
  tagline: "Connecting Markets Worldwide",
  type: "Import, Export and Services",
  description:
    "PrajtamEx is an import-export and services business focused on agriculture-related industries and recycling companies.",
  position:
    "PrajtamEx is an import-export and services business focused primarily on agriculture-related industries and recycling companies.",
  footerLine: "PrajtamEx – Connecting Markets Worldwide.",
  copyright: "© 2026 PrajtamEx. All Rights Reserved.",
};

export const contact = {
  // Country code +91 is assumed from the supplied Indian mobile numbers.
  // Confirm both numbers with the business owner before launch.
  phoneLabel: "+91 76204 29527",
  phoneDial: "+917620429527",
  whatsappLabel: "+91 97639 41221",
  whatsappDigits: "919763941221",
  email: "prajupalaskar1997@gmail.com",
};

export const whatsappMessages = {
  general:
    "Hello PrajtamEx, I am interested in your products/services and would like to discuss my requirement.",
  product:
    "Hello PrajtamEx, I am interested in a product from your portfolio. Please share more details.",
  business:
    "Hello PrajtamEx, I would like to discuss an import/export or business requirement.",
};

export function whatsappLink(message = whatsappMessages.general) {
  return `https://wa.me/${contact.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink({ subject = "Enquiry – PrajtamEx", body = "" } = {}) {
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * The four photographs supplied for the business are the coco pith and
 * fertilizer images. They are kept under /public/images so they can be swapped
 * for final product photography without touching component code.
 */
export const suppliedAssets = {
  logo: {
    local: "/images/logo.svg",
    alt: "PrajtamEx — Connecting Markets Worldwide",
  },
  image1: {
    id: "image-1",
    local: "/images/agriculture/coco-pith-1.jpg",
    alt: "Coco pith product image supplied by PrajtamEx",
  },
  image2: {
    id: "image-2",
    local: "/images/agriculture/coco-pith-2.jpg",
    alt: "Coco pith product image supplied by PrajtamEx",
  },
  image3: {
    id: "image-3",
    local: "/images/fertilizer/fertilizer-1.jpg",
    alt: "Fertilizer product image supplied by PrajtamEx",
  },
  image4: {
    id: "image-4",
    local: "/images/fertilizer/fertilizer-process.jpg",
    alt: "Fertilizer process image supplied by PrajtamEx",
  },
};
