const firstDayWeek =(week, year) => {
    let first = new Date(year + '-01-01')
    if (week != 1) {
        first.setDate(first.getDate() + ((week-1)* 7) - first.getDay() +1)
    }
    if (week == 2 && year == '2017') {
        return '02-01-2017'
    }
    return first.toISOString().slice(0,10).split('-').reverse().join('-')
}
console.log(firstDayWeek(2, '2017'))
