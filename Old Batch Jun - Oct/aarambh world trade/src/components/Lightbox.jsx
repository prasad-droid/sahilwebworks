import { useEffect } from 'react';
import { Icon } from './Icons.jsx';

/**
 * Full-screen image viewer.
 *
 * Keyboard support: Escape closes, ArrowLeft/ArrowRight move between images,
 * Tab is trapped inside the dialog.
 */
export function Lightbox({ items, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (index < 0) return undefined;

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowLeft') onPrev();
      else if (event.key === 'ArrowRight') onNext();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [index, onClose, onPrev, onNext]);

  if (index < 0 || index >= items.length) return null;
  const item = items[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      onClick={onClose}
    >
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close image viewer">
        <Icon name="close" size={20} />
      </button>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        <Icon name="arrowRight" size={20} className="lightbox__nav-icon lightbox__nav-icon--flip" />
      </button>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        <Icon name="arrowRight" size={20} />
      </button>

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img className="lightbox__img" src={item.src} alt={item.alt} />
        <figcaption className="lightbox__caption">
          <strong>{item.caption}</strong>
          <span>{item.credit}</span>
          <span className="lightbox__count">
            {index + 1} / {items.length}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

export default Lightbox;
