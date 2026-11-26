import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { site } from '../data/site'
import { buildWhatsappUrl } from '../utils/whatsapp'
import { scrollToSection } from '../utils/scroll'
import '../styles/inquiry.css'

export default function InquirySection({ onQuote }) {
  return (
    <section className="inquiry-band" aria-labelledby="inquiry-band-title">
      <div className="container inquiry-band__inner" data-reveal>
        <div>
          <span className="eyebrow eyebrow--light">Start a conversation</span>
          <h2 id="inquiry-band-title">Have a requirement in mind?</h2>
          <p>Tell us what you are looking for and explore possibilities together.</p>
        </div>
        <div className="inquiry-band__actions">
          <button type="button" className="btn btn--gold" onClick={onQuote}>
            Get a Quote <ArrowUpRight size={16} aria-hidden="true" />
          </button>
          <a
            className="btn btn--outline-light"
            href={buildWhatsappUrl(site.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} aria-hidden="true" /> WhatsApp Us
          </a>
        </div>
      </div>
      <button
        type="button"
        className="inquiry-band__scroll"
        aria-label="Scroll to contact section"
        onClick={() => scrollToSection('contact')}
      >
        <span />
      </button>
    </section>
  )
}
