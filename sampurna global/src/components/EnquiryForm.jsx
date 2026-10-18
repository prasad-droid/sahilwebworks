import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "../data/siteConfig.js";
import { useReveal } from "../hooks/useReveal.js";
import { IconArrowRight, IconCheck, IconAlert, IconWhatsApp } from "./Icons.jsx";
import "../styles/EnquiryForm.css";

/**
 * Enquiry form — ready for real submission.
 * ------------------------------------------------------------------
 * Configure a backend/CRM/form service by setting VITE_ENQUIRY_ENDPOINT
 * (e.g. in a .env file). The form POSTs JSON to that URL.
 *
 * When NO endpoint is configured, the form falls back to opening a
 * pre-filled WhatsApp message so enquiries are never silently lost — and
 * it does NOT claim a server submission occurred.
 */

const EMPTY = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  enquiryType: "",
  product: "",
  quantity: "",
  message: "",
};

const ENDPOINT = import.meta.env.VITE_ENQUIRY_ENDPOINT || "";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your business email.";
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone or WhatsApp number.";
  }
  if (!values.enquiryType) errors.enquiryType = "Please choose an enquiry type.";
  if (!values.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

export default function EnquiryForm({ prefill }) {
  const [ref, visible] = useReveal();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error | whatsapp
  const [feedback, setFeedback] = useState("");
  const submittingRef = useRef(false);

  useEffect(() => {
    if (!prefill) return;
    setValues((v) => ({
      ...v,
      product: prefill.product || v.product,
      enquiryType: prefill.enquiryType || v.enquiryType || "Product Information",
    }));
    setStatus("idle");
    setFeedback("");
  }, [prefill]);

  const update = (field) => (e) => {
    const { value } = e.target;
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const buildWhatsAppLink = () => {
    const lines = [
      `New enquiry for ${siteConfig.brand.name}`,
      "",
      `Name: ${values.fullName}`,
      values.companyName && `Company: ${values.companyName}`,
      `Email: ${values.email}`,
      `Phone/WhatsApp: ${values.phone}`,
      values.country && `Country: ${values.country}`,
      `Enquiry Type: ${values.enquiryType}`,
      values.product && `Product / Style: ${values.product}`,
      values.quantity && `Quantity: ${values.quantity}`,
      "",
      `Message: ${values.message}`,
    ].filter(Boolean);
    return `https://wa.me/919272443357?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submittingRef.current) return;

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("error");
      setFeedback("Please correct the highlighted fields and try again.");
      const firstKey = Object.keys(found)[0];
      document.getElementById(`enq-${firstKey}`)?.focus();
      return;
    }

    submittingRef.current = true;
    setStatus("submitting");
    setFeedback("");

    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setStatus("success");
        setFeedback(
          "Thank you — your enquiry has been submitted successfully. We will get back to you soon."
        );
        setValues(EMPTY);
      } else {
        // No backend configured: hand off to WhatsApp so nothing is lost.
        sessionStorage.setItem("sg_last_enquiry", JSON.stringify(values));
        window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
        setStatus("whatsapp");
        setFeedback(
          "Your enquiry details have been opened in WhatsApp — press send to complete. (Connect a form endpoint to submit directly.)"
        );
      }
    } catch (err) {
      setStatus("error");
      setFeedback(
        "Sorry, something went wrong while sending your enquiry. Please try again or contact us on WhatsApp."
      );
    } finally {
      submittingRef.current = false;
    }
  };

  const invalid = (k) => Boolean(errors[k]);

  return (
    <section
      id="enquiry"
      className="enquiry section section--beige"
      aria-labelledby="enquiry-heading"
    >
      <div className="container">
        <div className="enquiry__grid">
          <div className="enquiry__aside">
            <p className="eyebrow">Enquiry</p>
            <h2 id="enquiry-heading">Let's Discuss Your T-Shirt Requirements</h2>
            <p>
              Interested in our T-shirt portfolio, wholesale supply, or export
              opportunities? Share your requirements with {siteConfig.brand.name}.
            </p>

            <ul className="enquiry__points" role="list">
              <li>
                <IconCheck /> Wholesale, retail and export enquiries welcome
              </li>
              <li>
                <IconCheck /> Share styles, quantities and target markets
              </li>
              <li>
                <IconCheck /> Response via email or WhatsApp
              </li>
            </ul>

            <a
              className="enquiry__wa"
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp />
              <span>
                <strong>Prefer WhatsApp?</strong>
                {siteConfig.contact.whatsappDisplay}
              </span>
            </a>
          </div>

          <form
            ref={ref}
            className={`enquiry__form reveal reveal--right ${
              visible ? "is-visible" : ""
            }`}
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="enquiry-status"
          >
            <div className="enquiry__row">
              <Field
                label="Full Name"
                id="enq-fullName"
                required
                error={errors.fullName}
                value={values.fullName}
                onChange={update("fullName")}
                autoComplete="name"
              />
              <Field
                label="Company Name"
                id="enq-companyName"
                value={values.companyName}
                onChange={update("companyName")}
                autoComplete="organization"
              />
            </div>

            <div className="enquiry__row">
              <Field
                label="Business Email"
                id="enq-email"
                type="email"
                required
                error={errors.email}
                value={values.email}
                onChange={update("email")}
                autoComplete="email"
              />
              <Field
                label="Phone / WhatsApp"
                id="enq-phone"
                type="tel"
                required
                error={errors.phone}
                value={values.phone}
                onChange={update("phone")}
                autoComplete="tel"
              />
            </div>

            <div className="enquiry__row">
              <Field
                label="Country"
                id="enq-country"
                value={values.country}
                onChange={update("country")}
                autoComplete="country-name"
              />
              <div className={`enquiry__field ${invalid("enquiryType") ? "has-error" : ""}`}>
                <label htmlFor="enq-enquiryType">
                  Enquiry Type <span className="req">*</span>
                </label>
                <select
                  id="enq-enquiryType"
                  value={values.enquiryType}
                  onChange={update("enquiryType")}
                  aria-required="true"
                  aria-invalid={invalid("enquiryType")}
                >
                  <option value="">Select an enquiry type…</option>
                  {siteConfig.enquiryTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {errors.enquiryType && (
                  <span className="enquiry__error">
                    <IconAlert /> {errors.enquiryType}
                  </span>
                )}
              </div>
            </div>

            <div className="enquiry__row">
              <Field
                label="Product or T-Shirt Style"
                id="enq-product"
                value={values.product}
                onChange={update("product")}
                placeholder="e.g. Men's crew neck tee"
              />
              <Field
                label="Quantity Required"
                id="enq-quantity"
                value={values.quantity}
                onChange={update("quantity")}
                placeholder="e.g. 500 pcs"
              />
            </div>

            <div className={`enquiry__field ${invalid("message") ? "has-error" : ""}`}>
              <label htmlFor="enq-message">
                Message / Additional Requirements <span className="req">*</span>
              </label>
              <textarea
                id="enq-message"
                rows="4"
                value={values.message}
                onChange={update("message")}
                placeholder="Tell us about your requirements, target market, timelines or any questions."
                aria-required="true"
                aria-invalid={invalid("message")}
              />
              {errors.message && (
                <span className="enquiry__error">
                  <IconAlert /> {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--block enquiry__submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <span className="enquiry__spinner" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Submit Enquiry
                  <IconArrowRight />
                </>
              )}
            </button>

            <div
              id="enquiry-status"
              className={`enquiry__status enquiry__status--${status}`}
              role="status"
              aria-live="polite"
            >
              {status === "success" && (
                <>
                  <IconCheck /> {feedback}
                </>
              )}
              {status === "whatsapp" && (
                <>
                  <IconWhatsApp /> {feedback}
                </>
              )}
              {status === "error" && (
                <>
                  <IconAlert /> {feedback}
                </>
              )}
            </div>

            <p className="enquiry__privacy">
              We use your details only to respond to your enquiry. Fields marked{" "}
              <span className="req">*</span> are required.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Small reusable field */
function Field({ label, id, type = "text", required, error, placeholder, ...rest }) {
  return (
    <div className={`enquiry__field ${error ? "has-error" : ""}`}>
      <label htmlFor={id}>
        {label} {required && <span className="req">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        aria-required={required ? "true" : undefined}
        aria-invalid={Boolean(error)}
        {...rest}
      />
      {error && (
        <span className="enquiry__error">
          <IconAlert /> {error}
        </span>
      )}
    </div>
  );
}
