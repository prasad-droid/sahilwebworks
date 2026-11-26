import { Factory, Tag, Ship, Printer } from "lucide-react";
import Reveal from "./Reveal.jsx";

const SERVICES = [
  {
    icon: <Factory size={26} />,
    title: "Custom Paper Bag Manufacturing",
    desc: "Tailor-made paper bag solutions designed according to customer specifications.",
  },
  {
    icon: <Tag size={26} />,
    title: "Private Label & OEM Solutions",
    desc: "Brand-focused manufacturing services with customized packaging and labeling.",
  },
  {
    icon: <Ship size={26} />,
    title: "Export & Global Shipping",
    desc: "Efficient international logistics and export support worldwide.",
  },
  {
    icon: <Printer size={26} />,
    title: "Custom Printing & Packaging",
    desc: "Professional printing solutions including logos, branding, and promotional designs.",
  },
];

const Services = () => (
  <section id="services" className="section services">
    <div className="container">
      <Reveal className="section-head">
        <span className="eyebrow">Our Services</span>
        <h2 className="section-title">
          Complete <span className="accent">Packaging Solutions</span>
        </h2>
        <p className="section-desc">
          End-to-end manufacturing, branding, and export services tailored to the needs of
          importers, distributors, retailers, and packaging companies worldwide.
        </p>
      </Reveal>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div className="service-card">
              <div className="service-card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#inquiry" className="service-card-link">
                Request This Service <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
