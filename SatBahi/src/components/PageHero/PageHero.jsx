export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="page-hero" aria-label="Page heading">
      <div className="container">
        <span className="page-hero__eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
