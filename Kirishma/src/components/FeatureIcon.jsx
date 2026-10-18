/**
 * Hand-drawn style line icons, defined inline as SVG paths.
 * Keeping them local avoids an icon library dependency and keeps the
 * stroke weight consistent with the rest of the design.
 */
const ICONS = [
  // Mortar & pestle — traditional preparation
  <>
    <path d="M6 15h12l-1.6 5.2a2 2 0 0 1-1.9 1.5H9.5a2 2 0 0 1-1.9-1.5L6 15Z" />
    <path d="M16.6 4.6 20 8" />
    <path d="M4.6 8.6c0-2 1.6-3 3.2-2.6" />
    <path d="M8.5 12.5c.4-1.6 1.7-2.6 3.2-2.6" />
  </>,
  // Four families — variety
  <>
    <rect x="4" y="4" width="6.5" height="6.5" rx="1.6" />
    <rect x="13.5" y="4" width="6.5" height="6.5" rx="3.2" />
    <rect x="4" y="13.5" width="6.5" height="6.5" rx="3.2" />
    <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6" />
  </>,
  // Pouch — pack sizes
  <>
    <path d="M7 8V5.5A1.5 1.5 0 0 1 8.5 4h7A1.5 1.5 0 0 1 17 5.5V8" />
    <path d="M7 8h10l.8 11.2a1.5 1.5 0 0 1-1.5 1.8H7.7a1.5 1.5 0 0 1-1.5-1.8L7 8Z" />
    <path d="M12 12.2v5" />
  </>,
  // Bowl with steam — everyday use
  <>
    <path d="M3.5 11h17a8.5 8.5 0 0 1-8.5 8 8.5 8.5 0 0 1-8.5-8Z" />
    <path d="M12 3.4v3.4" />
    <path d="M9 6.8c0-1.4 1.3-2 3-3.6 1.7 1.6 3 2.2 3 3.6" />
  </>,
]

export default function FeatureIcon({ index = 0, size = 26 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICONS[index % ICONS.length]}
    </svg>
  )
}
