export const BUSINESS_NAME = 'Dake and Company'
export const TAGLINE = 'Trade Beyond Boundaries'
export const SLOGAN = 'Packaging That Builds Your Brand.'

export const LOGO_PRIMARY = '/images/logo-brand.jpg'
export const LOGO_SECONDARY = '/images/logo-brand.jpg'

// All photos live in public/images/gallery. The originals were provided as
// WhatsApp exports; optimized copies are used here with web-friendly names.
export const GALLERY = Array.from({ length: 15 }, (_, index) => ({
  src: `/images/gallery/packaging-${String(index + 1).padStart(2, '0')}.jpg`,
  alt: `Packaging supplied by Dake and Company – photo ${index + 1}`,
}))

export const PHOTOS = GALLERY.map((photo) => photo.src)

export const CONTACT = {
  phone: '+91 9075519135',
  whatsapp: '+91 9075519135',
  email: 'dakeandco53@gmail.com',
  address: 'Ganga Nagar, Ichalkaranji, Kolhapur, Maharashtra, 416115.',
  mapUrl: 'https://maps.app.goo.gl/G9wap2HRAgufuQxh9?g_st=aw',
  nameAsPerPMP: 'Shlok Krishna Dake',
  phoneAsPerPMP: '8552085380',
}

export function getWhatsappLink(message = '') {
  const text = message ? encodeURIComponent(message) : encodeURIComponent('Hello Dake and Company, I would like to enquire about your packaging products.')
  return `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${text}`
}
