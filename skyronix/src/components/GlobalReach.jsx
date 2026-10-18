import Reveal from './Reveal.jsx'
import { Globe } from './Icons.jsx'

const HUB = { x: 500, y: 265 }

const NODES = [
  { c: 'USA', x: 140, y: 165 },
  { c: 'Mexico', x: 165, y: 295 },
  { c: 'Brazil', x: 270, y: 435 },
  { c: 'Spain', x: 225, y: 185 },
  { c: 'UK', x: 240, y: 105 },
  { c: 'France', x: 275, y: 150 },
  { c: 'Germany', x: 330, y: 140 },
  { c: 'Russia', x: 430, y: 55 },
  { c: 'Turkey', x: 400, y: 160 },
  { c: 'Egypt', x: 430, y: 230 },
  { c: 'UAE', x: 530, y: 150 },
  { c: 'Bangladesh', x: 615, y: 255 },
  { c: 'Sri Lanka', x: 570, y: 305 },
  { c: 'Vietnam', x: 740, y: 215 },
  { c: 'China', x: 760, y: 260 },
  { c: 'Japan', x: 790, y: 330 },
  { c: 'Thailand', x: 675, y: 290 },
  { c: 'Singapore', x: 800, y: 360 },
  { c: 'Indonesia', x: 850, y: 400 },
  { c: 'Kenya', x: 495, y: 360 },
  { c: 'South Africa', x: 440, y: 445 },
  { c: 'Australia', x: 890, y: 480 },
]

const FLOW_LANES = ['USA', 'UK', 'UAE', 'Brazil', 'Germany', 'Japan', 'Vietnam', 'Australia', 'South Africa']

const LABELS = [
  { text: 'North America', x: 142, y: 135 },
  { text: 'UK & Europe', x: 250, y: 78 },
  { text: 'UAE & Middle East', x: 560, y: 118 },
  { text: 'India', x: 500, y: 265, hub: true },
  { text: 'Asia-Pacific', x: 800, y: 195 },
  { text: 'Latin America', x: 285, y: 465 },
  { text: 'Africa', x: 442, y: 475 },
  { text: 'Australia & NZ', x: 905, y: 508 },
]

export default function GlobalReach() {
  return (
    <section id="global-reach" className="section global-reach">
      <div className="container">
        <Reveal className="section-head global-reach__head">
          <span className="eyebrow">Global Reach</span>
          <h2 className="section-title">
            One hub in India. <span className="text-gradient">Shelf-ready worldwide.</span>
          </h2>
          <p className="section-sub">
            We ship toy products to retailers and importers across 25+ countries, with logistics and
            compliance handled from a single accountable team.
          </p>
        </Reveal>

        <Reveal className="net" delay={100}>
          <div className="net__frame">
            <svg viewBox="0 0 1000 520" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Map of countries served by Skyronix Overseas from India">
              {NODES.map((node) => (
                <line
                  key={`p-${node.c}`}
                  x1={HUB.x}
                  y1={HUB.y}
                  x2={node.x}
                  y2={node.y}
                  className={FLOW_LANES.includes(node.c) ? 'net-path net-path--flow' : 'net-path'}
                  style={
                    FLOW_LANES.includes(node.c)
                      ? { animationDelay: `${NODES.indexOf(node) * -0.85}s` }
                      : undefined
                  }
                />
              ))}

              <circle cx={HUB.x} cy={HUB.y} r="95" className="net-glow" />
              <circle cx={HUB.x} cy={HUB.y} r="58" className="net-halo" />

              {NODES.map((node) => (
                <circle
                  key={`n-${node.c}`}
                  cx={node.x}
                  cy={node.y}
                  r="5"
                  className="net-node"
                />
              ))}
            </svg>

            {LABELS.map((label) => (
              <span
                key={label.text}
                className={`net-label ${label.hub ? 'net-label--hub' : ''}`}
                style={{ left: `${label.x / 10}%`, top: `${label.y / 5.2}%` }}
              >
                {label.text}
              </span>
            ))}
          </div>
          <p className="net-global-note">
            <Globe size={15} /> Active export lanes to 25+ markets, refreshed every quarter.
          </p>
        </Reveal>
      </div>
    </section>
  )
}