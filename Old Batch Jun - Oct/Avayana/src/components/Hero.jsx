import { images } from '../data/images.js'
import { Icon } from './Icons.jsx'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) {
    const reduce =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }
}

export default function Hero({ onRequestQuote }) {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <img
          src={images.hero.src}
          alt=""
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__botanical hero__botanical--one" aria-hidden="true">
        <svg viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M100 290C100 210 120 160 170 120C155 185 150 230 150 290Z" />
          <path d="M100 290C100 220 120 180 160 150C150 205 146 245 146 290Z" />
          <path d="M100 290V210" />
          <path d="M100 240C90 232 80 232 72 238C82 228 94 228 100 240Z" />
        </svg>
      </div>
      <div className="hero__botanical hero__botanical--two" aria-hidden="true">
        <svg viewBox="0 0 160 160" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="80" cy="80" r="60" strokeDasharray="2 6" />
          <circle cx="80" cy="80" r="76" strokeDasharray="2 8" opacity=".6" />
          <path d="M80 24v40M80 120v16M24 80h34M102 80h34" />
          <circle cx="80" cy="80" r="4" />
        </svg>
      </div>

      <div className="hero__content container">
        <p className="hero__eyebrow">Indian Agricultural Ingredients</p>
        <h1 className="hero__title">
          Rooted in Quality.
          <br />
          <em>Growing Globally.</em>
        </h1>
        <p className="hero__lead">
          Premium dehydrated and natural products sourced from India for food,
          nutraceutical, wellness, and global B2B markets.
        </p>

        <div className="hero__actions">
          <button
            type="button"
            className="btn btn--gold btn--lg"
            onClick={() => scrollToId('products')}
          >
            Explore Products
            <Icon name="arrow" size={18} />
          </button>
          <button
            type="button"
            className="btn btn--outline-light btn--lg"
            onClick={onRequestQuote}
          >
            Request a Quote
          </button>
        </div>

        <p className="hero__support">
          B2B Supply · Bulk Orders · Export Supply · Private Label
        </p>
      </div>

      <a className="hero__scroll" href="#trust" aria-label="Scroll to next section">
        <span className="hero__scroll-line" />
      </a>
    </section>
  )
}