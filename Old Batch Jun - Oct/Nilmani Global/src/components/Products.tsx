import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const w = '/assets/Wallets/'
const b = '/assets/Belts/'
const l = '/assets/lanterns/'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const walletImgs = [
  `${w}WhatsApp Image 2026-07-27 at 8.00.08 PM.jpeg`,
  `${w}WhatsApp Image 2026-07-27 at 8.00.08 PM (1).jpeg`,
  `${w}WhatsApp Image 2026-07-27 at 8.00.08 PM (2).jpeg`,
  `${w}WhatsApp Image 2026-07-27 at 8.00.07 PM.jpeg`,
  `${w}WhatsApp Image 2026-07-27 at 8.00.07 PM (1).jpeg`,
]

const beltImgs = [
  `${b}Belt 1.jpg.jpeg`,
  `${b}Belt 2.jpg.jpeg`,
  `${b}Belt 3.jpg.jpeg`,
  `${b}belt 4.jpg.jpeg`,
]

const lampImgs = [
  `${l}WhatsApp Image 2026-07-27 at 8.03.52 PM.jpeg`,
  `${l}WhatsApp Image 2026-07-27 at 8.03.52 PM (1).jpeg`,
  `${l}WhatsApp Image 2026-07-27 at 8.03.51 PM.jpeg`,
  `${l}WhatsApp Image 2026-07-27 at 8.03.51 PM (1).jpeg`,
  `${l}WhatsApp Image 2026-07-27 at 8.03.51 PM (2).jpeg`,
]

type Product = { name: string; desc: string; img: string }

function ProductCard({ product }: { product: Product }) {
  const { t, lang } = useLanguage()
  const msg = encodeURIComponent(
    `Hello Nilmani Global, I am interested in your ${product.name}. Please share the details, pricing and availability.`
  )

  return (
    <motion.div
      variants={fade}
      className="group rounded-2xl overflow-hidden transition-all duration-300 hover-translate-y-1"
      style={{
        background: '#FFFFFF',
        border: '1px solid #E8DED1',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      <div className="relative h-56 md-h-64 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover-scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover-opacity-100 transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(to top, rgba(31,31,31,0.4) 0%, transparent 60%)',
          }}
        />
        <a
          href={`https://wa.me/919076197336?text=${msg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover-opacity-100 transition-all duration-300 hover-scale-110"
          style={{ background: '#25D366' }}
        >
          <MessageCircle size={16} color="#fff" />
        </a>
      </div>
      <div className="p-5 md-p-6">
        <h4
          className="text-lg font-bold mb-2"
          style={{ color: '#1F1F1F', fontFamily: "'Playfair Display', serif" }}
        >
          {product.name}
        </h4>
        <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B6B6B' }}>
          {product.desc}
        </p>
        <p
          className="text-xs mb-5 italic"
          style={{ color: '#B28A45' }}
        >
          {t.products.available[lang]}
        </p>
        <a
          href={`https://wa.me/919076197336?text=${msg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2p5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover-opacity-90"
          style={{ background: '#C49A6C', color: '#1F1F1F' }}
        >
          <MessageCircle size={14} />
          {t.products.enquire[lang]}
        </a>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const { t, lang } = useLanguage()

  const wallets: Product[] = [
    { name: t.products.wallet1[lang], desc: t.products.wallet1Desc[lang], img: walletImgs[0] },
    { name: t.products.wallet2[lang], desc: t.products.wallet2Desc[lang], img: walletImgs[1] },
    { name: t.products.wallet3[lang], desc: t.products.wallet3Desc[lang], img: walletImgs[2] },
    { name: t.products.wallet4[lang], desc: t.products.wallet4Desc[lang], img: walletImgs[3] },
    { name: t.products.wallet5[lang], desc: t.products.wallet5Desc[lang], img: walletImgs[4] },
  ]

  const belts: Product[] = [
    { name: t.products.belt1[lang], desc: t.products.belt1Desc[lang], img: beltImgs[0] },
    { name: t.products.belt2[lang], desc: t.products.belt2Desc[lang], img: beltImgs[1] },
    { name: t.products.belt3[lang], desc: t.products.belt3Desc[lang], img: beltImgs[2] },
    { name: t.products.belt4[lang], desc: t.products.belt4Desc[lang], img: beltImgs[3] },
  ]

  const bambooLights: Product[] = [
    { name: t.products.lamp1[lang], desc: t.products.lamp1Desc[lang], img: lampImgs[0] },
    { name: t.products.lamp2[lang], desc: t.products.lamp2Desc[lang], img: lampImgs[1] },
    { name: t.products.lamp3[lang], desc: t.products.lamp3Desc[lang], img: lampImgs[2] },
    { name: t.products.lamp4[lang], desc: t.products.lamp4Desc[lang], img: lampImgs[3] },
    { name: t.products.lamp5[lang], desc: t.products.lamp5Desc[lang], img: lampImgs[4] },
  ]

  return (
    <section id="products" className="py-24 md-py-32" style={{ background: '#F7F2EA' }}>
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
            {t.products.title[lang]}
          </h2>
          <div className="w-16 h-0p5 mx-auto mb-4" style={{ background: '#C49A6C' }} />
          <p className="text-sm md-text-base max-w-2xl mx-auto" style={{ color: '#6B6B6B' }}>
            {t.products.subtitle[lang]}
          </p>
        </motion.div>

        {/* Leather Collection */}
        <div className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fade}
            className="mb-10"
          >
            <h3
              className="text-2xl md-text-3xl font-bold mb-2"
              style={{ color: '#5A3928', fontFamily: "'Playfair Display', serif" }}
            >
              {t.products.leather[lang]}
            </h3>
            <p className="text-sm" style={{ color: '#6B6B6B' }}>
              {t.products.leatherSub[lang]}
            </p>
          </motion.div>

          <div className="mb-12">
            <h4
              className="text-lg font-semibold mb-6 flex items-center gap-2"
              style={{ color: '#1F1F1F', fontFamily: "'Playfair Display', serif" }}
            >
              <span
                className="w-1p5 h-6 rounded-full inline-block"
                style={{ background: '#C49A6C' }}
              />
              {t.products.wallets[lang]}
            </h4>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="grid sm-grid-cols-2 lg-grid-cols-3 xl-grid-cols-5 gap-5"
            >
              {wallets.map((p, i) => (
                <ProductCard key={i} product={p} />
              ))}
            </motion.div>
          </div>

          <div>
            <h4
              className="text-lg font-semibold mb-6 flex items-center gap-2"
              style={{ color: '#1F1F1F', fontFamily: "'Playfair Display', serif" }}
            >
              <span
                className="w-1p5 h-6 rounded-full inline-block"
                style={{ background: '#C49A6C' }}
              />
              {t.products.belts[lang]}
            </h4>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="grid sm-grid-cols-2 lg-grid-cols-4 gap-5"
            >
              {belts.map((p, i) => (
                <ProductCard key={i} product={p} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bamboo Lighting */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
        >
          <div className="mb-10">
            <h3
              className="text-2xl md-text-3xl font-bold mb-2"
              style={{ color: '#5A3928', fontFamily: "'Playfair Display', serif" }}
            >
              {t.products.bamboo[lang]}
            </h3>
            <p className="text-sm" style={{ color: '#6B6B6B' }}>
              {t.products.bambooSub[lang]}
            </p>
          </div>

          <h4
            className="text-lg font-semibold mb-6 flex items-center gap-2"
            style={{ color: '#1F1F1F', fontFamily: "'Playfair Display', serif" }}
          >
            <span
              className="w-1p5 h-6 rounded-full inline-block"
              style={{ background: '#C49A6C' }}
            />
            {t.products.bambooLamps[lang]}
          </h4>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid sm-grid-cols-2 lg-grid-cols-3 xl-grid-cols-5 gap-5 mb-12"
          >
            {bambooLights.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </motion.div>

          <div className="text-center">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 px-8 py-3p5 rounded-lg text-sm font-semibold transition-all duration-200 hover-opacity-90"
              style={{ background: '#5A3928', color: '#FFFFFF' }}
            >
              {t.products.enquireAll[lang]}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
