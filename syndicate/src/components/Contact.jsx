import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, LoaderCircle, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { company, contact } from '../data/site';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { validateInquiry } from '../utils/validateInquiry';
import './Contact.css';

const EMPTY_FORM = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: '',
  productCategory: '',
  product: '',
  quantity: '',
  specifications: '',
  destination: '',
  timeline: '',
  additionalRequirements: '',
};

const ENDPOINT = import.meta.env.VITE_INQUIRY_ENDPOINT || '/api/inquiries';
const ENDPOINT_CONFIGURED = Boolean(import.meta.env.VITE_INQUIRY_ENDPOINT);

function Field({ id, label, required = false, error, hint, children, wide = false }) {
  return (
    <div className={`form-field ${wide ? 'form-field--wide' : ''} ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <small>{hint}</small>}
      {error && (
        <small className="form-field__error" id={`${id}-error`} role="alert">
          {error}
        </small>
      )}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [reference, setReference] = useState('');

  useEffect(() => {
    const prefill = (event) => {
      const product = event.detail?.product || '';
      setValues((current) => ({
        ...current,
        product,
        productCategory: product === 'Narrow Fabric Woven Tapes' ? 'Technical Textiles' : current.productCategory || 'Agricultural Produce',
      }));
    };
    window.addEventListener('inquiry:prefill', prefill);
    return () => window.removeEventListener('inquiry:prefill', prefill);
  }, []);

  const setField = (field) => (event) => {
    const value = event.target.value;
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => (current[field] ? { ...current, [field]: undefined } : current));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const found = validateInquiry(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus('error');
      setServerMessage('Please review the highlighted fields and try again.');
      document.querySelector('.has-error input, .has-error select, .has-error textarea')?.focus();
      return;
    }

    setStatus('submitting');
    setServerMessage('');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, source: 'website' }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setErrors(data.errors || {});
        setStatus('error');
        setServerMessage(
          data.message || 'Your inquiry could not be sent right now. Please email or WhatsApp us directly.'
        );
        return;
      }
      setReference(data.reference || '');
      setStatus('success');
      setValues(EMPTY_FORM);
    } catch {
      setStatus('error');
      setServerMessage(
        'We could not reach the inquiry service. Please email rahul@syndicateglobalexim.com or use WhatsApp.'
      );
    }
  };

  const inputProps = (field) => ({
    id: field,
    name: field,
    value: values[field],
    onChange: setField(field),
    'aria-invalid': Boolean(errors[field]),
    'aria-describedby': errors[field] ? `${field}-error` : undefined,
  });

  return (
    <section id={contact.id} className="section contact">
      <div className="container">
        <div className="contact__head">
          <SectionHeading eyebrow={contact.eyebrow} title={contact.heading} intro={contact.description} />
          <Reveal className="contact__details" delay={100}>
            <a href={company.phoneHref} className="contact-detail">
              <span className="contact-detail__icon"><Phone size={20} strokeWidth={1.7} /></span>
              <span><small>Phone</small><strong>{company.phoneDisplay}</strong></span>
            </a>
            <a href={`mailto:${company.email}`} className="contact-detail">
              <span className="contact-detail__icon"><Mail size={20} strokeWidth={1.7} /></span>
              <span><small>Email</small><strong>{company.email}</strong></span>
            </a>
            <a href={company.whatsapp} className="contact-detail" target="_blank" rel="noreferrer">
              <span className="contact-detail__icon"><MessageCircle size={20} strokeWidth={1.7} /></span>
              <span><small>WhatsApp inquiry</small><strong>Chat with our team</strong></span>
            </a>
            <a href={company.address.mapUrl} className="contact-detail" target="_blank" rel="noreferrer">
              <span className="contact-detail__icon"><MapPin size={20} strokeWidth={1.7} /></span>
              <span><small>Location</small><strong>{company.address.line}</strong></span>
            </a>
          </Reveal>
        </div>

        <Reveal className="contact__form-card" delay={80}>
          {!ENDPOINT_CONFIGURED && (
            <div className="form-notice form-notice--setup" role="note">
              Setup notice: no inquiry endpoint is configured. Set <code>VITE_INQUIRY_ENDPOINT</code> before deployment.
              Until then, please contact us by email or WhatsApp.
            </div>
          )}

          {status === 'success' ? (
            <div className="form-success" role="status">
              <CheckCircle2 size={44} strokeWidth={1.4} />
              <h3>Inquiry received.</h3>
              <p>
                Thank you for sharing your requirement. Our team will review the details and respond to discuss
                sourcing and export possibilities.
              </p>
              {reference && <span className="pill">Reference: {reference}</span>}
              <button type="button" className="btn btn-outline" onClick={() => setStatus('idle')}>
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <Field id="fullName" label="Full Name" required error={errors.fullName}>
                  <input type="text" autoComplete="name" placeholder="Your full name" {...inputProps('fullName')} />
                </Field>
                <Field id="companyName" label="Company Name" required error={errors.companyName}>
                  <input type="text" autoComplete="organization" placeholder="Your company" {...inputProps('companyName')} />
                </Field>
                <Field id="email" label="Business Email" required error={errors.email}>
                  <input type="email" autoComplete="email" placeholder="name@company.com" {...inputProps('email')} />
                </Field>
                <Field id="phone" label="Contact Number" error={errors.phone} hint="Include country code if possible.">
                  <input type="tel" autoComplete="tel" placeholder="+00 00000 00000" {...inputProps('phone')} />
                </Field>
                <Field id="country" label="Country" required error={errors.country}>
                  <input type="text" autoComplete="country-name" placeholder="Buyer country" {...inputProps('country')} />
                </Field>
                <Field id="timeline" label="Expected Purchase Timeline">
                  <select {...inputProps('timeline')}>
                    <option value="">Select a timeline</option>
                    {contact.formOptions.timelines.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </Field>
                <Field id="productCategory" label="Product Category" required error={errors.productCategory}>
                  <select {...inputProps('productCategory')}>
                    <option value="">Select a category</option>
                    {contact.formOptions.categories.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </Field>
                <Field id="product" label="Product Interested In" required error={errors.product}>
                  <select {...inputProps('product')}>
                    <option value="">Select a product</option>
                    {contact.formOptions.products.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </Field>
                <Field id="quantity" label="Required Quantity" required error={errors.quantity}>
                  <input type="text" placeholder="e.g. quantity and frequency" {...inputProps('quantity')} />
                </Field>
                <Field id="destination" label="Destination Port / Country" required error={errors.destination}>
                  <input type="text" placeholder="Port or country of destination" {...inputProps('destination')} />
                </Field>
                <Field id="specifications" label="Product Specifications" wide error={errors.specifications}>
                  <textarea
                    rows="4"
                    placeholder="Grades, sizes, packaging, weave details, or any other requirement"
                    {...inputProps('specifications')}
                  />
                </Field>
                <Field id="additionalRequirements" label="Additional Requirements" wide error={errors.additionalRequirements}>
                  <textarea
                    rows="3"
                    placeholder="Anything else we should know about this requirement"
                    {...inputProps('additionalRequirements')}
                  />
                </Field>
              </div>

              {status === 'error' && serverMessage && (
                <p className="form-notice form-notice--error" role="alert">{serverMessage}</p>
              )}

              <div className="form-actions">
                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    <>Sending inquiry <LoaderCircle className="spin" size={17} /></>
                  ) : (
                    <>Submit Inquiry <Send size={17} /></>
                  )}
                </button>
                <p>
                  Your details are used only to respond to this inquiry.
                  <br />
                  Prefer to talk? <a href={company.whatsapp} target="_blank" rel="noreferrer">WhatsApp us <ArrowRight size={13} /></a>
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
