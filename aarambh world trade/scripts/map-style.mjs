/**
 * Reads the real world-map styling out of src/styles/markets.css.
 *
 * The preview and contrast tools both render the map, so they must both use
 * the values the browser will use. Hardcoding copies of these numbers let the
 * map ship at 1.33:1 while the tooling still reported success, so every value
 * is parsed from the stylesheet instead.
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const CSS_PATH = fileURLToPath(new URL('../src/styles/markets.css', import.meta.url));

function readRule(selector) {
  const css = readFileSync(CSS_PATH, 'utf8');
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const rule = css.match(new RegExp(`${escaped}\\s*\\{([^}]*)\\}`));
  if (!rule) throw new Error(`No "${selector}" rule found in markets.css`);
  return rule[1];
}

function pickProperty(body, prop, selector) {
  const m = body.match(new RegExp(`(?:^|;)\\s*${prop}\\s*:\\s*([^;]+)`, 'i'));
  if (!m) throw new Error(`"${selector}" in markets.css is missing "${prop}"`);
  return m[1].trim();
}

/**
 * The two real backdrops behind the map, worst case first:
 *  - darkest: the section background at the map's edges
 *  - lightest: section background + .markets::before radial tint + the
 *    .markets__stage white gradient, i.e. the map's centre
 * A fill has to clear the contrast minimum against both, not just the darkest.
 */
export const BACKDROPS = [
  { label: 'darkest ', rgb: [13, 36, 25] },
  { label: 'lightest', rgb: [40, 64, 43] },
];

/** WCAG AA contrast minimum for non-text UI such as a map silhouette. */
export const MIN_MAP_CONTRAST = 3;

/** Worst-case contrast of the applied country fill against both backdrops. */
export function worstMapContrast() {
  const { fill } = readCountryStyle();
  return Math.min(...BACKDROPS.map((bd) => contrast(flatten(fill, bd.rgb), bd.rgb)));
}

/** fill / stroke / stroke-width for `.markets__countries path`. */
export function readCountryStyle() {
  const selector = '.markets__countries path';
  const body = readRule(selector);
  return {
    fill: pickProperty(body, 'fill', selector),
    stroke: pickProperty(body, 'stroke', selector),
    strokeWidth: Number.parseFloat(pickProperty(body, 'stroke-width', selector)),
  };
}

/** Splits "rgba(r,g,b,a)" / "rgb(r,g,b)" into channels plus alpha. */
export function parseColor(value) {
  const parts = value.match(/[\d.]+/g).map(Number);
  return { rgb: parts.slice(0, 3), alpha: parts.length > 3 ? parts[3] : 1 };
}

/** Composites a possibly translucent colour over an opaque backdrop. */
export function flatten(value, bg) {
  const { rgb, alpha } = parseColor(value);
  return rgb.map((c, i) => c * alpha + bg[i] * (1 - alpha));
}

/** WCAG relative luminance for an rgb triple. */
export function luminance([r, g, b]) {
  const f = (c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/** WCAG contrast ratio between two rgb triples. */
export function contrast(a, b) {
  const l1 = luminance(a);
  const l2 = luminance(b);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}
