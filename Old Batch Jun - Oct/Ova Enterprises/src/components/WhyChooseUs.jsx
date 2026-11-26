import {
  FaBoxOpen,
  FaClipboardCheck,
  FaCrown,
  FaHandshake,
  FaHeadset,
  FaIndustry,
  FaShippingFast,
  FaTag,
  FaTools,
} from "react-icons/fa";
import Reveal from "./Reveal";

const FEATURES = [
  { icon: <FaCrown />, title: "Premium Quality Leather Products", text: "Finest full-grain and genuine leather, curated to international export standards." },
  { icon: <FaTools />, title: "Genuine Craftsmanship", text: "Skilled artisans craft every product with precision and timeless techniques." },
  { icon: <FaTag />, title: "Competitive Export Pricing", text: "Factory-direct pricing that keeps you profitable in every market." },
  { icon: <FaHandshake />, title: "Custom Branding", text: "Tailored finishes, hardware and branding designed around your label." },
  { icon: <FaIndustry />, title: "Private Label Manufacturing", text: "Your brand, our craftsmanship — full OEM & private label support." },
  { icon: <FaBoxOpen />, title: "Bulk Order Supply", text: "Reliable high-volume production and supply for wholesalers worldwide." },
  { icon: <FaShippingFast />, title: "Reliable Worldwide Shipping", text: "On-time global logistics with secure, tracked freight to 40+ countries." },
  { icon: <FaClipboardCheck />, title: "Quality Inspection", text: "Every batch passes rigorous multi-stage quality checks before dispatch." },
  { icon: <FaHeadset />, title: "Dedicated Customer Support", text: "A personal account manager from inquiry to after-sales support." },
];

const WhyChooseUs = () => (
  <section id="why" className="section why">
    <div className="container">
      <Reveal className="section-head section-head--center">
        <span className="section-tag">Why Choose Us</span>
        <h2 className="section-title">
          The Ovaa <span className="accent">Advantage</span>
        </h2>
        <p className="section-sub">
          A partner engineered for global buyers — unmatched quality, honest pricing, and a
          seamless export experience at every step.
        </p>
      </Reveal>

      <div className="why-grid">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} type="fade-up" delay={(i % 3) * 110}>
            <div className="why-card">
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
