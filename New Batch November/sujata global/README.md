# Sujata Global Exim — Single Page Website

Premium, responsive React single-page website for an import-export trading business
specializing in flexible cables. Custom CSS only — no CSS frameworks.

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

## Where things live

| Path | Purpose |
| --- | --- |
| `src/data/siteData.js` | All editable content: company details, navigation, products, feature cards, images |
| `src/components/` | One reusable component per section |
| `src/styles/` | One custom CSS file per component, plus shared tokens in `global.css` |
| `src/hooks/` | Scroll reveal and active navigation section hooks |
| `public/images/` | Locally hosted, optimized WebP imagery |
| `index.html` | SEO metadata, Open Graph tags, JSON-LD, fonts |

## Adding the supplied logo

The two Google Drive links in the brief redirect to a Google sign-in page, so the
assets could not be inspected or downloaded. **No imitation logo was created.**
The navbar and footer currently render a plain text wordmark placeholder.

To use the original logo:

1. Save the supplied logo file as `public/logo.png` (or any name inside `public/`).
2. In `src/data/siteData.js`, set `company.logo` to its path, e.g. `'/logo.png'`.

The `Logo` component automatically switches from the text placeholder to the
image, keeping its natural proportions (`object-fit: contain`). Update the same
value to change it everywhere at once. See `ASSETS.md` for details.

## Adding products

Add objects to the `products` array in `src/data/siteData.js`. The Products
section and the inquiry form's "Product Interested In" dropdown are both driven
by that data. Only add specifications once the business has verified them.

## Inquiry form delivery

The form validates all required fields and email format before doing anything.

- Set `company.inquiryEndpoint` in `src/data/siteData.js` to a backend URL that
  accepts JSON (`fullName`, `companyName`, `email`, `country`, `phone`,
  `productInterest`, `quantity`, `requirements`). The form then POSTs to it and
  shows a success message **only after a successful response**.
- With no endpoint configured (current state), submitting opens a prefilled
  email in the visitor's mail client. The on-screen message accurately says the
  email is *ready to send*, not that it was delivered, and offers a WhatsApp
  alternative. See `src/components/Inquiry.jsx`.

## WhatsApp

All WhatsApp links use `https://wa.me/<number>?text=<encoded message>` and share
one number and message from `src/data/siteData.js` via `src/utils/whatsapp.js`.
The floating button, hero, product cards, inquiry section, contact section and
footer all use the same helper.

## Image credits

Photography is from Unsplash, downloaded and converted to WebP for performance.
Files: `public/images/*.webp`. The world network graphic in the International
Trade section is an inline, original SVG — no country flags or destinations are
shown.
