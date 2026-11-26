import { FiArrowRight, FiDownload, FiCheckCircle, FiFeather } from "react-icons/fi";
import { SITE } from "../../data/siteData";
import cover from "../../assets/gallery/p1_x1.jpg";
import Reveal from "../common/Reveal";
import "./Hero.css";

const TRUST_BADGES = ["Eco-Friendly", "100% Biodegradable", "Export Ready", "Sustainable Solutions"];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <Reveal direction="up">
            <span className="hero__badge">
              <FiFeather aria-hidden="true" /> Eco-Friendly Jute Bags &amp; Bagasse Products
            </span>
          </Reveal>

          <Reveal direction="up" delay={120}>
            <h1 className="hero__title">
              Sustainable Today, <span>Essential Tomorrow</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={220}>
            <p className="hero__subtitle">
              Premium Eco-Friendly Jute Bags &amp; Bagasse Products Exported from India to the World.
            </p>
          </Reveal>

          <Reveal direction="up" delay={320}>
            <p className="hero__desc">
              {SITE.name} supplies sustainable, biodegradable, and environmentally responsible products for
              businesses seeking high-quality alternatives to plastic. We proudly support global efforts toward a
              greener future through reliable export solutions.
            </p>
          </Reveal>

          <Reveal direction="up" delay={420}>
            <div className="hero__actions">
              <a href="#products" className="btn btn--primary">
                Explore Products <FiArrowRight aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn--ghost">
                Request Quote
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={520}>
            <ul className="hero__trust">
              {TRUST_BADGES.map((badge) => (
                <li key={badge}>
                  <FiCheckCircle aria-hidden="true" /> {badge}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal direction="right" delay={200} className="hero__visual-wrap">
          <figure className="hero__visual">
            <img
              src={cover}
              alt="Nilipar Enterprises product catalogue — eco-friendly jute bags and bagasse products"
              loading="eager"
              fetchpriority="high"
              className="hero__img"
            />
            <figcaption className="hero__caption">
              <a href="/nilipar-product-catalogue.pdf" download="Nilipar-Product-Catalogue.pdf">
                <FiDownload aria-hidden="true" /> Explore our full product catalogue
              </a>
            </figcaption>
          </figure>
          <span className="hero__float hero__float--leaf" aria-hidden="true">
            🌿
          </span>
          <span className="hero__float hero__float--box" aria-hidden="true">
            🛍️
          </span>
        </Reveal>
      </div>
    </section>
  );
}
