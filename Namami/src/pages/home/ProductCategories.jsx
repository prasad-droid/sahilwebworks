import { Link } from "react-router-dom";
import ScrollReveal from "../../components/ui/ScrollReveal";
import SectionHeading from "../../components/ui/SectionHeading";
import products from "../../data/products";
import { useTranslation } from "../../hooks/useTranslation";

const categories = ["textile", "dehydrated"];

export default function ProductCategories() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-[#E8DDC8]/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow={t("products.eyebrow")}
          title={t("products.title")}
          subtitle=""
        />

        {categories.map((cat) => {
          const list = products.filter((p) => p.category === cat).slice(0, 3);

          return (
            <div key={cat} className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[#12372A] flex items-center gap-3">
                  {t(`categories.${cat}`)}
                </h3>
                <Link
                  to="/products"
                  className="text-sm font-semibold text-[#1F4D3A] hover:text-[#12372A] transition-colors flex items-center gap-1"
                >
                  {t("products.explore")} →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {list.map((product) => (
                  <ScrollReveal key={product.slug}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                      {/* Image */}
                      <div className="h-72 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-1">
                        <h4 className="font-heading text-2xl font-semibold text-[#12372A]">
                          {product.name}
                        </h4>

                        <p className="text-[#202522]/70 mt-3 leading-relaxed line-clamp-3">
                          {product.description}
                        </p>

                        {/* Feature Pills */}
                        {product.features && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {product.features.map((feature) => (
                              <span
                                key={feature}
                                className="bg-[#A8C3A0]/20 text-[#1F4D3A] text-xs px-3 py-1 rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* CTA */}
                        <div className="mt-auto pt-6">
                          <Link
                            to={`/products/${product.slug}`}
                            className="inline-flex bg-[#1F4D3A] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#12372A] transition-colors duration-300"
                          >
                            {t("products.explore")} {product.name}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}