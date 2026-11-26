import { useEffect, useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Lock, Mail, MessageCircle, Send, X } from 'lucide-react'
import { company } from '../data/siteData'
import { formConfig } from '../config/form'
import '../styles/QuoteForm.css'

const initialValues = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  quantity: '',
  specs: '',
  destination: '',
  additional: '',
  consent: false
}

const requiredFields = ['fullName', 'companyName', 'email', 'country', 'product']

function validate(values) {
  const errors = {}
  requiredFields.forEach((field) => {
    if (!values[field].trim()) errors[field] = 'This field is required.'
  })
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid business email address.'
  }
  if (!values.consent) errors.consent = 'Please accept the privacy notice to continue.'
  return errors
}

export default function QuoteForm({ defaultProduct }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error | notconnected
  const [serverMessage, setServerMessage] = useState('')

  useEffect(() => {
    if (defaultProduct) {
      setValues((prev) => ({ ...prev, product: defaultProduct }))
    }
  }, [defaultProduct])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
    if (name === 'consent') setErrors((prev) => ({ ...prev, consent: '' }))
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const fieldError = (name) => (touched[name] || status === 'error' ? errors[name] : errors[name])

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setStatus('idle')
    setServerMessage('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'submitting') return

    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched(
      Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    )

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      return
    }

    if (!formConfig.formEndpoint) {
      setStatus('notconnected')
      return
    }

    const payload = {
      fullName: values.fullName,
      companyName: values.companyName,
      email: values.email,
      phone: values.phone,
      country: values.country,
      product: values.product,
      quantity: values.quantity,
      specifications: values.specs,
      destinationPort: values.destination,
      additionalRequirements: values.additional,
      consent: values.consent,
      submittedAt: new Date().toISOString(),
      source: 'trans-aura-international-website'
    }

    setStatus('submitting')
    try {
      const res = await fetch(formConfig.formEndpoint, {
        method: formConfig.method || 'POST',
        headers: formConfig.headers || { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setServerMessage(
        'We could not submit your enquiry at the moment. Please try again shortly or contact us directly.'
      )
    }
  }

  const inputClass = (name) =>
    `quoteform__input${fieldError(name) ? ' quoteform__input--error' : ''}`

  return (
    <div className="quoteform__card">
      <div className="quoteform__head">
        <h3>Request a Quote</h3>
        <p>
          Looking to source industrial chemicals or other products from India? Share your
          requirements with Trans-Aura International, and our team can review your enquiry and
          discuss the next steps.
        </p>
      </div>

      {status === 'success' && (
        <div className="quoteform__status quoteform__status--success" role="status">
          <CheckCircle2 size={22} aria-hidden="true" />
          <div>
            <strong>Enquiry submitted successfully.</strong>
            <p>Thank you — our team will review your requirements and get back to you.</p>
          </div>
        </div>
      )}

      {status === 'notconnected' && (
        <div className="quoteform__status quoteform__status--info" role="status">
          <AlertCircle size={22} aria-hidden="true" />
          <div>
            <strong>This form is not connected yet.</strong>
            <p>
              The submission endpoint has not been configured, so this enquiry was not sent. Please
              contact us directly to share your requirements.
            </p>
            <div className="quoteform__status-actions">
              <a className="btn btn--primary btn--sm" href={company.emailHref}>
                <Mail size={15} aria-hidden="true" />
                Email Us
              </a>
              <a className="btn btn--outline btn--sm" href={company.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={15} aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {status === 'error' && serverMessage && (
        <div className="quoteform__status quoteform__status--error" role="alert">
          <X size={22} aria-hidden="true" />
          <p>{serverMessage}</p>
        </div>
      )}

      {status !== 'success' && status !== 'notconnected' && (
        <form className="quoteform__form" onSubmit={handleSubmit} noValidate>
          <div className="quoteform__grid">
            <div className="quoteform__field">
              <label htmlFor="fullName">
                Full Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                className={inputClass('fullName')}
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(fieldError('fullName'))}
                aria-describedby={fieldError('fullName') ? 'fullName-error' : undefined}
              />
              {fieldError('fullName') && (
                <span className="quoteform__error" id="fullName-error" role="alert">
                  {fieldError('fullName')}
                </span>
              )}
            </div>

            <div className="quoteform__field">
              <label htmlFor="companyName">
                Company Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                autoComplete="organization"
                placeholder="Your company"
                className={inputClass('companyName')}
                value={values.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(fieldError('companyName'))}
                aria-describedby={fieldError('companyName') ? 'companyName-error' : undefined}
              />
              {fieldError('companyName') && (
                <span className="quoteform__error" id="companyName-error" role="alert">
                  {fieldError('companyName')}
                </span>
              )}
            </div>

            <div className="quoteform__field">
              <label htmlFor="email">
                Business Email <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                className={inputClass('email')}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(fieldError('email'))}
                aria-describedby={fieldError('email') ? 'email-error' : undefined}
              />
              {fieldError('email') && (
                <span className="quoteform__error" id="email-error" role="alert">
                  {fieldError('email')}
                </span>
              )}
            </div>

            <div className="quoteform__field">
              <label htmlFor="phone">Phone / WhatsApp <span className="quoteform__opt">(optional)</span></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 00000 00000"
                className={inputClass('phone')}
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="quoteform__field">
              <label htmlFor="country">
                Country <span aria-hidden="true">*</span>
              </label>
              <input
                id="country"
                name="country"
                type="text"
                autoComplete="country-name"
                placeholder="Destination country"
                className={inputClass('country')}
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(fieldError('country'))}
                aria-describedby={fieldError('country') ? 'country-error' : undefined}
              />
              {fieldError('country') && (
                <span className="quoteform__error" id="country-error" role="alert">
                  {fieldError('country')}
                </span>
              )}
            </div>

            <div className="quoteform__field">
              <label htmlFor="product">
                Product / Chemical Required <span aria-hidden="true">*</span>
              </label>
              <input
                id="product"
                name="product"
                type="text"
                placeholder="e.g. Industrial chemical category"
                className={inputClass('product')}
                value={values.product}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(fieldError('product'))}
                aria-describedby={fieldError('product') ? 'product-error' : undefined}
              />
              {fieldError('product') && (
                <span className="quoteform__error" id="product-error" role="alert">
                  {fieldError('product')}
                </span>
              )}
            </div>

            <div className="quoteform__field">
              <label htmlFor="quantity">
                Quantity Required <span className="quoteform__opt">(optional)</span>
              </label>
              <input
                id="quantity"
                name="quantity"
                type="text"
                placeholder="e.g. 1 MT, 20 FT container"
                className={inputClass('quantity')}
                value={values.quantity}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="quoteform__field">
              <label htmlFor="specs">
                Product Specifications <span className="quoteform__opt">(optional)</span>
              </label>
              <input
                id="specs"
                name="specs"
                type="text"
                placeholder="Grade, purity, packaging, etc."
                className={inputClass('specs')}
                value={values.specs}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="quoteform__field">
              <label htmlFor="destination">
                Destination Port or City <span className="quoteform__opt">(optional)</span>
              </label>
              <input
                id="destination"
                name="destination"
                type="text"
                placeholder="Port, city or region"
                className={inputClass('destination')}
                value={values.destination}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="quoteform__field quoteform__field--wide">
              <label htmlFor="additional">
                Additional Requirements <span className="quoteform__opt">(optional)</span>
              </label>
              <textarea
                id="additional"
                name="additional"
                rows={4}
                placeholder="Any other details you would like to share."
                className={inputClass('additional')}
                value={values.additional}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="quoteform__consent">
            <label className={`quoteform__check${fieldError('consent') ? ' is-error' : ''}`}>
              <input
                type="checkbox"
                name="consent"
                checked={values.consent}
                onChange={handleChange}
                aria-invalid={Boolean(fieldError('consent'))}
              />
              <span>
                I agree that Trans-Aura International may use my details to respond to this enquiry,
                as described in the{' '}
                <a href="/privacy.html" onClick={(e) => e.preventDefault()} title="Privacy page coming soon">
                  Privacy Notice
                </a>
                .
              </span>
            </label>
            {fieldError('consent') && (
              <span className="quoteform__error" role="alert">
                {fieldError('consent')}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn--primary btn--lg quoteform__submit"
            disabled={status === 'submitting'}
            aria-busy={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <>
                <Loader2 size={18} className="quoteform__spin" aria-hidden="true" />
                Submitting…
              </>
            ) : (
              <>
                <Send size={18} aria-hidden="true" />
                Submit Business Enquiry
              </>
            )}
          </button>

          <p className="quoteform__privacy">
            <Lock size={13} aria-hidden="true" />
            Your information is used only to respond to this enquiry and is never shared with third
            parties for marketing.
          </p>
        </form>
      )}
    </div>
  )
}