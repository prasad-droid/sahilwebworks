import { useState } from 'react'
import { CONTACT, getWhatsappLink } from '../data/business.js'

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  requirements: '',
}

export function Contact() {
  const [form, setForm] = useState(initialForm)
  const [touched, setTouched] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  const isValidPhone = (value) => /^[0-9+\-\s()]{8,15}$/.test(value)

  const errors = {
    name: touched.name && !form.name.trim() ? 'Name is required.' : '',
    company: touched.company && !form.company.trim() ? 'Company name is required.' : '',
    email: touched.email && (!form.email.trim() || !isValidEmail(form.email)) ? 'Enter a valid email.' : '',
    phone: touched.phone && (!form.phone.trim() || !isValidPhone(form.phone)) ? 'Enter a valid phone number.' : '',
    product: touched.product && !form.product.trim() ? 'Please select or mention interest.' : '',
    requirements: touched.requirements && !form.requirements.trim() ? 'Please share your requirements.' : '',
  }

  const hasErrors = Object.values(errors).some(Boolean)
  const isComplete = form.name.trim() && form.company.trim() && isValidEmail(form.email) && isValidPhone(form.phone) && form.product.trim() && form.requirements.trim()

  const handleSubmit = (event) => {
    event.preventDefault()
    setTouched({ name: true, company: true, email: true, phone: true, product: true, requirements: true })
    if (!isComplete) return

    const message = `Enquiry from Dake and Company website\n\nName: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone/WhatsApp: ${form.phone}\nProduct/Service Interest: ${form.product}\nRequirements: ${form.requirements}`
    window.open(getWhatsappLink(message), '_blank', 'noopener,noreferrer')
    setForm(initialForm)
    setTouched({})
  }

  return (
    <section className="section section--ivory" id="contact">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">Contact Us</p>
          <h2 className="section__title">Let's Build a Long-Term Partnership</h2>
          <p className="section__subtitle">
            Share your packaging requirements and we'll get back with a suitable sourcing proposal.
          </p>
        </header>
        <div className="contact__grid">
          <div className="contact__cards">
            <article className="contact-card">
              <p className="contact-card__label">Phone</p>
              <a className="contact-card__value" href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
            </article>
            <article className="contact-card">
              <p className="contact-card__label">WhatsApp</p>
              <a className="contact-card__value" href={getWhatsappLink()} target="_blank" rel="noopener noreferrer">{CONTACT.whatsapp}</a>
            </article>
            <article className="contact-card">
              <p className="contact-card__label">Email</p>
              <a className="contact-card__value" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </article>
            <article className="contact-card">
              <p className="contact-card__label">Office Address</p>
              <p className="contact-card__value">{CONTACT.address}</p>
            </article>
          </div>
          <div className="contact__panel">
            <header className="contact__panel-header">
              <h3 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800 }}>Send an Inquiry</h3>
              <p>Fill in the form below and we'll reach out via WhatsApp/Email.</p>
            </header>
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input className="form-input" id="name" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your full name" />
                {errors.name ? <p style={{ color: '#b42318' }}>{errors.name}</p> : null}
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="company">Company Name</label>
                <input className="form-input" id="company" name="company" value={form.company} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your company name" />
                {errors.company ? <p style={{ color: '#b42318' }}>{errors.company}</p> : null}
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input className="form-input" id="email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="you@company.com" />
                {errors.email ? <p style={{ color: '#b42318' }}>{errors.email}</p> : null}
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="phone">Phone / WhatsApp Number</label>
                <input className="form-input" id="phone" name="phone" value={form.phone} onChange={handleChange} onBlur={handleBlur} placeholder="+91 XXXXXXXX" />
                {errors.phone ? <p style={{ color: '#b42318' }}>{errors.phone}</p> : null}
              </div>
              <div className="form-field form-field--full">
                <label className="form-label" htmlFor="product">Product/Service Interest</label>
                <input className="form-input" id="product" name="product" value={form.product} onChange={handleChange} onBlur={handleBlur} placeholder="e.g. Kraft Paper Bags / Corrugated Boxes / Both" />
                {errors.product ? <p style={{ color: '#b42318' }}>{errors.product}</p> : null}
              </div>
              <div className="form-field form-field--full">
                <label className="form-label" htmlFor="requirements">Requirements</label>
                <textarea className="form-textarea" id="requirements" name="requirements" value={form.requirements} onChange={handleChange} onBlur={handleBlur} placeholder="Share dimensions, quantity, printing/branding, destination, or any specific requirements..." />
                {errors.requirements ? <p style={{ color: '#b42318' }}>{errors.requirements}</p> : null}
              </div>
              <div className="form-actions">
                <button className="btn btn--primary" type="submit">Submit Inquiry via WhatsApp</button>
                <a className="btn btn--ghost" href={getWhatsappLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp Directly</a>
              </div>
              {hasErrors && isComplete === false ? <p style={{ gridColumn: '1 / -1', color: '#b42318' }}>Please fix the highlighted fields before submitting.</p> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
