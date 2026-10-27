import { MessageCircle } from 'lucide-react';
import '../styles/footer.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello, I am interested in your export products. Please provide more information.');
    // Using phone number from contact - to be verified
    window.open('https://wa.me/918177974851?text=' + message, '_blank');
  };

  return (
    <button 
      className="whatsapp-float" 
      onClick={handleWhatsAppClick}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
