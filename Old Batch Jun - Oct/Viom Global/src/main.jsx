import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/whyChooseUs.css";
import "./styles/products.css";
import "./styles/services.css";
import "./styles/gallery.css";
import "./styles/testimonials.css";
import "./styles/process.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/whatsapp.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
