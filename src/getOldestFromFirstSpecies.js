const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const employee = data.employees.find((employees) => employees.id === id);
  const responsibleFor = employee.responsibleFor[0];
  const animal = species.find((specie) => specie.id === responsibleFor);
  const ageAnimal = animal.residents.map(({ age }) => age).sort((a, b) => b - a);
  const oldestAnimal = animal.residents.find(({ age }) => age === ageAnimal[0]);
  return Object.values(oldestAnimal);
};
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
