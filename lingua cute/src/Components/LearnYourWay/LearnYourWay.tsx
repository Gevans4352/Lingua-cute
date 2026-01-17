import "./LearnYourWay.scss";
import { FaArrowRight, FaBook } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { BiTargetLock } from "react-icons/bi";
import { FaTrophy } from "react-icons/fa";

const LearnYourWay = () => {
  const features = [
    {
      icon: <FaBook />,
      title: "Vocabulary Builder",
      description: "Learn new words every day with cute flashcards and spaced repetition.",
      bgColor: "#FFE8D1",  
      iconBg: "#d17db8",
    },
    {
      icon: <HiLightBulb />,
      title: "Grammar Tips",
      description: "Easy-to-understand grammar lessons that make learning fun!",
       bgColor: "#FFEBD8", 
      iconBg: "#b1749e",
    },
    {
      icon: <BiTargetLock />,
      title: "Practice Exercises",
      description: "Interactive exercises to reinforce what you've learned.",
      iconBg: "#754b69",
      bgColor: "#F5EBD9"
      
    },
    {
      icon: <FaTrophy />,
      title: "Achievement System",
      description: "Track your progress and earn badges as you learn!",
      bgColor: "#FFE8E0",
      iconBg: "#9e6b8f",
    },
  ];

  return (
    <section className="lwenyourwei" id="lwenyourwei">
      <h3>Learn Your Way</h3>
      <h4 className="subtitle">
        Discover different ways to learn languages, all designed to be fun, engaging,
        <br />
        and totally adorable!
      </h4>

      <div className="features-grid">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="feature-card"
            style={{ backgroundColor: feature.bgColor }}
          >
            <div 
              className="icon-wrapper"
              style={{ backgroundColor: feature.iconBg }}
            >
              {feature.icon}
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
            <p className="Explore">Explore More <FaArrowRight className="faRight" /> </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearnYourWay;