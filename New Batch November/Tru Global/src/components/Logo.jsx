import { company } from '../data/siteData'

export default function Logo({ inverse = false, compact = false }) {
  return (
    <a className={`logo${inverse ? ' logo--inverse' : ''}${compact ? ' logo--compact' : ''}`} href="#home" aria-label={`${company.name} — home`}>
      <img className="logo__mark" src="/logo.png" alt="Tru Source Global logo" width="56" height="56" />
      <span className="logo__text">
        <strong>Tru Source</strong>
        <span>Global</span>
      </span>
    </a>
  )
}
