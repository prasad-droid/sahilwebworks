import PageHero from "../components/PageHero";
import EnquiryForm from "../components/EnquiryForm";
import useReveal from "../components/useReveal";
import { BUSINESS_HOURS, PHONE_DISPLAY, PHONE_TEL, EMAIL } from "../data/site";
import "../styles/quotePage.css";

// ==========================================================================
// QUOTATION REQUEST FORM — target of every "Get a Quote" button.
// ==========================================================================

const POINTS = [
  "Product, grade and quantity",
  "Preferred packing and private label requirements",
  "Destination port and expected timeline",
  "Any inspection or documentation requirements",
];

export default function QuotePage() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Request a Quotation"
        intro="Tell us what you need, in which quantity and for which destination, and our export team will respond with pricing, packing options and shipping schedules."
        crumbs={[{ label: "Get a Quote" }]}
      />

      <section className="quote-form section-pad">
        <div className="container quote-form__grid">
          <div className="quote-form__main reveal">
            <p className="eyebrow">Quotation Request</p>
            <h2 className="section-title">Tell us your requirement</h2>
            <p className="quote-form__intro">
              The more detail you share, the faster we can come back with an
              accurate quotation.
            </p>
            <div className="quote-form__card">
              <EnquiryForm />
            </div>
          </div>

          <aside className="quote-form__aside">
            <div className="quote-form__panel reveal">
              <h3 className="quote-form__panel-title">Helpful to include</h3>
              <ul>
                {POINTS.map((p) => (
                  <li key={p}>
                    <span aria-hidden="true">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="quote-form__panel reveal">
              <h3 className="quote-form__panel-title">Prefer to talk?</h3>
              <ul className="quote-form__contacts">
                <li>
                  <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
              </ul>
              <dl className="quote-form__hours">
                {BUSINESS_HOURS.map((h) => (
                  <div key={h.days}>
                    <dt>{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
