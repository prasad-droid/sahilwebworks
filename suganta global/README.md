# SUGANTA GLOBAL

A responsive single-page marketing site for **SUGANTA GLOBAL**, an emerging agricultural export business from India focused on rice, tea and flowers for the UAE and Iraq.

Built with React, Vite and custom CSS. No UI framework is used.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, normally <http://localhost:5173>.

### Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Project structure

```text
public/
  images/                 Local images, logo mark and Open Graph cover
  manifest.json           Web app manifest
src/
  components/             Page sections and shared UI
  data/                   Editable content and contact settings
  hooks/                  Active-section navigation hook
  styles/                 Component and global CSS
  App.jsx                 Page composition
  main.jsx                React entry point
index.html                SEO and social metadata
```

## Contact details

Contact information is centralised in `src/data/siteConfig.js`:

- Phone: `7028175779`
- Email: `sugantaglobal@gmail.com`
- WhatsApp: `7028175779`
- Target markets: United Arab Emirates and Iraq

The site generates `tel:`, `mailto:` and `https://wa.me/` links from this file.

### Confirm the WhatsApp country code before launch

The supplied WhatsApp number does not include a country code. The current default assumes **India (+91)**, producing `917028175779`.

Confirm this with the business owner, then update either:

1. `VITE_WHATSAPP_NUMBER` in a local `.env` file, or
2. the `whatsapp.number` fallback in `src/data/siteConfig.js`.

Use digits only, including the country code. Copy `.env.example` to `.env` and set:

```env
VITE_WHATSAPP_NUMBER=917028175779
```

## Inquiry form behaviour

The form validates:

- Full Name
- Email address
- Country
- Product
- Message

Company, phone and quantity are optional. Phone numbers are validated when supplied.

The form does **not** pretend to submit successfully. Behaviour depends on configuration:

### Without a form endpoint (default)

After successful validation, the form displays prefilled **Email** and **WhatsApp** links. A clear message explains that nothing has been submitted yet.

### With a form endpoint

Set `VITE_FORM_ENDPOINT` in `.env` to a service or serverless function that accepts JSON `POST` requests, such as Formspree, Basin, or your own API:

```env
VITE_FORM_ENDPOINT=https://example.com/api/inquiry
```

The form sends this JSON shape:

```json
{
  "fullName": "Example Buyer",
  "company": "Example Trading LLC",
  "email": "buyer@example.com",
  "phone": "+971 50 123 4567",
  "country": "United Arab Emirates",
  "product": "Rice",
  "quantity": "5000 kg",
  "message": "We would like to discuss a rice sourcing requirement."
}
```

A success message is shown only after a successful `2xx` response. If the request fails, the visitor is offered the Email and WhatsApp fallback links.

## Editable content

| Content | File |
| --- | --- |
| Brand, contact details, WhatsApp, asset paths | `src/data/siteConfig.js` |
| Products | `src/data/products.js` |
| Target markets | `src/data/markets.js` |
| Why Choose Us features | `src/data/features.js` |
| Portfolio images and captions | `src/data/portfolio.js` |
| Customer testimonials | `src/data/testimonials.js` |

### Products and product enquiry buttons

Product cards use each product's `image` path and `enquiryLabel`. Clicking an enquiry button scrolls to the contact form and preselects the matching product.

### Portfolio

Portfolio filters are generated from each item's `category`. Add or replace items in `src/data/portfolio.js`; the grid, filters and lightbox update automatically.

Avoid reusing the same image for multiple portfolio entries.

### Testimonials

The testimonials array is intentionally empty. The site shows:

> Our customer experiences will be featured here soon.

Add only genuine, approved customer feedback to `src/data/testimonials.js`. Do not add invented reviews.

## Images and placeholders

The Google Drive logo and business image could not be accessed without a Google sign-in, so the current files are **replaceable placeholders**:

| Placeholder | Path | Replace with |
| --- | --- | --- |
| Logo mark | `public/images/logo-mark.svg` | Approved SUGANTA GLOBAL logo |
| About/business image | `public/images/about-farmer.webp` | Approved business or product photograph |

Asset paths are defined in `src/data/siteConfig.js`.

If you change a filename, update the path in `siteConfig.assets` and any matching data file.

### Other placeholder photography

The hero, product, market and portfolio photographs are representative Pexels stock images used as placeholders. They are not claims of SUGANTA GLOBAL facilities, farms, shipments, customers or achievements.

Replace them with approved business photography before launch. Keep the existing aspect ratios for the cleanest result:

- Hero: wide landscape, ideally at least 2000px wide
- Product cards: 4:3
- Market cards: 16:9
- Portfolio: 4:3
- About image: portrait, approximately 4:4.7
- Open Graph image: 1200×630

Recommended formats are WebP for photographs and SVG for the logo.

## SEO

`index.html` contains:

- Title: `SUGANTA GLOBAL | Agricultural Products Exporter from India`
- Meta description
- Open Graph title, description and image
- `robots` metadata
- Theme colour, favicon and manifest

Before launch, once the final domain is confirmed:

1. Add a canonical URL.
2. Add an absolute `og:url`.
3. Replace the relative `og:image` with an absolute URL if required by the social platform.

The page has one `<h1>`, semantic section headings, descriptive image alt text and a skip link.

## Deployment

This is a static Vite site.

### Netlify / Vercel / Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Add environment variables in the host's dashboard if needed:
  - `VITE_WHATSAPP_NUMBER`
  - `VITE_FORM_ENDPOINT`

### Any static host

Upload the contents of `dist/` after running `npm run build`.

## Accessibility and motion

- Keyboard-accessible mobile navigation with Escape-to-close.
- Portfolio lightbox closes with Escape or a backdrop click and returns focus to the trigger.
- Form errors use `aria-invalid`, `aria-describedby` and focus the first invalid field.
- Reduced-motion preferences disable reveal and hover animation.
- Focus-visible styles are retained throughout.

## Development console notes

If the browser shows stale errors such as:

```text
@vite-plugin-pwa/pwa-entry-point-loaded 404
Manifest: Line: 1, column: 1, Syntax error
```

these are normally caused by a service worker left behind by a different project on the same `localhost` origin. This site does not register a service worker in development.

The project includes:

- A valid `public/manifest.json`
- A development-only cleanup that unregisters stale service workers in `src/main.jsx`

If the messages persist, open DevTools → Application → Service Workers, unregister the old worker, clear site data for `localhost`, and hard reload. A clean browser profile will not show these errors.

## Content guardrails

The site intentionally avoids:

- Invented founding years or company history
- Invented certifications, awards or export statistics
- Claims of offices, distributors or established buyers in the UAE or Iraq
- Guaranteed delivery times or global-network claims
- Fabricated customer testimonials

Keep the UAE and Iraq sections framed as **target markets** unless the business has confirmed details that justify stronger claims.
