import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import FormField from './FormField'
import SectionHeading from './SectionHeading'
import { inquiryTypes, site } from '../data/site'
import { validateInquiry } from '../utils/validateInquiry'
import { buildWhatsappUrl, openWhatsapp } from '../utils/whatsapp'
import '../styles/contact.css'

const emptyForm = {
  fullName: '',
  companyName: '',
  email: '',
  country: '',
  phone: '',
  inquiryType: '',
  productOfInterest: '',
  quantity: '',
  message: '',
  website: '',
}

export default function Contact({ inquiryDraft, onDraftHandled }) {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [fallbackUrl, setFallbackUrl] = useState('')
  const startedAt = useRef(Date.now())

  useEffect(() => {
    if (!inquiryDraft) return
    setValues((current) => ({ ...current, ...inquiryDraft }))
    onDraftHandled?.()
  }, [inquiryDraft, onDraftHandled])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: undefined }))
    }
  }

  const handleBlur = (event) => {
    const { name } = event.target
    const fieldErrors = validateInquiry(values)
    if (fieldErrors[name]) {
      setErrors((current) => ({ ...current, [name]: fieldErrors[name] }))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFallbackUrl('')

    // Spam protection readiness: a hidden honeypot plus a minimum completion time.
    if (values.website || Date.now() - startedAt.current < 1200) {
      setStatus({ type: 'error', text: 'This submission could not be processed. Please try again.' })
      return
    }

    const validationErrors = validateInquiry(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ type: 'error', text: 'Please check the highlighted fields and try again.' })
      return
    }

    const message = [
      'Hello Sunscape Enterprises, I would like to submit a business inquiry.',
      '',
      `Full Name: ${values.fullName.trim()}`,
      `Company Name: ${values.companyName.trim()}`,
      `Email Address: ${values.email.trim()}`,
      `Country: ${values.country.trim()}`,
      `Contact Number: ${values.phone.trim()}`,
      `Inquiry Type: ${values.inquiryType}`,
      `Product of Interest: ${values.productOfInterest.trim() || 'Not specified'}`,
      `Quantity / Requirement: ${values.quantity.trim() || 'Not specified'}`,
      '',
      'Additional Message:',
      values.message.trim(),
    ].join('\n')

    const url = openWhatsapp(message)
    setFallbackUrl(url)
    setStatus({
      type: 'success',
      text: 'Your inquiry message is ready in WhatsApp. Please press Send there to complete your submission.',
    })
  }

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <SectionHeading
            eyebrow="Contact Us"
            titleId="contact-title"
            title="Let's Start a Conversation."
            description="Have a product requirement or business opportunity? Get in touch with Sunscape Enterprises and explore possibilities together."
          />

          <div className="contact__details" data-reveal>
            <div className="contact-detail">
              <span className="contact-detail__icon">
                <Phone size={20} aria-hidden="true" />
              </span>
              <div>
                <span>Phone / WhatsApp</span>
                <a href="tel:+917770007019">{site.contact.phone}</a>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__icon">
                <Mail size={20} aria-hidden="true" />
              </span>
              <div>
                <span>Email</span>
                <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail__icon">
                <MapPin size={20} aria-hidden="true" />
              </span>
              <div>
                <span>Business</span>
                <strong>{site.name}</strong>
              </div>
            </div>
          </div>

          <a
            className="btn btn--outline-dark contact__whatsapp"
            href={buildWhatsappUrl(site.whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} aria-hidden="true" /> Chat on WhatsApp
          </a>
        </div>

        <div className="contact__form-card" data-reveal>
          <div className="contact__form-head">
            <div>
              <span className="eyebrow">Business Inquiry Form</span>
              <h3>Tell us about your requirement.</h3>
            </div>
            <Send size={22} aria-hidden="true" />
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <FormField
                id="fullName"
                label="Full Name"
                required
                autoComplete="name"
                placeholder="Your full name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.fullName}
              />
              <FormField
                id="companyName"
                label="Company Name"
                required
                autoComplete="organization"
                placeholder="Your company"
                value={values.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.companyName}
              />
              <FormField
                id="email"
                label="Email Address"
                type="email"
                required
                autoComplete="email"
                placeholder="name@company.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
              />
              <FormField
                id="country"
                label="Country"
                required
                autoComplete="country-name"
                placeholder="Your country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.country}
              />
              <FormField
                id="phone"
                label="Contact Number"
                type="tel"
                required
                autoComplete="tel"
                placeholder="+91 00000 00000"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone}
              />
              <FormField
                id="inquiryType"
                label="Inquiry Type"
                as="select"
                required
                options={inquiryTypes}
                value={values.inquiryType}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.inquiryType}
              >
                <option value="">Select inquiry type</option>
              </FormField>
              <FormField
                id="productOfInterest"
                label="Product of Interest"
                placeholder="Product or category, if known"
                value={values.productOfInterest}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormField
                id="quantity"
                label="Quantity / Requirement"
                placeholder="Approximate quantity or requirement"
                value={values.quantity}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormField
                id="message"
                label="Additional Message"
                as="textarea"
                required
                className="form-field--full"
                rows="4"
                placeholder="Tell us about your requirement or opportunity"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.message}
              />
            </div>

            <div className="honeypot" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn--gold contact__submit">
              Submit Inquiry <ArrowUpRight size={17} aria-hidden="true" />
            </button>

            <p className="contact__form-note">
              Submitting opens WhatsApp with your inquiry pre-filled, ready for you to review and
              send to Sunscape Enterprises.
            </p>

            {status && (
              <div className={`form-status form-status--${status.type}`} role="status">
                {status.type === 'success' ? (
                  <CheckCircle2 size={18} aria-hidden="true" />
                ) : (
                  <MessageCircle size={18} aria-hidden="true" />
                )}
                <div>
                  <p>{status.text}</p>
                  {fallbackUrl && (
                    <a href={fallbackUrl} target="_blank" rel="noopener noreferrer">
                      Open WhatsApp again <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
