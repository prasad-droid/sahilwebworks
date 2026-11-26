export const COMPANY = {
  name: "Kesarkar Overseas",
  tagline: "Delivering Value Beyond Borders",
  phone: "+91 8452080439",
  phoneLink: "+918452080439",
  whatsapp: "+918452080439",
  email: "info@kesarkaroverseas.com",
};

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const buildWhatsAppLink = (message = "") =>
  `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

export const buildMailTo = ({ subject = "", body = "" } = {}) =>
  `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const selectProduct = (name) => {
  window.dispatchEvent(
    new CustomEvent("kesarkar:product", { detail: { name } })
  );
  scrollToId("inquiry");
};
