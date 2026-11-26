import { site } from '../data/site'

export function buildWhatsappUrl(message) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`
}

export function openWhatsapp(message) {
  const url = buildWhatsappUrl(message)
  window.open(url, '_blank', 'noopener,noreferrer')
  return url
}
