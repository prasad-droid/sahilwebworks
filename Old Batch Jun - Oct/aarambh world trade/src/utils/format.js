/** Normalises a phone number into a tel: / wa.me friendly string. */
export const normalisePhone = (value) => String(value || '').replace(/[^\d+]/g, '');

/** Builds a mailto: link with an optional pre-filled subject. */
export function mailtoLink(subject = '', body = '') {
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${'aarambhworldtrade@gmail.com'}${params.length ? `?${params.join('&')}` : ''}`;
}

/** Turns "Dehydrated Onion Powder" into "dehydrated-onion-powder". */
export const slugify = (value) =>
  String(value || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Clamp helper used by the mobile menu and lightbox. */
export const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

/** Smoothly scrolls an element into view, honouring reduced-motion. */
export function scrollToElement(target, { offset = 0, behavior } = {}) {
  if (typeof document === 'undefined') return;
  const el =
    typeof target === 'string' ? document.getElementById(target.replace(/^#/, '')) : target;
  if (!el) return;

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: behavior || (reduce ? 'auto' : 'smooth'),
  });
}
