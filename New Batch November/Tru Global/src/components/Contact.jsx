import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { company, productInterestOptions } from '../data/siteData'
import '../styles/Contact.css'

const initialForm = {
  fullName: '',
  companyName: '',
  email: '',
  country: '',
  phone: '',
  productInterest: '',
  quantity: '',
  packaging: '',
  requirements: '',
}

const requiredFields = ['fullName', 'companyName', 'email', 'country', 'phone', 'productInterest']

function validate(values) {
  const errors = {}

  if (!values.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!values.companyName.trim()) errors.companyName = 'Company name is required.'

  if (!values.email.trim()) {
    errors.email = 'Business email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.country.trim()) errors.country = 'Country is required.'

  if (!values.phone.trim()) {
    errors.phone = 'Contact number is required.'
  } else if (!/^[+\d][\d\s()-]{6,18}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid contact number.'
  }

  if (!values.productInterest) errors.productInterest = 'Please select a product of interest.'

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
    if (submitted) setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    // No backend credentials configured yet: hand the verified inquiry to the
    // buyer's own email client. Replace this block with a POST to your endpoint
    // when the form backend / email service is available.
    const subject = `Business Inquiry — ${values.companyName} — ${values.productInterest}`
    const body = [
      `Full Name: ${values.fullName}`,
      `Company Name: ${values.companyName}`,
      `Business Email: ${values.email}`,
      `Country: ${values.country}`,
      `Contact Number: ${values.phone}`,
      `Product Interest: ${values.productInterest}`,
      `Required Quantity: ${values.quantity || 'Not specified'}`,
      `Packaging Preference: ${values.packaging || 'Not specified'}`,
      '',
      'Additional Requirements:',
      values.requirements || 'None specified',
    ].join('\n')

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const whatsappHref = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Contact & Business Inquiry"
          title={<>Let's Build a <span className="highlight-word">Global Business Partnership.</span></>}
          subtitle="Looking for reliable Indian agricultural products, spices or food ingredients? Connect with Tru Source Global for product inquiries, bulk orders, quotations, private-label requirements and international sourcing partnerships."
        />

        <div className="contact__grid">
          <aside className="contact__info" data-reveal="left">
            <h3>Get in Touch</h3>
            <p className="contact__info-lead">
              Share your requirement and our team will respond with sourcing support tailored to your market.
            </p>

            <ul className="contact__details">
              <li>
                <span className="contact__detail-icon"><MapPin size={20} aria-hidden="true" /></span>
                <div><strong>Location</strong><span>{company.location}</span></div>
              </li>
              <li>
                <span className="contact__detail-icon"><Mail size={20} aria-hidden="true" /></span>
                <div><strong>Email</strong><a href={`mailto:${company.email}`}>{company.email}</a></div>
              </li>
              <li>
                <span className="contact__detail-icon"><Phone size={20} aria-hidden="true" /></span>
                <div><strong>WhatsApp / Contact</strong><a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a></div>
              </li>
            </ul>

            <a className="btn btn--outline contact__whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={17} aria-hidden="true" /> Chat on WhatsApp
            </a>

            <div className="contact__info-footer">
              <span>Tru Source Global</span>
              <strong>{company.tagline}</strong>
            </div>
          </aside>

          <form className="contact__form" onSubmit={handleSubmit} noValidate data-reveal="right">
            <div className="contact__form-grid">
              <Field label="Full Name" name="fullName" required error={errors.fullName}>
                <input id="fullName" name="fullName" type="text" value={values.fullName} onChange={handleChange} placeholder="Your full name" autoComplete="name" aria-invalid={!!errors.fullName} />
              </Field>

              <Field label="Company Name" name="companyName" required error={errors.companyName}>
                <input id="companyName" name="companyName" type="text" value={values.companyName} onChange={handleChange} placeholder="Your company" autoComplete="organization" aria-invalid={!!errors.companyName} />
              </Field>

              <Field label="Business Email" name="email" required error={errors.email}>
                <input id="email" name="email" type="email" value={values.email} onChange={handleChange} placeholder="name@company.com" autoComplete="email" aria-invalid={!!errors.email} />
              </Field>

              <Field label="Country" name="country" required error={errors.country}>
                <input id="country" name="country" type="text" value={values.country} onChange={handleChange} placeholder="Your country" autoComplete="country-name" aria-invalid={!!errors.country} />
              </Field>

              <Field label="Contact Number" name="phone" required error={errors.phone}>
                <input id="phone" name="phone" type="tel" value={values.phone} onChange={handleChange} placeholder="+00 00000 00000" autoComplete="tel" aria-invalid={!!errors.phone} />
              </Field>

              <Field label="Product Interest" name="productInterest" required error={errors.productInterest}>
                <select id="productInterest" name="productInterest" value={values.productInterest} onChange={handleChange} aria-invalid={!!errors.productInterest}>
                  <option value="">Select a product</option>
                  {productInterestOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </Field>

              <Field label="Required Quantity" name="quantity">
                <input id="quantity" name="quantity" type="text" value={values.quantity} onChange={handleChange} placeholder="e.g. 1 container / 5 MT" />
              </Field>

              <Field label="Packaging Preference" name="packaging">
                <input id="packaging" name="packaging" type="text" value={values.packaging} onChange={handleChange} placeholder="Bulk / customized / private label" />
              </Field>

              <Field label="Additional Requirements" name="requirements" full error={errors.requirements}>
                <textarea id="requirements" name="requirements" rows="4" value={values.requirements} onChange={handleChange} placeholder="Tell us about your specifications, destination market or any other requirement..." />
              </Field>
            </div>

            {Object.keys(errors).some((key) => errors[key]) && (
              <p className="contact__error-summary" role="alert">
                <AlertCircle size={17} aria-hidden="true" /> Please review the highlighted fields and try again.
              </p>
            )}

            {submitted && (
              <p className="contact__success" role="status">
                <CheckCircle2 size={18} aria-hidden="true" />
                Your email app has been opened with the inquiry ready to send. Please press send there to complete your request. You can also <a href={whatsappHref} target="_blank" rel="noopener noreferrer">send it on WhatsApp</a>.
              </p>
            )}

            <button className="btn btn--primary btn--full contact__submit" type="submit">
              Submit Business Inquiry <Send size={17} aria-hidden="true" />
            </button>

            <p className="contact__form-note">
              Your details are used only to respond to this inquiry. Fields marked * are required.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, required = false, full = false, error, children }) {
  return (
    <div className={`contact__field${full ? ' contact__field--full' : ''}${error ? ' has-error' : ''}`}>
      <label htmlFor={name}>
        {label} {required && <span className="contact__required" aria-label="required">*</span>}
      </label>
      {children}
      {error && <span className="contact__field-error" role="alert">{error}</span>}
    </div>
  )
}
