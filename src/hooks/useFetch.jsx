import axios from "axios";
import { useEffect, useState } from "react";
import { randomCountries } from "../helpers/randomContries";

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
          `https://restcountries.eu/rest/v2/alpha?codes=${el}`
        );

        let isCorrect;
        if (index === rndNumber) {
          isCorrect = true;
          setCorrectAnswer({
            name: res.data[0].name,
            capital: res.data[0].capital,
          });
        } else {
          isCorrect = false;
        }
        newArray.push({
          name: res.data[0].name,
          capital: res.data[0].capital,
          flag_url: res.data[0].flag,
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

// const ac = new AbortController();
//     setResponse(false);
//     const countries = randomCountries();

//     let rndNumber = Math.floor(Math.random() * 4);
//     let newArray = [];
//     countries.forEach(async (el, index) => {
//       const res = await axios.get(
//         `https://restcountries.eu/rest/v2/alpha?codes=${el}`
//       );

//       let isCorrect;
//       if (index === rndNumber) {
//         isCorrect = true;
//         setCorrectAnswer({
//           name: res.data[0].name,
//           capital: res.data[0].capital,
//         });
//       } else {
//         isCorrect = false;
//       }
//       newArray.push({
//         name: res.data[0].name,
//         capital: res.data[0].capital,
//         flag_url: res.data[0].flag,
//         isCorrect: isCorrect,
//       });
//     });
//     setAnswers(newArray);
//     setTimeout(() => {
//       setResponse(true);
//     }, 700);
