import { MessageCircle } from 'lucide-react'
import { company } from '../data/siteData'
import { defaultWhatsappUrl } from '../utils/whatsapp'
import '../styles/WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={defaultWhatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${company.name} on WhatsApp`}
      title="Chat with us on WhatsApp"
    >
      <span className="whatsapp-float__pulse" aria-hidden="true" />
      <MessageCircle size={27} strokeWidth={2} aria-hidden="true" />
      <span className="whatsapp-float__label">Chat with us</span>
    </a>
  )
}
