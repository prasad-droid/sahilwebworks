import {
  FaAward,
  FaIndustry,
  FaTags,
  FaClock,
  FaFileSignature,
  FaFaceSmile,
  FaHandshake,
  FaComments,
} from "react-icons/fa6";
import Reveal from "../Reveal";

const reasons = [
  {
    icon: <FaAward />,
    title: "Premium Quality Products",
    desc: "Only the finest dehydrated fruits and vegetable powders make it to our export catalogue.",
  },
  {
    icon: <FaIndustry />,
    title: "Reliable Manufacturer Network",
    desc: "A vetted network of trusted Indian manufacturers and processors.",
  },
  {
    icon: <FaTags />,
    title: "Competitive Pricing",
    desc: "Fair, transparent pricing that delivers real value for bulk buyers.",
  },
  {
    icon: <FaClock />,
    title: "Timely Delivery",
    desc: "On-schedule shipments backed by dependable logistics partners.",
  },
  {
    icon: <FaFileSignature />,
    title: "Export Documentation Support",
    desc: "Accurate documentation for smooth customs clearance worldwide.",
  },
  {
    icon: <FaFaceSmile />,
    title: "Customer Satisfaction",
    desc: "Every order handled with care and a commitment to quality.",
  },
  {
    icon: <FaHandshake />,
    title: "Long-Term Business Relationships",
    desc: "We build lasting partnerships, not one-off transactions.",
  },
  {
    icon: <FaComments />,
    title: "Professional Communication",
    desc: "Clear, prompt communication in every interaction.",
  },
];

const WhyChooseUs = () => (
  <section className="section why">
    <div className="container">
      <Reveal className="section-head">
        <span className="section-label">Why Choose Us</span>
        <h2 className="section-title">
          A Merchant Exporter You Can <span className="accent">Trust</span>
        </h2>
        <p className="section-subtitle">
          Global buyers partner with Kesarkar Overseas for quality, reliability, and
          a seamless export experience.
        </p>
      </Reveal>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={(i % 4) * 90} className="why-card hover-lift">
            <div className="why-icon">{r.icon}</div>
            <h3 className="why-title">{r.title}</h3>
            <p className="why-desc">{r.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
