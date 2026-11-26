import { useReveal } from "../../hooks/useReveal";
import {
  FaHandshake,
  FaGlobe,
  FaGem,
  FaHeadset,
  FaTag,
  FaBoxesStacked,
  FaSackDollar,
  FaUsers,
} from "react-icons/fa6";

const features = [
  { icon: FaHandshake, title: "Trusted Trading Partner", desc: "Long-term relationships built on reliability and fair dealing." },
  { icon: FaGlobe, title: "Global Supply Network", desc: "Export-ready sourcing that reaches markets across the world." },
  { icon: FaGem, title: "Quality Products", desc: "Premium, trend-led designs with consistent export-grade quality." },
  { icon: FaHeadset, title: "Professional Service", desc: "Responsive, clear communication at every step of the order." },
];

const points = [
  { icon: FaUsers, label: "Customer-Focused Trading" },
  { icon: FaBoxesStacked, label: "Reliable Sourcing" },
  { icon: FaSackDollar, label: "Competitive Pricing" },
  { icon: FaTag, label: "Flexible Product Supply" },
];

const About = () => {
  const ref = useReveal();

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          <div className="about__media reveal">
            <span className="about__media-accent" />
            <div className="about__media-main">
              <img
                src="/images/products/Kundan Bridal Necklace Set (2).jpeg"
                alt="GHONS Global Impex India based exporter and wholesaler of imitation jewellery"
                loading="lazy"
              />
            </div>
            <div className="about__badge">
              <span className="about__badge-num">100%</span>
              <span className="about__badge-label">Export Ready</span>
            </div>
          </div>

          <div className="about__content">
            <div className="section-head reveal">
              <span className="eyebrow eyebrow--left">About Us</span>
              <h2 className="section-title">
                India-Based Exporter &amp; Wholesaler of Imitation Jewellery
              </h2>
            </div>
            <p className="about__text reveal">
              We are an India-based exporter and wholesaler of imitation
              jewellery, offering trendy and premium-quality designs for
              retailers, resellers, and boutiques worldwide.
            </p>
            <p className="about__text reveal">
              As a merchant trader and export house, we combine customer-focused
              trading, reliable sourcing, and competitive pricing to deliver a
              flexible product supply that supports long-term business
              relationships across domestic and international markets.
            </p>
            <div className="about__points reveal">
              {points.map(({ icon: Icon, label }) => (
                <span key={label} className="about__point">
                  <Icon aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
            <div className="reveal">
              <a href="#order" className="btn btn-primary">
                Partner With Us
              </a>
            </div>
          </div>
        </div>

        <div className="about__features">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <article key={title} className="feature-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="feature-card__icon">
                <Icon aria-hidden="true" />
              </span>
              <h3 className="feature-card__title">{title}</h3>
              <p className="feature-card__desc">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
