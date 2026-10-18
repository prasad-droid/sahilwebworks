import { useState } from "react";
import { SendIcon, CheckIcon } from "./icons.jsx";
import useReveal from "../hooks/useReveal.js";
import "../styles/contact.css";

const PRODUCT_OPTIONS = [
  "Bath Towels",
  "Hand Towels",
  "Face Towels",
  "Bath Sheets",
  "Hotel Towels",
  "Gym Towels",
  "Customized Cotton Terry Towels",
  "Multiple Products",
  "Other",
];

const InquiryForm = () => {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New Inquiry from Asalkaar Global Exim Website%0A%0AName: ${form.name}%0ACompany: ${form.company}%0ACountry: ${form.country}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AProduct: ${form.product}%0AQuantity: ${form.quantity}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/917796319511?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="section inquiry" id="inquiry">
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">
            Request <span>A Quote</span>
          </h2>
          <p className="section-subtitle">
            Tell us your requirement and our export team will respond with a tailored quote within
            24 hours.
          </p>
        </div>

        <form className="inquiry-form reveal" onSubmit={handleSubmit} style={{ "--delay": "0.1s" }}>
          {submitted ? (
            <div className="form-success">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  flexDirection: "column",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <span
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.16)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  <CheckIcon style={{ width: 30, height: 30 }} />
                </span>
                <h3 style={{ color: "#fff", fontSize: 24 }}>Inquiry Sent!</h3>
                <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: 420 }}>
                  Thank you for contacting Asalkaar Global Exim. Our team will reach out to you
                  shortly with a customized quotation.
                </p>
                <button
                  type="button"
                  className="btn btn-white"
                  style={{ marginTop: 10 }}
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      company: "",
                      country: "",
                      email: "",
                      phone: "",
                      product: "",
                      quantity: "",
                      message: "",
                    });
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Enter your country"
                    value={form.country}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="product">Product Required</label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                  >
                    <option value="">Select a product</option>
                    {PRODUCT_OPTIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group full">
                  <label htmlFor="quantity">Quantity Required</label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    placeholder="e.g. 5,000 pcs / 1 FCL 40ft container"
                    value={form.quantity}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your size, GSM, color, branding, and packaging requirements..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-submit">
                <button type="submit" className="btn btn-white">
                  Send Inquiry <SendIcon />
                </button>
              </div>
              <p className="form-note">
                Your information is safe with us. We respond to every inquiry within 24 hours.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
