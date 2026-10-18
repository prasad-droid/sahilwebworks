import { FRUIT_IMAGES, VEGETABLE_IMAGES, DRY_FRUIT_IMAGES, TURMERIC_IMAGES, VERMICOMPOST_IMAGES } from '../data/siteData.js';

export default function LightboxModal({ lightboxIndex, setLightboxIndex, activeGallery, t }) {
  if (lightboxIndex === null || !activeGallery) return null;

  const imagesList = activeGallery === 'fruits' ? [...FRUIT_IMAGES, ...VEGETABLE_IMAGES] : activeGallery === 'vegetables' ? VEGETABLE_IMAGES : activeGallery === 'raisins' ? DRY_FRUIT_IMAGES : activeGallery === 'turmeric' ? TURMERIC_IMAGES : VERMICOMPOST_IMAGES;
  const safeIndex = lightboxIndex % imagesList.length;
  const currentImg = imagesList[safeIndex];

  return (
    <div className="lightbox-modal animate-fade-in" onClick={(e) => e.target.classList.contains('lightbox-modal') && setLightboxIndex(null)}>
      <button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close lightbox">
        <i className="fa-solid fa-xmark"></i>
      </button>

      <button
        className="lightbox-nav lightbox-prev"
        onClick={() => setLightboxIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length)}
        aria-label="Previous image"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="lightbox-content">
        {currentImg.isVideo ? (
          <video src={currentImg.src} controls autoPlay className="lightbox-image animate-zoom-in" style={{ maxHeight: '70vh', maxWidth: '90%', borderRadius: '4px' }} />
        ) : (
          <img src={currentImg.src} alt={currentImg.title} className="lightbox-image" />
        )}
        <div className="lightbox-caption">
          <h3>{typeof t(`imageTitles.${activeGallery}.${currentImg.title}`) === 'string' && !t(`imageTitles.${activeGallery}.${currentImg.title}`).startsWith('imageTitles.') ? t(`imageTitles.${activeGallery}.${currentImg.title}`) : currentImg.title}</h3>
          <p>{currentImg.description}</p>
          <div className="lightbox-counter">{currentImg.isVideo ? t('gallery.videoCounter') : t('gallery.imageCounter')} {safeIndex + 1} of {imagesList.length}</div>
        </div>
      </div>

      <button
        className="lightbox-nav lightbox-next"
        onClick={() => setLightboxIndex((prev) => (prev + 1) % imagesList.length)}
        aria-label="Next image"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}
