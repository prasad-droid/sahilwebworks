import { useEffect, useRef, useState } from 'react'
import { products } from '../data/products.js'
import { enquiryTypes, site, whatsappMessages } from '../data/site.js'
import { IconArrow, IconWhatsApp } from './Icons.jsx'

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  country: '',
  enquiryType: '',
  product: '',
  message: '',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const productOptions = products.map((p) => p.name)

export default function EnquiryForm() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const nameRef = useRef(null)

  useEffect(() => {
    const onEnquiry = (event) => {
      const detail = event.detail || {}
      setForm((prev) => ({
        ...prev,
        enquiryType: detail.enquiryType ?? prev.enquiryType,
        product: detail.product ?? prev.product,
      }))
      setStatus('idle')
      window.setTimeout(() => nameRef.current?.focus(), 500)
    }
    window.addEventListener('rasavaani:enquiry', onEnquiry)
    return () => window.removeEventListener('rasavaani:enquiry', onEnquiry)
  }, [])

  const update = (field) => (event) => {
    const { value } = event.target
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your full name.'
    if (!form.email.trim()) next.email = 'Please enter your email address.'
    else if (!EMAIL_RE.test(form.email.trim()))
      next.email = 'Please enter a valid email address.'
    if (!form.message.trim())
      next.message = 'Please tell us a little about your enquiry.'
    setErrors(next)
    return next
  }

  const composeMessage = () => {
    const lines = [
      'Hello Rasavaani,',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.country ? `Country: ${form.country}` : null,
      `Enquiry type: ${form.enquiryType || 'General Enquiry'}`,
      form.product ? `Product of interest: ${form.product}` : null,
      '',
      form.message,
    ]
    return lines.filter(Boolean).join('\n')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const next = validate()
    if (Object.keys(next).length > 0) {
      setStatus('error')
      const firstField = Object.keys(next)[0]
      const field = document.querySelector(`[name="${firstField}"]`)
      field?.focus()
      return
    }

    const subject = `Rasavaani Enquiry${
      form.enquiryType ? ` — ${form.enquiryType}` : ''
    }${form.product ? ` · ${form.product}` : ''}`

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(composeMessage())}`

    setStatus('fallback')
    window.location.href = mailto
  }

  const handleWhatsApp = () => {
    const next = validate()
    if (Object.keys(next).length > 0) {
      setStatus('error')
      const firstField = Object.keys(next)[0]
      document.querySelector(`[name="${firstField}"]`)?.focus()
      return
    }
    const link = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      `${whatsappMessages.b2b}\n\n${composeMessage()}`,
    )}`
    setStatus('fallback')
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <form className="enquiry" onSubmit={handleSubmit} noValidate>
      <div className="enquiry__row">
        <div className="field">
          <label htmlFor="enq-name">Full name *</label>
          <input
            id="enq-name"
            name="name"
            type="text"
            ref={nameRef}
            value={form.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'enq-name-error' : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <span className="field__error" id="enq-name-error" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="field">
          <label htmlFor="enq-email">Email address *</label>
          <input
            id="enq-email"
            name="email"
            type="email"
            value={form.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'enq-email-error' : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <span className="field__error" id="enq-email-error" role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="enquiry__row">
        <div className="field">
          <label htmlFor="enq-phone">Phone number</label>
          <input
            id="enq-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            autoComplete="tel"
          />
        </div>

        <div className="field">
          <label htmlFor="enq-country">Country</label>
          <input
            id="enq-country"
            name="country"
            type="text"
            value={form.country}
            onChange={update('country')}
            autoComplete="country-name"
          />
        </div>
      </div>

      <div className="enquiry__row">
        <div className="field">
          <label htmlFor="enq-type">Enquiry type</label>
          <select
            id="enq-type"
            name="enquiryType"
            value={form.enquiryType}
            onChange={update('enquiryType')}
          >
            <option value="">Select an enquiry type</option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="enq-product">Product of interest</label>
          <select
            id="enq-product"
            name="product"
            value={form.product}
            onChange={update('product')}
          >
            <option value="">Select a product or category</option>
            {productOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
            <option value="Other">Other / Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="enq-message">Message *</label>
        <textarea
          id="enq-message"
          name="message"
          rows="5"
          value={form.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'enq-message-error' : undefined}
        />
        {errors.message && (
          <span className="field__error" id="enq-message-error" role="alert">
            {errors.message}
          </span>
        )}
      </div>

      <div className="btn-group enquiry__actions">
        <button type="submit" className="btn btn--primary">
          Send Enquiry
          <IconArrow className="btn__icon" />
        </button>
        <button
          type="button"
          className="btn btn--outline enquiry__wa"
          onClick={handleWhatsApp}
        >
          <IconWhatsApp className="enquiry__wa-icon" />
          Send via WhatsApp
        </button>
      </div>

      {status === 'fallback' && (
        <p className="enquiry__notice" role="status">
          We&rsquo;ve opened your email app (or WhatsApp) with your enquiry
          prepared. Please press send there to reach us. If nothing opened,
          email us at{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> or message us on
          WhatsApp at {site.phoneDisplay}.
        </p>
      )}

      {status === 'error' && (
        <p className="enquiry__notice enquiry__notice--error" role="alert">
          Please complete the highlighted fields before sending.
        </p>
      )}
    </form>
  )
}
