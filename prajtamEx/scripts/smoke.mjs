import puppeteer from "puppeteer-core";

const BASE = process.env.BASE || "http://127.0.0.1:4173";
const EDGE =
  process.env.EDGE ||
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const pageErrors = [];
const consoleErrors = [];
const failedRequests = [];

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});

const page = await browser.newPage();
page.on("pageerror", (err) => pageErrors.push(String(err)));
page.on("console", (msg) => {
  if (msg.type() === "error") {
    const text = msg.text();
    if (!/Failed to load resource|net::ERR|404|401/.test(text)) consoleErrors.push(text);
  }
});
page.on("requestfailed", (req) => failedRequests.push(req.url()));
page.on("response", (res) => {
  if (res.status() >= 400 && !/drive\.google|favicon/.test(res.url())) {
    failedRequests.push(`${res.status()} ${res.url()}`);
  }
});

await page.setViewport({ width: 1440, height: 900 });
await page.goto(BASE, { waitUntil: "networkidle2", timeout: 60000 });

// disable smooth scrolling so programmatic scrolling is deterministic
await page.evaluate(() => {
  document.documentElement.style.scrollBehavior = "auto";
});

await page.evaluate(async () => {
  const total = document.body.scrollHeight;
  for (let y = 0; y <= total; y += 400) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 80));
  }
  window.scrollTo(0, 0);
});
await new Promise((r) => setTimeout(r, 1500));

const desktop = await page.evaluate(() => {
  const imgs = Array.from(document.images);
  return {
    title: document.title,
    h1: document.querySelector("h1")?.textContent?.trim(),
    eyebrow: document.querySelector(".hero__eyebrow")?.textContent?.trim(),
    sections: Array.from(document.querySelectorAll("main > section")).map(
      (s) => s.id || s.className.split(" ")[1]
    ),
    navLinks: Array.from(document.querySelectorAll(".navbar__link")).map((a) =>
      a.textContent.trim()
    ),
    totalImages: imgs.length,
    brokenImages: imgs
      .filter((i) => i.complete && i.naturalWidth === 0)
      .map((i) => i.currentSrc || i.src)
      .slice(0, 10),
    horizontalOverflow:
      document.documentElement.scrollWidth - document.documentElement.clientWidth,
    revealVisible: document.querySelectorAll("[data-reveal].is-visible").length,
    revealTotal: document.querySelectorAll("[data-reveal]").length,
    countryPaths: document.querySelectorAll(".worldmap__country").length,
    mapArcs: document.querySelectorAll(".worldmap__arc").length,
    emptyStateVisible: !!document.querySelector(".products__empty"),
    testimonialSection: !!document.querySelector(".testimonials"),
    galleryItems: document.querySelectorAll(".gallery__item").length,
    focusCards: document.querySelectorAll(".focus-card").length,
    serviceCards: document.querySelectorAll(".service-card").length,
    portfolioPanels: document.querySelectorAll(".portfolio-panel").length,
    processSteps: document.querySelectorAll(".process__step").length,
    whyCards: document.querySelectorAll(".why-card").length,
    copyright: document.querySelector(".footer__bottom p")?.textContent?.trim(),
    phoneHref: document.querySelector('a[href^="tel:"]')?.getAttribute("href"),
    waHref: document.querySelector('a[href*="wa.me"]')?.getAttribute("href"),
    emailHref: document.querySelector('a[href^="mailto:"]')?.getAttribute("href"),
    floatActions: document.querySelectorAll(".float-actions__btn").length,
  };
});

// ---- keyboard: open product-free flows are skipped; test enquiry form ----
await page.evaluate(() => document.querySelector("#contact")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 500));
await page.type("#fullName", "Test Buyer");
await page.type("#email", "buyer@example.com");
await page.select("#requirement", await page.$eval("#requirement", (s) => s.options[1]?.value));
await page.click('.form button[type="submit"]');
await new Promise((r) => setTimeout(r, 700));
const formPrepared = await page.evaluate(() => ({
  prepared: !!document.querySelector(".form--prepared"),
  preview: document.querySelector(".form__preview")?.textContent?.slice(0, 80),
  waLink: document.querySelector('.form__send a[href*="wa.me"]')?.getAttribute("href")?.slice(0, 60),
  errors: Array.from(document.querySelectorAll(".form__error")).map((e) => e.textContent),
}));

// ---- gallery lightbox ----
await page.evaluate(() => document.querySelector(".gallery__trigger")?.click());
await new Promise((r) => setTimeout(r, 500));
const lightbox = await page.evaluate(() => ({
  open: !!document.querySelector(".lightbox"),
  count: document.querySelector(".lightbox__count")?.textContent?.trim(),
}));
await page.keyboard.press("Escape");
await new Promise((r) => setTimeout(r, 300));
lightbox.closedByEscape = await page.evaluate(() => !document.querySelector(".lightbox"));

// ---- gallery filter: re-mounted items must still reveal ----
await page.evaluate(() => document.querySelector("#gallery")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 500));
const chips = await page.$$(".gallery__filters .filter-chip");
let galleryFilter = { skipped: true };
if (chips.length > 1) {
  await chips[1].click();
  await new Promise((r) => setTimeout(r, 800));
  galleryFilter = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll(".gallery__item"));
    return {
      category: document.querySelector(".gallery__filters .filter-chip.is-active")?.textContent,
      total: items.length,
      invisible: items.filter((i) => Number(getComputedStyle(i).opacity) < 0.99).length,
    };
  });
  await chips[0].click();
  await new Promise((r) => setTimeout(r, 500));
  await page.evaluate(async () => {
    const grid = document.querySelector(".gallery__grid");
    if (!grid) return;
    const start = grid.getBoundingClientRect().top + window.scrollY;
    for (let y = start; y < start + grid.offsetHeight; y += 350) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
  });
  await new Promise((r) => setTimeout(r, 700));
  galleryFilter.backToAllInvisible = await page.evaluate(
    () =>
      Array.from(document.querySelectorAll(".gallery__item")).filter(
        (i) => Number(getComputedStyle(i).opacity) < 0.99
      ).length
  );
}

// ---- mobile ----
await page.setViewport({ width: 375, height: 780, isMobile: true, hasTouch: true });
await page.reload({ waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 600));
const mobile = await page.evaluate(() => ({
  horizontalOverflow:
    document.documentElement.scrollWidth - document.documentElement.clientWidth,
  toggleShown: getComputedStyle(document.querySelector(".navbar__toggle")).display !== "none",
  desktopCtaHidden: getComputedStyle(document.querySelector(".navbar__cta--desktop")).display === "none",
  bottomBar: getComputedStyle(document.querySelector(".float-actions")).flexDirection,
}));
await page.tap(".navbar__toggle");
await new Promise((r) => setTimeout(r, 900));
mobile.menuOpened = await page.evaluate(() =>
  document.querySelector(".navbar__menu").classList.contains("is-open")
);
mobile.bodyLocked = await page.evaluate(() => document.body.style.overflow === "hidden");

const result = { desktop, formPrepared, lightbox, galleryFilter, mobile, pageErrors, consoleErrors, failedRequests: Array.from(new Set(failedRequests)).slice(0, 5) };
console.log(JSON.stringify(result, null, 2));

await browser.close();
if (pageErrors.length || consoleErrors.length) process.exit(1);
