import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import BackToTop from "./components/BackToTop/BackToTop";
import Footer from "./components/Footer/Footer";
import ScrollManager from "./components/ScrollManager/ScrollManager";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/animations.css";
import "./styles/responsive.css";

document.documentElement.classList.add("js");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollManager />
      <App />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </BrowserRouter>
  </React.StrictMode>
);
