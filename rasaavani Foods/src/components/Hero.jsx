import { images } from '../data/images.js'
import { IconArrow } from './Icons.jsx'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__grid">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light hero__eyebrow">
            Authentic Indian Recipes · Traditional Flavours
          </p>

          <h1 id="hero-title" className="hero__title">
            RASAVAANI
          </h1>

          <p className="hero__tagline">
            The Taste of Tradition. <span>Crafted for the World.</span>
          </p>

          <p className="hero__copy">
            Rediscover India&rsquo;s traditional recipes, authentic flavours and
            time-honoured food wisdom&mdash;thoughtfully brought to today&rsquo;s
            tables.
          </p>

          <p className="hero__signature">
            <span className="hero__signature-label">Signature</span>
            Our journey begins with the bold and authentic{' '}
            <em>Lal Mirch Bharwa Achaar</em>. And this is only the beginning.
          </p>

          <div className="btn-group hero__actions">
            <a href="#story" className="btn btn--accent">
              Explore Our Story
              <IconArrow className="btn__icon" />
            </a>
            <a href="#products" className="btn btn--ghost-light">
              Discover Our Products
            </a>
          </div>
        </div>

        <div className="hero__media">
          <img
            src={images.hero}
            alt="Whole dried red chillies, the hero ingredient of traditional Indian pickling (representative photograph)"
            className="hero__img"
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero__media-overlay" />
          <figcaption className="hero__badge">
            <span>Signature Product</span>
            <strong>Lal Mirch Bharwa Achaar</strong>
          </figcaption>
        </div>
      </div>

      <a className="hero__scroll" href="#story" aria-label="Scroll to our story">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  )
}
