import PageHero from "../components/PageHero";
import EnquiryForm from "../components/EnquiryForm";
import useReveal from "../components/useReveal";
import { useSite } from "../store/SiteContext";
import { PHONE_DISPLAY, EMAIL } from "../data/site";
import "../styles/quotePage.css";

// ==========================================================================
// QUOTATION REQUEST FORM — target of every "Get a Quote" button.
// Contact details come from Admin Panel > Contact & Social Media; page copy
// comes from Admin Panel > Website Content > Quote Page.
// ==========================================================================

export default function QuotePage() {
  useReveal();
  const { settings, content } = useSite();
  const contact = settings?.contact || {};
  const page = content?.pages?.quote || {};
  const hero = page.hero || {};
  const form = page.form || {};
  const panel = page.panel || {};

  const phoneDisplay = contact.phone || PHONE_DISPLAY;
  const phoneTel = `tel:${String(phoneDisplay).replace(/[^\d+]/g, "")}`;
  const email = contact.email || EMAIL;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        crumbs={[{ label: "Get a Quote" }]}
      />

      <section className="quote-form section-pad">
        <div className="container quote-form__grid">
          <div className="quote-form__intro-block reveal">
            <p className="eyebrow">{form.eyebrow}</p>
            <h2 className="section-title">{form.title}</h2>
            <p className="quote-form__intro">{form.text}</p>
          </div>

          <div className="quote-form__card reveal">
            <EnquiryForm />
          </div>

          <aside className="quote-form__aside">
            <div className="quote-form__panel reveal">
              <h3 className="quote-form__panel-title">{panel.title}</h3>
              <ul>
                {(panel.items || []).map((p, i) => (
                  <li key={`${p}-${i}`}>
                    <span aria-hidden="true">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="quote-form__panel reveal">
              <h3 className="quote-form__panel-title">{panel.contactTitle}</h3>
              <ul className="quote-form__contacts">
                <li>
                  <a href={phoneTel}>{phoneDisplay}</a>
                </li>
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              </ul>
              {contact.hours && (
                <dl className="quote-form__hours">
                  <div>
                    <dt>Business hours</dt>
                    <dd>{contact.hours}</dd>
                  </div>
                </dl>
              )}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
