function bloodySunday(date) {
    let weekDays = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    let first = new Date('0001-01-01')
    let n = Math.ceil(((date - first) / 86400000) % 6 );
    return weekDays[n]
}