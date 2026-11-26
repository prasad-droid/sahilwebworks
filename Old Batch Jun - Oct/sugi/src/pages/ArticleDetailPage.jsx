import PageHero from "../components/PageHero";
import QuoteCTA from "../components/QuoteCTA";
import useReveal from "../components/useReveal";
import { Link } from "../router";
import { Section, useSite } from "../store/SiteContext";
import { ARTICLES, findArticle } from "../data/articles";
import "../styles/articleDetail.css";

// ==========================================================================
// ARTICLE DETAIL — route: #/articles/<slug>
// Posts published in the Admin Panel (Blog & News) are matched first; the
// bundled demo articles (src/data/articles.js) remain as the fallback.
// ==========================================================================

export default function ArticleDetailPage({ slug }) {
  useReveal(slug);
  const { blog = [], content } = useSite();
  const detail = content?.pages?.articles?.detail || {};

  const adminPost = (blog || []).find((p) => p.published && (p.slug === slug || p.id === slug));
  const article = adminPost ? null : findArticle(slug);

  if (!article && !adminPost) {
    return (
      <>
        <PageHero
          eyebrow={detail.notFoundEyebrow}
          title={detail.notFoundTitle}
          intro={detail.notFoundText}
          crumbs={[
            { label: "Articles", to: "/articles" },
            { label: "Not found" },
          ]}
        />
        <section className="adetail-missing section-pad">
          <div className="container">
            <Link to="/articles" className="btn btn-primary">
              {detail.notFoundBackLabel}
            </Link>
          </div>
        </section>
      </>
    );
  }

  // Admin post → normalise to the same shape the static renderer expects.
  const post = adminPost
    ? {
        slug: adminPost.slug || adminPost.id,
        title: adminPost.title,
        category: adminPost.category || "Company Update",
        excerpt: adminPost.excerpt || "",
        intro: adminPost.excerpt || adminPost.body || "",
        date: adminPost.date,
        author: adminPost.author,
        image: adminPost.image,
        sections: adminPost.body
          ? adminPost.body.split(/\n{2,}/).filter(Boolean).map((para, i) => ({
              heading: i === 0 ? "" : `Section ${i + 1}`,
              paragraphs: [para],
            }))
          : [],
      }
    : article;

  const related = (blog || [])
    .filter((p) => p.published && (p.slug || p.id) !== post.slug)
    .slice(0, 4);
  const relatedStatic = ARTICLES.filter((a) => a.slug !== article?.slug).slice(0, 4);
  const relatedItems = related.length ? related : relatedStatic;

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        intro={post.excerpt}
        crumbs={[
          { label: "Articles", to: "/articles" },
          { label: post.title },
        ]}
      />

      <section className="adetail section-pad">
        <div className="container adetail__grid">
          <article className="adetail__body">
            <div className="adetail__meta reveal">
              <Link to="/articles" className="adetail__back">
                <span aria-hidden="true">←</span> {detail.backLabel}
              </Link>
              <span className="adetail__readtime">
                {post.date || ""}
                {post.author ? ` · ${post.author}` : ""}
              </span>
            </div>

            {post.image && (
              <img className="adetail__image reveal" src={post.image} alt={post.title} />
            )}

            <p className="adetail__lead reveal">{post.intro}</p>

            {post.sections.map((s, i) => (
              <div className="adetail__block reveal" key={s.heading || i}>
                {s.heading && <h2>{s.heading}</h2>}
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
                <p className="eyebrow">{detail.ctaEyebrow}</p>
                <h3>{detail.ctaTitle}</h3>
                <p>{detail.ctaText}</p>
              </div>
              <div className="adetail__cta-actions">
                <Link to="/quote" className="btn btn-primary">
                  {detail.ctaPrimaryLabel}
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </Link>
                <Link to="/contact" className="btn btn-dark-outline">
                  {detail.ctaSecondaryLabel}
                </Link>
              </div>
            </div>
          </article>

          <aside className="adetail__aside reveal">
            <div className="adetail__aside-card">
              <h3>{detail.relatedTitle}</h3>
              <ul className="adetail__related">
                {relatedItems.map((a) => (
                  <li key={a.slug || a.id}>
                    <Link to={`/articles/${a.slug || a.id}`}>
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
                {detail.relatedAllLabel}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Section id="quoteCta"><QuoteCTA /></Section>
    </>
  );
}
