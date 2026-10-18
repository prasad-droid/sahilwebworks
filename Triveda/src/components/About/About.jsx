import { FaBullseye, FaEye } from 'react-icons/fa'
import aboutFallback from '../../assets/images/about-towels.svg'
import Reveal from '../Reveal'
import './About.css'

const ABOUT_IMG =
  'https://images.pexels.com/photos/10060374/pexels-photo-10060374.jpeg?auto=compress&cs=tinysrgb&w=1200'

const About = () => (
  <section id="about" className="section about">
    <div className="container about-grid">
      <Reveal variant="left" className="about-media">
        <div className="about-image-wrap">
          <img
            src={ABOUT_IMG}
            alt="Stack of premium terry towels and hospitality linen"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = aboutFallback
            }}
          />
          <div className="about-badge">
            <strong>100%</strong>
            <span>Premium Cotton</span>
          </div>
          <div className="about-since">
            <FaEye />
            <div>
              <strong>Exporters</strong>
              <span>from Solapur, India</span>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal variant="right" className="about-content">
        <span className="eyebrow plain">About Us</span>
        <h2 className="section-title">
          A Trusted Indian Exporter of <span>Premium Hospitality Textiles</span>
        </h2>
        <p>
          TRIVEDA EXPORTS is an Indian exporter specializing in premium terry towels and hospitality linen for
          international buyers. We work with trusted manufacturing partners to deliver products that meet global
          quality standards while ensuring timely delivery, competitive pricing, and exceptional customer support.
        </p>
        <p>
          Our focus is to build long-term relationships with hotels, hospitals, hospitality groups, distributors,
          wholesalers, and retailers by supplying premium textile products that combine softness, durability, and
          performance.
        </p>

        <div className="about-mission-vision">
          <div className="about-mv-card">
            <span className="about-mv-icon">
              <FaBullseye />
            </span>
            <div>
              <h3>Our Mission</h3>
              <p>Deliver world-class hospitality textiles that enhance comfort and customer satisfaction.</p>
            </div>
          </div>
          <div className="about-mv-card">
            <span className="about-mv-icon">
              <FaEye />
            </span>
            <div>
              <h3>Our Vision</h3>
              <p>Become a globally trusted Indian export brand for premium hospitality linen.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

export default About
