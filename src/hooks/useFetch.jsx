import axios from "axios";
import { useEffect, useState } from "react";
import { randomCountries } from "../utils/randomContries";

export const useFetch = () => {
  const [answers, setAnswers] = useState([]);
  const [response, setResponse] = useState(false);
  const [countQuestions, setCountQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    getAllData();
    return () => {
      setAnswers({});
    };
  }, [countQuestions]);

  const getAllData = async () => {
    setResponse(false);
    const countries = randomCountries();

    let rndNumber = Math.floor(Math.random() * 4);
    let newArray = [];
    await Promise.all(
      countries.map(async (el, index) => {
        const res = await axios.get(
          `https://restcountries.com/v3/alpha?codes=${el}`
        );

        let isCorrect;
        if (index === rndNumber) {
          isCorrect = true;
          setCorrectAnswer({
            name: res.data[0].name.common,
            capital: res.data[0].capital[0],
          });
        } else {
          isCorrect = false;
        }

        newArray.push({
          name: res.data[0].name.common,
          capital: res.data[0].capital[0],
          flag_url: res.data[0].flags[0],
          isCorrect: isCorrect,
        });
      })
    );
    setAnswers(newArray);
    setTimeout(() => {
      setResponse(true);
    }, 1000);
  };

  return { answers, response, setCountQuestion, countQuestions, correctAnswer };
};
