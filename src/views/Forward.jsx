import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./Forward.module.css";

const decisionTree = {
  question: "Kan du huske noget?",
  options: {
    Yes: {
      question: "Har du moralske tømmerbobs?",
      options: {
        Yes: "Du gik kold",
        No: "Du gik ikke kold",
      },
    },
    No: {
      question: "Er du alene i din seng?",
      options: {
        Yes: {
          question: "Svarer dine venner dig?",
          options: {
            Yes: "Spørg dem om du gik kold",
            No: "Du har sikkert været pinlig og gik kold",
          },
        },
        No: {
          question: "Kender du personen?",
          options: {
            Yes: {
              question: "Er det en fejl?",
              options: {
                Yes: {
                  question: "Er det din egen seng?",
                  options: {
                    Yes: "You fucked og gik kold",
                    No: "Du gik kold STIK AF!!",
                  },
                },
                No: "You good, spørg personen hvad der er sket",
              },
            },
            No: "Sikke noget puha",
          },
        },
      },
    },
  },
};

export default function DecisionTree() {
  const [history, setHistory] = useState([decisionTree]);
  const currentNode = history[history.length - 1];

  const handleChoice = (choice) => {
    const nextNode = currentNode.options[choice];
    if (typeof nextNode === "string") {
      setHistory([...history, { question: nextNode, options: {} }]);
    } else {
      setHistory([...history, nextNode]);
    }
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1));
    }
  };

  return (
    <div className={style.container}>
      <h1>Gik du kold i går?</h1>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentNode.question}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          <p>{currentNode.question}</p>

          <div>
            {Object.keys(currentNode.options).map((option) => (
              <motion.button
                key={option}
                onClick={() => handleChoice(option)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  backgroundColor: option === "Yes" ? "green" : "red",
                }}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {history.length > 1 && (
        <motion.button
          onClick={goBack}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "gray",
            color: "white",
          }}
        >
          Tilbage
        </motion.button>
      )}
    </div>
  );
}
