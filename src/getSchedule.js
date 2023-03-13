const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const openAndClose = (day, scheduleTarget) => {
  const schedule = day.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${data.hours[curr].open}am until ${data.hours[curr].close}pm`,
      exhibition: species
        .filter(({ availability }) => availability.includes(curr))
        .map(({ name }) => name),
    };
    return acc;
  }, {});
  if (day.some(() => ))
};

const getSchedule = (scheduleTarget) => {
  // TENTEI DE TODO MODO, MAS NO LINT NÃO PASSAVA ENTÃO RESOLVI SEPARAR EM FUNÇÃO TUDO!
  const week = Object.keys(data.hours);
  const dayOpen = (day) => {
    const { open, close } = data.hours[day];
    return open && close;
  };
  const verifyIfAnimal = (scheduleTarget) => species.some(({ name }) => name === scheduleTarget);
  if (verifyIfAnimal(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  
  if (week.includes(scheduleTarget)) {
    week.reduce((acc, cur) => {
      acc[cur] = {
        officeHour: ,
        exhibition: ,
    },{})
  }
};
console.log(getSchedule('Monday'));
module.exports = getSchedule;
