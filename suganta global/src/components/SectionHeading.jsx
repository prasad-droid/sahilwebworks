import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  wide = false,
  id,
  action,
  titleAs = 'h2',
}) {
  const classes = [
    'section-heading',
    align === 'center' ? 'section-heading--center' : '',
    light ? 'section-heading--light' : '',
    wide ? 'section-heading--wide' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {eyebrow && (
        <Reveal as="p" className="eyebrow" y={12}>
          {eyebrow}
        </Reveal>
      )}
      <Reveal as={titleAs} id={id} className="section-heading__title" delay={80} y={22}>
        {title}
      </Reveal>
      {description && (
        <Reveal as="p" className="section-heading__description" delay={140} y={20}>
          {description}
        </Reveal>
      )}
      {action && (
        <Reveal className="section-heading__action" delay={180} y={18}>
          {action}
        </Reveal>
      )}
    </div>
  );
}
