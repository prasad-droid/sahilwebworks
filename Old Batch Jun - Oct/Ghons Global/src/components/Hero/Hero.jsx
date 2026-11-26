import { Link } from "react-router-dom";
import {
  FaCheck,
  FaBoxOpen,
  FaGlobe,
  FaTruck,
  FaShieldHalved,
  FaGem,
} from "react-icons/fa6";

const trustBadges = [
  { icon: FaCheck, label: "Wholesale Supply" },
  { icon: FaGlobe, label: "Export Ready" },
  { icon: FaBoxOpen, label: "Bulk Orders" },
  { icon: FaTruck, label: "Worldwide Shipping" },
];

const Hero = () => (
  <section className="hero" id="home">
    <div className="container hero__grid">
      <div className="hero__content">
        <span className="hero__badge">
          <FaGem /> Merchant Trader &amp; Exporter
        </span>
        <h1 className="hero__title">
          Smart Supply for <span>Modern Markets</span>
        </h1>
        <p className="hero__subtitle">
          Premium Imitation Jewellery for Wholesalers, Retailers, Boutiques, and
          Global Buyers.
        </p>
        <p className="hero__desc">
          GHONS Global Impex supplies fashionable imitation jewellery designed to
          meet the evolving needs of retailers, wholesalers, distributors, and
          boutiques across domestic and international markets.
        </p>
        <div className="hero__actions">
          <Link to="/category/imitation-jewellery" className="btn btn-gold">
            Explore Collection
          </Link>
          <a href="#order" className="btn btn-outline btn-outline--white">
            Order Now
          </a>
        </div>
        <div className="hero__trust">
          {trustBadges.map(({ icon: Icon, label }) => (
            <span key={label} className="hero__trust-item">
              <Icon aria-hidden="true" /> {label}
            </span>
          ))}
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__frame">
          <img
            src="/images/products/AD Tear drop Necklace Set  img 1.jpeg"
            alt="Premium imitation jewellery collection by GHONS Global Impex"
            loading="eager"
          />
        </div>
        <div className="hero__float-card hero__float-card--top">
          <span className="hero__float-icon hero__float-icon--gold">
            <FaGem />
          </span>
          <span>
            <span className="hero__float-label">Premium Range</span>
            <span className="hero__float-value">Export-Grade Designs</span>
          </span>
        </div>
        <div className="hero__float-card hero__float-card--bottom">
          <span className="hero__float-icon">
            <FaShieldHalved />
          </span>
          <span>
            <span className="hero__float-label">Trusted Supply</span>
            <span className="hero__float-value">Reliable &amp; On Time</span>
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
