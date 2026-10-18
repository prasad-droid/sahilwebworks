const blocks = [
  {
    number: "01",
    title: "Reduce Plastic Dependence",
    text: "Biodegradable alternatives can help businesses move away from conventional single-use plastic products.",
  },
  {
    number: "02",
    title: "Better Choices for Food Businesses",
    text: "Give restaurants, cafés, cloud kitchens and event businesses more sustainable packaging and serving options.",
  },
  {
    number: "03",
    title: "Built Around a Greener Future",
    text: "Support the transition toward more environmentally conscious food-service practices.",
  },
];

export default function Sustainability() {
  return (
    <section className="section section--alt" id="sustainability">
      <div className="container">
        <div className="sustainability">
          <div className="sustainability__visual" aria-hidden="true">
            <div className="sustainability__orbit sustainability__orbit--one">
              <img
                src="/images/product-2.png"
                alt=""
                className="sustainability__leaf"
                loading="lazy"
              />
            </div>
            <div className="sustainability__orbit sustainability__orbit--two">
              <img
                src="/images/product-4.jpg"
                alt=""
                className="sustainability__leaf sustainability__leaf--small"
                loading="lazy"
              />
            </div>
            <div className="sustainability__core">
              <span className="sustainability__core-icon" aria-hidden="true">🌍</span>
              <strong>Greener Earth</strong>
            </div>
          </div>

          <div className="sustainability__content">
            <span className="section-eyebrow">Sustainability</span>
            <h2 className="section-title">How Our Products Help Keep Earth Green</h2>

            <div className="sustainability__blocks">
              {blocks.map((block, i) => (
                <div className={`sustainability__block reveal reveal-visual reveal-delay-${i}`} key={block.number}>
                  <span className="sustainability__number">{block.number}</span>
                  <div>
                    <h3 className="sustainability__block-title">{block.title}</h3>
                    <p className="sustainability__block-text">{block.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}