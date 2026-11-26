import {
  FaHandshake,
  FaShieldAlt,
  FaCoins,
  FaShippingFast,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const items = [
  { icon: <FaHandshake size={26} aria-hidden="true" />, label: "Reliable Sourcing" },
  { icon: <FaShieldAlt size={26} aria-hidden="true" />, label: "Assured Quality" },
  { icon: <FaCoins size={26} aria-hidden="true" />, label: "Competitive Value" },
  { icon: <FaShippingFast size={26} aria-hidden="true" />, label: "Timely Delivery" },
  { icon: <FaCogs size={26} aria-hidden="true" />, label: "Customized Solutions" },
  { icon: <FaHeadset size={26} aria-hidden="true" />, label: "Export Support" },
];

/**
 * Compact trust strip: "Why Global Buyers Choose VINEXA".
 */
export default function TrustStrip() {
  return (
    <section className="section section--green" aria-labelledby="trust-strip-heading">
      <div className="container">
        <ScrollReveal className="text-center trust-strip__head">
          <h2
            id="trust-strip-heading"
            className="section-title"
            style={{ color: "var(--white)", fontSize: "1.6rem" }}
          >
            Why Global Buyers Choose VINEXA
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: 560, margin: "0 auto" }}>
            A professional international sourcing partner committed to your business success.
          </p>
        </ScrollReveal>
        <div className="trust-strip__grid">
          {items.map((item, i) => (
            <ScrollReveal key={item.label} style={{ color: "rgba(255,255,255,0.78)"}} className="trust-strip__item" delay={i * 80}>
              {item.icon}
              <span>{item.label}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
