import { ArrowUpRight, Globe2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { images } from '../data/siteData'
import '../styles/InternationalTrade.css'

export default function InternationalTrade() {
  return (
    <section className="trade" id="global-trade">
      <div className="container trade__inner">
        <div className="trade__content" data-reveal="left">
          <SectionHeading
            light
            eyebrow="Global Outlook"
            title="Connecting Businesses Beyond Borders"
            subtitle="Our focus is to connect with international buyers and develop business opportunities in overseas markets. We aim to understand customer requirements and build strong trading relationships through professional coordination."
          />

          <a className="btn btn--gold" href="#quote">
            Discuss Your Requirements <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>

        <div className="trade__visual" data-reveal="right">
          <div className="trade__globe-wrap" aria-hidden="true">
            <svg className="trade__globe" viewBox="0 0 520 520" fill="none">
              <circle cx="260" cy="260" r="205" stroke="currentColor" strokeOpacity=".25" />
              <ellipse cx="260" cy="260" rx="88" ry="205" stroke="currentColor" strokeOpacity=".22" />
              <ellipse cx="260" cy="260" rx="158" ry="205" stroke="currentColor" strokeOpacity=".18" />
              <path d="M55 260h410" stroke="currentColor" strokeOpacity=".22" />
              <ellipse cx="260" cy="260" rx="205" ry="72" stroke="currentColor" strokeOpacity=".22" />
              <ellipse cx="260" cy="260" rx="205" ry="145" stroke="currentColor" strokeOpacity=".16" />
              <path
                className="trade__route"
                d="M96 188C160 106 348 96 424 178M88 330C160 414 350 426 430 340M132 234C206 292 316 292 392 226"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 9"
                strokeLinecap="round"
              />
              <circle cx="96" cy="188" r="7" fill="#D9A441" />
              <circle cx="424" cy="178" r="7" fill="#D9A441" />
              <circle cx="88" cy="330" r="6" fill="#FFFFFF" fillOpacity=".9" />
              <circle cx="430" cy="340" r="6" fill="#FFFFFF" fillOpacity=".9" />
              <circle cx="260" cy="260" r="9" fill="#1769AA" />
              <circle cx="260" cy="260" r="17" stroke="#1769AA" strokeOpacity=".55" />
            </svg>
          </div>

          <div className="trade__photo">
            <img
              src={images.trade}
              alt="Cargo ships docked at a port for international trade"
              loading="lazy"
            />
          </div>

          <div className="trade__badge">
            <Globe2 size={18} aria-hidden="true" />
            <span>Built for international buyers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
