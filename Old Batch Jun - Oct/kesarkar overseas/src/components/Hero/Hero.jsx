import { FaCheck, FaArrowRight, FaQuoteLeft } from "react-icons/fa6";
import { scrollToId } from "../../utils/config";
import hero1 from "../../assets/images/cumin-powder.jpeg";
import hero2 from "../../assets/images/onion-powder.jpeg";
import hero3 from "../../assets/images/garlic-powder.jpeg";

const trust = ["Export Quality", "Bulk Supply", "Reliable Sourcing", "Global Shipping"];

const Hero = () => (
  <section
    className="hero"
    id="home"
    style={{ backgroundImage: `url(${hero1})` }}
  >
    <div className="hero-overlay" />
    <div className="container hero-inner">
      <div className="hero-content">
        <span className="hero-badge">Merchant Exporter from India</span>

        <h1 className="hero-title">
          Premium Dehydrated Fruits &amp; Vegetable Powders{" "}
          <span className="accent">Exported from India</span>
        </h1>

        <p className="hero-subtitle">
          Delivering high-quality, naturally processed ingredients to food businesses
          across the world.
        </p>

        <p className="hero-desc">
          Kesarkar Overseas connects India's finest dehydrated fruit and vegetable
          products with international buyers through dependable sourcing, consistent
          quality, and professional export services.
        </p>

        <div className="hero-buttons">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => scrollToId("products")}
          >
            Explore Products <FaArrowRight />
          </button>
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={() => scrollToId("inquiry")}
          >
            Request a Quote
          </button>
        </div>

        <ul className="hero-trust">
          {trust.map((item) => (
            <li key={item} className="hero-trust-item">
              <FaCheck /> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-card hero-card-a">
          <img src={hero1} alt="Dehydrated fruit and vegetable powders" loading="eager" />
        </div>
        <div className="hero-card hero-card-b">
          <img src={hero2} alt="Naturally processed vegetable powder" loading="lazy" />
        </div>
        <div className="hero-card hero-card-c">
          <img src={hero3} alt="Premium food ingredients" loading="lazy" />
        </div>
        <div className="hero-quote">
          <FaQuoteLeft className="hero-quote-icon" />
          <p>Delivering Value Beyond Borders</p>
        </div>
      </div>
    </div>

    <div className="hero-scroll" aria-hidden="true">
      <span />
    </div>
  </section>
);

export default Hero;
