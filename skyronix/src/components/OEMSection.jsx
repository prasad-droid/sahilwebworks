import Reveal from './Reveal.jsx'
import { img } from '../data/products.js'
import { WhatsApp, ArrowRight, Printer, Package, ShieldCheck, Globe } from './Icons.jsx'

const FEATURES = [
  { icon: Printer, text: 'Private label & custom packaging' },
  { icon: Package, text: 'Custom product development' },
  { icon: ShieldCheck, text: 'Compliance for 30+ markets' },
  { icon: Globe, text: 'NDA-protected, exclusive sourcing' },
]

export default function OEMSection() {
  return (
    <section id="oem" className="section oem">
      <div className="container oem__grid">
        <Reveal>
          <span className="eyebrow">OEM &amp; Private Label</span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Build <span className="text-gradient">your own toy brand</span>
            on an Indian supply base
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)' }}>
            Most global toy brands start in India&apos;s factories. We make that journey simple and
            fully confidential — bringing your product idea to a compliant, ready-to-shop SKU with
            your name on the box.
          </p>

          <div className="oem__features">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <span key={f.text} className="oem__feature">
                  <Icon size={20} />
                  {f.text}
                </span>
              )
            })}
          </div>

          <div className="stack">
            <a href="#contact" className="btn btn--light">
              Discuss Your OEM Project
              <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/919309187314?text=Hello%20Skyronix%20Overseas%20Pvt.%20Ltd.%2C%20I%20would%20like%20to%20discuss%20a%20product%20sourcing%2Fexport%20requirement."
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline-light"
            >
              <WhatsApp size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal className="oem__media" delay={140}>
          <img
            src={img('1597008605956-f9200dc543ca', 900, 80)}
            alt="Classic yellow manual concept car model representing OEM product development"
            loading="lazy"
          />
          <div className="oem__media-float">
            <strong>Confidential by default.</strong> NDA protection on every OEM and product
            development engagement.
          </div>
        </Reveal>
      </div>
    </section>
  )
}