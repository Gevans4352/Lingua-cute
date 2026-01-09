import { useState } from "react";
import "./QuizGame.scss";

const QuizGame = () => {
  const quizData = [
    {
      question: "こんにちは",
      language: "Japanese",
      languageCode: "JP",
      meaning: "What does this mean?",
      options: ["Goodbye", "Hello", "Thank you", "Sorry"],
      correctAnswer: "Hello",
    },
    {
      question: "Gracias",
      language: "Spanish",
      languageCode: "ES",
      meaning: "What does this mean?",
      options: ["Please", "Thank you", "Hello", "Goodbye"],
      correctAnswer: "Thank you",
    },
    {
      question: "Bonjour",
      language: "French",
      languageCode: "FR",
      meaning: "What does this mean?",
      options: ["Goodbye", "Sorry", "Hello", "Thank you"],
      correctAnswer: "Hello",
    },
    {
      question: "안녕하세요",
      language: "Korean",
      languageCode: "KR",
      meaning: "What does this mean?",
      options: ["Goodbye", "Hello", "Thank you", "Sorry"],
      correctAnswer: "Hello",
    },
    {
      question: "감사합니다",
      language: "Korean",
      languageCode: "KR",
      meaning: "What does this mean?",
      options: ["Please", "Thank you", "Hello", "Sorry"],
      correctAnswer: "Thank you",
    },
    {
      question: "Báwo ni",
      language: "Yoruba",
      languageCode: "YO",
      meaning: "What does this mean?",
      options: ["Goodbye", "Hello", "Thank you", "Sorry"],
      correctAnswer: "Hello",
    },
    {
      question: "Ẹ ṣeún",
      language: "Yoruba",
      languageCode: "YO",
      meaning: "What does this mean?",
      options: ["Please", "Thank you", "Hello", "Good morning"],
      correctAnswer: "Thank you",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option);
    
    if (option === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  if (showResult) {
    const percentage = (score / quizData.length) * 100;
    const stars = Math.round((percentage / 100) * 5);

    return (
      <div className="quiz-container">
        <div className="result-screen">
          <div className="result-icons">
            <span className="thumbs-up">👍</span>
            <span className="trophy">🏆</span>
          </div>
          
          <h2>Game Complete!</h2>
          <p className="encouragement">Good work! Keep practicing!</p>
          
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={star <= stars ? "star filled" : "star"}>
                ⭐
              </span>
            ))}
          </div>
          
          <p className="final-score">
            {score} / {quizData.length}
          </p>
          
          <button className="retry-btn" onClick={resetQuiz}>
            🔄 Play Again
          </button>
        </div>
      </div>
    );
  }

  const currentQ = quizData[currentQuestion];

  return (
    <section className="warkwigeim">
      <h2>
        Word Quiz Game
      </h2>
      <h5>
        Test your vocabulary knowledge! Pick the correct meaning for each word.
      </h5>

<div className="quiz-container">
      <div className="quiz-header">
        <span className="question-number">
          🌸 Question {currentQuestion + 1} of {quizData.length}
        </span>
        <div className="progress-bar">
          {quizData.map((_, idx) => (
            <div
              key={idx}
              className={`progress-dot ${idx <= currentQuestion ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="language-badge">
        <span className="lang-code">{currentQ.languageCode}</span>
        <span className="lang-name">{currentQ.language}</span>
      </div>

      <div className="question-section">
        <h2 className="question-text">{currentQ.question}</h2>
        <p className="question-hint">{currentQ.meaning}</p>
      </div>

      <div className="options-grid">
        {currentQ.options.map((option, idx) => (
          <button
            key={idx}
            className={`option-btn ${
              selectedAnswer === option
                ? option === currentQ.correctAnswer
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => handleAnswer(option)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="score-display">
        Score: <span className="score-number">{score}</span>
      </div>
    </div>
    </section>
  );
};

export default QuizGame;