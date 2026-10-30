import './Footer.css'

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/Logo.jpeg" alt="The NextGen Automate" className="footer-logo-img" />
            <div className="logo-text">
              <span className="logo-title">The NextGen Automate</span>
              <span className="logo-subtitle">automation studio · India</span>
            </div>
          </div>
          <p className="footer-tagline">We automate the work. You keep the relationships.</p>
          <p className="footer-desc">
            A small automation studio in India. n8n, Claude and ChatGPT, wired into the tools you already use.
          </p>
          <p className="footer-mono">Built in days, not months. Starts at ₹5,000.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#workflows">Workflows</a></li>
              <li><a href="#process">Process</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#why">Why Choose Us</a></li>
              <li><a href="#stack">The Stack</a></li>
              <li><a href="#promise">Our Promise</a></li>
              <li><a href="#inquiry">Request a Quote</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="tel:+919156064869">+91 91560 64869</a></li>
              <li><a href="mailto:info@thenextgenautomate.co.in">info@thenextgenautomate.co.in</a></li>
              <li><a href="https://wa.me/919156064869" target="_blank" rel="noopener noreferrer">WhatsApp: +91 91560 64869</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Thenextgenautomate.co.in</p>
          <p>Made in India · Last updated October 2026</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
