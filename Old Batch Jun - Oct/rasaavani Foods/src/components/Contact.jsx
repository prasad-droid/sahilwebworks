import EnquiryForm from './EnquiryForm.jsx'
import { site, whatsappLink } from '../data/site.js'
import { IconMail, IconPhone, IconPin, IconWhatsApp } from './Icons.jsx'
import '../styles/contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section section--sand contact">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow">Contact</p>
          <h2>Let&rsquo;s Start a Conversation</h2>
          <p>
            Whether you are a food lover, retailer, importer, distributor or
            someone who simply loves authentic Indian flavours&mdash;we would
            love to hear from you.
          </p>
        </div>

        <div className="contact__grid">
          <aside className="contact__info" data-reveal="left">
            <ul className="contact__details">
              <li>
                <span className="contact__icon" aria-hidden="true">
                  <IconPin />
                </span>
                <div>
                  <span className="contact__label">Brand</span>
                  <p>Rasavaani · {site.location}</p>
                </div>
              </li>
              <li>
                <span className="contact__icon" aria-hidden="true">
                  <IconMail />
                </span>
                <div>
                  <span className="contact__label">Email</span>
                  <p>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="contact__icon" aria-hidden="true">
                  <IconPhone />
                </span>
                <div>
                  <span className="contact__label">Phone</span>
                  <p>
                    <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="contact__icon contact__icon--wa" aria-hidden="true">
                  <IconWhatsApp />
                </span>
                <div>
                  <span className="contact__label">WhatsApp</span>
                  <p>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {site.phoneDisplay}
                    </a>
                  </p>
                </div>
              </li>
            </ul>

            <div className="contact__panel">
              <h3>For partners &amp; buyers</h3>
              <p>
                Importers, distributors and retailers&mdash;tell us about your
                market and we&rsquo;ll get back to you.
              </p>
              <a
                href={whatsappLink(
                  'Hello Rasavaani, I am interested in discussing a retail, distribution or import partnership. Please share more information.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__wa-link"
              >
                Start a partnership chat
              </a>
            </div>
          </aside>

          <div className="contact__form" data-reveal="right">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
