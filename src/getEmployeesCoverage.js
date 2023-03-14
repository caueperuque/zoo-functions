const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getByName = (({ name }) => {
  const employee = employees
    .find(({ firstName, lastName }) => firstName === name || lastName === name);
  const responsible = employees
    .find(({ firstName, lastName }) => firstName === name || lastName === name).responsibleFor;
  const animalName = responsible.map((id) => data.species.find((specie) => specie.id === id).name);
  const animalLocation = responsible
    .map((id) => data.species.find((specie) => specie.id === id).location);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animalName,
    locations: animalLocation,
  };
});

const getById = ({ id }) => {
  const employee = employees
    .find((employeee) => employeee.id === id);
  const responsible = employees
    .find((employeee) => employeee.id === id).responsibleFor;
  const animalName = responsible
    .map((ids) => data.species.find((specie) => specie.id === ids).name);
  const animalLocation = responsible
    .map((ids) => data.species.find((specie) => specie.id === ids).location);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animalName,
    locations: animalLocation,
  };
};

const noParameters = () => employees.map(({ firstName, lastName, id, responsibleFor }) => {
  const obj = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map((ids) => data.species.find((specie) => specie.id === ids).name),
    locations: responsibleFor
      .map((ids) => data.species.find((specie) => specie.id === ids).location),
  };
  return obj;
});

const getEmployeesCoverage = (obj) => {
  try {
    if (obj === undefined) return noParameters();
    if (data.employees.some(() => obj.name)) return getByName(obj);
    if (data.employees.some(() => obj.id)) return getById(obj);
  } catch (erro) {
    throw new Error('Informações inválidas');
  }
};
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
