function Icon({ children, className = "", title }) {
  return (
    <svg
      aria-hidden="true"
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function IconGlobe({ className }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.7 2.4 4 5.6 4 9s-1.3 6.6-4 9c-2.7-2.4-4-5.6-4-9s1.3-6.6 4-9z" />
    </Icon>
  );
}

export function IconBox({ className }) {
  return (
    <Icon className={className}>
      <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
      <path d="M3 8l9 5 9-5" />
      <path d="M12 13v8" />
    </Icon>
  );
}

export function IconShip({ className }) {
  return (
    <Icon className={className}>
      <path d="M2 13l2.5 7h15L22 13" />
      <path d="M4 13h16" />
      <path d="M12 4l6 4H20v5" />
      <path d="M12 8v5" />
    </Icon>
  );
}

export function IconRoute({ className }) {
  return (
    <Icon className={className}>
      <circle cx="6" cy="18" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <path d="M8.4 18H15a2.6 2.6 0 0 0 0-5.2H9a2.6 2.6 0 0 1 0-5.2h6.6" />
    </Icon>
  );
}

export function IconUsers({ className }) {
  return (
    <Icon className={className}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19c.4-3 2.7-4.6 5.5-4.6s5.1 1.6 5.5 4.6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M16 14.4c2.6.2 4.3 1.7 4.6 4.2" />
    </Icon>
  );
}

export function IconPhone({ className }) {
  return (
    <Icon className={className}>
      <path d="M5 4h4l1.8 4.5-2.2 1.6a12 12 0 0 0 5.3 5.3l1.6-2.2L20 15v4a2 2 0 0 1-2 2C9.9 21 3 14.1 3 6a2 2 0 0 1 2-2z" />
    </Icon>
  );
}

export function IconMail({ className }) {
  return (
    <Icon className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Icon>
  );
}

export function IconLocation({ className }) {
  return (
    <Icon className={className}>
      <path d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </Icon>
  );
}

export function IconShield({ className }) {
  return (
    <Icon className={className}>
      <path d="M12 3l7 3v5c0 4.6-3 8.2-7 9.5C8 19.2 5 15.6 5 11V6l7-3z" />
      <path d="M9.5 12l1.8 1.8L14.8 9.6" />
    </Icon>
  );
}

export function IconCheck({ className }) {
  return (
    <Icon className={className}>
      <path d="M4.5 12.5l5 5 10-11" />
    </Icon>
  );
}

export function IconQuote({ className }) {
  return (
    <Icon className={className}>
      <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M9 8h6M9 12h6M9 16h3.5" />
    </Icon>
  );
}

export function IconArrow({ className }) {
  return (
    <Icon className={className}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </Icon>
  );
}

export function IconSend({ className }) {
  return (
    <Icon className={className}>
      <path d="M3 10.5L21 4l-6.5 17-3-6.5L3 10.5z" />
      <path d="M11.5 14.5L21 4" />
    </Icon>
  );
}

export function IconWhatsApp({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.1 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a13 13 0 0 1-5.8-4.9c-.6-.9-1.2-2.2-.8-3.5.2-.6.6-1 1.1-1.1.3 0 .6 0 .8 0 .3 0 .5 0 .8.6l.9 2.2c.1.2 0 .4-.1.6l-.5.6c-.2.2-.4.5-.2.8a8 8 0 0 0 3.3 2.9c.3.1.5.1.7-.1l.8-1c.2-.3.4-.3.7-.2l2 .9c.3.1.5.3.6.5 0 .2 0 .7-.2 1z" />
    </svg>
  );
}

export function IconClose({ className }) {
  return (
    <Icon className={className}>
      <path d="M5 5l14 14M19 5L5 19" />
    </Icon>
  );
}

export function IconChevron({ className }) {
  return (
    <Icon className={className}>
      <path d="M5 15l7-7 7 7" />
    </Icon>
  );
}

export function IconChevronLeft({ className }) {
  return (
    <Icon className={className}>
      <path d="M15 5l-7 7 7 7" />
    </Icon>
  );
}

export function IconChevronRight({ className }) {
  return (
    <Icon className={className}>
      <path d="M9 5l7 7-7 7" />
    </Icon>
  );
}

export function IconCompass({ className }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
    </Icon>
  );
}