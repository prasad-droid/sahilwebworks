import { useEffect, useRef, useState } from 'react'

/**
 * Adds an `is-visible` class to an element the first time it scrolls into
 * view, producing the subtle fade-up reveal used across the page.
 *
 * Design notes:
 * - Content that is already in the viewport on first paint is shown straight
 *   away, so nothing is ever hidden behind a failed observer.
 * - A passive scroll listener acts as a fallback for the rare environment
 *   where IntersectionObserver exists but never delivers a callback.
 * - `once` keeps revealed elements revealed, which avoids re-animating
 *   content while the visitor scrolls back up.
 */
export default function useReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const show = () => setIsVisible(true)

    const isInView = () => {
      const rect = node.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0
    }

    // 1. Already visible, or no observer support: show immediately.
    if (!('IntersectionObserver' in window) || isInView()) {
      show()
      return
    }

    let observer = null

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            show()
            if (once) observer?.unobserve(entry.target)
          } else if (!once) {
            setIsVisible(false)
          }
        },
        { threshold, rootMargin },
      )
      observer.observe(node)
    }

    // 2. Fallback: a passive scroll check in case the observer never fires.
    let ticking = false
    const onScroll = () => {
      if (ticking || isVisible) return
      ticking = true
      window.requestAnimationFrame(() => {
        ticking = false
        if (isInView()) {
          show()
          window.removeEventListener('scroll', onScroll)
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      observer?.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [threshold, rootMargin, once, isVisible])

  return [ref, isVisible]
}
