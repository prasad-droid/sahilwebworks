export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/images/product-1.jpg"
          alt=""
          className="hero__bg"
          fetchpriority="high"
        />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__inner">
        <p className="hero__title">Paraglobe Exims</p>
        <h1 className="hero__eyebrow">
          Inspiring Solutions
          <span className="hero__eyebrow-accent">With Excellence</span>
        </h1>
        <p className="hero__desc">
          Sustainable biodegradable tableware and takeaway food packaging from
          India for businesses across the globe.
        </p>

        <div className="hero__actions">
          <a href="#products" className="btn btn-accent">
            Explore Products
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn btn-ghost-light">
            Request a Quote
          </a>
        </div>

        <p className="hero__meta">100% Biodegradable • Export Ready • Business Solutions</p>
      </div>
    </section>
  );
}