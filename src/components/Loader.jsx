import "./Loader.scss";

const messages = [
  "Loading",
  "You can do it",
  "Getting more questions from google",
];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Loader = () => {
  return (
    <div className="flex-center">
      <div className="sk-fading-circle">
        <div className="sk-circle1 sk-circle"></div>
        <div className="sk-circle2 sk-circle"></div>
        <div className="sk-circle3 sk-circle"></div>
        <div className="sk-circle4 sk-circle"></div>
        <div className="sk-circle5 sk-circle"></div>
        <div className="sk-circle6 sk-circle"></div>
        <div className="sk-circle7 sk-circle"></div>
        <div className="sk-circle8 sk-circle"></div>
        <div className="sk-circle9 sk-circle"></div>
        <div className="sk-circle10 sk-circle"></div>
        <div className="sk-circle11 sk-circle"></div>
        <div className="sk-circle12 sk-circle"></div>
      </div>
      <p className="loader">{messages[getRandomInt(3)]}</p>
    </div>
  );
};

export default Loader;
