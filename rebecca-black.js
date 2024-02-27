const isFriday = (date) => date.getDay() == 5;
const isWeekend = (date) => date.getDay() == 5 || date.getDay() == 6;
const isLeapYear = (date) => new Date(date.toISOString().slice(0, 4) + '-02-29').getDate() === 29;
const isLastDayOfMonth = (date) => new Date(date.setDate(date.getDate() + 1)).toISOString().slice(8,10) == '01'