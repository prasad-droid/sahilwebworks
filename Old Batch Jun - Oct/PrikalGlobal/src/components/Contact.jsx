import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import Reveal from "./Reveal.jsx";

const PHONE_DISPLAY = "+91 7058020057";
const PHONE_TEL = "+917058020057";
const WHATSAPP_1 = "917058020057";
const WHATSAPP_2 = "917499469479";
const EMAIL = "priyankabagul57@gmail.com";
const ADDRESS =
  "Pristine Greens Phase I, Opposite Silver 9 Society, Moshi, Pune - 412105, Maharashtra, India";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      "New Contact Message - PRIKAL GLOBAL",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_1}?text=${encodeURIComponent(text)}`, "_blank");
    setForm({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Contact Us</span>
          <h2 className="section-title">
            Let's Talk About Your <span className="accent">Export Needs</span>
          </h2>
          <p className="section-desc">
            Reach out to our export team for pricing, samples, production timelines, or
            partnership inquiries.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal direction="left" className="contact-info">
            <div className="contact-card">
              <span className="contact-icon">
                <Phone size={22} />
              </span>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">
                <MessageCircle size={22} />
              </span>
              <div>
                <h4>WhatsApp</h4>
                <a href={`https://wa.me/${WHATSAPP_1}`} target="_blank" rel="noreferrer">
                  {PHONE_DISPLAY}
                </a>
                <a href={`https://wa.me/${WHATSAPP_2}`} target="_blank" rel="noreferrer">
                  +91 7499469479
                </a>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">
                <Mail size={22} />
              </span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
            </div>

            <div className="contact-card">
              <span className="contact-icon">
                <MapPin size={22} />
              </span>
              <div>
                <h4>Address</h4>
                <p>{ADDRESS}</p>
              </div>
            </div>

            <div className="contact-actions">
              <a href={`tel:${PHONE_TEL}`} className="btn btn-secondary">
                <Phone size={16} /> Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_1}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btn-accent">
                <Mail size={16} /> Email Us
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us A Message</h3>
              <div className="form-field">
                <label htmlFor="ct-name">Full Name *</label>
                <input
                  id="ct-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="ct-email">Email Address *</label>
                <input
                  id="ct-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="ct-message">Message *</label>
                <textarea
                  id="ct-message"
                  name="message"
                  rows="4"
                  placeholder="How can we help you?"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Message <Send size={16} />
              </button>
            </form>

            <div className="contact-map">
              <iframe
                title="PRIKAL GLOBAL Location - Moshi, Pune, India"
                src="https://maps.google.com/maps?q=Moshi%2C%20Pune%2C%20Maharashtra%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
