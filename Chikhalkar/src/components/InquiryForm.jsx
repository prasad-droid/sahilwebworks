import { useState } from "react";
import { Send, FileText, CheckCircle2 } from "lucide-react";

const INDUSTRIES = [
  "Hospitality / Hotels",
  "Healthcare / Hospitals",
  "Spa & Wellness",
  "Fitness & Sports",
  "Salon & Personal Care",
  "Distributor / Wholesaler",
  "Importer",
  "Institutional Buyer",
  "Other",
];

const PRODUCTS = [
  "Bath Towels",
  "Hand Towels",
  "Face Towels",
  "Spa Towels",
  "Gym Towels",
  "Hotel Collection Towels",
  "Healthcare Towels",
  "Multiple Products",
];

const initialForm = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  industry: "",
  product: "",
  quantity: "",
  message: "",
};

const InquiryForm = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request from ${form.name || "Client"}`);
    const body = encodeURIComponent(
      `Full Name: ${form.name}\nCompany: ${form.company}\nCountry: ${form.country}\nEmail: ${form.email}\nPhone: ${form.phone}\nIndustry: ${form.industry}\nProduct: ${form.product}\nQuantity: ${form.quantity}\nMessage: ${form.message}`
    );
    window.open(`mailto:chikhalkarenterprises@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setForm(initialForm);
  };

  return (
    <div className="inquiry">
      <div className="inquiry__head">
        <div className="inquiry__icon">
          <FileText size={24} />
        </div>
        <h2>Request A Quote</h2>
      </div>
      <p>Tell us about your requirement and our export team will respond within 24 hours.</p>

      <form className="inquiry__form" onSubmit={handleSubmit}>
        <div className="inquiry__field">
          <label htmlFor="name">Full Name <span>*</span></label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Your full name" />
        </div>
        <div className="inquiry__field">
          <label htmlFor="company">Company Name</label>
          <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your company" />
        </div>
        <div className="inquiry__field">
          <label htmlFor="country">Country <span>*</span></label>
          <input id="country" name="country" type="text" value={form.country} onChange={handleChange} required placeholder="Your country" />
        </div>
        <div className="inquiry__field">
          <label htmlFor="email">Email Address <span>*</span></label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" />
        </div>
        <div className="inquiry__field">
          <label htmlFor="phone">Phone Number <span>*</span></label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
        </div>
        <div className="inquiry__field">
          <label htmlFor="industry">Industry Type</label>
          <select id="industry" name="industry" value={form.industry} onChange={handleChange}>
            <option value="">Select your industry</option>
            {INDUSTRIES.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="inquiry__field">
          <label htmlFor="product">Product Requirement <span>*</span></label>
          <select id="product" name="product" value={form.product} onChange={handleChange} required>
            <option value="">Select product</option>
            {PRODUCTS.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="inquiry__field">
          <label htmlFor="quantity">Quantity Required <span>*</span></label>
          <input id="quantity" name="quantity" type="text" value={form.quantity} onChange={handleChange} required placeholder="e.g. 1,000 pcs / 500 kg" />
        </div>
        <div className="inquiry__field inquiry__field--full">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your specifications, GSM, sizes, colors, or packaging requirements..." />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Inquiry <Send size={16} />
        </button>
      </form>

      {submitted && (
        <div className="inquiry__success">
          <CheckCircle2 size={20} />
          Thank you! Your inquiry has been prepared in your email app. Our export team will get back to you shortly.
        </div>
      )}
    </div>
  );
};

export default InquiryForm;
