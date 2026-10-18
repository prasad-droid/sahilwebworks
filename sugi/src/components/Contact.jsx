import "../styles/contact.css";

const CONTACT_EMAIL = "rohanparicharak111@gmail.com";
const CONTACT_PHONE = "+91 9405000111";
const WHATSAPP_URL = `https://wa.me/919405000111?text=${encodeURIComponent(
  "Hello SUGI INTERNATIONAL PRIVATE LIMITED, I would like to discuss an agro commodity sourcing requirement."
)}`;

export default function Contact() {
  return (
    <section id="contact" className="contact section-pad">
      <div className="container">
        <div className="contact__head reveal">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-sub">
            Reach out to discuss a sourcing requirement or for more information.
          </p>
        </div>

        <div className="contact__cards">
          <div className="contact-card reveal">
            <span className="contact-card__label">Phone / WhatsApp</span>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="contact-card__value">
              {CONTACT_PHONE}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              WhatsApp Us
            </a>
          </div>

          <div className="contact-card reveal">
            <span className="contact-card__label">Email</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-card__value contact-card__value--email">
              {CONTACT_EMAIL}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary">
              Email Us
            </a>
          </div>

          <div className="contact-card reveal">
            <span className="contact-card__label">Location</span>
            {/* Exact office address not yet provided — shows India until supplied. */}
            <span className="contact-card__value">India</span>
            <span className="contact-card__note">Location details to be confirmed</span>
          </div>
        </div>
      </div>
    </section>
  );
}
