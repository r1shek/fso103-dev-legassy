const container = document.querySelector('.js-container') 
// const monthArray = ['січень', 'лютий', 'березень', 'квітень', 'травень'] 
const currentDate = new Date()
// console.log(monthArray[currentDate.getMonth()]);

const month = currentDate.toLocaleDateString('uk-UA', {month: 'long'});

const day = currentDate.toLocaleDateString('uk-UA', {day: "numeric"});

const weekDay = currentDate.toLocaleDateString('uk-UA', {weekday: "long"});

const year = currentDate.toLocaleDateString('uk-UA', {year: "numeric"});


container.querySelector('.js-month').textContent = month;
container.querySelector('.js-day-number').textContent = day;
container.querySelector('.js-day').textContent = weekDay;
container.querySelector('.js-year').textContent = year;

