export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}

export function lockScroll(locked) {
  if (typeof document === "undefined") return;
  document.body.style.overflow = locked ? "hidden" : "";
}
