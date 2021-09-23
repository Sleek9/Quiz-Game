import { useContext, useEffect, useState } from "react";
import Loader from "./Loader";
import { useFetch } from "../hooks/useFetch";
import { useHistory } from "react-router";
import QuizContext from "../context/QuizContext";

const QuizGame = () => {
  const { inGame, correctCount, setCorrectCount, maxQuestions } =
    useContext(QuizContext);
  const { answers, response, setCountQuestion, countQuestions, correctAnswer } =
    useFetch();

  const history = useHistory();
  const [next, setNext] = useState(true);

  useEffect(() => {
    if (!inGame) {
      history.push("/");
    }
    return null;
  }, [inGame, history]);

  const nextQuestion = () => {
    if (countQuestions + 1 === maxQuestions) {
      history.push("/finish");
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

    if (target.getAttribute("capital-value") === correctAnswer.capital) {
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
              <div
                className="quiz__items"
                key={index}
                capital-value={el.capital}
                onClick={handleAnswer}
              >
                <button className="quiz__item">{el.capital}</button>
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
