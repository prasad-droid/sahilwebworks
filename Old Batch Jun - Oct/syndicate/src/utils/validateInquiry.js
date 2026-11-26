const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{7,25}$/;

const REQUIRED = {
  fullName: 'Please enter your full name.',
  companyName: 'Please enter your company name.',
  email: 'Please enter your business email address.',
  country: 'Please enter your country.',
  productCategory: 'Please select a product category.',
  product: 'Please select a product.',
  quantity: 'Please enter the required quantity.',
  destination: 'Please enter the destination port or country.',
};

/** Client-side validation mirrored by server.js so both paths agree. */
export function validateInquiry(values) {
  const errors = {};
  Object.entries(REQUIRED).forEach(([field, message]) => {
    if (!String(values[field] || '').trim()) errors[field] = message;
  });

  if (values.email && !EMAIL_RE.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (values.phone && !PHONE_RE.test(values.phone.trim())) {
    errors.phone = 'Enter a valid contact number.';
  }
  if (values.fullName && values.fullName.trim().length < 2) {
    errors.fullName = 'Enter at least 2 characters.';
  }
  return errors;
}
