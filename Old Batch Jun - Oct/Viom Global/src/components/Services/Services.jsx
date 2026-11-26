import {
  FaShip,
  FaSearchDollar,
  FaNetworkWired,
  FaBoxes,
  FaClipboardCheck,
  FaFileContract,
  FaShieldAlt,
  FaPlane,
  FaHeadset,
} from "react-icons/fa";
import "@/styles/services.css";

const SERVICES = [
  { icon: <FaShip />, title: "Medical Product Export", desc: "End-to-end export of medical disposables to global healthcare markets." },
  { icon: <FaSearchDollar />, title: "Product Sourcing", desc: "Sourcing high-quality products from certified Indian manufacturers." },
  { icon: <FaNetworkWired />, title: "Global Supply Chain", desc: "A dependable supply network spanning manufacturers and buyers worldwide." },
  { icon: <FaBoxes />, title: "Bulk Supply", desc: "Fulfilling large-volume institutional, distributor, and government orders." },
  { icon: <FaClipboardCheck />, title: "Quality Inspection", desc: "Rigorous quality checks to ensure every shipment meets international standards." },
  { icon: <FaFileContract />, title: "Export Documentation", desc: "Complete, accurate documentation for smooth customs clearance." },
  { icon: <FaShieldAlt />, title: "Secure Packaging", desc: "Safe, compliant packaging that protects products during transit." },
  { icon: <FaPlane />, title: "International Logistics", desc: "Reliable sea and air freight coordination for timely global delivery." },
  { icon: <FaHeadset />, title: "Customer Support", desc: "Dedicated support team guiding you at every step of your order." },
];

const Services = () => (
  <section id="services" className="services section">
    <div className="container">
      <div className="section-head reveal" data-animation="fade-up">
        <span className="section-tag">Our Services</span>
        <h2>
          Complete <span>Export Solutions</span> for Healthcare
        </h2>
        <p>From sourcing and quality assurance to documentation and worldwide delivery — we handle it all.</p>
      </div>

      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <article className="service-card reveal" data-animation="fade-up" data-delay={i % 3} key={s.title}>
            <span className="service-card__icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
