const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) return {};
  return data.employees
    .find(({ firstName, lastName }) => (firstName === employeeName) || (lastName === employeeName));
};

module.exports = getEmployeeByName;
