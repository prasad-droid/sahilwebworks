import { useEffect, useRef, useState } from 'react'
import { company, formEndpoint } from '../data/siteData'
import { ENQUIRY_EVENT } from '../utils/enquiry'
import Icon from './Icons'
import '../styles/EnquiryForm.css'

const initialState = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  quantity: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your business email.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.phone.trim()) errors.phone = 'Please enter a contact number.'
  if (!values.product.trim()) errors.product = 'Please tell us which product or category you need.'
  return errors
}

export default function EnquiryForm() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error | unconfigured
  const [statusMessage, setStatusMessage] = useState('')
  const submittingRef = useRef(false)

  useEffect(() => {
    const handler = (event) => {
      const product = event.detail?.product
      if (!product) return
      setValues((prev) => ({ ...prev, product }))
      setStatus((prev) => (prev === 'success' ? 'idle' : prev))
    }
    window.addEventListener(ENQUIRY_EVENT, handler)
    return () => window.removeEventListener(ENQUIRY_EVENT, handler)
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
    if (status === 'success' || status === 'error' || status === 'unconfigured') {
      setStatus('idle')
      setStatusMessage('')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submittingRef.current) return

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      setStatusMessage('Please correct the highlighted fields and try again.')
      const firstField = Object.keys(nextErrors)[0]
      document.getElementById(`enquiry-${firstField}`)?.focus()
      return
    }

    if (!formEndpoint) {
      setStatus('unconfigured')
      setStatusMessage(
        'This form is not yet connected to a submission service. Your details have not been sent. Please use the email, phone or WhatsApp options below to send your enquiry.'
      )
      return
    }

    submittingRef.current = true
    setStatus('submitting')
    setStatusMessage('')

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          company: company.name,
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) throw new Error(`Request failed with status ${response.status}`)

      setStatus('success')
      setStatusMessage(
        'Thank you. Your enquiry has been received and we will get back to you shortly.'
      )
      setValues(initialState)
    } catch {
      setStatus('error')
      setStatusMessage(
        'Sorry, your enquiry could not be sent right now. Please try again or contact us directly using the details below.'
      )
    } finally {
      submittingRef.current = false
    }
  }

  const renderField = ({ label, name, type = 'text', required, autoComplete, placeholder, textarea }) => {
    const fieldId = `enquiry-${name}`
    const hasError = Boolean(errors[name])
    const Tag = textarea ? 'textarea' : 'input'
    return (
      <div className={`field ${hasError ? 'field--error' : ''} ${textarea ? 'field--full' : ''}`}>
        <label htmlFor={fieldId}>
          {label}
          {required && <span className="field__req" aria-hidden="true">*</span>}
        </label>
        <Tag
          id={fieldId}
          name={name}
          type={textarea ? undefined : type}
          value={values[name]}
          onChange={handleChange}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? `${fieldId}-error` : undefined}
          rows={textarea ? 5 : undefined}
        />
        {hasError && (
          <span className="field__error" id={`${fieldId}-error`} role="alert">
            {errors[name]}
          </span>
        )}
      </div>
    )
  }

  return (
    <section className="section section--navy enquiry" id="enquiry" aria-labelledby="enquiry-title">
      <div className="container">
        <div className="enquiry__grid">
          <div className="enquiry__intro reveal">
            <p className="eyebrow">Product Enquiry</p>
            <h2 className="section-title" id="enquiry-title">
              Enquire About Our Products
            </h2>
            <p className="section-subtitle">
              Looking for engineering goods for your business? Contact GLOBAL ENTERPRISES to
              discuss your requirements and request product information.
            </p>

            <ul className="enquiry__benefits">
              <li>
                <Icon name="response" size={20} />
                Share your product and quantity requirements
              </li>
              <li>
                <Icon name="coordination" size={20} />
                Discuss specifications and availability
              </li>
              <li>
                <Icon name="globe" size={20} />
                Enquiries welcome from customers worldwide
              </li>
            </ul>

            <div className="enquiry__direct">
              <a href={`mailto:${company.email}`} className="enquiry__direct-link">
                <Icon name="mail" size={18} />
                {company.email}
              </a>
              <a href={`tel:${company.phoneIntl}`} className="enquiry__direct-link">
                <Icon name="phone" size={18} />
                +91 {company.phone}
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="enquiry__direct-link"
              >
                <Icon name="whatsapp" size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="enquiry__card reveal delay-1">
            <form className="enquiry__form" onSubmit={handleSubmit} noValidate>
              <div className="enquiry__form-head">
                <h3>Send Your Enquiry</h3>
                <p>
                  Fields marked <span className="field__req" aria-hidden="true">*</span> are
                  required.
                </p>
              </div>

              <div className="enquiry__fields">
                {renderField({
                  label: 'Full Name',
                  name: 'fullName',
                  required: true,
                  autoComplete: 'name',
                  placeholder: 'Your full name',
                })}
                {renderField({
                  label: 'Company Name',
                  name: 'companyName',
                  autoComplete: 'organization',
                  placeholder: 'Your company',
                })}
                {renderField({
                  label: 'Business Email',
                  name: 'email',
                  type: 'email',
                  required: true,
                  autoComplete: 'email',
                  placeholder: 'name@company.com',
                })}
                {renderField({
                  label: 'Phone Number',
                  name: 'phone',
                  type: 'tel',
                  required: true,
                  autoComplete: 'tel',
                  placeholder: 'Your contact number',
                })}
                {renderField({
                  label: 'Country',
                  name: 'country',
                  autoComplete: 'country-name',
                  placeholder: 'Your country',
                })}
                {renderField({
                  label: 'Product or Category Required',
                  name: 'product',
                  required: true,
                  placeholder: 'e.g. product name or category',
                })}
                {renderField({
                  label: 'Quantity Required',
                  name: 'quantity',
                  placeholder: 'Approximate quantity',
                })}
                {renderField({
                  label: 'Message or Product Requirements',
                  name: 'message',
                  textarea: true,
                  placeholder: 'Describe your requirement, specifications or any questions',
                })}
              </div>

              <div className="enquiry__form-foot">
                <button
                  type="submit"
                  className="btn btn--primary btn--lg btn--block"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Submit Enquiry'}
                  {status !== 'submitting' && (
                    <Icon name="arrowRight" size={18} className="icon-trailing" />
                  )}
                </button>

                <p className="enquiry__privacy">
                  <Icon name="check" size={15} />
                  We use your details only to respond to your enquiry.
                </p>
              </div>

              {status !== 'idle' && status !== 'submitting' && (
                <div
                  className={`enquiry__status enquiry__status--${status}`}
                  role={status === 'success' ? 'status' : 'alert'}
                >
                  <Icon
                    name={status === 'success' ? 'check' : 'response'}
                    size={18}
                  />
                  <span>{statusMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
