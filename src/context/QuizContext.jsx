import { createContext, useState } from "react";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [inGame, setInGame] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [maxQuestions, setMaxQuestions] = useState(5);
  const resetGame = () => {
    setInGame(false);
    setCorrectCount(0);
  };

  const data = {
    loading,
    setLoading,
    inGame,
    setInGame,
    resetGame,
    correctCount,
    setCorrectCount,
    maxQuestions,
    setMaxQuestions,
  };

  return <QuizContext.Provider value={data}>{children}</QuizContext.Provider>;
};

export { QuizProvider };
export default QuizContext;
