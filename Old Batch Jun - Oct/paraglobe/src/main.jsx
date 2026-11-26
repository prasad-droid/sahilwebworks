import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/products.css";
import "./styles/catalog.css";
import "./styles/sustainability.css";
import "./styles/contact.css";
import "./styles/footer.css";

/* ---------- Intro loader ---------- */
/* The loader lives in index.html so it paints before this bundle parses.
   Keep it visible for at least MIN_MS so it reads as an intentional brand
   moment instead of a flicker on fast connections. */
const MIN_MS = 900;
const startedAt = performance.now();

function dismissLoader() {
  document.documentElement.classList.remove("pl-loading");

  const loader = document.getElementById("app-loader");
  if (!loader) return;

  const wait = Math.max(0, MIN_MS - (performance.now() - startedAt));

  window.setTimeout(() => {
    loader.classList.add("is-done");

    const remove = () => {
      if (loader.parentNode) loader.parentNode.removeChild(loader);
    };

    loader.addEventListener("transitionend", remove, { once: true });
    window.setTimeout(remove, 1600); // safety net if the transition never fires
  }, wait);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (document.readyState === "complete") {
  dismissLoader();
} else {
  window.addEventListener("load", dismissLoader, { once: true });
}