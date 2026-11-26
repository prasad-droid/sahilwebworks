export default function Logo({ variant = 'dark' }) {
  return (
    <span className={`brand brand--${variant}`}>
      <img
        className="brand__logo"
        src="/images/shakti-logo.jpg"
        alt=""
        width="46"
        height="46"
        decoding="async"
        aria-hidden="true"
      />
      <span className="brand__text">
        <span className="brand__name">Shakti</span>
        <span className="brand__sub">
          Global Exim
          <span className="brand__dot" aria-hidden="true" />
        </span>
      </span>
    </span>
  )
}
