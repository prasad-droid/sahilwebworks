import { useState } from "react";
import { FaWhatsapp, FaPaperPlane, FaCircleCheck } from "react-icons/fa6";
import { categories } from "../../data/categories";
import { company, waLink } from "../../config/site";
import { useReveal } from "../../hooks/useReveal";

const steps = [
  { title: "Send Your Requirements", desc: "Share product, quantity, and destination details through the form." },
  { title: "Get Pricing & Timeline", desc: "Our team responds with wholesale pricing, samples, and dispatch timelines." },
  { title: "Confirm & Dispatch", desc: "Finalise your order and receive export-ready delivery with tracking." },
];

const buildMessage = (f) =>
  [
    "New Bulk Order Inquiry - GHONS Global Impex",
    "------------------------------",
    `Name: ${f.name}`,
    `Company: ${f.company}`,
    `Country: ${f.country}`,
    `Phone: ${f.phone}`,
    `Email: ${f.email}`,
    `Product Category: ${f.category}`,
    `Product Name: ${f.productName}`,
    `Quantity: ${f.quantity}`,
    `Message: ${f.message}`,
  ]
    .filter((line) => line)
    .join("\n");

const OrderSection = ({ defaultCategory = "" }) => {
  const ref = useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    phone: "",
    email: "",
    category: defaultCategory,
    productName: "",
    quantity: "",
    message: "",
  });

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    const subject = `Bulk Order Inquiry - ${form.productName || form.category || "Products"}`;
    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMessage(form))}`;
    window.location.href = mailto;
    setSent(true);
  };

  const handleWhatsApp = () => {
    window.open(waLink(buildMessage(form)), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section className="section order" id="order" ref={ref}>
      <div className="container">
        <div className="order__grid">
          <div className="order__info reveal">
            <span className="eyebrow eyebrow--left">Order Here</span>
            <h2 className="order__info-title">Place Your Bulk Order</h2>
            <p className="order__info-text">
              Tell us what you need and our team will respond with wholesale
              pricing, sample options, and dispatch timelines — usually within
              24 hours.
            </p>
            <div className="order__steps">
              {steps.map((s, i) => (
                <div key={s.title} className="order__step">
                  <span className="order__step-num">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="order__step-title">{s.title}</span>
                    <span className="order__step-desc">{s.desc}</span>
                  </span>
                </div>
              ))}
            </div>
            <a
              href={waLink(
                "Hello GHONS Global Impex, I want to place a bulk order. Please share details."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <FaWhatsapp aria-hidden="true" /> WhatsApp Order
            </a>
          </div>

          <form className="order__form reveal" onSubmit={handleMailSubmit}>
            <h3 className="order__form-title">Bulk Inquiry Form</h3>
            <p className="order__form-sub">
              Fields marked with <span style={{ color: "var(--secondary)" }}>*</span> are required.
            </p>
            <div className="form-grid">
              <div className="form-field">
                <label className="form-label" htmlFor="order-name">Name <span>*</span></label>
                <input
                  id="order-name"
                  className="form-input"
                  name="name"
                  value={form.name}
                  onChange={update}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="order-company">Company</label>
                <input
                  id="order-company"
                  className="form-input"
                  name="company"
                  value={form.company}
                  onChange={update}
                  placeholder="Company / business name"
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="order-country">Country <span>*</span></label>
                <input
                  id="order-country"
                  className="form-input"
                  name="country"
                  value={form.country}
                  onChange={update}
                  required
                  placeholder="Your country"
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="order-phone">Phone / WhatsApp <span>*</span></label>
                <input
                  id="order-phone"
                  className="form-input"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update}
                  required
                  placeholder="+91 ..."
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="order-email">Email <span>*</span></label>
                <input
                  id="order-email"
                  className="form-input"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  required
                  placeholder="you@company.com"
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="order-category">Product Category <span>*</span></label>
                <select
                  id="order-category"
                  className="form-select"
                  name="category"
                  value={form.category}
                  onChange={update}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((c) => (
                    <option key={c.slug} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="order-product">Product Name</label>
                <input
                  id="order-product"
                  className="form-input"
                  name="productName"
                  value={form.productName}
                  onChange={update}
                  placeholder="e.g. Bridal Necklace Set"
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="order-qty">Quantity</label>
                <input
                  id="order-qty"
                  className="form-input"
                  name="quantity"
                  value={form.quantity}
                  onChange={update}
                  placeholder="e.g. 500 pcs / 20 sets"
                />
              </div>
              <div className="form-field form-field--full">
                <label className="form-label" htmlFor="order-message">Message</label>
                <textarea
                  id="order-message"
                  className="form-textarea"
                  name="message"
                  value={form.message}
                  onChange={update}
                  placeholder="Tell us about your requirements, target price, packaging, etc."
                />
              </div>
            </div>
            <div className="order__form-actions">
              <button type="submit" className="btn btn-primary">
                <FaPaperPlane aria-hidden="true" /> Submit Inquiry
              </button>
              <button type="button" className="btn btn-whatsapp" onClick={handleWhatsApp}>
                <FaWhatsapp aria-hidden="true" /> WhatsApp Order
              </button>
            </div>
            {sent && (
              <p className="form-success">
                <FaCircleCheck aria-hidden="true" /> Your inquiry is ready —
                please confirm it in your email or WhatsApp window. We will get
                back to you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
