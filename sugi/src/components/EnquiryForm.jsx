import { useState } from "react";
import { submitEnquiry } from "../api";
import { useSite } from "../store/SiteContext";
import "../styles/enquiryForm.css";
import "../styles/forms.css";

// ==========================================================================
// ENQUIRY FORM — quotation request form (#/quote).
// Submissions are stored in the Admin Panel (Enquiries module) via the
// JSON-file backend. If the backend is offline the form shows an error so
// no enquiry is silently lost.
// ==========================================================================

const FIELDS = [
  { name: "fullName", label: "Full Name", type: "text", required: true },
  { name: "company", label: "Company Name", type: "text", required: false },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
  { name: "country", label: "Country", type: "text", required: false },
  {
    name: "commodity",
    label: "Product / Commodity Required",
    type: "text",
    required: false,
  },
  { name: "quantity", label: "Quantity", type: "text", required: false },
  {
    name: "packaging",
    label: "Packaging Requirement",
    type: "text",
    required: false,
  },
];

const WHATSAPP_NUMBER = "919405000111";

export default function EnquiryForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const { settings } = useSite();
  const whatsappNumber = settings?.contact?.whatsapp || WHATSAPP_NUMBER;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((er) => ({ ...er, [name]: "" }));
    }
  };

  const buildWhatsAppUrl = () => {
    const parts = [
      "Hello SUGI INTERNATIONAL PRIVATE LIMITED, I would like to discuss an agro commodity sourcing requirement.",
    ];
    if (values.fullName) parts.push(`Name: ${values.fullName}`);
    if (values.company) parts.push(`Company: ${values.company}`);
    if (values.commodity) parts.push(`Product/Commodity: ${values.commodity}`);
    if (values.quantity) parts.push(`Quantity: ${values.quantity}`);
    if (values.country) parts.push(`Country: ${values.country}`);
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      parts.join("\n")
    )}`;
  };

  const validate = () => {
    const next = {};
    if (!values.fullName || !values.fullName.trim())
      next.fullName = "Please enter your full name.";
    if (!values.email || !/\S+@\S+\.\S+/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.phone || !values.phone.trim())
      next.phone = "Please enter a phone or WhatsApp number.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("loading");

    try {
      await submitEnquiry({ ...values, message: values.message || "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success">
        <span className="form-success__icon" aria-hidden="true">✓</span>
        <h3 className="form-success__title">Thank You</h3>
        <p className="form-success__text">
          Your enquiry has been received. Our team will get back to you
          regarding your sourcing requirement.
        </p>
        <button className="btn btn-dark-outline" onClick={() => setStatus("idle")}>
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="enquiry-form__grid">
        {FIELDS.map((field) => (
          <div
            key={field.name}
            className={`enquiry-form__field ${
              field.name === "commodity" ? "enquiry-form__field--wide" : ""
            }`}
          >
            <label htmlFor={`enquiry-${field.name}`}>
              {field.label}
              {field.required && <span className="req" aria-hidden="true"> *</span>}
            </label>
            <input
              id={`enquiry-${field.name}`}
              name={field.name}
              type={field.type}
              value={values[field.name] || ""}
              onChange={handleChange}
              required={field.required}
              aria-invalid={!!errors[field.name]}
              aria-describedby={errors[field.name] ? `enquiry-${field.name}-error` : undefined}
            />
            {errors[field.name] && (
              <span id={`enquiry-${field.name}-error`} className="form-error">
                {errors[field.name]}
              </span>
            )}
          </div>
        ))}

        <div className="enquiry-form__field enquiry-form__field--wide">
          <label htmlFor="enquiry-message">Message</label>
          <textarea
            id="enquiry-message"
            name="message"
            rows="4"
            value={values.message || ""}
            onChange={handleChange}
            placeholder="Tell us more about your requirement"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="form-error form-error--banner" role="alert">
          Something went wrong. Please try again or contact us via WhatsApp or
          email.
        </p>
      )}

      <div className="enquiry-form__actions">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send Enquiry"}
          {status !== "loading" && (
            <span className="btn-arrow" aria-hidden="true">→</span>
          )}
        </button>
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark-outline"
        >
          WhatsApp Us
        </a>
      </div>
    </form>
  );
}
