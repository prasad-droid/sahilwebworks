import { useEffect, useState } from 'react'

/**
 * Reveals every element carrying the `.reveal` class as it scrolls into view.
 * Falls back to showing everything immediately when the visitor prefers
 * reduced motion or when IntersectionObserver is unavailable.
 */
export function useRevealObserver() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))
    if (elements.length === 0) return undefined

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/**
 * Tracks which section is currently in view so the navbar can highlight
 * the matching navigation item.
 */
export function useScrollSpy(ids, offset = 140) {
  const [activeId, setActiveId] = useState(ids[0] || '')

  useEffect(() => {
    if (!ids.length) return undefined

    const handleScroll = () => {
      const scrollY = window.scrollY
      let current = ids[0]

      ids.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.offsetTop - offset <= scrollY) {
          current = id
        }
      })

      // Snap to the last section when the page is scrolled to the bottom.
      if (window.innerHeight + scrollY >= document.body.offsetHeight - 4) {
        current = ids[ids.length - 1]
      }

      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids, offset])

  return activeId
}

/** Detects whether the viewport is at or above a given width. */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)
    handler(mql)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [query])

  return matches
}
