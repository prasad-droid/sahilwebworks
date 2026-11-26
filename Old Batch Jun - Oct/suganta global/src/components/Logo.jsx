import { siteConfig } from '../data/siteConfig';
import '../styles/Logo.css';

export default function Logo({ variant = 'dark', className = '' }) {
  const src = variant === 'gold' ? siteConfig.assets.logoLight : siteConfig.assets.logo;

  return (
    <a
      className={`logo logo--${variant}${className ? ` ${className}` : ''}`}
      href="#home"
      aria-label={`${siteConfig.name} — home`}
    >
      <img
        className="logo__image"
        src={src}
        alt=""
        width="432"
        height="160"
        decoding="async"
      />
    </a>
  );
}
