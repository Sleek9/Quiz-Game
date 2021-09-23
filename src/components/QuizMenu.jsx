import { useContext } from "react";
import { NavLink } from "react-router-dom";
import QuizContext from "../context/QuizContext";
import World from "../img/worldwide.svg";

const QuizMenu = () => {
  const { setInGame } = useContext(QuizContext);

  const handleGame = () => setInGame(true);
  return (
    <div className="quiz__list">
      <h3>Show your geography skills by answering questions</h3>
      <div className="quiz__svg">
        <img src={World} alt="" />
      </div>
      <div className="quiz__start">
        <NavLink
          to="/difficulty"
          className="quiz__items start"
          onClick={handleGame}
        >
          Start
        </NavLink>
      </div>
    </div>
  );
};

export default QuizMenu;
