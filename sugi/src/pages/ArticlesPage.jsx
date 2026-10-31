import PageHero from "../components/PageHero";
import useReveal from "../components/useReveal";
import { Link } from "../router";
import { Section } from "../store/SiteContext";
import QuoteCTA from "../components/QuoteCTA";
import { ARTICLES } from "../data/articles";
import "../styles/articles.css";

// ==========================================================================
// ARTICLES PAGE — intro + "Topics we will cover" cards.
// Each card links to its demo article at #/articles/<slug>.
// ==========================================================================

export default function ArticlesPage() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="Insights & Articles"
        intro="Notes on Indian agro exports, product handling, packaging and international trade."
        crumbs={[{ label: "Articles" }]}
      />

      <section className="articles section-pad">
        <div className="container">
          <div className="articles__notice reveal">
            <h2>Export notes from the field</h2>
            <p>
              A short series on how Indian agro commodities are sourced, packed
              and shipped. Start with any topic below, or talk to our team
              directly about a specific product, market or shipment.
            </p>
            <div className="articles__actions">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
              <Link to="/products" className="btn btn-dark-outline">
                Explore Products
              </Link>
            </div>
          </div>

          <div className="articles__topics">
            <h3 className="articles__topics-title reveal">Topics we will cover</h3>
            <ul className="articles__grid">
              {ARTICLES.map((a, i) => (
                <li
                  className="articles__card reveal"
                  key={a.slug}
                  style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
                >
                  <span className="articles__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="articles__cat">{a.category}</span>
                  <h4>{a.title}</h4>
                  <p>{a.excerpt}</p>
                  <Link
                    to={`/articles/${a.slug}`}
                    className="btn btn-dark-outline articles__card-btn"
                  >
                    Read Article
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Section id="quoteCta"><QuoteCTA /></Section>
    </>
  );
}
