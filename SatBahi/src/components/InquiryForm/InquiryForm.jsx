import { useState } from "react";
import { FiCheckCircle, FiSend } from "react-icons/fi";
import { products } from "../../data/products";
import { productFilters } from "../../data/categories";

const sizeOptions = ["Small", "Medium", "Large", "XL", "Custom Size"];
const quantityOptions = ["100 - 500 pcs", "500 - 1,000 pcs", "1,000 - 5,000 pcs", "5,000 - 10,000 pcs", "10,000+ pcs", "Not sure yet"];
const materialOptions = ["Canvas", "Cotton", "Jute", "Non-Woven", "Custom / Mixed", "Not sure"];
const colorOptions = ["Natural", "Solid colors", "Brand colors", "Custom match", "Not sure"];
const brandingOptions = ["Yes, custom branding required", "No, plain bags", "Not sure yet"];

const emptyForm = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  material: "",
  size: "",
  quantity: "",
  color: "",
  branding: "",
  requirements: "",
};

export default function InquiryForm() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend placeholder — integrate with email service / CRM / database here.
    setSubmitted(true);
  };

  const required = form.fullName && form.email;

  return (
    <div className="rfq__info">
      <h2>Looking for Premium Tote Bags?</h2>
      <p>
        Tell us what you need and our team will help you find the right tote bag solution
        for your business.
      </p>

      {submitted ? (
        <div className="form">
          <div className="form__success" role="status">
            <div className="form__success-icon" aria-hidden="true">
              <FiCheckCircle />
            </div>
            <h3>Thank you, {form.fullName || "friend"}!</h3>
            <p>
              Your inquiry has been received. Our team will get back to you shortly at{" "}
              <strong>{form.email}</strong>.
            </p>
          </div>
        </div>
      ) : (
        <form className="form" onSubmit={handleSubmit} aria-label="Request a quote form">
          <div className="form__grid">
            <div className="form__field">
              <label className="form__label" htmlFor="rfq-fullName">
                Full Name *
              </label>
              <input
                id="rfq-fullName"
                className="form__input"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="rfq-company">
                Company Name
              </label>
              <input
                id="rfq-company"
                className="form__input"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company name"
              />
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="rfq-email">
                Email *
              </label>
              <input
                id="rfq-email"
                className="form__input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="rfq-phone">
                WhatsApp / Phone
              </label>
              <input
                id="rfq-phone"
                className="form__input"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
              />
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="rfq-country">
                Country
              </label>
              <input
                id="rfq-country"
                className="form__input"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Country"
              />
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="rfq-product">
                Product Required
              </label>
              <select
                id="rfq-product"
                className="form__select"
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
                <option value="Other">Other / Not listed</option>
              </select>
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="rfq-material">
                Material
              </label>
              <select
                id="rfq-material"
                className="form__select"
                name="material"
                value={form.material}
                onChange={handleChange}
              >
                <option value="">Select material</option>
                {materialOptions.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="rfq-size">
                Size
              </label>
              <select
                id="rfq-size"
                className="form__select"
                name="size"
                value={form.size}
                onChange={handleChange}
              >
                <option value="">Select size</option>
                {sizeOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="rfq-quantity">
                Quantity
              </label>
              <select
                id="rfq-quantity"
                className="form__select"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
              >
                <option value="">Select quantity</option>
                {quantityOptions.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>

            <div className="form__field">
              <label className="form__label" htmlFor="rfq-color">
                Color
              </label>
              <select
                id="rfq-color"
                className="form__select"
                name="color"
                value={form.color}
                onChange={handleChange}
              >
                <option value="">Select color</option>
                {colorOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="form__field form__field--full">
              <label className="form__label" htmlFor="rfq-branding">
                Custom Branding Required
              </label>
              <select
                id="rfq-branding"
                className="form__select"
                name="branding"
                value={form.branding}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                {brandingOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div className="form__field form__field--full">
              <label className="form__label" htmlFor="rfq-requirements">
                Additional Requirements
              </label>
              <textarea
                id="rfq-requirements"
                className="form__textarea"
                name="requirements"
                value={form.requirements}
                onChange={handleChange}
                placeholder="Tell us more about your requirement — design, printing, packaging, delivery timeline, etc."
              />
            </div>
          </div>

          <button className="btn btn--primary btn--block form__submit" type="submit" disabled={!required}>
            <FiSend /> Request a Quote
          </button>
        </form>
      )}
    </div>
  );
}
