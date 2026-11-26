import { company } from '../data/company.js'
import { Icon } from './Icons.jsx'

export default function WhatsAppButton() {
  const waLink = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Aviyana Enterprises on WhatsApp"
    >
      <span className="whatsapp-float__icon" aria-hidden="true">
        <Icon name="whatsapp" size={26} />
      </span>
      <span className="whatsapp-float__label">Chat with us</span>
    </a>
  )
}