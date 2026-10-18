import { company } from '../data/siteData'
import '../styles/WhatsAppButton.css'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0 0 12.04 2Zm0 1.8c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.73c0 4.47-3.63 8.1-8.1 8.1a8.04 8.04 0 0 1-4.06-1.11l-.29-.17-3.11.81.83-3.03-.19-.31a8.05 8.05 0 0 1-1.24-4.29c0-4.47 3.63-8.1 8.1-8.1Zm-3.11 4.5c-.2 0-.45.07-.69.32s-.92.9-.92 2.2c0 1.3.94 2.55 1.07 2.73.13.18 1.84 2.94 4.56 4.02 2.25.9 2.71.72 3.2.67.49-.05 1.58-.65 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.25-.18-.52-.31s-1.6-.79-1.85-.88c-.25-.09-.43-.13-.61.14-.18.27-.7.88-.86 1.06-.16.17-.32.2-.59.07a7.4 7.4 0 0 1-2.2-1.36 8.26 8.26 0 0 1-1.52-1.9c-.16-.27-.02-.42.12-.56.13-.13.29-.33.43-.5.14-.17.18-.29.27-.48.09-.18.05-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46h-.52Z" />
  </svg>
)

export default function WhatsAppButton() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="wa"
      aria-label={`Chat with Trans-Aura International on WhatsApp (${company.phoneDisplay})`}
    >
      <span className="wa__pulse" aria-hidden="true" />
      <span className="wa__icon">
        <WhatsAppIcon />
      </span>
      <span className="wa__tooltip">Chat with us on WhatsApp</span>
    </a>
  )
}