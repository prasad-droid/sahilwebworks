import { useEffect, useState } from "react";
import { FaEnvelope, FaWhatsapp, FaShieldHalved, FaTruck, FaBolt } from "react-icons/fa6";
import Reveal from "../Reveal";
import { buildMailTo, buildWhatsAppLink, COMPANY } from "../../utils/config";

const productOptions = [
  "Dehydrated Vegetable Powders",
  "Onion Powder",
  "Garlic Powder",
  "Cumin Powder",
  "Tomato Powder",
  "Beetroot Powder",
  "Mint (Pudina) Powder",
  "Spinach Powder",
  "Carrot Powder",
  "Ginger Powder",
  "Dehydrated Fruit Powders",
  "Mango Powder",
  "Raw Mango Powder (Amchur)",
  "Banana Powder",
  "Pineapple Powder",
  "Strawberry Powder",
  "Lemon Powder",
  "Orange Powder",
  "Amla Powder",
];

const perks = [
  { icon: <FaShieldHalved />, text: "Export-quality products, checked at every stage." },
  { icon: <FaTruck />, text: "Bulk supply with dependable international shipping." },
  { icon: <FaBolt />, text: "Fast, professional responses within 24 hours." },
];

const initialForm = {
  name: "",
  company: "",
  country: "",
  phone: "",
  email: "",
  product: "",
  quantity: "",
  message: "",
};

const Inquiry = () => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    const handler = (e) => {
      setForm((f) => ({ ...f, product: e.detail.name }));
    };
    window.addEventListener("kesarkar:product", handler);
    return () => window.removeEventListener("kesarkar:product", handler);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildMessage = () => {
    const lines = [
      `New inquiry from the Kesarkar Overseas website`,
      ``,
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Country: ${form.country}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Product of Interest: ${form.product}`,
      `Quantity Requirement: ${form.quantity}`,
      ``,
      `Message:`,
      form.message,
    ];
    return lines.join("\n");
  };

  const handleEmail = (e) => {
    e.preventDefault();
    window.location.href = buildMailTo({
      subject: `Enquiry: ${form.product || "Dehydrated Food Ingredients"} - ${form.name || COMPANY.name}`,
      body: buildMessage(),
    });
  };

  const handleWhatsApp = () => {
    window.open(buildWhatsAppLink(buildMessage()), "_blank");
  };

  const field = (name, type = "text", label, required = false) => (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span className="form-required">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        required={required}
        autoComplete="off"
      />
    </div>
  );

  return (
    <section className="section inquiry" id="inquiry">
      <div className="container">
        <div className="inquiry-grid">
          <Reveal direction="left" className="inquiry-info">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title inquiry-title">
              Looking for Reliable <span className="accent">Food Ingredients?</span>
            </h2>
            <p className="inquiry-text">
              Tell us what you need and our export team will respond with a tailored
              quotation for bulk supply of dehydrated fruits and vegetable powders.
            </p>
            <ul className="inquiry-perks">
              {perks.map((p) => (
                <li key={p.text} className="inquiry-perk">
                  <span className="inquiry-perk-icon">{p.icon}</span>
                  {p.text}
                </li>
              ))}
            </ul>
            <div className="inquiry-contact">
              <div>
                <span className="inquiry-contact-label">WhatsApp / Phone</span>
                <a href={`tel:${COMPANY.phoneLink}`}>{COMPANY.phone}</a>
              </div>
              <div>
                <span className="inquiry-contact-label">Email</span>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="inquiry-form-wrap">
            <form className="inquiry-form" onSubmit={handleEmail}>
              <div className="form-row">
                {field("name", "text", "Name", true)}
                {field("company", "text", "Company")}
              </div>
              <div className="form-row">
                {field("country", "text", "Country")}
                {field("phone", "tel", "Phone")}
              </div>
              {field("email", "email", "Email", true)}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="product">Product of Interest</label>
                  <select id="product" name="product" value={form.product} onChange={handleChange}>
                    <option value="">Select a product</option>
                    {productOptions.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                {field("quantity", "text", "Quantity Requirement")}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your sourcing requirements..."
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-block">
                  <FaEnvelope /> Send Inquiry
                </button>
                <button
                  type="button"
                  className="btn btn-whatsapp btn-block"
                  onClick={handleWhatsApp}
                >
                  <FaWhatsapp /> WhatsApp
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Inquiry;
