import { FiMessageCircle } from "react-icons/fi";
import { whatsappLink, SITE } from "../../data/site";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${SITE.name} on WhatsApp`}
    >
      <FiMessageCircle aria-hidden="true" />
      <span className="whatsapp-float__label">Chat on WhatsApp</span>
    </a>
  );
}
