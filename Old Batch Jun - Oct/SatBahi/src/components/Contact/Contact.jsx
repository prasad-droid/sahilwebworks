import { FiPhone, FiMessageCircle, FiMail, FiMapPin, FiSend, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Reveal } from "../../hooks/useScrollReveal";
import { SITE, whatsappLink, mailtoLink, telLink } from "../../data/site";

export default function Contact() {
  return (
    <section className="section" id="contact" aria-label="Contact SATBHAI EXIM">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Contact Us</span>
          <h2 className="section__title">Get in Touch</h2>
          <p className="section__subtitle">
            Reach out to our team for inquiries, quotations or partnership discussions.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal>
            <div className="contact__cards">
              <a className="contact__card" href={telLink()}>
                <div className="contact__card-icon" aria-hidden="true">
                  <FiPhone />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>{SITE.phoneDisplay}</p>
                </div>
              </a>

              <a
                className="contact__card"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact__card-icon" aria-hidden="true">
                  <FiMessageCircle />
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>{SITE.phoneDisplay}</p>
                </div>
              </a>

              <a className="contact__card" href={mailtoLink()}>
                <div className="contact__card-icon" aria-hidden="true">
                  <FiMail />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>{SITE.email}</p>
                </div>
              </a>

              <div className="contact__card">
                <div className="contact__card-icon" aria-hidden="true">
                  <FiMapPin />
                </div>
                <div>
                  <h3>Office</h3>
                  <p>
                    Hari Bhagya, Satbhai Nagar,
                    <br />
                    Nashik, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="contact__card" style={{ background: "var(--cream)", borderColor: "transparent" }}>
                <div className="contact__card-icon" aria-hidden="true">
                  <FiSend />
                </div>
                <div>
                  <h3>Quick Inquiry</h3>
                  <p>
                    Have a requirement? Send us a quote request and we will respond quickly.
                  </p>
                  <Link className="btn btn--primary btn--sm" style={{ marginTop: 12 }} to="/contact">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="contact__map">
              <iframe
                title={`${SITE.name} office location map`}
                src={SITE.mapsEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="contact__map-actions">
                <a
                  className="btn btn--primary btn--sm"
                  href={SITE.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps <FiExternalLink />
                </a>
                <a className="btn btn--whatsapp btn--sm" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a className="btn btn--outline btn--sm" href={telLink()}>
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
