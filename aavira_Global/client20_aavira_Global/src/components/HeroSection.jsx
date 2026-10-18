export default function HeroSection({
  translatedClonedHeroSlides,
  translatedHeroSlides,
  heroTrackIndex,
  heroTransitionEnabled,
  setHeroTrackIndex,
  setHeroTransitionEnabled,
  heroSlideIndex,
  setHeroPaused
}) {
  return (
    <section className="hero-slider-section" id="home">
      <div
        className="hero-slider"
        style={{ overflow: 'hidden' }}
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
      >
        <div
          className="hero-slider-track"
          style={{
            display: 'flex',
            height: '100%',
            width: `${translatedClonedHeroSlides.length * 100}%`,
            transform: `translate3d(-${(heroTrackIndex * 100) / translatedClonedHeroSlides.length}%, 0, 0)`,
            transition: heroTransitionEnabled ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
          }}
        >
          {translatedClonedHeroSlides.map((slide, idx) => {
            const isActive =
              heroTrackIndex === idx ||
              (idx === 1 && heroTrackIndex === translatedHeroSlides.length + 1) ||
              (idx === translatedHeroSlides.length + 1 && heroTrackIndex === 1) ||
              (idx === 0 && heroTrackIndex === translatedHeroSlides.length) ||
              (idx === translatedHeroSlides.length && heroTrackIndex === 0);
            return (
              <div
                key={idx}
                className={`hero-slide-item ${isActive ? 'active' : ''}`}
                style={{
                  width: `${100 / translatedClonedHeroSlides.length}%`,
                  height: '100%',
                  flexShrink: 0
                }}
              >
                <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'relative' }}>
                  <div className="hero-slide-visual" style={{ width: '100%', maxWidth: '1150px', position: 'relative' }}>
                    <div className="hero-image-wrapper">
                      <img src={slide.image} alt={slide.title} className="hero-product-img" />
                      <div className="hero-slide-title-overlay" style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: '40px 30px 30px',
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                        borderRadius: '0 0 12px 12px'
                      }}>
                        <h2 style={{
                          color: '#fff',
                          fontSize: '1.8rem',
                          fontFamily: 'Outfit, sans-serif',
                          fontWeight: 700,
                          margin: 0,
                          textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                        }}>{slide.title}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="hero-slider-dots">
        {translatedHeroSlides.map((_, idx) => (
          <button
            key={idx}
            className={`hero-slider-dot ${heroSlideIndex === idx ? 'active' : ''}`}
            onClick={() => {
              setHeroTransitionEnabled(true);
              setHeroTrackIndex(idx + 1);
            }}
            aria-label={`Go to hero slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
