import React, { useContext, useEffect } from "react";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import QuizContext from "../context/QuizContext";
import Logo from "../img/undraw_adventure_4hum1.svg";
import QuizMenu from "./QuizMenu";
import QuizGame from "./QuizGame";
import QuizFinish from "./QuizFinish";
import QuizDifficulty from "./QuizDifficulty";

const Quiz = () => {
  const { resetGame } = useContext(QuizContext);

  useEffect(() => {
    resetGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="quiz">
        <div className="quiz__card">
          <HashRouter>
            <div className="quiz__title">
              <NavLink to="/" onClick={resetGame}>
                <h1>Country Quiz</h1>
              </NavLink>
              <div className="quiz__img">
                <img src={Logo} alt="" className="quiz__image" />
              </div>
            </div>
            <Switch>
              <Route exact path="/">
                <QuizMenu />
              </Route>
              <Route exact path="/start">
                <QuizGame />
              </Route>
              <Route exact path="/difficulty">
                <QuizDifficulty />
              </Route>
              <Route exact path="/finish">
                <QuizFinish />
              </Route>
            </Switch>
          </HashRouter>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Quiz;
