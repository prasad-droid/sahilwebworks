# Shakti Global Exim — Website

A single-page B2B export website for **Shakti Global Exim**, built around frozen French fries as the flagship product.

**Tagline:** Global Reach. Trusted Quality.

## Tech stack

- React 19 + Vite 6
- Plain CSS with component-level stylesheets
- `lucide-react` icons
- No CSS framework

## Getting started

```bash
npm install
npm run dev
```

The development server prints a local URL (typically `http://localhost:5173`).

Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Enquiry form

The enquiry form validates all required fields, prevents duplicate submissions while a request is in progress, and reports loading, success, and error states honestly.

### With a form endpoint

Copy `.env.example` to `.env` (or `.env.local`) and set:

```env
VITE_FORM_ENDPOINT=https://your-form-endpoint.example.com/submit
```

The form sends a `POST` request with a JSON body containing every field plus `subject`, `submittedAt`, and `source`. The endpoint must:

- accept `Content-Type: application/json`,
- allow requests from the website's origin (CORS), and
- return a `2xx` response on success.

A success message is shown only after a successful `2xx` response. Network failures and non-`2xx` responses show an error with email and WhatsApp fallback options.

> `VITE_` variables are embedded at build time. Rebuild the site after changing the endpoint, and never put a secret API key in a `VITE_` variable.

### Without a form endpoint

If `VITE_FORM_ENDPOINT` is empty, the form does **not** claim that anything was submitted. It prepares the completed enquiry and offers:

- an "Open email" `mailto:` link,
- a prefilled WhatsApp link, and
- a "Copy details" action.

The buyer must send the message from their own email app or WhatsApp.

## Contact details used on the site

- Phone / WhatsApp: `+91 96198 41882`
- Email: `shaktiglobalexim@gmail.com`
- Address: House No. 0863, Karave Village, Near Vitthal Mandir, Sector 36, Seawoods, Nerul, Navi Mumbai, Thane, Maharashtra - 400706, India.

These values live in `src/data/siteData.js`.

## Content and imagery

### Supplied product images

The following files in `public/images/` were supplied by Shakti Global Exim and are used as product imagery:

- `product-packaging.jpg`
- `gallery-fries-1.jpg`
- `gallery-fries-2.jpg`
- `gallery-fries-3.jpg`
- `shakti-logo.jpg`

The Products gallery and logo use these files. Product photos are presented without invented claims about certification, origin, shelf life, or production volume. Final specifications, packaging, and availability are confirmed on enquiry.

### Representative stock images

The remaining photography in `public/images/` is representative stock imagery from [Pexels](https://www.pexels.com/) and is labelled **"Representative image"** where appropriate. It is not presented as a photograph of the company's own facilities, stock, or shipments.

Replace these files with approved brand photography when available. Keep the same file names to avoid code changes, or update the paths in `src/data/siteData.js` and the relevant components.

Files:

- `hero-fries.jpg`
- `about-potatoes.jpg`
- `product-fries.jpg`
- `category-agriculture.jpg`
- `category-processed.jpg`
- `category-frozen.jpg`
- `category-spices.jpg`
- `kitchen.jpg`
- `warehouse.jpg`
- `cargo-ship.jpg`
- `export-port.jpg`
- `video-poster.jpg`

### Decorative world map

`public/images/world-map.svg` is a decorative vector world map used only as a background in the Export Markets section. It is not part of the Pexels stock set and carries no embedded attribution metadata, so its original source and licence could not be verified. Confirm the licence before commercial launch, or replace the file with an approved map; the layout works with any SVG of the same aspect ratio.

### Google Drive assets

The originally shared Google Drive logo, photo, and video were restricted by Google sign-in and could not be verified or downloaded. The site therefore uses the supplied local assets above and a click-to-load Google Drive video link:

`https://drive.google.com/open?id=1rT5wRE3Gy8ncXG320MHfEirNkVfYXyF0`

To make the video publicly embeddable, set the Drive file's sharing permission to "Anyone with the link" and confirm that the preview URL in `src/data/siteData.js` loads in a browser. Until then, the video section explains the access requirement and provides a direct external link.

## Content accuracy

- No certifications, client names, shipment volumes, years in business, shelf life, or guarantees have been invented.
- There are no genuine buyer testimonials. The "Testimonials" section is presented as **Our Commitment to Buyers**.
- Target markets are limited to the supplied focus regions: the Middle East and Southeast Asia.
- Buyer feedback can be added later in `testimonials` inside `src/data/siteData.js` only when authentic and approved for publication.

## Accessibility and motion

- Semantic landmarks, labelled form fields, visible focus styles, and a skip link are included.
- The mobile menu supports Escape and closes on navigation.
- Scroll reveals use `IntersectionObserver` and are disabled when the visitor prefers reduced motion.
- The floating WhatsApp control has an accessible label and is collapsed to an icon on small screens.
- Images below the fold use lazy loading.

## SEO

`index.html` contains the page title, description, Open Graph and Twitter metadata, and Organization JSON-LD.

Before deployment, set the production domain for absolute social-sharing URLs. Most platforms require absolute `og:image` URLs, so update:

```html
<meta property="og:image" content="https://your-domain.com/images/product-fries.jpg" />
<meta name="twitter:image" content="https://your-domain.com/images/product-fries.jpg" />
```

The canonical URL is not set because no production domain was supplied.

## Deployment

1. Set `VITE_FORM_ENDPOINT` in the hosting environment.
2. Run `npm run build`.
3. Deploy the generated `dist/` directory to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a standard web server).
4. Ensure the host serves `index.html` for the root route. The site does not use client-side routes, so no SPA rewrite rules are strictly required.
5. Configure the production domain in the Open Graph/Twitter image URLs and JSON-LD if desired.

## Project structure

```text
public/
  favicon.svg
  images/               # supplied and representative imagery
src/
  components/           # page sections and shared UI
  data/siteData.js      # company facts, products, services, links
  styles/               # global tokens + component stylesheets
  utils/links.js        # WhatsApp, mailto, scroll helpers
  App.jsx
  main.jsx
index.html
.env.example
```
