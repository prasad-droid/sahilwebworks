import { Hotel, HeartPulse, Flower2, Dumbbell, Scissors, Building2 } from "lucide-react";
import { IMAGES } from "@/assets/images";

const INDUSTRIES = [
  {
    icon: <Hotel size={26} />,
    title: "Hospitality",
    desc: "Luxury hotels, resorts, and guest accommodations.",
    img: IMAGES.hotel,
  },
  {
    icon: <HeartPulse size={26} />,
    title: "Healthcare",
    desc: "Hospitals, clinics, and healthcare institutions.",
    img: IMAGES.hotel2,
  },
  {
    icon: <Flower2 size={26} />,
    title: "Spa & Wellness",
    desc: "Wellness centers, spas, and relaxation facilities.",
    img: IMAGES.spa,
  },
  {
    icon: <Dumbbell size={26} />,
    title: "Fitness & Sports",
    desc: "Gyms, fitness clubs, and sports facilities.",
    img: IMAGES.spa2,
  },
  {
    icon: <Scissors size={26} />,
    title: "Salon & Personal Care",
    desc: "Beauty salons, grooming centers, and personal care businesses.",
  },
  {
    icon: <Building2 size={26} />,
    title: "Institutional Buyers",
    desc: "Bulk procurement and commercial supply requirements.",
  },
];

const Industries = () => (
  <section id="industries" className="industries">
    <div className="container">
      <div className="section-head">
        <span className="section-tag reveal" data-animation="fade-up">Industries We Serve</span>
        <h2 className="reveal" data-animation="fade-up" data-delay="1">
          Trusted Across <span>Every Sector</span>
        </h2>
        <p className="reveal" data-animation="fade-up" data-delay="2">
          From luxury hospitality to institutional procurement, our towels power businesses that demand quality.
        </p>
      </div>

      <div className="industries__grid">
        {INDUSTRIES.map((item, i) => (
          <div className="industry-card reveal" data-animation="fade-up" data-delay={i % 3} key={item.title}>
            {item.img && <img src={item.img} alt={item.title} className="industry-card__bg" loading="lazy" />}
            <div className="industry-card__icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
