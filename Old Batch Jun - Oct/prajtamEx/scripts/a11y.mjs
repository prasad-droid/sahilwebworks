import puppeteer from "puppeteer-core";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const axePath = require.resolve("axe-core/axe.min.js");
const BASE = process.env.BASE || "http://127.0.0.1:4173";
const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu"],
});

const summary = {};

async function runAxe(page, label) {
  await page.addScriptTag({ path: axePath });
  const res = await page.evaluate(async () => {
    const r = await window.axe.run(document, {
      runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] },
    });
    return r.violations.map((v) => ({
      id: v.id,
      impact: v.impact,
      help: v.help,
      nodes: v.nodes.slice(0, 4).map((n) => n.target.join(" ")),
      count: v.nodes.length,
    }));
  });
  summary[label] = res;
}

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(BASE, { waitUntil: "networkidle2", timeout: 60000 });
await page.evaluate(() => {
  document.documentElement.style.scrollBehavior = "auto";
});
await page.evaluate(async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 500) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 40));
  }
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 800));
await runAxe(page, "page");

// gallery lightbox state
await page.evaluate(() => document.querySelector(".gallery__trigger")?.click());
await new Promise((r) => setTimeout(r, 600));
await runAxe(page, "lightbox");
await page.keyboard.press("Escape");

// enquiry prepared state
await page.evaluate(() => document.querySelector("#contact")?.scrollIntoView());
await page.type("#fullName", "A11y Tester");
await page.type("#email", "a11y@example.com");
await page.select("#requirement", await page.$eval("#requirement", (s) => s.options[1]?.value));
await page.click('.form button[type="submit"]');
await new Promise((r) => setTimeout(r, 600));
await runAxe(page, "form-prepared");

// mobile menu open
const m = await browser.newPage();
await m.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
await m.goto(BASE, { waitUntil: "networkidle2", timeout: 60000 });
await m.tap(".navbar__toggle");
await new Promise((r) => setTimeout(r, 900));
await runAxe(m, "mobile-menu");

console.log(JSON.stringify(summary, null, 2));
const total = Object.values(summary).reduce((n, list) => n + list.length, 0);
console.log(`\nTOTAL VIOLATION TYPES: ${total}`);
await browser.close();
