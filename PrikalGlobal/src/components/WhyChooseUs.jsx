import {
  Leaf,
  BadgeCheck,
  BadgePercent,
  Globe2,
  Palette,
  Clock,
  Users,
  Recycle,
} from "lucide-react";
import Reveal from "./Reveal.jsx";

const REASONS = [
  {
    icon: <Leaf size={24} />,
    title: "Eco-Friendly Products",
    desc: "Sustainable packaging solutions that support environmental responsibility.",
  },
  {
    icon: <BadgeCheck size={24} />,
    title: "Premium Quality",
    desc: "Manufactured using high-quality Kraft paper materials.",
  },
  {
    icon: <BadgePercent size={24} />,
    title: "Competitive Pricing",
    desc: "Cost-effective solutions without compromising quality.",
  },
  {
    icon: <Globe2 size={24} />,
    title: "Global Export Expertise",
    desc: "Professional handling of international orders and shipments.",
  },
  {
    icon: <Palette size={24} />,
    title: "Custom Branding",
    desc: "Personalized printing and packaging options.",
  },
  {
    icon: <Clock size={24} />,
    title: "Reliable Delivery",
    desc: "Timely production and shipment schedules.",
  },
  {
    icon: <Users size={24} />,
    title: "Customer-Centric Approach",
    desc: "Dedicated support and long-term partnership focus.",
  },
  {
    icon: <Recycle size={24} />,
    title: "Sustainable Future",
    desc: "Helping businesses reduce plastic usage through paper alternatives.",
  },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="section why">
    <div className="container">
      <Reveal className="section-head">
        <span className="eyebrow">Why Choose Us</span>
        <h2 className="section-title">
          Why Choose <span className="accent">PRIKAL GLOBAL</span>
        </h2>
        <p className="section-desc">
          A reliable manufacturing and export partner built on quality, sustainability, and
          customer-first service for businesses across the globe.
        </p>
      </Reveal>

      <div className="why-grid">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} delay={(i % 4) * 90}>
            <div className="why-card">
              <div className="why-card-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
