import { useSite } from "../store/SiteContext";
import "../styles/offers.css";

// ==========================================================================
// OFFERS & PROMOTIONS — active offers from Admin Panel > Offers.
// Renders nothing when there are no active offers.
// ==========================================================================

export default function Offers() {
  const { offers = [], settings } = useSite();
  if (!settings?.features?.enableOffers) return null;

  const active = (offers || []).filter((o) => o.active !== false);
  if (active.length === 0) return null;

  return (
    <section className="offers section-pad">
      <div className="container">
        <header className="offers__head reveal">
          <p className="eyebrow">Special Offers</p>
          <h2 className="section-title">Current Promotions</h2>
        </header>

        <div className="offers__grid">
          {active.map((offer, i) => (
            <article
              className="offers__card reveal"
              key={offer.id}
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              {offer.image && (
                <div className="offers__media">
                  <img src={offer.image} alt={offer.title || "Special offer"} loading="lazy" />
                </div>
              )}
              <div className="offers__body">
                <h3 className="offers__title">{offer.title}</h3>
                {offer.text && <p className="offers__text">{offer.text}</p>}
                {offer.startDate || offer.endDate ? (
                  <p className="offers__dates">
                    {offer.startDate && <span>From {offer.startDate}</span>}
                    {offer.endDate && <span>Until {offer.endDate}</span>}
                  </p>
                ) : null}
                {(offer.ctaLabel || offer.ctaHref) && (
                  offer.ctaHref?.startsWith("http") || offer.ctaHref?.startsWith("#/") ? (
                    <a
                      className="btn btn-gold offers__cta"
                      href={offer.ctaHref}
                      {...(offer.ctaHref.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : null)}
                    >
                      {offer.ctaLabel || "Learn More"}
                    </a>
                  ) : (
                    <a className="btn btn-gold offers__cta" href={offer.ctaHref || "#/quote"}>
                      {offer.ctaLabel || "Learn More"}
                    </a>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
