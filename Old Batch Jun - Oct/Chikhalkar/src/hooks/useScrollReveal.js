import { useEffect } from "react";

const useScrollReveal = () => {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      const revealAll = () =>
        document.querySelectorAll(".reveal").forEach((el) => el.classList.add("revealed"));
      revealAll();
      const mo = new MutationObserver(revealAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    let observer;
    const observe = () => {
      if (!observer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
      }
      document.querySelectorAll(".reveal:not(.revealed)").forEach((el) => observer.observe(el));
    };

    observe();

    const mo = new MutationObserver(() => observe());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      observer?.disconnect();
    };
  }, []);
};

export default useScrollReveal;
