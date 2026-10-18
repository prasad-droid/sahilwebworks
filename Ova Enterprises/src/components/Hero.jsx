import { FaArrowRight, FaCheckCircle, FaGlobeAsia, FaPhoneAlt, FaBoxOpen, FaTag } from "react-icons/fa";
import heroImg from "../assets/images/laptop bag.jpg";
import Reveal from "./Reveal";

const TRUST_BADGES = [
  { icon: <FaCheckCircle />, label: "Premium Quality" },
  { icon: <FaGlobeAsia />, label: "Worldwide Export" },
  { icon: <FaBoxOpen />, label: "Bulk Orders" },
  { icon: <FaTag />, label: "Private Label" },
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-media">
        <img src={heroImg} alt="Premium leather bags handcrafted by Ovaa Enterprises" fetchpriority="high" />
      </div>
      <div className="hero-overlay" />

      <div className="container">
        <div className="hero-content">
          <Reveal type="fade-up">
            <span className="hero-eyebrow">
              <FaGlobeAsia /> Indian Leather Export Company
            </span>
          </Reveal>

          <Reveal type="fade-up" delay={120}>
            <h1 className="hero-title">
              Premium Leather Bags <span className="accent">&amp; Accessories</span> Exporter from India
            </h1>
          </Reveal>

          <Reveal type="fade-up" delay={240}>
            <p className="hero-sub">
              Welcome to Ovaa Enterprises, your trusted partner for premium leather bags and
              accessories. We deliver exceptional craftsmanship, quality, and dependable export
              solutions for businesses worldwide.
            </p>
          </Reveal>

          <Reveal type="fade-up" delay={360}>
            <div className="hero-buttons">
              <a href="#products" className="btn btn--accent">
                Explore Products <FaArrowRight />
              </a>
              <a href="#contact" className="btn btn--outline">
                <FaPhoneAlt /> Contact Us
              </a>
            </div>
          </Reveal>

          <Reveal type="fade-up" delay={480}>
            <ul className="hero-trust">
              {TRUST_BADGES.map((b) => (
                <li key={b.label}>
                  {b.icon} {b.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to about section">
        <span className="mouse" />
        Scroll
      </a>
    </section>
  );
};

export default Hero;
