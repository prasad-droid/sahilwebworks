import {
  FaBox,
  FaBoxOpen,
  FaClipboardCheck,
  FaFileAlt,
  FaGlobeAsia,
  FaHeadset,
  FaIndustry,
  FaPenNib,
  FaSearch,
  FaTag,
  FaSuitcase,
} from "react-icons/fa";
import Reveal from "./Reveal";

const SERVICES = [
  { icon: <FaSuitcase />, title: "Leather Product Export", text: "End-to-end export of premium leather bags and accessories worldwide." },
  { icon: <FaSearch />, title: "Product Sourcing", text: "We source and curate the finest leather products for your market." },
  { icon: <FaIndustry />, title: "OEM Manufacturing", text: "Produce your designs at scale with consistent international quality." },
  { icon: <FaTag />, title: "Private Label Manufacturing", text: "Full private label support — your brand on world-class products." },
  { icon: <FaPenNib />, title: "Custom Logo Branding", text: "Embossed logos, hardware and packaging tailored to your brand." },
  { icon: <FaBoxOpen />, title: "Bulk Orders", text: "High-volume production capacity for wholesalers and distributors." },
  { icon: <FaClipboardCheck />, title: "Quality Inspection", text: "Rigorous multi-point inspection at every production stage." },
  { icon: <FaFileAlt />, title: "Export Documentation", text: "Complete documentation handled — invoices, certificates and customs." },
  { icon: <FaBox />, title: "Secure Packaging", text: "Premium protective packaging that keeps products pristine in transit." },
  { icon: <FaGlobeAsia />, title: "Worldwide Shipping", text: "Reliable freight and logistics partners serving 40+ countries." },
  { icon: <FaHeadset />, title: "Customer Support", text: "Responsive, dedicated support from inquiry to after-sales." },
];

const Services = () => (
  <section id="services" className="section services">
    <div className="container">
      <Reveal className="section-head section-head--center">
        <span className="section-tag">Our Services</span>
        <h2 className="section-title">
          Complete Leather <span className="accent">Export Solutions</span>
        </h2>
        <p className="section-sub">
          From sourcing and manufacturing to documentation and worldwide delivery — one reliable
          partner for your entire leather supply chain.
        </p>
      </Reveal>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} type="fade-up" delay={(i % 3) * 110}>
            <div className="service-card">
              <div className="icon">{s.icon}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
