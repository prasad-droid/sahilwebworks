import {
  AwardIcon,
  TagIcon,
  HandshakeIcon,
  SlidersIcon,
  ClockIcon,
  HeadsetIcon,
  UsersIcon,
  SmileIcon,
} from "./icons.jsx";
import useReveal from "../hooks/useReveal.js";
import "../styles/sections.css";

const REASONS = [
  {
    icon: <AwardIcon />,
    title: "Premium Export Quality",
    desc: "Strict quality standards maintained throughout sourcing and supply.",
  },
  {
    icon: <TagIcon />,
    title: "Competitive Pricing",
    desc: "Cost-effective solutions without compromising quality.",
  },
  {
    icon: <HandshakeIcon />,
    title: "Reliable Sourcing",
    desc: "Partnerships with trusted Indian manufacturers.",
  },
  {
    icon: <SlidersIcon />,
    title: "Custom Specifications",
    desc: "Flexible customization options for size, GSM, color, and packaging.",
  },
  {
    icon: <ClockIcon />,
    title: "Timely Delivery",
    desc: "Efficient logistics and shipment management.",
  },
  {
    icon: <HeadsetIcon />,
    title: "Professional Export Support",
    desc: "Complete assistance throughout the export process.",
  },
  {
    icon: <UsersIcon />,
    title: "Long-Term Partnership",
    desc: "Focused on building sustainable business relationships.",
  },
  {
    icon: <SmileIcon />,
    title: "Customer Satisfaction",
    desc: "Dedicated support to meet buyer expectations consistently.",
  },
];

const WhyChooseUs = () => {
  const ref = useReveal();

  return (
    <section className="section" id="why-us">
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">
            Why Choose <span>Asalkaar Global Exim</span>
          </h2>
          <p className="section-subtitle">
            A dependable export partner committed to quality, transparency, and long-term
            business relationships.
          </p>
        </div>

        <div className="why-grid">
          {REASONS.map((reason, i) => (
            <div
              className="why-card reveal"
              key={reason.title}
              style={{ "--delay": `${(i % 4) * 0.1}s` }}
            >
              <span className="why-icon">{reason.icon}</span>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
