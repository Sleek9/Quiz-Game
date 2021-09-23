import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuizContext from "../context/QuizContext";

const QuizDifficulty = () => {
  const { setMaxQuestions, inGame } = useContext(QuizContext);
  const history = useHistory();

  useEffect(() => {
    if (!inGame) {
      history.push("/");
    }
    return null;
  }, [inGame, history]);

  const handleDifficulty = (e) => {
    e.preventDefault();
    if (e.target.classList[0] === "quiz__items") {
      setMaxQuestions(parseInt(e.target.firstChild.value));
    } else {
      setMaxQuestions(parseInt(e.target.value));
    }
    history.push("/start");
  };
  return (
    <div className="quiz__list">
      <h2>Select the game difficulty</h2>
      <div className="quiz__items" onClick={handleDifficulty}>
        <button className="quiz__item" value="5">
          Easy
        </button>
      </div>
      <div className="quiz__items" onClick={handleDifficulty}>
        <button className="quiz__item" value="10">
          Normal
        </button>
      </div>
      <div className="quiz__items" onClick={handleDifficulty}>
        <button className="quiz__item" value="15">
          Hard
        </button>
      </div>
    </div>
  );
};

export default QuizDifficulty;
