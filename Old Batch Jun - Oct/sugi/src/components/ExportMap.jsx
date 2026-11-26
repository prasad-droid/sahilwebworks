import { useSite } from "../store/SiteContext";
import {
  WORLD_VIEWBOX,
  WORLD_LAND_PATH,
  WORLD_GRATICULE_PATH,
  project,
} from "../data/worldMap";
import { ORIGIN } from "../data/countries";
import "../styles/exportMap.css";

// ==========================================================================
// COUNTRIES WE EXPORT TO — animated world map.
// Heading, copy and destination list are editable in Admin Panel > Website
// Content (coordinates are only used to place map markers).
// ==========================================================================

const origin = project(ORIGIN.lon, ORIGIN.lat);

function arc(from, to) {
  // Bow the line away from the direct path so overlapping routes stay legible.
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const bend = Math.min(Math.hypot(dx, dy) * 0.22, 70);
  const nx = -dy / (Math.hypot(dx, dy) || 1);
  const ny = dx / (Math.hypot(dx, dy) || 1);
  return `M ${from.x} ${from.y} Q ${mx + nx * bend} ${my + ny * bend} ${to.x} ${to.y}`;
}

export default function ExportMap() {
  const { content } = useSite();
  const section = content?.home?.exportMap || {};
  const destinations = (section.destinations || []).filter((d) => d.name);

  const points = destinations
    .map((d) => {
      const lon = Number(d.lon);
      const lat = Number(d.lat);
      if (!Number.isFinite(lon) || !Number.isFinite(lat)) return null;
      return { ...d, ...project(lon, lat) };
    })
    .filter(Boolean);

  return (
    <section className="export-map section-pad">
      <div className="container">
        <header className="export-map__head reveal">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 className="section-title">{section.title}</h2>
          {section.intro && <p className="section-sub">{section.intro}</p>}
        </header>

        <div className="export-map__viz reveal">
          <svg
            viewBox={WORLD_VIEWBOX}
            className="export-map__svg"
            role="img"
            aria-label="Animated world map of export destinations connected to India"
          >
            <defs>
              <radialGradient id="oceanGlow" cx="50%" cy="45%" r="65%">
                <stop offset="0%" stopColor="#16382e" stopOpacity="1" />
                <stop offset="100%" stopColor="#0e1613" stopOpacity="1" />
              </radialGradient>
              <linearGradient id="arcStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#d8c7a3" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#b9975b" stopOpacity="0.35" />
              </linearGradient>
            </defs>

            <rect width="1000" height="500" fill="url(#oceanGlow)" />

            <path className="export-map__graticule" d={WORLD_GRATICULE_PATH} fill="none" />
            <path className="export-map__land" d={WORLD_LAND_PATH} />

            {/* routes */}
            <g className="export-map__routes" fill="none">
              {points.map((p, i) => (
                <path
                  key={`route-${p.name}-${i}`}
                  d={arc(origin, p)}
                  stroke="url(#arcStroke)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  className="export-map__route"
                  style={{ animationDelay: `${(i % 8) * 0.28}s` }}
                />
              ))}
            </g>

            {/* origin */}
            <g className="export-map__origin">
              <circle cx={origin.x} cy={origin.y} r="16" className="export-map__pulse" />
              <circle cx={origin.x} cy={origin.y} r="5.5" className="export-map__origin-dot" />
            </g>

            {/* destinations */}
            <g className="export-map__points">
              {points.map((p, i) => (
                <g key={`point-${p.name}-${i}`} className="export-map__point" style={{ animationDelay: `${(i % 10) * 0.2}s` }}>
                  <circle cx={p.x} cy={p.y} r="4.2" className="export-map__dot" />
                  <title>{p.name}</title>
                </g>
              ))}
            </g>
          </svg>

          <div className="export-map__origin-label" aria-hidden="true">
            <span>INDIA</span>
            <small>Origin</small>
          </div>
        </div>

        {section.footNote && (
          <p className="export-map__foot reveal">{section.footNote}</p>
        )}
      </div>
    </section>
  );
}
