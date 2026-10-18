import { FaWhatsapp } from "react-icons/fa6";
import { waLink } from "../../config/site";

const FloatingWhatsApp = () => (
  <a
    className="whatsapp-float"
    href={waLink(
      "Hello GHONS Global Impex, I would like to enquire about your products and wholesale pricing."
    )}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with GHONS Global Impex on WhatsApp"
  >
    <FaWhatsapp />
  </a>
);

export default FloatingWhatsApp;
