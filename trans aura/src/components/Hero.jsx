import { ArrowRight, BadgeCheck, Handshake, PackageSearch } from 'lucide-react'
import { images } from '../data/images'
import '../styles/Hero.css'

const highlights = [
  { icon: Handshake, label: 'Reliable Indian Sourcing' },
  { icon: BadgeCheck, label: 'Quality-Focused Supply' },
  { icon: PackageSearch, label: 'Professional Export Coordination' }
]

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <img
          src={images.hero.src}
          srcSet={`${images.hero.src} 1920w`}
          sizes="100vw"
          alt={images.hero.alt}
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__eyebrow hero-anim" style={{ '--d': '0.05s' }}>
            India-Based Import, Export &amp; Trading Partner
          </p>
          <h1 className="hero__title hero-anim" style={{ '--d': '0.15s' }}>
            Connecting Global Buyers with <span>Quality Products</span> from India
          </h1>
          <p className="hero__lead hero-anim" style={{ '--d': '0.28s' }}>
            Trans-Aura International connects international buyers with reliable Indian suppliers,
            offering quality-focused sourcing, competitive pricing, and dependable export
            coordination for industrial chemicals and selected commercial products.
          </p>

          <div className="hero__cta hero-anim" style={{ '--d': '0.4s' }}>
            <button
              type="button"
              className="btn btn--gold btn--lg"
              onClick={() => scrollTo('quote')}
            >
              Request a Quote
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="btn btn--ghost-light btn--lg"
              onClick={() => scrollTo('products')}
            >
              Explore Our Products
            </button>
          </div>
        </div>

        <ul className="hero__trust hero-anim" style={{ '--d': '0.55s' }}>
          {highlights.map(({ icon: Icon, label }) => (
            <li key={label}>
              <span className="hero__trust-icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  )
}