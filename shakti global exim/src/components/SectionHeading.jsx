export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
}) {
  return (
    <div
      className={`section-heading section-heading--${align} ${
        light ? 'section-heading--light' : ''
      } ${className}`.trim()}
    >
      {eyebrow && (
        <p className="eyebrow">
          <span className="eyebrow__line" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </div>
  )
}
