const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees
  .some((employee) => employee.managers
    .some((managerId) => managerId === id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const peoples = employees.filter((employee) => employee.managers
    .some((manager) => manager === managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
  return peoples;
};

module.exports = { isManager, getRelatedEmployees };
