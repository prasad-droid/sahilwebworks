import { FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import heroFallback from '../../assets/images/hero-bg.svg'
import Reveal from '../Reveal'
import './Hero.css'

const HERO_IMG = 'https://loremflickr.com/1600/900/towel,hotel?lock=101'

const TRUST_BADGES = [
  'Export Quality',
  'Hospitality Grade',
  'Bulk Supply',
  'Global Shipping',
]

const Hero = () => (
  <section id="home" className="hero">
    <img
      src={HERO_IMG}
      alt="Premium terry towels and hospitality linen texture"
      className="hero-bg"
      loading="eager"
      onError={(e) => {
        e.currentTarget.onerror = null
        e.currentTarget.src = heroFallback
      }}
    />
    <div className="hero-overlay" aria-hidden="true" />
    <div className="container hero-content">
      <div className="hero-inner">
        <Reveal>
          <span className="hero-eyebrow">Premium Terry Towels &amp; Hospitality Linen</span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="hero-title">
            Crafting Comfort
            <br />
            <span>for the World</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="hero-sub">Premium Terry Towels &amp; Hospitality Linen Exported from India to Global Markets.</p>
        </Reveal>
        <Reveal delay={360}>
          <p className="hero-desc">
            TRIVEDA EXPORTS delivers premium-quality terry towels designed for hotels, hospitals, hospitality chains,
            wholesalers, and importers worldwide, combining superior comfort, durability, and dependable export
            services.
          </p>
        </Reveal>
        <Reveal delay={480}>
          <div className="hero-actions">
            <a href="#products" className="btn btn-accent btn-lg">
              Explore Products <FaArrowRight />
            </a>
            <a href="#contact" className="btn btn-outline-light btn-lg">
              Request Quote
            </a>
          </div>
        </Reveal>
        <Reveal delay={540}>
          <div className="hero-actions" style={{ marginTop: '1rem' }}>
            <a href="/Triveda%20Exports%20Catalogue.pdf" download className="btn btn-outline-light btn-lg">
              Triveda Exports Catalogue.pdf
            </a>
            <a href="/TRIVEDA%20EXPORTS%20PROFILE-1.pdf" download className="btn btn-outline-light btn-lg">
              Triveda Export Company Profile.pdf
            </a>
          </div>
        </Reveal>
        <Reveal delay={620}>
          <ul className="hero-badges" aria-label="Trust highlights">
            {TRUST_BADGES.map((badge) => (
              <li key={badge}>
                <FaCheckCircle /> {badge}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
    <a href="#about" className="hero-scroll" aria-label="Scroll to About section">
      <span />
    </a>
  </section>
)

export default Hero
