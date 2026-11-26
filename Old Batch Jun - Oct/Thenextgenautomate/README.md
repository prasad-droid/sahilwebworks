# Vancorix International — Website

A responsive React single-page site for Vancorix International, built with Vite, JSX and custom CSS only.

## Run locally

```bash
npm install
npm run dev
```

Production build and lint:

```bash
npm run build
npm run lint
```

## Storefront behaviour

- **All SKUs are available** for B2B, bulk and custom enquiries. No product is marked Coming Soon.
- **Moringa Powder** is the only SKU with a direct retail COD checkout. It is listed as `80 mesh`, `shade-dried`, in a `200 g pouch`, with the price shown as **Price on request**.
- Every other SKU shows a **B2B / bulk / custom** panel with “B2B, bulk and custom MOQ options are negotiable.” and a **Request Quote** button that opens WhatsApp with a prefilled enquiry. No fixed 500 kg minimum is shown.
- B2B, bulk and custom MOQ terms for Moringa are kept separate from the retail pouch and are also negotiable.
- **Buy with COD** adds a Moringa pouch to a cart drawer. **Cash on Delivery** is the active (and only) payment option.
- The cart supports quantity changes up to 20 pouches and requires name, phone and delivery location.
- Because there is no order backend, checkout does **not** claim an order was placed. Submitting opens WhatsApp with a prefilled COD order request; the customer sends the message, and the price, shipping charge and delivery availability are confirmed in that chat.
- Every **Request Quote** / **Request a Quote** / **Send on WhatsApp** action opens `https://wa.me/919225354180` with a prefilled message. The detailed quote form also hands off to WhatsApp with the entered details.
- Product and quote messages are built in `src/data/site.js` so the WhatsApp wording stays in one place.

## Contact links

- Email: `trade.vancorix@gmail.com` (footer `mailto:` link)
- Instagram: `@vancorix.global` → `https://www.instagram.com/vancorix.global/` (Font Awesome brand icon)
- WhatsApp: `+91 9225354180`

## Project structure

- `src/App.jsx` — page composition, cart state and checkout wiring
- `src/data/site.js` — products, status flags, WhatsApp helper and message templates
- `src/components/Products.jsx` — product cards, availability badges and buy actions
- `src/components/CheckoutDrawer.jsx` — accessible COD cart drawer with validation and WhatsApp handoff
- `src/components/SiteHeader.jsx`, `Hero.jsx`, `Markets.jsx`, `Quote.jsx`, `SiteFooter.jsx` — direct WhatsApp CTAs
- `src/index.css` — all styling, including product and checkout states

## Assets and content notes

- Product photography and the Vancorix logo are local files in `src/assets/images/`. The logo is also copied to `public/vancorix-logo.png` and used as the favicon and apple-touch icon.
- The logo was sourced from the public reference site at `https://global-gourmet-growers.lovable.app/`; Google Drive asset links supplied earlier required sign-in and could not be used.
- The footer credit links to `https://www.sahilwebworks.com/`.
- Some longer-form marketing copy and success claims in the Quality, Markets and Process sections came from the earlier reference site. Review those statements before publishing if they have not been verified by the business.
