import '../styles/hero.css';

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
        <div className="hero-globe"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            INDIA
            <span className="hero-eyebrow-arrow"></span>
            GLOBAL MARKETS
          </div>

          <h1 className="hero-title">
            Connecting Markets.{' '}
            <span className="hero-title-accent">Delivering Trust.</span>
          </h1>

          <h2 className="hero-subtitle">
            Quality Indian Products for Global B2B Buyers
          </h2>

          <p className="hero-description">
            Nexabound Global connects reliable Indian suppliers with importers, distributors, wholesalers, and businesses across global markets.
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn btn-primary" onClick={(e) => scrollTo(e, '#products')}>
              Explore Products
            </a>
            <a href="#inquiry" className="btn btn-secondary" onClick={(e) => scrollTo(e, '#inquiry')}>
              Send Inquiry
            </a>
          </div>

          <div className="hero-trust">
            <span>Made in India</span>
            <span className="hero-trust-dot"></span>
            <span>B2B Supply</span>
            <span className="hero-trust-dot"></span>
            <span>Global Trade</span>
          </div>
        </div>
      </div>
    </section>
  );
}