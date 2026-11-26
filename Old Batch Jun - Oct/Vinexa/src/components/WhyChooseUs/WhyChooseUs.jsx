import { FaAward, FaTags, FaSyncAlt, FaShippingFast, FaUsers, FaFileSignature } from "react-icons/fa";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const reasons = [
  {
    icon: <FaAward size={22} aria-hidden="true" />,
    title: "Premium Quality",
    desc: "Products sourced from trusted manufacturers following international standards.",
  },
  {
    icon: <FaTags size={22} aria-hidden="true" />,
    title: "Competitive Pricing",
    desc: "Optimized sourcing to deliver maximum value without compromising quality.",
  },
  {
    icon: <FaSyncAlt size={22} aria-hidden="true" />,
    title: "Reliable Supply Chain",
    desc: "Efficient coordination from procurement to shipment.",
  },
  {
    icon: <FaShippingFast size={22} aria-hidden="true" />,
    title: "Timely Delivery",
    desc: "Strong logistics planning supports on-time dispatch.",
  },
  {
    icon: <FaUsers size={22} aria-hidden="true" />,
    title: "Customer-Centric Approach",
    desc: "Customized sourcing solutions based on customer requirements.",
  },
  {
    icon: <FaFileSignature size={22} aria-hidden="true" />,
    title: "Complete Export Support",
    desc: "From inquiry to final shipment, we manage the export process professionally.",
  },
];

/**
 * Why Choose Us — six differentiators.
 */
export default function WhyChooseUs() {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Your Reliable Export Partner"
          sub="Global buyers choose VINEXA for dependable sourcing, assured quality and professional export support."
        />

        <div className="why-grid">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} className="why-card" delay={i * 90}>
              <span className="why-card__icon">{r.icon}</span>
              <div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
