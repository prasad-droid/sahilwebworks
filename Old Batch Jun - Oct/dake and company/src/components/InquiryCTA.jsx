import { getWhatsappLink } from '../data/business.js'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const top = el.getBoundingClientRect().top + window.scrollY - 88
  window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? 'auto' : 'smooth' })
}

export function InquiryCTA() {
  return (
    <section className="cta" id="inquiry">
      <div className="container">
        <div className="cta__inner">
          <div className="cta__content">
            <p className="cta__eyebrow">Get in Touch</p>
            <h2 className="cta__title">Ready to discuss your packaging requirements?</h2>
            <p className="cta__text">
              Tell us your product, dimensions, quantity, material requirements, branding requirements and destination, and we'll work toward the right packaging solution for your business.
            </p>
          </div>
          <div className="cta__actions">
            <button type="button" className="btn btn--light" onClick={() => scrollTo('contact')}>
              Send Inquiry
            </button>
            <a className="btn btn--ghost" href={getWhatsappLink('Hello Dake and Company, I would like a quote for kraft paper bags/corrugated boxes.')} target="_blank" rel="noopener noreferrer" style={{ borderColor: 'rgba(255,255,255,0.6)', color: 'var(--white)' }}>
              WhatsApp for Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InquiryCTA
