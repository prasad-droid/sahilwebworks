export const BUSINESS_NAME = 'Dake and Company'
export const TAGLINE = 'Trade Beyond Boundaries'
export const SLOGAN = 'Packaging That Builds Your Brand.'

export const LOGO_PRIMARY = '/images/logo-temp.jpg'
export const LOGO_SECONDARY = '/images/logo-temp.jpg'

export const PHOTOS = [
  'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80&auto=format&fit=crop',
]

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
