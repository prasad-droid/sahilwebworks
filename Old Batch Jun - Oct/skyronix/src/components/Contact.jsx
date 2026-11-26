import { useState } from 'react'
import { products } from '../data/products.js'
import { Mail, Phone, MapPin, WhatsApp, ArrowUpRight, Check } from './Icons.jsx'

const WHATSAPP_MSG =
  'Hello%20Skyronix%20Overseas%20Pvt.%20Ltd.%2C%20I%20would%20like%20to%20discuss%20a%20product%20sourcing%2Fexport%20requirement.'
const WHATSAPP_URL = `https://wa.me/919309187314?text=${WHATSAPP_MSG}`

const INITIAL = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  product: '',
  quantity: '',
  message: '',
  website: '',
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  const setField = (key) => (e) => {
    const value = e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: '' }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (form.website) return

    const next = {}
    if (!form.name.trim()) next.name = 'Please share your name.'
    if (!form.email.trim()) next.email = 'We need an email to reach you.'
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'That email address does not look right.'
    if (form.product && form.product === 'Other' && !form.message.trim())
      next.message = 'Tell us a little more about the product you need.'

    setErrors(next)
    if (Object.keys(next).length > 0) return

    const lines = [
      `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.country && `Country: ${form.country}`,
      `Product category: ${form.product || 'Not specified'}`,
      form.quantity && `Quantity: ${form.quantity}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean)

    const url = `https://wa.me/919309187314?text=${encodeURIComponent(
      `New enquiry from the Skyronix website:\n\n${lines.join('\n')}`
    )}`
    window.open(url, '_blank', 'noopener')
    setDone(true)
  }

  if (done) {
    return (
      <section id="contact" className="section">
        <div className="container section-head">
          <div className="form-success">
            <div className="form-success__icon">
              <Check size={34} />
            </div>
            <h2 className="section-title">Thanks, {form.name || 'there'}! You&apos;re one tap away.</h2>
            <p className="section-sub">
              We opened WhatsApp with your enquiry pre-filled. Press send there and our export team
              will respond within one business day.
            </p>
            <p>
              <button type="button" className="btn btn--outline" onClick={() => setDone(false)}>
                Send another enquiry
              </button>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">
            Let&apos;s talk <span className="accent">about your shipment</span>
          </h2>
          <p className="section-sub">
            Tell us what you&apos;re sourcing and we&apos;ll come back with a clear, no-obligation
            plan.
          </p>
        </div>

        <div className="contact-grid">
          <div>
            <a className="contact-info__card" href="mailto:info@skyronixoverseas.com">
              <span className="contact-info__icon">
                <Mail size={20} />
              </span>
              <div>
                <h3>Email</h3>
                <p>info@skyronixoverseas.com</p>
              </div>
            </a>

            <a className="contact-info__card" href="tel:+919309187314">
              <span className="contact-info__icon">
                <Phone size={20} />
              </span>
              <div>
                <h3>Phone / WhatsApp</h3>
                <p>+91 93091 87314</p>
              </div>
            </a>

            <div className="contact-info__card">
              <span className="contact-info__icon">
                <MapPin size={20} />
              </span>
              <div>
                <h3>Location</h3>
                <p>Maharashtra, India — exporting to 25+ countries</p>
              </div>
            </div>

            <a className="contact-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <WhatsApp size={26} />
              <strong>Chat instantly on WhatsApp</strong>
              <ArrowUpRight size={20} />
            </a>
          </div>

          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="cf-name">
                  Full name <span className="req">*</span>
                </label>
                <input
                  id="cf-name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Carter"
                  value={form.name}
                  onChange={setField('name')}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="cf-company">Company name</label>
                <input
                  id="cf-company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Carter Toys Ltd."
                  value={form.company}
                  onChange={setField('company')}
                />
              </div>

              <div className="form-field">
                <label htmlFor="cf-email">
                  Work email <span className="req">*</span>
                </label>
                <input
                  id="cf-email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@cartertoys.com"
                  value={form.email}
                  onChange={setField('email')}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="cf-phone">Phone / WhatsApp</label>
                <input
                  id="cf-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 555 000 0000"
                  value={form.phone}
                  onChange={setField('phone')}
                />
              </div>

              <div className="form-field">
                <label htmlFor="cf-country">Country</label>
                <input
                  id="cf-country"
                  type="text"
                  autoComplete="country-name"
                  placeholder="United States"
                  value={form.country}
                  onChange={setField('country')}
                />
              </div>

              <div className="form-field">
                <label htmlFor="cf-product">Product category</label>
                <select id="cf-product" value={form.product} onChange={setField('product')}>
                  <option value="">Select a category…</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                  <option value="Other">Other / Not sure yet</option>
                </select>
              </div>

              <div className="form-field form-field--full">
                <label htmlFor="cf-qty">Target quantity</label>
                <input
                  id="cf-qty"
                  type="text"
                  placeholder="e.g. 5,000 pcs / 2 containers / MOQ unclear"
                  value={form.quantity}
                  onChange={setField('quantity')}
                />
              </div>

              <div className="form-field form-field--full">
                <label htmlFor="cf-message">Your requirement</label>
                <textarea
                  id="cf-message"
                  placeholder="Tell us about the product, target markets, packaging, or deadlines…"
                  value={form.message}
                  onChange={setField('message')}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <div className="form-field form-field--full" style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="cf-website">Website</label>
                <input
                  id="cf-website"
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                  value={form.website}
                  onChange={setField('website')}
                />
              </div>

              <div className="form-field form-field--full">
                <button type="submit" className="btn btn--primary btn--block">
                  Send Enquiry on WhatsApp
                  <WhatsApp size={18} />
                </button>
                <p className="form-note">
                  Your enquiry opens in WhatsApp, pre-filled. We reply within one business day. No
                  spam, ever.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}