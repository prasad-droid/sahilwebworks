import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  CircleAlert,
  LoaderCircle,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import Reveal from "./Reveal";
import {
  CUSTOMER_TYPES,
  INQUIRY_ENDPOINT,
  LINKS,
  PRODUCT_OPTIONS,
  SITE,
  waLink,
} from "../data/site";

const EMPTY_FORM = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  customerType: "",
  product: "",
  quantity: "",
  requirements: "",
  website: "",
};

const FIELD_IDS = {
  fullName: "inquiry-name",
  email: "inquiry-email",
  phone: "inquiry-phone",
  country: "inquiry-country",
  customerType: "inquiry-customer-type",
  product: "inquiry-product",
  quantity: "inquiry-quantity",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const COUNTRY_PATTERN = /^[a-zA-Z\s.'-]{2,}$/;

const buildMessage = (form) => {
  const details = [
    `Full name: ${form.fullName.trim()}`,
    form.company.trim() ? `Company: ${form.company.trim()}` : null,
    `Email: ${form.email.trim()}`,
    `Contact number: ${form.phone.trim()}`,
    `Country: ${form.country.trim()}`,
    `Customer type: ${form.customerType}`,
    `Product interest: ${form.product}`,
    `Required quantity: ${form.quantity.trim()}`,
    form.requirements.trim()
      ? `Additional requirements: ${form.requirements.trim()}`
      : null,
  ].filter(Boolean);

  return [
    "Hello DVK Enterprises, I would like to make a product enquiry.",
    "",
    ...details,
    "",
    "Sent from the DVK Enterprises website.",
  ].join("\n");
};

export default function InquiryForm({ selectedProduct = "", requestKey = 0 }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const submittingRef = useRef(false);

  useEffect(() => {
    if (!selectedProduct) return;
    setForm((previous) => ({ ...previous, product: selectedProduct }));
    setErrors((previous) => {
      if (!previous.product) return previous;
      const next = { ...previous };
      delete next.product;
      return next;
    });
    setStatus({ type: "idle", message: "" });
    // requestKey lets the same category button re-apply the selection.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProduct, requestKey]);

  const message = useMemo(() => buildMessage(form), [form]);
  const whatsappHref = useMemo(
    () => waLink("+919930439581", message),
    [message],
  );
  const mailtoHref = useMemo(() => {
    const subject = `Product enquiry${form.product ? ` — ${form.product}` : ""}`;
    return `${LINKS.mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  }, [form.product, message]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));

    if (errors[name]) {
      setErrors((previous) => {
        const next = { ...previous };
        delete next[name];
        return next;
      });
    }

    if (status.type === "error" || status.type === "fallback") {
      setStatus({ type: "idle", message: "" });
    }
  };

  const validate = () => {
    const next = {};

    if (form.fullName.trim().length < 2) {
      next.fullName = "Please enter your full name.";
    }

    if (!EMAIL_PATTERN.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }

    const phoneDigits = form.phone.replace(/[\s().-]/g, "");
    if (!/^\+?\d{7,15}$/.test(phoneDigits)) {
      next.phone = "Please enter a valid contact number with 7–15 digits.";
    }

    if (!COUNTRY_PATTERN.test(form.country.trim())) {
      next.country = "Please enter your country.";
    }

    if (!form.customerType) {
      next.customerType = "Please select your customer type.";
    }

    if (!form.product) {
      next.product = "Please select a product interest.";
    }

    if (!form.quantity.trim()) {
      next.quantity = "Please enter an approximate required quantity.";
    }

    return next;
  };

  const focusFirstError = (nextErrors) => {
    const firstKey = Object.keys(nextErrors)[0];
    if (!firstKey) return;

    window.setTimeout(() => {
      const field = document.getElementById(FIELD_IDS[firstKey]);
      if (!field) return;
      field.focus({ preventScroll: true });
      field.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "center",
      });
    }, 60);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submittingRef.current) return;
    if (form.website.trim()) return;

    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: "Please review the highlighted fields and try again.",
      });
      focusFirstError(nextErrors);
      return;
    }

    setErrors({});
    setStatus({ type: "idle", message: "" });
    submittingRef.current = true;
    setSubmitting(true);

    if (INQUIRY_ENDPOINT) {
      try {
        const response = await fetch(INQUIRY_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            fullName: form.fullName.trim(),
            companyName: form.company.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            country: form.country.trim(),
            customerType: form.customerType,
            productInterest: form.product,
            quantity: form.quantity.trim(),
            additionalRequirements: form.requirements.trim(),
            source: "dvk-enterprises-website",
          }),
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        setForm(EMPTY_FORM);
        setStatus({
          type: "success",
          message:
            "Thank you. Your enquiry has been sent — our team will review it and respond directly.",
        });
      } catch {
        setStatus({
          type: "error",
          message:
            "We could not send the form right now. Please use WhatsApp or email below — your details are still in the form.",
        });
      } finally {
        submittingRef.current = false;
        setSubmitting(false);
      }
      return;
    }

    // No backend configured: hand the completed enquiry to WhatsApp.
    // The form is never marked as submitted here.
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
    setStatus({
      type: "fallback",
      message:
        "WhatsApp has opened with your enquiry details. Press Send there to deliver it to our team. If it did not open, use a link below.",
    });
    submittingRef.current = false;
    setSubmitting(false);
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setStatus({ type: "idle", message: "" });
  };

  const errorCount = Object.keys(errors).length;
  const fieldError = (name) => errors[name];

  return (
    <section className="inquiry section" id="inquiry" aria-labelledby="inquiry-title">
      <div className="container inquiry__grid">
        <Reveal className="inquiry__aside">
          <p className="eyebrow eyebrow--light">
            <span>Business Inquiry</span>
          </p>
          <h2 id="inquiry-title" className="section-title">
            Let’s Grow Together
          </h2>
          <p className="inquiry__lede">
            Interested in Moringa Powder, carpets, rugs, hair clips, or rubber
            bands? Connect with DVK Enterprises to discuss your product
            requirements and business opportunities.
          </p>

          <div className="inquiry__contacts">
            <a href={LINKS.telIndia}>
              <span className="inquiry__contact-icon" aria-hidden="true">
                <Phone size={17} />
              </span>
              <span>
                <small>India</small>
                {SITE.phoneIndia}
              </span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a href={LINKS.telUae}>
              <span className="inquiry__contact-icon" aria-hidden="true">
                <Phone size={17} />
              </span>
              <span>
                <small>UAE</small>
                {SITE.phoneUae}
              </span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a href={LINKS.mail}>
              <span className="inquiry__contact-icon" aria-hidden="true">
                <Mail size={17} />
              </span>
              <span>
                <small>Email</small>
                {SITE.email}
              </span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a href={LINKS.waIndia} target="_blank" rel="noopener noreferrer">
              <span className="inquiry__contact-icon" aria-hidden="true">
                <MessageCircle size={17} />
              </span>
              <span>
                <small>WhatsApp</small>
                {SITE.whatsappIndiaAlt}
              </span>
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="inquiry__note">
            <Check size={16} aria-hidden="true" />
            <p>
              Wholesale, retail, distributor, and mixed-product enquiries are
              welcome. Product availability and commercial details are confirmed
              through direct discussion.
            </p>
          </div>
        </Reveal>

        <Reveal className="inquiry__card" delay={110}>
          {status.type === "success" ? (
            <div className="inquiry__success" role="status">
              <span className="inquiry__success-icon" aria-hidden="true">
                <Check size={26} strokeWidth={2} />
              </span>
              <h3>Enquiry sent</h3>
              <p>{status.message}</p>
              <button type="button" className="btn btn--primary" onClick={resetForm}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              <div className="inquiry__form-head">
                <div>
                  <h3>Tell us about your requirement</h3>
                  <p>Fields marked with <span aria-hidden="true">*</span> are required.</p>
                </div>
                {form.product && (
                  <span className="inquiry__selected">
                    <Check size={13} aria-hidden="true" />
                    {form.product}
                  </span>
                )}
              </div>

              <form className="inquiry__form" onSubmit={handleSubmit} noValidate>
                <div className="inquiry__form-grid">
                  <div className={`field${fieldError("fullName") ? " has-error" : ""}`}>
                    <label htmlFor="inquiry-name">
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={updateField}
                      required
                      aria-invalid={Boolean(fieldError("fullName"))}
                      aria-describedby={fieldError("fullName") ? "inquiry-name-error" : undefined}
                    />
                    {fieldError("fullName") && (
                      <p className="field__error" id="inquiry-name-error">
                        <CircleAlert size={13} aria-hidden="true" />
                        {fieldError("fullName")}
                      </p>
                    )}
                  </div>

                  <div className="field">
                    <label htmlFor="inquiry-company">
                      Company Name <span className="field__optional">(optional)</span>
                    </label>
                    <input
                      id="inquiry-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company or business"
                      value={form.company}
                      onChange={updateField}
                    />
                  </div>

                  <div className={`field${fieldError("email") ? " has-error" : ""}`}>
                    <label htmlFor="inquiry-email">
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={updateField}
                      required
                      aria-invalid={Boolean(fieldError("email"))}
                      aria-describedby={fieldError("email") ? "inquiry-email-error" : undefined}
                    />
                    {fieldError("email") && (
                      <p className="field__error" id="inquiry-email-error">
                        <CircleAlert size={13} aria-hidden="true" />
                        {fieldError("email")}
                      </p>
                    )}
                  </div>

                  <div className={`field${fieldError("phone") ? " has-error" : ""}`}>
                    <label htmlFor="inquiry-phone">
                      Contact Number <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="inquiry-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="Include country code"
                      value={form.phone}
                      onChange={updateField}
                      required
                      aria-invalid={Boolean(fieldError("phone"))}
                      aria-describedby={fieldError("phone") ? "inquiry-phone-error" : undefined}
                    />
                    {fieldError("phone") && (
                      <p className="field__error" id="inquiry-phone-error">
                        <CircleAlert size={13} aria-hidden="true" />
                        {fieldError("phone")}
                      </p>
                    )}
                  </div>

                  <div className={`field${fieldError("country") ? " has-error" : ""}`}>
                    <label htmlFor="inquiry-country">
                      Country <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="inquiry-country"
                      name="country"
                      type="text"
                      autoComplete="country-name"
                      placeholder="Your country"
                      value={form.country}
                      onChange={updateField}
                      required
                      aria-invalid={Boolean(fieldError("country"))}
                      aria-describedby={fieldError("country") ? "inquiry-country-error" : undefined}
                    />
                    {fieldError("country") && (
                      <p className="field__error" id="inquiry-country-error">
                        <CircleAlert size={13} aria-hidden="true" />
                        {fieldError("country")}
                      </p>
                    )}
                  </div>

                  <div className={`field${fieldError("customerType") ? " has-error" : ""}`}>
                    <label htmlFor="inquiry-customer-type">
                      Customer Type <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="inquiry-customer-type"
                      name="customerType"
                      value={form.customerType}
                      onChange={updateField}
                      required
                      aria-invalid={Boolean(fieldError("customerType"))}
                      aria-describedby={fieldError("customerType") ? "inquiry-customer-type-error" : undefined}
                    >
                      <option value="">Select customer type</option>
                      {CUSTOMER_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {fieldError("customerType") && (
                      <p className="field__error" id="inquiry-customer-type-error">
                        <CircleAlert size={13} aria-hidden="true" />
                        {fieldError("customerType")}
                      </p>
                    )}
                  </div>

                  <div className={`field${fieldError("product") ? " has-error" : ""}`}>
                    <label htmlFor="inquiry-product">
                      Product Interest <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="inquiry-product"
                      name="product"
                      value={form.product}
                      onChange={updateField}
                      required
                      aria-invalid={Boolean(fieldError("product"))}
                      aria-describedby={fieldError("product") ? "inquiry-product-error" : undefined}
                    >
                      <option value="">Select a product</option>
                      {PRODUCT_OPTIONS.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                    {fieldError("product") && (
                      <p className="field__error" id="inquiry-product-error">
                        <CircleAlert size={13} aria-hidden="true" />
                        {fieldError("product")}
                      </p>
                    )}
                  </div>

                  <div className={`field${fieldError("quantity") ? " has-error" : ""}`}>
                    <label htmlFor="inquiry-quantity">
                      Required Quantity <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="inquiry-quantity"
                      name="quantity"
                      type="text"
                      placeholder="e.g. 50 kg, 100 pieces, 20 rugs"
                      value={form.quantity}
                      onChange={updateField}
                      required
                      aria-invalid={Boolean(fieldError("quantity"))}
                      aria-describedby={fieldError("quantity") ? "inquiry-quantity-error" : undefined}
                    />
                    {fieldError("quantity") && (
                      <p className="field__error" id="inquiry-quantity-error">
                        <CircleAlert size={13} aria-hidden="true" />
                        {fieldError("quantity")}
                      </p>
                    )}
                  </div>

                  <div className="field field--full">
                    <label htmlFor="inquiry-requirements">
                      Additional Requirements <span className="field__optional">(optional)</span>
                    </label>
                    <textarea
                      id="inquiry-requirements"
                      name="requirements"
                      rows="4"
                      placeholder="Share designs, packaging, colours, sizes, or any other requirements."
                      value={form.requirements}
                      onChange={updateField}
                    />
                  </div>
                </div>

                <div className="form-honeypot" aria-hidden="true">
                  <label htmlFor="inquiry-website">Website</label>
                  <input
                    id="inquiry-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={updateField}
                  />
                </div>

                {status.type === "error" && (
                  <div className="form-status form-status--error" role="alert">
                    <CircleAlert size={17} aria-hidden="true" />
                    <div>
                      <p>{status.message}</p>
                      {errorCount > 0 && (
                        <p className="form-status__hint">
                          {errorCount} {errorCount === 1 ? "field needs" : "fields need"} attention.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {status.type === "fallback" && (
                  <div className="form-status form-status--info" role="status">
                    <MessageCircle size={17} aria-hidden="true" />
                    <div>
                      <p>{status.message}</p>
                      <div className="form-status__links">
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open WhatsApp
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                        <a href={mailtoHref}>
                          Email instead
                          <Mail size={14} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <div className="inquiry__submit">
                  <button
                    type="submit"
                    className="btn btn--primary inquiry__submit-btn"
                    disabled={submitting}
                    aria-busy={submitting}
                  >
                    {submitting ? (
                      <>
                        <LoaderCircle
                          className="spin"
                          size={18}
                          aria-hidden="true"
                        />
                        Sending…
                      </>
                    ) : INQUIRY_ENDPOINT ? (
                      <>
                        Send Enquiry
                        <Send size={17} aria-hidden="true" />
                      </>
                    ) : (
                      <>
                        Continue on WhatsApp
                        <MessageCircle size={17} aria-hidden="true" />
                      </>
                    )}
                  </button>
                  <p className="inquiry__submit-note">
                    {INQUIRY_ENDPOINT
                      ? "Your details are used to respond to this enquiry."
                      : "This opens a pre-filled WhatsApp message. Press Send in WhatsApp to deliver your enquiry."}
                  </p>
                </div>
              </form>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
