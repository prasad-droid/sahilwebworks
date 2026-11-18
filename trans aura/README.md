# Trans-Aura International — Website

Premium, modern, responsive single-page website for **Trans-Aura International**, an India-based
import, export, and trading company.

**Tagline:** *The Aura of Global Excellence*

Built with React (functional components), custom CSS only, and Vite.

---

## Project Structure

```text
trans aura/
├── index.html                     # SEO / Open Graph metadata, fonts
├── public/
│   ├── logo.jpeg                  # Supplied brand logo (navbar / footer)
│   ├── logo-icon-192.png          # Logo icon for browser / SEO metadata
│   ├── logo-icon-512.png
│   ├── apple-touch-icon.png
│   ├── favicon.svg                # Logo-based SVG favicon
│   ├── favicon.ico                # 32x32 ICO fallback
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── favicon-128.png
│   ├── og-image.svg
│   ├── og-image.png               # Raster social preview image
│   └── robots.txt
├── src/
│   ├── main.jsx                   # App entry
│   ├── App.jsx                    # Section composition + shared enquiry state
│   ├── config/
│   │   └── form.js                # ★ Enquiry form integration config (edit this)
│   ├── data/
│   │   ├── images.js              # ★ Central image registry (swap assets here)
│   │   └── siteData.js            # Company / contact information
│   ├── hooks/
│   │   └── useScrollReveal.js     # Intersection Observer scroll-reveal
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky nav, active-section highlight, mobile menu
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Industries.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── MarketReach.jsx
│   │   ├── TradeProcess.jsx
│   │   ├── Affirmations.jsx
│   │   ├── Testimonials.jsx       # Sample feedback — replace before launch
│   │   ├── QuoteSection.jsx       # Prominent "Request a Quote" section
│   │   ├── QuoteForm.jsx          # Validated enquiry form
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── SmartImage.jsx         # <img> with branded fallback on load error
│   └── styles/
│       ├── global.css             # Design tokens + base + buttons + layout
│       ├── Navbar.css
│       ├── Hero.css
│       ├── About.css
│       ├── Products.css
│       ├── Industries.css
│       ├── WhyChooseUs.css
│       ├── MarketReach.css
│       ├── TradeProcess.css
│       ├── Affirmations.css
│       ├── Testimonials.css
│       ├── QuoteForm.css
│       ├── QuoteSection.css
│       ├── Contact.css
│       ├── Footer.css
│       └── WhatsAppButton.css
└── dist/                          # Production build output (generated)
```

---

## Running the Website Locally

Requires Node.js 18+ (tested on Node 22).

```bash
# 1. Install dependencies
npm install

# 2. Start the development server (auto-opens http://localhost:5173)
npm run dev

# 3. Production build + local preview
npm run build
npm run preview
```

---

## Connecting the Enquiry Form

The form intentionally **does not pretend to send enquiries** until an endpoint is configured.

### 1. Configure the endpoint

Edit `src/config/form.js`:

```js
export const formConfig = {
  formEndpoint: 'https://your-crm-or-form-service.example.com/api/enquiry', // ← set this
  method: 'POST',
  headers: { 'Content-Type': 'application/json' } // adjust for auth/service requirements
}
```

When `formEndpoint` is set, the form POSTs this JSON payload:

```json
{
  "fullName": "…",
  "companyName": "…",
  "email": "…",
  "phone": "…",
  "country": "…",
  "product": "…",
  "quantity": "…",
  "specifications": "…",
  "destinationPort": "…",
  "additionalRequirements": "…",
  "consent": true,
  "submittedAt": "2026-10-11T…",
  "source": "trans-aura-international-website"
}
```

### 2. What happens before it is configured

- The form still validates every field locally (required fields + email format).
- On a valid submission it displays a clear **“This form is not connected yet”** panel and offers
  direct email and WhatsApp links. No false success message is shown.

### 3. Options for integration

- **Any backend API / CRM webhook** — point `formEndpoint` at it.
- **Form services** (e.g. Formspree, Getform, Basin) — set the service URL in `formEndpoint`.
- **Email via a serverless function** (Netlify Functions / Vercel / Cloudflare Workers) — deploy a
  tiny handler that receives the payload above and emails it to `sandeep.pawar@tagl.co.in`
  (**or a registered business mailbox**), then set `formEndpoint` to that function's URL.

---

## Stock Images & Supplied Google Drive Assets

All stock photography is royalty-free **Pexels** imagery referenced by stable CDN URLs
(`images.pexels.com`). Image IDs were verified to resolve at build time.

Four Google Drive assets were supplied:

1. `https://drive.google.com/open?id=1p5Zfp_sgATHIbHmr7LWmlnJED5I10yVe`
2. `https://drive.google.com/open?id=1e4xI8rbmlQQi44QxvLjCkjz3qD4ySO3x`
3. `https://drive.google.com/open?id=1EFXpZY1I-3srXNCI_1jMH1l-B9IibqFX`
4. `https://drive.google.com/open?id=1AcB-i3-3Nk-keDEpriUIeFwSlAjaMpSv`

These links **require Google sign-in and could not be downloaded for verification** during
development, so their contents were not assumed. Once the files are made public or shared, replace
the matching entries in `src/data/images.js` (or drop files into `public/` and point the same
registry at them). `SmartImage` automatically shows a branded gradient placeholder if a remote image
ever fails to load.

---

## Content That Needs Confirmation Before Launch

| Item | Status |
| --- | --- |
| **Testimonials section** | Sample testimonial copy is in place for layout purposes. Replace it with genuine, approved client feedback before launch. |
| **Privacy Policy & Terms pages** | Links exist in the footer and are labelled “(coming soon)” — create `/privacy.html` and `/terms.html`. |
| **Google Drive assets (4 files)** | Not accessible (sign-in required). Contents unverified — swap in once available. |
| **Enquiry form endpoint** | Not configured — see “Connecting the Enquiry Form” above. |
| **Product catalogue details** | Product cards describe **sourcing capabilities** only. Add verified grades/specifications later. |
| **Google Maps link** | Opens a Google Maps search for the supplied address (no inaccurate pin committed). |
| **Domain / canonical URL** | A relative canonical is set in `index.html`. Once the domain is confirmed, replace it with an absolute canonical URL and make the Open Graph/Twitter image URLs absolute. |
| **Logo assets** | `public/logo.jpeg` is used in the navbar and footer. The PNG icon files and `og-image.png` were generated from the supplied logo and social artwork. |
| **Direct email for form submissions** | Update `src/config/form.js` and README if you connect a serverless email handler. |

## Design & Behaviour Notes

- **Palette:** deep navy (`#0b2545`), teal (`#0d9488`), metallic gold (`#c9a227`), white/light grey.
- **Typography:** Plus Jakarta Sans (headings) + Inter (body) via Google Fonts.
- **Animations:** CSS transitions/keyframes + Intersection Observer reveals; staggered card
  entrances; `prefers-reduced-motion` fully respected.
- **Customisations:** colors, spacing and type live as design tokens in `src/styles/global.css`.
- **Exports/claims:** no export volumes, country coverage, certifications, client counts or years of
  experience are claimed anywhere on the site.
```