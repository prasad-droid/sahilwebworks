import { useState } from 'react'
import { AlertCircle, ArrowRight, CheckCircle2, Mail, MessageCircle, Send } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { company, images, productInterestOptions } from '../data/siteData'
import { defaultWhatsappUrl } from '../utils/whatsapp'
import '../styles/Inquiry.css'

const initialForm = {
  fullName: '',
  companyName: '',
  email: '',
  country: '',
  phone: '',
  productInterest: '',
  quantity: '',
  requirements: '',
}

function validate(values) {
  const errors = {}

  if (!values.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!values.companyName.trim()) errors.companyName = 'Company name is required.'

  if (!values.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.country.trim()) errors.country = 'Country is required.'

  if (!values.phone.trim()) {
    errors.phone = 'Contact number is required.'
  } else if (!/^[+\d][\d\s()-]{6,18}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid contact number.'
  }

  if (!values.productInterest) errors.productInterest = 'Please select a product.'

  return errors
}

/**
 * No backend is configured yet. When `company.inquiryEndpoint` is set, the form
 * POSTs JSON and only reports success after a 2xx response. Otherwise it opens
 * a prefilled email in the visitor's mail client — the message says the email
 * is ready to send, never that it was already delivered.
 */
async function deliverInquiry(values) {
  if (company.inquiryEndpoint) {
    const response = await fetch(company.inquiryEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
    if (!response.ok) throw new Error('Inquiry delivery failed')
    return { kind: 'sent' }
  }

  const subject = `Flexible Cable Inquiry — ${values.companyName} — ${values.productInterest}`
  const body = [
    `Full Name: ${values.fullName}`,
    `Company Name: ${values.companyName}`,
    `Email Address: ${values.email}`,
    `Country: ${values.country}`,
    `Contact Number: ${values.phone}`,
    `Product Interested In: ${values.productInterest}`,
    `Required Quantity: ${values.quantity || 'Not specified'}`,
    '',
    'Message / Product Requirements:',
    values.requirements || 'None specified',
  ].join('\n')

  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return { kind: 'prepared' }
}

export default function Inquiry() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
    if (status) setStatus(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus(null)
      return
    }

    setSending(true)
    setStatus(null)

    try {
      const result = await deliverInquiry(values)
      setStatus(result)
      setValues(initialForm)
    } catch {
      setStatus({ kind: 'error' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section inquiry" id="quote">
      <div className="container inquiry__grid">
        <aside className="inquiry__aside" data-reveal="left">
          <SectionHeading
            eyebrow="Request a Quote"
            title="Let's Discuss Your Requirements"
            subtitle="Tell us what you need and our team will respond with the information you asked for."
          />

          <div className="inquiry__aside-image">
            <img
              src={images.inquiry}
              alt="Shipping containers at an international trade terminal"
              loading="lazy"
            />
          </div>

          <div className="inquiry__aside-contact">
            <a href={`mailto:${company.email}`}>
              <Mail size={17} aria-hidden="true" /> {company.email}
            </a>
            <a href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={17} aria-hidden="true" /> Send on WhatsApp instead
            </a>
          </div>
        </aside>

        <form className="inquiry__form" onSubmit={handleSubmit} noValidate data-reveal="right">
          <div className="inquiry__form-grid">
            <Field label="Full Name" name="fullName" required error={errors.fullName}>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={values.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                autoComplete="name"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
            </Field>

            <Field label="Company Name" name="companyName" required error={errors.companyName}>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={values.companyName}
                onChange={handleChange}
                placeholder="Your company"
                autoComplete="organization"
                aria-invalid={!!errors.companyName}
                aria-describedby={errors.companyName ? 'companyName-error' : undefined}
              />
            </Field>

            <Field label="Email Address" name="email" required error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="name@company.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
            </Field>

            <Field label="Country" name="country" required error={errors.country}>
              <input
                id="country"
                name="country"
                type="text"
                value={values.country}
                onChange={handleChange}
                placeholder="Your country"
                autoComplete="country-name"
                aria-invalid={!!errors.country}
                aria-describedby={errors.country ? 'country-error' : undefined}
              />
            </Field>

            <Field label="Contact Number" name="phone" required error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                placeholder="+00 00000 00000"
                autoComplete="tel"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
            </Field>

            <Field
              label="Product Interested In"
              name="productInterest"
              required
              error={errors.productInterest}
            >
              <select
                id="productInterest"
                name="productInterest"
                value={values.productInterest}
                onChange={handleChange}
                aria-invalid={!!errors.productInterest}
                aria-describedby={errors.productInterest ? 'productInterest-error' : undefined}
              >
                <option value="">Select a product</option>
                {productInterestOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Required Quantity" name="quantity">
              <input
                id="quantity"
                name="quantity"
                type="text"
                value={values.quantity}
                onChange={handleChange}
                placeholder="e.g. 1 container / 5 MT"
              />
            </Field>

            <Field label="Message / Product Requirements" name="requirements" full>
              <textarea
                id="requirements"
                name="requirements"
                rows="4"
                value={values.requirements}
                onChange={handleChange}
                placeholder="Tell us about your product requirements and destination market..."
              />
            </Field>
          </div>

          {Object.values(errors).some(Boolean) && (
            <p className="inquiry__error-summary" role="alert">
              <AlertCircle size={17} aria-hidden="true" />
              Please review the highlighted fields and try again.
            </p>
          )}

          {status?.kind === 'sent' && (
            <p className="inquiry__status inquiry__status--success" role="status">
              <CheckCircle2 size={18} aria-hidden="true" />
              Thank you — your inquiry has been sent. We will review your requirements and
              respond using the contact details you provided.
            </p>
          )}

          {status?.kind === 'prepared' && (
            <p className="inquiry__status inquiry__status--success" role="status">
              <Mail size={18} aria-hidden="true" />
              Your email app has opened with the inquiry ready to send. Please press send
              there to complete your request, or{' '}
              <a href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer">
                send it on WhatsApp
              </a>
              .
            </p>
          )}

          {status?.kind === 'error' && (
            <p className="inquiry__status inquiry__status--error" role="alert">
              <AlertCircle size={18} aria-hidden="true" />
              We could not send your inquiry right now. Please try again or contact us
              directly on{' '}
              <a href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              .
            </p>
          )}

          <button
            className="btn btn--primary btn--full inquiry__submit"
            type="submit"
            disabled={sending}
          >
            {sending ? 'Sending…' : 'Send Inquiry'}
            <Send size={17} aria-hidden="true" />
          </button>

          <p className="inquiry__form-note">
            Fields marked * are required. Your details are used only to respond to this
            inquiry.
          </p>
        </form>
      </div>
    </section>
  )
}

function Field({ label, name, required = false, full = false, error, children }) {
  return (
    <div className={`inquiry__field${full ? ' inquiry__field--full' : ''}${error ? ' has-error' : ''}`}>
      <label htmlFor={name}>
        {label} {required && <span aria-label="required">*</span>}
      </label>
      {children}
      {error && (
        <span className="inquiry__field-error" id={`${name}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  )
}
