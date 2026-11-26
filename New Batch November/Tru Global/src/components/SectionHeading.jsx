export default function SectionHeading({ eyebrow, title, subtitle, center = false, light = false }) {
  return (
    <div
      className={`section-heading${center ? ' section-heading--center' : ''}`}
      data-reveal
    >
      {eyebrow && (
        <span className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{eyebrow}</span>
      )}
      <h2 className={`section-title${light ? ' text-white' : ''}`}>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
