const data = require('../data/zoo_data');

// const getSpeciesByIds = (...ids) => data.species.filter((specie) => specie.id.includes(ids));
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
// const getSpeciesByIds = (...ids) => {
//   const teste = [];
//   for (let index = 0; index < ids.length; index += 1) {
//     teste.push(data.species.filter((specie) => specie.id.includes(ids[index])));
//   }
//   return teste;
// };

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

const getSpeciesByIds = (...ids) => ids.map((id) => data.species.find((specie) =>
  specie.id
    .includes(id)));

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'));

module.exports = getSpeciesByIds;
