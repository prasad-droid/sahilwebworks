import { useReveal } from '../hooks/useReveal.js';

/**
 * Wraps content in a scroll-reveal transition.
 *
 * `delay` (ms) staggers children, `variant` selects the direction. Everything
 * is disabled automatically for visitors who prefer reduced motion (see the
 * global stylesheet), and the content is never hidden if JS-driven classes
 * fail to apply because the base state only animates opacity/transform.
 */
export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
