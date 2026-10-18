import { FiCheck } from "react-icons/fi";
import { productCategories } from "../../data/data";
import carpetImg from "../../assets/images/carpets/Carpets Images3.jpg";
import towelImg from "../../assets/images/towels/Terry Towel Images2.jpg";
import craftImg from "../../assets/images/handicrafts/Wood Handicraft Images3.jpg";

const products = [
  {
    id: 1,
    image: carpetImg,
    alt: "Hand knotted handmade carpet with elegant traditional design",
    title: "Handmade Carpets",
    desc: "Exquisite carpets and rugs crafted by skilled Indian artisans using time-honoured techniques.",
    items: [
      "Hand Knotted Carpets",
      "Hand Tufted Carpets",
      "Flat Weave Carpets",
      "Designer Rugs",
      "Traditional Rugs",
      "Custom Carpets",
    ],
    highlights: ["Premium Materials", "Elegant Designs", "Durable Construction", "Export Quality", "Custom Sizes"],
  },
  {
    id: 2,
    image: towelImg,
    alt: "Premium 100% cotton terry towel with soft plush texture",
    title: "Premium Terry Towels",
    desc: "Soft, highly absorbent towels engineered for hotels, spas, and premium retail markets.",
    items: [
      "Bath Towels",
      "Hand Towels",
      "Face Towels",
      "Hotel Towels",
      "Spa Towels",
      "Beach Towels",
    ],
    highlights: ["100% Cotton", "High Absorbency", "Soft Texture", "Multiple GSM Options", "Custom Branding", "Premium Packaging"],
  },
  {
    id: 3,
    image: craftImg,
    alt: "Handcrafted wooden décor and gift articles with premium finish",
    title: "Wooden Handicrafts",
    desc: "Beautifully handcrafted wooden pieces that carry the soul of Indian artistry to every home.",
    items: [
      "Home Décor",
      "Decorative Items",
      "Wooden Boxes",
      "Kitchen Accessories",
      "Gift Articles",
      "Religious Handicrafts",
    ],
    highlights: ["Eco-Friendly Materials", "Fine Craftsmanship", "Premium Finish", "Traditional & Modern Designs", "Custom Products"],
  },
];

const Products = () => (
  <section id="products" className="products section">
    <div className="container">
      <div className="section__head" data-reveal>
        <span className="section__eyebrow">Our Products</span>
        <h2 className="section__title">Premium Product Categories</h2>
        <p className="section__sub">
          Three signature ranges, crafted in India and exported to buyers around the world.
        </p>
      </div>

      <div className="products__grid">
        {products.map((p, i) => (
          <article className="product-card" key={p.id} data-reveal style={{ transitionDelay: `${i * 120}ms` }}>
            <div className="product-card__media">
              <img src={p.image} alt={p.alt} loading="lazy" />
              <span className="product-card__tag">{productCategories[i]}</span>
            </div>
            <div className="product-card__body">
              <h3 className="product-card__title">{p.title}</h3>
              <p className="product-card__desc">{p.desc}</p>

              <div className="product-card__cols">
                <div className="product-card__col">
                  <h4 className="product-card__label">Product Range</h4>
                  <ul className="product-card__list">
                    {p.items.map((it) => (
                      <li key={it}>
                        <FiCheck aria-hidden="true" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="product-card__col">
                  <h4 className="product-card__label">Highlights</h4>
                  <ul className="product-card__list">
                    {p.highlights.map((h) => (
                      <li key={h}>
                        <FiCheck aria-hidden="true" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href="#contact" className="btn btn--ghost btn--block">
                Enquire About {p.title}
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
