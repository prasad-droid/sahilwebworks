import { Link } from "../router";
import { useSite } from "../store/SiteContext";
import "../styles/homeIntro.css";

// ==========================================================================
// HOME INTRO — single-line headline (per brief) + supporting copy + 2 CTAs.
// Headline & copy are editable in Admin Panel > Website Content.
// ==========================================================================

export default function HomeIntro() {
  const { content } = useSite();
  const intro = content?.homeIntro || {};

  return (
    <section className="home-intro section-pad">
      <div className="container">
        <h2 className="home-intro__title reveal">
          {intro.title || "Connecting Indian & Globally Sourced Agro Commodities"}{" "}
          {intro.titleAccent && <em>{intro.titleAccent}</em>}
        </h2>

        <p className="home-intro__text reveal">
          {intro.text ||
            "Delivering farm-fresh fruits, vegetables, spices, dry fruits and other agricultural products from India to customers worldwide."}
        </p>

        <div className="home-intro__actions reveal">
          <Link to="/quote" className="btn btn-primary">
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
