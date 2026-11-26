# Sampurnm Global — T-Shirt Supply & Export Website

A premium, modern, fully responsive single-page React website for **Sampurnm Global**
(T-Shirt supply • Wholesale • Export). Built with React + Vite and **plain custom CSS**
(no CSS frameworks).

> Tagline: **Complete Solution. Global VISION.**

---

## Quick start

```bash
npm install
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

Requires Node.js 18+.

---

## Project structure

```
src/
├─ components/
│  ├─ Navbar.jsx            ├─ ProductPortfolio.jsx   ├─ EnquiryForm.jsx
│  ├─ Hero.jsx              ├─ WhyChooseUs.jsx        ├─ ContactUs.jsx
│  ├─ AboutUs.jsx           ├─ ExportSolutions.jsx    ├─ Footer.jsx
│  ├─ ProductCategories.jsx ├─ Gallery.jsx            ├─ WhatsAppButton.jsx
│  ├─ Testimonials.jsx      ├─ GlobalVision.jsx       └─ Icons.jsx
├─ styles/                  # one CSS file per component + global.css
├─ data/
│  ├─ products.js           # categories, products, gallery images (edit here)
│  ├─ testimonials.js       # genuine testimonials only (empty by default)
│  └─ siteConfig.js         # brand, contact, nav, enquiry types
├─ hooks/useReveal.js       # scroll reveals + body-scroll lock
├─ App.jsx
└─ main.jsx
```

---

## How to update content (no component changes needed)

| What to change | Where |
| --- | --- |
| **Add / edit products** | `src/data/products.js` → `products` array |
| **Add / edit categories** | `src/data/products.js` → `productCategories` |
| **Gallery images** | `src/data/products.js` → `galleryImages` |
| **Real testimonials** | `src/data/testimonials.js` (add objects; placeholders auto-replace) |
| **Phone, WhatsApp, address, email, website** | `src/data/siteConfig.js` |
| **Navigation items** | `src/data/siteConfig.js` → `navLinks` |
| **Enquiry form options** | `src/data/siteConfig.js` → `enquiryTypes` |

### Adding a product

Append an object to the `products` array. Leave unconfirmed fields as `null` and the
UI shows **"Ask for details"** instead of inventing values.

```js
{
  id: "sg-009",
  name: "Heavyweight Cotton Tee",
  category: "Unisex T-Shirts",
  image: "https://.../your-image.jpg",
  colors: "White, Black, Navy",   // or null
  fabric: null,                   // or a confirmed value
  sizeRange: null,
  style: "Regular fit",
  customization: null,
  moq: null,
  isPlaceholder: false,
}
```

---

## Enquiry form integration

The form is ready for a real backend. Set an endpoint via an env file:

```bash
# .env
VITE_ENQUIRY_ENDPOINT=https://your-form-service.example.com/submit
```

The form will `POST` JSON to that URL and show loading / success / error states.

**Until an endpoint is configured**, submitting the form opens a pre-filled WhatsApp
message (so enquiries are never lost) and clearly states that it was handed off to
WhatsApp rather than claiming a server submission.

---

## Contact details — IMPORTANT

- Live now: **Phone** `tel:+919272443357` and **WhatsApp** `https://wa.me/919272443357`.
- **Email:** the supplied value `Info.smapurnmglobal.com` is **not a valid email**
  (no `@`). It is shown as *"To be confirmed"* and intentionally **not linked**.
  Add a verified address to `siteConfig.contact.email` to enable the `mailto:` link.
- **Website:** add a real URL to `siteConfig.contact.website` to enable the link.

---

## Content & asset placeholders

This build uses **licensed stock photography** (Unsplash) as stand-ins. Images in the
product gallery are labelled *"Sample image"* and the gallery is labelled as sample
stock — they are **not** presented as actual Sampurnm Global inventory.

The following are editable placeholders to be replaced from the official company PDF:

- Company introduction / background / vision / mission (`AboutUs.jsx`).
- Wholesale, retail, export & custom service descriptions (`ExportSolutions.jsx`).
- Product categories, products and specifications (`data/products.js`).
- Export markets, countries served, shipping arrangements (`GlobalVision.jsx`).

**Google Drive assets** supplied in the brief could not be verified during development;
replace the relevant image URLs with confirmed logo / product photography once available.

---

## Accessibility & performance

- Semantic landmarks, H1→H3 hierarchy, descriptive alt text.
- Keyboard-accessible menus, lightbox and modal (`Esc`, arrow keys, focus states).
- `prefers-reduced-motion` respected.
- Lazy-loaded below-the-fold imagery, responsive layout, no heavy dependencies.
- SEO meta, Open Graph and Twitter card tags in `index.html`.
