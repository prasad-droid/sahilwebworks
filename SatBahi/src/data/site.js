export const SITE = {
  name: "SATBHAI EXIM",
  tagline: "Quality Product - Global Reach",
  domain: "https://satbhaiexim.com",
  phoneDisplay: "+91 90847 48659",
  phoneRaw: "919084748659",
  whatsappNumber: "919084748659",
  whatsappMessage:
    "Hello SATBHAI EXIM, I am interested in your tote bags and would like to discuss my requirement.",
  email: "chandrakantsatbhai35@gmail.com",
  addressLines: ["Hari Bhagya, Satbhai Nagar", "Nashik, Maharashtra, India"],
  addressQuery: "Hari Bhagya, Satbhai Nagar, Nashik, Maharashtra, India",
  mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Hari Bhagya, Satbhai Nagar, Nashik, Maharashtra, India"
  )}`,
  mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(
    "Hari Bhagya, Satbhai Nagar, Nashik, Maharashtra, India"
  )}&z=13&output=embed`,
  copyrightYear: 2026,
};

export function whatsappLink(message) {
  const text = message || SITE.whatsappMessage;
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function mailtoLink(subject = "Tote Bag Inquiry") {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}

export function telLink() {
  return `tel:+${SITE.phoneRaw}`;
}
