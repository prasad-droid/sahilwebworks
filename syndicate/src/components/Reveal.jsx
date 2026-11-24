export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  image = false,
  children,
  style,
  ...rest
}) {
  const classes = ['reveal', image ? 'reveal-image' : '', className].filter(Boolean).join(' ');
  return (
    <Tag className={classes} style={{ '--reveal-delay': `${delay}ms`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
