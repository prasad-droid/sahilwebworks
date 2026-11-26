import TrustBar from "./TrustBar";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__grid" />
        <span className="hero__glow hero__glow--one" />
        <span className="hero__glow hero__glow--two" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            INDIA &rarr; GLOBAL MARKETS
          </p>
          <h1 className="hero__title">
            Tamarind &amp; Ginger, <span className="hero__title-accent">Exported From India</span>
          </h1>
          <p className="hero__lead">
            Premium Indian produce for global markets
          </p>
          <p className="hero__text">
            A1 Royal Exim supplies international buyers with quality tamarind and
            ginger grown in India — carefully selected, export-packed and shipped
            with reliable global trade.
          </p>
          <div className="hero__actions">
            <a href="#products" className="btn btn--gold">
              Explore Products
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-card">
            <img
              className="hero__map"
              src="/images/hero-1.jpg"
              alt="Tamarind pods harvested on a farm in India, ready for export"
              loading="eager"
              decoding="async"
            />
            <span className="hero__badge hero__badge--markets">
              <span className="hero__badge-icon" aria-hidden="true">
                <IconGlobeInline />
              </span>
              Global Markets
            </span>
            <span className="hero__badge hero__badge--export">
              <span className="hero__badge-icon" aria-hidden="true">
                <IconRouteInline />
              </span>
              India-Based Export
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <TrustBar />
      </div>
    </section>
  );
}

function IconGlobeInline() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.7 2.4 4 5.6 4 9s-1.3 6.6-4 9c-2.7-2.4-4-5.6-4-9s1.3-6.6 4-9z" />
    </svg>
  );
}

function IconRouteInline() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="6" cy="18" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <path d="M8.4 18H15a2.6 2.6 0 0 0 0-5.2H9a2.6 2.6 0 0 1 0-5.2h6.6" />
    </svg>
  );
}