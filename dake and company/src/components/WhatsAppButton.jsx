import { getWhatsappLink } from '../data/business.js'

export function WhatsAppButton() {
  return (
    <a className="whatsapp-fab" href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.16-1.34A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 6.88 12.07l-.14.23L19 20l-3.7-1.2-.23.14A8 8 0 1 1 12 4Zm-4.13 4.55c.17-.43.35-.44.52-.44h.45c.14 0 .33.01.5.38.2.43.67 1.64.73 1.76.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.25-.1.49.14.24.62 1.02 1.33 1.65.91.82 1.68 1.07 1.92 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.57-.13 1-1.19.66-1.18.66-1.09.6-1.42.56-2.45-.28-4.66-1.75-6.02-4.38-.37-.72-.56-1.54-.56-2.36 0-.8.37-1.53.51-1.74Z" />
      </svg>
    </a>
  )
}

export default WhatsAppButton
