import { WhatsApp } from './Icons.jsx'

export default function WhatsAppButton() {
  return (
    <div className="wa-float">
      <a
        className="wa-float__link"
        href="https://wa.me/919309187314?text=Hello%20Skyronix%20Overseas%20Pvt.%20Ltd.%2C%20I%20would%20like%20to%20discuss%20a%20product%20sourcing%2Fexport%20requirement."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Skyronix on WhatsApp"
      >
        <WhatsApp size={24} />
        <span className="wa-float__text">Chat with us</span>
      </a>
    </div>
  )
}