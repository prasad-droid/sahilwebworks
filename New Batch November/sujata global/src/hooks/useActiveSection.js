import { useEffect, useState } from 'react'

/** Tracks which section is currently at the top of the viewport. */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '')

  useEffect(() => {
    const update = () => {
      let current = sectionIds[0] || ''

      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= 150) current = id
      })

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      if (atBottom) current = sectionIds[sectionIds.length - 1]

      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [sectionIds])

  return activeId
}
