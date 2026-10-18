import Reveal from "./Reveal";
import "../styles/globaltrade.css";

export default function GlobalTrade() {
  return (
    <section className="globaltrade" id="globaltrade">
      <div className="container globaltrade__inner">
        <Reveal className="globaltrade__map">
          <img
            className="globaltrade__india"
            src="/images/gallery-4.jpg"
            alt="Air freight connecting Indian exports to worldwide markets"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
        <Reveal className="globaltrade__copy" delay={120}>
          <p className="section-label section-label--light">Global Trade</p>
          <h2 className="section-title section-title--light">
            From India to the World
          </h2>
          <p className="globaltrade__text">
            Building connections between Indian products and international
            buyers.
          </p>
          <p className="globaltrade__sub">
            A1 Royal Exim positions products from India for global importers
            with a professional, straightforward enquiry experience.
          </p>
          <a href="#contact" className="btn btn--gold">
            Get a Quote
          </a>
        </Reveal>
      </div>
    </section>
  );
}