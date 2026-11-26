import { useEffect, useState } from 'react';
import { Mail, Phone } from 'lucide-react';
import {
  buildInquiryWhatsAppUrl,
  buildWhatsAppUrl,
  siteConfig,
} from '../data/siteConfig';
import Reveal from './Reveal';
import WhatsAppIcon from './WhatsAppIcon';
import '../styles/Contact.css';

const initialValues = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  quantity: '',
  message: '',
};

const fieldIds = {
  fullName: 'full-name',
  company: 'company-name',
  email: 'email-address',
  phone: 'phone-number',
  country: 'country-select',
  product: 'product-select',
  quantity: 'quantity',
  message: 'message',
};

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (values.phone.trim() && !/^[+()\-\s\d.]{7,22}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number, including the country code if possible.';
  }

  if (!values.country) {
    errors.country = 'Please select your country.';
  }

  if (!values.product) {
    errors.product = 'Please select a product.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us about your requirement.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please add a little more detail (at least 10 characters).';
  }

  return errors;
}

function buildInquiryBody(values) {
  return [
    `Name: ${values.fullName}`,
    values.company ? `Company: ${values.company}` : '',
    `Email: ${values.email}`,
    values.phone ? `Phone: ${values.phone}` : '',
    `Country: ${values.country}`,
    `Product: ${values.product}`,
    values.quantity ? `Required quantity: ${values.quantity}` : '',
    '',
    values.message,
  ]
    .filter((line) => line !== '')
    .join('\n');
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const whatsappUrl = buildWhatsAppUrl();
  const inquiryWhatsAppUrl = buildInquiryWhatsAppUrl(values);
  const emailSubject = `Agricultural inquiry${values.product ? ` – ${values.product}` : ''}`;
  const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    emailSubject,
  )}&body=${encodeURIComponent(buildInquiryBody(values))}`;

  useEffect(() => {
    const handleProductSelected = (event) => {
      const productName = event.detail;
      if (!['Rice', 'Tea', 'Flowers'].includes(productName)) return;

      setValues((current) => ({ ...current, product: productName }));
      setErrors((current) => {
        if (!current.product) return current;
        const next = { ...current };
        delete next.product;
        return next;
      });
    };

    window.addEventListener('suganta:select-product', handleProductSelected);
    return () => window.removeEventListener('suganta:select-product', handleProductSelected);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      const firstInvalidField = Object.keys(nextErrors)[0];
      document.getElementById(fieldIds[firstInvalidField])?.focus();
      return;
    }

    if (!siteConfig.formEndpoint) {
      setStatus('fallback');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Form endpoint returned ${response.status}`);
      }

      setStatus('success');
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error('Inquiry submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact section--tight section--white">
      <div className="container">
        <header className="contact__header">
          <p className="eyebrow">Get in touch</p>
          <h2 className="contact__heading">Let's Start a Business Conversation</h2>
          <p className="contact__subheading">
            Looking for agricultural products from India? Connect with SUGANTA GLOBAL to
            discuss your sourcing requirements and explore business opportunities.
          </p>
        </header>

        <div className="contact__grid">
          <Reveal as="aside" className="contact__details" delay={80} y={18}>
            <p className="contact__details-eyebrow">Direct contact</p>
            <h3 className="contact__details-heading">Speak with SUGANTA GLOBAL</h3>

            <ul className="contact__detail-list">
              <li className="contact__detail-item">
                <span className="contact__detail-icon" aria-hidden="true">
                  <Phone size={18} />
                </span>
                <span className="contact__detail-copy">
                  <span className="contact__detail-label">Phone</span>
                  <a className="contact__detail-value" href={siteConfig.phone.href}>
                    {siteConfig.phone.display}
                  </a>
                </span>
              </li>

              <li className="contact__detail-item">
                <span className="contact__detail-icon" aria-hidden="true">
                  <Mail size={18} />
                </span>
                <span className="contact__detail-copy">
                  <span className="contact__detail-label">Email</span>
                  <a
                    className="contact__detail-value"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </span>
              </li>

              <li className="contact__detail-item">
                <span className="contact__detail-icon" aria-hidden="true">
                  <WhatsAppIcon size={18} />
                </span>
                <span className="contact__detail-copy">
                  <span className="contact__detail-label">WhatsApp</span>
                  <a
                    className="contact__detail-value"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.whatsapp.display}
                  </a>
                </span>
              </li>
            </ul>

            <div className="contact__whatsapp-card">
              <p>Prefer a quick conversation? Message us directly on WhatsApp.</p>
              <a
                className="btn btn--gold contact__whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal as="form" className="contact__form" delay={160} y={20} onSubmit={handleSubmit} noValidate>
            <div className="contact__form-header">
              <p className="contact__form-eyebrow">Inquiry form</p>
              <h3 className="contact__form-heading">Tell us what you are looking for</h3>
            </div>

            <fieldset className="contact__fieldset">
              <legend className="sr-only">Business inquiry details</legend>

              <div className="form__grid">
                <div className="form__group">
                  <label className="form__label" htmlFor="full-name">
                    Full Name <span className="form__required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="full-name"
                    value={values.fullName}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    aria-required="true"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'full-name-error' : undefined}
                  />
                  {errors.fullName && (
                    <p className="form__error" id="full-name-error">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="form__group">
                  <label className="form__label" htmlFor="company-name">
                    Company Name <span className="form__optional">optional</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company-name"
                    value={values.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    placeholder="Your company name"
                  />
                </div>

                <div className="form__group">
                  <label className="form__label" htmlFor="email-address">
                    Email Address <span className="form__required" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email-address"
                    value={values.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-required="true"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p className="form__error" id="email-error">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="form__group">
                  <label className="form__label" htmlFor="phone-number">
                    Phone Number <span className="form__optional">optional</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone-number"
                    value={values.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    placeholder="+91 70281 75779"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p className="form__error" id="phone-error">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="form__group">
                  <label className="form__label" htmlFor="country-select">
                    Country <span className="form__required" aria-hidden="true">*</span>
                  </label>
                  <select
                    name="country"
                    id="country-select"
                    value={values.country}
                    onChange={handleChange}
                    required
                    autoComplete="country-name"
                    aria-required="true"
                    aria-invalid={Boolean(errors.country)}
                    aria-describedby={errors.country ? 'country-error' : undefined}
                  >
                    <option value="" disabled>
                      Select your country
                    </option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Oman">Oman</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.country && (
                    <p className="form__error" id="country-error">
                      {errors.country}
                    </p>
                  )}
                </div>

                <div className="form__group">
                  <label className="form__label" htmlFor="product-select">
                    Product Interested In <span className="form__required" aria-hidden="true">*</span>
                  </label>
                  <select
                    name="product"
                    id="product-select"
                    value={values.product}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-invalid={Boolean(errors.product)}
                    aria-describedby={errors.product ? 'product-error' : undefined}
                  >
                    <option value="" disabled>
                      Select a product
                    </option>
                    <option value="Rice">Rice</option>
                    <option value="Tea">Tea</option>
                    <option value="Flowers">Flowers</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.product && (
                    <p className="form__error" id="product-error">
                      {errors.product}
                    </p>
                  )}
                </div>

                <div className="form__group form__group--full">
                  <label className="form__label" htmlFor="quantity">
                    Required Quantity <span className="form__optional">optional</span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    value={values.quantity}
                    onChange={handleChange}
                    inputMode="numeric"
                    placeholder="e.g. 5000 kg"
                  />
                </div>

                <div className="form__group form__group--full">
                  <label className="form__label" htmlFor="message">
                    Message <span className="form__required" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={values.message}
                    onChange={handleChange}
                    rows="4"
                    required
                    placeholder="Tell us about your sourcing requirements…"
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p className="form__error" id="message-error">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>
            </fieldset>

            <div className="contact__form-actions">
              <button
                type="submit"
                className="btn btn--primary contact__submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
              </button>
              <p className="contact__form-note">
                Your details are used only to respond to your inquiry.
              </p>
            </div>

            <div className="contact__status" aria-live="polite" aria-atomic="true">
              {status === 'fallback' && (
                <div className="form__status form__status--info">
                  <strong>Your details are ready to send.</strong>
                  <p>
                    This form is not connected to a form service yet, so nothing has been
                    submitted. Send the inquiry directly using one of the options below.
                  </p>
                  <div className="form__status-actions">
                    <a className="btn btn--primary btn--sm" href={mailtoUrl}>
                      Email inquiry
                    </a>
                    <a
                      className="btn btn--gold btn--sm"
                      href={inquiryWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp inquiry
                    </a>
                  </div>
                </div>
              )}

              {status === 'success' && (
                <div className="form__status form__status--success" role="status">
                  <strong>Inquiry sent successfully.</strong>
                  <p>Thank you for reaching out. We will review your message and respond.</p>
                </div>
              )}

              {status === 'error' && (
                <div className="form__status form__status--error" role="alert">
                  <strong>We could not send your inquiry.</strong>
                  <p>
                    Please try again, or contact us directly by{' '}
                    <a href={mailtoUrl}>email</a> or{' '}
                    <a href={inquiryWhatsAppUrl} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                    .
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
