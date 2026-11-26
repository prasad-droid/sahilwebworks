import { MessageCircle } from 'lucide-react'
import { site } from '../data/site'
import { buildWhatsappUrl } from '../utils/whatsapp'
import '../styles/whatsapp.css'

export default function WhatsAppButton() {
  const url = buildWhatsappUrl(site.whatsapp.defaultMessage)

  return (
    <div className="whatsapp-float is-visible">
      <span className="whatsapp-float__hint">Chat with Sunscape Enterprises</span>
      <a
        className="whatsapp-float__button"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sunscape Enterprises on WhatsApp"
      >
        <MessageCircle size={21} aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}
