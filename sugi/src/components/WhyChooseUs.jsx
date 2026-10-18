import "../styles/whyChooseUs.css";

// Why Choose Sugi International — 10 points, one dedicated box each (brief).
const REASONS = [
  { title: "Premium Export Quality Products", text: "Carefully selected, graded and packed produce built for international markets." },
  { title: "Direct Farm Sourcing", text: "Sourced directly from experienced farmers and carefully selected growers." },
  { title: "International Food Safety Standards", text: "Handled and documented in line with international food safety expectations." },
  { title: "Fresh & Hygienic Packing", text: "Hygienic packing practices that protect freshness from farm to destination." },
  { title: "Competitive Prices", text: "Straightforward, competitive pricing for long-term B2B relationships." },
  { title: "Fast Worldwide Shipping", text: "Efficient logistics and dependable worldwide shipping coordination." },
  { title: "Customized Packaging", text: "Packaging tailored to your brand, market and buyer requirements." },
  { title: "Export Documentation Support", text: "Full support with export documentation for smooth customs clearance." },
  { title: "Timely Delivery", text: "Planned shipments and reliable schedules to keep your supply on time." },
  { title: "Professional Customer Service", text: "A responsive, professional team that stays with you through every order." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why section-pad">
      <div className="container">
        <header className="why__head reveal">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-title">Why Choose Sugi International?</h2>
        </header>

        <div className="why__grid">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="why-card reveal"
              style={{ transitionDelay: `${(i % 5) * 0.05}s` }}
            >
              <span className="why-card__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="why-card__title">{r.title}</h3>
              <p className="why-card__text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
