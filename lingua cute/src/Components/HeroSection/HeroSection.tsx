import { CiHeart } from "react-icons/ci";
import "./HeroSection.scss"
import { IoGameControllerOutline } from "react-icons/io5";

const HeroSection = ()=>{
    return(
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
                <button className="btn-primary"> <CiHeart /> Start Learning</button>
                <button className="btn-secondary"> <IoGameControllerOutline />Play Games</button>
            </div>
            <div className="scroll-indicator">↓</div>
        </section>
    )
}

export default HeroSection;