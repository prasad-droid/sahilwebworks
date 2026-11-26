import { LOGO } from "@/assets/images";
import "@/styles/logo.css";

const Logo = ({ className = "" }) => (
  <span className={`logo ${className}`}>
    <img className="logo__img" src={LOGO} alt="ViOm Global Exim logo" />
  </span>
);

export default Logo;
