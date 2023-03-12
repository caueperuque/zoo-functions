const data = require('../data/zoo_data');

const countEntrants = (entrants) => entrants.reduce((acc) => {
  acc.child = entrants
    .filter(({ age }) => age < 18)
    .map(({ age }) => age).length;
  acc.adult = entrants
    .filter(({ age }) => age >= 18 && age < 50)
    .map(({ age }) => age).length;
  acc.senior = entrants
    .filter(({ age }) => age >= 50)
    .map(({ age }) => age).length;
  return acc;
}, {});

const calculateEntry = (entrants) => {
  if (entrants === undefined || entrants.length === 0) return 0;
  const countChild = countEntrants(entrants).child * 20.99;
  const countAdult = countEntrants(entrants).adult * 49.99;
  const countSenior = countEntrants(entrants).senior * 24.99;
  return parseFloat((countChild + countAdult + countSenior).toFixed(2));
  // usei o toFixed para ter apenas para manter 2 casas decimais, e o parseFloat para transformar o resultado em número novamente pq o resultado que sai do toFixed é uma string
};

module.exports = { calculateEntry, countEntrants };
