import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, Send, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const contactInfo = {
  name: 'Nilmani Global',
  mobile: '9076197336',
  email: 'business@nilmaniglobal.com',
  address:
    'B10/34/2:1, Dattaguru Nagar, Sector 15, Vashi, Navi Mumbai, Maharashtra, India',
}

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  contactInfo.address
)}&output=embed`

export default function Contact() {
  const { t, lang } = useLanguage()

  return (
    <section
      id="contact"
      className="py-24 md-py-32"
      style={{ background: '#FFFFFF' }}
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
            {t.contact.title[lang]}
          </h2>
          <div className="w-16 h-0p5 mx-auto" style={{ background: '#C49A6C' }} />
        </motion.div>

        <div className="grid lg-grid-cols-2 gap-12 lg-gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fade}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: '#5A3928', fontFamily: "'Playfair Display', serif" }}
            >
              {contactInfo.name}
            </h3>

            <div className="space-y-6 mb-10">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover-translate-x-1"
                style={{ background: '#F7F2EA', border: '1px solid #E8DED1' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#C49A6C', color: '#1F1F1F' }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <span
                    className="block text-xs font-medium mb-0p5"
                    style={{ color: '#B28A45' }}
                  >
                    {t.contact.call[lang]}
                  </span>                  <span className="text-sm font-semibold" style={{ color: '#1F1F1F' }}>
                    {contactInfo.mobile}
                  </span>
                </div>
              </a>

              <a
                href={`https://wa.me/91${contactInfo.mobile}?text=Hello%20Nilmani%20Global%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover-translate-x-1"
                style={{ background: '#F7F2EA', border: '1px solid #E8DED1' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#25D366', color: '#FFFFFF' }}
                >
                  <MessageCircle size={18} />
                </div>
                <div>
                  <span
                    className="block text-xs font-medium mb-0p5"
                    style={{ color: '#B28A45' }}
                  >
                    {t.contact.whatsapp[lang]}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: '#1F1F1F' }}>
                    {contactInfo.mobile}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover-translate-x-1"
                style={{ background: '#F7F2EA', border: '1px solid #E8DED1' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#5A3928', color: '#FFFFFF' }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <span
                    className="block text-xs font-medium mb-0p5"
                    style={{ color: '#B28A45' }}
                  >
                    {t.contact.email[lang]}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: '#1F1F1F' }}>
                    {contactInfo.email}
                  </span>
                </div>
              </a>

              <div
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{ background: '#F7F2EA', border: '1px solid #E8DED1' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#B28A45', color: '#FFFFFF' }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <span
                    className="block text-xs font-medium mb-0p5"
                    style={{ color: '#B28A45' }}
                  >
                    {t.contact.address[lang]}
                  </span>
                  <span className="text-sm" style={{ color: '#4A4A4A' }}>
                    {contactInfo.address}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover-opacity-90"
                style={{ background: '#5A3928', color: '#FFFFFF' }}
              >
                <Phone size={16} />
                {t.contact.callBtn[lang]}
              </a>
              <a
                href={`https://wa.me/91${contactInfo.mobile}?text=Hello%20Nilmani%20Global%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover-opacity-90"
                style={{ background: '#25D366', color: '#FFFFFF' }}
              >
                <MessageCircle size={16} />
                {t.contact.whatsapp[lang]}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover-opacity-90"
                style={{
                  background: 'transparent',
                  color: '#5A3928',
                  border: '1px solid #5A3928',
                }}
              >
                <Mail size={16} />
                {t.contact.email[lang]}
              </a>
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover-opacity-90"
                style={{ background: '#C49A6C', color: '#1F1F1F' }}
              >
                <Send size={16} />
                {t.contact.inquiryBtn[lang]}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fade}
            className="rounded-2xl overflow-hidden h-80 md-h-auto min-h-300"
            style={{
              border: '1px solid #E8DED1',
            }}
          >
            <iframe
              title="Nilmani Global Location"
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
