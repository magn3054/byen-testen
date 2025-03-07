import { useState } from "react";

// Define decision tree as JSON
const decisionTree = {
  question: "Gik du kold i går?",
  options: {
    Yes: {
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
    },
  },
};

export default function DecisionTree() {
  const [currentNode, setCurrentNode] = useState(decisionTree);
  
  const handleChoice = (choice) => {
    if (typeof currentNode.options[choice] === "string") {
      setCurrentNode({ question: currentNode.options[choice], options: {} });
    } else {
      setCurrentNode(currentNode.options[choice]);
    }
  };

  return (
    <div>
      <h1>Drinking Blackout Decision Tree</h1>
      <p>{currentNode.question}</p>
      <div>
        {Object.keys(currentNode.options).map((option) => (
          <button key={option} onClick={() => handleChoice(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
