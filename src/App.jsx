import "./App.scss";

import Quiz from "./components/Quiz";
import { QuizProvider } from "./context/QuizContext";

function App() {
  return (
    <div>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}

export default App;
