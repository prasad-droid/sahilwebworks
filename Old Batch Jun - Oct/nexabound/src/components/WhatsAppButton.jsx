import '../styles/whatsapp.css';

export default function WhatsAppButton() {
  const phoneNumber = '919665895667';
  const message = 'Hello Nexabound Global, I am interested in sourcing products from India. I would like to discuss my requirements.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      className="whatsapp-btn"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nexabound on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.62-1.73c1.87 1.02 3.98 1.56 6.14 1.56h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05-2.42-2.42-5.63-3.75-9.02-3.75zm0 23.42c-2.03 0-4.02-.55-5.75-1.58l-.41-.24-3.93 1.03 1.05-3.83-.27-.43a10.58 10.58 0 0 1-1.62-5.66c0-5.85 4.76-10.61 10.62-10.61 2.83 0 5.49 1.1 7.5 3.11a10.54 10.54 0 0 1 3.1 7.5c0 5.85-4.76 10.61-10.59 10.61zm5.82-7.94c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z"/>
      </svg>
      <span className="whatsapp-tooltip">Chat With Nexabound</span>
    </a>
  );
}