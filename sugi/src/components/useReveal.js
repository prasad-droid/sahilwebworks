import { useEffect } from "react";

// Shared IntersectionObserver hook for section reveal animations.
// Pass the current route as `key` so elements rendered after a page change
// are observed again (the observer only sees nodes present at mount time).
export default function useReveal(key) {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
}
