import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import useReveal from "../components/useReveal";
import { Link } from "../router";
import { useSite } from "../store/SiteContext";
import { socialLinks } from "../store/social";
import SocialIcon from "../components/SocialIcon";
import { EMAIL, PHONE_DISPLAY, ADDRESS } from "../data/site";
import "../styles/contactPage.css";

// ==========================================================================
// CONTACT PAGE — contact details come from Admin Panel > Contact & Social
// Media; page copy and the "Why Contact Us?" list come from
// Admin Panel > Website Content > Contact Page.
// ==========================================================================

export default function ContactPage() {
  useReveal();
  const { settings, content } = useSite();
  const contact = settings?.contact || {};
  const page = content?.pages?.contact || {};
  const hero = page.hero || {};
  const form = page.form || {};
  const why = page.why || {};
  const partner = page.partner || {};

  const email = contact.email || EMAIL;
  const phoneDisplay = contact.phone || PHONE_DISPLAY;
  const phoneTel = `tel:${String(phoneDisplay).replace(/[^\d+]/g, "")}`;
  const address =
    [contact.address, contact.city, contact.country].filter(Boolean).join(", ") ||
    ADDRESS;
  const socials = socialLinks(settings?.social);

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        crumbs={[{ label: "Contact Us" }]}
      />

      {/* ---------- contact details ---------- */}
      <section className="contact-info section-pad">
        <div className="container">
          <div className="contact-info__grid">
            <a className="contact-card reveal" href={`mailto:${email}`}>
              <span className="contact-card__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="contact-card__label">Email</span>
              <span className="contact-card__value">{email}</span>
            </a>

            <a className="contact-card reveal" href={phoneTel}>
              <span className="contact-card__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path
                    d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="contact-card__label">Contact Number</span>
              <span className="contact-card__value">{phoneDisplay}</span>
            </a>

            <div className="contact-card reveal">
              <span className="contact-card__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path
                    d="M12 7.5V12l3 2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="contact-card__label">Business Hours</span>
              {contact.hours && (
                <span className="contact-card__value">{contact.hours}</span>
              )}
            </div>

            <div className="contact-card reveal">
              <span className="contact-card__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path
                    d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="2.6" />
                </svg>
              </span>
              <span className="contact-card__label">Address</span>
              <span className="contact-card__value">{address}</span>
            </div>
          </div>

          <ul className="contact-social reveal" aria-label="Social media">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <SocialIcon label={s.label} />
                  <span>{s.label}</span>
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
            <p className="eyebrow">{form.eyebrow}</p>
            <h2 className="section-title">{form.title}</h2>
            <p className="contact-body__intro">
              {form.text}
            </p>
            <div className="contact-body__formcard">
              <ContactForm />
            </div>
          </div>
          {/* ---------- why contact us ---------- */}
          <section className="contact-why section-pad">
            <div className="container">
              <div className="contact-why__head reveal">
                <p className="eyebrow">{why.eyebrow}</p>
                <h2 className="section-title">{why.title}</h2>
              </div>

              <ul className="contact-why__grid">
                {(why.items || []).map((w, i) => (
                  <li
                    className="contact-why__item reveal"
                    key={`${w.title}-${i}`}
                    style={{ transitionDelay: `${(i % 5) * 0.05}s` }}
                  >
                    <span className="contact-why__tick" aria-hidden="true">
                      ✓
                    </span>
                    <div>
                      <h3>{w.title}</h3>
                      <p>{w.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>

      {/* ---------- supplier partner CTA ---------- */}
      <section className="contact-partner">
        <div className="container contact-partner__inner reveal">
          <div className="contact-partner__copy">
            <p className="eyebrow">{partner.eyebrow}</p>
            <h2 className="contact-partner__title">{partner.title}</h2>
            <p className="contact-partner__text">{partner.text}</p>
          </div>
          <div className="contact-partner__actions">
            <Link to="/quote" className="btn btn-primary">
              {partner.primaryLabel}
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <a href={`mailto:${email}`} className="btn btn-dark-outline">
              {partner.secondaryLabel}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
