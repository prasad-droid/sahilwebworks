import { useSite } from "../store/SiteContext";
import { waLink } from "../data/site";
import "../styles/whatsappButton.css";

export default function WhatsAppButton() {
  const { settings } = useSite();
  const intro =
    settings?.whatsappIntro ||
    `Hello, I would like to discuss an agro commodity requirement.`;
  const number = settings?.contact?.whatsapp;

  const href = number
    ? `https://wa.me/${String(number).replace(/\D/g, "")}?text=${encodeURIComponent(intro)}`
    : waLink(intro);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn wa-pulse"
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        className="whatsapp-btn__icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.83 14.12c-.25.7-1.45 1.33-2.02 1.42-.52.08-1.17.11-1.89-.12-.44-.14-1-.32-1.71-.63-3.01-1.3-4.98-4.33-5.13-4.53-.15-.2-1.22-1.63-1.22-3.11 0-1.48.78-2.21 1.05-2.51.27-.3.6-.38.8-.38.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.2.72-.84.91-1.13.19-.29.39-.24.65-.14.27.1 1.7.8 1.99.95.29.15.48.22.55.34.07.12.07.71-.18 1.41z" />
      </svg>
      <span className="whatsapp-btn__label">Chat With Us</span>
    </a>
  );
}
