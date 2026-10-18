import { Link } from "react-router-dom";
import { FiArrowRight, FiAward, FiGlobe, FiCheckCircle } from "react-icons/fi";
import heroImage from "../../assets/images/hero.jpg";
import { whatsappLink, SITE } from "../../data/site";

const stats = [
  { value: "100%", label: "Product Focus" },
  { value: "Global", label: "Export Reach" },
  { value: "Custom", label: "Made to Order" },
];

export default function Hero() {
  return (
    <section className="hero" aria-label="SATBHAI EXIM introduction">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <span className="hero__badge">
              <FiCheckCircle /> Merchant Export Company · India
            </span>
            <h1 className="hero__title">
              Quality Product
              <em>Global Reach</em>
            </h1>
            <p className="hero__subtitle">Premium Tote Bags for Global Buyers</p>
            <p className="hero__text">
              SATBHAI EXIM is an India-based merchant export company specializing in
              high-quality tote bags. We supply durable, stylish, and eco-friendly tote
              bags to wholesalers, importers, retailers, distributors, and private-label
              brands across international markets.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/products">
                Explore Our Collection <FiArrowRight />
              </Link>
              <Link className="btn btn--outline" to="/contact">
                Request a Quote
              </Link>
              <a
                className="btn btn--whatsapp"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__image-wrap">
              <img
                src={heroImage}
                alt="High-quality tote bag supplied by SATBHAI EXIM for international buyers"
                fetchPriority="high"
              />
            </div>
            <div className="hero__badge-float hero__badge-float--quality">
              <FiAward />
              <span>Superior Quality<br />Tote Bags</span>
            </div>
            <div className="hero__badge-float hero__badge-float--global">
              <FiGlobe />
              <span>Global Export<br />Service</span>
            </div>
          </div>
        </div>

        <div className="hero__stats">
          {stats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
