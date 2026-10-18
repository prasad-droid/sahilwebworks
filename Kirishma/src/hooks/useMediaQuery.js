import { useEffect, useState } from 'react'

/**
 * Tracks a media query. Used to switch the mobile menu to the desktop
 * navbar and to close the menu when the viewport grows.
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return

    const list = window.matchMedia(query)
    const handler = (event) => setMatches(event.matches)

    setMatches(list.matches)
    list.addEventListener('change', handler)
    return () => list.removeEventListener('change', handler)
  }, [query])

  return matches
}
