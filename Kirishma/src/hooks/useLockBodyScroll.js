import { useEffect } from 'react'

/**
 * Prevents background scrolling while a modal or the mobile menu is open.
 */
export default function useLockBodyScroll(isLocked) {
  useEffect(() => {
    if (!isLocked) return

    const { body, documentElement } = document
    const previousOverflow = body.style.overflow
    const previousPaddingRight = body.style.paddingRight

    // Compensate for the removed scrollbar so the layout does not jump.
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth
    body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPaddingRight
    }
  }, [isLocked])
}
