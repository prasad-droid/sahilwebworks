import Reveal from "./Reveal";
import "../styles/about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <Reveal className="about__copy">
          <p className="section-label">About A1 Royal Exim</p>
          <h2 className="section-title">
            Connecting India With Global Markets
          </h2>
          <p className="about__text">
            A1 Royal Exim exports premium tamarind and ginger from India to global
            markets, building lasting connections with international importers and
            buyers. Our goal is to make Indian produce easy to source through
            professional communication and a straightforward enquiry process.
          </p>
          <ul className="about__points">
            <li>
              Sourcing from India — connecting India-based products with importers
              worldwide.
            </li>
            <li>
              Buyer-First Enquiry — a simple process for sharing your requirements.
            </li>
          </ul>
        </Reveal>

        <Reveal className="about__visual" delay={120}>
          <div className="about__frame">
            <img
              className="about__map"
              src="/images/gallery-2.jpg"
              alt="Business team collaborating with A1 Royal Exim on international sourcing"
              loading="lazy"
              decoding="async"
            />
            <span className="about__sash">A1 ROYAL EXIM</span>
          </div>
          <div className="about__card">
            <span className="about__card-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M5 14l4 4 10-11" />
              </svg>
            </span>
            <span className="about__card-label">Our commitment</span>
            <strong>Quality Beyond Borders</strong>
          </div>
        </Reveal>
      </div>
    </section>
  );
}