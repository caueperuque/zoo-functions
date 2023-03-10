const data = require('../data/zoo_data');

// const countAnimals = (animal) => {
//   if (animal === undefined) {
//     data.species.filter((specie) => specie.residents.reduce((acc, cur) =>
//     {
//       acc[cur] = specie.residents.map((resident) => resident.name).length;
//       return acc;
//     },{}));
//   }
// };

const countAnimals = (animal) => {
  if (animal === undefined) {
    return data.species.reduce((acc, { name }) => {
      acc[name] = data.species
        .find((specie) => specie.name === name).residents
        .map((resident) => resident.name).length;
      return acc;
    }, {});
  }
  if (animal.sex === undefined) {
    return data.species
      .find(({ name }) => name === animal.species).residents
      .map((resident) => resident.name).length;
  }
  return data.species
    .find(({ name }) => name === animal.species).residents
    .filter(({ sex }) => sex === animal.sex).length;
};

console.log(countAnimals({ species: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
