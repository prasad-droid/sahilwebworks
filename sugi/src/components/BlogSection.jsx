import { useState } from "react";
import { useSite } from "../store/SiteContext";
import "../styles/blog.css";

// ==========================================================================
// BLOG & NEWS — published posts from Admin Panel > Blog & News.
// Renders nothing when there are no published posts. Clicking a post opens
// it in an on-page reader modal.
// ==========================================================================

export default function BlogSection() {
  const { blog = [], settings } = useSite();
  const [open, setOpen] = useState(null);

  if (!settings?.features?.enableBlog) return null;

  const posts = (blog || [])
    .filter((p) => p.published)
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

  if (posts.length === 0) return null;

  return (
    <section className="blog section-pad">
      <div className="container">
        <header className="blog__head reveal">
          <p className="eyebrow">Blog &amp; News</p>
          <h2 className="section-title">Latest Updates</h2>
        </header>

        <div className="blog__grid">
          {posts.map((post, i) => (
            <article
              className="blog__card reveal"
              key={post.id}
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              {post.image && (
                <div className="blog__media">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
              )}
              <div className="blog__body">
                <p className="blog__meta">
                  {post.date && <time>{post.date}</time>}
                  {post.author && <span> · {post.author}</span>}
                </p>
                <h3 className="blog__title">{post.title}</h3>
                {post.excerpt && <p className="blog__excerpt">{post.excerpt}</p>}
                <button className="btn btn-dark-outline blog__cta" onClick={() => setOpen(post)}>
                  Read More
                  <span className="btn-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="blog__reader-backdrop"
          onMouseDown={(e) => e.target === e.currentTarget && setOpen(null)}
        >
          <article className="blog__reader" role="dialog" aria-modal="true" aria-label={open.title}>
            <button className="blog__reader-close" onClick={() => setOpen(null)} aria-label="Close article">
              ×
            </button>
            {open.image && <img className="blog__reader-image" src={open.image} alt={open.title} />}
            <p className="blog__meta">
              {open.date && <time>{open.date}</time>}
              {open.author && <span> · {open.author}</span>}
            </p>
            <h2 className="blog__reader-title">{open.title}</h2>
            {(open.body || open.excerpt || "")
              .split(/\n{2,}/)
              .filter(Boolean)
              .map((para, i) => (
                <p key={i}>{para}</p>
              ))}
          </article>
        </div>
      )}
    </section>
  );
}
