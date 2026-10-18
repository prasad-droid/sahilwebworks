import { useState } from 'react'
import './SmartImage.css'

/**
 * Wraps <img> with a branded gradient fallback for cases where a remote
 * stock image cannot be loaded (offline, blocked CDN, removed asset).
 * Loading is lazy below the fold per the `loading` prop.
 */
export default function SmartImage({ src, srcSet, alt, className = '', loading = 'lazy', sizes }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`smart-img${failed ? ' smart-img--failed' : ''}${className ? ` ${className}` : ''}`}>
      <div className="smart-img__fallback" aria-hidden="true">
        <span className="smart-img__monogram">TA</span>
      </div>
      {!failed && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}