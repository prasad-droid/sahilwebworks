import { FaEnvelope } from "react-icons/fa";
import Reveal from "./Reveal";
import officeBag3 from "../assets/images/office-bag-03.jpg";
import officeBag6 from "../assets/images/office-bag-06.jpg";
import wallet3 from "../assets/images/wallet-03.jpg";
import wallet6 from "../assets/images/wallet-06.jpg";
import beltImage from "../assets/images/belt.jpeg";
import cardHolder from "../assets/images/card holder.jpeg";
import laptopBag from "../assets/images/laptop bag.jpg";
import laptopBag2 from "../assets/images/laptop bag 2.jpeg";
import backpack from "../assets/images/leather backpack.jpeg";
import walletBrown from "../assets/images/leather wallet brown.jpeg";
import travelBag from "../assets/images/travel bag.jpeg";
import womenHandBag from "../assets/images/women hand bag.jpeg";
import womenHandBag2 from "../assets/images/women hand bag 2.jpeg";
import womenHandBag3 from "../assets/images/women hand bag 3.jpeg";
import womenHandBag4 from "../assets/images/women hand bag 4.jpeg";

const PRODUCTS = [
  { name: "Leather Handbags", desc: "Elegant everyday handbags in premium full-grain leather, built to international quality standards.", img: womenHandBag2 },
  { name: "Tote Bags", desc: "Spacious, stylish totes perfect for work, travel and daily essentials.", img: womenHandBag3 },
  { name: "Sling Bags", desc: "Compact and functional slings with clean lines and durable stitching.", img: officeBag3 },
  { name: "Crossbody Bags", desc: "Hands-free crossbody designs blending modern style with comfort.", img: womenHandBag },
  { name: "Shoulder Bags", desc: "Refined shoulder bags for a polished, professional look.", img: womenHandBag4 },
  { name: "Backpacks", desc: "Durable leather backpacks combining practicality with premium appeal.", img: backpack },
  { name: "Laptop Bags", desc: "Protective laptop carriers with padded compartments and executive styling.", img: laptopBag },
  { name: "Messenger Bags", desc: "Classic messenger silhouettes with organized, secure interiors.", img: officeBag6 },
  { name: "Briefcases", desc: "Corporate-grade briefcases crafted for the modern professional.", img: laptopBag2 },
  { name: "Travel Bags", desc: "Sturdy travel companions engineered for frequent international journeys.", img: travelBag },
  { name: "Wallets", desc: "Slim, hand-stitched wallets with premium leather and fine finishing.", img: walletBrown },
  { name: "Card Holders", desc: "Compact card and money holders ideal for retail and gifting.", img: cardHolder },
  { name: "Passport Holders", desc: "Travel-ready passport covers for global buyers and brands.", img: wallet6 },
  { name: "Leather Belts", desc: "Timeless leather belts with quality buckles and clean edges.", img: beltImage },
  { name: "Leather Pouches", desc: "Versatile pouches for gadgets, grooming and everyday carry.", img: wallet3 },
];

const Products = () => (
  <section id="products" className="section products">
    <div className="container">
      <Reveal className="section-head section-head--center">
        <span className="section-tag">Our Products</span>
        <h2 className="section-title">
          Premium <span className="accent">Product Range</span>
        </h2>
        <p className="section-sub">
          Explore our complete collection of leather bags and accessories — available for bulk
          orders, OEM manufacturing and private label branding.
        </p>
      </Reveal>

      <div className="products-grid">
        {PRODUCTS.map((p) => (
          <Reveal key={p.name} type="fade-up">
            <article className="product-card">
              <div className="product-media">
                <span className="product-cat">Leather</span>
                <img
                  src={p.img}
                  alt={`${p.name} - premium leather product from Ovaa Enterprises`}
                  loading="lazy"
                />
                <a href="#contact" className="product-enquiry">
                  <FaEnvelope /> Enquiry
                </a>
              </div>
              <div className="product-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal type="fade-up">
        <p className="products-note">
          Looking for something specific? <a href="#contact">Request a full catalogue</a> and get
          sample-based pricing for your market.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Products;
