import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icons.jsx';
import { bulkOrderChecklist } from '../data/services.js';
import { products } from '../data/products.js';
import { useEnquiry } from '../context/EnquiryContext.jsx';
import { whatsappMessageLink, EMAIL, BUSINESS_NAME } from '../data/business.js';
import { mailtoLink } from '../utils/format.js';

const UNITS = ['Metric Tonnes (MT)', 'Kilograms (kg)', 'Pounds (lb)', 'Other'];

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  quantity: '',
  unit: UNITS[0],
  message: '',
};

/**
 * Quote request form.
 *
 * Submission is intentionally NOT wired to a server. The requirement was
 * "no backend", so the form builds a structured enquiry from every field and
 * hands the whole thing to WhatsApp. Email and copy-to-clipboard remain as
 * fallbacks for buyers who cannot open WhatsApp. To connect a real endpoint
 * later, replace the `deliver()` function.
 */
export function QuoteForm() {
  const { product, seq, clearProduct } = useEnquiry();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [channel, setChannel] = useState(null);
  const summaryRef = useRef(null);
  const firstFieldRef = useRef(null);

  // A product chosen in the catalogue prefills this field and focuses it.
  useEffect(() => {
    if (!product) return;
    setValues((v) => ({ ...v, product }));
    setStatus('idle');
    setErrors((e) => ({ ...e, product: undefined }));
    if (firstFieldRef.current) firstFieldRef.current.focus({ preventScroll: true });
  }, [product, seq]);

  function clearPrefill() {
    clearProduct();
    setValues((v) => ({ ...v, product: '' }));
    setStatus('idle');
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
    setStatus('idle');
  }

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (!values.country.trim()) next.country = 'Please enter your country.';
    if (!values.product.trim()) next.product = 'Tell us which product you need.';
    if (!values.quantity.trim()) next.quantity = 'Enter an approximate quantity.';
    return next;
  }

  function buildSummary() {
    return [
      `Name: ${values.name.trim()}`,
      `Company: ${values.company.trim() || '-'}`,
      `Email: ${values.email.trim()}`,
      `Phone / WhatsApp: ${values.phone.trim() || '-'}`,
      `Country: ${values.country.trim()}`,
      `Product: ${values.product.trim()}`,
      `Quantity: ${values.quantity.trim()} ${values.unit}`,
      values.message.trim() ? `Notes: ${values.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n');
  }

  function deliver(target) {
    setStatus('building');
    const summary = buildSummary();

    if (target === 'whatsapp') {
      // The whole enquiry goes to WhatsApp, not just the product name.
      window.open(whatsappMessageLink(summary), '_blank', 'noopener,noreferrer');
    } else if (target === 'email') {
      window.location.href = mailtoLink(
        `Quote Request${values.product.trim() ? ` - ${values.product.trim()}` : ''} | ${BUSINESS_NAME}`,
        `${summary}\n\nEmail: ${EMAIL}`
      );
    } else if (target === 'copy') {
      navigator.clipboard
        ?.writeText(summary)
        .then(() => setChannel('copy'))
        .catch(() => setStatus('error'));
    }

    setChannel(target === 'copy' ? 'copy' : target);
    setStatus('sent');
    if (summaryRef.current) summaryRef.current.focus();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('idle');
      return;
    }
    // Default channel is WhatsApp, the fastest route for most buyers.
    deliver('whatsapp');
  }

  const field = (name) => ({
    name,
    id: `q-${name}`,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `q-${name}-error` : undefined,
  });

  return (
    <form className="quote" id="bulk-order" onSubmit={handleSubmit} noValidate>
      <div className="quote__grid">
        <div className="field">
          <label className="field__label" htmlFor="q-name">
            Your name <span className="field__req" aria-hidden="true">*</span>
          </label>
          <input className="field__input" type="text" ref={firstFieldRef} autoComplete="name" placeholder="Full name" {...field('name')} />
          {errors.name && (
            <p className="field__error" id="q-name-error">
              {errors.name}
            </p>
          )}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="q-company">
            Company name
          </label>
          <input className="field__input" type="text" autoComplete="organization" placeholder="Company (optional)" {...field('company')} />
        </div>

        <div className="field">
          <label className="field__label" htmlFor="q-email">
            Email <span className="field__req" aria-hidden="true">*</span>
          </label>
          <input className="field__input" type="email" autoComplete="email" placeholder="you@company.com" {...field('email')} />
          {errors.email && (
            <p className="field__error" id="q-email-error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="q-phone">
            Phone / WhatsApp
          </label>
          <input className="field__input" type="tel" autoComplete="tel" placeholder="+00 000 0000000" {...field('phone')} />
        </div>

        <div className="field">
          <label className="field__label" htmlFor="q-country">
            Destination country <span className="field__req" aria-hidden="true">*</span>
          </label>
          <input className="field__input" type="text" autoComplete="country-name" placeholder="Country" {...field('country')} />
          {errors.country && (
            <p className="field__error" id="q-country-error">
              {errors.country}
            </p>
          )}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="q-product">
            Product required <span className="field__req" aria-hidden="true">*</span>
          </label>
          <input
            className="field__input"
            list="quote-product-options"
            type="text"
            placeholder="e.g. Dehydrated Onion Powder"
            {...field('product')}
          />
          <datalist id="quote-product-options">
            {products.map((p) => (
              <option key={p.id} value={p.name} />
            ))}
          </datalist>
          {errors.product && (
            <p className="field__error" id="q-product-error">
              {errors.product}
            </p>
          )}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="q-quantity">
            Approx. quantity <span className="field__req" aria-hidden="true">*</span>
          </label>
          <input className="field__input" type="text" inputMode="decimal" placeholder="e.g. 5" {...field('quantity')} />
          {errors.quantity && (
            <p className="field__error" id="q-quantity-error">
              {errors.quantity}
            </p>
          )}
        </div>

        <div className="field">
          <label className="field__label" htmlFor="q-unit">
            Unit
          </label>
          <select className="field__input field__select" {...field('unit')}>
            {UNITS.map((unit, i) => (
              <option key={`${unit}-${i}`} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <div className="field field--full">
          <label className="field__label" htmlFor="q-message">
            Additional requirements
          </label>
          <textarea
            className="field__input field__textarea"
            rows={4}
            placeholder="Packaging preference, destination port, specifications, documentation needs, target timeline - anything we should know."
            {...field('message')}
          />
        </div>
      </div>

      {status === 'sent' && (
        <div className="quote__done" role="status" tabIndex={-1} ref={summaryRef}>
          <span className="quote__done-icon" aria-hidden="true">
            <Icon name="check" size={18} />
          </span>
          <div>
            <strong>
              {channel === 'copy'
                ? 'Enquiry copied to your clipboard'
                : channel === 'email'
                  ? 'Your email client is opening'
                  : 'WhatsApp is opening with your enquiry'}
            </strong>
            <p>
              Your details are ready to send. If nothing opened, use the buttons below or copy the
              enquiry text.
            </p>
          </div>
        </div>
      )}

      <div className="quote__actions">
        <button type="submit" className="btn btn--accent quote__submit">
          <Icon name="whatsapp" size={19} />
          Send Enquiry via WhatsApp
        </button>
        <button type="button" className="btn btn--ghost" onClick={() => deliver('email')}>
          <Icon name="mail" size={18} />
          Send via Email
        </button>
        <button type="button" className="btn btn--ghost" onClick={() => deliver('copy')}>
          <Icon name="clipboard" size={18} />
          Copy Enquiry
        </button>
      </div>

      <p className="quote__foot">
        <Icon name="shield" size={16} />
        We use your details only to respond to this enquiry. No payment or registration is required
        to receive a quotation.
      </p>

      <aside className="quote__checklist" aria-label="Information that helps us quote accurately">
        <h3 className="quote__checklist-title">
          <Icon name="clipboard" size={18} />
          Helpful to include
        </h3>
        <ul>
          {bulkOrderChecklist.map((item) => (
            <li key={item}>
              <span className="quote__check" aria-hidden="true">
                <Icon name="check" size={12} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {product && (
        <button type="button" className="quote__clear" onClick={clearPrefill}>
          Clear pre-filled product
        </button>
      )}
    </form>
  );
}

export default QuoteForm;
