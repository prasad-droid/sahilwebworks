import { useEffect, useRef, useState } from 'react'
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { company } from '../data/siteData'
import { getMailtoUrl, getWhatsAppUrl } from '../utils/links'
import '../styles/EnquiryForm.css'

const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT?.trim() || ''

const initialValues = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product: 'Frozen French Fries',
  specifications: '',
  quantity: '',
  packaging: '',
  destination: '',
  message: '',
}

const productOptions = [
  'Frozen French Fries',
  'Agricultural Products',
  'Processed Food',
  'Frozen Food',
  'Spices',
  'Other food requirement',
]

const requiredFields = [
  'fullName',
  'company',
  'email',
  'phone',
  'country',
  'product',
  'quantity',
  'destination',
]

function validate(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.'
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Please enter at least 2 characters.'
  }

  if (!values.company.trim()) {
    errors.company = 'Please enter your company name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your business email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone or WhatsApp number.'
  } else if (values.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Please include the country code and full number.'
  }

  if (!values.country.trim()) {
    errors.country = 'Please enter your country.'
  }

  if (!values.product) {
    errors.product = 'Please select a product.'
  }

  if (!values.quantity.trim()) {
    errors.quantity = 'Please share an estimated quantity or container requirement.'
  }

  if (!values.destination.trim()) {
    errors.destination = 'Please enter the destination port or city.'
  }

  return errors
}

function buildEnquiryText(values) {
  return [
    'Export enquiry — Shakti Global Exim',
    '',
    `Full name: ${values.fullName}`,
    `Company: ${values.company}`,
    `Business email: ${values.email}`,
    `Phone / WhatsApp: ${values.phone}`,
    `Country: ${values.country}`,
    `Product required: ${values.product}`,
    `Cut / Specifications: ${values.specifications || 'Not specified'}`,
    `Quantity / Container: ${values.quantity}`,
    `Packaging: ${values.packaging || 'Not specified'}`,
    `Destination port / city: ${values.destination}`,
    '',
    'Message:',
    values.message || 'No additional message.',
  ].join('\n')
}

export default function EnquiryForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [prepared, setPrepared] = useState(null)
  const [copied, setCopied] = useState(false)
  const formRef = useRef(null)
  const resultRef = useRef(null)
  const copyTimerRef = useRef(null)

  useEffect(() => {
    const onSelectProduct = (event) => {
      const product = event.detail?.product
      if (!product) return

      setValues((current) => ({ ...current, product }))
      setErrors((current) => {
        if (!current.product) return current
        const next = { ...current }
        delete next.product
        return next
      })
      setStatus('idle')
      setPrepared(null)
    }

    window.addEventListener('sge:select-product', onSelectProduct)
    return () =>
      window.removeEventListener('sge:select-product', onSelectProduct)
  }, [])

  useEffect(() => {
    if (status === 'ready' || status === 'success' || status === 'error') {
      resultRef.current?.focus()
    }
  }, [status])

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))

    if (status === 'ready' || status === 'error') {
      setStatus('idle')
      setStatusMessage('')
      setPrepared(null)
    }

    if (errors[name]) {
      setErrors((current) => {
        const next = { ...current }
        delete next[name]
        return next
      })
    }
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    if (!errors[name] && !requiredFields.includes(name)) return

    const fieldErrors = validate({ ...values, [name]: value })
    if (fieldErrors[name]) {
      setErrors((current) => ({ ...current, [name]: fieldErrors[name] }))
    }
  }

  const prepareOfflineEnquiry = (currentValues) => {
    const text = buildEnquiryText(currentValues)
    const subject = `Export enquiry — ${currentValues.product} — ${currentValues.company}`
    setPrepared({
      mailto: getMailtoUrl(subject, text),
      whatsapp: getWhatsAppUrl(text),
      text,
    })
    setStatus('ready')
    setStatusMessage(
      'Your enquiry is prepared. Send it by email or WhatsApp to complete it.',
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (status === 'submitting') return

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0]
      formRef.current
        ?.querySelector(`[name="${firstField}"]`)
        ?.focus()
      return
    }

    if (!formEndpoint) {
      prepareOfflineEnquiry(values)
      return
    }

    setStatus('submitting')
    setStatusMessage('Sending your enquiry…')
    setPrepared(null)

    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 15000)

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          subject: `Export enquiry — ${values.product} — ${values.company}`,
          submittedAt: new Date().toISOString(),
          source: 'Shakti Global Exim website',
        }),
        signal: controller.signal,
      })

      window.clearTimeout(timeout)

      if (!response.ok) {
        throw new Error(`The form endpoint returned ${response.status}.`)
      }

      setStatus('success')
      setStatusMessage(
        'Your enquiry has been sent. We will review the details and respond using the contact information provided.',
      )
    } catch (error) {
      window.clearTimeout(timeout)
      const timedOut = error.name === 'AbortError'
      setStatus('error')
      setStatusMessage(
        timedOut
          ? 'The request took too long. Please try again, or send the enquiry by email or WhatsApp below.'
          : 'We could not send the enquiry from this browser. Please try again, or send the same details by email or WhatsApp below.',
      )
    }
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setStatus('idle')
    setStatusMessage('')
    setPrepared(null)
    setCopied(false)
    window.setTimeout(() => formRef.current?.querySelector('input')?.focus(), 0)
  }

  const copyEnquiry = async () => {
    if (!prepared) return

    try {
      await navigator.clipboard.writeText(prepared.text)
      setCopied(true)
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
      copyTimerRef.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setStatusMessage(
        'Copying was blocked by the browser. Please select the email or WhatsApp option to send your enquiry.',
      )
    }
  }

  const fieldError = (name) =>
    errors[name] ? (
      <p className="field__error" id={`${name}-error`}>
        <AlertCircle size={12} aria-hidden="true" />
        {errors[name]}
      </p>
    ) : null

  const describedBy = (name) => (errors[name] ? `${name}-error` : undefined)

  const mailtoForFallback = getMailtoUrl(
    `Export enquiry — ${values.product || 'Product'} — ${values.company || 'Buyer'}`,
    buildEnquiryText(values),
  )

  return (
    <section className="section enquiry" id="quote" aria-labelledby="quote-title">
      <div className="container enquiry__inner">
        <Reveal className="enquiry__aside">
          <SectionHeading
            id="quote-title"
            eyebrow="Request a Quote"
            title="Tell us what you need. We’ll take it from there."
            description="Share your product, specifications, quantity and destination. The more detail you provide, the more relevant our response can be."
            light
          />

          <ol className="enquiry__steps">
            <li>
              <span>01</span>
              Share your requirement
            </li>
            <li>
              <span>02</span>
              We review the details
            </li>
            <li>
              <span>03</span>
              We respond with next steps
            </li>
          </ol>

          <div className="enquiry__direct">
            <p className="enquiry__direct-label">Prefer a direct conversation?</p>
            <a href={company.phoneHref}>
              <Phone size={15} aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            <a href={company.emailHref}>
              <Mail size={15} aria-hidden="true" />
              {company.email}
            </a>
            <a
              href={getWhatsAppUrl(
                'Hello Shakti Global Exim, I would like to discuss a product requirement and request a quotation.',
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} aria-hidden="true" />
              WhatsApp enquiry
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>

          <p className="enquiry__aside-note">
            Your details are used to respond to this enquiry. Please include a
            reachable email address and phone number.
          </p>
        </Reveal>

        <Reveal className="enquiry__form-card" delay={80}>
          <div className="enquiry__form-head">
            <div>
              <p className="enquiry__form-eyebrow">Export enquiry form</p>
              <h3>Product &amp; quotation details</h3>
            </div>
            <span className="enquiry__required-note">
              <span aria-hidden="true">*</span> Required
            </span>
          </div>

          {status === 'success' ? (
            <div
              className="enquiry__result enquiry__result--success"
              ref={resultRef}
              tabIndex="-1"
              role="status"
              aria-live="polite"
            >
              <span className="enquiry__result-icon" aria-hidden="true">
                <CheckCircle2 size={26} />
              </span>
              <h4>Enquiry sent</h4>
              <p>{statusMessage}</p>
              <div className="enquiry__result-actions">
                <button
                  type="button"
                  className="btn btn--dark"
                  onClick={resetForm}
                >
                  Send another enquiry
                </button>
                <a
                  href={getWhatsAppUrl(
                    'Hello Shakti Global Exim, I have just submitted an enquiry through your website.',
                  )}
                  className="btn btn--outline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  WhatsApp us
                </a>
              </div>
            </div>
          ) : (
            <form
              className="enquiry__form"
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="enquiry__row">
                <div className={`field ${errors.fullName ? 'has-error' : ''}`}>
                  <label htmlFor="fullName">
                    Full name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={describedBy('fullName')}
                    placeholder="Your full name"
                  />
                  {fieldError('fullName')}
                </div>

                <div className={`field ${errors.company ? 'has-error' : ''}`}>
                  <label htmlFor="company">
                    Company <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.company)}
                    aria-describedby={describedBy('company')}
                    placeholder="Company name"
                  />
                  {fieldError('company')}
                </div>
              </div>

              <div className="enquiry__row">
                <div className={`field ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email">
                    Business email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={describedBy('email')}
                    placeholder="name@company.com"
                  />
                  {fieldError('email')}
                </div>

                <div className={`field ${errors.phone ? 'has-error' : ''}`}>
                  <label htmlFor="phone">
                    Phone / WhatsApp <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={describedBy('phone')}
                    placeholder="+91 00000 00000"
                  />
                  {fieldError('phone')}
                </div>
              </div>

              <div className="enquiry__row">
                <div className={`field ${errors.country ? 'has-error' : ''}`}>
                  <label htmlFor="country">
                    Country <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country-name"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.country)}
                    aria-describedby={describedBy('country')}
                    placeholder="Destination country"
                  />
                  {fieldError('country')}
                </div>

                <div className={`field ${errors.product ? 'has-error' : ''}`}>
                  <label htmlFor="product">
                    Product required <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={values.product}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.product)}
                    aria-describedby={describedBy('product')}
                  >
                    {productOptions.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                  {fieldError('product')}
                </div>
              </div>

              <div className="enquiry__row">
                <div className="field">
                  <label htmlFor="cutSpecifications">Cut / Specifications</label>
                  <input
                    id="cutSpecifications"
                    name="specifications"
                    type="text"
                    value={values.specifications}
                    onChange={handleChange}
                    placeholder="e.g. 9 mm cut"
                  />
                </div>

                <div className={`field ${errors.quantity ? 'has-error' : ''}`}>
                  <label htmlFor="quantity">
                    Quantity / Container <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={values.quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.quantity)}
                    aria-describedby={describedBy('quantity')}
                    placeholder="e.g. 1 x 20 ft container"
                  />
                  {fieldError('quantity')}
                </div>
              </div>

              <div className="enquiry__row">
                <div className="field">
                  <label htmlFor="packaging">Packaging</label>
                  <input
                    id="packaging"
                    name="packaging"
                    type="text"
                    value={values.packaging}
                    onChange={handleChange}
                    placeholder="e.g. 10 kg packing"
                  />
                </div>

                <div className={`field ${errors.destination ? 'has-error' : ''}`}>
                  <label htmlFor="destination">
                    Destination port / city <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    autoComplete="address-level2"
                    value={values.destination}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(errors.destination)}
                    aria-describedby={describedBy('destination')}
                    placeholder="Port or city"
                  />
                  {fieldError('destination')}
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Share any additional requirements, target pricing, labelling or delivery expectations."
                />
              </div>

              {status === 'ready' && prepared && (
                <div
                  className="enquiry__result enquiry__result--ready"
                  ref={resultRef}
                  tabIndex="-1"
                  role="status"
                  aria-live="polite"
                >
                  <span className="enquiry__result-icon" aria-hidden="true">
                    <Mail size={24} />
                  </span>
                  <h4>Your enquiry is ready to send</h4>
                  <p>{statusMessage}</p>
                  <div className="enquiry__result-actions">
                    <a href={prepared.mailto} className="btn btn--dark">
                      <Mail size={15} aria-hidden="true" />
                      Open email
                    </a>
                    <a
                      href={prepared.whatsapp}
                      className="btn btn--outline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={15} aria-hidden="true" />
                      Send via WhatsApp
                    </a>
                    <button
                      type="button"
                      className="enquiry__copy"
                      onClick={copyEnquiry}
                    >
                      {copied ? (
                        <Check size={14} aria-hidden="true" />
                      ) : (
                        <Copy size={14} aria-hidden="true" />
                      )}
                      {copied ? 'Copied' : 'Copy details'}
                    </button>
                  </div>
                  <p className="enquiry__result-note">
                    Your enquiry is not sent until you complete it in your email
                    app or WhatsApp.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div
                  className="enquiry__result enquiry__result--error"
                  ref={resultRef}
                  tabIndex="-1"
                  role="alert"
                >
                  <span className="enquiry__result-icon" aria-hidden="true">
                    <AlertCircle size={24} />
                  </span>
                  <h4>We couldn’t send the form</h4>
                  <p>{statusMessage}</p>
                  <div className="enquiry__result-actions">
                    <a href={mailtoForFallback} className="btn btn--dark">
                      <Mail size={15} aria-hidden="true" />
                      Send by email
                    </a>
                    <a
                      href={getWhatsAppUrl(buildEnquiryText(values))}
                      className="btn btn--outline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={15} aria-hidden="true" />
                      Send via WhatsApp
                    </a>
                  </div>
                </div>
              )}

              <div className="enquiry__submit-row">
                <button
                  type="submit"
                  className="btn btn--primary enquiry__submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2
                        size={17}
                        className="enquiry__spinner"
                        aria-hidden="true"
                      />
                      Sending…
                    </>
                  ) : formEndpoint ? (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Send Enquiry
                    </>
                  ) : (
                    <>
                      <Send size={16} aria-hidden="true" />
                      Prepare Enquiry
                    </>
                  )}
                </button>
                <p>
                  {formEndpoint
                    ? 'Your enquiry is sent securely to our team for review.'
                    : 'We will prepare the details for email or WhatsApp, so you can review and send them yourself.'}
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
