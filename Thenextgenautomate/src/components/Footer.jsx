import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-mark">NG</div>
            <div className="logo-text">
              <span className="logo-title">Thenextgenautomate</span>
              <span className="logo-subtitle">.co.in</span>
            </div>
          </div>
          <p className="footer-tagline">The Future Runs on Automation.</p>
          <p>
            NextGen Automate helps businesses replace repetitive, manual work with AI-powered automation — streamlining operations, cutting costs, and freeing up teams to focus on growth.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#why">Why Choose Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#testimonials">Testimonials</a></li>
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
          <p>© {year} Thenextgenautomate.co.in. All rights reserved.</p>
          <p>Designed &amp; Developed by NextGen Automate</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
