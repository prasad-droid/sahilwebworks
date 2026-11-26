import { useReveal } from '../hooks/useReveal.js';

/**
 * Consistent section header used across the page.
 * Renders an optional eyebrow label, the H2 and a supporting paragraph, with a
 * built-in scroll reveal.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light', // 'light' on white, 'dark' on green
  as: Tag = 'h2',
  titleId,
  className = '',
  children,
}) {
  const [ref, visible] = useReveal();

  return (
    <header
      ref={ref}
      className={`section-heading section-heading--${align} section-heading--${tone} ${
        visible ? 'is-visible' : ''
      } ${className}`}
    >
      {eyebrow && (
        <p className="section-heading__eyebrow">
          <span className="section-heading__eyebrow-line" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag className="section-heading__title" id={titleId}>
        {title}
      </Tag>
      {description && <p className="section-heading__description">{description}</p>}
      {children}
    </header>
  );
}

export default SectionHeading;
