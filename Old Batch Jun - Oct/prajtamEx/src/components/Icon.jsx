const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const paths = {
  leaf: (
    <>
      <path d="M11 20.5A7.5 7.5 0 0 1 9.6 6.4C15.4 5.3 17 4.6 19 2c1 2.1 2 4.4 2 8.3 0 5.8-4.9 10.2-10 10.2Z" />
      <path d="M2.5 21.5c0-3.2 1.9-5.6 5.2-6.4 2.9-.7 5.3-2.1 6.3-3.6" />
    </>
  ),
  recycle: (
    <>
      <path d="M20 12a8 8 0 0 1-13.7 5.6" />
      <path d="M4 12a8 8 0 0 1 13.7-5.6" />
      <path d="M17.7 2.6v3.8h-3.8" />
      <path d="M6.3 21.4v-3.8h3.8" />
      <path d="M7.9 8.6 6 5.4l3.4-.6" />
      <path d="M16.1 15.4l1.9 3.2-3.4.6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </>
  ),
  ship: (
    <>
      <path d="M3 17.5c0 1.7 1.6 2.8 4.2 2.8h9.6c2.6 0 4.2-1.1 4.2-2.8" />
      <path d="M4.6 17.5 6.2 12h11.6l1.6 5.5" />
      <path d="M8 12V7.6h3.4V12" />
      <path d="M13.2 12V7.6h3.4V12" />
      <path d="M12 7.6V3.5" />
      <path d="M12 3.5 15.6 5" />
    </>
  ),
  package: (
    <>
      <path d="M20.5 7.8 12 3.2 3.5 7.8v8.4L12 20.8l8.5-4.6Z" />
      <path d="M3.5 7.8 12 12.4l8.5-4.6" />
      <path d="M12 12.4v8.4" />
      <path d="M7.7 5.5 16.3 10" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </>
  ),
  phone: (
    <path d="M6.6 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.9 5.9l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.6 6.6 8.4 6 8.4-6" />
    </>
  ),
  chat: (
    <>
      <path d="M12 2.8a9.2 9.2 0 0 0-8 14L2.8 21l4.4-1.1A9.2 9.2 0 1 0 12 2.8Z" />
      <path d="M8.7 7.6c.4-.7 1.4-.6 1.7.1l.5 1.1c.2.4.1.9-.3 1.2l-.4.3c.5 1.1 1.4 2 2.5 2.5l.3-.4c.3-.4.8-.5 1.2-.3l1.1.5c.7.3.8 1.3.1 1.7-.8.5-1.9.6-2.9.2-1.9-.8-3.4-2.3-4.2-4.2-.4-1-.3-2.1.4-2.7Z" />
    </>
  ),
  arrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  chevronDown: <path d="m6 9.5 6 6 6-6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 17.5 9 5 9-5" />
    </>
  ),
  link: (
    <>
      <path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.6-2.6a4 4 0 0 0-5.7-5.7L11.7 6.6" />
      <path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.6 2.6a4 4 0 0 0 5.7 5.7l1.4-1.4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.2 20c.6-3.2 3-5.2 5.8-5.2s5.2 2 5.8 5.2" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 6.1" />
      <path d="M17.5 14.6c2 .7 3.4 2.5 3.8 5.4" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6.5h11v10h-11z" />
      <path d="M13.5 10h3.7l3.3 3.4v3.1h-7z" />
      <circle cx="7" cy="18.4" r="1.9" />
      <circle cx="17" cy="18.4" r="1.9" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </>
  ),
  expand: (
    <>
      <path d="M4 9.5V4h5.5" />
      <path d="M20 14.5V20h-5.5" />
      <path d="M4 4l6 6" />
      <path d="M20 20l-6-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21.5s7-6.6 7-11.3A7 7 0 0 0 5 10.2c0 4.7 7 11.3 7 11.3Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  star: (
    <path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9-5.3-2.8-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8Z" />
  ),
  spark: <path d="M12 3v5m0 8v5M3 12h5m8 0h5M6.4 6.4l3 3m5.2 5.2 3 3m0-11.2-3 3m-5.2 5.2-3 3" />,
  import: (
    <>
      <path d="M12 3.5v10" />
      <path d="m8 9.8 4 4 4-4" />
      <path d="M4 15.5v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </>
  ),
  export: (
    <>
      <path d="M12 13.5v-10" />
      <path d="m8 7.2 4-4 4 4" />
      <path d="M4 15.5v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </>
  ),
  trade: (
    <>
      <path d="M3.5 8.5h13l-3.2-3.2" />
      <path d="M20.5 15.5h-13l3.2 3.2" />
    </>
  ),
  business: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M12 12v3.5" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <circle cx="8.8" cy="9.8" r="1.6" />
      <path d="m4 17 4.8-4.4 4 3.4 3.2-2.6L20 17" />
    </>
  ),
  quote: (
    <text
      x="12"
      y="19"
      textAnchor="middle"
      fontSize="22"
      fontFamily="Georgia, 'Times New Roman', serif"
      fill="currentColor"
      stroke="none"
    >
      &#8220;
    </text>
  ),
};

export default function Icon({ name, size = 20, className = "", ...rest }) {
  const shape = paths[name] || paths.spark;
  return (
    <svg
      className={`icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...stroke}
      {...rest}
    >
      {shape}
    </svg>
  );
}
