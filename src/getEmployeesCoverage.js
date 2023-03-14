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

const noParameters = () => employees.filter(({ firstName }) => firstName.length > 1);
const getEmployeesCoverage = (obj) => {
  if (obj === undefined) return noParameters();
  if (data.employees.some(({ name }) => name === obj.name)) return getByName(obj);
  if (data.employees.some(({ id }) => id === obj.id)) return getById(obj);
};
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
