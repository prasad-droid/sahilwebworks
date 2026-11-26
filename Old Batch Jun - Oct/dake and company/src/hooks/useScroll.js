import { useEffect, useState } from 'react'

export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

export function useActiveSection(ids, offset = 120) {
  const [active, setActive] = useState(ids[0] || '')

  useEffect(() => {
    if (!ids.length) return undefined

    const onScroll = () => {
      const position = window.scrollY + offset + 10
      let current = ids[0]

      for (let i = 0; i < ids.length; i += 1) {
        const el = document.getElementById(ids[i])
        if (!el) continue
        if (el.offsetTop <= position) {
          current = ids[i]
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return active
}
