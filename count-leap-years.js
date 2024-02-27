function countLeapYears(date) {
    let year = Number(date.toISOString().slice(0,4))
    let counter = 0
    for (let i = 1; i < year; i++) {
        if (isLeapYear(i)){
            counter++
        }
    }
    return counter
} 

const isLeapYear = year => (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));