import { company } from '../data/company.js'
import { images } from '../data/images.js'
import Reveal from './Reveal.jsx'
import { Icon } from './Icons.jsx'

export default function FinalCTA({ onRequestQuote }) {
  const waLink = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`

  return (
    <section className="final-cta section">
      <div className="final-cta__bg" aria-hidden="true">
        <img src={images.finalCta.src} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="final-cta__overlay" aria-hidden="true" />

      <div className="container final-cta__content">
        <Reveal>
          <h2 className="final-cta__title">
            Quality Indian Ingredients.
            <br />
            Global Possibilities.
          </h2>
          <p className="final-cta__text">
            Connect with Aviyana Enterprises for B2B supply, bulk orders, export
            requirements and private-label opportunities.
          </p>
          <div className="final-cta__actions">
            <button type="button" className="btn btn--gold btn--lg" onClick={onRequestQuote}>
              Request a Quote
              <Icon name="arrow" size={18} />
            </button>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline-light btn--lg"
            >
              <Icon name="whatsapp" size={18} />
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}