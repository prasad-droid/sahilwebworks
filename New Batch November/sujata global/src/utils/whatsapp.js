import { company } from '../data/siteData'

/** Build a wa.me link with an optional custom pre-filled message. */
export function whatsappUrl(message = company.whatsappMessage) {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const defaultWhatsappUrl = whatsappUrl()
