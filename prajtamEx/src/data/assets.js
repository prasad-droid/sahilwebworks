/**
 * Single source of truth for supplied company assets and contact details.
 *
 * Supplied Google Drive files are referenced twice:
 *   1. `local`  -> production source (drop the downloaded file at this path in /public)
 *   2. `driveId`-> fallback used automatically when the local file is missing AND the
 *                 Drive file has been shared as "anyone with the link".
 *
 * Download links (supplied by the client):
 *   Logo    https://drive.google.com/open?id=1wrodWrHGCxtR6xhQ1YRnSiPNY7mXktFH
 *   Image 1 https://drive.google.com/open?id=1kUui75rchazq7z0f-R7kPXI1dSYU4Bim
 *   Image 2 https://drive.google.com/open?id=1bjox_nmobRxKB3gYiaGfMCOCeApKl2oS
 *   Image 3 https://drive.google.com/open?id=1aJMx9scJBuEmf7Zk-mS29MRUEbdpIw7a
 *   Image 4 https://drive.google.com/open?id=1yS_jNb4He3_9bRWVhoJ0NeRtbSHjULt7
 */

export const company = {
  name: "PrajtamEx",
  tagline: "CONNECTING MARKET WORLWIDE",
  taglineShort: "Connecting Market Worldwide",
  type: "Import Export and Services",
  description:
    "Import Export and Services focused primarily on agriculture-related markets and recycling companies.",
  position:
    "PrajtamEx is an Import Export and Services company focused primarily on agriculture-related markets and recycling companies.",
  copyright: "© 2026 PrajtamEx. All Rights Reserved.",
};

export const contact = {
  person: "Prajakta Palaskar",
  phoneLabel: "+91 7620429527",
  phoneDial: "+917620429527",
  whatsappLabel: "+91 9763941221",
  whatsappDigits: "919763941221",
  email: "praujpalaskar1997@gmail.com",
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

export const suppliedAssets = {
  logo: {
    id: "logo",
    local: "/images/logo.png",
    driveId: "1wrodWrHGCxtR6xhQ1YRnSiPNY7mXktFH",
    link: "https://drive.google.com/open?id=1wrodWrHGCxtR6xhQ1YRnSiPNY7mXktFH",
    alt: "PrajtamEx company logo",
  },
  image1: {
    id: "image-1",
    local: "/images/gallery/prajtamex-1.jpg",
    driveId: "1kUui75rchazq7z0f-R7kPXI1dSYU4Bim",
    link: "https://drive.google.com/open?id=1kUui75rchazq7z0f-R7kPXI1dSYU4Bim",
    alt: "PrajtamEx supplied business image",
  },
  image2: {
    id: "image-2",
    local: "/images/gallery/prajtamex-2.jpg",
    driveId: "1bjox_nmobRxKB3gYiaGfMCOCeApKl2oS",
    link: "https://drive.google.com/open?id=1bjox_nmobRxKB3gYiaGfMCOCeApKl2oS",
    alt: "PrajtamEx supplied business image",
  },
  image3: {
    id: "image-3",
    local: "/images/gallery/prajtamex-3.jpg",
    driveId: "1aJMx9scJBuEmf7Zk-mS29MRUEbdpIw7a",
    link: "https://drive.google.com/open?id=1aJMx9scJBuEmf7Zk-mS29MRUEbdpIw7a",
    alt: "PrajtamEx supplied business image",
  },
  image4: {
    id: "image-4",
    local: "/images/gallery/prajtamex-4.jpg",
    driveId: "1yS_jNb4He3_9bRWVhoJ0NeRtbSHjULt7",
    link: "https://drive.google.com/open?id=1yS_jNb4He3_9bRWVhoJ0NeRtbSHjULt7",
    alt: "PrajtamEx supplied business image",
  },
};

export function driveThumbUrl(driveId, width = 1400) {
  return `https://drive.google.com/thumbnail?id=${driveId}&sz=w${width}`;
}
