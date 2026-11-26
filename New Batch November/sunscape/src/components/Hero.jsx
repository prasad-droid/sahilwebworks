import { ArrowRight, Globe2, Handshake, MessagesSquare } from 'lucide-react'
import { site } from '../data/site'
import { scrollToSection } from '../utils/scroll'
import '../styles/hero.css'

const strengths = [
  { icon: Globe2, label: 'Import & Export' },
  { icon: MessagesSquare, label: 'Buyer-focused communication' },
  { icon: Handshake, label: 'Long-term relationships' },
]

export default function Hero() {
  const goTo = (event, id) => {
    event.preventDefault()
    scrollToSection(id)
  }

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <img src={site.images.hero} alt="" fetchPriority="high" width="1920" height="1280" />
        <div className="hero__scrim" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Import &middot; Export &middot; Business Opportunities</span>
          <h1 id="hero-title">
            Connecting Businesses.
            <span>Creating Global Opportunities.</span>
          </h1>
          <p className="hero__support">Your Trusted Partner in Import &amp; Export.</p>
          <p className="hero__description">
            Sunscape Enterprises is focused on connecting buyers with business opportunities through
            professional trading, reliable communication, and a commitment to building long-term
            business relationships.
          </p>
          <div className="hero__actions">
            <a href="#products" className="btn btn--gold" onClick={(event) => goTo(event, 'products')}>
              Explore Our Business <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--outline-light" onClick={(event) => goTo(event, 'contact')}>
              Contact Us
            </a>
          </div>
        </div>

        <aside className="hero__card" data-reveal aria-label="Our approach">
          <div className="hero__card-icon">
            <Globe2 size={26} aria-hidden="true" />
          </div>
          <p className="hero__card-kicker">Our approach</p>
          <h2>Trade built on connections.</h2>
          <ul>
            {strengths.map(({ icon: Icon, label }) => (
              <li key={label}>
                <Icon size={17} aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="hero__tagline">
        <div className="container">
          <span>{site.tagline}</span>
        </div>
      </div>
    </section>
  )
}
