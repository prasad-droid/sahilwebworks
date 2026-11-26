import heroBg from "../../assets/images/about-stock.jpg";

/**
 * Compact hero band for interior pages.
 */
export default function PageHero({ eyebrow, title, description, bgImage }) {
  const bg = bgImage || heroBg;

  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true">
        <img src={bg} alt="" />
      </div>
      <div className="container page-hero__inner">
        {eyebrow && <span className="page-hero__eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}
