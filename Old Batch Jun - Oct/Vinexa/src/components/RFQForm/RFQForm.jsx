import { useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaWhatsapp, FaCheckCircle, FaFileInvoice, FaClipboardCheck, FaGlobeAsia } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { contact, formEndpoint } from "../../data/siteConfig";
import { products } from "../../data/products";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const incoterms = ["FOB", "CIF", "CFR", "Other"];

const initialState = {
  companyName: "",
  contactPerson: "",
  email: "",
  whatsapp: "",
  country: "",
  productRequired: "",
  quantity: "",
  targetPort: "",
  incoterm: "",
  requirements: "",
};

const requiredFields = ["companyName", "contactPerson", "email", "whatsapp", "country", "productRequired"];

/**
 * Request for Quotation (RFQ) form with validation, success state and
 * WhatsApp handoff. Ready to be wired to a backend via `formEndpoint`
 * in src/data/siteConfig.js.
 */
export default function RFQForm({ compact = false }) {
  const wrapRef = useRef(null);
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(() => {
    const prefill = searchParams.get("product");
    const match = prefill ? products.find((p) => p.id === prefill) : null;
    return { ...initialState, productRequired: match ? match.name : "" };
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const productNames = useMemo(
    () => products.map((p) => p.name).sort((a, b) => a.localeCompare(b)),
    []
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    requiredFields.forEach((key) => {
      if (!form[key].trim()) next[key] = "This field is required.";
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    return next;
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      "NEW RFQ — VINEXA GLOBAL ENTERPRISES",
      "--------------------------------",
      `Company: ${form.companyName}`,
      `Contact Person: ${form.contactPerson}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      `Country: ${form.country}`,
      `Product Required: ${form.productRequired}`,
      form.quantity && `Quantity: ${form.quantity}`,
      form.targetPort && `Target Port: ${form.targetPort}`,
      form.incoterm && `Preferred Incoterm: ${form.incoterm}`,
      form.requirements && `Requirements: ${form.requirements}`,
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(lines)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSending(true);

    if (formEndpoint) {
      try {
        await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } catch {
        // Backend unavailable — continue with WhatsApp handoff.
      }
    }

    setSending(false);
    setSubmitted(true);
    if (wrapRef.current) {
      wrapRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const field = (name, label, props = {}, required = false) => (
    <div className={`form-field${errors[name] ? " form-field--invalid" : ""}`}>
      <label htmlFor={name}>
        {label} {required && <span className="req" aria-hidden="true">*</span>}
      </label>
      <input
        id={name}
        name={name}
        value={form[name]}
        onChange={handleChange}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
        {...props}
      />
      {errors[name] && (
        <span id={`${name}-error`} className="form-error" role="alert">
          {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <div className="rfq__form-wrap" ref={wrapRef}>
      {submitted ? (
        <div className="form-success" role="status">
          <h4>
            <FaCheckCircle size={20} aria-hidden="true" /> Thank You — Request Received
          </h4>
          <p>
            Our team has received your request for {form.productRequired || "our products"}. We
            will prepare a competitive quotation and reach out shortly.
          </p>
          <p style={{ marginTop: "0.8rem" }}>
            For an immediate response, share your request on WhatsApp:
          </p>
          <div className="mt-1" style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <a href={buildWhatsAppMessage()} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
              <FaWhatsapp size={17} aria-hidden="true" /> Send via WhatsApp
            </a>
            <button type="button" className="btn btn--outline" onClick={() => setSubmitted(false)}>
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} noValidate>
            <div className={`form-grid${compact ? " form-grid--compact" : ""}`}>
              {field("companyName", "Company Name", { placeholder: "Your company", autoComplete: "organization" }, true)}
              {field("contactPerson", "Contact Person", { placeholder: "Full name", autoComplete: "name" }, true)}
              {field("email", "Email Address", { type: "email", placeholder: "name@company.com", autoComplete: "email" }, true)}
              {field("whatsapp", "WhatsApp Number", { type: "tel", placeholder: "+91 90000 00000", autoComplete: "tel" }, true)}
              {field("country", "Country", { placeholder: "e.g. United Arab Emirates" }, true)}

              <div className={`form-field${errors.productRequired ? " form-field--invalid" : ""}`}>
                <label htmlFor="productRequired">
                  Product Required <span className="req" aria-hidden="true">*</span>
                </label>
                <input
                  id="productRequired"
                  name="productRequired"
                  list="product-list"
                  value={form.productRequired}
                  onChange={handleChange}
                  placeholder="Search or type a product"
                  aria-invalid={Boolean(errors.productRequired)}
                  aria-describedby={errors.productRequired ? "productRequired-error" : undefined}
                />
                <datalist id="product-list">
                  {productNames.map((name) => (
                    <option key={name} value={name} />
                  ))}
                </datalist>
                {errors.productRequired && (
                  <span id="productRequired-error" className="form-error" role="alert">
                    {errors.productRequired}
                  </span>
                )}
              </div>

              {field("quantity", "Quantity", { placeholder: "e.g. 500 MT / 20ft container" })}
              {field("targetPort", "Target Port", { placeholder: "e.g. Jebel Ali / Rotterdam" })}

              <div className="form-field">
                <label htmlFor="incoterm">Preferred Incoterm</label>
                <select id="incoterm" name="incoterm" value={form.incoterm} onChange={handleChange}>
                  <option value="">Select incoterm</option>
                  {incoterms.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field form-field--full">
                <label htmlFor="requirements">Additional Requirements</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={form.requirements}
                  onChange={handleChange}
                  placeholder="Specifications, packaging, certification requirements, delivery terms, etc."
                />
              </div>
            </div>

            <button type="submit" className="btn btn--primary btn--block btn--lg mt-2" disabled={sending}>
              {sending ? "Submitting…" : "Submit Request"}
              {!sending && <FiSend size={17} aria-hidden="true" />}
            </button>
          </form>
          <p className="form-note">
            By submitting this form you agree to be contacted regarding your enquiry. Your details
            are used solely to prepare your quotation.
          </p>
        </>
      )}
    </div>
  );
}
