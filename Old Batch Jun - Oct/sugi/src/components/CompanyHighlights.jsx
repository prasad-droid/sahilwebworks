import "../styles/companyHighlights.css";

// No invented statistics — these are neutral orientation cards.
const HIGHLIGHTS = [
  { key: "INDIA", label: "Sourcing Origin", icon: "◆" },
  { key: "AGRO", label: "Commodity Focus", icon: "⑂" },
  { key: "B2B", label: "Business Model", icon: "◈" },
  { key: "GLOBAL", label: "Market Orientation", icon: "○" },
];

export default function CompanyHighlights() {
  return (
    <section className="highlights" aria-label="Company highlights">
      <div className="container">
        <div className="highlights__grid">
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.key}
              className="highlight-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="highlight-card__icon" aria-hidden="true">
                {h.icon}
              </span>
              <h3 className="highlight-card__key">{h.key}</h3>
              <p className="highlight-card__label">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
