import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../../data/siteConfig";

/**
 * Floating WhatsApp button shown across the site.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with VINEXA GLOBAL ENTERPRISES on WhatsApp"
    >
      <FaWhatsapp size={28} />
      <span className="whatsapp-float__tooltip">Chat on WhatsApp</span>
    </a>
  );
}
