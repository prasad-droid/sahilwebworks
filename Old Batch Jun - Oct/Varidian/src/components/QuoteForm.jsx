import { useState } from "react";
import { products } from "../data/products";

// Connect a backend / email service here when available.
// Example: const ENQUIRY_ENDPOINT = "https://your-api.example.com/enquiries";
const ENQUIRY_ENDPOINT = null;

const initialForm = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  quantity: "",
  message: "",
};

const emptyErrors = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
};

export default function QuoteForm({ selectedProduct }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(emptyErrors);
  const [status, setStatus] = useState("idle");
  const [lastProduct, setLastProduct] = useState(null);

  if (selectedProduct && selectedProduct.name !== lastProduct) {
    setLastProduct(selectedProduct.name);
    setForm((prev) => ({ ...prev, product: selectedProduct.name }));
    setStatus("idle");
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const nextErrors = { ...emptyErrors };
    if (!form.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!form.company.trim()) nextErrors.company = "Please enter your company name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.country.trim()) nextErrors.country = "Please enter your country.";
    if (!form.product) nextErrors.product = "Please select a product.";

    setErrors(nextErrors);
    return Object.values(nextErrors).every((error) => error === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) {
      setStatus("idle");
      return;
    }

    const payload = {
      ...form,
      fullName: form.fullName.trim(),
      company: form.company.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      country: form.country.trim(),
      quantity: form.quantity.trim(),
      message: form.message.trim(),
      enquiryFrom: "Varidian Exim website",
    };

    setStatus("sending");

    if (ENQUIRY_ENDPOINT) {
      try {
        const response = await fetch(ENQUIRY_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("Request failed");
        setStatus("sent");
      } catch {
        setStatus("error");
      }
    } else {
      // No backend configured yet — prepare the enquiry for manual hand-off.
      setTimeout(() => setStatus("sent"), 400);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors(emptyErrors);
    setStatus("idle");
  };

  if (status === "sent") {
    return (
      <div className="quote-form__success" role="status">
        <span className="quote-form__success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="30" height="30">
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12 3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3>Enquiry Received</h3>
        <p>
          Thank you, {form.fullName.split(" ")[0] || "partner"}. Your enquiry for{" "}
          <strong>{form.product}</strong> is ready to be sent. We will respond to{" "}
          <strong>{form.email}</strong> shortly.
        </p>
        {!ENQUIRY_ENDPOINT && (
          <p className="quote-form__success-note">
            This form is not yet connected to an email service. For an immediate
            response, please reach out via{" "}
            <a href="mailto:varidianexim@gmail.com">varidianexim@gmail.com</a> or
            WhatsApp.
          </p>
        )}
        <button type="button" className="btn btn-outline" onClick={handleReset}>
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="quote-form__grid">
        <div className="quote-form__field quote-form__field--full">
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            autoComplete="name"
            aria-invalid={errors.fullName ? "true" : "false"}
          />
          {errors.fullName && <span className="quote-form__error">{errors.fullName}</span>}
        </div>

        <div className="quote-form__field quote-form__field--full">
          <label htmlFor="company">Company Name *</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Company / organization name"
            autoComplete="organization"
            aria-invalid={errors.company ? "true" : "false"}
          />
          {errors.company && <span className="quote-form__error">{errors.company}</span>}
        </div>

        <div className="quote-form__field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <span className="quote-form__error">{errors.email}</span>}
        </div>

        <div className="quote-form__field">
          <label htmlFor="phone">Phone / WhatsApp</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+00 000 000 0000"
            autoComplete="tel"
          />
        </div>

        <div className="quote-form__field">
          <label htmlFor="country">Country *</label>
          <input
            id="country"
            name="country"
            type="text"
            value={form.country}
            onChange={handleChange}
            placeholder="Your country"
            autoComplete="country-name"
            aria-invalid={errors.country ? "true" : "false"}
          />
          {errors.country && <span className="quote-form__error">{errors.country}</span>}
        </div>

        <div className="quote-form__field">
          <label htmlFor="product">Product Interested In *</label>
          <select
            id="product"
            name="product"
            value={form.product}
            onChange={handleChange}
            aria-invalid={errors.product ? "true" : "false"}
          >
            <option value="">Select a product…</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
            <option value="Other / Custom Requirement">Other / Custom Requirement</option>
          </select>
          {errors.product && <span className="quote-form__error">{errors.product}</span>}
        </div>

        <div className="quote-form__field quote-form__field--full">
          <label htmlFor="quantity">Required Quantity</label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={form.quantity}
            onChange={handleChange}
            placeholder="e.g. Container load / metric tonnes (optional)"
          />
        </div>

        <div className="quote-form__field quote-form__field--full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your requirement, timeline, or any details…"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="quote-form__error quote-form__error--global" role="alert">
          Something went wrong while sending your enquiry. Please try again or reach
          out directly by email or WhatsApp.
        </p>
      )}

      <div className="quote-form__actions">
        <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Enquiry"}
        </button>
        <p className="quote-form__hint">
          We respond to international enquiries promptly. Your details stay
          confidential.
        </p>
      </div>
    </form>
  );
}