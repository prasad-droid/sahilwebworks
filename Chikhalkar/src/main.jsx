import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/missionVision.css";
import "./styles/products.css";
import "./styles/industries.css";
import "./styles/whyChooseUs.css";
import "./styles/testimonials.css";
import "./styles/inquiryForm.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/whatsapp.css";
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
