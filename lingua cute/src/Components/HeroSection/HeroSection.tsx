import { CiHeart } from "react-icons/ci";
import "./HeroSection.scss";
import { IoGameControllerOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    // If already on home page, just scroll
    if (window.location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate(`/#${section}`);
    }
  };
  return (
    <section className="hero">
      <h1 className="hero-title">
        <span className="gradient-text">Learn Languages</span>
        <span className="dark-text">the Cute Way!</span>
      </h1>
      <p className="hero-subtitle">
        Translate, learn, and play games while discovering new <br />
        languages. Make learning feel like a warm hug!
      </p>
      <div className="hero-buttons">
        <button
          className="btn-primary"
          onClick={() => handleNavigation("kwitee")}
        >
          {" "}
          <CiHeart /> Start Learning{" "}
        </button>
        <button
          className="btn-secondary"
          onClick={() => handleNavigation("warkwigeim")}
        >
          {" "}
          <IoGameControllerOutline />
          Play Games
        </button>
      </div>
      <div className="scroll-indicator">↓</div>
    </section>
  );
};

export default HeroSection;
