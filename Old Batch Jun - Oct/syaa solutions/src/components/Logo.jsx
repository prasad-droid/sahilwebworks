import { brand } from '../data/site.js';

/**
 * The supplied Google Drive logo could not be fetched without signing in.
 * Replace `/brand/logo-placeholder*.svg` with the real logo to update every
 * place the brand mark appears (see README.md).
 */
export default function Logo({ inverse = false, className = '' }) {
  return (
    <img
      className={`site-logo ${className}`.trim()}
      src={inverse ? brand.logoInverse : brand.logo}
      alt={`${brand.name} — ${brand.tagline}`}
      width="260"
      height="64"
    />
  );
}
