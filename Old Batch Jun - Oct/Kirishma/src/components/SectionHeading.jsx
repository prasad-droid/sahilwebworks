import useReveal from '../hooks/useReveal.js'

/**
 * Consistent section label + heading block used across the page.
 * `align` controls whether it is centred or sits to the left.
 */
export default function SectionHeading({ label, heading, text, align = 'center', id }) {
  const [ref, isVisible] = useReveal()

  return (
    <header
      ref={ref}
      className={`section-heading section-heading--${align} reveal ${
        isVisible ? 'is-visible' : ''
      }`.trim()}
    >
      {label ? <p className="section-heading__label">{label}</p> : null}
      <h2 className="section-heading__title" id={id}>
        {heading}
      </h2>
      {text ? <p className="section-heading__text">{text}</p> : null}
      <span className="section-heading__rule" aria-hidden="true" />
    </header>
  )
}
