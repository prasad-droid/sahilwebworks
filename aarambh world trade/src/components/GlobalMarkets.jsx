import { useMemo } from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import { Reveal } from './Reveal.jsx';
import { Icon } from './Icons.jsx';
import { WORLD_MAP_PATHS, WORLD_MAP_VIEWBOX, INDIA_ORIGIN } from '../assets/worldMap.js';
import { routeRegions } from '../data/exportMarkets.js';
import { projectLatLon } from '../data/mapProjection.js';

/**
 * WORLD_MAP_VIEWBOX is an SVG viewBox string ("0 0 950 620"), so it has to be
 * parsed into numbers before it can be used for coordinate maths.
 */
const [, , MAP_W, MAP_H] = WORLD_MAP_VIEWBOX.split(/\s+/).map(Number);

/**
 * Builds a quadratic bezier from India to a destination.
 * The control point is pushed perpendicular to the direct line so routes arc
 * over the map instead of cutting straight through it, and longer routes arc
 * more strongly.
 */
function routePath(from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.hypot(dx, dy);
  // Perpendicular offset, scaled by distance.
  const lift = Math.min(dist * 0.24, 150);
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const nx = -dy / (dist || 1);
  const ny = dx / (dist || 1);
  return `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} Q ${(mx + nx * lift).toFixed(1)} ${(
    my +
    ny * lift
  ).toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
}

const TINY = 8;
const origin = { x: TINY, y: TINY };
const mapped = { x: TINY + INDIA_ORIGIN.x, y: TINY + INDIA_ORIGIN.y };

export function GlobalMarkets() {
  /* routeRegions and the map geometry are module constants, so this runs once. */
  const routes = useMemo(
    () =>
      routeRegions.map((region) => {
        const p = projectLatLon(region.lat, region.lon);
        return {
          ...region,
          x: TINY + p.x,
          y: TINY + p.y,
          d: routePath(mapped, { x: TINY + p.x, y: TINY + p.y }),
        };
      }),
    []
  );

  return (
    <section
      className="markets section section--dark section--grain"
      id="global-markets"
      aria-labelledby="markets-heading"
    >
      <div className="container container--wide">
        <SectionHeading
          eyebrow="Global reach"
          title="From India to Global Markets"
          titleId="markets-heading"
          description="Connecting Indian agricultural and food products with international buyers around the world."
          align="center"
          tone="dark"
        />

        <Reveal className="markets__stage" variant="scale">
          <div className="markets__map-wrap">
            {/* ---- Accent rings behind the map ---------------------- */}
            <span className="markets__halo markets__halo--a" aria-hidden="true" />
            <span className="markets__halo markets__halo--b" aria-hidden="true" />

            {/*
              The SVG and the origin label share this box so the label's
              percentage position is relative to the map itself rather than to
              the wider stage.
            */}
            <div className="markets__map-box">
              <svg
                className="markets__map"
                viewBox={`${-TINY} ${-TINY} ${MAP_W + TINY * 2} ${MAP_H + TINY * 2}`}
                role="img"
                aria-label={`World map highlighting India, with animated routes from India towards ${routeRegions
                  .map((r) => r.label)
                  .join(', ')}`}
                >
                  <defs>
                    <radialGradient id="indiaFill" cx="35%" cy="30%" r="75%">
                      <stop offset="0%" stopColor="#e8c479" />
                      <stop offset="55%" stopColor="#c99a42" />
                      <stop offset="100%" stopColor="#8d6a20" />
                    </radialGradient>
                    <filter id="indiaGlow" x="-60%" y="-60%" width="220%" height="220%">
                      <feGaussianBlur stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="routeGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="1.6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <g className="markets__countries" transform={`translate(${origin.x} ${origin.y})`}>
                    {WORLD_MAP_PATHS.map((p) => (
                      <path key={p.id || p.d.slice(0, 24)} id={p.id || undefined} d={p.d} />
                    ))}
                  </g>

                  {/* ---- Animated routes from India ------------------ */}
                  <g className="markets__routes" transform={`translate(${origin.x} ${origin.y})`}>
                    {routes.map((route, i) => (
                      <g
                        key={route.id}
                        className="markets__route"
                        style={{ animationDelay: `${i * 420}ms` }}
                      >
                        <path className="markets__route-line" d={route.d} />
                        <circle className="markets__route-pulse" r="3.2">
                          <animateMotion
                            dur="4.6s"
                            repeatCount="indefinite"
                            begin={`${i * 0.55}s`}
                            path={route.d}
                          />
                        </circle>
                      </g>
                    ))}
                  </g>

                  {/* ---- Destination nodes -------------------------- */}
                  <g className="markets__nodes" transform={`translate(${origin.x} ${origin.y})`}>
                    {routes.map((route, i) => (
                      <g
                        key={route.id}
                        className="markets__node"
                        style={{ animationDelay: `${1200 + i * 180}ms` }}
                      >
                        <circle className="markets__node-ring" cx={route.x} cy={route.y} r="8" />
                        <circle className="markets__node-dot" cx={route.x} cy={route.y} r="3" />
                      </g>
                    ))}
                  </g>

                  {/* ---- India highlight --------------------------- */}
                  <g
                    className="markets__india"
                    transform={`translate(${origin.x} ${origin.y})`}
                    filter="url(#indiaGlow)"
                  >
                    {WORLD_MAP_PATHS.filter((p) => p.id === 'india').map((p) => (
                      <path key={p.d.slice(0, 20)} d={p.d} />
                    ))}
                    <circle className="markets__origin-ring" cx={INDIA_ORIGIN.x} cy={INDIA_ORIGIN.y} r="13" />
                    <circle className="markets__origin-dot" cx={INDIA_ORIGIN.x} cy={INDIA_ORIGIN.y} r="4" />
                  </g>
                </svg>

                {/* Origin label pinned over India */}
                <span className="markets__origin-label" aria-hidden="true">
                  <span className="markets__origin-pin">
                    <Icon name="pin" size={15} />
                  </span>
                  India
                </span>
              </div>
            </div>

          <p className="markets__caption">
            <Icon name="info" size={16} />
            A visual representation of our international focus. It is not a list of current or
            past export destinations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default GlobalMarkets;
