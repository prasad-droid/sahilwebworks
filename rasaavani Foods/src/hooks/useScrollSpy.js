import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view and returns its id.
 * Used by the navbar to highlight the active navigation link.
 */
export default function useScrollSpy(ids, offset = 140) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    let frame = 0

    const compute = () => {
      const scrollPos = window.scrollY + offset
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      // Bottom of page always activates the last section
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 4
      ) {
        current = ids[ids.length - 1]
      }
      setActiveId(current)
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ids, offset])

  return activeId
}
