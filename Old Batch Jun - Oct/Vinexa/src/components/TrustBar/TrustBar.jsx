import { FaAward, FaHandshake, FaTags, FaShippingFast } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const items = [
  {
    icon: <FaAward size={22} aria-hidden="true" />,
    title: "Premium Quality",
    desc: "Products sourced from trusted manufacturers.",
  },
  {
    icon: <FaHandshake size={22} aria-hidden="true" />,
    title: "Reliable Sourcing",
    desc: "Dependable supplier coordination from India.",
  },
  {
    icon: <FaTags size={22} aria-hidden="true" />,
    title: "Competitive Pricing",
    desc: "Value-focused sourcing solutions.",
  },
  {
    icon: <FaShippingFast size={22} aria-hidden="true" />,
    title: "Timely Delivery",
    desc: "Professional logistics and shipment coordination.",
  },
];

/**
 * Four trust indicators overlapping the hero bottom edge.
 */
export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-bar__grid">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} className="trust-item" delay={i * 90}>
              <span className="trust-item__icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
