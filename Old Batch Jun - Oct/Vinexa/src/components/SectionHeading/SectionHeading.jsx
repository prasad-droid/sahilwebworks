import ScrollReveal from "../ScrollReveal/ScrollReveal";

/**
 * Consistent centered or left-aligned section heading with eyebrow label.
 */
export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  light = false,
  className = "",
}) {
  const alignClass = align === "left" ? "section-head--left" : "section-head--center";
  return (
    <ScrollReveal className={`section-head ${alignClass} ${className}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2
        className="section-title"
        style={light ? { color: "var(--white)" } : undefined}
      >
        {title}
      </h2>
      {sub && (
        <p className="section-sub" style={light ? { color: "rgba(255,255,255,0.78)" } : undefined}>
          {sub}
        </p>
      )}
    </ScrollReveal>
  );
}
