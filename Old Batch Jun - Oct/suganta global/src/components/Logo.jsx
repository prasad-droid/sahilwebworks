import { siteConfig } from '../data/siteConfig';
import '../styles/Logo.css';

export default function Logo({ variant = 'dark', showTagline = true, className = '' }) {
  return (
    <a
      className={`logo logo--${variant}${className ? ` ${className}` : ''}`}
      href="#home"
      aria-label={`${siteConfig.name} — home`}
    >
      <img
        className="logo__mark"
        src={siteConfig.assets.logoMark}
        alt=""
        width="46"
        height="46"
        decoding="async"
      />
      <span className="logo__text">
        <span className="logo__name">
          Suganta <span className="logo__name-accent">Global</span>
        </span>
        {showTagline && <span className="logo__tagline">{siteConfig.tagline}</span>}
      </span>
    </a>
  );
}
