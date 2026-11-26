import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../data/site';

const message =
  'Hello Vancorix International, I would like to know more about your Food & Agriculture sourcing and import-export business. Please share further details.';

const WhatsAppButton = () => {
  return (
    <a
      className="floating-btn whatsapp-btn"
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Message on WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={2} />
    </a>
  );
};

export default WhatsAppButton;
