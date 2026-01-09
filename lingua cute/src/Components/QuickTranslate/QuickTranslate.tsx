import { useState } from "react";
import "./QuickTranslate.scss";
import { IoCopyOutline } from "react-icons/io5";

const QuickTranslate = () => {
  const phrases = [
    {
      emoji: "👋",
      text: "Hello, how are you?",
    },
    {
      emoji: "❤️",
      text: "I love learning Languages!",
    },
    {
      emoji: "🌸",
      text: "What a beautiful day!",
    },
    {
      emoji: "🎉",
      text: "Thank you so much!",
    },
    {
      emoji: "👋",
      text: "See you tomorrow!",
    },
  ];
  const translation: Record<string, Record<string, string>> = {
    "Hello, how are you?": {
      JP: "こんにちは、お元気ですか？",
      KR: "안녕하세요, 어떻게 지내세요",
      ES: "Hola, ¿cómo estás?",
      YO: "Bawo ni, ṣe dáadáa ni?",
      FR: "Bonjour, comment allez-vous?",
    },
    "I love learning Languages!": {
      JP: "言語を学ぶのが大好きです！",
      KR: "나는 언어 배우는 것을 좋아해요!",
      ES: "¡Me encanta aprender idiomas!",
      FR: "J'adore apprendre les langues!",
      YO: "Mo nífẹ̀ẹ́ kíkọ́ àwọn èdè!",
    },
    "What a beautiful day!": {
      JP: "なんて美しい日だ！",
      KR: "정말 아름다운 날이에요!",
      ES: "¡Qué día tan hermoso!",
      FR: "Quelle belle journée!",
      YO: "Ọjọ́ tó lẹ́wà tó!",
    },
    "Thank you so much!": {
      JP: "本当にありがとうございます！",
      KR: "정말 감사합니다!",
      ES: "¡Muchas gracias!",
      FR: "Merci beaucoup!",
      YO: "Ẹ ṣeún gan-an!",
    },
    "See you tomorrow!": {
      JP: "また明日！",
      KR: "내일 봐요!",
      ES: "¡Hasta mañana!",
      FR: "À demain!",
      YO: "Má a rí ẹ ní ọ̀la!",
    },
  };
  const [selectedPhase, setSelectedPhase] = useState(phrases[0].text);
  const [selectedLang, setSelectedLang] = useState("JP");

  const languages = [
    { code: "JP", name: "Japanese" },
    { code: "KR", name: "Korean" },
    { code: "ES", name: "Spanish" },
    { code: "FR", name: "French" },
    { code: "YO", name: "Yoruba" },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translation[selectedPhase][selectedLang]);
  };
  return (
<section className="kwitee">
  <h3>Quick Translate</h3>
  <h5>Pick a phase and see it different languages!</h5>

  <div className="translation-box">
    {/* Choose a phrase - inside box at top */}
    <div className="phrase-container">
      <p className="label">Choose a phrase:</p>
      <div className="phrase-buttons">
        {phrases.map((phrase, idx) => (
          <button
            key={idx}
            className={`phrase-btn ${
              selectedPhase === phrase.text ? "active" : ""
            }`}
            onClick={() => setSelectedPhase(phrase.text)}
          >
            <span>{phrase.emoji}</span> {phrase.text}
          </button>
        ))}
      </div>
    </div>

    {/* English -> Language translation display */}
    <div className="translation-display">
      <div className="translation-side">
        <div className="lang-label">
          <span className="flag">GB</span> English
        </div>
        <p className="translation-text">{selectedPhase}</p>
      </div>

      <div className="arrow">→</div>

      <div className="translation-side">
        <div className="lang-label">
          <span className="flag">
            {selectedLang === "JP" && "JP"}
            {selectedLang === "KR" && "KR"}
            {selectedLang === "ES" && "ES"}
            {selectedLang === "FR" && "FR"}
            {selectedLang === "YO" && "YO"}
          </span>
          {languages.find((l) => l.code === selectedLang)?.name}
        </div>
        <p className="translation-text">
          {translation[selectedPhase][selectedLang]}
        </p>
        <button className="copy-btn" onClick={copyToClipboard}>
          <IoCopyOutline />
        </button>
      </div>
    </div>

    {/* Translate to - inside box at bottom */}
    <div className="lang-selector">
      <p className="label">Translate to:</p>
      <div className="lang-buttons">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`lang-btn ${
              selectedLang === lang.code ? "active" : ""
            }`}
            onClick={() => setSelectedLang(lang.code)}
          >
            <span className="lang-code">{lang.code}</span> {lang.name}
          </button>
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default QuickTranslate;
