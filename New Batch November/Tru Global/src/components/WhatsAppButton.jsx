import { MessageCircle } from 'lucide-react'
import { company } from '../data/siteData'
import '../styles/WhatsAppButton.css'

const waLink = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Tru Source Global on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={26} strokeWidth={2} aria-hidden="true" />
      <span className="whatsapp-float__label">Chat with us</span>
    </a>
  )
}
