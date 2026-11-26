import product1 from "../assets/products/product-1.jpg";
import product2 from "../assets/products/product-2.jpg";
import product3 from "../assets/products/product-3.jpg";
import product4 from "../assets/products/product-4.jpg";
import product5 from "../assets/products/product-5.jpg";
import product6 from "../assets/products/product-6.jpg";
import product7 from "../assets/products/product-7.jpg";

export const products = [
  {
    id: "canvas-tote-bag",
    categoryId: "canvas",
    name: "Canvas Tote Bag",
    material: "Canvas",
    applications: ["Retail", "Lifestyle", "Promotional"],
    sizes: "Multiple sizes available",
    colors: "Multiple color options",
    customizable: true,
    description: "Durable and versatile tote bag suitable for retail, promotional and lifestyle applications.",
    image: product1,
    inquiryEnabled: true,
  },
  {
    id: "cotton-tote-bag",
    categoryId: "cotton",
    name: "Cotton Tote Bag",
    material: "Cotton",
    applications: ["Retail", "E-commerce", "Lifestyle"],
    sizes: "Multiple sizes available",
    colors: "Multiple color options",
    customizable: true,
    description: "Lightweight and reusable tote bag for sustainable retail and everyday use.",
    image: product2,
    inquiryEnabled: true,
  },
  {
    id: "jute-tote-bag",
    categoryId: "jute",
    name: "Jute Tote Bag",
    material: "Jute",
    applications: ["Promotional", "Corporate Gifting", "Lifestyle"],
    sizes: "Multiple sizes available",
    colors: "Multiple color options",
    customizable: true,
    description: "Natural-fiber tote bag suited for eco-conscious brands and promotional applications.",
    image: product3,
    inquiryEnabled: true,
  },
  {
    id: "non-woven-tote-bag",
    categoryId: "non-woven",
    name: "Non-Woven Tote Bag",
    material: "Non-Woven",
    applications: ["Promotional", "Retail", "Corporate Gifting"],
    sizes: "Multiple sizes available",
    colors: "Multiple color options",
    customizable: true,
    description: "Practical and economical tote bag for promotional and retail requirements.",
    image: product4,
    inquiryEnabled: true,
  },
  {
    id: "custom-printed-tote-bag",
    categoryId: "custom",
    name: "Custom Printed Tote Bag",
    material: "Custom",
    applications: ["Corporate Gifting", "Promotional", "Private Label"],
    sizes: "Custom sizes on request",
    colors: "Custom color matching",
    customizable: true,
    description: "Customized tote bag designs for brands, events, promotions and corporate requirements.",
    image: product5,
    inquiryEnabled: true,
  },
  {
    id: "private-label-tote-bag",
    categoryId: "private-label",
    name: "Private Label Tote Bag",
    material: "Custom",
    applications: ["Private Label", "Fashion", "Retail"],
    sizes: "Custom sizes on request",
    colors: "Custom color matching",
    customizable: true,
    description: "Custom private-label tote bag solution for fashion, lifestyle and retail brands.",
    image: product6,
    inquiryEnabled: true,
  },
  {
    id: "premium-tote-bag",
    categoryId: "custom",
    name: "Premium Tote Bag",
    material: "Custom",
    applications: ["Fashion", "Lifestyle", "Retail"],
    sizes: "Custom sizes on request",
    colors: "Custom color matching",
    customizable: true,
    description: "Premium quality tote bag crafted to meet the requirements of your brand.",
    image: product7,
    inquiryEnabled: true,
  },
];

export function getProductsByCategory(categoryId) {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
