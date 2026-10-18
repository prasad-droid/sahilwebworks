import logoImg from '../assets/logo/logo.jpg'

const Logo = ({ variant = 'light', compact = false }) => (
  <span className={`logo ${variant === 'light' ? 'logo-light' : 'logo-dark'}`}>
    <span className="logo-mark" aria-hidden="true">
      <img src={logoImg} alt="TRIVEDA EXPORTS logo" />
    </span>
    {!compact && (
      <span className="logo-text">
        <span className="logo-name">TRIVEDA</span>
        <span className="logo-sub">EXPORTS</span>
      </span>
    )}
  </span>
)

export default Logo
