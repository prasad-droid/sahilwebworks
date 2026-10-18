import { useState } from 'react';
import { products } from '../data/data';
import Icon from './Icon';
import '../styles/contact.css';

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product: 'Gir Cow Ghee',
  quantity: '',
  message: '',
};

export default function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your full name';
    if (!form.email.trim()) next.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Please enter a valid email address';
    if (!form.phone.trim()) next.phone = 'Please enter your phone or WhatsApp number';
    if (!form.country.trim()) next.country = 'Please enter your country';
    if (!form.product) next.product = 'Please select a product';
    if (!form.message.trim()) next.message = 'Please enter a short message';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="quote-form">
      {submitted ? (
        <div className="quote-form__success" role="status">
          <span className="quote-form__success-icon">
            <Icon name="check" size={36} />
          </span>
          <h3 className="quote-form__success-title">Enquiry Received</h3>
          <p className="quote-form__success-text">
            Thank you, {form.name.split(' ')[0]}. Your enquiry has been noted and our
            team will get back to you shortly. For faster assistance, reach us on
            WhatsApp — we&apos;d love to connect.
          </p>
          <button
            className="btn btn--primary"
            onClick={() => {
              setSubmitted(false);
              setForm(initialForm);
            }}
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form className="quote-form__form" onSubmit={handleSubmit} noValidate>
          <div className="quote-form__row">
            <div className="quote-form__field">
              <label htmlFor="name" className="quote-form__label">
                Full Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={`quote-form__input ${errors.name ? 'is-error' : ''}`}
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <span id="name-error" className="quote-form__error">{errors.name}</span>
              )}
            </div>

            <div className="quote-form__field">
              <label htmlFor="company" className="quote-form__label">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="quote-form__input"
                placeholder="Your company (optional)"
                value={form.company}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="quote-form__row">
            <div className="quote-form__field">
              <label htmlFor="email" className="quote-form__label">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`quote-form__input ${errors.email ? 'is-error' : ''}`}
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span id="email-error" className="quote-form__error">{errors.email}</span>
              )}
            </div>

            <div className="quote-form__field">
              <label htmlFor="phone" className="quote-form__label">
                Phone / WhatsApp <span aria-hidden="true">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={`quote-form__input ${errors.phone ? 'is-error' : ''}`}
                placeholder="+91 ..."
                value={form.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <span id="phone-error" className="quote-form__error">{errors.phone}</span>
              )}
            </div>
          </div>

          <div className="quote-form__row">
            <div className="quote-form__field">
              <label htmlFor="country" className="quote-form__label">
                Country <span aria-hidden="true">*</span>
              </label>
              <input
                id="country"
                name="country"
                type="text"
                className={`quote-form__input ${errors.country ? 'is-error' : ''}`}
                placeholder="Your country"
                value={form.country}
                onChange={handleChange}
                aria-invalid={!!errors.country}
                aria-describedby={errors.country ? 'country-error' : undefined}
              />
              {errors.country && (
                <span id="country-error" className="quote-form__error">{errors.country}</span>
              )}
            </div>

            <div className="quote-form__field">
              <label htmlFor="product" className="quote-form__label">
                Product Interested In <span aria-hidden="true">*</span>
              </label>
              <select
                id="product"
                name="product"
                className={`quote-form__input ${errors.product ? 'is-error' : ''}`}
                value={form.product}
                onChange={handleChange}
                aria-invalid={!!errors.product}
                aria-describedby={errors.product ? 'product-error' : undefined}
              >
                {products.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
              {errors.product && (
                <span id="product-error" className="quote-form__error">{errors.product}</span>
              )}
            </div>
          </div>

          <div className="quote-form__field">
            <label htmlFor="quantity" className="quote-form__label">Required Quantity</label>
            <input
              id="quantity"
              name="quantity"
              type="text"
              className="quote-form__input"
              placeholder="e.g. 100 kg / pallets / containers"
              value={form.quantity}
              onChange={handleChange}
            />
          </div>

          <div className="quote-form__field">
            <label htmlFor="message" className="quote-form__label">
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className={`quote-form__input quote-form__textarea ${errors.message ? 'is-error' : ''}`}
              placeholder="Tell us about your requirement..."
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span id="message-error" className="quote-form__error">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="btn btn--primary btn--block quote-form__submit">
            Send Enquiry
          </button>
          <p className="quote-form__note">
            By submitting, you agree to be contacted regarding your enquiry. This form is
            client-side only and can be connected to a form service later.
          </p>
        </form>
      )}
    </div>
  );
}