import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import QuizContext from "../context/QuizContext";

import Results from "../img/undraw_winners_ao2o 2.svg";

const QuizFinish = () => {
  const { inGame, correctCount, resetGame } = useContext(QuizContext);

  const history = useHistory();

  useEffect(() => {
    if (!inGame) {
      history.push("/");
    }
    return null;
  }, [inGame, history]);
  return (
    <div className="quiz__list finish">
      <img src={Results} alt="" />
      <h2>Results</h2>
      <p>
        You got <span>{correctCount}</span> correct answers.
      </p>
      <NavLink to="/" className="quiz__items start" onClick={resetGame}>
        Try Again
      </NavLink>
    </div>
  );
};

export default QuizFinish;
