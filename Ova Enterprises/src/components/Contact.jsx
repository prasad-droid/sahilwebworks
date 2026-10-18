import { useState } from "react";
import {
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Reveal from "./Reveal";
import {
  ADDRESS,
  EMAIL,
  EMAIL_TEL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
} from "../data/site";

const INITIAL_FORM = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      "New Export Inquiry - Ovaa Enterprises",
      "",
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Country: ${form.country}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      `Message: ${form.message}`,
    ]
      .filter((line) => line.trim() !== "Message:" && line.trim() !== "")
      .join("\n");

    window.open(
      `https://wa.me/919082360263?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title">
            Let's Build Business <span className="accent">Together</span>
          </h2>
          <p className="section-sub">
            Send us your requirements — our export team responds within one business day.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal type="fade-left" className="contact-info">
            <div className="contact-item">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Ovaa Enterprises</h4>
                <p>{ADDRESS.line1}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${EMAIL_TEL}`}>{EMAIL}</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon">
                <FaClock />
              </div>
              <div>
                <h4>Business Hours</h4>
                <p>
                  {HOURS.days}
                  <br />
                  {HOURS.time} (IST)
                </p>
              </div>
            </div>

            <div className="contact-map" aria-hidden="true">
              <div className="map-pin">
                <FaMapMarkerAlt />
                <span>Mumbai, Maharashtra, India</span>
                <small>Premium Leather Export Hub</small>
              </div>
            </div>
          </Reveal>

          <Reveal type="fade-right" className="contact-form">
            <h3>Request an Export Quote</h3>
            <p>Fill in the form and our team will get back to you with pricing and samples.</p>

            {sent && (
              <div className="form-success" role="status">
                <FaCheckCircle /> Thank you! Your inquiry has been prepared in WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Your country"
                    value={form.country}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 ..."
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about the products, quantity and target market..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn--primary">
                  <FaPaperPlane /> Send Inquiry
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--whatsapp"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
