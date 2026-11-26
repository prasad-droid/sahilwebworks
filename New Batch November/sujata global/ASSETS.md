# Asset replacement notes

## Supplied Google Drive assets

- Logo: https://drive.google.com/open?id=1KNmVRQln3OPYSCn57T0UXZCwxZ1n9mU2
- Additional business images: https://drive.google.com/open?id=1K7QVPjQSxyOAh6lkWiKFH2397DXfg_1w

Both links redirect to `accounts.google.com` sign-in when opened without the
owner's Google account, so their contents could not be inspected. Per the brief,
no fake company logo was made.

### Replace the logo

1. Download the original logo from Drive.
2. Put it in `public/`, e.g. `public/logo.png`.
3. Open `src/data/siteData.js` and change `logo: ''` to `logo: '/logo.png'`.

`src/components/Logo.jsx` renders the real image whenever `company.logo` is set.
It uses `object-fit: contain` and no fixed aspect ratio, so the original
proportions and appearance are preserved. It also updates the navbar, footer
and favicon area consistently. The current wordmark is intentionally plain text
so it cannot be mistaken for a designed logo.

`public/favicon.svg` is a generic decorative mark, not a company logo. Replace
it with a logo-derived favicon if one is supplied.

### Replace section photography

Image paths are centralized in `src/data/siteData.js` under `images` and
`products`. Swap any path to use an image from the Drive folder, e.g.:

```js
export const images = {
  hero: '/images/my-supplied-cable-photo.webp',
  // ...
}
```

Keep images in `public/images/`. WebP is recommended; each section uses a
different image so nothing is repeated. Descriptive `alt` text lives alongside
the product data and in the relevant components.

## Current stock images

| File | Subject (Unsplash) | Used in |
| --- | --- | --- |
| `hero-cables.webp` | Assorted electric cables | Hero background, social preview |
| `cable-spools.webp` | Large spools of black cable | Hero visual card |
| `cable-reel.webp` | Industrial reel with coiled cable | About |
| `flexible-cables.webp` | Stack of black wires / cables | Products |
| `cargo-ships.webp` | Cargo ships at a port | International trade |
| `container-terminal.webp` | Container terminal | Inquiry sidebar |
