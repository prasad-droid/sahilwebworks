import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, intro, centered = false, className = '' }) {
  return (
    <Reveal className={`section-head ${centered ? 'section-head--center' : ''} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}
