import { COUNTRIES } from "./countries";

export const randomCountries = (maxCountries = 4) => {
  const countriesRnd = [];
  for (let i = 0; i < maxCountries; i++) {
    const rnd = Math.floor(Math.random() * (COUNTRIES.length - 1));
    countriesRnd.push(COUNTRIES[rnd]);
  }
  if (isAnyCodeRepeat(countriesRnd)) {
    randomCountries();
  }
  return countriesRnd;
};

function isAnyCodeRepeat(countries) {
  for (let i = 0; i < countries.length; i++) {
    if (i === countries.length - 1) return false;
    return countries.includes(countries[i], i + 1);
  }
}
