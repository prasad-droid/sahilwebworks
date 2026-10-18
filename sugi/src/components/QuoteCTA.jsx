import { Link } from "../router";
import { useSite } from "../store/SiteContext";
import "../styles/quoteCTA.css";

// ==========================================================================
// GET A QUOTE CTA — full-width block. Button redirects to the quotation
// request form (#/quote). Heading & copy editable in Admin Panel >
// Website Content > Final Call-to-Action.
// ==========================================================================

export default function QuoteCTA() {
  const { content } = useSite();
  const cta = content?.quoteCta || {};

  return (
    <section className="quote-cta">
      <div className="container quote-cta__inner reveal">
        <div className="quote-cta__copy">
          <p className="eyebrow">{cta.eyebrow || "Get a Quote"}</p>
          <h2 className="quote-cta__title">
            {cta.title || "Looking for a reliable fruit and vegetable exporter from India?"}
          </h2>
          <p className="quote-cta__text">
            {cta.text ||
              "Tell us what you need, in which quantity and for which destination market, and our export team will come back to you with pricing, packing options and shipping schedules."}
          </p>
        </div>

        <div className="quote-cta__actions">
          <Link to="/quote" className="btn btn-gold">
            Get a Quote
            <span className="btn-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/products" className="btn btn-dark-outline">
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
}
