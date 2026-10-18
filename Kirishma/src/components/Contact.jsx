import { useState } from 'react'
import { contactContent } from '../data/content.js'
import { generalEnquiryOption, products } from '../data/products.js'
import { addressLine, site, whatsappLink } from '../data/site.js'
import useReveal from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'
import '../styles/contact.css'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  product: generalEnquiryOption,
  message: '',
}

/**
 * Product enquiry form.
 *
 * There is no backend connected, so the form does not pretend to send an
 * email. Instead it composes the enquiry and hands it to WhatsApp, and says so
 * plainly. To connect a backend later, replace the body of `handleSubmit`
 * with a fetch to your endpoint and update `formStatus`.
 */
export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [formStatus, setFormStatus] = useState('')
  const [ref, isVisible] = useReveal()

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    if (formStatus) setFormStatus('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const enquiry = [
      `Hello ${site.shortName}, I would like to enquire about your products.`,
      `Name: ${form.name || '—'}`,
      `Phone: ${form.phone || '—'}`,
      `Email: ${form.email || '—'}`,
      `Product: ${form.product || generalEnquiryOption}`,
      `Message: ${form.message || '—'}`,
    ].join('\n')

    // --- Replace this block with a POST to your backend / email service. ---
    window.open(whatsappLink(enquiry), '_blank', 'noopener,noreferrer')
    setFormStatus(
      'Your enquiry is ready in WhatsApp — press send there to reach us. Nothing has been sent from this page yet.',
    )
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeading
          label={contactContent.label}
          heading={contactContent.heading}
          text={contactContent.text}
          id="contact-heading"
        />

        <div className={`contact__grid reveal ${isVisible ? 'is-visible' : ''}`.trim()} ref={ref}>
          <div className="contact__details">
            <h3 className="contact__details-title">{site.name}</h3>

            <dl className="contact__list">
              <div className="contact__row">
                <dt className="contact__row-label">Address</dt>
                <dd className="contact__row-value">
                  <address className="contact__address">
                    {site.address.line1}
                    <br />
                    {site.address.city}, {site.address.region}
                    <br />
                    PIN {site.address.pin}
                  </address>
                  <a
                    className="contact__maps-link"
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.mapsLabel}
                    <span aria-hidden="true"> →</span>
                  </a>
                </dd>
              </div>

              <div className="contact__row">
                <dt className="contact__row-label">Phone / WhatsApp</dt>
                <dd className="contact__row-value">
                  <a className="contact__link" href={site.phoneHref}>
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>

              <div className="contact__row">
                <dt className="contact__row-label">Email</dt>
                <dd className="contact__row-value">
                  <a className="contact__link" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>

              <div className="contact__row">
                <dt className="contact__row-label">Website</dt>
                <dd className="contact__row-value">
                  <a className="contact__link" href={site.websiteHref} target="_blank" rel="noopener noreferrer">
                    {site.website}
                  </a>
                </dd>
              </div>
            </dl>

            <p className="contact__address-line">{addressLine}</p>

            <div className="contact__actions">
              <a
                className="btn btn--whatsapp"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contactContent.whatsappCta}
              </a>
              <a className="btn btn--outline-light" href={site.phoneHref}>
                {contactContent.callCta}
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate={false}>
            <h3 className="contact__form-title">Send Enquiry</h3>

            <div className="contact__field">
              <label className="contact__label" htmlFor="enquiry-name">
                Name <span className="contact__required" aria-hidden="true">*</span>
              </label>
              <input
                className="contact__input"
                id="enquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={updateField}
              />
            </div>

            <div className="contact__field-row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="enquiry-phone">
                  Phone <span className="contact__required" aria-hidden="true">*</span>
                </label>
                <input
                  className="contact__input"
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={form.phone}
                  onChange={updateField}
                />
              </div>

              <div className="contact__field">
                <label className="contact__label" htmlFor="enquiry-email">
                  Email
                </label>
                <input
                  className="contact__input"
                  id="enquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={updateField}
                />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="enquiry-product">
                Product Interested In
              </label>
              <select
                className="contact__input contact__select"
                id="enquiry-product"
                name="product"
                value={form.product}
                onChange={updateField}
              >
                <option value={generalEnquiryOption}>{generalEnquiryOption}</option>
                {products.map((product) => (
                  <option key={product.id} value={product.name}>
                    {product.name} — {product.category}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="enquiry-message">
                Message
              </label>
              <textarea
                className="contact__input contact__textarea"
                id="enquiry-message"
                name="message"
                rows="4"
                value={form.message}
                onChange={updateField}
              />
            </div>

            <button className="btn btn--accent contact__submit" type="submit">
              Send Enquiry
            </button>

            <p className="contact__form-note">{contactContent.formNote}</p>
            <p className="contact__form-status" role="status" aria-live="polite">
              {formStatus}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
