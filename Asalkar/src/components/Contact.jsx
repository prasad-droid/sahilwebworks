import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
} from "./icons.jsx";
import useReveal from "../hooks/useReveal.js";
import "../styles/contact.css";

const CONTACT_ITEMS = [
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: "+91 7796319511",
    href: "tel:+917796319511",
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    value: "+91 7796319511",
    href: "https://wa.me/917796319511",
  },
  {
    icon: <MailIcon />,
    label: "Email",
    value: "info@asalkaarglobalexim.com",
    href: "mailto:info@asalkaarglobalexim.com",
  },
];

const Contact = () => {
  const ref = useReveal();

  return (
    <section className="section section-alt" id="contact">
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Contact Us</span>
          <h2 className="section-title">
            Let's Start A <span>Business Conversation</span>
          </h2>
          <p className="section-subtitle">
            Reach out to our export team for product details, pricing, and shipment information.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Asalkaar Global Exim</h3>
            <p>Premium Cotton Terry Towels Exporter from India.</p>

            <div className="contact-list">
              {CONTACT_ITEMS.map((item) => (
                <div className="contact-item" key={item.label}>
                  <span className="ci-icon">{item.icon}</span>
                  <div>
                    <div className="ci-label">{item.label}</div>
                    <a
                      className="ci-value"
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="contact-item">
                <span className="ci-icon">
                  <MapPinIcon />
                </span>
                <div>
                  <div className="ci-label">Address</div>
                  <div className="ci-value">
                    At Post Ieet, Taluka Bhoom,
                    <br />
                    District Dharashiv, Maharashtra, India
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a href="https://wa.me/917796319511" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <WhatsAppIcon /> WhatsApp Us
              </a>
              <a href="mailto:info@asalkaarglobalexim.com" className="btn btn-call">
                <MailIcon /> Email Us
              </a>
              <a href="tel:+917796319511" className="btn btn-email">
                <PhoneIcon /> Call Now
              </a>
            </div>
          </div>

          <div className="map-card reveal" style={{ "--delay": "0.12s" }}>
            <iframe
              className="map-embed"
              title="Asalkaar Global Exim Location"
              src="https://www.google.com/maps?q=At%20Post%20Ieet%2C%20Bhoom%2C%20Dharashiv%2C%20Maharashtra%2C%20India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, flex: 1 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-footer">
              <MapPinIcon /> Ieet, Bhoom, Dharashiv, Maharashtra, India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
