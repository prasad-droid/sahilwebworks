import { motion } from 'framer-motion'
import { Shield, Search, Heart, Users } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const icons = [
  <Shield key="i1" size={24} />,
  <Search key="i2" size={24} />,
  <Heart key="i3" size={24} />,
  <Users key="i4" size={24} />,
]

export default function WhyChooseUs() {
  const { t, lang } = useLanguage()

  const cards = [
    { icon: icons[0], title: t.why.f1Title[lang], desc: t.why.f1Desc[lang] },
    { icon: icons[1], title: t.why.f2Title[lang], desc: t.why.f2Desc[lang] },
    { icon: icons[2], title: t.why.f3Title[lang], desc: t.why.f3Desc[lang] },
    { icon: icons[3], title: t.why.f4Title[lang], desc: t.why.f4Desc[lang] },
  ]

  return (
    <section
      id="why"
      className="py-24 md-py-32 relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div
        className="absolute top-0 right-0 w-1p3 h-full opacity-0p03 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, #5A3928 0%, transparent 70%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-6 md-px-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md-text-4xl lg-text-5xl font-bold mb-4"
            style={{ color: '#1F1F1F', fontFamily: "'Playfair Display', serif" }}
          >
            {t.why.title[lang]}
          </h2>
          <div className="w-16 h-0p5 mx-auto" style={{ background: '#C49A6C' }} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid md-grid-cols-2 lg-grid-cols-4 gap-6"
        >
          {cards.map((c, i) => (
            <motion.div
              key={i}
              variants={fade}
              className="p-8 rounded-2xl text-center transition-all duration-300 hover-translate-y-1 group"
              style={{
                background: '#F7F2EA',
                border: '1px solid #E8DED1',
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover-scale-110"
                style={{ background: '#C49A6C', color: '#FFFFFF' }}
              >
                {c.icon}
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: '#1F1F1F', fontFamily: "'Playfair Display', serif" }}
              >
                {c.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
