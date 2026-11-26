import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star, MessageCircleHeart } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { testimonials } from '../data/siteData'
import '../styles/Testimonials.css'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials.filter((item) => item.active && item.quote)

  const go = (direction) => {
    setIndex((current) => (current + direction + active.length) % active.length)
  }

  return (
    <section className="section testimonials section--warm" id="testimonials">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Testimonials"
          title={<>Building Relationships <span className="highlight-word">Through Trust.</span></>}
        />

        {active.length > 0 ? (
          <div className="testimonials__carousel" data-reveal>
            <button className="testimonials__arrow" type="button" onClick={() => go(-1)} aria-label="Previous testimonial">
              <ChevronLeft size={22} />
            </button>
            <article className="testimonials__card">
              <Quote className="testimonials__quote-icon" size={34} aria-hidden="true" />
              <div className="testimonials__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={17} fill="currentColor" />)}
              </div>
              <blockquote>{active[index].quote}</blockquote>
              <div className="testimonials__author">
                <div className="testimonials__avatar">{active[index].name.charAt(0)}</div>
                <div>
                  <strong>{active[index].name}</strong>
                  <span>{active[index].company} · {active[index].country}</span>
                </div>
              </div>
            </article>
            <button className="testimonials__arrow" type="button" onClick={() => go(1)} aria-label="Next testimonial">
              <ChevronRight size={22} />
            </button>
            <div className="testimonials__dots">
              {active.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  className={`testimonials__dot${i === index ? ' is-active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="testimonials__placeholder" data-reveal>
            <span className="testimonials__placeholder-icon"><MessageCircleHeart size={30} aria-hidden="true" /></span>
            <p>
              Your experience matters to us. We look forward to building successful partnerships
              with our global buyers.
            </p>
            <span className="testimonials__placeholder-note">Customer feedback will be shared here.</span>
          </div>
        )}
      </div>
    </section>
  )
}
