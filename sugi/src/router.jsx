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

// Scrolls to the top whenever the top-level page changes (not for
// same-page sub-route changes such as /products -> /products/x).
export function useScrollTop(path) {
  const segment = path.split("/").slice(0, 2).join("/");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [segment]);
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
