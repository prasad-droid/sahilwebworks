import { GLOBAL_NODES } from "../data/markets";
import "../styles/globalReach.css";

export default function GlobalReach() {
  const destinations = GLOBAL_NODES.filter((n) => !n.origin);

  return (
    <section className="global-reach section-pad">
      <div className="container">
        <div className="global-reach__head reveal">
          <p className="eyebrow">Global Reach</p>
          <h2 className="section-title">India to the Middle East</h2>
          <p className="section-sub">
            SUGI INTERNATIONAL PRIVATE LIMITED is focused on international
            markets including Iran, Iraq, Saudi Arabia, Oman and UAE.
          </p>
        </div>

        <div className="global-reach__viz reveal" aria-hidden="true">
          <svg
            viewBox="0 0 800 520"
            className="global-reach__svg"
            role="img"
            aria-label="Abstract trade routes from India to destination markets in the Middle East"
          >
            {/* layered abstract arcs / grain */}
            <circle cx="400" cy="260" r="210" className="ring ring--outer" />
            <circle cx="400" cy="260" r="150" className="ring ring--inner" />
            <circle cx="400" cy="260" r="96" className="ring ring--core" />

            {/* route lines from India to each destination */}
            {destinations.map((d, i) => {
              const angle = (i / destinations.length) * Math.PI * 2 - Math.PI / 2;
              const x = 400 + Math.cos(angle) * 190;
              const y = 260 + Math.sin(angle) * 190;
              return (
                <g key={d.name}>
                  <path
                    d={`M400 260 Q${(400 + x) / 2} ${(260 + y) / 2 - 60} ${x} ${y}`}
                    fill="none"
                    stroke="rgba(184,151,91,0.4)"
                    strokeWidth="1.6"
                    className="route-line"
                  />
                </g>
              );
            })}

            {/* destination nodes */}
            {destinations.map((d, i) => {
              const angle = (i / destinations.length) * Math.PI * 2 - Math.PI / 2;
              const x = 400 + Math.cos(angle) * 190;
              const y = 260 + Math.sin(angle) * 190;
              return (
                <g key={d.name}>
                  <circle cx={x} cy={y} r="10" className="node glow" />
                </g>
              );
            })}

            {/* origin node */}
            <circle cx="400" cy="260" r="14" className="node origin glow" />
          </svg>

          {/* Origin label (HTML so it can be real text) */}
          <div className="global-reach__origin">
            <span className="global-reach__origin-name">INDIA</span>
            <span className="global-reach__origin-sub">Sourcing Origin</span>
          </div>

          {/* Destination labels */}
          <div className="global-reach__labels">
            {destinations.map((d, i) => {
              const angle = (i / destinations.length) * Math.PI * 2 - Math.PI / 2;
              const left = 50 + Math.cos(angle) * 42;
              const top = 50 + Math.sin(angle) * 42;
              return (
                <div
                  key={d.name}
                  className="global-reach__label"
                  style={{ left: `${left}%`, top: `${top}%` }}
                >
                  <span className="global-reach__label-dot" />
                  <span className="global-reach__label-text">{d.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
