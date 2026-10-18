import { useEffect, useRef } from "react";

export const useReveal = () => {
  const scopeRef = useRef(null);

  useEffect(() => {
    const root = scopeRef.current;
    if (!root) return undefined;

    const items = root.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return scopeRef;
};
