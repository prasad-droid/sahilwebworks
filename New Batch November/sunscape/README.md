# Sunscape Enterprises

Premium single-page React website for Sunscape Enterprises, an import and export business.
Built with React functional components, Vite, and hand-written CSS only — no UI or CSS frameworks.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Important: brand assets

The supplied Google Drive links required sign-in, so the site currently uses a **temporary vector brand mark** in `public/brand/`.

To use the real logo:

1. Add the supplied files to `public/brand/` (for example `logo.png` and `logo-light.png`).
2. Update `logo` and `logoLight` in `src/data/site.js`.
3. Replace the colour tokens at the top of `src/styles/global.css` with colours sampled from the supplied logo.
4. Replace `public/brand/favicon.svg` and `public/brand/og-cover.svg` with final branded versions.
5. Add the canonical URL in `index.html` once the domain is confirmed.

## Editing content

- Company details, navigation, contact information and image paths: `src/data/site.js`
- Products: `src/data/products.js` (intentionally empty — no products were supplied)
- Testimonials: `src/data/testimonials.js` (intentionally empty — no verified feedback was supplied)
- Feature cards: `src/data/features.js`

Products added to `src/data/products.js` automatically appear in the catalogue grid, detail modal,
and inquiry prefill. See the documented object shape in that file.

## Inquiry form behaviour

The form validates required fields, email format and phone format. On valid submission it opens
WhatsApp with a pre-written, fully populated inquiry message addressed to
`+91 7770007019`, ready for the visitor to review and send. A fallback link is shown in case the
browser blocks the pop-up. No fake "sent" confirmation is used.

Spam protection readiness is included via a honeypot field and a minimum completion-time check.
If a real backend or email service is supplied later, replace the WhatsApp step in
`handleSubmit` inside `src/components/Contact.jsx` with a POST to that endpoint.

## Structure

```
src/
  components/   Reusable UI sections and cards
  data/         Editable site content
  hooks/        Scroll-reveal observer
  styles/       Hand-written CSS, one file per area
  utils/        WhatsApp, scroll and validation helpers
public/
  brand/        Temporary logo, favicon and social cover
  images/       Locally stored optimised photography
```

## Notes

- No products, certifications, achievements, destinations or testimonials have been invented.
- The world map is explicitly labelled as illustrative and shows no routes or destinations.
- Reduced-motion preferences are respected throughout.
- Photography credits are in `public/images/CREDITS.md`.
