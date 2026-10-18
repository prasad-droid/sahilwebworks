import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function Reveal({
  as: Tag = 'div',
  variant = 'fade-up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [disabled] = useState(() => prefersReducedMotion() || !('IntersectionObserver' in window))
  const [visible, setVisible] = useState(disabled)

  useEffect(() => {
    if (visible) return undefined
    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  const style = disabled
    ? undefined
    : { transitionDelay: delay ? `${delay}ms` : undefined }

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}