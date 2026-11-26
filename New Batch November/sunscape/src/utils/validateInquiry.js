const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateInquiry(values) {
  const errors = {}

  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.'
  if (!values.companyName.trim()) errors.companyName = 'Please enter your company name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.country.trim()) errors.country = 'Please enter your country.'

  const phone = values.phone.trim()
  const digitCount = phone.replace(/\D/g, '').length
  if (!phone) {
    errors.phone = 'Please enter your contact number.'
  } else if (!/^[+]?[\d\s()-]+$/.test(phone) || digitCount < 7 || digitCount > 15) {
    errors.phone = 'Please enter a valid phone number with country code.'
  }

  if (!values.inquiryType) errors.inquiryType = 'Please select an inquiry type.'
  if (!values.message.trim()) errors.message = 'Please tell us a little about your requirement.'

  return errors
}
