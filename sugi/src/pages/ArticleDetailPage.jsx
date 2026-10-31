import PageHero from "../components/PageHero";
import QuoteCTA from "../components/QuoteCTA";
import useReveal from "../components/useReveal";
import { Link } from "../router";
import { Section } from "../store/SiteContext";
import { ARTICLES, findArticle } from "../data/articles";
import "../styles/articleDetail.css";

// ==========================================================================
// ARTICLE DETAIL — demo editorial page for a single article.
// Route: #/articles/<slug>
// Articles are static entries in src/data/articles.js; unknown slugs get a
// friendly fallback instead of a blank page.
// ==========================================================================

export default function ArticleDetailPage({ slug }) {
  useReveal(slug);
  const article = findArticle(slug);

  if (!article) {
    return (
      <>
        <PageHero
          eyebrow="Articles"
          title="Article not found"
          intro="The article you are looking for is not available."
          crumbs={[
            { label: "Articles", to: "/articles" },
            { label: "Not found" },
          ]}
        />
        <section className="adetail-missing section-pad">
          <div className="container">
            <Link to="/articles" className="btn btn-primary">
              Back to Articles
            </Link>
          </div>
        </section>
      </>
    );
  }

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        intro={article.excerpt}
        crumbs={[
          { label: "Articles", to: "/articles" },
          { label: article.title },
        ]}
      />

      <section className="adetail section-pad">
        <div className="container adetail__grid">
          <article className="adetail__body">
            <div className="adetail__meta reveal">
              <Link to="/articles" className="adetail__back">
                <span aria-hidden="true">←</span> All articles
              </Link>
              <span className="adetail__readtime">{article.readTime}</span>
            </div>

            <p className="adetail__lead reveal">{article.intro}</p>

            {article.sections.map((s) => (
              <div className="adetail__block reveal" key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.bullets && (
                  <ul className="adetail__list">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="adetail__cta reveal">
              <div>
                <p className="eyebrow">Need more detail?</p>
                <h3>Talk to our export team</h3>
                <p>
                  Share your destination market, product and volume and we will
                  come back with a specification and quotation.
                </p>
              </div>
              <div className="adetail__cta-actions">
                <Link to="/quote" className="btn btn-primary">
                  Get a Quote
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
                <Link to="/contact" className="btn btn-dark-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </article>

          <aside className="adetail__aside reveal">
            <div className="adetail__aside-card">
              <h3>More articles</h3>
              <ul className="adetail__related">
                {related.map((a) => (
                  <li key={a.slug}>
                    <Link to={`/articles/${a.slug}`}>
                      <span className="adetail__related-cat">{a.category}</span>
                      <span className="adetail__related-title">{a.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/articles"
                className="btn btn-dark-outline adetail__aside-btn"
              >
                View All Articles
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Section id="quoteCta"><QuoteCTA /></Section>
    </>
  );
}
