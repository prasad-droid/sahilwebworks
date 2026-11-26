import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFileSignature, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { contact, whatsappLink } from "../../data/siteConfig";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const cards = [
  {
    icon: <FaMapMarkerAlt size={20} aria-hidden="true" />,
    title: "Address",
    body: (
      <>
        {contact.addressLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </>
    ),
  },
  {
    icon: <FaPhone size={20} aria-hidden="true" />,
    title: "Phone",
    body: <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a>,
  },
  {
    icon: <FaWhatsapp size={20} aria-hidden="true" />,
    title: "WhatsApp",
    body: <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{contact.whatsapp}</a>,
  },
  {
    icon: <FaEnvelope size={20} aria-hidden="true" />,
    title: "Email",
    body: <a href={`mailto:${contact.email}`}>{contact.email}</a>,
  },
  {
    icon: <FaFileSignature size={20} aria-hidden="true" />,
    title: "Request a Quote",
    body: (
      <Link to="/request-quote">
        Submit your sourcing requirement for a competitive quotation
      </Link>
    ),
  },
];

/**
 * Contact information section with action buttons.
 */
export default function Contact() {
  return (
    <section className="section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Contact Us"
          title="Let's Build Your Global Supply Chain"
          sub="Reach out to discuss your product requirements — we respond to every enquiry."
        />

        <div className="contact__grid">
          <div className="contact-cards">
            {cards.map((c, i) => (
              <ScrollReveal key={c.title} className="contact-card" delay={i * 70}>
                <span className="contact-card__icon">{c.icon}</span>
                <div>
                  <h4>{c.title}</h4>
                  {c.body}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={120}>
            <div className="contact-card" style={{ flexDirection: "column" }}>
              <h3>VINEXA GLOBAL ENTERPRISES</h3>
              <p>
                An Indian merchant exporter and global sourcing partner for agricultural products,
                engineering products and engineering services.
              </p>
              <div className="contact__ctas">
                <a href={`tel:${contact.phoneRaw}`} className="btn btn--primary">
                  <FaPhone size={15} aria-hidden="true" /> Call Now
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                  <FaWhatsapp size={16} aria-hidden="true" /> WhatsApp
                </a>
                <a href={`mailto:${contact.email}`} className="btn btn--outline">
                  <FaEnvelope size={15} aria-hidden="true" /> Email
                </a>
                <Link to="/request-quote" className="btn btn--gold">
                  Request a Quote <FaArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
