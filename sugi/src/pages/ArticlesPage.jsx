import PageHero from "../components/PageHero";
import useReveal from "../components/useReveal";
import { Link } from "../router";
import { Section, useSite } from "../store/SiteContext";
import QuoteCTA from "../components/QuoteCTA";
import { ARTICLES } from "../data/articles";
import "../styles/articles.css";

// ==========================================================================
// ARTICLES PAGE
// Posts published in the Admin Panel (Blog & News) are shown first; when
// none are published yet, the bundled topic cards (src/data/articles.js)
// keep the page populated. Headings and intro copy are editable in
// Admin Panel > Website Content > Articles Page.
// ==========================================================================

function ActionLink({ href, label, className, arrow }) {
  if (!href) return null;
  const internal = href.startsWith("/");
  if (internal) {
    return (
      <Link to={href} className={className}>
        {label}
        {arrow && <span className="btn-arrow" aria-hidden="true">→</span>}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {label}
      {arrow && <span className="btn-arrow" aria-hidden="true">→</span>}
    </a>
  );
}

export default function ArticlesPage() {
  useReveal();
  const { blog = [], content } = useSite();
  const page = content?.pages?.articles || {};
  const hero = page.hero || {};
  const notice = page.notice || {};

  const posts = (blog || [])
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug || p.id,
      title: p.title,
      category: p.category || "Company Update",
      excerpt: p.excerpt || (p.body || "").slice(0, 160),
      date: p.date,
      author: p.author,
    }));

  const cards = posts.length
    ? posts
    : ARTICLES.map((a) => ({
        slug: a.slug,
        title: a.title,
        category: a.category,
        excerpt: a.excerpt,
      }));

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        crumbs={[{ label: "Articles" }]}
      />

      <section className="articles section-pad">
        <div className="container">
          <div className="articles__notice reveal">
            <h2>{notice.title}</h2>
            <p>{notice.text}</p>
            <div className="articles__actions">
              <ActionLink
                href={notice.primaryHref}
                label={notice.primaryLabel}
                className="btn btn-primary"
                arrow
              />
              <ActionLink
                href={notice.secondaryHref}
                label={notice.secondaryLabel}
                className="btn btn-dark-outline"
              />
            </div>
          </div>

          <div className="articles__topics">
            <h3 className="articles__topics-title reveal">
              {posts.length ? notice.latestTitle : notice.topicsTitle}
            </h3>
            <ul className="articles__grid">
              {cards.map((a, i) => (
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
                  {(a.date || a.author) && (
                    <p className="articles__date">
                      {a.date}
                      {a.author ? ` · ${a.author}` : ""}
                    </p>
                  )}
                  <Link
                    to={`/articles/${a.slug}`}
                    className="btn btn-dark-outline articles__card-btn"
                  >
                    {notice.readLabel}
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
