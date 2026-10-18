import { motion } from 'framer-motion'
import {
  Store,
  Package,
  GitBranch,
  Shirt,
  Gift,
  Paintbrush,
  Building2,
  Home,
  ShoppingBag,
} from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const icons = [
  <Store key="i1" size={22} />,
  <Package key="i2" size={22} />,
  <GitBranch key="i3" size={22} />,
  <Shirt key="i4" size={22} />,
  <Gift key="i5" size={22} />,
  <Paintbrush key="i6" size={22} />,
  <Building2 key="i7" size={22} />,
  <Home key="i8" size={22} />,
  <ShoppingBag key="i9" size={22} />,
]

export default function Industries() {
  const { t, lang } = useLanguage()

  const industries = [
    { icon: icons[0], name: t.industries.items.retailers[lang] },
    { icon: icons[1], name: t.industries.items.wholesalers[lang] },
    { icon: icons[2], name: t.industries.items.distributors[lang] },
    { icon: icons[3], name: t.industries.items.fashion[lang] },
    { icon: icons[4], name: t.industries.items.corporate[lang] },
    { icon: icons[5], name: t.industries.items.interior[lang] },
    { icon: icons[6], name: t.industries.items.hospitality[lang] },
    { icon: icons[7], name: t.industries.items.decor[lang] },
    { icon: icons[8], name: t.industries.items.bulk[lang] },
  ]

  return (
    <section
      id="industries"
      className="py-24 md-py-32"
      style={{ background: '#F7F2EA' }}
    >
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
            {t.industries.title[lang]}
          </h2>
          <div className="w-16 h-0p5 mx-auto mb-4" style={{ background: '#C49A6C' }} />
          <p
            className="text-sm md-text-base max-w-2xl mx-auto"
            style={{ color: '#6B6B6B' }}
          >
            {t.industries.subtitle[lang]}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 md-grid-cols-3 lg-grid-cols-4 xl-grid-cols-5 gap-4"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              variants={fade}
              className="p-6 rounded-xl text-center transition-all duration-300 hover-translate-y-1 group cursor-default"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E8DED1',
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover-scale-110"
                style={{ background: '#F7F2EA', color: '#5A3928' }}
              >
                {ind.icon}
              </div>
              <h4
                className="text-sm font-semibold leading-snug"
                style={{ color: '#1F1F1F' }}
              >
                {ind.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
