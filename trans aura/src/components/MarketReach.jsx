import { ArrowRight, Globe2, Network, ScrollText } from 'lucide-react'
import '../styles/MarketReach.css'

const highlights = [
  {
    icon: Network,
    title: 'Indian Supplier Network',
    text: 'Coordinating with reliable Indian supply sources to match buyer requirements.'
  },
  {
    icon: Globe2,
    title: 'International B2B Enquiries',
    text: 'Engaging with importers, distributors and industrial buyers across global markets.'
  },
  {
    icon: ScrollText,
    title: 'Export Documentation & Shipment Coordination',
    text: 'Professional support with export documentation and shipment arrangements.'
  }
]

function GlobeArt() {
  return (
    <svg
      viewBox="0 0 640 420"
      role="img"
      aria-labelledby="marketreach-title"
      className="market__art"
      preserveAspectRatio="xMidYMid slice"
    >
      <title id="marketreach-title">
        Abstract illustration of a global sourcing network centred on India
      </title>
      <defs>
        <radialGradient id="hubGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#e0b84a" stopOpacity="0.9" />
          <stop offset="0.4" stopColor="#e0b84a" stopOpacity="0.18" />
          <stop offset="1" stopColor="#e0b84a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2bb3a3" />
          <stop offset="1" stopColor="#e0b84a" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1">
        <circle cx="320" cy="210" r="150" />
        <circle cx="320" cy="210" r="110" />
        <circle cx="320" cy="210" r="232" strokeDasharray="2 8" />
        <circle cx="320" cy="210" r="300" strokeDasharray="2 8" opacity="0.6" />
      </g>

      {/* generic landmass hints — decorative, no countries */}
      <g fill="#ffffff" opacity="0.05">
        <ellipse cx="176" cy="166" rx="66" ry="40" transform="rotate(-14 176 166)" />
        <ellipse cx="474" cy="150" rx="64" ry="46" transform="rotate(8 474 150)" />
        <ellipse cx="452" cy="286" rx="58" ry="34" transform="rotate(-6 452 286)" />
        <ellipse cx="196" cy="296" rx="54" ry="32" transform="rotate(10 196 296)" />
        <ellipse cx="330" cy="330" rx="70" ry="24" transform="rotate(-2 330 330)" />
      </g>

      {/* connection routes */}
      <g stroke="url(#lineGrad)" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.85">
        <path d="M320 210 C 250 120, 180 130, 140 150" strokeDasharray="1 5" />
        <path d="M320 210 C 400 110, 470 120, 500 148" strokeDasharray="1 5" />
        <path d="M320 210 C 420 260, 470 250, 500 276" strokeDasharray="1 5" />
        <path d="M320 210 C 220 280, 170 280, 150 296" strokeDasharray="1 5" />
        <path d="M320 210 C 300 160, 300 120, 300 92" strokeDasharray="1 5" />
        <path d="M320 210 C 360 290, 360 320, 355 352" strokeDasharray="1 5" />
      </g>

      {/* destination nodes — generic */}
      <g fill="#2bb3a3">
        <circle cx="140" cy="150" r="5" />
        <circle cx="500" cy="148" r="5" />
        <circle cx="500" cy="276" r="5" />
        <circle cx="150" cy="296" r="5" />
        <circle cx="300" cy="92" r="5" />
        <circle cx="355" cy="352" r="5" />
        <circle cx="80" cy="230" r="4" fill="#e0b84a" />
        <circle cx="560" cy="210" r="4" fill="#e0b84a" />
      </g>

      {/* central hub — India focus */}
      <circle cx="320" cy="210" r="92" fill="url(#hubGlow)" />
      <circle cx="320" cy="210" r="30" fill="none" stroke="#e0b84a" strokeWidth="1.4" strokeDasharray="3 5" opacity="0.8">
        <animateTransform attributeName="transform" type="rotate" from="0 320 210" to="360 320 210" dur="40s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="210" r="7" fill="#e0b84a" />

      <g transform="translate(320 210)" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="17" fontWeight="700" fill="#fff" opacity="0.95">
        <text y="-12">India</text>
        <text y="8" fontSize="12" opacity="0.7" letterSpacing="2" fontWeight="600">SOURCING HUB</text>
      </g>
    </svg>
  )
}

export default function MarketReach() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="market-reach" className="section market">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Market Reach</p>
          <h2 className="section-title">Connecting India with Global Markets</h2>
          <p className="section-sub">
            Trans-Aura International aims to connect reliable Indian supply sources with
            international buyers seeking quality products, competitive value, and dependable B2B
            sourcing support.
          </p>
        </div>

        <div className="market__grid">
          <div className="market__artwrap reveal">
            <GlobeArt />
            <p className="market__art-caption">
              Connecting Indian supply sources with international B2B buyers is our core business
              objective.
            </p>
          </div>

          <div className="market__content reveal" style={{ '--reveal-delay': '0.15s' }}>
            <ul className="market__list">
              {highlights.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="market__icon" aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="btn btn--navy btn--lg"
              onClick={() => scrollTo('quote')}
            >
              Discuss Your Sourcing Requirements
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}