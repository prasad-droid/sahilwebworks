import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE || "http://127.0.0.1:4173";
const OUT = process.env.OUT || "C:\\Users\\Jay\\AppData\\Local\\Temp\\opencode\\prajtamex-shots";
const EDGE =
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});

async function shoot(page, selector, name) {
  await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  }, selector);
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `${OUT}/${name}.png` });
  console.log("saved", name);
}

// desktop
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(BASE, { waitUntil: "networkidle2", timeout: 60000 });
await page.evaluate(() => {
  document.documentElement.style.scrollBehavior = "auto";
});
await page.evaluate(async () => {
  const total = document.body.scrollHeight;
  for (let y = 0; y <= total; y += 500) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 40));
  }
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 1200));
await page.screenshot({ path: `${OUT}/desktop-01-hero.png` });
console.log("saved desktop-01-hero");

await shoot(page, "#about", "desktop-02-about");
await shoot(page, ".focus", "desktop-03-focus");
await shoot(page, "#products", "desktop-04-products");
await shoot(page, "#services", "desktop-05-services");
await shoot(page, "#global-markets", "desktop-06-global");
await shoot(page, "#portfolio", "desktop-07-portfolio");
await shoot(page, "#process", "desktop-08-process");
await shoot(page, "#why", "desktop-09-why");
await shoot(page, "#gallery", "desktop-10-gallery");
await shoot(page, "#contact", "desktop-11-contact");
await shoot(page, "#footer", "desktop-12-footer");

// mobile
const m = await browser.newPage();
await m.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
await m.goto(BASE, { waitUntil: "networkidle2", timeout: 60000 });
await m.evaluate(() => {
  document.documentElement.style.scrollBehavior = "auto";
});
await new Promise((r) => setTimeout(r, 1000));
await m.screenshot({ path: `${OUT}/mobile-01-hero.png` });
console.log("saved mobile-01-hero");

await m.tap(".navbar__toggle");
await new Promise((r) => setTimeout(r, 900));
await m.screenshot({ path: `${OUT}/mobile-02-menu.png` });
console.log("saved mobile-02-menu");
await m.tap(".navbar__toggle");
await new Promise((r) => setTimeout(r, 700));

await shoot(m, "#about", "mobile-03-about");
await shoot(m, "#global-markets", "mobile-04-global");
await shoot(m, "#gallery", "mobile-05-gallery");
await shoot(m, "#contact", "mobile-06-contact");

await browser.close();
console.log("done ->", OUT);
