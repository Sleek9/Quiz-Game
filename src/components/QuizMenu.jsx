import { useContext } from "react";
import { NavLink } from "react-router-dom";
import QuizContext from "../context/QuizContext";

const QuizMenu = () => {
  const { setInGame } = useContext(QuizContext);

  const handleGame = () => setInGame(true);
  return (
    <div className="quiz__list">
      <h2>Quiz Game</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        pariatur deserunt corrupti et magni illum quae doloribus adipisci
        voluptatum, officiis placeat, vero accusamus. Id ad, praesentium
        necessitatibus alias in exercitationem!
      </p>
      <div className="quiz__start">
        <NavLink to="/start" className="quiz__items start" onClick={handleGame}>
          Jugar
        </NavLink>
      </div>
    </div>
  );
};

export default QuizMenu;
