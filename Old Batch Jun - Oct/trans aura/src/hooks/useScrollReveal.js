import { useEffect } from 'react'

/**
 * Sets up a single IntersectionObserver that reveals every element carrying
 * the `.reveal` class by adding `.is-visible` when it scrolls into view.
 *
 * Elements may stagger themselves with a CSS custom property, e.g.:
 *   <div className="reveal" style={{ '--reveal-delay': '0.15s' }} />
 *
 * The observer disconnects each element once revealed for performance and
 * gracefully no-ops when IntersectionObserver is unavailable.
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('.reveal'))
    if (!nodes.length) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    nodes.forEach((node) => {
      if (node.classList.contains('is-visible')) return
      observer.observe(node)
    })

    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
