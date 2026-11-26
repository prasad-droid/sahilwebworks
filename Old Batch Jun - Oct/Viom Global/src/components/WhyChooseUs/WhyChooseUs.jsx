import {
  FaAward,
  FaGlobeAsia,
  FaTags,
  FaShippingFast,
  FaHeadset,
  FaBoxes,
} from "react-icons/fa";
import "@/styles/whyChooseUs.css";

const REASONS = [
  {
    icon: <FaAward />,
    title: "International Quality Standards",
    desc: "Every product is sourced from certified Indian manufacturers and verified for global compliance.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Reliable Global Supply Network",
    desc: "A well-connected network of manufacturers and logistics partners ensures dependable availability.",
  },
  {
    icon: <FaTags />,
    title: "Competitive Pricing",
    desc: "Direct manufacturer sourcing delivers the best value without compromising on quality.",
  },
  {
    icon: <FaShippingFast />,
    title: "Timely Delivery Commitment",
    desc: "Disciplined planning and efficient shipping ensure your consignments arrive on schedule.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer-Focused Approach",
    desc: "Dedicated support with clear communication from inquiry through final delivery.",
  },
  {
    icon: <FaBoxes />,
    title: "Bulk Supply Capability",
    desc: "Scalable production capacity to fulfill large institutional and government orders.",
  },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="why section">
    <div className="container">
      <div className="section-head reveal" data-animation="fade-up">
        <span className="section-tag">Why Choose Us</span>
        <h2>
          The Trusted Choice for <span>Global Healthcare Buyers</span>
        </h2>
        <p>We combine quality, reliability, and competitive pricing to serve healthcare markets worldwide.</p>
      </div>

      <div className="why__grid">
        {REASONS.map((r, i) => (
          <article className="why__card reveal" data-animation="scale" data-delay={i % 3} key={r.title}>
            <span className="why__icon">{r.icon}</span>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
            <span className="why__num">{String(i + 1).padStart(2, "0")}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
