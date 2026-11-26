import { useEffect, useRef, useState } from "react";
import business, { buildWhatsAppLink } from "../data/business.js";
import products from "../data/products.js";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  quantity: "",
  message: "",
};

export default function Contact({ selectedProduct }) {
  const sectionRef = useRef(null);
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setForm((f) => ({ ...f, product: selectedProduct.name }));
      setSent(false);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const buildMessage = () => {
    const parts = [
      `Hello Paraglobe Exims, I am interested in ${form.product || "your products"}.`,
      form.company && `Company: ${form.company}`,
      form.country && `Country: ${form.country}`,
      form.quantity && `Required Quantity: ${form.quantity}`,
      form.message && `Details: ${form.message}`,
    ].filter(Boolean);
    return parts.join("\n");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      [buildMessage(), `Name: ${form.name}`, `Phone/WhatsApp: ${form.phone}`].join("\n")
    );
    const subject = encodeURIComponent(
      `Enquiry from ${form.name || "Website"} — ${form.product || "Products"}`
    );
    window.location.href = `mailto:${business.emailSales}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const waLink = buildWhatsAppLink(buildMessage());
  const fieldInput = (label, name, type = "text", placeholder = "", required = false) => (
    <div className="form-field">
      <label className="form-label" htmlFor={`contact-${name}`}>
        {label}
        {required && <span className="form-required"> *</span>}
      </label>
      <input
        id={`contact-${name}`}
        className="form-input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={form[name]}
        onChange={handleChange}
        required={required}
      />
    </div>
  );

  return (
    <section className="section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Request a Quote</span>
          <h2 className="section-title is-centered">Let's Build a Greener Future Together</h2>
          <p className="section-subtitle is-centered">
            Tell us what you are looking for and our team will get back to you
            with the relevant product information.
          </p>
        </div>

        <div className="contact">
          <div className="contact__panel">
            <h3 className="contact__panel-title">Talk to Our Export Team</h3>
            <p className="contact__panel-text">
              For product specifications, pricing, MOQ and export details, our
              team is ready to assist.
            </p>

            <ul className="contact__list">
              <li className="contact__item">
                <span className="contact__icon" aria-hidden="true">📞</span>
                <div>
                  <span className="contact__label">Phone</span>
                  <a href={`tel:+${business.phone}`} className="contact__value">
                    {business.phoneDisplay}
                  </a>
                  <a href={`tel:+${business.phone2}`} className="contact__value">
                    {business.phone2Display}
                  </a>
                </div>
              </li>
              <li className="contact__item">
                <span className="contact__icon" aria-hidden="true">💬</span>
                <div>
                  <span className="contact__label">WhatsApp</span>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="contact__value">
                    {business.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="contact__item">
                <span className="contact__icon" aria-hidden="true">✉️</span>
                <div>
                  <span className="contact__label">Email</span>
                  <a href={`mailto:${business.emailSales}`} className="contact__value">
                    {business.emailSales}
                  </a>
                  <a href={`mailto:${business.emailExport}`} className="contact__value">
                    {business.emailExport}
                  </a>
                </div>
              </li>
              <li className="contact__item">
                <span className="contact__icon" aria-hidden="true">🌐</span>
                <div>
                  <span className="contact__label">Website</span>
                  <a
                    href={business.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__value"
                  >
                    {business.website}
                  </a>
                </div>
              </li>
              <li className="contact__item">
                <span className="contact__icon" aria-hidden="true">📍</span>
                <div>
                  <span className="contact__label">Office</span>
                  <span className="contact__value">{business.address}</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} aria-label="B2B enquiry form">
            <div className="form-grid">
              {fieldInput("Full Name", "name", "text", "Your full name", true)}
              {fieldInput("Company Name", "company", "text", "Your company")}
              {fieldInput("Email", "email", "email", "you@company.com", true)}
              {fieldInput("WhatsApp / Phone", "phone", "tel", "Your contact number")}
              {fieldInput("Country", "country", "text", "Your country")}

              <div className="form-field">
                <label className="form-label" htmlFor="contact-product">
                  Product Interested In
                </label>
                <select
                  id="contact-product"
                  className="form-input"
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                >
                  <option value="">Select a product</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Multiple / Full Range">Multiple / Full Range</option>
                </select>
              </div>

              {fieldInput("Required Quantity", "quantity", "text", "e.g. 1,000 units")}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className="form-input form-textarea"
                name="message"
                rows="4"
                placeholder="Tell us about your requirements"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Send Enquiry
                <span className="btn-arrow" aria-hidden="true">→</span>
              </button>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Chat on WhatsApp
              </a>
            </div>

            {sent && (
              <p className="form-note" role="status">
                Your email app should open with your enquiry. You can also send it
                directly on WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}