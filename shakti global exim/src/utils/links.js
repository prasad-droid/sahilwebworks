import { company, whatsappMessages } from '../data/siteData'

export function getWhatsAppUrl(message = whatsappMessages.general) {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function getMailtoUrl(subject, body) {
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function scrollToId(id) {
  const section = document.getElementById(id)
  if (!section) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  section.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'start',
  })
}

export function requestProduct(product = 'Frozen French Fries') {
  window.dispatchEvent(
    new CustomEvent('sge:select-product', { detail: { product } }),
  )
  scrollToId('quote')
}
