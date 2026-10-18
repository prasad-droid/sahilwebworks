/**
 * Lightweight pub/sub used to pre-fill the enquiry form from anywhere
 * on the page (product cards, category cards, footer CTAs, etc.).
 */
export const ENQUIRY_EVENT = 'global-enterprises:enquiry'

export function requestEnquiry(product = '') {
  if (typeof window === 'undefined') return
  window.dispatchEvent(
    new CustomEvent(ENQUIRY_EVENT, {
      detail: { product },
    })
  )
}
