import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import "../styles/contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const contactItems = [
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 9850693701",
    href: "tel:+919850693701",
  },
  {
    icon: <MessageCircle size={20} />,
    label: "WhatsApp",
    value: "+91 9850693701",
    href: "https://wa.me/919850693701",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "maheshkharade27@gmail.com",
    href: "mailto:maheshkharade27@gmail.com",
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "agranishivar@gmail.com",
    href: "mailto:agranishivar@gmail.com",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="contact-head"
        >
          <span className="section-eyebrow">Contact Us</span>
          <h2 className="section-title">Get In Touch With Agrani</h2>
          <p className="section-subtitle">
            Request a quote or discuss your bulk procurement requirements with us.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="contact-info"
          >
            {contactItems.map((c, i) => (
              <motion.a
                key={i}
                variants={fadeUp}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className="contact-item"
              >
                <span className="contact-item-icon">{c.icon}</span>
                <span>
                  <strong>{c.label}</strong>
                  <em>{c.value}</em>
                </span>
              </motion.a>
            ))}

            <motion.div variants={fadeUp} className="contact-item contact-item--address">
              <span className="contact-item-icon">
                <MapPin size={20} />
              </span>
              <span>
                <strong>Address</strong>
                <em>
                  Yajurved Apartment, Flat No. 10,
                  <br />
                  Savarkar Colony Lane 3, Vishrambag,
                  <br />
                  Sangli, Maharashtra, India
                </em>
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="contact-form-card"
          >
            <h3>Send an Inquiry</h3>
            {sent ? (
              <div className="form-success">
                <CheckCircle2 size={40} />
                <h4>Thank you, {form.name || "friend"}!</h4>
                <p>Your inquiry has been received. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="cf-name">Your Name</label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Full name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-phone">Phone</label>
                    <input
                      id="cf-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="cf-email">Email</label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us your product and quantity requirements..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-gold btn-block">
                  Send Inquiry <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="map-wrap-embed"
        >
          <iframe
            title="Agrani Shivar location — Sangli, Maharashtra"
            src="https://www.google.com/maps?q=Vishrambag,%20Sangli,%20Maharashtra,%20India&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>

      <div className="floating-buttons">
        <a
          href="https://wa.me/919850693701?text=Hello%20Agrani%20Shivar,%20I%20would%20like%20to%20inquire%20about%20your%20products."
          className="float-btn float-btn--wa"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={26} />
        </a>
        <a href="tel:+919850693701" className="float-btn float-btn--call" aria-label="Call us">
          <Phone size={22} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
