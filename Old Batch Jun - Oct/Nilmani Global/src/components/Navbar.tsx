import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, lang } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: t.nav.home[lang], href: '#hero' },
    { label: t.nav.about[lang], href: '#about' },
    { label: t.nav.products[lang], href: '#products' },
    { label: t.nav.whyUs[lang], href: '#why' },
    { label: t.nav.blog[lang], href: '#blog' },
    { label: t.nav.contact[lang], href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(31, 31, 31, 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.15)' : 'none',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-2" style={{ height: 80 }}>
          <a href="#hero" className="flex items-center ">
              <img
                src="/assets/logo.png"
                alt="Nilmani Global"
                height={"64px"}
              />
          </a>

          <div className="hidden lg-flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide transition-colors duration-200"
                style={{ color: scrolled ? '#E8DED1' : 'rgba(255,255,255,0.85)' }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8' }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg-block">
              <LanguageSwitcher />
            </div>
            <div className="lg-hidden">
              <LanguageSwitcher />
            </div>
            <button
              className="lg-hidden p-2 cursor-pointer"
              onClick={() => setMenuOpen(true)}
              style={{ color: scrolled ? '#F7F2EA' : '#FFFFFF', background: 'none', border: 'none' }}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-60"
            style={{ background: '#1F1F1F' }}
          >
            <div className="flex justify-end items-center gap-3 p-6">
              <LanguageSwitcher dark />
              <button
                onClick={() => setMenuOpen(false)}
                style={{ color: '#F7F2EA', background: 'none', border: 'none', cursor: 'pointer' }}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-8 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium tracking-wide"
                  style={{ color: '#E8DED1', fontFamily: "'Playfair Display', serif" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/919076197336?text=Hello%20Nilmani%20Global%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg text-base font-semibold mt-4"
                style={{ background: '#25D366', color: '#fff' }}
                onClick={() => setMenuOpen(false)}
              >
                <Phone size={18} />
                {t.nav.whatsapp[lang]}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
