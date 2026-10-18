import { useEffect, useRef } from "react";

let revealObserver = null;

function getObserver() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
  }
  return revealObserver;
}

function observe(el) {
  const rect = el.getBoundingClientRect();
  const inView = rect.top < window.innerHeight && rect.bottom > 0;
  if (inView) {
    el.classList.add("is-visible");
    return;
  }
  getObserver().observe(el);
}

export default function useScrollReveal() {
  useEffect(() => {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(observe);

    const mutation = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          if (node.classList && node.classList.contains("reveal")) {
            observe(node);
          }
          node.querySelectorAll?.(".reveal:not(.is-visible)").forEach(observe);
        });
      });
    });

    mutation.observe(document.body, { childList: true, subtree: true });
    return () => mutation.disconnect();
  }, []);
}

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    observe(el);
    return () => {
      if (revealObserver) revealObserver.unobserve(el);
    };
  }, []);

  const delayClass =
    delay === 1
      ? "reveal--delay-1"
      : delay === 2
      ? "reveal--delay-2"
      : delay === 3
      ? "reveal--delay-3"
      : "";
  return <div ref={ref} className={`reveal ${delayClass} ${className}`}>{children}</div>;
}
