import { useState } from "react";
import { motion } from "framer-motion";

// Define goal-driven decision tree
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
    
    // Check if any goal is satisfied immediately after updating state
    for (let goal in goals) {
      const conditions = goals[goal];
      if (conditions.every(cond => newAnswers[cond.question] === cond.answer)) {
        setConclusion(goal);
        return;
      }
    }
    
    // Get next question
    const unanswered = Object.values(goals).flat().find(q => !(q.question in newAnswers));
    if (unanswered) {
      setCurrentQuestion(unanswered.question);
    } else {
      setConclusion("Ikke nok information");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center"
    >
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-xl font-bold mb-4">Skal jeg tage hjem?</h1>
        {conclusion ? (
          <motion.p className="text-lg font-semibold text-green-600">{conclusion}</motion.p>
        ) : (
          <motion.div>
            <p className="text-lg mb-4">{currentQuestion}</p>
            <div className="flex space-x-4">
              <button 
                className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
                onClick={() => handleAnswer("Yes")}
              >
                Ja
              </button>
              <button 
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
                onClick={() => handleAnswer("No")}
              >
                Nej
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
