import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const initialForm = {
  name: '',
  company: '',
  mobile: '',
  email: '',
  product: '',
  quantity: '',
  message: '',
}

export default function Inquiry() {
  const { t, lang } = useLanguage()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const products = [
    t.inquiry.productOptions.wallets[lang],
    t.inquiry.productOptions.belts[lang],
    t.inquiry.productOptions.lamps[lang],
    t.inquiry.productOptions.multiple[lang],
    t.inquiry.productOptions.other[lang],
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hello Nilmani Global,%0A%0AName: ${form.name}%0ACompany: ${form.company}%0AMobile: ${form.mobile}%0AEmail: ${form.email}%0AProduct: ${form.product}%0AQuantity: ${form.quantity}%0AMessage: ${form.message}`
    )
    window.open(`https://wa.me/919076197336?text=${msg}`, '_blank')
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section
      id="inquiry"
      className="py-24 md-py-32 relative overflow-hidden"
      style={{ background: '#1F1F1F' }}
    >
      <div
        className="absolute inset-0 opacity-0p08"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, #C49A6C 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #5A3928 0%, transparent 50%)',
        }}
      />
      <div className="max-w-4xl mx-auto px-6 md-px-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl md-text-4xl lg-text-5xl font-bold mb-4"
            style={{
              color: '#F7F2EA',
              fontFamily: "'Playfair Display', serif",
            }}
          >
            {t.inquiry.title[lang]}
          </h2>
          <div className="w-16 h-0p5 mx-auto mb-4" style={{ background: '#C49A6C' }} />
          <p className="text-sm md-text-base max-w-2xl mx-auto" style={{ color: '#B28A45' }}>
            {t.inquiry.subtitle[lang]}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fade}
        >
          {submitted ? (
            <div
              className="text-center p-12 rounded-2xl"
              style={{
                background: 'rgba(196, 154, 108, 0.1)',
                border: '1px solid rgba(196, 154, 108, 0.2)',
              }}
            >
              <span className="text-4xl block mb-4">✓</span>
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: '#F7F2EA', fontFamily: "'Playfair Display', serif" }}
              >
                {t.inquiry.thankYou[lang]}
              </h3>
              <p className="text-sm" style={{ color: '#B28A45' }}>
                {t.inquiry.thankYouMsg[lang]}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 md-p-10 space-y-5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="grid md-grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder={t.inquiry.name[lang]}
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus-ring-2"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#F7F2EA',
                  }}
                />
                <input
                  type="text"
                  name="company"
                  placeholder={t.inquiry.company[lang]}
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus-ring-2"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#F7F2EA',
                  }}
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder={t.inquiry.mobile[lang]}
                  required
                  value={form.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus-ring-2"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#F7F2EA',
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.inquiry.email[lang]}
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus-ring-2"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#F7F2EA',
                  }}
                />
                <select
                  name="product"
                  value={form.product}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus-ring-2 appearance-none"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: form.product ? '#F7F2EA' : 'rgba(255,255,255,0.4)',
                  }}
                >
                  <option value="" disabled>
                    {t.inquiry.product[lang]}
                  </option>
                  {products.map((p) => (
                    <option key={p} value={p} style={{ color: '#1F1F1F' }}>
                      {p}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="quantity"
                  placeholder={t.inquiry.quantity[lang]}
                  value={form.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus-ring-2"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: '#F7F2EA',
                  }}
                />
              </div>
              <textarea
                name="message"
                placeholder={t.inquiry.message[lang]}
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus-ring-2 resize-none"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#F7F2EA',
                }}
              />
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3p5 rounded-lg text-sm font-semibold transition-all duration-200 hover-opacity-90"
                  style={{ background: '#C49A6C', color: '#1F1F1F' }}
                >
                  <Send size={16} />
                  {t.inquiry.send[lang]}
                </button>
                <a
                  href="https://wa.me/919076197336?text=Hello%20Nilmani%20Global%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3p5 rounded-lg text-sm font-semibold transition-all duration-200 hover-opacity-90"
                  style={{
                    background: '#25D366',
                    color: '#FFFFFF',
                  }}
                >
                  <MessageCircle size={16} />
                  {t.inquiry.chat[lang]}
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
