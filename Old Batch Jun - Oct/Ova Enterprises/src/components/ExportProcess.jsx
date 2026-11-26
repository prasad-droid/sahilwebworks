import { FaBox, FaClipboardCheck, FaFileAlt, FaListOl, FaPlaneDeparture, FaSlidersH } from "react-icons/fa";
import Reveal from "./Reveal";

const STEPS = [
  { icon: <FaListOl />, title: "Product Selection", text: "Browse our catalogue or request samples for your target market." },
  { icon: <FaSlidersH />, title: "Customization", text: "Choose materials, sizes, branding and private label options." },
  { icon: <FaClipboardCheck />, title: "Quality Inspection", text: "Multi-stage quality checks ensure export-grade excellence." },
  { icon: <FaBox />, title: "Packaging", text: "Secure, premium packaging prepared for long-haul transit." },
  { icon: <FaFileAlt />, title: "Export Documentation", text: "All shipping, customs and compliance paperwork handled." },
  { icon: <FaPlaneDeparture />, title: "Worldwide Delivery", text: "Reliable logistics deliver your order safely, on schedule." },
];

const ExportProcess = () => (
  <section id="process" className="section process">
    <div className="container">
      <Reveal className="section-head section-head--center">
        <span className="section-tag">How We Work</span>
        <h2 className="section-title">
          Our Export <span className="accent">Process</span>
        </h2>
        <p className="section-sub">
          A simple, transparent journey from product selection to worldwide delivery — built for
          international buyers.
        </p>
      </Reveal>

      <div className="process-track">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} type="fade-up" delay={i * 110}>
            <div className="process-step">
              <div className="step-dot">
                {s.icon}
                <span className="step-number">{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ExportProcess;
