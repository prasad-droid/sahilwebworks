import { useState } from "react";
import { company, suppliedAssets } from "../data/assets";

/**
 * Local PrajtamEx logo with a typographic fallback so the brand never breaks.
 * Replace /public/images/logo.svg with the final supplied logo when available.
 */
export default function Logo({ light = false, withTagline = false }) {
  const [failed, setFailed] = useState(false);
  const asset = suppliedAssets.logo;

  return (
    <span className={`logo ${light ? "logo--light" : ""}`}>
      {!failed ? (
        <img
          className="logo__image"
          src={asset.local}
          alt={asset.alt}
          width="180"
          height="44"
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="logo__wordmark" aria-label={company.name}>
          <span className="logo__mark" aria-hidden="true">
            P
          </span>
          <span className="logo__text">
            Prajtam<span>Ex</span>
          </span>
        </span>
      )}
      {withTagline && <span className="logo__tagline">{company.tagline}</span>}
    </span>
  );
}
