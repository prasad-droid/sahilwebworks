import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button type="button" className={`back-to-top ${visible ? 'is-visible' : ''}`} onClick={goTop} aria-label="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  )
}

export default BackToTop
