import { ArrowRight, ArrowUpRight, Earth, Leaf, PackageCheck } from "lucide-react";
import moringaMain from "../assets/images/moringa-powder-main.webp";
import carpetsRolled from "../assets/images/carpets-rolled.webp";
import hairclips from "../assets/images/hairclips-pebbles.webp";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__orb hero__orb--gold" />
        <span className="hero__orb hero__orb--leaf" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Merchant Trader &amp; Exporter
            <span className="hero__eyebrow-sep" aria-hidden="true" />
            India
            <ArrowRight size={13} aria-hidden="true" />
            Global
          </p>

          <h1 id="hero-title" className="hero__title">
            Quality Products.
            <span>Global Opportunities.</span>
            <em>Growing Together.</em>
          </h1>

          <p className="hero__lede">
            DVK Enterprises brings together diverse product categories, from
            natural Moringa Powder and premium carpets and rugs to everyday
            fashion accessories. We connect quality-focused sourcing with
            business opportunities for customers and buyers.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#products">
              Explore Our Products
              <ArrowUpRight size={18} strokeWidth={2.1} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#contact">
              Connect With Us
              <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>

          <div className="hero__tagline">
            <span className="hero__tagline-line" aria-hidden="true" />
            <Leaf size={17} strokeWidth={1.8} aria-hidden="true" />
            <span>We Grow Together.</span>
          </div>

          <ul className="hero__trust" aria-label="Business highlights">
            <li>
              <PackageCheck size={16} aria-hidden="true" />
              B2B &amp; retail enquiries
            </li>
            <li>
              <Earth size={16} aria-hidden="true" />
              India &amp; UAE contacts
            </li>
            <li>
              <Leaf size={16} aria-hidden="true" />
              Multi-category sourcing
            </li>
          </ul>
        </div>

        <div className="hero__visual" aria-label="DVK Enterprises product portfolio">
          <div className="hero__visual-glow" aria-hidden="true" />

          <figure className="hero__card hero__card--main">
            <img
              src={moringaMain}
              alt="Natural green moringa powder presented in a bowl"
              width="1400"
              height="1050"
              fetchPriority="high"
              decoding="async"
            />
            <figcaption>
              <span>Natural range</span>
              Moringa Powder
            </figcaption>
          </figure>

          <figure className="hero__card hero__card--rug">
            <img
              src={carpetsRolled}
              alt="Rolled carpets and rugs in warm, textured patterns"
              width="1400"
              height="2488"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Home décor</span>
              Carpets &amp; Rugs
            </figcaption>
          </figure>

          <figure className="hero__card hero__card--clip">
            <img
              src={hairclips}
              alt="Assorted decorative hair clips arranged on a neutral surface"
              width="1400"
              height="1400"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Fashion accessories</span>
              Hair Clips
            </figcaption>
          </figure>

          <div className="hero__seal" aria-hidden="true">
            <Leaf size={20} strokeWidth={1.7} />
            <span>
              We Grow
              <br />
              Together
            </span>
          </div>

          <span className="hero__ring hero__ring--one" aria-hidden="true" />
          <span className="hero__ring hero__ring--two" aria-hidden="true" />
        </div>
      </div>

      <div className="container">
        <div className="hero__footline">
          <span>Moringa Powder</span>
          <span aria-hidden="true">/</span>
          <span>Carpets &amp; Rugs</span>
          <span aria-hidden="true">/</span>
          <span>Hair Clips</span>
          <span aria-hidden="true">/</span>
          <span>Rubber Bands</span>
        </div>
      </div>
    </section>
  );
}
