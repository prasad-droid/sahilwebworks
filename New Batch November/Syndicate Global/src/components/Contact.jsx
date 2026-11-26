import { useRef, useState } from 'react';
import {
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  TriangleAlert,
} from 'lucide-react';
import Reveal from './Reveal.jsx';
import './Contact.css';

const EMAIL = 'rahul@syndicateglobalexim.com';
const PHONE_DISPLAY = '+91 7517331951';
const WHATSAPP_NUMBER = '917517331951';

const initialForm = {
  fullName: '',
  company: '',
  email: '',
  country: '',
  phone: '',
  product: '',
  customProduct: '',
  quantity: '',
  requirements: '',
  website: '', // Honeypot: hidden from humans, left empty by bots.
};

const OTHER_PRODUCT = 'Other / Custom Product (Please specify)';

const productOptions = [
  'Perishable Agro-Produce (Onions, G4 Chillies, etc.)',
  'Non-Perishable Agro-Commodities',
  'Narrow Fabric Woven Tapes',
  'Polymer Granules',
  'Industrial Metals',
  OTHER_PRODUCT,
];

function validate(values) {
  const errors = {};
  if (values.fullName.trim().length < 2) errors.fullName = 'Please enter your full name.';
  if (values.company.trim().length < 2) errors.company = 'Please enter your company name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = 'Please enter a valid business email.';
  if (values.country.trim().length < 2) errors.country = 'Please enter your country.';
  if (!/^[+\d][\d\s()-]{6,}$/.test(values.phone.trim())) errors.phone = 'Please enter a valid contact number.';
  if (!values.product) errors.product = 'Please select a product of interest.';
  if (values.product === OTHER_PRODUCT && !values.customProduct.trim()) {
    errors.customProduct = 'Please enter the product name and specifications.';
  }
  if (!values.quantity.trim()) errors.quantity = 'Please enter the required quantity.';
  return errors;
}

function buildMessage(values) {
  return [
    'Hello Syndicate Global EXIM,',
    '',
    'I would like to discuss a bulk export requirement.',
    '',
    `Product: ${values.product === OTHER_PRODUCT
      ? `Other / Custom Product — ${values.customProduct || 'To be discussed'}`
      : values.product || 'To be discussed'}`,
    `Required quantity: ${values.quantity || 'To be confirmed'}`,
    `Company: ${values.company || values.fullName || '—'}`,
    `Country: ${values.country || '—'}`,
    `Contact: ${values.phone || '—'}`,
    `Email: ${values.email || '—'}`,
    values.requirements ? `Additional requirements: ${values.requirements}` : '',
    '',
    'Please share availability, quality documentation and export terms.',
    '',
    `Regards, ${values.fullName || '—'}`,
  ].filter((line) => line !== '').join('\n');
}

function FormField({ id, label, error, full = false, required = false, children }) {
  return (
    <div className={`form-field${full ? ' form-field--full' : ''}${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>
        {label}
        {required && <span className="required" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <span id={`${id}-error`} className="form-field__error">{error}</span>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const startedAt = useRef(Date.now());

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    // Spam protection: silently ignore submissions where the honeypot is filled.
    if (form.website) return;

    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus({ type: 'error', message: 'Please review the highlighted fields before sending.' });
      return;
    }

    if (Date.now() - startedAt.current < 2500) {
      setStatus({ type: 'error', message: 'Please take a moment to complete your inquiry before submitting.' });
      return;
    }

    const payload = { ...form, website: undefined };
    delete payload.website;
    const endpoint = import.meta.env.VITE_INQUIRY_ENDPOINT;

    if (!endpoint) {
      const subject = encodeURIComponent(`Bulk Export Inquiry — ${form.product} — ${form.company}`);
      const body = encodeURIComponent(buildMessage(form));
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus({
        type: 'info',
        message:
          'Your email application should open with a ready-to-send inquiry draft. Please send it there — nothing has been submitted automatically yet.',
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          submittedAt: new Date().toISOString(),
          startedAt: new Date(startedAt.current).toISOString(),
        }),
      });
      if (!response.ok) throw new Error(`Request failed with ${response.status}`);
      setStatus({
        type: 'success',
        message: 'Thank you. Your business inquiry has been received. Our team will contact you shortly.',
      });
      setForm(initialForm);
      setErrors({});
      startedAt.current = Date.now();
    } catch {
      setStatus({
        type: 'error',
        message: 'We could not send your inquiry right now. Please try again or use the WhatsApp option below.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(form))}`;

  const inputProps = (name) => ({
    id: name,
    name,
    value: form[name],
    onChange: update,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <p className="eyebrow">Contact &amp; Inquiry</p>
          <h2 id="contact-title" className="section-title">
            Let&apos;s Build a Reliable <span className="text-gold">Global Supply Partnership.</span>
          </h2>
          <p className="section-lead">
            Looking for a dependable Indian sourcing partner? Share your product
            requirements with Syndicate Global EXIM.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__details">
            <p className="contact__details-label">Direct Contact</p>
            <h3>Let&apos;s talk about your next shipment.</h3>
            <p className="contact__details-intro">
              Share your requirement and our team will respond with availability,
              quality details and export coordination.
            </p>

            <ul className="contact__list">
              <li>
                <span><Building2 aria-hidden="true" /></span>
                <span><small>Company</small><strong>Syndicate Global EXIM</strong></span>
              </li>
              <li>
                <span><Phone aria-hidden="true" /></span>
                <span><small>Phone</small><strong>{PHONE_DISPLAY}</strong></span>
              </li>
              <li>
                <span><MessageCircle aria-hidden="true" /></span>
                <span><small>WhatsApp</small><strong>{PHONE_DISPLAY}</strong></span>
              </li>
              <li>
                <span><Mail aria-hidden="true" /></span>
                <span><small>Email</small><strong>{EMAIL}</strong></span>
              </li>
              <li>
                <span><MapPin aria-hidden="true" /></span>
                <span>
                  <small>Address</small>
                  <strong>Chikalthana, Chh. Sambhajinagar – 431003, Maharashtra, India.</strong>
                </span>
              </li>
            </ul>

            <a className="btn btn--primary contact__whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" /> Inquiry on WhatsApp
            </a>
          </Reveal>

          <Reveal className="contact__form-wrap" delay={120}>
            <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
              <div className="inquiry-form__heading">
                <h3>Business Inquiry</h3>
                <p>Tell us what you need and where you need it delivered.</p>
              </div>

              <div className="form__grid">
                <FormField id="fullName" label="Full Name" required error={errors.fullName}>
                  <input type="text" autoComplete="name" placeholder="Your full name" {...inputProps('fullName')} />
                </FormField>

                <FormField id="company" label="Company Name" required error={errors.company}>
                  <input type="text" autoComplete="organization" placeholder="Your company" {...inputProps('company')} />
                </FormField>

                <FormField id="email" label="Business Email" required error={errors.email}>
                  <input type="email" autoComplete="email" placeholder="name@company.com" {...inputProps('email')} />
                </FormField>

                <FormField id="country" label="Country" required error={errors.country}>
                  <input type="text" autoComplete="country-name" placeholder="Destination country" {...inputProps('country')} />
                </FormField>

                <FormField id="phone" label="Contact Number" required error={errors.phone}>
                  <input type="tel" autoComplete="tel" placeholder="+00 00000 00000" {...inputProps('phone')} />
                </FormField>

                <FormField id="product" label="Product Interest" required error={errors.product}>
                  <select {...inputProps('product')}>
                    <option value="">Select a product</option>
                    {productOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                </FormField>

                {form.product === OTHER_PRODUCT && (
                  <FormField
                    id="customProduct"
                    label="Product Name & Specifications"
                    required
                    full
                    error={errors.customProduct}
                  >
                    <input
                      type="text"
                      placeholder="Enter product name & specifications"
                      {...inputProps('customProduct')}
                    />
                  </FormField>
                )}

                <FormField id="quantity" label="Required Quantity" required error={errors.quantity}>
                  <input type="text" placeholder="e.g. 5 MT" {...inputProps('quantity')} />
                </FormField>

                <FormField id="requirements" label="Additional Requirements" full>
                  <textarea rows="4" placeholder="Grading, packaging, destination port, timelines or any other requirement" {...inputProps('requirements')} />
                </FormField>
              </div>

              <div className="inquiry-form__honeypot" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} />
              </div>

              {status.message && (
                <p
                  className={`form-status form-status--${status.type}`}
                  role={status.type === 'error' ? 'alert' : 'status'}
                >
                  {status.type === 'success' ? <CheckCircle2 aria-hidden="true" /> : <TriangleAlert aria-hidden="true" />}
                  {status.message}
                </p>
              )}

              <button className="btn btn--primary inquiry-form__submit" type="submit" disabled={submitting}>
                <Send aria-hidden="true" />
                {submitting ? 'Sending Inquiry…' : 'Send Business Inquiry'}
              </button>

              <p className="inquiry-form__disclaimer">
                Fields marked with an asterisk are required. Your details are used only
                to respond to this inquiry.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
