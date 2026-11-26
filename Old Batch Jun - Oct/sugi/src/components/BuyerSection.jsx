import "../styles/buyerSection.css";

const BUYERS = [
  { title: "Importers", text: "For international commodity importers." },
  {
    title: "Trading Companies",
    text: "For distributors and trading partners.",
  },
  {
    title: "Wholesalers & Bulk Buyers",
    text: "For larger B2B sourcing requirements.",
  },
];

export default function BuyerSection() {
  return (
    <section className="buyers section-pad">
      <div className="container">
        <div className="buyers__head reveal">
          <p className="eyebrow">B2B Buyers</p>
          <h2 className="section-title">For Importers &amp; International Buyers</h2>
          <p className="section-sub">
            Looking for reliable agro-commodity sourcing from India? Share your
            requirement with our team and let us explore the right supply
            opportunity.
          </p>
        </div>

        <div className="buyers__grid">
          {BUYERS.map((b, i) => (
            <div
              key={b.title}
              className="buyer-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="buyer-card__mark" aria-hidden="true" />
              <h3 className="buyer-card__title">{b.title}</h3>
              <p className="buyer-card__text">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="buyers__cta reveal">
          <a href="#enquiry" className="btn btn-gold">
            Discuss Your Requirement
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
