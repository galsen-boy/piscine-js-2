function sunnySunday(inputDate) {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const referenceDate = new Date(1, 0, 1)
  const daysDifference = Math.floor((inputDate - referenceDate) / (24 * 60 * 60 * 1000))
  const currentDayIndex = (daysDifference % weekdays.length + weekdays.length) % weekdays.length
  return weekdays[currentDayIndex];
}
console.log(sunnySunday(new Date('0001-01-01')))

// 2. Write a function that takes a number as an argument and returns the number with the digits reversed.

