import { motion } from 'framer-motion'
import { FileText, MessageSquare, Search, Truck } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const icons = [
  <FileText key="i1" size={24} />,
  <MessageSquare key="i2" size={24} />,
  <Search key="i3" size={24} />,
  <Truck key="i4" size={24} />,
]

export default function BusinessProcess() {
  const { t, lang } = useLanguage()

  const steps = [
    { step: '01', icon: icons[0], title: t.process.step1[lang], desc: t.process.step1Desc[lang] },
    { step: '02', icon: icons[1], title: t.process.step2[lang], desc: t.process.step2Desc[lang] },
    { step: '03', icon: icons[2], title: t.process.step3[lang], desc: t.process.step3Desc[lang] },
    { step: '04', icon: icons[3], title: t.process.step4[lang], desc: t.process.step4Desc[lang] },
  ]

  return (
    <section id="process" className="py-24 md-py-32" style={{ background: '#FFFFFF' }}>
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
            {t.process.title[lang]}
          </h2>
          <div className="w-16 h-0p5 mx-auto" style={{ background: '#C49A6C' }} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid md-grid-cols-4 gap-6 md-gap-8 relative"
        >
          {/* Connector line */}
          <div
            className="hidden md-block absolute top-12 left-12p5 right-12p5 h-px"
            style={{ background: '#E8DED1' }}
          />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={fade}
              className="relative text-center p-6 md-p-8"
            >
              <div
                className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: '#C49A6C', color: '#1F1F1F' }}
              >
                {s.icon}
              </div>
              <span
                className="block text-xs font-bold tracking-widest mb-3"
                style={{ color: '#B28A45' }}
              >
                {s.step}
              </span>
              <h3
                className="text-base font-bold mb-3"
                style={{
                  color: '#1F1F1F',
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
