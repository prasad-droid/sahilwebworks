import { useSite } from "../store/SiteContext";
import "../styles/whyChooseUs.css";

// ==========================================================================
// WHY CHOOSE SUGI INTERNATIONAL — editable in Admin Panel > Website Content.
// ==========================================================================

export default function WhyChooseUs() {
  const { content } = useSite();
  const section = content?.home?.whyChooseUs || {};
  const items = section.items || [];

  if (!items.length) return null;

  return (
    <section id="why-us" className="why section-pad">
      <div className="container">
        <header className="why__head reveal">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 className="section-title">{section.title}</h2>
        </header>

        <div className="why__grid">
          {items.map((r, i) => (
            <div
              key={`${r.title}-${i}`}
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
