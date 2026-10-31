import { useEffect, useState } from "react";

// ==========================================================================
// Minimal hash-based router (no dependencies, static-host friendly).
//   #/            Home
//   #/about       About
//   #/products    Products
//   #/products/x  Product detail
//   #/quote       Quotation request form
// ==========================================================================

export function getPath() {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw || raw === "/") return "/";
  return raw.startsWith("/") ? raw : "/";
}

export function navigate(to) {
  if (getPath() === to) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = to;
}

export function useRoute() {
  const [path, setPath] = useState(getPath);

  useEffect(() => {
    const onChange = () => setPath(getPath());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return path;
}

// Scrolls to the top whenever the route changes. This includes sub-routes
// such as /products/a -> /products/b, so opening another product always
// starts at its hero instead of leaving the viewport at the previous page's
// footer or "More in …" grid.
export function useScrollTop(path) {
  useEffect(() => {
    // "instant" bypasses the global `scroll-behavior: smooth`, so a new page
    // opens at its hero immediately instead of animating up from the footer.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [path]);
}

export function Link({ to, children, onClick, ...rest }) {
  return (
    <a
      href={`#${to}`}
      onClick={(e) => {
        if (onClick) onClick(e);
        if (e.defaultPrevented) return;
        e.preventDefault();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
