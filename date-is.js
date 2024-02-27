const isValid = (date) => date > 0 || date < 0;
const isAfter = (date1, date2) => date1 > date2;
const isBefore = (date1, date2) => date1 < date2;
const isFuture = (date) => date > Date.now()
const isPast = (date) => isValid(date) ? date < Date.now() : false;