import "../styles/footer.css";

const WHATSAPP_NUMBER = "917406103339";
const DEFAULT_MESSAGE = encodeURIComponent(
  "Hello Varidian Exim, I would like to know more about your agricultural products."
);

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-button"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Varidian Exim on WhatsApp"
    >
      <span className="whatsapp-button__pulse" aria-hidden="true" />
      <span className="whatsapp-button__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.83 14.12c-.25.7-1.45 1.33-2.02 1.42-.52.08-1.17.11-1.88-.12-.44-.14-.99-.32-1.7-.63-3.02-1.3-4.99-4.33-5.14-4.53-.15-.2-1.23-1.63-1.23-3.11 0-1.48.78-2.21 1.05-2.51.28-.3.6-.38.8-.38.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.08.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.32.39-.45.52-.15.15-.31.31-.13.61.18.3.79 1.31 1.7 2.12 1.17 1.04 2.15 1.36 2.45 1.51.3.15.48.13.66-.08.17-.2.76-.88.96-1.18.2-.3.4-.25.68-.15.28.1 1.75.82 2.05.97.3.15.5.22.57.35.08.13.08.72-.17 1.42Z" />
        </svg>
      </span>
      <span className="whatsapp-button__label">Chat With Us</span>
    </a>
  );
}