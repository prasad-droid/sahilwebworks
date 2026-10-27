import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Contact</span>
          <h2>Let&apos;s Build Your Automation Roadmap</h2>
          <p className="section-subtitle">
            Reach out to discuss your requirements. We&apos;re ready to help you turn repetitive work into automated workflows.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.66666 6.41667C3.66666 5.40417 4.4875 4.58334 5.49999 4.58334H16.5C17.5125 4.58334 18.3333 5.40417 18.3333 6.41667V15.5833C18.3333 16.5958 17.5125 17.4167 16.5 17.4167H5.49999C4.4875 17.4167 3.66666 16.5958 3.66666 15.5833V6.41667Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.66666 6.41667L11 11.9167L18.3333 6.41667" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:info@thenextgenautomate.co.in">info@thenextgenautomate.co.in</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.58333 4.58334H8.25L10.0833 8.25L7.79167 9.625C8.85118 11.7697 10.5636 13.4822 12.7083 14.5417L14.0833 12.25L17.75 14.0833V17.75C17.75 18.2552 17.5497 18.7396 17.1927 19.0966C16.8357 19.4536 16.3514 19.6539 15.8463 19.6539C12.0005 19.464 8.38451 17.904 5.65363 15.1732C2.92275 12.4423 1.36282 8.82632 1.173 4.98054C1.17299 4.47547 1.37331 3.99112 1.73031 3.63412C2.08731 3.27712 2.57166 3.0768 3.07673 3.0768H4.58333V4.58334Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h3>Phone</h3>
              <a href="tel:+919156064869">+91 91560 64869</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2.75C8.10051 2.75 5.75 5.10051 5.75 8C5.75 11.6875 11 18.3333 11 18.3333C11 18.3333 16.25 11.6875 16.25 8C16.25 5.10051 13.8995 2.75 11 2.75Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="11" cy="8" r="1.83333" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </div>
            <div>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/919156064869" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
