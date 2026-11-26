# Tru Source Global — Website

Premium single-page React website for Tru Source Global, built with Vite, React functional components, and pure custom CSS. No UI/CSS frameworks are used.

## Brand palette

Colours were extracted directly from `logo.png`:

| Token | Hex | Use |
| --- | --- | --- |
| Deep Navy | `#01284D` | Primary text, dark sections, header |
| Leaf Green | `#588321` | Primary CTA, accents, highlights |
| Cool Gray | `#C6CBCE` | Borders and muted details |
| White | `#FEFEFE` | Backgrounds |

## Getting started

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Editing content

All editable content lives in `src/data/siteData.js`:

- `company` — name, email, phone, WhatsApp number and pre-filled message.
- `productCategories` — categories, product names, descriptions and image paths.
- `whyChooseUs`, `processSteps`, `packagingServices` — section content.
- `testimonials` — placeholder; set `active: true` and add verified feedback to display.

Product grades, certifications, specifications, test results and guaranteed quantities are deliberately not included. Add them only when verified information is supplied.

## Images

Local, optimized images are in `public/images/`. Each section and product uses a distinct photograph. The logo and favicon use `public/logo.png`.

## Contact form

The inquiry form validates all fields client-side. Because no email/backend credentials are configured yet, a valid submission opens the visitor's email client with the complete inquiry pre-filled (and shows a WhatsApp alternative). No request is silently "sent".

To connect a real backend, replace the `window.location.href = mailto:...` block in `src/components/Contact.jsx` with a `fetch()` POST to your endpoint, and add spam protection (e.g. hCaptcha/reCAPTCHA or a server-side rate limit).

## SEO

Title, meta description, Open Graph/Twitter tags, favicon and Organization structured data are in `index.html`. Add a canonical link there once the final domain is confirmed.
