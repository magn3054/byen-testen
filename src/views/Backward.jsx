import { useState } from "react";
import style from "./Backward.module.css";

const goals = {
  "Tag hjem": [
    { question: "Har klokken rundet 2 om morgenen?", answer: "Yes" },
    { question: "Har du det dårligt?", answer: "Yes" }
  ],
  "Giv den gas": [
    { question: "Har klokken rundet 2 om morgenen?", answer: "No" },
    { question: "Har du din pung?", answer: "Yes" }
  ],
  "Luk kortet og tag hjem": [
    { question: "Har du din pung?", answer: "No" },
    { question: "Mangler der penge fra din bankkonto?", answer: "Yes" }
  ],
  "Fest videre og tag hjem med dine venner": [
    { question: "Har du din pung?", answer: "No" },
    { question: "Mangler der penge fra din bankkonto?", answer: "No" }
  ]
};

export default function BackwardChaining() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState("Har klokken rundet 2 om morgenen?");
  const [conclusion, setConclusion] = useState(null);

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    for (let goal in goals) {
      const conditions = goals[goal];
      if (conditions.every(cond => newAnswers[cond.question] === cond.answer)) {
        setConclusion(goal);
        return;
      }
    }

    const unanswered = Object.values(goals).flat().find(q => !(q.question in newAnswers));
    if (unanswered) {
      setCurrentQuestion(unanswered.question);
    } else {
      setConclusion("Ikke nok information");
    }
  };

  return (
    <div className={style.container}>
      <h1>Skal jeg tage hjem?</h1>
      <p>{conclusion ? conclusion : currentQuestion}</p>

      {!conclusion && (
        <div>
          <button
            onClick={() => handleAnswer("Yes")}
            style={{ backgroundColor: "green" }}
          >
            Ja
          </button>
          <button
            onClick={() => handleAnswer("No")}
            style={{ backgroundColor: "red" }}
          >
            Nej
          </button>
        </div>
      )}
    </div>
  );
}
