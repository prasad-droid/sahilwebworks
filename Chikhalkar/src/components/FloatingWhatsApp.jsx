import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919324029664";

const FloatingWhatsApp = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello CHIKHALKAR ENTERPRISES, I would like to know more about your premium cotton terry towels.")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} />
  </a>
);

export default FloatingWhatsApp;
