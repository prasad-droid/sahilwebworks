import Reveal from './Reveal.jsx'

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'light',
  className = '',
}) {
  return (
    <Reveal className={`section-header section-header--${align} section-header--${tone} ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  )
}