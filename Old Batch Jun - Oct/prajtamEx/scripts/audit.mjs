import puppeteer from "puppeteer-core";

const BASE = process.env.BASE || "http://127.0.0.1:4173";
const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});

const findings = [];

async function auditViewport(width, height, label) {
  const page = await browser.newPage();
  await page.setViewport({ width, height });
  await page.goto(BASE, { waitUntil: "networkidle2", timeout: 60000 });
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
  });
  await page.evaluate(async () => {
    for (let y = 0; y <= document.body.scrollHeight; y += 450) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 45));
    }
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 300));
    window.scrollTo(0, 0);
  });
  await new Promise((r) => setTimeout(r, 900));

  const report = await page.evaluate(() => {
    const out = { overflowX: [], clipped: [], overlaps: [], tiny: [], misc: [] };
    const rect = (el) => el.getBoundingClientRect();
    const name = (el) =>
      `${el.tagName.toLowerCase()}${el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/).slice(0, 2).join(".") : ""}`;

    // 1. page level horizontal overflow
    out.pageOverflow =
      document.documentElement.scrollWidth - document.documentElement.clientWidth;

    // 2. clipped content inside overflow-hidden boxes
    document.querySelectorAll("body *").forEach((el) => {
      const cs = getComputedStyle(el);
      const hidden = cs.overflowX === "hidden" || cs.overflow === "hidden";
      if (!hidden) return;
      if (el.scrollWidth > el.clientWidth + 4 && el.clientWidth > 0) {
        if (el.closest(".form__preview") || el.tagName === "PRE") return;
        out.clipped.push(`${name(el)} scrollW=${el.scrollWidth} clientW=${el.clientWidth}`);
      }
    });

    // 3. reveal elements all visible
    const reveals = Array.from(document.querySelectorAll("[data-reveal]"));
    out.reveals = `${reveals.filter((r) => r.classList.contains("is-visible")).length}/${reveals.length}`;

    // 4. hero content vs hero cards
    const hc = document.querySelector(".hero__content");
    const hcards = document.querySelector(".hero__cards");
    if (hc && hcards && getComputedStyle(hcards).display !== "none") {
      const a = rect(hc);
      const b = rect(hcards);
      if (a.right > b.left + 4 && a.bottom > b.top + 4 && a.top < b.bottom) {
        out.overlaps.push(`hero__content overlaps hero__cards (content right=${Math.round(a.right)}, cards left=${Math.round(b.left)})`);
      }
    }

    // 5. fixed float actions vs footer bottom CONTENT (children, not padded box)
    const fa = document.querySelector(".float-actions");
    const fb = document.querySelector(".footer__bottom-inner");
    if (fa && fb) {
      window.scrollTo(0, document.body.scrollHeight);
      const parts = Array.from(fb.children).map((c) => rect(c));
      const content = parts.length
        ? {
            left: Math.min(...parts.map((r) => r.left)),
            right: Math.max(...parts.map((r) => r.right)),
            top: Math.min(...parts.map((r) => r.top)),
            bottom: Math.max(...parts.map((r) => r.bottom)),
          }
        : rect(fb);
      const a = rect(fa);
      if (
        a.left < content.right &&
        a.right > content.left &&
        a.top < content.bottom &&
        a.bottom > content.top
      ) {
        out.overlaps.push(
          `float-actions overlaps footer content (fa=${Math.round(a.left)},${Math.round(a.top)} content right=${Math.round(content.right)} y=${Math.round(content.top)}–${Math.round(content.bottom)})`
        );
      }
      window.scrollTo(0, 0);
    }

    // 6. float actions vs form submit button
    const submit = document.querySelector('.form button[type="submit"]');
    if (submit && fa) {
      submit.scrollIntoView({ block: "center" });
      const a = rect(fa);
      const b = rect(submit);
      if (a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top) {
        out.overlaps.push(`float-actions overlaps enquiry submit button`);
      }
    }

    // 7. type scale
    const h1 = document.querySelector("h1");
    const st = document.querySelector(".section-title");
    out.h1Size = h1 ? parseFloat(getComputedStyle(h1).fontSize) : null;
    out.titleSize = st ? parseFloat(getComputedStyle(st).fontSize) : null;
    out.h1Color = h1 ? getComputedStyle(h1).color : null;

    // 8. sections widths: content must stay inside container
    document.querySelectorAll(".container").forEach((c) => {
      const r = rect(c);
      if (r.left < -1 || r.right > window.innerWidth + 1) {
        out.overflowX.push(`${name(c)} left=${Math.round(r.left)} right=${Math.round(r.right)} vw=${window.innerWidth}`);
      }
    });

    // 9. images decoded
    const imgs = Array.from(document.images);
    out.images = {
      total: imgs.length,
      broken: imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src.slice(0, 90)),
    };

    // 10. gallery masonry variety
    const gi = Array.from(document.querySelectorAll(".gallery__item")).slice(0, 8).map((i) => Math.round(rect(i).height));
    out.galleryHeights = gi;

    // 11. tiny tap targets (mobile audit)
    const targets = document.querySelectorAll(".float-actions__btn, .navbar__toggle, .filter-chip, .btn");
    out.tinyTargets = Array.from(targets)
      .filter((t) => {
        const r = rect(t);
        return r.width > 0 && r.height > 0 && r.height < 34;
      })
      .map((t) => `${name(t)} h=${Math.round(rect(t).height)}`);

    // 12. text over dark backgrounds readable: hero overlay present
    out.heroOverlay = !!document.querySelector(".hero__overlay");

    // 13. navbar overlap hero title at top
    const nav = document.querySelector(".navbar");
    if (nav && h1) {
      const n = rect(nav);
      const t = rect(h1);
      if (n.bottom > t.top && n.top < t.bottom && n.left < t.right && n.right > t.left) {
        out.overlaps.push(`navbar overlaps hero title (nav bottom=${Math.round(n.bottom)}, h1 top=${Math.round(t.top)})`);
      }
    }

    // 14. duplicate ids
    const ids = {};
    document.querySelectorAll("[id]").forEach((el) => {
      ids[el.id] = (ids[el.id] || 0) + 1;
    });
    out.duplicateIds = Object.entries(ids).filter(([, c]) => c > 1).map(([k]) => k);

    return out;
  });

  findings.push({ viewport: label, ...report });
  await page.close();
}

await auditViewport(1440, 900, "desktop 1440");
await auditViewport(1024, 768, "laptop 1024");
await auditViewport(768, 900, "tablet 768");
await auditViewport(375, 812, "mobile 375");
await auditViewport(320, 700, "mobile 320");

console.log(JSON.stringify(findings, null, 2));
await browser.close();
