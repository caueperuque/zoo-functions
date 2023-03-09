const data = require('../data/zoo_data');

// const getAnimalsOlderThan = (animal, age) => {
//   const arrayAnimals = data.species.filter((specie) => specie.name === animal);
//   const animals = arrayAnimals.filter((animal1) => console.log(animal1.residents.every((animal3) => animal3.age >= age)));
//   return animals;
// };
// const getAnimalsOlderThan = (animal, age) => data.species.filter((specie) => console.log(specie));

const getAnimalsOlderThan = (animal, age) => data.species
  .filter((specie) =>
    specie.name === animal)
  .every((animal1) => animal1.residents
    .every((animal3) => animal3.age >= age));

module.exports = getAnimalsOlderThan;
