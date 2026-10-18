import { useEffect, useMemo, useState } from "react";
import Icon from "./Icon";
import { products } from "../data/products";
import { services } from "../data/services";
import { requirementTypes } from "../data/site";
import { contact, whatsappLink, mailtoLink } from "../data/assets";

const initialValues = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  requirement: "",
  productService: "",
  quantity: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.requirement) errors.requirement = "Please select a requirement type.";
  if (values.phone.trim() && !/^[+\d][\d\s\-()]{6,}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  return errors;
}

export default function EnquiryForm({ seed }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [prepared, setPrepared] = useState(null);
  const [copied, setCopied] = useState(false);

  const options = useMemo(() => {
    const productNames = products.map((product) => product.name).filter(Boolean);
    const serviceNames = services.map((service) => service.title).filter(Boolean);
    return [
      { group: "Products", items: productNames },
      { group: "Services", items: serviceNames },
    ].filter((entry) => entry.items.length);
  }, []);

  useEffect(() => {
    if (!seed) return;
    setPrepared(null);
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
      data.phone ? `Phone: ${data.phone}` : "",
      data.country ? `Country: ${data.country}` : "",
      `Requirement type: ${data.requirement}`,
      data.productService ? `Product / Service: ${data.productService}` : "",
      data.quantity ? `Quantity / Requirement: ${data.quantity}` : "",
    ].filter(Boolean);
    lines.push("", data.message || "(No additional message)");
    return lines.join("\n");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const firstField = Object.keys(found)[0];
      document.getElementById(firstField)?.focus();
      return;
    }
    setPrepared({ text: compose(values), subject: `PrajtamEx enquiry – ${values.requirement}` });
    setCopied(false);
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

  if (prepared) {
    return (
      <div className="form form--prepared" role="status">
        <span className="form__prepared-icon" aria-hidden="true">
          <Icon name="check" size={24} />
        </span>
        <h3>Your enquiry is ready</h3>
        <p>
          Review the details below and choose how you would like to send them to PrajtamEx. Nothing
          has been transmitted yet.
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
          <a className="btn btn--primary" href={mailtoLink({ subject: prepared.subject, body: prepared.text })}>
            <Icon name="mail" size={17} />
            Send via Email
          </a>
          <button type="button" className="btn btn--outline" onClick={copy}>
            <Icon name="layers" size={16} />
            {copied ? "Copied" : "Copy enquiry"}
          </button>
        </div>
        <button type="button" className="form__reset" onClick={() => setPrepared(null)}>
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
          <input type="text" autoComplete="name" placeholder="Your full name" {...fieldProps("fullName")} />
          {errorText("fullName")}
        </div>
        <div className="form__field">
          <label htmlFor="companyName">Company Name</label>
          <input type="text" autoComplete="organization" placeholder="Company / organisation" {...fieldProps("companyName")} />
        </div>
      </div>

      <div className="form__row">
        <div className="form__field">
          <label htmlFor="email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input type="email" autoComplete="email" placeholder="name@company.com" {...fieldProps("email")} />
          {errorText("email")}
        </div>
        <div className="form__field">
          <label htmlFor="phone">Phone</label>
          <input type="tel" autoComplete="tel" placeholder="+91 00000 00000" {...fieldProps("phone")} />
          {errorText("phone")}
        </div>
      </div>

      <div className="form__row">
        <div className="form__field">
          <label htmlFor="country">Country</label>
          <input type="text" autoComplete="country-name" placeholder="Your country" {...fieldProps("country")} />
        </div>
        <div className="form__field">
          <label htmlFor="requirement">
            Requirement Type <span aria-hidden="true">*</span>
          </label>
          <select {...fieldProps("requirement")}>
            <option value="">Select requirement</option>
            {requirementTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errorText("requirement")}
        </div>
      </div>

      <div className="form__row">
        <div className="form__field">
          <label htmlFor="productService">Product / Service</label>
          <select {...fieldProps("productService")}>
            <option value="">Select or type below</option>
            {options.map((group) => (
              <optgroup label={group.group} key={group.group}>
                {group.items.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </optgroup>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form__field">
          <label htmlFor="quantity">Quantity / Requirement</label>
          <input type="text" placeholder="e.g. volume, frequency, timeline" {...fieldProps("quantity")} />
        </div>
      </div>

      <div className="form__field">
        <label htmlFor="message">Message</label>
        <textarea
          rows="4"
          placeholder="Tell us about your requirement, destination market or product specification."
          {...fieldProps("message")}
        />
      </div>

      <button type="submit" className="btn btn--accent btn--block">
        Send Enquiry
        <Icon name="arrowRight" size={16} />
      </button>

      <p className="form__hint">
        This form prepares your enquiry — send it directly to PrajtamEx on WhatsApp
        {" "}({contact.whatsappLabel}) or by email ({contact.email}).
      </p>
    </form>
  );
}
