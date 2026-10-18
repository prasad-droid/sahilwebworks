import { FiArrowRight, FiCheckCircle, FiMail } from "react-icons/fi";
import { IMAGES } from "@/assets/images";
import "@/styles/hero.css";

const TRUST_BADGES = ["International Quality", "Reliable Supply", "Global Export", "Bulk Orders"];

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero__bg">
      <img src={IMAGES.product4} alt="Medical disposable supplies packaged for export" />
      <div className="hero__overlay" />
    </div>

    <div className="hero__content container">
      <span className="hero__badge reveal" data-animation="fade-up" data-delay="0">
        India&apos;s Trusted Medical Disposable Exporter
      </span>
      <h1 className="hero__title reveal" data-animation="fade-up" data-delay="1">
        Connecting India to <span>the World</span>
      </h1>
      <p className="hero__subtitle reveal" data-animation="fade-up" data-delay="2">
        Reliable Exporter of Premium Medical Disposable Supplies for Global Healthcare Markets.
      </p>
      <p className="hero__desc reveal" data-animation="fade-up" data-delay="3">
        ViOm Global Exim delivers dependable, high-quality medical disposable products sourced from trusted
        Indian manufacturers, supporting hospitals, distributors, and healthcare institutions across the world.
      </p>

      <div className="hero__buttons reveal" data-animation="fade-up" data-delay="4">
        <a href="#products" className="btn btn-primary">
          Explore Products <FiArrowRight />
        </a>
        <a href="#contact" className="btn btn-outline hero__btn-outline">
          <FiMail /> Contact Us
        </a>
      </div>

      <ul className="hero__badges reveal" data-animation="fade-up" data-delay="5">
        {TRUST_BADGES.map((badge) => (
          <li key={badge}>
            <FiCheckCircle /> {badge}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Hero;
