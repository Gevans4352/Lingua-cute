 
import { FiThumbsUp } from "react-icons/fi";
import { CiTrophy } from "react-icons/ci";
import "./Scores.scss";
import { FaRegStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

interface ScoresProps {
  score: number;
  totalQuestions: number;
  resetQuiz: () => void;
}

const Scores = ({ score, totalQuestions, resetQuiz }: ScoresProps) => {
  const percentage = (score / totalQuestions) * 100;
  const stars = Math.round((percentage / 100) * 5);

  return (
    <section className="warkwigeim">
      <div className="quiz-container">
        <div className="result-screen">
          <div className="result-icons">
            <span className="trophy"><CiTrophy /></span>
          </div>
          
          <h2>Game Complete!</h2>
          <p className="encouragement">Good work! Keep practicing!</p>
          
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={star <= stars ? "star filled" : "star"}>
                <IoStar />
              </span>
            ))}
          </div>
          
          <p className="final-score">
            {score} / {totalQuestions}
          </p>
          
          <button className="retry-btn" onClick={resetQuiz}>
            Play Again
          </button>
        </div>
      </div>
    </section>
  );
};

 export default Scores; 
 
 
 