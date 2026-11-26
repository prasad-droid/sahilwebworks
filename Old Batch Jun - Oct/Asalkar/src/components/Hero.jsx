import {
  GlobeIcon,
  TruckIcon,
  TagIcon,
  ShieldIcon,
  CheckIcon,
  WhatsAppIcon,
  AwardIcon,
  StarIcon,
} from "./icons.jsx";
import useReveal from "../hooks/useReveal.js";
import heroImage from "../assets/images/WhatsApp Image 2026-08-10 at 10.09.05 PM.jpeg";
import "../styles/hero.css";

const STATS = [
  { icon: <ShieldIcon />, title: "Premium Export Quality", desc: "Certified cotton terry" },
  { icon: <GlobeIcon />, title: "Global Supply Network", desc: "Serving worldwide buyers" },
  { icon: <TagIcon />, title: "Competitive Pricing", desc: "Direct factory rates" },
  { icon: <TruckIcon />, title: "Timely Delivery", desc: "Reliable shipment schedules" },
];

const HERO_POINTS = ["100% Premium Cotton Terry", "Custom Sizes, GSM & Branding", "Export Standard Packaging"];

const Hero = () => {
  const ref = useReveal();

  return (
    <section className="hero" id="home">
      <div className="container" ref={ref}>
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="dot" />
            Indian Textile Export Trading Company
          </span>

          <h1 className="hero-title">
            Premium Cotton Terry Towels From <span>India To The World</span>
          </h1>

          <p className="hero-subtitle">
            Supplying high-quality Cotton Terry Towels to importers, wholesalers, retailers,
            hospitality suppliers, and distributors worldwide.
          </p>

          <p className="hero-desc">
            Asalkaar Global Exim connects trusted Indian manufacturers with international buyers
            by delivering premium-quality Cotton Terry Towels at competitive prices while ensuring
            reliability, consistency, and customer satisfaction.
          </p>

          <div className="hero-actions">
            <a href="#inquiry" className="btn btn-primary">
              Request A Quote
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-visual reveal">
            <div className="hero-card">
            <div className="hero-card-header">
              <span className="img">
                <ShieldIcon />
              </span>
              <div>
                <h3>Cotton Terry Towels</h3>
                <p>Premium Export Quality</p>
              </div>
            </div>

            <div className="hero-towel">
              <img
                className="towel-img"
                src={heroImage}
                alt="Premium cotton terry towels export quality from India"
                loading="eager"
              />
            </div>

            <ul className="hero-card-list">
              {HERO_POINTS.map((point) => (
                <li key={point}>
                  <span className="check">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        {STATS.map((stat, i) => (
          <div
            className="stat reveal"
            key={stat.title}
            style={{ "--delay": `${i * 0.1}s` }}
          >
            <span className="stat-icon">{stat.icon}</span>
            <h4>{stat.title}</h4>
            <p>{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Hero;
