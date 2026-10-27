import { useState } from 'react'
import './Inquiry.css'

const serviceOptions = [
  'Workflow Automation',
  'Custom AI Agents',
  'Process Audit & Strategy',
  'End-to-End Implementation',
  'Other / Custom Solution',
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
      'New Inquiry - Thenextgenautomate.co.in',
      `Name: ${formData.name}`,
      `Company: ${formData.company}`,
      `Email: ${formData.email}`,
      `Phone/WhatsApp: ${formData.phone}`,
      `Service Interest: ${formData.service}`,
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
          <div className="section-header">
            <span className="section-kicker">Get Started</span>
            <h2>Request A Quote For Your Automation Project</h2>
            <p className="section-subtitle">
              Tell us about your process and goals. We&apos;ll review and suggest a practical automation plan tailored to your business.
            </p>
          </div>
          <div className="inquiry-info">
            <div className="inquiry-info-card">
              <h3>Talk Directly</h3>
              <p>Prefer a quick conversation? Reach us via phone or WhatsApp.</p>
              <div className="info-links">
                <a href="tel:+919156064869">+91 91560 64869</a>
                <a href="https://wa.me/919156064869" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                <a href="mailto:info@thenextgenautomate.co.in">info@thenextgenautomate.co.in</a>
              </div>
            </div>
            <div className="inquiry-info-card">
              <h3>What To Expect</h3>
              <ul>
                <li>Free process review discussion</li>
                <li>Pragmatic recommendations focused on ROI</li>
                <li>Clear scope and next steps</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="inquiry-form-wrapper">
          <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
            <div className="form-header">
              <h3>Project Inquiry</h3>
              <p>Fill in the details below and we&apos;ll get back to you promptly.</p>
            </div>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="company">Company Name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  aria-invalid={Boolean(errors.company)}
                />
                {errors.company && <span className="form-error">{errors.company}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone / WhatsApp Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>
              <div className="form-field form-field-full">
                <label htmlFor="service">Service Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.service)}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.service && <span className="form-error">{errors.service}</span>}
              </div>
              <div className="form-field form-field-full">
                <label htmlFor="requirements">Requirements / Process Details</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows="6"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Describe the process you'd like to automate, current tools, goals, or any specific details."
                  aria-invalid={Boolean(errors.requirements)}
                />
                {errors.requirements && <span className="form-error">{errors.requirements}</span>}
              </div>
            </div>
            <button className="btn btn-primary form-submit" type="submit">
              Send Inquiry via WhatsApp
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
