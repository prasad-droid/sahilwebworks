/** Decorative, stylised world map. No country borders, routes or destinations are represented. */
export default function WorldMap() {
  const continents = [
    'M55 68c14-22 47-31 74-19 16 7 25 18 22 30-2 9-12 14-24 17l-5 27c-12 12-30 8-38-7l-7-23-24-9c-9-4-10-9 2-16Z',
    'M146 145c17-11 36 2 39 21 4 24-10 58-28 76-14-12-21-38-18-62 2-17 1-28 7-35Z',
    'M244 64c17-16 46-17 61-6 11 8 8 22-5 29-13 7-34 8-47 1-12-6-18-16-9-24Z',
    'M251 113c22-12 52-4 62 17 12 25-1 62-20 91-14-9-25-34-26-58-1-21-8-43-16-50Z',
    'M320 53c28-22 78-18 108 1 21 13 31 32 20 46-9 12-31 16-51 10-21-6-39-18-53-20-18-3-35-25-24-37Z',
    'M422 193c20-14 49-6 54 15 5 20-12 38-33 38-19 0-34-14-32-29 1-10 4-19 11-24Z',
  ]

  const routes = [
    'M105 88 Q190 20 282 76',
    'M282 76 Q355 32 410 92',
    'M282 76 Q295 140 292 166',
    'M410 92 Q452 142 450 214',
    'M292 166 Q380 210 450 214',
  ]

  const nodes = [
    [105, 88],
    [282, 76],
    [292, 166],
    [410, 92],
    [450, 214],
  ]

  return (
    <svg
      className="world-map"
      viewBox="0 0 520 280"
      role="img"
      aria-label="Stylised world map with abstract connecting lines"
    >
      <defs>
        <linearGradient id="mapFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dce9f2" />
          <stop offset="1" stopColor="#c3d7e5" />
        </linearGradient>
      </defs>
      <g className="world-map__continents">
        {continents.map((path, index) => (
          <path key={index} d={path} fill="url(#mapFill)" />
        ))}
      </g>
      <g className="world-map__routes">
        {routes.map((path, index) => (
          <path key={index} d={path} style={{ animationDelay: `${index * 0.5}s` }} />
        ))}
      </g>
      <g className="world-map__nodes">
        {nodes.map(([cx, cy], index) => (
          <g key={index}>
            <circle cx={cx} cy={cy} r="8" className="world-map__pulse" style={{ animationDelay: `${index * 0.45}s` }} />
            <circle cx={cx} cy={cy} r="3.4" className="world-map__dot" />
          </g>
        ))}
      </g>
    </svg>
  )
}
