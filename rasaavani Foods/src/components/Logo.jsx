import { useState } from 'react'
import { images } from '../data/images.js'

/**
 * Brand logo.
 *
 * Renders the official Rasavaani logo from `/images/logo.png`. The supplied
 * Google Drive asset could not be downloaded automatically, so if the file is
 * not yet present the component falls back to a typographic wordmark — it does
 * NOT invent a replacement logo mark. Drop the real file at
 * `public/images/logo.png` and it will appear automatically.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <span className={`brand-logo brand-logo--${variant} ${className}`.trim()}>
      {!failed ? (
        <img
          className="brand-logo__img"
          src={images.logo}
          alt="Rasavaani — The Taste of Tradition"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="brand-logo__fallback">
          <span className="brand-logo__mark" aria-hidden="true">
            R
          </span>
          <span className="brand-logo__text">
            <span className="brand-logo__name">RASAVAANI</span>
            <span className="brand-logo__sub">The Taste of Tradition</span>
          </span>
        </span>
      )}
    </span>
  )
}
