import React from 'react';

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      'Hello Vancorix International, I would like to know more about your Food & Agriculture sourcing and import-export business. Please share further details.'
    );
    const whatsappUrl = `https://wa.me/919225354180?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <a
      href="https://wa.me/919225354180"
      target="_blank"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 1000,
        width: 60,
        height: 60,
        background: '#d4a843',
        color: '#2c3e50',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(212, 168, 67, 0.4)',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 168, 67, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 168, 67, 0.4)';
      }}
      aria-label="Message on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2 14.8 14.8 0 0 1 0 4.11 2 2 0 0 1 1.72 2 19.79 19.79 0 0 1 6.06 1.5 19.5 19.5 0 0 1 8 2.18 2 2 0 0 1 9.19 4l1.45 1.45a8 8 0 0 1-6 6 19.79 19.79 0 0 1-3.07 8.67 2 2 0 0 1-3.07 8.63A2 2 0 0 1 .08 22 2 2 0 0 1 2.11 19.9a14.8 14.8 0 0 1 6-6 2 2 0 0 1 3.08-.08zm-11.18 1.11a8.94 8.94 0 0 1 .59 5.9l1.46-1.46a8.95 8.95 0 0 1-5.88-5.88l-1.46 1.46zM 4.94 4.94l 1.41 1.41 1.41-1.41-1.41-1.41z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;