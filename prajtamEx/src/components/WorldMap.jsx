import { WORLD_COUNTRIES, MAP_WIDTH, MAP_HEIGHT, project } from "../data/worldMap";
import { globalMarketNodes } from "../data/site";

const ORIGIN = { lon: 79, lat: 22.5 };

const LON_GRATICULE = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150];
const LAT_GRATICULE = [80, 60, 40, 20, 0, -20, -40, -60];

function arcPath(from, to) {
  const [x1, y1] = project(from.lon, from.lat);
  const [x2, y2] = project(to.lon, to.lat);
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy) || 1;
  const bend = Math.min(dist * 0.26, 88);
  let px = -dy / dist;
  let py = dx / dist;
  if (py > 0) {
    px = -px;
    py = -py;
  }
  const cx = (x1 + x2) / 2 + px * bend;
  const cy = (y1 + y2) / 2 + py * bend;
  return `M${x1.toFixed(1)},${y1.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`;
}

export default function WorldMap() {
  const [ox, oy] = project(ORIGIN.lon, ORIGIN.lat);

  return (
    <div className="worldmap" data-reveal>
      <svg
        className="worldmap__svg"
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        role="img"
        aria-label="World map representing PrajtamEx worldwide market connectivity, with India highlighted as the home market"
      >
        <title>PrajtamEx worldwide market connectivity</title>

        <g className="worldmap__grid" aria-hidden="true">
          {LON_GRATICULE.map((lon) => {
            const [x] = project(lon, 0);
            return <line key={`lon-${lon}`} x1={x} y1={0} x2={x} y2={MAP_HEIGHT} />;
          })}
          {LAT_GRATICULE.map((lat) => {
            const [, y] = project(0, lat);
            return <line key={`lat-${lat}`} x1={0} y1={y} x2={MAP_WIDTH} y2={y} />;
          })}
        </g>

        <g className="worldmap__countries">
          {WORLD_COUNTRIES.map((country) => (
            <path
              key={country.id}
              d={country.d}
              className={country.id === "IND" ? "worldmap__country is-origin" : "worldmap__country"}
            />
          ))}
        </g>

        <g className="worldmap__arcs" aria-hidden="true">
          {globalMarketNodes.map((node, index) => {
            const d = arcPath(ORIGIN, node);
            return (
              <g key={node.id} style={{ "--i": index }}>
                <path className="worldmap__arc" d={d} />
                <circle className="worldmap__travel" r="3.4" style={{ offsetPath: `path("${d}")` }} />
              </g>
            );
          })}
        </g>

        <g className="worldmap__nodes" aria-hidden="true">
          {globalMarketNodes.map((node, index) => {
            const [x, y] = project(node.lon, node.lat);
            return (
              <g key={node.id} className="worldmap__node" style={{ "--i": index }}>
                <circle className="worldmap__node-ring" cx={x} cy={y} r="9" />
                <circle className="worldmap__node-dot" cx={x} cy={y} r="3.6" />
              </g>
            );
          })}
        </g>

        <g className="worldmap__origin" aria-hidden="true">
          <circle className="worldmap__pulse" cx={ox} cy={oy} r="10" />
          <circle className="worldmap__pulse worldmap__pulse--2" cx={ox} cy={oy} r="10" />
          <circle className="worldmap__origin-dot" cx={ox} cy={oy} r="5.5" />
        </g>
      </svg>
    </div>
  );
}
