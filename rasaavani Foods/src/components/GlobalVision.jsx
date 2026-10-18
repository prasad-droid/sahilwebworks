import { images } from '../data/images.js'
import '../styles/global-vision.css'

const audience = [
  'Indian families',
  'Global food lovers',
  'NRIs',
  'Gourmet consumers',
  'Retailers',
  'Importers',
  'Distributors',
]

export default function GlobalVision() {
  return (
    <section id="global" className="section section--green global">
      <div className="container global__grid">
        <div className="global__content" data-reveal="left">
          <p className="eyebrow eyebrow--light">Global Vision</p>
          <h2>From India, for the World</h2>
          <p className="global__subhead">
            Taking India&rsquo;s Traditional Flavours Beyond Borders
          </p>
          <p className="global__copy">
            Rasavaani aims to introduce consumers worldwide to regional Indian
            flavours that go beyond mainstream Indian cuisine.
          </p>

          <h3 className="global__audience-title">Made for</h3>
          <ul className="global__audience">
            {audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="global__closing">
            Traditional at heart. <span>Global in ambition.</span>
          </p>
        </div>

        <div className="global__visual" data-reveal="right">
          <svg
            className="global__map"
            viewBox="0 0 600 620"
            role="img"
            aria-label="Illustrative map showing India as the origin, with an aspirational direction towards the United Kingdom, Europe and the wider world"
          >
            <defs>
              <radialGradient id="globeFill" cx="42%" cy="38%" r="70%">
                <stop offset="0%" stopColor="rgba(250,244,232,0.16)" />
                <stop offset="100%" stopColor="rgba(250,244,232,0.02)" />
              </radialGradient>
            </defs>

            <circle
              className="global__globe"
              cx="300"
              cy="300"
              r="250"
              fill="url(#globeFill)"
            />
            <ellipse
              className="global__grid-line"
              cx="300"
              cy="300"
              rx="250"
              ry="90"
            />
            <ellipse
              className="global__grid-line"
              cx="300"
              cy="300"
              rx="250"
              ry="180"
            />
            <ellipse
              className="global__grid-line"
              cx="300"
              cy="300"
              rx="120"
              ry="250"
            />
            <ellipse
              className="global__grid-line"
              cx="300"
              cy="300"
              rx="215"
              ry="250"
            />
            <line
              className="global__grid-line"
              x1="300"
              y1="50"
              x2="300"
              y2="550"
            />
            <line
              className="global__grid-line"
              x1="50"
              y1="300"
              x2="550"
              y2="300"
            />

            <path
              className="global__route"
              d="M355 335 Q300 225 255 185"
            />
            <path className="global__route" d="M255 185 Q272 158 300 152" />
            <path className="global__route" d="M300 152 Q400 138 470 250" />

            <g className="global__node global__node--origin">
              <circle cx="355" cy="335" r="26" className="global__pulse" />
              <circle cx="355" cy="335" r="7" className="global__dot" />
              <text x="375" y="362">
                India
              </text>
            </g>

            <g className="global__node">
              <circle cx="255" cy="185" r="6" />
              <text x="150" y="176">
                United Kingdom
              </text>
            </g>

            <g className="global__node">
              <circle cx="300" cy="152" r="6" />
              <text x="316" y="140">
                Europe
              </text>
            </g>

            <g className="global__node global__node--world">
              <circle cx="470" cy="250" r="6" />
              <text x="452" y="238" textAnchor="end">
                The World
              </text>
            </g>
          </svg>

          <div className="global__visual-caption">
            <span className="global__visual-thumb media">
              <img
                src={images.globalThali}
                alt="A traditional Indian meal (representative photograph)"
                loading="lazy"
              />
            </span>
            <p>
              Aspirational direction&mdash;India, the UK, Europe and the world.
              This illustrates our ambition, not current export markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
