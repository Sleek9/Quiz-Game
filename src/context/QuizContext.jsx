import { createContext, useState } from "react";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [inGame, setInGame] = useState(false);

  const resetGame = () => {
    setInGame(false);
  };

  const data = {
    loading,
    setLoading,
    inGame,
    setInGame,
    resetGame,
  };

  return <QuizContext.Provider value={data}>{children}</QuizContext.Provider>;
};

export { QuizProvider };
export default QuizContext;
