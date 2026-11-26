import { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import '../styles/sections.css';

const reviews = [
  {
    name: 'James Whitfield',
    role: 'Procurement Manager, Hospitality Supplies',
    location: 'United Kingdom',
    rating: 5,
    text: 'The team understood our towel specifications straight away and shared samples in the GSM we needed. Communication was clear from the first enquiry through to delivery.'
  },
  {
    name: 'Amelia Chen',
    role: 'Wholesale Buyer, Home Textiles',
    location: 'Singapore',
    rating: 5,
    text: 'We ordered custom sizes with private labelling and the finish was exactly as discussed. Packaging arrived neatly and the whole process felt well organised.'
  },
  {
    name: 'Daniel Okafor',
    role: 'Import Director',
    location: 'Nigeria',
    rating: 4,
    text: 'A reliable partner for terry towels. Quotations were transparent, and the team kept us updated on documentation and shipment coordination throughout.'
  },
  {
    name: 'Sophie Martin',
    role: 'Owner, Boutique Hotel Group',
    location: 'France',
    rating: 5,
    text: 'Our guests notice the quality of the bath towels and bath mats. The cotton feels premium and the towels have held up well after repeated laundering.'
  },
  {
    name: 'Michael Brennan',
    role: 'Purchasing Head, Hotel Group',
    location: 'Australia',
    rating: 5,
    text: 'Consistent quality across repeat orders and a helpful approach to customisation. They were patient with our specification changes and delivered what was agreed.'
  },
  {
    name: 'Priya Raman',
    role: 'Distributor, Home & Living',
    location: 'Canada',
    rating: 4,
    text: 'Good range of face, hand and bath towels with flexible GSM options. The samples helped us choose the right weight for our retail customers.'
  },
  {
    name: 'Lucas Weber',
    role: 'Import Manager, Textile Trading',
    location: 'Germany',
    rating: 5,
    text: 'Professional communication and a straightforward sourcing experience. The terry quality and stitching were in line with what we expected from the samples.'
  },
  {
    name: 'Sanne de Vries',
    role: 'Retail Buyer',
    location: 'Netherlands',
    rating: 5,
    text: 'We needed a specific size and GSM for our retail range, and the team handled the customisation without any fuss. Delivery coordination was smooth.'
  },
  {
    name: 'Isabella Rossi',
    role: 'Hospitality Buyer',
    location: 'Italy',
    rating: 4,
    text: 'The kitchen and hand towels were well finished and matched our colour requirements. Clear answers to our questions made the buying decision easy.'
  },
  {
    name: 'David Miller',
    role: 'Wholesaler',
    location: 'United States',
    rating: 5,
    text: 'From the first sample request to the final shipment, everything was handled professionally. We look forward to working together on future orders.'
  }
];

const shuffle = (items) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const Testimonials = () => {
  const [featuredReviews] = useState(() => shuffle(reviews).slice(0, 6));

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Buyers Say</h2>
          <p>Feedback from importers, wholesalers and hospitality buyers across global markets.</p>
        </div>
        <div className="testimonials-grid">
          {featuredReviews.map((review) => (
            <div key={review.name} className="testimonial-card">
              <div className="testimonial-top">
                <div className="testimonial-stars" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill={index < review.rating ? 'currentColor' : 'none'}
                      strokeWidth={index < review.rating ? 0 : 1.5}
                    />
                  ))}
                </div>
                <Quote className="testimonial-quote-icon" size={28} aria-hidden="true" />
              </div>
              <p className="testimonial-text">{review.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="testimonial-name">{review.name}</p>
                  <p className="testimonial-role">
                    {review.role} &middot; {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
