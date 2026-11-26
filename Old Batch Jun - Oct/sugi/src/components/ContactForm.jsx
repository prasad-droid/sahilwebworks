import { useState } from "react";
import { PRODUCTS } from "../data/catalog";
import { submitEnquiry } from "../api";
import "../styles/contactForm.css";
import "../styles/forms.css";

// ==========================================================================
// CONTACT US FORM
// Fields as specified in Site Changes/Contact Us.docx.
// Submissions are stored in the Admin Panel (Enquiries module) via the
// JSON-file backend. If the backend is offline the form shows an error so
// no enquiry is silently lost.
// ==========================================================================

const BUSINESS_TYPES = [
  "Importer",
  "Exporter",
  "Distributor",
  "Wholesaler",
  "Supermarket / Retailer",
  "Processor",
  "Farmer / Grower",
  "Agent / Broker",
  "Other",
];

const FIELDS = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "middleName", label: "Middle Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { name: "company", label: "Company Name", type: "text" },
  { name: "phone", label: "Contact Number", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "website", label: "Website", type: "text" },
  { name: "address", label: "Address", type: "text" },
  { name: "country", label: "Country", type: "text", required: true },
];

export default function ContactForm() {
  const [values, setValues] = useState({ businessType: "Importer" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    FIELDS.forEach((f) => {
      if (!f.required) return;
      const v = (values[f.name] || "").trim();
      if (!v) next[f.name] = `${f.label} is required.`;
      else if (f.type === "email" && !/\S+@\S+\.\S+/.test(v))
        next[f.name] = "Please enter a valid email address.";
    });
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await submitEnquiry({
        fullName: [values.firstName, values.middleName, values.lastName].filter(Boolean).join(" "),
        company: values.company,
        email: values.email,
        phone: values.phone,
        country: values.country,
        commodity: values.product,
        quantity: "",
        packaging: values.businessType ? `Business type: ${values.businessType}` : "",
        message: [values.website ? `Website: ${values.website}` : "", values.address ? `Address: ${values.address}` : "", values.message]
          .filter(Boolean)
          .join("\n"),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <span className="form-success__icon" aria-hidden="true">✓</span>
        <h3 className="form-success__title">Thank You</h3>
        <p className="form-success__text">
          Your enquiry has been received. Our concerned team will definitely
          respond to you.
        </p>
        <button
          type="button"
          className="btn btn-dark-outline"
          onClick={() => {
            setValues({ businessType: "Importer" });
            setStatus("idle");
          }}
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__grid">
        {FIELDS.map((field) => (
          <div className="contact-form__field" key={field.name}>
            <label htmlFor={`cf-${field.name}`}>
              {field.label}
              {field.required && <span className="req" aria-hidden="true"> *</span>}
            </label>
            <input
              id={`cf-${field.name}`}
              name={field.name}
              type={field.type}
              value={values[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              aria-invalid={!!errors[field.name]}
              aria-describedby={
                errors[field.name] ? `cf-${field.name}-error` : undefined
              }
            />
            {errors[field.name] && (
              <span id={`cf-${field.name}-error`} className="form-error">
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}

        <div className="contact-form__field">
          <label htmlFor="cf-businessType">You are a</label>
          <select
            id="cf-businessType"
            name="businessType"
            value={values.businessType}
            onChange={handleChange}
          >
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="contact-form__field">
          <label htmlFor="cf-product">Product of Interest</label>
          <select
            id="cf-product"
            name="product"
            value={values.product || ""}
            onChange={handleChange}
          >
            <option value="">Select a product</option>
            {PRODUCTS.map((p) => (
              <option key={p.slug} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>

        <div className="contact-form__field contact-form__field--wide">
          <label htmlFor="cf-message">Your Requirement Details</label>
          <textarea
            id="cf-message"
            name="message"
            rows="5"
            value={values.message || ""}
            onChange={handleChange}
            placeholder="Tell us about the product, quantity, packing, destination port and expected timeline."
          />
        </div>
      </div>

      {status === "error" && (
        <p className="form-error form-error--banner" role="alert">
          {Object.keys(errors).length
            ? "Please correct the highlighted fields and try again."
            : "Something went wrong. Please try again, or contact us by email or phone."}
        </p>
      )}

      <div className="contact-form__actions">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Submit"}
          {status !== "loading" && (
            <span className="btn-arrow" aria-hidden="true">→</span>
          )}
        </button>
      </div>
    </form>
  );
}
