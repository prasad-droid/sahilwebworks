import { useEffect, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import {
  businessTypeOptions,
  contact,
  productOptions,
} from '../data/site.js';

const emptyForm = {
  fullName: '',
  companyName: '',
  email: '',
  contactNumber: '',
  businessType: '',
  productInterestedIn: '',
  requiredQuantity: '',
  productSpecifications: '',
  additionalRequirements: '',
  message: '',
};

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!values.companyName.trim()) errors.companyName = 'Please enter your company name.';

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!values.contactNumber.trim()) {
    errors.contactNumber = 'Please enter your contact number.';
  } else if (!/^[0-9+()\- ]{7,20}$/.test(values.contactNumber.trim())) {
    errors.contactNumber = 'Please enter a valid contact number.';
  }

  if (!values.businessType) errors.businessType = 'Please select a business type.';
  if (!values.productInterestedIn) errors.productInterestedIn = 'Please select a product.';

  if (!values.message.trim()) {
    errors.message = 'Please tell us about your requirement.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please provide at least 10 characters.';
  }

  return errors;
}

function FieldError({ name, message }) {
  if (!message) return null;
  return (
    <span className="field-error" id={`${name}-error`} role="alert">
      {message}
    </span>
  );
}

export default function Contact({ presetProduct, onPresetConsumed }) {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    if (!presetProduct) return;
    setValues((current) => ({ ...current, productInterestedIn: presetProduct }));
    setErrors((current) => ({ ...current, productInterestedIn: undefined }));
  }, [presetProduct]);

  const fieldProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status !== 'submitting') setStatus('idle');
  }

  function handleBlur(event) {
    const { name } = event.target;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: validate(values)[name] }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched(
      Object.keys(emptyForm).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
    );

    if (Object.keys(nextErrors).length > 0) {
      document.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    setStatus('submitting');
    setServerMessage('');

    try {
      const endpoint = import.meta.env.VITE_INQUIRY_ENDPOINT || '/api/inquiries';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'The inquiry could not be submitted. Please try again.');
      }

      setStatus('success');
      setServerMessage(result.message || 'Thank you. Your inquiry has been received.');
      setValues(emptyForm);
      setTouched({});
      onPresetConsumed?.();
    } catch (error) {
      setStatus('error');
      setServerMessage(
        error instanceof TypeError
          ? 'The inquiry service is unavailable. Please call, email or message us on WhatsApp instead.'
          : error.message,
      );
    }
  }

  const contactActions = [
    {
      label: 'Call Now',
      value: contact.phoneDisplay,
      href: contact.phoneHref,
      icon: Phone,
      external: false,
    },
    {
      label: 'Email Us',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'WhatsApp Inquiry',
      value: contact.whatsappDisplay,
      href: contact.whatsappHref,
      icon: MessageCircle,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-heading section-heading-split" data-reveal>
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Contact & Business Inquiry
            </p>
            <h2 id="contact-title">Let&apos;s Find the Right Solution for Your Business.</h2>
          </div>
          <p className="section-lead">
            Looking for packaging materials for your business or fresh Indian banana leaves for
            export? Connect with SYAA SOLUTION to discuss your requirements.
          </p>
        </div>

        <div className="contact-grid">
          <aside className="contact-aside" data-reveal>
            <h3>Direct Contact</h3>
            <p className="contact-aside-intro">
              Speak with us directly or send your requirements and we will get back to you.
            </p>

            <ul className="contact-actions">
              {contactActions.map((action) => {
                const Icon = action.icon;
                return (
                  <li key={action.label}>
                    <a
                      href={action.href}
                      className="contact-action"
                      {...(action.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      <span className="contact-action-icon" aria-hidden="true">
                        <Icon size={20} />
                      </span>
                      <span>
                        <small>{action.label}</small>
                        <strong>{action.value}</strong>
                      </span>
                      <ArrowRight size={17} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="contact-location">
              <MapPin size={20} aria-hidden="true" />
              <span>
                <small>Business Location</small>
                <strong>{contact.location}</strong>
              </span>
            </div>

            <div className="contact-side-note">
              <CheckCircle2 size={18} aria-hidden="true" />
              <p>
                Share your product, quantity and specification details so we can respond with the
                most relevant information.
              </p>
            </div>
          </aside>

          <div className="contact-form-card" data-reveal>
            {status === 'success' ? (
              <div className="form-success" role="status">
                <CheckCircle2 size={44} strokeWidth={1.5} aria-hidden="true" />
                <h3>Inquiry received</h3>
                <p>{serverMessage}</p>
                <button type="button" className="btn btn-primary" onClick={() => setStatus('idle')}>
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-card-heading">
                  <h3>Business Inquiry Form</h3>
                  <p>Fields marked * are required.</p>
                </div>

                {status === 'error' && (
                  <div className="form-error-banner" role="alert">
                    {serverMessage}
                  </div>
                )}

                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="fullName">Full Name *</label>
                    <input type="text" autoComplete="name" placeholder="Your full name" {...fieldProps('fullName')} />
                    <FieldError name="fullName" message={touched.fullName && errors.fullName} />
                  </div>

                  <div className="field">
                    <label htmlFor="companyName">Company Name *</label>
                    <input type="text" autoComplete="organization" placeholder="Your company" {...fieldProps('companyName')} />
                    <FieldError name="companyName" message={touched.companyName && errors.companyName} />
                  </div>

                  <div className="field">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" autoComplete="email" placeholder="you@company.com" {...fieldProps('email')} />
                    <FieldError name="email" message={touched.email && errors.email} />
                  </div>

                  <div className="field">
                    <label htmlFor="contactNumber">Contact Number *</label>
                    <input type="tel" autoComplete="tel" placeholder="Phone number" {...fieldProps('contactNumber')} />
                    <FieldError name="contactNumber" message={touched.contactNumber && errors.contactNumber} />
                  </div>

                  <div className="field">
                    <label htmlFor="businessType">Business Type *</label>
                    <select {...fieldProps('businessType')}>
                      <option value="">Select business type</option>
                      {businessTypeOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <FieldError name="businessType" message={touched.businessType && errors.businessType} />
                  </div>

                  <div className="field">
                    <label htmlFor="productInterestedIn">Product Interested In *</label>
                    <select {...fieldProps('productInterestedIn')}>
                      <option value="">Select product</option>
                      {productOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <FieldError
                      name="productInterestedIn"
                      message={touched.productInterestedIn && errors.productInterestedIn}
                    />
                  </div>

                  <div className="field field-full">
                    <label htmlFor="requiredQuantity">Required Quantity</label>
                    <input type="text" placeholder="Approximate quantity, if known" {...fieldProps('requiredQuantity')} />
                  </div>

                  <div className="field field-full">
                    <label htmlFor="productSpecifications">Product Specifications</label>
                    <textarea rows="2" placeholder="Sizes, material or other details" {...fieldProps('productSpecifications')} />
                  </div>

                  <div className="field field-full">
                    <label htmlFor="additionalRequirements">Additional Requirements</label>
                    <textarea rows="2" placeholder="Any other requirements" {...fieldProps('additionalRequirements')} />
                  </div>

                  <div className="field field-full">
                    <label htmlFor="message">Message *</label>
                    <textarea rows="4" placeholder="Tell us about your requirement" {...fieldProps('message')} />
                    <FieldError name="message" message={touched.message && errors.message} />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting…' : 'Submit Inquiry'}
                  <Send size={17} aria-hidden="true" />
                </button>

                <p className="form-footnote">
                  Your details are used only to respond to this business inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
