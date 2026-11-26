import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919076197336?text=Hello%20Nilmani%20Global%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover-scale-110 hover-shadow-xl"
      style={{ background: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} color="#fff" />
    </a>
  )
}
