import { heroContent, heroHighlights } from '../data/content.js'
import { site } from '../data/site.js'
import SmartImage from './SmartImage.jsx'
import '../styles/hero.css'

export default function Hero() {
  const scrollTo = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        <SmartImage
          className="hero__image"
          src={heroContent.image}
          alt=""
          loading="eager"
          fetchPriority="high"
          width="1600"
          height="1067"
        />
        <span className="hero__overlay" />
        <span className="hero__grain" />
      </div>

      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-line" aria-hidden="true" />
            {heroContent.eyebrow}
          </p>
          <h1 className="hero__title" id="hero-heading">
            Nourished by Tradition, <em>Homemade</em> for You
          </h1>
          <p className="hero__text">{heroContent.text}</p>
          <div className="hero__actions">
            <a
              className="btn btn--accent"
              href={`#${heroContent.primaryCta.target}`}
              onClick={(event) => scrollTo(event, heroContent.primaryCta.target)}
            >
              {heroContent.primaryCta.label}
            </a>
            <a
              className="btn btn--ghost-light"
              href={`#${heroContent.secondaryCta.target}`}
              onClick={(event) => scrollTo(event, heroContent.secondaryCta.target)}
            >
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#about" onClick={(event) => scrollTo(event, 'about')}>
        <span className="hero__scroll-line" aria-hidden="true" />
        <span className="hero__scroll-text">Scroll</span>
      </a>

      <ul className="hero__highlights container" aria-label="Brand characteristics">
        {heroHighlights.map((highlight, index) => (
          <li className="hero__highlight" key={highlight.id} style={{ '--i': index }}>
            <span className="hero__highlight-title">{highlight.title}</span>
            <span className="hero__highlight-text">{highlight.text}</span>
          </li>
        ))}
      </ul>

      <p className="sr-only">
        {site.name} — {site.tagline}. {site.businessType} in {site.address.city},{' '}
        {site.address.region}.
      </p>
    </section>
  )
}
