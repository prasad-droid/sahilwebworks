import { whatsappLink } from '../data/site.js'
import { IconWhatsApp } from './Icons.jsx'
import '../styles/footer.css'

/**
 * Fixed floating WhatsApp button.
 * Opens a chat with the supplied number and a pre-filled message.
 */
export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-fab"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Rasavaani on WhatsApp"
    >
      <span className="whatsapp-fab__icon" aria-hidden="true">
        <IconWhatsApp />
      </span>
      <span className="whatsapp-fab__label">Chat with us</span>
    </a>
  )
}
