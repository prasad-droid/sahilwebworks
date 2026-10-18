/**
 * Lightweight, dependency-free line icon set.
 * All icons share a 24x24 viewBox and inherit `currentColor`.
 */

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

const paths = {
  supply: (
    <>
      <path d="M3 21V8l9-5 9 5v13" />
      <path d="M3 21h18" />
      <path d="M8 21v-6h8v6" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" />
    </>
  ),
  support: (
    <>
      <path d="M4 12a8 8 0 0 1 16 0" />
      <path d="M18 19a2 2 0 0 1-2 2h-3" />
      <rect x="2" y="12" width="4" height="6" rx="1.5" />
      <rect x="18" y="12" width="4" height="6" rx="1.5" />
    </>
  ),
  response: (
    <>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
      <path d="m9 11 2 2 4-4" />
    </>
  ),
  coordination: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
    </>
  ),
  communication: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  relationship: (
    <>
      <circle cx="7" cy="7" r="3" />
      <circle cx="17" cy="7" r="3" />
      <path d="M2 21v-1a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v1" />
      <path d="M12 21v-1a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v1" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V9l6 4V9l6 4V4h6v17z" />
      <path d="M3 21h18" />
      <path d="M7 17h.01M12 17h.01M17 17h.01" />
    </>
  ),
  weld: (
    <>
      <path d="M4 20 14 10" />
      <path d="m14 10 3-3 3 3-3 3z" />
      <path d="M17 4v3M20 7h-3" />
      <path d="M4 20h6" />
    </>
  ),
  maintenance: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.2-2.2z" />
    </>
  ),
  procurement: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h3l2.4 12.5a1.8 1.8 0 0 0 1.8 1.5h8.7a1.8 1.8 0 0 0 1.8-1.4L22 7H6" />
    </>
  ),
  commercial: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-5h6v5" />
      <path d="M9 10h.01M15 10h.01" />
    </>
  ),
  quality: (
    <>
      <path d="M12 2 4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  reliability: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  customer: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    </>
  ),
  transparency: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  service: (
    <>
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.7" />
      <circle cx="17.5" cy="18" r="1.7" />
    </>
  ),
  ship: (
    <>
      <path d="M3 15 4 9h16l1 6" />
      <path d="M12 3v6" />
      <path d="M5 15c0 3 3 5 7 5s7-2 7-5" />
      <path d="M12 20v1" />
    </>
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  arrowUp: (
    <>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <>
      <path d="M6.6 3h3l1.2 4-2 1.4a12 12 0 0 0 5.8 5.8l1.4-2 4 1.2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3z" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" />
      <path d="M8.5 8.5c.3 3 3 5.7 6 6 .9.2 1.5-.4 1.7-1.1l.2-.8-2-1-.9.9a5 5 0 0 1-2.4-2.4l.9-.9-1-2-.8.2c-.7.2-1.3.8-1.2 1.7z" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  menu: (
    <>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
}

export default function Icon({ name, size = 24, className = '', strokeWidth }) {
  const content = paths[name]
  if (!content) return null
  return (
    <svg
      {...base}
      width={size}
      height={size}
      className={className}
      strokeWidth={strokeWidth || base.strokeWidth}
    >
      {content}
    </svg>
  )
}
