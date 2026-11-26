import "../styles/trust.css";

// This is a trust/approach section — NOT fake customer testimonials.
const TRUST = [
  {
    title: "Professional Communication",
    text: "Clear coordination throughout the business discussion.",
  },
  {
    title: "Quality-Focused Sourcing",
    text: "Attention to buyer requirements and product expectations.",
  },
  {
    title: "Long-Term Business",
    text: "Focused on building sustainable international relationships.",
  },
];

export default function TrustSection() {
  return (
    <section className="trust section-pad" aria-label="Our approach to international partnerships">
      <div className="container">
        <div className="trust__head reveal">
          <p className="eyebrow">Partnership</p>
          <h2 className="section-title">Our Approach to International Partnerships</h2>
        </div>

        <div className="trust__grid">
          {TRUST.map((t, i) => (
            <div key={t.title} className="trust-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="trust-card__quote" aria-hidden="true">“</span>
              <p className="trust-card__text">{t.text}</p>
              <h3 className="trust-card__title">{t.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
