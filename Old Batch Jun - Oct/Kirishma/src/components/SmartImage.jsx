import { useState } from 'react'

/**
 * Image with a graceful, on-brand fallback.
 *
 * If a photo is missing or fails to load, we render a warm textured tile with
 * the product/category label instead of a broken-image icon. This keeps the
 * layout intact while real photography is being added to /public/images.
 */
export default function SmartImage({
  src,
  alt,
  label = '',
  className = '',
  wrapperClassName = '',
  loading = 'lazy',
  decoding = 'async',
  width,
  height,
  sizes,
  ...rest
}) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <span
        className={`smart-image__fallback ${wrapperClassName} ${className}`.trim()}
        role="img"
        aria-label={alt}
      >
        <span className="smart-image__fallback-glyph" aria-hidden="true">
          {label ? label.trim().charAt(0).toUpperCase() : <LeafGlyph />}
        </span>
        {label ? <span className="smart-image__fallback-label">{label}</span> : null}
      </span>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`smart-image ${className}`.trim()}
      loading={loading}
      decoding={decoding}
      onError={() => setHasError(true)}
      {...(width ? { width } : {})}
      {...(height ? { height } : {})}
      {...(sizes ? { sizes } : {})}
      {...rest}
    />
  )
}

function LeafGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" aria-hidden="true">
      <path
        d="M12 21c0-6 3.6-10.2 9-12-.6 6.6-3.6 10.8-9 12Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 21c0-4.5-1.8-7.8-5.4-9.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
