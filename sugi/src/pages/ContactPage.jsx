import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import useReveal from "../components/useReveal";
import { Link } from "../router";
import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_TEL,
  ADDRESS,
  ADDRESS_PENDING,
  BUSINESS_HOURS,
  SOCIAL_LINKS,
  COMPANY,
} from "../data/site";
import { waLink } from "../data/site";
import "../styles/contactPage.css";

// ==========================================================================
// CONTACT PAGE — contact info, social buttons, contact form, business hours,
// "Why Contact Us?" list and the supplier-partner CTA.
// ==========================================================================

const WHY_CONTACT = [
  {
    title: "Quick & Transparent Response",
    text: "Our team replies to genuine business enquiries with clear information.",
  },
  {
    title: "Export Documentation Support",
    text: "Help with the paperwork your shipment needs to clear customs.",
  },
  {
    title: "Customized Packaging Solutions",
    text: "Packaging tailored to your brand, market and buyer requirements.",
  },
  {
    title: "Bulk Supply Capability",
    text: "Container-scale and repeat orders planned around your schedule.",
  },
  {
    title: "Worldwide Shipping Assistance",
    text: "Coordination with freight partners for deliveries across the globe.",
  },
];

const mapQuery = encodeURIComponent(
  `${COMPANY}, ${ADDRESS_PENDING ? "" : ADDRESS}`.trim()
);

export default function ContactPage() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Requirement"
        intro="Our export experts are ready to assist you with product information, pricing, packaging options, shipping schedules and documentation."
        crumbs={[{ label: "Contact Us" }]}
      />

      {/* ---------- contact details ---------- */}
      <section className="contact-info section-pad">
        <div className="container">
          <div className="contact-info__grid">
            <a className="contact-card reveal" href={`mailto:${EMAIL}`}>
              <span className="contact-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="contact-card__label">Email</span>
              <span className="contact-card__value">{EMAIL}</span>
            </a>

            <a className="contact-card reveal" href={`tel:${PHONE_TEL}`}>
              <span className="contact-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="contact-card__label">Contact Number</span>
              <span className="contact-card__value">{PHONE_DISPLAY}</span>
            </a>

            <a
              className="contact-card reveal"
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z" strokeLinejoin="round" />
                  <path d="M8.5 9.5c0 4 2 6 6 6" strokeLinecap="round" />
                </svg>
              </span>
              <span className="contact-card__label">WhatsApp</span>
              <span className="contact-card__value">+{WHATSAPP_TEL}</span>
            </a>

            <div className="contact-card reveal">
              <span className="contact-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="2.6" />
                </svg>
              </span>
              <span className="contact-card__label">Address</span>
              <span className="contact-card__value">
                {ADDRESS_PENDING ? "Full address — to be provided" : ADDRESS}
              </span>
            </div>
          </div>

          <ul className="contact-social reveal" aria-label="Social media">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- form + business hours ---------- */}
      <section className="contact-body section-pad">
        <div className="container contact-body__grid">
          <div className="contact-body__form reveal">
            <p className="eyebrow">Send Us Your Requirement</p>
            <h2 className="section-title">Contact Us Form</h2>
            <p className="contact-body__intro">
              Our concerned team will definitely respond to you. Fields marked
              with <span className="req">*</span> are required.
            </p>
            <div className="contact-body__formcard">
              <ContactForm />
            </div>
          </div>

          <aside className="contact-aside">
            <div className="contact-hours reveal">
              <p className="eyebrow">Business Hours</p>
              <h3 className="contact-hours__title">Business Hours</h3>
              <dl>
                {BUSINESS_HOURS.map((h) => (
                  <div key={h.days}>
                    <dt>{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary contact-hours__cta"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact-map reveal">
              <iframe
                title="Map showing our location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </aside>
        </div>
      </section>

      {/* ---------- why contact us ---------- */}
      <section className="contact-why section-pad">
        <div className="container">
          <div className="contact-why__head reveal">
            <p className="eyebrow">Why Contact Us?</p>
            <h2 className="section-title">Why Contact Us?</h2>
          </div>

          <ul className="contact-why__grid">
            {WHY_CONTACT.map((w, i) => (
              <li
                className="contact-why__item reveal"
                key={w.title}
                style={{ transitionDelay: `${(i % 5) * 0.05}s` }}
              >
                <span className="contact-why__tick" aria-hidden="true">✓</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- supplier partner CTA ---------- */}
      <section className="contact-partner">
        <div className="container contact-partner__inner reveal">
          <div>
            <p className="eyebrow">Become a Partner</p>
            <h2 className="contact-partner__title">
              Are you a farmer, grower or supplier looking for a trusted export
              partner?
            </h2>
            <p className="contact-partner__text">
              If you supply quality agricultural produce and want access to
              international markets, we would like to hear from you.
            </p>
          </div>
          <div className="contact-partner__actions">
            <Link to="/quote" className="btn btn-gold">
              Partner With Us
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
            <a href={`mailto:${EMAIL}`} className="btn btn-outline">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
