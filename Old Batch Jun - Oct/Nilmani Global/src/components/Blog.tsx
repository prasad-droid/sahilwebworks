import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Blog() {
  const { t, lang } = useLanguage()

  return (
    <section id="blog" className="py-24 md-py-32" style={{ background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-6 md-px-16">
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
            {t.blog.title[lang]}
          </h2>
          <div className="w-16 h-0p5 mx-auto mb-4" style={{ background: '#C49A6C' }} />
          <p className="text-sm md-text-base max-w-2xl mx-auto" style={{ color: '#6B6B6B' }}>
            {t.blog.subtitle[lang]}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
          className="text-center p-12 md-p-16 rounded-2xl"
          style={{
            background: '#F7F2EA',
            border: '1px solid #E8DED1',
          }}
        >
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: '#1F1F1F', fontFamily: "'Playfair Display', serif" }}
          >
            {t.blog.comingSoon[lang]}
          </h3>
          <p className="text-sm mb-8 max-w-xl mx-auto" style={{ color: '#6B6B6B' }}>
            {t.blog.comingSoonMsg[lang]}
          </p>
          <a
            href="#inquiry"
            className="inline-flex items-center gap-2 px-8 py-3p5 rounded-lg text-sm font-semibold transition-all duration-200 hover-opacity-90"
            style={{ background: '#5A3928', color: '#FFFFFF' }}
          >
            {t.blog.cta[lang]}
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
