import { company } from '../data/siteData'
import { requestEnquiry } from '../utils/enquiry'
import Icon from './Icons'
import '../styles/GlobalReach.css'

const REACH_ITEMS = [
  { id: 'markets', icon: 'globe', label: 'Countries & Markets Served', note: 'To be confirmed' },
  { id: 'export', icon: 'truck', label: 'Export Capabilities', note: 'To be confirmed' },
  { id: 'enquiries', icon: 'response', label: 'International Customer Enquiries', note: 'Enquiries welcome' },
  { id: 'shipping', icon: 'ship', label: 'Shipping & Delivery Arrangements', note: 'To be confirmed' },
]

export default function GlobalReach() {
  return (
    <section className="section section--navy reach" id="global-reach" aria-labelledby="reach-title">
      <div className="container">
        <div className="reach__grid">
          <div className="reach__content">
            <div className="section-head section-head--left reveal">
              <p className="eyebrow">Global Reach</p>
              <h2 className="section-title" id="reach-title">
                Engineering Products for Global Customers
              </h2>
              <p className="section-subtitle">
                GLOBAL ENTERPRISES aims to reach customers across markets through a professional
                product showcase and an accessible enquiry process.
              </p>
            </div>

            <ul className="reach__list reveal delay-1">
              {REACH_ITEMS.map((item) => (
                <li className="reach__item" key={item.id}>
                  <span className="reach__item-icon" aria-hidden="true">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <div>
                    <strong>{item.label}</strong>
                    <span className="reach__item-note">{item.note}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="reach__cta reveal delay-2">
              <a
                href="#enquiry"
                className="btn btn--primary btn--lg"
                onClick={() => requestEnquiry('International enquiry')}
              >
                Discuss Your Requirements
                <Icon name="arrowRight" size={19} className="icon-trailing" />
              </a>
              <a href={`mailto:${company.email}`} className="btn btn--ghost-light btn--lg">
                <Icon name="mail" size={18} />
                Email Us
              </a>
            </div>
          </div>

          <div className="reach__visual reveal delay-1" aria-hidden="true">
            <div className="reach__globe">
              <svg viewBox="0 0 200 200" className="reach__globe-svg" role="presentation">
                <circle cx="100" cy="100" r="82" className="reach__globe-ring" />
                <circle cx="100" cy="100" r="60" className="reach__globe-ring" />
                <circle cx="100" cy="100" r="38" className="reach__globe-ring" />
                <ellipse cx="100" cy="100" rx="82" ry="32" className="reach__globe-ring" />
                <ellipse cx="100" cy="100" rx="32" ry="82" className="reach__globe-ring" />
                <path d="M18 100h164M100 18v164" className="reach__globe-axis" />
                <circle cx="146" cy="66" r="4.5" className="reach__globe-dot" />
                <circle cx="64" cy="128" r="4.5" className="reach__globe-dot" />
                <circle cx="118" cy="150" r="4.5" className="reach__globe-dot" />
              </svg>
              <span className="reach__pulse reach__pulse--1" />
              <span className="reach__pulse reach__pulse--2" />
            </div>

            <p className="reach__visual-caption">
              <Icon name="clipboard" size={15} />
              Add a verified world map or confirmed export destinations here later.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
