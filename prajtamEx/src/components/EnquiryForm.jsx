import { useEffect, useMemo, useState } from "react";
import Icon from "./Icon";
import { products } from "../data/products";
import { services } from "../data/services";
import { requirementTypes } from "../data/site";
import { contact, whatsappLink, mailtoLink } from "../data/assets";

/**
 * Set VITE_FORM_ENDPOINT in a local .env file to connect this form to a working
 * backend. Without it the form deliberately prepares the enquiry and clearly
 * hands it off to WhatsApp or email instead of pretending a submission worked.
 */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || "";

const initialValues = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  requirement: "",
  productService: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else {
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 15) {
      errors.phone = "Please enter a valid phone number (7–15 digits).";
    }
  }

  if (!values.requirement) errors.requirement = "Please select what you are interested in.";
  if (!values.productService.trim()) {
    errors.productService = "Please tell us what product or service you need.";
  }

  return errors;
}

export default function EnquiryForm({ seed }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [prepared, setPrepared] = useState(null);
  const [copied, setCopied] = useState(false);

  const suggestions = useMemo(
    () =>
      Array.from(
        new Set([
          ...products.map((product) => product.name).filter(Boolean),
          ...services.map((service) => service.title).filter(Boolean),
        ])
      ),
    []
  );

  useEffect(() => {
    if (!seed) return;
    setPrepared(null);
    setStatus("idle");
    setFeedback("");
    setValues((current) => ({
      ...current,
      requirement: seed.requirement || current.requirement,
      productService: seed.product || current.productService,
      message:
        seed.product && !current.message
          ? `Please share details, availability and commercial terms for ${seed.product}.`
          : current.message,
    }));
  }, [seed]);

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const compose = (data) => {
    const lines = [
      `Enquiry from ${data.fullName}`,
      data.companyName ? `Company: ${data.companyName}` : "",
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      data.country ? `Country: ${data.country}` : "",
      `Interested in: ${data.requirement}`,
      `Product / service requirement: ${data.productService}`,
    ].filter(Boolean);
    lines.push("", data.message || "(No additional message)");
    return lines.join("\n");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length) {
      const firstField = Object.keys(found)[0];
      document.getElementById(firstField)?.focus();
      return;
    }

    const text = compose(values);
    const subject = `PrajtamEx enquiry – ${values.requirement}`;
    setCopied(false);
    setFeedback("");

    if (!FORM_ENDPOINT) {
      setPrepared({ text, subject });
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, subject, source: "prajtamex-website" }),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setPrepared(null);
      setStatus("success");
    } catch {
      setFeedback(
        "We couldn’t send your enquiry right now. You can still send it directly using WhatsApp or email below."
      );
      setPrepared({ text, subject });
      setStatus("error");
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prepared.text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: update(name),
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const errorText = (name) =>
    errors[name] ? (
      <span className="form__error" id={`${name}-error`} role="alert">
        {errors[name]}
      </span>
    ) : null;

  if (status === "success") {
    return (
      <div className="form form--prepared" role="status">
        <span className="form__prepared-icon" aria-hidden="true">
          <Icon name="check" size={24} />
        </span>
        <h3>Enquiry sent</h3>
        <p>
          Thank you, {values.fullName}. Your enquiry has been sent to PrajtamEx using the contact
          details you provided.
        </p>
        <button
          type="button"
          className="btn btn--primary"
          onClick={() => {
            setValues(initialValues);
            setErrors({});
            setPrepared(null);
            setFeedback("");
            setCopied(false);
            setStatus("idle");
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  if (prepared) {
    return (
      <div className="form form--prepared" role="status">
        <span className="form__prepared-icon" aria-hidden="true">
          <Icon name="check" size={24} />
        </span>
        <h3>{status === "error" ? "Couldn’t send your enquiry" : "Your enquiry is ready"}</h3>
        <p>
          {status === "error"
            ? feedback
            : "Online submission is not connected yet. Review your details and send them directly to PrajtamEx using WhatsApp or email. Nothing has been transmitted yet."}
        </p>
        <pre className="form__preview">{prepared.text}</pre>
        <div className="form__send">
          <a
            className="btn btn--whatsapp"
            href={whatsappLink(prepared.text)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="chat" size={17} />
            Send via WhatsApp
          </a>
          <a
            className="btn btn--primary"
            href={mailtoLink({ subject: prepared.subject, body: prepared.text })}
          >
            <Icon name="mail" size={17} />
            Send via Email
          </a>
          <button type="button" className="btn btn--outline" onClick={copy}>
            <Icon name="layers" size={16} />
            {copied ? "Copied" : "Copy enquiry"}
          </button>
        </div>
        <button
          type="button"
          className="form__reset"
          onClick={() => {
            setPrepared(null);
            setStatus("idle");
            setFeedback("");
          }}
        >
          Edit enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <div className="form__field">
          <label htmlFor="fullName">
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            required
            {...fieldProps("fullName")}
          />
          {errorText("fullName")}
        </div>
        <div className="form__field">
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            autoComplete="organization"
            placeholder="Company / organisation"
            {...fieldProps("companyName")}
          />
        </div>
      </div>

      <div className="form__row">
        <div className="form__field">
          <label htmlFor="email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            required
            {...fieldProps("email")}
          />
          {errorText("email")}
        </div>
        <div className="form__field">
          <label htmlFor="phone">
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 00000 00000"
            required
            {...fieldProps("phone")}
          />
          {errorText("phone")}
        </div>
      </div>

      <div className="form__row">
        <div className="form__field">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            autoComplete="country-name"
            placeholder="Your country"
            {...fieldProps("country")}
          />
        </div>
        <div className="form__field">
          <label htmlFor="requirement">
            Interested In <span aria-hidden="true">*</span>
          </label>
          <select required {...fieldProps("requirement")}>
            <option value="">Select an option</option>
            {requirementTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errorText("requirement")}
        </div>
      </div>

      <div className="form__field">
        <label htmlFor="productService">
          Product / Service Requirement <span aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          list="enquiry-suggestions"
          placeholder="e.g. Coco pith, fertilizer, import support"
          required
          {...fieldProps("productService")}
        />
        <datalist id="enquiry-suggestions">
          {suggestions.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>
        {errorText("productService")}
      </div>

      <div className="form__field">
        <label htmlFor="message">Message</label>
        <textarea
          rows="4"
          placeholder="Tell us about your requirement, destination market or product specification."
          {...fieldProps("message")}
        />
      </div>

      <button
        type="submit"
        className="btn btn--accent btn--block"
        disabled={status === "submitting"}
      >
        {status === "submitting"
          ? "Sending..."
          : FORM_ENDPOINT
          ? "Send Enquiry"
          : "Prepare Enquiry"}
        <Icon name="arrowRight" size={16} />
      </button>

      <p className="form__hint">
        <Icon name="info" size={15} />
        {FORM_ENDPOINT
          ? "Your enquiry will be sent directly to PrajtamEx using the contact details you provide."
          : `Online submission is not connected yet. The next step lets you send your enquiry directly on WhatsApp (${contact.whatsappLabel}) or by email (${contact.email}).`}
      </p>
    </form>
  );
}
