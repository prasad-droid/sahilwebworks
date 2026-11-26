export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false, titleId }) {
  return (
    <div
      className={`section-heading section-heading--${align}${light ? ' section-heading--light' : ''}`}
      data-reveal
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 id={titleId}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
