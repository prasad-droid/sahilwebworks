import { FaWhatsapp, FaFileInvoice, FaClipboardCheck, FaGlobeAsia } from "react-icons/fa";
import { whatsappLink } from "../../data/siteConfig";
import RFQForm from "../RFQForm/RFQForm";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const points = [
  {
    icon: <FaFileInvoice size={20} aria-hidden="true" />,
    title: "Competitive Quotations",
    desc: "Tailored pricing based on your specifications and volumes.",
  },
  {
    icon: <FaClipboardCheck size={20} aria-hidden="true" />,
    title: "Quick Response",
    desc: "Our team reviews and responds to every enquiry promptly.",
  },
  {
    icon: <FaGlobeAsia size={20} aria-hidden="true" />,
    title: "Global Deliveries",
    desc: "Export support to destinations across the Middle East, Africa, Asia, Europe and North America.",
  },
];

/**
 * Full-width RFQ section with lead copy and form.
 */
export default function RfqSection() {
  return (
    <section className="section rfq section--green" aria-labelledby="rfq-heading">
      <div className="container rfq__grid">
        <ScrollReveal className="rfq__lead">
          <span className="section-eyebrow">Request a Quote</span>
          <h2 id="rfq-heading">Looking for a Reliable Sourcing Partner from India?</h2>
          <p>
            Share your product requirements, specifications, quantity, destination country, and
            preferred delivery terms. Our team will provide a competitive quotation tailored to your
            business needs.
          </p>
          <div className="rfq__points">
            {points.map((p) => (
              <div key={p.title} className="rfq__point">
                <span className="rfq__point-icon">{p.icon}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
              <FaWhatsapp size={18} aria-hidden="true" /> WhatsApp Us Directly
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <RFQForm />
        </ScrollReveal>
      </div>
    </section>
  );
}
