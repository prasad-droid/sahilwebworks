import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const FloatingWhatsApp = () => {
  const { t } = useLanguage();
  const phoneNumber = "918850272125";
  const message = t('whatsappMsg');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      className="floating-whatsapp" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with Max Volta Exim on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsApp;
