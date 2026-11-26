import { forwardRef, useRef, useState } from 'react'
import { company } from '../data/company.js'
import { productOptions } from '../data/packaging.js'
import { Icon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const submitEnquiry = (payload) =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve({ ok: true, payload }), 1200)
  })

const initialValues = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  quantity: '',
  packaging: '',
  privateLabel: '',
  message: '',
}

const EnquiryForm = forwardRef(function EnquiryForm({ activeProduct, onProductSelect }, ref) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [sentProduct, setSentProduct] = useState(null)

  const innerRef = useRef(null)
  const resolvedRef = ref || innerRef

  const productValue = activeProduct || values.product

  const setField = (field) => (e) => {
    const value = e.target.value
    if (status === 'success') setStatus('idle')
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((errs) => ({ ...errs, [field]: undefined }))
  }

  const handleProductChange = (e) => {
    const value = e.target.value
    if (status === 'success') setStatus('idle')
    setValues((v) => ({ ...v, product: value }))
    onProductSelect(value)
    if (errors.product) setErrors((errs) => ({ ...errs, product: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!values.fullName.trim()) next.fullName = 'Please enter your full name.'
    if (!values.email.trim()) next.email = 'Please enter your email address.'
    else if (!EMAIL_RE.test(values.email.trim())) next.email = 'Please enter a valid email address.'
    if (!productValue) next.product = 'Please select a product.'
    if (!values.message.trim()) next.message = 'Please brief your requirement.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      const firstErrorField = Object.keys(errors)[0]
      if (firstErrorField) document.getElementById(`enquiry-${firstErrorField}`)?.focus()
      return
    }
    setStatus('loading')
    const product = productValue
    submitEnquiry({
      ...values,
      product,
      name: values.fullName.trim(),
      sentAt: new Date().toISOString(),
    })
      .then(() => {
        setSentProduct(product)
        setStatus('success')
        setValues(initialValues)
        setErrors({})
      })
      .catch(() => setStatus('error'))
  }

  const waLink = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    `Hello Aviyana Enterprises, I would like to enquire about${
      productValue ? ` ${productValue}` : ' your agricultural products'
    }.${values.quantity ? ` (Quantity: ${values.quantity})` : ''}`,
  )}`

  const inputClass = (field) =>
    `form__input${errors[field] ? ' form__input--error' : ''}`
  const msg = (field) =>
    errors[field] ? (
      <p className="form__error" id={`enquiry-${field}-error`} role="alert">
        {errors[field]}
      </p>
    ) : null

  return (
    <section className="enquiry section section--forest" id="enquiry" ref={resolvedRef}>
      <div className="container enquiry__grid">
        <Reveal className="enquiry__intro" variant="fade-right">
          <p className="eyebrow eyebrow--gold">Product Enquiry</p>
          <h2 className="enquiry__title">Tell Us What You Need</h2>
          <p className="enquiry__subtitle">
            Share your product requirement, quantity and destination. Our team
            will help you explore the right supply solution.
          </p>

          <div className="enquiry__points">
            <div className="enquiry__point">
              <Icon name="check" size={16} />
              Product-specific enquiry handling
            </div>
            <div className="enquiry__point">
              <Icon name="check" size={16} />
              B2B, bulk and export discussions
            </div>
            <div className="enquiry__point">
              <Icon name="check" size={16} />
              Private-label and packaging support
            </div>
          </div>

          <a href={waLink} target="_blank" rel="noreferrer" className="btn btn--outline-light btn--md">
            <Icon name="whatsapp" size={18} />
            Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal className="enquiry__panel" variant="fade-left" delay={140}>
          {status === 'success' ? (
            <div className="form-success" role="status">
              <span className="form-success__icon" aria-hidden="true">
                <Icon name="check" size={30} />
              </span>
              <h3 className="form-success__title">Enquiry received</h3>
              <p>
                Thank you — your{` ${sentProduct || ''}`} enquiry has been noted.
                The Aviyana Enterprises team will review your requirement and
                follow up with you.
              </p>
              <button
                type="button"
                className="btn btn--forest btn--md"
                onClick={() => setStatus('idle')}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="form__row">
                <div className="form__field">
                  <label className="form__label" htmlFor="enquiry-fullName" aria-required="true">
                    Full Name *
                  </label>
                  <input
                    id="enquiry-fullName"
                    className={inputClass('fullName')}
                    type="text"
                    value={values.fullName}
                    onChange={setField('fullName')}
                    autoComplete="name"
                    placeholder="Your full name"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'enquiry-fullName-error' : undefined}
                  />
                  {msg('fullName')}
                </div>
                <div className="form__field">
                  <label className="form__label" htmlFor="enquiry-companyName">
                    Company Name
                  </label>
                  <input
                    id="enquiry-companyName"
                    className={inputClass('companyName')}
                    type="text"
                    value={values.companyName}
                    onChange={setField('companyName')}
                    autoComplete="organization"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="form__row">
                <div className="form__field">
                  <label className="form__label" htmlFor="enquiry-email" aria-required="true">
                    Email *
                  </label>
                  <input
                    id="enquiry-email"
                    className={inputClass('email')}
                    type="email"
                    value={values.email}
                    onChange={setField('email')}
                    autoComplete="email"
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
                  />
                  {msg('email')}
                </div>
                <div className="form__field">
                  <label className="form__label" htmlFor="enquiry-phone">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="enquiry-phone"
                    className={inputClass('phone')}
                    type="tel"
                    value={values.phone}
                    onChange={setField('phone')}
                    autoComplete="tel"
                    placeholder="+91 ..."
                  />
                </div>
              </div>

              <div className="form__row">
                <div className="form__field">
                  <label className="form__label" htmlFor="enquiry-country">
                    Country
                  </label>
                  <input
                    id="enquiry-country"
                    className={inputClass('country')}
                    type="text"
                    value={values.country}
                    onChange={setField('country')}
                    autoComplete="country-name"
                    placeholder="Destination market"
                  />
                </div>
                <div className="form__field">
                  <label className="form__label" htmlFor="enquiry-quantity">
                    Required Quantity
                  </label>
                  <input
                    id="enquiry-quantity"
                    className={inputClass('quantity')}
                    type="text"
                    value={values.quantity}
                    onChange={setField('quantity')}
                    placeholder="e.g. 500 kg / 1 MT / container"
                  />
                </div>
              </div>

              <div className="form__row">
                <div className="form__field">
                  <label className="form__label" htmlFor="enquiry-product" aria-required="true">
                    Product Required *
                  </label>
                  <div className={`select-wrap${errors.product ? ' select-wrap--error' : ''}`}>
                    <select
                      id="enquiry-product"
                      className="form__select"
                      value={productValue}
                      onChange={handleProductChange}
                      aria-invalid={!!errors.product}
                      aria-describedby={errors.product ? 'enquiry-product-error' : undefined}
                    >
                      <option value="" disabled>
                        Select a product
                      </option>
                      {productOptions.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  {msg('product')}
                </div>
                <div className="form__field">
                  <label className="form__label" htmlFor="enquiry-packaging">
                    Packaging Requirement
                  </label>
                  <input
                    id="enquiry-packaging"
                    className={inputClass('packaging')}
                    type="text"
                    value={values.packaging}
                    onChange={setField('packaging')}
                    placeholder="e.g. bulk bag, pouch, jar"
                  />
                </div>
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="enquiry-privateLabel">
                  Private Label Requirement
                </label>
                <input
                  id="enquiry-privateLabel"
                  className={inputClass('privateLabel')}
                  type="text"
                  value={values.privateLabel}
                  onChange={setField('privateLabel')}
                  placeholder="e.g. private-label, customized packaging"
                />
              </div>

              <div className="form__field">
                <label className="form__label" htmlFor="enquiry-message" aria-required="true">
                  Message *
                </label>
                <textarea
                  id="enquiry-message"
                  className={inputClass('message')}
                  rows="4"
                  value={values.message}
                  onChange={setField('message')}
                  placeholder="Tell us about your requirement..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'enquiry-message-error' : undefined}
                />
                {msg('message')}
              </div>

              {status === 'error' && (
                <p className="form__banner" role="alert">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                className="btn btn--gold btn--lg btn--block"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <span className="spinner" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Product Enquiry
                    <Icon name="arrow" size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
})

export default EnquiryForm