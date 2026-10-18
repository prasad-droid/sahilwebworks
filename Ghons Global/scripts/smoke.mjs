import { build } from "esbuild";
import { createRequire } from "node:module";
import { writeFileSync, mkdirSync } from "node:fs";

const require = createRequire(import.meta.url);

const entry = `
import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { renderToString } from "react-dom/server";
import Home from "../../src/pages/Home.jsx";
import DynamicCategory from "../../src/pages/DynamicCategory.jsx";
import Navbar from "../../src/components/Navbar/Navbar.jsx";
import Footer from "../../src/components/Footer/Footer.jsx";

const wrap = (node) => React.createElement(MemoryRouter, null, node);
const home = renderToString(wrap(React.createElement(Home)));
const cat = renderToString(
  React.createElement(MemoryRouter, { initialEntries: ["/category/imitation-jewellery"] },
    React.createElement(Routes, null,
      React.createElement(Route, { path: "/category/:slug", element: React.createElement(DynamicCategory) })
    )
  )
);
const navbar = renderToString(wrap(React.createElement(Navbar)));
const footer = renderToString(wrap(React.createElement(Footer)));

const checks = {
  homeRendered: home.length > 1000,
  heroTitle: home.includes("Smart Supply for"),
  aboutSection: home.includes("India-Based Exporter"),
  products: home.includes("Bridal Necklace Set"),
  services: home.includes("Wholesale Supply"),
  why: home.includes("A Partner You Can Rely On"),
  gallery: home.includes("Collections &amp; Displays"),
  testimonials: home.includes("Trusted By Buyers Worldwide"),
  orderForm: home.includes("Bulk Inquiry Form"),
  contact: home.includes("+91 7039281981"),
  categoryPage: cat.includes("Imitation Jewellery") && cat.includes("Bridal Necklace Set"),
  navbar: navbar.includes("Request Catalogue"),
  footer: footer.includes("All Rights Reserved"),
};

let ok = true;
for (const [k, v] of Object.entries(checks)) {
  console.log(\`\${v ? "PASS" : "FAIL"}  \${k}\`);
  if (!v) ok = false;
}
process.exit(ok ? 0 : 1);
`;

mkdirSync("scripts/.tmp", { recursive: true });
writeFileSync("scripts/.tmp/smoke-entry.jsx", entry, "utf8");

await build({
  entryPoints: ["scripts/.tmp/smoke-entry.jsx"],
  bundle: true,
  platform: "node",
  format: "esm",
  jsx: "automatic",
  logLevel: "silent",
  outfile: "scripts/.tmp/smoke-run.mjs",
  external: ["react", "react-dom", "react-dom/server"],
  define: { "process.env.NODE_ENV": '"production"' },
});

await import("./.tmp/smoke-run.mjs");
