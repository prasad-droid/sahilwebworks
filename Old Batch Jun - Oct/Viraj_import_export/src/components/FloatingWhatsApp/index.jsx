import { FiMessageCircle } from "react-icons/fi";
import { WHATSAPP_NUMBER } from "../../data/data";

const FloatingWhatsApp = () => (
  <a
    className="whatsapp-float"
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hello Viraj Import & Export, I would like to enquire about your products."
    )}`}
    target="_blank"
    rel="noreferrer"
    aria-label="Chat with us on WhatsApp"
  >
    <FiMessageCircle aria-hidden="true" />
  </a>
);

export default FloatingWhatsApp;
