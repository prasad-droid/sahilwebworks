# Syndicate Global EXIM — B2B export website

Premium, fully responsive single-page React site for **Syndicate Global EXIM**, covering fresh agricultural produce exports and technical textile woven tapes. Built with React + Vite, JSX and plain custom CSS (no UI framework).

## Quick start

```bash
npm install
npm run dev
```

`npm run dev` starts both:

- Vite at `http://localhost:5173`
- The inquiry API at `http://localhost:3001` (proxied as `/api`)

For a production-style local run:

```bash
npm run build
npm start          # serves dist/ and /api/inquiries on http://localhost:3001
```

## Before deployment — important

1. **Inquiry backend:** The form only confirms success after a real `201` response from the configured endpoint. Local development uses the included zero-dependency API (`server.js`) which stores validated inquiries in `data/inquiries.json`. For hosting, either deploy `server.js` on a Node host or set `VITE_INQUIRY_ENDPOINT` in a `.env` file to a form service URL (Formspree, Getform, etc.). If no endpoint is configured, the form displays a visible setup notice and the API falls back to `/api/inquiries`. **Do not go live until this is connected to a monitored email/CRM destination.**
2. **Duplicate `.env.example` → `.env`** on a new machine. The repository includes a working `.env` pointing at `/api/inquiries`.
3. **Owner-supplied assets:** The Google Drive links in the brief require a Google sign-in and could not be downloaded. See `public/README.md`. Place `logo.png` and `supplied-business-photo.jpg` in `public/` — the site picks them up automatically. Until then, a typographic logo and a clearly labelled photo placeholder are shown.
4. **Certificates:** All certificate cards remain placeholder cards with “Document details available upon request”. Add genuine files to `public/` and set `file`, `registrationNumber` and `issueDetails` in `src/data/site.js`. Never publish generated or unverified documents.
5. **SEO:** Update `index.html` (title, meta description, canonical URL, Open Graph image URL) with the final production domain and supplied OG image.

## Content editing

All copy, product data, specifications, image URLs, navigation labels and contact details live in `src/data/site.js`. Components are independent and contain no hard-coded business copy. Images are optimized Pexels URLs with fixed crop parameters; swap any `px(...)` value for your own asset path.

```
src/
├── components/   # one JSX + CSS file per section
├── data/site.js  # editable content source of truth
├── hooks/        # scroll reveal observer
├── utils/        # form validation + product-to-form prefill
├── App.jsx
└── index.css     # tokens, typography, shared utilities
```

## Form data flow

`Contact.jsx` → `POST VITE_INQUIRY_ENDPOINT` → `server.js` validation + rate limit → `data/inquiries.json`.

Server-side validation mirrors the client. Field errors (`422`) are shown inline; network or server failures show a direct email/WhatsApp fallback and never a false success message.

## Accessibility & UX

Semantic HTML5, one H1, hierarchical H2/H3, descriptive alt text, keyboard-visible focus states, skip link, reduced-motion support, scroll-reveal animations, sticky transparent-to-solid navigation with active section state, responsive mobile menu, product gallery, expandable handling process, and product-specific inquiry prefill.

## Image credits

Stock photography from [Pexels](https://www.pexels.com/license/) under the Pexels License. These are representative category photographs, not photographs of Syndicate Global EXIM consignments — replace them with actual product and facility photography before going live wherever possible. The supplied Drive image is not included because it required authentication; a labelled, replaceable slot is provided.
