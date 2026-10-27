import { useEffect, useState } from 'react'
import './BackToTop.css'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 14.25V3.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.75 9L9 3.75L14.25 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

export default BackToTop
