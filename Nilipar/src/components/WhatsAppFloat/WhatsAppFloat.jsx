import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "../../data/siteData";
import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Nilipar Enterprises on WhatsApp"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
