import { COUNTRIES } from "./countries";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const randomCountries = (maxCountries = 4) => {
  const countriesRnd = [];
  for (let i = 0; i < maxCountries; i++) {
    const rnd = getRandomInt(89);
    countriesRnd.push(COUNTRIES[rnd]);
  }
  if (isAnyCodeRepeat(countriesRnd)) {
    randomCountries();
  }
  return countriesRnd;
};

function isAnyCodeRepeat(countries) {
  for (let i = 0; i < countries.length + 1; i++) {
    if (i === countries.length - 1) return false;
    return countries.includes(countries[i], i + 1);
  }
}
