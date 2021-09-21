import { useContext, useEffect, useState } from "react";
import Loader from "./Loader";
import { useFetch } from "../hooks/useFetch";
import { useHistory } from "react-router";
import QuizContext from "../context/QuizContext";

const QuizGame = () => {
  const { inGame, resetGame } = useContext(QuizContext);
  const { answers, response, setCountQuestion, countQuestions, correctAnswer } =
    useFetch();

  const history = useHistory();
  const [correctCount, setCorrectCount] = useState(0);
  const [next, setNext] = useState(true);

  useEffect(() => {
    if (!inGame) {
      history.push("/");
    }
    return null;
  }, [inGame, history]);

  const nextQuestion = () => {
    if (countQuestions >= 4) {
      alert("Juego terminado");
      console.log(correctCount);
      history.push("/");
      resetGame();
      return;
    }
    setNext(true);
    setCountQuestion(countQuestions + 1);
  };

  const handleAnswer = (e) => {
    e.preventDefault();
    if (!next) return;

    let target;

    if (e.target.classList[0] === "quiz__item") {
      target = e.target.parentNode;
    } else {
      target = e.target;
    }
    setNext(false);

    if (e.target.textContent === correctAnswer.capital) {
      target.classList.add("correct");
      target.lastChild.classList.add("fa-check-circle");
      setCorrectCount(correctCount + 1);
    } else {
      target.classList.add("wrong");
      target.lastChild.classList.add("fa-times-circle");
    }

    setTimeout(() => {
      nextQuestion();
    }, 500);
  };

  return (
    <>
      {response || <Loader />}
      {response && (
        <div className="quiz__list">
          <h2>{`What is the capital of ${correctAnswer.name}?`}</h2>
          {answers.map((el, index) => {
            return (
              <div className="quiz__items" key={index} onClick={handleAnswer}>
                <button className="quiz__item" key={el}>
                  {el.capital}
                </button>
                <i className="fas icon"></i>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default QuizGame;
