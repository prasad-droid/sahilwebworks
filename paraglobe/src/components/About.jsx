export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <div className="about__visual">
          <div className="about__blob" aria-hidden="true" />
          <img
            src="/images/product-3.png"
            alt="Paraglobe Exims biodegradable tableware"
            className="about__img-main"
            loading="lazy"
          />
          <div className="about__float">
            <img
              src="/images/product-5.jpg"
              alt="Eco-friendly party and event tableware range"
              className="about__img-float"
              loading="lazy"
            />
          </div>
          <div className="about__badge">
            <span className="about__badge-leaf" aria-hidden="true">🌿</span>
            <div>
              <strong>Sustainable Solutions</strong>
              <span>100% biodegradable</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <span className="section-eyebrow">About Paraglobe Exims</span>
          <h2 className="section-title">Your Trusted Partner in Sustainable Tableware</h2>
          <p className="about__text">
            Welcome to Paraglobe Exims, your trusted global partner in sustainable
            and eco-friendly tableware solutions. We are a premier export company
            dedicated to providing high-quality, 100% biodegradable tableware to
            businesses, distributors, and industries worldwide.
          </p>
          <p className="about__text">
            At Paraglobe Exims, we believe the future of food service is green. As
            the global demand for sustainable alternatives to single-use plastics
            continues to rise, we bridge the gap between environmentally conscious
            manufacturing and the international market.
          </p>
          <a href="#contact" className="btn btn-primary">
            Discover Our Story
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}