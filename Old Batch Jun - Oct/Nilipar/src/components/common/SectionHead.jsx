export default function SectionHead({ eyebrow, title, description, center = true }) {
  return (
    <div className={`section-head${center ? " center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
