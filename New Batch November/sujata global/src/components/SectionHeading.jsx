export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  as: Heading = 'h2',
}) {
  return (
    <div
      className={`section-heading${center ? ' section-heading--center' : ''}${light ? ' section-heading--light' : ''}`}
      data-reveal
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Heading className="section-heading__title">{title}</Heading>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
