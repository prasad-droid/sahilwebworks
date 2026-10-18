import { useState } from "react";
import { company, driveThumbUrl, suppliedAssets } from "../data/assets";

/**
 * Supplied PrajtamEx logo with graceful degradation:
 * local file -> public Google Drive file -> typographic wordmark.
 */
export default function Logo({ light = false, withTagline = false }) {
  const [stage, setStage] = useState(0);
  const asset = suppliedAssets.logo;
  const sources = [asset.local, driveThumbUrl(asset.driveId, 600)];

  return (
    <span className={`logo ${light ? "logo--light" : ""}`}>
      {stage < sources.length ? (
        <img
          className="logo__image"
          src={sources[stage]}
          alt={asset.alt}
          width="140"
          height="44"
          decoding="async"
          onError={() => setStage((s) => s + 1)}
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
