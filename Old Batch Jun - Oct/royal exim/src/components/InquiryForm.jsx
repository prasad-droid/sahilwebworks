import { useEffect, useState } from "react";
import { site } from "../data/site";
import { products } from "../data/products";
import { submitInquiry } from "../services/inquiry";
import { IconWhatsApp, IconMail, IconSend, IconQuote } from "./Icons";
import "../styles/contact.css";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY_FORM = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  product: "",
  quantity: "",
  message: "",
};

const PRODUCT_OPTIONS = [
  ...products.map((p) => p.name),
  "General Product Enquiry",
];

export default function InquiryForm({ initialProduct = null }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submittedName, setSubmittedName] = useState("");

  useEffect(() => {
    if (initialProduct) {
      setForm((current) => ({
        ...current,
        product: initialProduct === "General Product Enquiry" ? "" : initialProduct,
      }));
      setErrors((current) => ({ ...current, product: undefined }));
    }
  }, [initialProduct]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      next.message = "Please tell us about your requirements.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildDetails = () => ({
    product: form.product || "General Product Enquiry",
    name: form.name.trim(),
    company: form.company.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    country: form.country.trim(),
    quantity: form.quantity.trim(),
    message: form.message.trim(),
  });

  const handleSubmit = async (intent) => {
    if (!validate()) return;

    const details = buildDetails();
    const payload = { intent, ...details };

    try {
      const result = await submitInquiry(payload);
      if (result.status === "offline") {
        setStatus("offline");
      } else {
        setSubmittedName(details.name);
        setStatus("sent");
        setForm(EMPTY_FORM);
      }
    } catch {
      setStatus("error");
    }
  };

  const composeWaText = () => {
    const { product, name, company, email, phone, country, quantity, message } =
      buildDetails();
    const lines = [
      `Hello A1 Royal Exim, I am interested in ${product}.`,
      "I would like to know more about availability, specifications and export details.",
      "",
      `Name: ${name}`,
      company ? `Company: ${company}` : "",
      `Email: ${email}`,
      phone ? `Phone/WhatsApp: ${phone}` : "",
      country ? `Country: ${country}` : "",
      quantity ? `Required Quantity: ${quantity}` : "",
      "",
      `Message: ${message}`,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const waLink = encodeURIComponent(composeWaText());
  const mailSubject = encodeURIComponent(
    `${form.product || "General"} Enquiry | A1 Royal Exim`
  );
  const mailBody = encodeURIComponent(composeWaText());

  if (status === "offline" || status === "sent") {
    const handedOff = status === "offline";
    return (
      <div className="form-card form-card--result" role="status">
        {handedOff ? (
          <>
            <h3>Your enquiry is ready</h3>
            <p>
              The enquiry form is ready to connect to a delivery service. Until
              then, send your enquiry directly to A1 Royal Exim using either
              option below.
            </p>
            <div className="form-card__direct">
              <a
                className="btn btn--wa"
                href={`https://wa.me/${site.whatsappRaw}?text=${waLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp /> Send via WhatsApp
              </a>
              <a
                className="btn btn--outline"
                href={`mailto:${site.email}?subject=${mailSubject}&body=${mailBody}`}
              >
                <IconMail /> Send via Email
              </a>
            </div>
            <button
              type="button"
              className="btn btn--text"
              onClick={() => setStatus("idle")}
            >
              Edit enquiry again
            </button>
          </>
        ) : (
          <>
            <h3>Enquiry sent</h3>
            <p>
              Thank you, {submittedName || "partner"}. A1 Royal Exim will
              respond to your enquiry.
            </p>
            <button
              type="button"
              className="btn btn--text"
              onClick={() => {
                setStatus("idle");
                setForm(EMPTY_FORM);
                setSubmittedName("");
              }}
            >
              Send another enquiry
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="form-card">
      <h3 className="form-card__title">Send Your Inquiry</h3>

      <form
        className="inquiry-form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit("inquiry");
        }}
        noValidate
      >
        <div className="inquiry-form__row">
          <label className="field" htmlFor="inq-name">
            <span className="field__label">Full Name *</span>
            <input
              id="inq-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "inq-name-error" : undefined}
              autoComplete="name"
            />
            {errors.name && (
              <small className="field__error" id="inq-name-error">
                {errors.name}
              </small>
            )}
          </label>

          <label className="field" htmlFor="inq-company">
            <span className="field__label">Company Name</span>
            <input
              id="inq-company"
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              autoComplete="organization"
            />
          </label>
        </div>

        <div className="inquiry-form__row">
          <label className="field" htmlFor="inq-email">
            <span className="field__label">Email *</span>
            <input
              id="inq-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "inq-email-error" : undefined}
              autoComplete="email"
            />
            {errors.email && (
              <small className="field__error" id="inq-email-error">
                {errors.email}
              </small>
            )}
          </label>

          <label className="field" htmlFor="inq-phone">
            <span className="field__label">Phone / WhatsApp</span>
            <input
              id="inq-phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
          </label>
        </div>

        <div className="inquiry-form__row">
          <label className="field" htmlFor="inq-country">
            <span className="field__label">Country</span>
            <input
              id="inq-country"
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              autoComplete="country-name"
            />
          </label>

          <label className="field" htmlFor="inq-quantity">
            <span className="field__label">Required Quantity</span>
            <input
              id="inq-quantity"
              type="text"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="e.g. container / tons / units"
            />
          </label>
        </div>

        <label className="field" htmlFor="inq-product">
          <span className="field__label">Product Interested In</span>
          <select
            id="inq-product"
            name="product"
            value={form.product}
            onChange={handleChange}
            aria-invalid={Boolean(errors.product)}
          >
            <option value="" disabled>
              Select a product or general enquiry
            </option>
            {PRODUCT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="field" htmlFor="inq-message">
          <span className="field__label">Message *</span>
          <textarea
            id="inq-message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "inq-message-error" : undefined}
          />
          {errors.message && (
            <small className="field__error" id="inq-message-error">
              {errors.message}
            </small>
          )}
        </label>

        {status === "error" && (
          <p className="form-card__error" role="alert">
            Your enquiry could not be submitted. Please try again or contact us
            directly.
          </p>
        )}

        <div className="inquiry-form__actions">
          <button type="submit" className="btn btn--primary">
            <IconSend /> Send Inquiry
          </button>
          <button
            type="button"
            className="btn btn--outline"
            onClick={() => handleSubmit("quote")}
          >
            <IconQuote /> Get a Quote
          </button>
        </div>

        <p className="form-card__hint">
          Your details are used only to respond to your enquiry.
        </p>
      </form>
    </div>
  );
}