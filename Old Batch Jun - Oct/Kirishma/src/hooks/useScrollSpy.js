import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the navbar can show an
 * active indicator. Uses a rootMargin band near the upper third of the
 * viewport instead of IntersectionObserver ratios, which behave poorly for
 * sections of very different heights.
 */
export default function useScrollSpy(sectionIds, options = {}) {
  const { rootMargin = '-45% 0px -50% 0px', threshold = 0 } = options
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length) setActiveId(visible[0].target.id)
      },
      { rootMargin, threshold },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [sectionIds, rootMargin, threshold])

  return activeId
}
