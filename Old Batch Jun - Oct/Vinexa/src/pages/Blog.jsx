import { useState } from "react";
import { FaCalendarAlt, FaClock, FaChevronDown } from "react-icons/fa";
import SEO from "../components/SEO/SEO";
import PageHero from "../components/PageHero/PageHero";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import RfqSection from "../components/RfqSection/RfqSection";
import { posts } from "../data/blogs";

const breadcrumbs = [
  { name: "Home", url: "https://www.vinexaglobal.com/" },
  { name: "Blog", url: "https://www.vinexaglobal.com/blog" },
];

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

function BlogCard({ post, index }) {
  const [open, setOpen] = useState(false);

  return (
    <ScrollReveal className="blog-card" delay={index * 60}>
      <div className="blog-card__media">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className="blog-card__tag">{post.tag}</span>
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>
            <FaCalendarAlt size={13} aria-hidden="true" style={{ marginRight: "0.4rem" }} />
            {formatDate(post.date)}
          </span>
          <span>
            <FaClock size={13} aria-hidden="true" style={{ marginRight: "0.4rem" }} />
            {post.readTime}
          </span>
        </div>
        <h3>{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>

        {open && (
          <div className="blog-card__content">
            {post.content.map((section) => (
              <section key={section.heading}>
                <h4>{section.heading}</h4>
                <p>{section.text}</p>
              </section>
            ))}
          </div>
        )}

        <button
          type="button"
          className="blog-card__toggle"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "Close Article" : "Read Article"}
          <FaChevronDown
            size={14}
            aria-hidden="true"
            style={{ transform: open ? "rotate(180deg)" : undefined, transition: "transform var(--transition)" }}
          />
        </button>
      </div>
    </ScrollReveal>
  );
}

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog | Insights on Indian Exports, Rice, Pulses & Spices — VINEXA GLOBAL ENTERPRISES"
        description="Guides and market insights from VINEXA GLOBAL ENTERPRISES on basmati rice, non-basmati rice, Indian pulses, spices and the export sourcing process."
        path="/blog"
        keywords="basmati rice buying guide, Indian pulses export, spices sourcing India, agricultural export insights, B2B sourcing blog"
        breadcrumbs={breadcrumbs}
      />
      <PageHero
        eyebrow="Insights & Guides"
        title="From Our Blog"
        description="Practical guides for global buyers sourcing Indian agricultural products — rice, pulses, spices and more."
      />

      <div className="section">
        <div className="container">
          <ScrollReveal className="section-head">
            <span className="section-eyebrow">Latest Articles</span>
            <h2 className="section-title">Sourcing Knowledge, Straight From Us</h2>
            <p className="section-sub">
              Short, useful reads to help you make smarter import and sourcing decisions.
            </p>
          </ScrollReveal>

          <div className="blog-grid">
            {posts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </div>

      <RfqSection />
    </>
  );
}