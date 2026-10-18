import { site } from "../data/site";
import { IconWhatsApp } from "./Icons";
import "../styles/whatsapp.css";

export default function WhatsAppButton() {
  const link = `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <a
      className="whatsapp-float"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with A1 Royal Exim on WhatsApp"
    >
      <span className="whatsapp-float__label">Chat With Us</span>
      <span className="whatsapp-float__icon">
        <IconWhatsApp />
      </span>
    </a>
  );
}