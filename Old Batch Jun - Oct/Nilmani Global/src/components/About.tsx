import { motion } from 'framer-motion'
import { ShieldCheck, Handshake, Target } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const featureIcons = [
  <ShieldCheck key="f1" size={22} />,
  <Handshake key="f2" size={22} />,
  <Target key="f3" size={22} />,
]

export default function About() {
  const { t, lang } = useLanguage()

  const features = [
    {
      icon: featureIcons[0],
      title: t.about.f1Title[lang],
      desc: t.about.f1Desc[lang],
    },
    {
      icon: featureIcons[1],
      title: t.about.f2Title[lang],
      desc: t.about.f2Desc[lang],
    },
    {
      icon: featureIcons[2],
      title: t.about.f3Title[lang],
      desc: t.about.f3Desc[lang],
    },
  ]

  return (
    <section
      id="about"
      className="py-24 md-py-32"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-6 md-px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2
            className="text-3xl md-text-4xl lg-text-5xl font-bold mb-6"
            style={{ color: '#1F1F1F', fontFamily: "'Playfair Display', serif" }}
          >
            {t.about.title[lang]}
          </h2>
          <div className="w-16 h-0p5 mx-auto mb-6" style={{ background: '#C49A6C' }} />
        </motion.div>

        <div className="grid lg-grid-cols-2 gap-12 lg-gap-20 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fade}
          >
            <p
              className="text-base md-text-lg leading-relaxed mb-6"
              style={{ color: '#4A4A4A' }}
            >
              {t.about.p1[lang]}
            </p>
            <p
              className="text-base md-text-lg leading-relaxed mb-6"
              style={{ color: '#4A4A4A' }}
            >
              {t.about.p2[lang]}
            </p>
            <p
              className="text-base md-text-lg leading-relaxed mb-6"
              style={{ color: '#4A4A4A' }}
            >
              {t.about.p3[lang]}
            </p>
            <p
              className="text-base md-text-lg leading-relaxed"
              style={{ color: '#4A4A4A' }}
            >
              {t.about.p4[lang]}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fade}
            className="flex items-center"
          >
            <div
              className="p-8 md-p-10 rounded-2xl relative overflow-hidden"
              style={{
                background: '#F7F2EA',
                border: '1px solid #E8DED1',
              }}
            >
              <span
                className="text-6xl md-text-7xl font-bold absolute -top-4 -right-2 opacity-5"
                style={{ color: '#5A3928' }}
              >
                &ldquo;
              </span>
              <p
                className="text-lg md-text-xl italic font-medium leading-relaxed"
                style={{ color: '#5A3928', fontFamily: "'Playfair Display', serif" }}
              >
                {t.about.quote[lang]}
              </p>            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid md-grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fade}
              className="p-8 rounded-2xl transition-all duration-300 hover-translate-y-1"
              style={{
                background: '#F7F2EA',
                border: '1px solid #E8DED1',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: '#C49A6C', color: '#FFFFFF' }}
              >
                {f.icon}
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: '#1F1F1F', fontFamily: "'Playfair Display', serif" }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B6B6B' }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
