import { FaWhatsapp } from "react-icons/fa";
import "@/styles/whatsapp.css";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/919137730636?text=Hello%20ViOm%20Global%20Exim%2C%20I%20would%20like%20to%20make%20an%20inquiry."
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp />
    <span className="whatsapp-float__pulse" />
  </a>
);

export default FloatingWhatsApp;
