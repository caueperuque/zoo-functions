const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysOfWeek = Object.keys(data.hours);

const getAnimal = (scheduleTarget) => species
  .find((specie) => specie
    .name === scheduleTarget).availability;

const generateObj = () => {
  const obj = {};
  daysOfWeek.forEach((day) => {
    obj[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: data.species
        .filter((specie) => specie.availability.includes(day)).map(({ name }) => name),
    };
    if (day === 'Monday') {
      obj.Monday = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return obj;
};

const generateObjDay = (scheduleTarget) => {
  const obj = {};
  obj[scheduleTarget] = {
    officeHour: `Open from ${data.hours[scheduleTarget]
      .open}am until ${data.hours[scheduleTarget].close}pm`,
    exhibition: data.species
      .filter((specie) => specie.availability.includes(scheduleTarget)).map(({ name }) => name),
  };
  return obj;
};

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === undefined) return generateObj();
  if (data.species.some(({ name }) => name === scheduleTarget)) return getAnimal(scheduleTarget);
  if (scheduleTarget === 'Monday') {
    return {
      Monday: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  if (daysOfWeek.some((day) => day === scheduleTarget)) {
    return generateObjDay(scheduleTarget);
  }
  return generateObj();
};
console.log(getSchedule('bears'));

module.exports = getSchedule;
