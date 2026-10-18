import { useEffect, useRef, useState } from 'react';

/**
 * Reveals children when they scroll into view.
 *
 * Uses IntersectionObserver rather than a scroll listener so the animation
 * costs nothing until it is needed, and degrades to "always visible" when the
 * API is unavailable or the visitor prefers reduced motion.
 */
export function useReveal({ threshold = 0.12, rootMargin = '0px 0px -60px 0px', once = true } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

/**
 * Same idea, but exposes the visible flag so a parent can drive staggered
 * child animations (used by the product grid and process timeline).
 */
export function useInView(options) {
  return useReveal(options);
}

export default useReveal;
