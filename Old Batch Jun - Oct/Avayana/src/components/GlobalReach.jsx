import Reveal from './Reveal.jsx'
import SectionHeader from './SectionHeader.jsx'

const nodes = [
  { x: 430, y: 175, label: 'Middle East', anchor: 'end' },
  { x: 545, y: 108, label: 'Europe', anchor: 'middle' },
  { x: 730, y: 118, label: 'North America', anchor: 'middle' },
  { x: 560, y: 350, label: 'Africa', anchor: 'middle' },
  { x: 812, y: 430, label: 'Global Markets', anchor: 'end' },
]

export default function GlobalReach() {
  return (
    <section className="global-reach section" id="global">
      <div className="container">
        <SectionHeader
          eyebrow="Global Reach"
          title="Rooted in India. Growing Globally."
          subtitle="We aim to connect quality Indian agricultural products with customers across global markets."
          align="center"
          tone="dark"
        />

        <Reveal className="global-reach__viz" delay={120}>
          <div className="global-reach__canvas">
            <svg
              viewBox="0 0 900 520"
              role="img"
              aria-label="Abstract visualization of supply focus extending from India toward Middle East, Europe, North America, Africa and global markets"
            >
              <g className="gr-globe" aria-hidden="true">
                <ellipse cx="230" cy="265" rx="150" ry="228" />
                <ellipse cx="230" cy="265" rx="75" ry="228" />
                <ellipse cx="230" cy="265" rx="225" ry="228" />
                <circle cx="230" cy="265" r="228" />
                <g className="gr-continents" fill="rgba(247,243,232,0.10)">
                  <path d="M60 140q14-30 40-34 22-3 30 12 8 12-4 22-10 8-26 6-20-2-40-6Z" />
                  <path d="M104 190q10-16 30-20 26-4 34 10 6 12-6 22-12 9-30 8-18-1-28-20Z" />
                  <path d="M108 254q8-12 26-15 22-4 28 8 5 10-4 18-9 7-24 6-16-1-26-17Z" />
                  <path d="M144 330q10-18 34-20 30-3 38 12 6 13-6 24-12 10-32 8-20-2-34-24Z" />
                  <path d="M368 116q16-26 48-28 34-3 40 14 6 15-8 26-14 10-36 8-26-2-44-20Z" />
                  <path d="M414 176q12-16 34-18 26-3 32 10 5 11-7 20-13 8-32 6-22-1-27-18Z" />
                  <path d="M404 242q10-14 30-16 24-3 30 9 5 10-6 18-12 8-28 7-18-1-26-18Z" />
                  <path d="M432 312q14-20 42-22 34-2 40 14 5 14-9 24-14 9-38 7-24-2-35-23Z" />
                  <path d="M582 132q18-30 54-32 38-3 46 16 7 17-9 28-16 11-42 9-30-2-49-21Z" />
                  <path d="M632 210q12-16 36-18 30-3 36 11 5 12-7 21-14 9-32 7-22-2-33-21Z" />
                  <path d="M622 292q14-20 42-22 32-2 40 14 7 14-8 23-15 9-38 8-24-2-36-23Z" />
                  <path d="M142 400q14-24 46-26 38-2 46 16 6 14-9 24-15 9-40 8-30-1-43-22Z" />
                  <path d="M520 400q16-24 48-26 34-3 40 13 6 14-8 24-15 9-38 8-28-1-42-19Z" />
                </g>
                <g className="gr-ocean-dots" fill="rgba(196,154,74,0.18)">
                  <circle cx="90" cy="220" r="2" />
                  <circle cx="560" cy="160" r="2" />
                  <circle cx="640" cy="360" r="2" />
                  <circle cx="380" cy="420" r="2" />
                  <circle cx="760" cy="250" r="2" />
                </g>
              </g>

              {nodes.map((node) => (
                <g className="gr-link" key={node.label} aria-hidden="true">
                  <line x1="230" y1="265" x2={node.x} y2={node.y} />
                </g>
              ))}

              <g className="gr-origin" aria-hidden="true">
                <circle cx="230" cy="265" r="30" className="gr-origin__pulse" />
                <circle cx="230" cy="265" r="18" className="gr-origin__pulse" />
                <circle cx="230" cy="265" r="9" className="gr-origin__core" />
              </g>

              {nodes.map((node, i) => (
                <g key={node.label} aria-hidden="true">
                  <line
                    x1={node.x - 8}
                    y1={node.y}
                    x2={node.x + 8}
                    y2={node.y}
                    className="gr-node__tick"
                  />
                  <circle cx={node.x} cy={node.y} r="5" className="gr-node" style={{ animationDelay: `${i * 0.7}s` }} />
                </g>
              ))}

              <text x="168" y="270" className="gr-label gr-label--origin">
                INDIA
              </text>
              {nodes.map((node) => (
                <text
                  key={node.label}
                  x={node.x}
                  y={node.y - 18}
                  textAnchor={node.anchor}
                  className="gr-label"
                >
                  {node.label.toUpperCase()}
                </text>
              ))}
            </svg>
          </div>
          <p className="global-reach__note">
            Target market focus — India as the sourcing origin for export supply.
          </p>
        </Reveal>
      </div>
    </section>
  )
}