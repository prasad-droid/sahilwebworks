import { company } from '../data/siteData'
import '../styles/Logo.css'

/**
 * Renders the supplied logo when `company.logo` is configured.
 * Until the original asset is available, a plain text wordmark is used —
 * deliberately not a designed/imitation logo.
 */
export default function Logo({ inverse = false }) {
  if (company.logo) {
    return (
      <a className="logo logo--image" href="#home" aria-label={`${company.name} — home`}>
        <img src={company.logo} alt={company.name} />
      </a>
    )
  }

  return (
    <a
      className={`logo logo--text${inverse ? ' logo--inverse' : ''}`}
      href="#home"
      aria-label={`${company.name} — home`}
    >
      <span className="logo__name">Sujata</span>
      <span className="logo__sub">GLOBAL EXIM</span>
    </a>
  )
}
