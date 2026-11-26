import { useState } from 'react'
import Icon from './Icon'
import './Inquiry.css'

const serviceOptions = [
  'Simple workflow — ₹5,000–₹15,000',
  'Medium workflow — ₹20,000–₹50,000',
  'Complex AI system — ₹75,000–₹2L+',
  'One of the 15 workflow playbooks',
  'Not sure — recommend for me',
]

function Inquiry() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    requirements: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name.'
    if (!formData.company.trim()) newErrors.company = 'Please enter your company name.'
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone or WhatsApp number.'
    } else if (!/^[0-9+\-\s()]{8,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number.'
    }
    if (!formData.service) newErrors.service = 'Please select a service of interest.'
    if (!formData.requirements.trim()) newErrors.requirements = 'Please share your requirements.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) {
      return
    }
    const message = [
      'New inquiry - Thenextgenautomate.co.in',
      `Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Email: ${formData.email}`,
      `Phone/WhatsApp: ${formData.phone}`,
      `Service interest: ${formData.service}`,
      `Requirements: ${formData.requirements}`,
    ].join('%0A')
    const whatsappUrl = `https://wa.me/919156064869?text=${message}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="inquiry" className="inquiry">
      <div className="container inquiry-grid">
        <div className="inquiry-content">
          <div className="section-header inquiry-header">
            <span className="section-kicker">09 / Start here</span>
            <h2>Tell us what keeps slipping.</h2>
            <p className="section-subtitle">
              A short message is enough. We will reply on WhatsApp, usually within a few hours, with the next
              sensible step.
            </p>
          </div>

          <div className="inquiry-info">
            <div className="inquiry-info-card">
              <h3>
                <Icon name="message" size={14} />
                <span>Direct line</span>
              </h3>
              <div className="info-links">
                <a href="https://wa.me/919156064869" target="_blank" rel="noopener noreferrer">
                  WhatsApp · +91 91560 64869
                </a>
                <a href="tel:+919156064869">Phone · +91 91560 64869</a>
                <a href="mailto:info@thenextgenautomate.co.in">info@thenextgenautomate.co.in</a>
              </div>
            </div>

            <div className="inquiry-info-card">
              <h3>
                <Icon name="arrow" size={14} />
                <span>What happens next</span>
              </h3>
              <ul>
                <li><span>01</span>A 20-minute call about the current process</li>
                <li><span>02</span>A one-page map, fixed price and delivery date</li>
                <li><span>03</span>Build starts once you approve the scope</li>
              </ul>
            </div>
          </div>

          <p className="inquiry-note">
            No retainer pitch. No obligation. If automation is not the answer, we will say so.
          </p>
        </div>

        <div className="inquiry-form-wrapper">
          <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
            <div className="form-header">
              <h3>Project inquiry</h3>
              <p>Goes straight to WhatsApp · nothing is stored on this site</p>
            </div>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="company">Company or practice</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Business name"
                  aria-invalid={Boolean(errors.company)}
                />
                {errors.company && <span className="form-error">{errors.company}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone or WhatsApp</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>
              <div className="form-field form-field-full">
                <label htmlFor="service">What do you want to fix?</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.service)}
                >
                  <option value="">Choose the closest fit</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && <span className="form-error">{errors.service}</span>}
              </div>
              <div className="form-field form-field-full">
                <label htmlFor="requirements">Describe the process</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows="6"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="e.g. our front desk misses calls after 7pm, and nobody follows up on WhatsApp enquiries the next morning."
                  aria-invalid={Boolean(errors.requirements)}
                />
                {errors.requirements && <span className="form-error">{errors.requirements}</span>}
              </div>
            </div>
            <button className="btn btn-primary form-submit" type="submit">
              Send on WhatsApp
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 3.75L14.25 9L9 14.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {submitted && (
              <p className="form-success">Your inquiry has been prepared for WhatsApp. We&apos;ll respond shortly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Inquiry
