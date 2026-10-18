import { business } from '../data/data';
import { waLink } from '../utils/whatsapp';
import Reveal from './Reveal';
import QuoteForm from './QuoteForm';
import Icon from './Icon';
import '../styles/contact.css';

export default function Contact() {
  const wa = waLink(
    'Hello GOURI GLOBAL TRADE, I would like to know more about your products and export enquiries.'
  );

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="section-eyebrow">Get in Touch</span>
            <h2 className="section-title">Let's Connect With Your Business</h2>
            <p className="section-subtitle">
              Interested in Gir Cow Ghee or looking to connect with an Indian merchant
              exporter? Send us your requirement.
            </p>
          </Reveal>
        </div>

        <div className="contact__grid">
          <Reveal className="contact__panel">
            <h3 className="contact__panel-title">Contact Details</h3>
            <ul className="contact__list">
              <li className="contact__item">
                <span className="contact__item-icon">
                  <Icon name="phone" size={20} />
                </span>
                <div className="contact__item-body">
                  <span className="contact__item-label">Phone</span>
                  <a className="contact__link" href={`tel:+91${business.phone}`}>
                    {business.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="contact__item">
                <span className="contact__item-icon">
                  <Icon name="send" size={20} />
                </span>
                <div className="contact__item-body">
                  <span className="contact__item-label">WhatsApp</span>
                  <a
                    className="contact__link"
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {business.whatsappNumber}
                  </a>
                </div>
              </li>
              <li className="contact__item">
                <span className="contact__item-icon">
                  <Icon name="mail" size={20} />
                </span>
                <div className="contact__item-body">
                  <span className="contact__item-label">Email</span>
                  <a className="contact__link" href={`mailto:${business.email}`}>
                    {business.email}
                  </a>
                </div>
              </li>
              <li className="contact__item">
                <span className="contact__item-icon">
                  <Icon name="pin" size={20} />
                </span>
                <div className="contact__item-body">
                  <span className="contact__item-label">Office</span>
                  <address className="contact__link contact__address">{business.office}</address>
                </div>
              </li>
            </ul>

            <div className="contact__whatsapp">
              <p className="contact__whatsapp-text">
                Prefer WhatsApp? Chat with us directly for a quick response.
              </p>
              <a
                className="btn btn--accent contact__whatsapp-btn"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="send" size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="contact__form-column">
            <QuoteForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}