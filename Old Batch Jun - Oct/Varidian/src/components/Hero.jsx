import "../styles/hero.css";
import TrustBar from "./TrustBar";

export default function Hero({ onRequestQuote }) {
  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
        <span className="hero__grain" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow hero__reveal">
            <span className="hero__eyebrow-line" />
            Indian Agricultural Exports
          </span>

          <h1 className="hero__title hero__reveal hero__reveal--1">
            Quality. Reliability.
            <br />
            <em>Global Reach.</em>
          </h1>

          <p className="hero__lead hero__reveal hero__reveal--2">
            Connecting India&rsquo;s Quality Agriculture With Global Markets
          </p>

          <p className="hero__desc hero__reveal hero__reveal--2">
            Varidian Exim connects reliable Indian suppliers with international
            importers, wholesalers, distributors, retailers, and businesses seeking
            quality agricultural products.
          </p>

          <div className="hero__actions hero__reveal hero__reveal--3">
            <button
              type="button"
              className="btn btn-accent btn-lg hero__cta"
              onClick={() => scrollTo("products")}
            >
              Explore Products
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-lg hero__cta"
              onClick={onRequestQuote}
            >
              Request a Quote
            </button>
          </div>
        </div>

        <div className="hero__visual hero__reveal hero__reveal--2">
          <div className="hero__image-wrap">
            <img
              src="/images/hero-export.jpg"
              alt="Indian agricultural produce prepared for international export"
              className="hero__image"
              width="1200"
              height="1000"
              fetchpriority="high"
            />
          </div>
          <span className="hero__badge hero__badge--quality">Premium Quality</span>
          <span className="hero__badge hero__badge--trade">B2B Trade Ready</span>
        </div>
      </div>

      <div className="container">
        <div className="hero__trust-wrap hero__reveal hero__reveal--4">
          <TrustBar />
        </div>
      </div>
    </section>
  );
}