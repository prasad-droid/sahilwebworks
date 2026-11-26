import { useEffect } from 'react'

/**
 * Locks body scroll while `locked` is true (used by the mobile menu and the
 * product modal) and restores the previous value on cleanup.
 */
export default function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined
    const { overflow, paddingRight } = document.body.style
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`
    return () => {
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
    }
  }, [locked])
}
