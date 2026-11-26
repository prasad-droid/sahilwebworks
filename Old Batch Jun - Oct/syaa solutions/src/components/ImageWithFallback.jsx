import { useState } from 'react';
import { ImageOff } from 'lucide-react';

/** Responsive image with a graceful, on-brand fallback if a photo is missing. */
export default function ImageWithFallback({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height,
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`image-fallback ${className}`.trim()}
        role="img"
        aria-label={`${alt} (image not available)`}
      >
        <ImageOff size={30} strokeWidth={1.5} aria-hidden="true" />
        <span>Image not available</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      onError={() => setFailed(true)}
    />
  );
}
