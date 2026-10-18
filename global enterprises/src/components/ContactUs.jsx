import { company } from '../data/siteData'
import { requestEnquiry } from '../utils/enquiry'
import Icon from './Icons'
import '../styles/ContactUs.css'

const mapQuery = encodeURIComponent(
  '52/424, Motilal Nagar-1, Goregaon West, Mumbai - 400104, Maharashtra, India'
)

export default function ContactUs() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <p className="eyebrow">Contact Us</p>
          <h2 className="section-title" id="contact-title">
            Let&rsquo;s Discuss Your Requirements
          </h2>
          <p className="section-subtitle">
            Reach GLOBAL ENTERPRISES by email, phone or WhatsApp, or send us your product
            enquiry directly.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__details reveal">
            <ul className="contact__list">
              <li className="contact__item">
                <span className="contact__item-icon" aria-hidden="true">
                  <Icon name="mail" size={22} />
                </span>
                <div>
                  <h3>Email</h3>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>

              <li className="contact__item">
                <span className="contact__item-icon" aria-hidden="true">
                  <Icon name="phone" size={22} />
                </span>
                <div>
                  <h3>Phone</h3>
                  <a href={`tel:${company.phoneIntl}`}>+91 {company.phone}</a>
                </div>
              </li>

              <li className="contact__item">
                <span className="contact__item-icon" aria-hidden="true">
                  <Icon name="whatsapp" size={22} />
                </span>
                <div>
                  <h3>WhatsApp</h3>
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 {company.phone}
                  </a>
                </div>
              </li>

              <li className="contact__item">
                <span className="contact__item-icon" aria-hidden="true">
                  <Icon name="mapPin" size={22} />
                </span>
                <div>
                  <h3>Address</h3>
                  <address>
                    <strong>{company.name}</strong>
                    {company.address.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </address>
                </div>
              </li>
            </ul>

            <a
              href="#enquiry"
              className="btn btn--primary btn--lg contact__cta"
              onClick={() => requestEnquiry()}
            >
              Send an Enquiry
              <Icon name="arrowRight" size={19} className="icon-trailing" />
            </a>
          </div>

          <div className="contact__map reveal delay-1">
            <iframe
              title="GLOBAL ENTERPRISES location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="contact__map-card">
              <Icon name="mapPin" size={18} />
              <span>Goregaon West, Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
