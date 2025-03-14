import { useState } from "react";
import style from "./Forward.module.css";

const decisionTree = {
  question: "Kan du huske noget?",
  options: {
    Ja: {
      question: "Har du moralske tømmerbobs?",
      options: {
        Ja: "Du gik kold",
        Nej: "Du gik ikke kold",
      },
    },
    Nej: {
      question: "Er du alene i din seng?",
      options: {
        Ja: {
          question: "Svarer dine venner dig?",
          options: {
            Ja: "Spørg dem om du gik kold",
            Nej: "Du har sikkert været pinlig og gik kold",
          },
        },
        Nej: {
          question: "Kender du personen?",
          options: {
            Ja: {
              question: "Er det en fejl?",
              options: {
                Ja: {
                  question: "Er det din egen seng?",
                  options: {
                    Ja: "You are fucked og gik kold",
                    Nej: "Du gik kold STIK AF!!",
                  },
                },
                Nej: "You are good, spørg personen hvad der er sket",
              },
            },
            Nej: "Hmm spændende, du er bestemt gået kold",
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
    setHistory(history.slice(0, -1));
  };

  const reset = () => {
    if (history.length > 1) {
      setHistory([decisionTree]);
    };
  };

  return (
    <div className={style.container}>
      <h1>Gik du kold i går?</h1>
      <section style={style.questionContainer}>
        <h2>{currentNode.question}</h2>
        <div>
          {Object.keys(currentNode.options).map((option) => (
            <button
              key={option}
              onClick={() => handleChoice(option)}
              style={{ backgroundColor: option === "Ja" ? "green" : "red" }}
            >
              {option}
            </button>
          ))}
        </div>
          {history.length > 1 && (
            <button onClick={goBack} className={style.backbutton}>
              Tilbage
            </button>
          )}
          {history.length > 1 && (
            <button onClick={reset} className={style.backbutton}>
              Start forfra
            </button>
          )}
      </section>
    </div>
  );
}
