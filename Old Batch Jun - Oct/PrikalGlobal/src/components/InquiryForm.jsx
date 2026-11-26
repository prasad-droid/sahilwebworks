import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal.jsx";

const PRODUCT_TYPES = [
  "Brown Kraft Paper Bags",
  "White Kraft Paper Bags",
  "Twisted Handle Paper Bags",
  "Flat Handle Paper Bags",
  "SOS Paper Bags",
  "Customized Printed Paper Bags",
];

const PHONE = "917058020057";

const InquiryForm = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    printing: "No",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      "New Quote Request - PRIKAL GLOBAL",
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Country: ${form.country}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Product: ${form.product}`,
      `Quantity: ${form.quantity}`,
      `Custom Printing: ${form.printing}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="inquiry" className="section inquiry">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Get A Quote</span>
          <h2 className="section-title">
            Request A <span className="accent">Quote</span>
          </h2>
          <p className="section-desc">
            Tell us about your packaging requirements and our export team will respond with
            pricing and lead times within 24 hours.
          </p>
        </Reveal>

        <Reveal direction="zoom">
          <div className="inquiry-card">
            {sent ? (
              <div className="inquiry-success">
                <CheckCircle2 size={52} />
                <h3>Inquiry Received!</h3>
                <p>
                  Your inquiry has been prepared on WhatsApp. Complete the chat to send it
                  directly to our export team.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setSent(false);
                    setForm({
                      name: "",
                      company: "",
                      country: "",
                      email: "",
                      phone: "",
                      product: "",
                      quantity: "",
                      printing: "No",
                      message: "",
                    });
                  }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className="inquiry-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="in-name">Full Name *</label>
                    <input
                      id="in-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="in-company">Company Name</label>
                    <input
                      id="in-company"
                      name="company"
                      type="text"
                      placeholder="Enter company name"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="in-country">Country *</label>
                    <input
                      id="in-country"
                      name="country"
                      type="text"
                      placeholder="e.g. United States"
                      required
                      value={form.country}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="in-email">Email Address *</label>
                    <input
                      id="in-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="in-phone">Phone Number *</label>
                    <input
                      id="in-phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 555 000 0000"
                      required
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="in-product">Product Type *</label>
                    <select
                      id="in-product"
                      name="product"
                      required
                      value={form.product}
                      onChange={handleChange}
                    >
                      <option value="">Select a product</option>
                      {PRODUCT_TYPES.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="in-quantity">Quantity Requirement *</label>
                    <input
                      id="in-quantity"
                      name="quantity"
                      type="text"
                      placeholder="e.g. 10,000 pcs / MOQ"
                      required
                      value={form.quantity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="in-printing">Custom Printing Required</label>
                    <select
                      id="in-printing"
                      name="printing"
                      value={form.printing}
                      onChange={handleChange}
                    >
                      <option value="No">No</option>
                      <option value="Yes - Logo Printing">Yes - Logo Printing</option>
                      <option value="Yes - Full Color Printing">Yes - Full Color Printing</option>
                    </select>
                  </div>
                  <div className="form-field form-field-full">
                    <label htmlFor="in-message">Message</label>
                    <textarea
                      id="in-message"
                      name="message"
                      rows="4"
                      placeholder="Tell us about your specifications, sizes, or delivery requirements"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inquiry-submit">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Inquiry <Send size={18} />
                  </button>
                  <p className="inquiry-note">
                    Your details are sent securely via WhatsApp. No spam, ever.
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default InquiryForm;
