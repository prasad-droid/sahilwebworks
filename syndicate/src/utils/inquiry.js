/** Pre-fills the inquiry form and takes the visitor to the contact section. */
export function requestProductDetails(productName) {
  const detail = { product: productName };
  window.dispatchEvent(new CustomEvent('inquiry:prefill', { detail }));
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(() => {
    document.getElementById('fullName')?.focus({ preventScroll: true });
  }, 700);
}
