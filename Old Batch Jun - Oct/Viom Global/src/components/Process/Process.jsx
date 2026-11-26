import {
  FaClipboardList,
  FaFileInvoiceDollar,
  FaCheckDouble,
  FaClipboardCheck,
  FaFileContract,
  FaTruck,
} from "react-icons/fa";
import "@/styles/process.css";

const STEPS = [
  { icon: <FaClipboardList />, title: "Product Inquiry", desc: "Share your product requirements and target quantities." },
  { icon: <FaFileInvoiceDollar />, title: "Quotation", desc: "Receive a detailed, transparent price quotation." },
  { icon: <FaCheckDouble />, title: "Order Confirmation", desc: "Confirm your order with clear terms and timelines." },
  { icon: <FaClipboardCheck />, title: "Quality Inspection", desc: "Rigorous inspection ensures international quality standards." },
  { icon: <FaFileContract />, title: "Export Documentation", desc: "Accurate export and customs documentation prepared for you." },
  { icon: <FaTruck />, title: "Worldwide Delivery", desc: "Secure, tracked delivery to your destination worldwide." },
];

const Process = () => (
  <section id="process" className="process section">
    <div className="container">
      <div className="section-head reveal" data-animation="fade-up">
        <span className="section-tag">Export Process</span>
        <h2>
          How Our <span>Export Process</span> Works
        </h2>
        <p>Six simple steps from your first inquiry to worldwide delivery.</p>
      </div>

      <ol className="process__track">
        {STEPS.map((step, i) => (
          <li className="process__step reveal" data-animation="fade-up" data-delay={i % 3} key={step.title}>
            <span className="process__circle">
              {step.icon}
              <b>{i + 1}</b>
            </span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
            {i < STEPS.length - 1 && <span className="process__arrow">&#8594;</span>}
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
