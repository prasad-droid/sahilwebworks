import { getWhatsappLink } from '../data/business.js'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const top = el.getBoundingClientRect().top + window.scrollY - 88
  window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? 'auto' : 'smooth' })
}

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid" />
      </div>
      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Merchant Exporter | Packaging Solutions
          </p>
          <h1 className="hero__title">
            Packaging That
            <br />
            <span className="hero__title-accent">Builds Your Brand</span>
          </h1>
          <p className="hero__subtitle">Trade Beyond Boundaries</p>
          <p className="hero__text">
            Dake and Company is a merchant-export and trading company specializing in kraft paper bags and corrugated packaging solutions. We connect businesses across the world with reliable, customizable, and recyclable packaging sourced from trusted Indian manufacturers.
          </p>
          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={() => scrollTo('products')}>
              View Products
            </button>
            <button type="button" className="btn btn--ghost" onClick={() => scrollTo('inquiry')}>
              Request a Quote
            </button>
            <a className="btn btn--ghost" href={getWhatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
          <div className="hero__trust">
            <article className="hero__trust-card">
              <span className="hero__trust-dot" aria-hidden="true" />
              <span className="hero__trust-text">Kraft Paper Bags & Corrugated Boxes</span>
            </article>
            <article className="hero__trust-card">
              <span className="hero__trust-dot" aria-hidden="true" />
              <span className="hero__trust-text">B2B Sourcing | Export-Oriented</span>
            </article>
            <article className="hero__trust-card">
              <span className="hero__trust-dot" aria-hidden="true" />
              <span className="hero__trust-text">Reliable Bulk Supply</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
