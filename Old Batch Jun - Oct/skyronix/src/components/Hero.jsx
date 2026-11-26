import { useParallax } from '../hooks/index.js'
import { img } from '../data/products.js'
import { WhatsApp, ArrowRight } from './Icons.jsx'

const DOTS = [
  ['12%', '18%', '0s'],
  ['78%', '14%', '4s'],
  ['22%', '70%', '2s'],
  ['88%', '58%', '6s'],
  ['8%', '40%', '8s'],
  ['68%', '84%', '3s'],
  ['30%', '88%', '7s'],
  ['58%', '8%', '5s'],
]

export default function Hero() {
  const bgRef = useParallax(0.14)

  return (
    <section id="home" className="hero" aria-label="Skyronix Overseas — Global Toy Export & Sourcing">
      <div className="hero-bg" ref={bgRef}>
        <img
          src={img('1642379831546-67d5e2bf8bcc', 1920, 85)}
          alt="Colorful toy blocks symbolising India's toy export industry"
          className="hero-img-zoom"
          fetchPriority="high"
        />
      </div>

      <div className="hero-deco hero-deco--1" />
      <div className="hero-deco hero-deco--2" />

      {DOTS.map(([left, top, delay], i) => (
        <span
          key={i}
          className="hero-dot"
          style={{ left, top, animationDelay: delay }}
          aria-hidden="true"
        />
      ))}

      <div className="hero__content">
        <span className="hero__eyebrow hero-entrance" style={{ ['--hero-delay']: '80ms' }}>
          <span className="dot" />
          India&apos;s Toy Export &amp; Sourcing Partner
        </span>

        <h1 className="hero__title hero-entrance" style={{ ['--hero-delay']: '180ms' }}>
          Global Toys, <em>Made in India.</em>
          <br />
          Sourced. Scaled. Shipped.
        </h1>

        <p className="hero__sub hero-entrance" style={{ ['--hero-delay']: '300ms' }}>
          Skyronix Overseas Pvt. Ltd. exports 16+ categories of toy products to 25+ countries —
          one reliable partner from sample to storefront.
        </p>

        <div className="hero__actions hero-entrance" style={{ ['--hero-delay']: '420ms' }}>
          <a
            className="btn btn--whatsapp"
            href="https://wa.me/919309187314?text=Hello%20Skyronix%20Overseas%20Pvt.%20Ltd.%2C%20I%20would%20like%20to%20discuss%20a%20product%20sourcing%2Fexport%20requirement."
            target="_blank"
            rel="noreferrer"
          >
            <WhatsApp size={20} />
            Talk to an Expert
          </a>
          <a href="#products" className="btn btn--outline-light">
            Explore Products
            <ArrowRight size={18} />
          </a>
        </div>

        <p className="hero__trust hero-entrance" style={{ ['--hero-delay']: '540ms' }}>
          ISO-aligned sourcing
          <span className="sep">•</span>
          16+ product categories
          <span className="sep">•</span>
          25+ countries served
        </p>
      </div>

      <a href="#stats" className="hero__scroll" aria-label="Scroll to learn more" />
    </section>
  )
}