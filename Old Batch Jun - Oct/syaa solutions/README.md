# SYAA SOLUTION — Single-Page Website

Premium, responsive React website for SYAA SOLUTION: packaging materials for domestic
businesses and fresh Indian banana leaf exports. Built with React + JSX, Vite and plain
custom CSS (no CSS frameworks).

## Quick start

```bash
npm install
npm run dev
```

`npm run dev` starts both services:

- Web: http://localhost:5173
- Inquiry API: http://localhost:3001 (Vite proxies `/api` to it)

To build and run the production version from the same Node server:

```bash
npm run build
npm start
```

The server then serves `dist/` and handles `POST /api/inquiries` on port `3001`
(or `PORT`, if set).

## Inquiry form backend

The form is connected to a **real working backend** in `server/index.js`:

- Validates all required fields on the server (do not rely only on browser validation).
- Stores confirmed inquiries in `server/data/inquiries.json` (git-ignored).
- Rate-limits repeated submissions.
- Returns `201` with a confirmation message only after the inquiry is saved. The UI shows
  success feedback **only** after that backend confirmation.
- `GET /api/health` is available for monitoring.

**Important before production deployment:** email/CRM notification is **not configured**.
Inquiries are saved to disk only. Add an email provider or CRM integration in
`server/index.js` (inside `saveInquiry` / the POST handler) with your own credentials, and
secure the stored data. If you deploy the frontend as a static site instead of using the
included Node server, set `VITE_INQUIRY_ENDPOINT` to a hosted inquiry API URL — see
`.env.example`. **Do not deploy without configuring one of these options**; otherwise the
form will clearly report that the inquiry service is unavailable and show the phone, email
and WhatsApp alternatives.

## Images and logo assets

The Google Drive links supplied in the brief (`1ejgu…` for the logo and `1JIMAt…` for the
product photo) both redirect to a Google sign-in page and cannot be downloaded
anonymously. They were inspected before implementation and the documented fallback was used:

- **Logo placeholder:** `public/brand/logo-placeholder.svg` (light backgrounds) and
  `public/brand/logo-placeholder-inverse.svg` (dark backgrounds). Replace these two files
  with the real logo supplied by the business owner; every navbar/footer usage updates
  automatically. `public/brand/favicon.svg` can also be replaced with the official mark.
- The supplied product photo could not be verified from Drive. The five real product photos
  already present in the project root were copied into `public/images/` and used instead:
  - `packaging-overview.jpg` ← `all types of packaing .jpeg` (hero packaging composition)
  - `corrugated-boxes.jpg` ← `cardboard boxes .jpeg` (corrugated product card)
  - `honeycomb-paper.jpg` ← `honeycomb wrap.jpeg` (honeycomb product card)
  - `honeycomb-detail.jpg` ← `honeycomb wrap 2.jpeg` (gallery detail)
  - `banana-leaf-closeup.jpg` ← `banana leaf 1.jpeg` (hero, banana leaf close-up)
- Supplementary product/industry/gallery photography and its source URLs are recorded in
  `public/images/SOURCES.md`. Replace any image by changing the path in `src/data/site.js`.
- Images use `loading="lazy"`, explicit dimensions and `object-fit: cover` so they load fast
  without stretching. A styled fallback appears if an image is missing.

## Editing website content

All editable copy, products, industries, portfolio items, highlights and contact details
are centralised in **`src/data/site.js`**:

- Packaging products and specifications: `packagingProducts`
- Banana leaf export section: `bananaLeaves`
- Industries: `industries`
- Gallery: `portfolio`
- Phone / email / WhatsApp / location: `contact`
- SEO title, meta description and Open Graph tags: `index.html`

Packaging products and fresh banana leaves are deliberately kept in separate sections with
separate imagery. No dimensions, GSM, prices, certifications, destinations or delivery
timelines have been invented. The testimonial section is an honest placeholder — add real
customer feedback to `testimonialPlaceholder` only when provided.

## Component structure

```
src/
  App.jsx
  data/site.js
  hooks/useScrollReveal.js
  components/
    Navbar.jsx       Hero.jsx             About.jsx
    PackagingSolutions.jsx  PackagingProducts.jsx
    BananaLeaves.jsx Industries.jsx       WhyChooseUs.jsx
    Portfolio.jsx    Testimonials.jsx     Contact.jsx
    Footer.jsx       Logo.jsx             ImageWithFallback.jsx
  styles/
    global.css       sections.css
server/
  index.js           # inquiry API + production static hosting
```

## SEO and accessibility notes

- One H1 (`Hero`), semantic `section`/`article`/`nav`/`footer` landmarks, ordered heading levels.
- Descriptive `alt` text, skip link, visible focus states, labelled form fields with inline
  errors and `aria-invalid` / `aria-describedby`, accessible mobile menu and image lightbox.
- SEO title, meta description, keywords, Open Graph / Twitter metadata and Organization
  JSON-LD in `index.html`.
- Smooth scrolling, scroll-triggered reveals and hover effects are disabled automatically
  when the visitor prefers reduced motion.
