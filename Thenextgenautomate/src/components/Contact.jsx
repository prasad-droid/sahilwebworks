import Icon from './Icon'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">10 / Reach a human</span>
          <h2>Skip the form. Reach a human.</h2>
          <p className="section-subtitle">
            No gatekeepers, no ticket numbers. These go to the people who actually build the workflows.
          </p>
        </div>

        <div className="contact-list">
          <div className="contact-row">
            <span className="contact-label">
              <Icon name="message" size={14} />
              WhatsApp
            </span>
            <a href="https://wa.me/919156064869" target="_blank" rel="noopener noreferrer">
              +91 91560 64869
            </a>
            <span className="contact-meta">Fastest · usually a few hours</span>
          </div>
          <div className="contact-row">
            <span className="contact-label">
              <Icon name="mail" size={14} />
              Email
            </span>
            <a href="mailto:info@thenextgenautomate.co.in">info@thenextgenautomate.co.in</a>
            <span className="contact-meta">Briefs, documents, invoices</span>
          </div>
          <div className="contact-row">
            <span className="contact-label">
              <Icon name="phone" size={14} />
              Phone
            </span>
            <a href="tel:+919156064869">+91 91560 64869</a>
            <span className="contact-meta">Mon–Sat · 10:00–19:00 IST</span>
          </div>
        </div>

        <p className="contact-note">
          If it is urgent, WhatsApp is the fastest route. We answer in the order messages arrive.
        </p>
      </div>
    </section>
  )
}

export default Contact
