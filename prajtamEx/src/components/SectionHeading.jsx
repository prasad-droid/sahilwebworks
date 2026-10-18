export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  as: Heading = "h2",
  id,
  className = "",
}) {
  return (
    <header
      id={id}
      className={[
        "section-heading",
        `section-heading--${align}`,
        light ? "section-heading--light" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-reveal
    >
      {label && (
        <p className="section-label">
          <span className="section-label__line" aria-hidden="true" />
          {label}
        </p>
      )}
      <Heading className="section-title" id={id ? `${id}-title` : undefined}>
        {title}
      </Heading>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}
