import { ArrowDownRight, ArrowUpRight, Boxes, Leaf, MapPin } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';
import { heroHighlights } from '../data/site.js';

export default function Hero({ onExplore, onQuote }) {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow eyebrow-light">
            <span className="eyebrow-line" aria-hidden="true" />
            Packaging · Domestic Trade · Exports
          </p>
          <h1 id="hero-title">
            The Core of <span>Modern Trade.</span>
          </h1>
          <p className="hero-lead">
            Complete packaging solutions for modern businesses, along with fresh Indian banana
            leaf exports for international markets.
          </p>

          <div className="hero-actions">
            <button type="button" className="btn btn-sand" onClick={onExplore}>
              Explore Our Products <ArrowDownRight size={18} aria-hidden="true" />
            </button>
            <button type="button" className="btn btn-outline-light" onClick={onQuote}>
              Request a Quote <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </div>

          <ul className="hero-highlights" aria-label="Business highlights">
            {heroHighlights.map((highlight) => (
              <li key={highlight}>
                <span className="hero-highlight-dot" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" data-reveal>
          <figure className="hero-image hero-image-packaging">
            <ImageWithFallback
              src="/images/packaging-overview.jpg"
              alt="Assorted corrugated boxes and kraft packaging materials"
              loading="eager"
              width="1080"
              height="860"
            />
            <figcaption>
              <Boxes size={17} aria-hidden="true" />
              <span>Packaging Materials</span>
            </figcaption>
          </figure>

          <figure className="hero-image hero-image-leaf">
            <ImageWithFallback
              src="/images/banana-leaf-closeup.jpg"
              alt="Close-up of a fresh green banana leaf with visible veins"
              loading="eager"
              width="516"
              height="387"
            />
            <figcaption>
              <Leaf size={17} aria-hidden="true" />
              <span>Fresh Banana Leaves</span>
            </figcaption>
          </figure>

          <div className="hero-location">
            <MapPin size={16} aria-hidden="true" />
            <span>Pune, India</span>
          </div>
        </div>
      </div>

      <div className="container hero-bottom" aria-hidden="true">
        <span>01 / Packaging</span>
        <span className="hero-bottom-rule" />
        <span>02 / Agricultural Export</span>
      </div>
    </section>
  );
}
