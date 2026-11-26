# Syndicate Global EXIM — Single-Page Export Website

Premium, fully responsive React single-page website for Syndicate Global EXIM. Built with React + Vite, functional components, React hooks, Lucide icons, and **custom CSS only** (no Bootstrap, Tailwind, Material UI, or templates).

## Brand palette

Colours were extracted from the supplied `SiteLogo.png`:

- Deep teal `#003334` — primary
- Gold `#E1C572` — accent
- Warm cream `#F8F7F2` — page background

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

## Inquiry form

The form validates all required B2B fields and includes a honeypot plus a minimum-fill-time check for spam protection readiness.

- **Without a backend configured:** submitting opens a pre-filled, ready-to-send email draft to `rahul@syndicateglobalexim.com`. The page clearly states that nothing has been submitted automatically — there is no fake success message.
- **With a backend configured:** copy `.env.example` to `.env`, set `VITE_INQUIRY_ENDPOINT` to an endpoint that accepts `POST` JSON, and the form will submit to it and show a real success/error response.

Payload sent to the endpoint:

```json
{
  "fullName": "...",
  "company": "...",
  "email": "...",
  "country": "...",
  "phone": "...",
  "product": "...",
  "quantity": "...",
  "requirements": "...",
  "submittedAt": "...",
  "startedAt": "..."
}
```

The independent WhatsApp button uses `https://wa.me/917517331951` with a pre-filled professional message. The contact form can also build that message from the entered values.

## Certificates

No certificate files or registration numbers were supplied, so no certification is claimed. `src/components/Compliance.jsx` renders each category with a **“Document pending verification”** status. To publish a real document once supplied and verified, place the file in `public/certificates/` and set the `file` field for that entry to its path.

## Images

All photography was optimised to WebP in `public/images/`. The client-supplied logo and woven-tape photograph were converted from the original PNGs; the remaining images are licensed Pexels stock photos relevant to Indian agriculture, produce, export logistics and weaving.

## SEO

Descriptive title, meta description, Open Graph/Twitter tags, favicon, semantic landmarks, one `h1`, a clear `h2`/`h3` hierarchy, descriptive alt text and `prefers-reduced-motion` support are in place. Add a `<link rel="canonical">` in `index.html` once the final production domain is confirmed.
