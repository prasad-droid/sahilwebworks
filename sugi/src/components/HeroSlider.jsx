import { useEffect, useMemo, useState } from "react";
import { useSite } from "../store/SiteContext";
import "../styles/heroSlider.css";

// ==========================================================================
// HERO SLIDER — automatic, full-width image slider.
// Default artwork is bundled; banners uploaded in the Admin Panel
// (Images & Gallery > Homepage banner / slider) are prepended and take
// priority when present.
// ==========================================================================

import hero1 from "../assets/brand/hero-banner-1.png";
import hero2 from "../assets/brand/hero-banner-2.png";
import hero3 from "../assets/brand/hero-banner-3.png";

export const HERO_SLIDES = [
  { src: hero1, alt: "Fresh from India — premium quality produce for the world" },
  { src: hero2, alt: "Almonds in shell — premium quality, naturally nutritious, global supply" },
  { src: hero3, alt: "Raw cashew nuts — premium quality, reliable supply, global reach" },
];

const INTERVAL = 5200;

function useSlides() {
  const { media = [] } = useSite();
  return useMemo(() => {
    const banners = (media || [])
      .filter((m) => m.group === "banner" && m.image)
      .map((m) => ({ src: m.image, alt: m.title || "Sugi International" }));
    return banners.length ? banners : HERO_SLIDES;
  }, [media]);
}

export default function HeroSlider() {
  const slides = useSlides();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL
    );
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const go = (i) => setIndex((i + slides.length) % slides.length);

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Featured imagery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="hero-slider__viewport">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slider__slide ${i === index ? "is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <img src={slide.src} alt={i === index ? slide.alt : ""} />
          </div>
        ))}
        <div className="hero-slider__scrim" aria-hidden="true" />
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="hero-slider__arrow hero-slider__arrow--prev"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            className="hero-slider__arrow hero-slider__arrow--next"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
          >
            <span aria-hidden="true">›</span>
          </button>

          <div className="hero-slider__dots" role="tablist" aria-label="Slide selection">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                className={`hero-slider__dot ${i === index ? "is-active" : ""}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
