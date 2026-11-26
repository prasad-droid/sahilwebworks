/**
 * Decoupled enquiry trigger.
 *
 * Any component can call `requestEnquiry()` to focus the contact form with
 * pre-filled fields. The form listens for the `rasavaani:enquiry` event.
 */
export function requestEnquiry(detail = {}) {
  window.dispatchEvent(
    new CustomEvent('rasavaani:enquiry', { detail }),
  )
  const target = document.getElementById('contact')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default requestEnquiry
