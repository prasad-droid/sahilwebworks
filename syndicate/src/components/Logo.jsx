import { useState } from 'react';
import { company } from '../data/site';
import './Logo.css';

/** Uses public/logo.png when supplied; otherwise renders a clean wordmark. */
export default function Logo({ compact = false, onClick }) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#home" onClick={onClick} aria-label={`${company.name} — home`}>
      {hasImage ? (
        <img className="brand__image" src={company.logoUrl} alt={company.name} onError={() => setHasImage(false)} />
      ) : (
        <span className="brand__mark" aria-hidden="true">
          SG
        </span>
      )}
      <span className="brand__wordmark">
        <strong>Syndicate Global</strong>
        <span>EXIM</span>
      </span>
    </a>
  );
}
