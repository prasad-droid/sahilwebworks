import { FaPhone, FaEnvelope, FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { company, waLink } from "../../config/site";
import { useReveal } from "../../hooks/useReveal";

const cards = [
  {
    icon: FaPhone,
    label: "Phone",
    value: company.phone,
    href: `tel:${company.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: company.phone,
    href: waLink("Hello GHONS Global Impex, I would like to get in touch."),
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: FaLocationDot,
    label: "Address",
    value: company.addressLines.join(", "),
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapQuery)}`,
  },
];

const Contact = () => {
  const ref = useReveal();

  return (
    <section className="section section-alt" id="contact" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Reach out for catalogues, pricing, sample requests, or bulk order
            coordination. We respond quickly.
          </p>
        </div>
        <div className="contact__grid">
          <div className="contact__cards reveal">
            {cards.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="contact-card">
                <span className="contact-card__icon">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <p className="contact-card__label">{label}</p>
                  <p className="contact-card__value">
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {value}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="contact__map reveal">
            <iframe
              title="GHONS Global Impex location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                company.mapQuery
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
