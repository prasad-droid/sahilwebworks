import {
  FaEarthAmericas,
  FaMagnifyingGlassChart,
  FaBoxesStacked,
  FaFileContract,
  FaClipboardCheck,
  FaBox,
  FaPlaneArrival,
  FaHeadset,
} from "react-icons/fa6";
import Reveal from "../Reveal";

const services = [
  {
    icon: <FaEarthAmericas />,
    title: "Merchant Export",
    desc: "End-to-end merchant export of dehydrated fruits and vegetable powders to global markets.",
  },
  {
    icon: <FaMagnifyingGlassChart />,
    title: "Product Sourcing",
    desc: "Reliable sourcing from a trusted network of quality-certified Indian manufacturers.",
  },
  {
    icon: <FaBoxesStacked />,
    title: "Bulk Supply",
    desc: "Consistent bulk quantities tailored to importer and wholesaler requirements.",
  },
  {
    icon: <FaFileContract />,
    title: "Export Documentation",
    desc: "Complete export documentation handled professionally, every shipment.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Quality Inspection",
    desc: "Rigorous quality checks to meet international food-grade standards.",
  },
  {
    icon: <FaBox />,
    title: "Packaging Solutions",
    desc: "Food-grade packaging designed for freshness, safety, and long-distance transit.",
  },
  {
    icon: <FaPlaneArrival />,
    title: "International Logistics",
    desc: "Timely sea and air freight with dependable global shipping partners.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    desc: "Responsive, professional support from inquiry through delivery.",
  },
];

const Services = () => (
  <section className="section services" id="services">
    <div className="container">
      <Reveal className="section-head">
        <span className="section-label">Our Services</span>
        <h2 className="section-title">
          Complete Export Services, <span className="accent">From Sourcing to Delivery</span>
        </h2>
        <p className="section-subtitle">
          We manage every stage of the export process so international buyers receive
          quality products without complications.
        </p>
      </Reveal>

      <div className="services-grid">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 90} className="service-card hover-lift">
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
