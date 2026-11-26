import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const w = '/assets/Wallets/'
const l = '/assets/lanterns/'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const heroImages = [
  `${w}WhatsApp Image 2026-07-27 at 8.00.08 PM.jpeg`,
  `${w}WhatsApp Image 2026-07-27 at 8.00.07 PM.jpeg`,
  `${l}WhatsApp Image 2026-07-27 at 8.03.52 PM.jpeg`,
]

export default function Hero() {
  const { t, lang } = useLanguage()

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0" style={{ background: '#1F1F1F' }}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse at 20% 50%, #5A3928 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #C49A6C 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md-px-16 pt-32 pb-20">
        <motion.div
          className="grid lg-grid-cols-2 gap-12 lg-gap-16 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.span
              variants={item}
              className="inline-block px-4 py-1p5 rounded-full text-xs font-medium mb-6 tracking-wider uppercase"
              style={{
                background: 'rgba(196, 154, 108, 0.2)',
                color: '#C49A6C',
                border: '1px solid rgba(196, 154, 108, 0.3)',
              }}
            >
              {t.hero.badge[lang]}
            </motion.span>

            <motion.h1
              variants={item}
              className="text-4xl sm-text-5xl md-text-6xl lg-text-7xl font-bold leading-1p08 mb-6"
              style={{ color: '#FFFFFF', fontFamily: "'Playfair Display', serif" }}
            >
              {t.hero.heading1[lang]}{' '}
              <span style={{ color: '#C49A6C' }}>{t.hero.heading2[lang]}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md-text-xl font-light mb-4"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {t.hero.sub1[lang]}
            </motion.p>

            <motion.p
              variants={item}
              className="text-sm md-text-base mb-8 leading-relaxed max-w-lg"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              {t.hero.sub2[lang]}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-7 py-3p5 rounded-lg text-sm font-semibold transition-all duration-300 hover-opacity-90 group"
                style={{ background: '#C49A6C', color: '#1F1F1F' }}
              >
                {t.hero.explore[lang]}
                <ArrowRight
                  size={16}
                  className="group-hover-translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 px-7 py-3p5 rounded-lg text-sm font-semibold transition-all duration-300 hover-opacity-90"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <MessageCircle size={16} />
                {t.hero.inquiry[lang]}
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-4 text-xs tracking-wider uppercase"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              <span className="flex items-center gap-1p5">
                <span
                  className="w-1p5 h-1p5 rounded-full inline-block"
                  style={{ background: '#C49A6C' }}
                />
                {t.hero.trading[lang]}
              </span>
              <span className="flex items-center gap-1p5">
                <span
                  className="w-1p5 h-1p5 rounded-full inline-block"
                  style={{ background: '#C49A6C' }}
                />
                {t.hero.quality[lang]}
              </span>
              <span className="flex items-center gap-1p5">
                <span
                  className="w-1p5 h-1p5 rounded-full inline-block"
                  style={{ background: '#C49A6C' }}
                />
                {t.hero.customer[lang]}
              </span>
            </motion.div>
          </div>

          <motion.div variants={item} className="hidden lg-block">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="overflow-hidden rounded-2xl group">
                  <img
                    src={heroImages[0]}
                    alt="Premium leather wallet"
                    className="w-full h-64 object-cover group-hover-scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)',
                    }}
                  />
                </div>
                <div className="overflow-hidden rounded-2xl group">
                  <img
                    src={heroImages[2]}
                    alt="Bamboo lighting lamp"
                    className="w-full h-48 object-cover group-hover-scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl group">
                  <img
                    src={heroImages[1]}
                    alt="Leather belt"
                    className="w-full h-56 object-cover group-hover-scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
                <div
                  className="rounded-2xl p-6 flex flex-col items-center justify-center text-center"
                  style={{
                    background: 'rgba(196, 154, 108, 0.12)',
                    border: '1px solid rgba(196, 154, 108, 0.2)',
                    minHeight: '8rem',
                  }}
                >
                  <span
                    className="text-2xl font-bold mb-1"
                    style={{ color: '#C49A6C', fontFamily: "'Playfair Display', serif" }}
                  >
                    {t.hero.since[lang]}
                  </span>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {t.hero.sinceSub[lang]}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #F7F2EA 0%, transparent 100%)',
        }}
      />
    </section>
  )
}
