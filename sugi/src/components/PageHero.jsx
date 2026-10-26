import useReveal from "./useReveal";
import { Link } from "../router";
import "../styles/pageHero.css";

// ==========================================================================
// PAGE HERO — shared banner for the inner pages (static, not fixed).
// ==========================================================================

export default function PageHero({ eyebrow, title, intro, crumbs = [] }) {
  useReveal();

  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <nav className="page-hero__crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label}>
              <span aria-hidden="true"> / </span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <b>{c.label}</b>}
            </span>
          ))}
        </nav>

        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {intro && <p className="page-hero__intro">{intro}</p>}
      </div>
    </section>
  );
}
