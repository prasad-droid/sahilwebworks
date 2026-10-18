import PageHero from "../components/PageHero";
import useReveal from "../components/useReveal";
import { Link } from "../router";
import "../styles/articles.css";

// ==========================================================================
// ARTICLES PAGE — placeholder.
// No article content was supplied with the brief, so this page announces
// that articles are on the way and shows the topics that will be covered.
// ==========================================================================

const TOPICS = [
  {
    title: "Indian Agro Export Market",
    text: "How Indian fresh produce moves through global supply chains.",
  },
  {
    title: "Fruits & Vegetables",
    text: "Sourcing, grading and handling notes for bananas, pomegranates, mangoes, grapes and vegetables.",
  },
  {
    title: "Spices",
    text: "Origin, grades and export considerations for Indian spices.",
  },
  {
    title: "Dry Fruits",
    text: "Imported dry fruits, processing and PAN India distribution.",
  },
  {
    title: "Export Packaging",
    text: "Cartons, mesh bags, jute bags and private label options.",
  },
  {
    title: "Quality & Food Safety",
    text: "Inspection, grading and international food safety expectations.",
  },
];

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
            <h2>Articles are on the way</h2>
            <p>
              We are preparing a series of articles on agro commodities,
              sourcing, packaging and export logistics. They will be published
              here shortly. In the meantime, our team is happy to answer any
              product or shipping questions directly.
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
              {TOPICS.map((t, i) => (
                <li
                  className="articles__card reveal"
                  key={t.title}
                  style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
                >
                  <span className="articles__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4>{t.title}</h4>
                  <p>{t.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
