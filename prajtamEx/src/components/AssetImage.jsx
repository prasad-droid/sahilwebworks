import { useState } from "react";
import { driveThumbUrl } from "../data/assets";

function placeholderDataUri(label = "PrajtamEx") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
<defs>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1c5a44"/><stop offset="1" stop-color="#0d3024"/></linearGradient>
<pattern id="p" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0v48" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern>
</defs>
<rect width="1200" height="800" fill="url(#g)"/>
<rect width="1200" height="800" fill="url(#p)"/>
<circle cx="600" cy="330" r="72" fill="none" stroke="rgba(195,154,74,0.6)" stroke-width="2"/>
<path d="M566 366V294h30c18 0 28 10 28 24s-10 24-28 24h-30m30-24 30 48" fill="none" stroke="rgba(247,243,233,0.9)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<text x="600" y="470" fill="#f7f3e9" font-family="Inter, Arial, sans-serif" font-size="46" font-weight="700" letter-spacing="2" text-anchor="middle">${label}</text>
<text x="600" y="516" fill="rgba(247,243,233,0.55)" font-family="Inter, Arial, sans-serif" font-size="24" letter-spacing="4" text-anchor="middle">COMPANY IMAGE</text>
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/**
 * Loads a supplied/local image with a safe fallback chain:
 *   1. local production path (e.g. /images/logo.png)
 *   2. Google Drive thumbnail (only works once the file is shared publicly)
 *   3. branded placeholder, so the layout never breaks
 */
export default function AssetImage({
  src,
  driveId,
  alt,
  className = "",
  label = "PrajtamEx",
  ...rest
}) {
  const [stage, setStage] = useState(0);

  const candidates = [src, driveId ? driveThumbUrl(driveId) : null, placeholderDataUri(label)];
  const current = candidates[stage] || candidates[candidates.length - 1];

  return (
    <img
      className={`asset-image ${className}`.trim()}
      src={current}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setStage((s) => (s + 1 < candidates.length ? s + 1 : s))}
      {...rest}
    />
  );
}
