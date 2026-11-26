# DVK Enterprises — Premium Single-Page Website

## Overview

This is a premium single-page React website for **DVK Enterprises**, an Indian merchant trader and exporter dealing in Moringa Powder, carpets, rugs, hair clips, and rubber bands. The site visualizes a professional export-company identity using a palette derived from the client logo.

## Architecture

- **React 19.3.1** + functional components + JSX
- **Vite 8.3.5** as build tool and dev server
- **Lucide React** for icons (v1.66.0)
- **Standard CSS only** — no Tailwind, Bootstrap, MUI, or any CSS framework
- Semantic, accessible HTML with ARIA labels and keyboard support

## Component Structure (under `src/components/`)

| Component | Description |
|---|---|
| `App.jsx` | Page assembly; manages inquiry product preselect + scroll-to-`#inquiry` |
| `Navbar.jsx` | Sticky nav, mobile hamburger, scroll-spy, skip-link |
| `Hero.jsx` | Hero collage/animations, tagline, trust highlights |
| `BrandHighlights.jsx` | Feature grid with icons |
| `AboutUs.jsx` | Company story and values |
| `ProductCategories.jsx` | Portfolio intro + 4 category sections |
| `MoringaProducts.jsx` | Moringa Powder themed showcase |
| `CarpetsAndRugs.jsx` | Carpets & Rugs themed showcase |
| `HairAccessories.jsx` | Hair Clips themed showcase |
| `RubberBands.jsx` | Rubber Bands themed showcase |
| `ProductCard.jsx` | Reusable themed category block |
| `WhyChooseUs.jsx` | Trust badges / differentiation |
| `ExportProcess.jsx` | Step-by-step export process |
| `Testimonials.jsx` | Genuine feedback placeholder (empty until approved) |
| `InquiryForm.jsx` | Validated form with endpoint/WhatsApp fallback |
| `ContactUs.jsx` | Call/email/WhatsApp links + office address |
| `Footer.jsx` | Full-width footer with links, contact, CTA |
| `WhatsAppButton.jsx` | Floating WhatsApp panel with number options |
| `BackToTop.jsx` | Scroll-to-top button with reduced-motion support |
| `Logo.jsx` | Brand lockup (mark + wordmark); placeholder `src/assets/logo.svg` |
| `Reveal.jsx` | IntersectionObserver-based scroll reveal with reduced-motion fallback |

## Data & Constants (under `src/data/`)

- `site.js` — All contact info, links, product options, customer types, `INQUIRY_ENDPOINT`, `TESTIMONIALS`
- `global.css` — Design tokens, typography (Manrope headings / Inter body), colors, buttons, reveal, reduced-motion
- `navbar.css` — Sticky nav, mobile menu, brand links
- `hero.css` — Hero layout, collage, orb animations
- `products.css` — Four product themes (moringa, carpets, fashion, rubber)
- `sections.css` — Highlights, why, process, testimonials, inquiry form
- `contact.css` — Contact cards and office details
- `footer.css` — Footer layout, brand actions, contact grid

## Asset Guide

### Placeholder Logo

- `src/assets/logo.svg` is a **placeholder** with a comment noting the original Google Drive source.
- Replace with the actual client logo SVG when available.
- The palette derives from the placeholder logo: forest `#0B3B2E`, gold `#C8A24B`, leaf `#2F8F5B`, cream `#F8F5EE`, dark `#06241C`, ink `#13251E`.

### Product Images

- 18 optimized WebP images are pre-generated under `src/assets/images/`.
- All images have explicit `width`/`height`, `loading="lazy"`, and `fetchPriority="high"` (hero main).
- Lazy-loading is applied everywhere except the hero main image (`fetchPriority="high"`).
- **Do not use raw Google Drive URLs** — they return sign-in HTML. Stock photography from Pexels is used instead.

### Fonts

- **Manrope** (weights 400, 500, 600, 700, 800) — headings
- **Inter** (weights 400, 500, 600) — body text
- Both loaded from Google Fonts via `<link rel="preconnect">` in `index.html`.

## Environment Configuration

Copy `.env.example` and set `VITE_INQUIRY_ENDPOINT` if you have a backend:

```env
# Set this to a POST endpoint that accepts JSON to enable real form submission.
# When empty, the form falls back to a pre-filled WhatsApp message.
VITE_INQUIRY_ENDPOINT=""
```

### Form Behavior

| Condition | Behavior |
|---|---|
| `VITE_INQUIRY_ENDPOINT` set + 2xx response | Shows "Enquiry sent" success message; form resets |
| `VITE_INQUIRY_ENDPOINT` set + non-2xx | Shows error; WhatsApp/email fallback available |
| `VITE_INQUIRY_ENDPOINT` not set | Form opens pre-filled WhatsApp; never fakes success |

### Inquiry Form Fields (all required unless marked optional)

| Field | Validation |
|---|---|
| Full Name | Minimum 2 characters |
| Email | Valid email pattern |
| Contact Number | 7–15 digits (with optional `+`/country code) |
| Country | Alphabetical + spaces + '.' + '-' |
| Customer Type | Must select from dropdown |
| Product Interest | Must select from dropdown |
| Required Quantity | Must not be empty |
| Additional Requirements | Optional textarea |

### WhatsApp Fallback URL Construction

When no backend is configured, the form builds a WhatsApp message with all enquiry details and opens `https://wa.me/919930439581?text=...`. The message includes:

- Full name, email, phone, country
- Customer type
- Product interest + required quantity
- Additional requirements (if any)

### Email Fallback

A pre-filled `mailto:` link is always available in the form and contact section, with subject auto-derived from the selected product.

## Responsive Design

- **Breakpoints**: 320px–1280px+ (fluid across wider)
- **No horizontal overflow** on any viewport
- **Sticky navbar** becomes opaque after 24px scroll; hides mobile panel above 1120px
- **Mobile hamburger**: panels toggle, focus trap, Escape to close, resize above 1120 collapses menu
- **IntersectionObserver** reveals with `prefers-reduced-motion` fallback (instant visible)
- All components test at: 320, 360, 375, 414, 480, 640, 768, 1024, 1120, 1280, 1440, 1920

## Accessibility

- Semantic HTML (header, main, section, footer,nav, address, button, input, select, textarea)
- ARIA labels, `aria-hidden`, `aria-current`, `aria-invalid`, `aria-describedby`
- Focus management: skip-link, mobile menu focus trap, Escape key, focus restoration
- Reduced-motion support via `prefers-reduced-motion` media query
- All images have explicit width/height and most have `loading="lazy"`
- Color contrast uses palette-derived tokens (forest on cream, gold on dark, etc.)

## SEO

- `index.html` contains full metadata:
  - `<title>`, `<meta name="description">`, `<meta name="keywords">`
  - Open Graph (`og:title`, `og:description`, `og:image`, `og:locale`)
  - Twitter Cards (`twitter:title`, `twitter:description`, `twitter:image`)
  - JSON-LD `Organization` schema with contact points (India + UAE), address, email, telephone
  - Canonical link placeholder (replace before launch)
  - `theme-color` meta set to `#0B3B2E`
- Screenshot: `public/og-image.jpg`

## Build & Deploy

```bash
npm install        # install dependencies (already done)
npm run dev        # start Vite dev server at http://localhost:5199 (or next free port)
npm run build      # produce production build (CSS ~54 kB gzip, JS vendor ~219 kB)
```

### Pre-launch Checklist

- [ ] Replace `src/assets/logo.svg` with the actual client logo
- [ ] Replace stock product images with client-approved photography if needed
- [ ] Set `VITE_INQUIRY_ENDPOINT` in `.env` if a backend is available
- [ ] Replace canonical URL placeholder in `index.html`
- [ ] Verify all `tel:`, `mailto:`, `wa.me` links are correct
- [ ] Confirm Google Maps directions link coordinates are acceptable (currently a search link, not embed)
- [ ] Add Google Maps embed only if office coordinates are verified (currently skipped)
- [ ] Add real testimonials to `src/data/site.js` `TESTIMONIALS` array when available
- [ ] Run `npm run build` and verify no errors
- [ ] Deploy to preferred hosting (Vite static export or SSR as needed)

## Known Caveats

- Google Drive-sourced assets are inaccessible (sign-in HTML); placeholder logo and stock photos are used.
- No `.env` file committed — create from `.env.example` for local development.
- Testimonials section renders a trust placeholder because `TESTIMONIALS = []` in `site.js`.
- Contact office coordinates are not verified via Google Maps embed; a "Get directions" search link is provided instead.
- Form never fakes success: only 2xx responses from `VITE_INQUIRY_ENDPOINT` mark the enquiry as sent; otherwise WhatsApp/email fallback is shown.