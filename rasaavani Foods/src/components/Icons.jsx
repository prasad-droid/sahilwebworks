/* Lightweight, hand-drawn-feeling line icons (stroke = currentColor).
   Kept inline so no icon library is required. */

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconChilli(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M30 9c4 1 7 5 7 10 0 8-6 15-14 19-4 2-9 3-12 1-2-1-2-4-1-7 3-8 11-15 20-23Z" />
      <path d="M30 9c1-3 3-4 6-4" />
      <path d="M22 20c3 0 6 2 7 5" />
    </svg>
  )
}

export function IconRecipe(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 8h18a4 4 0 0 1 4 4v24a4 4 0 0 0-4-4H12Z" />
      <path d="M12 8a3 3 0 0 0-3 3v25a3 3 0 0 0 4 2" />
      <path d="M18 18h10M18 24h10M18 30h6" />
    </svg>
  )
}

export function IconJar(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M17 8h14v4H17z" />
      <path d="M15 12h18v4a5 5 0 0 1-2 3v16a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4V19a5 5 0 0 1-2-3v-4Z" />
      <path d="M17 30h14" />
    </svg>
  )
}

export function IconCraft(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M24 10c-2 0-3 2-3 4v8" />
      <path d="M21 22h-6a3 3 0 0 1 0-6h3" />
      <path d="M27 22h6a3 3 0 0 0 0-6h-3" />
      <path d="M18 24h12l-1 12a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3Z" />
    </svg>
  )
}

export function IconLeaf(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M12 36c0-14 10-24 24-24 0 14-10 24-24 24Z" />
      <path d="M12 36c6-4 12-9 16-16" />
    </svg>
  )
}

export function IconGlobe(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <circle cx="24" cy="24" r="15" />
      <path d="M9 24h30" />
      <path d="M24 9c4 4 6 9 6 15s-2 11-6 15c-4-4-6-9-6-15s2-11 6-15Z" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function IconArrow(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconClose(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      {...props}
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="8" y="12" width="32" height="24" rx="2" />
      <path d="M8 14l16 12 16-12" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M16 9c0-1 1-2 2-2h4c1 0 2 1 2 2l-1 6c0 1-1 1-2 1l-3 1c1 5 5 9 10 10l1-3c0-1 0-2 1-2l6-1c1 0 2 1 2 2v4c0 1-1 2-2 2C24 40 8 24 8 12c0-1 1-2 2-2Z" />
    </svg>
  )
}

export function IconPin(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M24 42s12-11 12-21a12 12 0 1 0-24 0c0 10 12 21 12 21Z" />
      <circle cx="24" cy="20" r="4.5" />
    </svg>
  )
}

export function IconWhatsApp(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
      aria-hidden="true"
    >
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.36 9.36 0 0 1-1.44-5A9.42 9.42 0 0 1 18.7 5.3a9.32 9.32 0 0 1 2.76 6.65c0 5.2-4.23 9.42-9.41 9.42Zm8-17.42A11.28 11.28 0 0 0 12.05.75 11.33 11.33 0 0 0 2.24 17.6L.75 23.25l5.79-1.52a11.31 11.31 0 0 0 5.5 1.4h.01c6.25 0 11.33-5.08 11.34-11.33 0-3.03-1.18-5.88-3.33-8.02Z" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      {...props}
      aria-hidden="true"
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}
