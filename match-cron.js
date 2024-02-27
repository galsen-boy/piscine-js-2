function matchCron(cron, date) {
    let arr = cron.split(' ')
    let cronObj = {
        minute: arr[0],
        hour: arr[1],
        dayOfTheMonth: arr[2],
        monthOfTheYear: arr[3],
        dayOfTheWeek: arr[4]
    }

    let dateObj = {
        minute: date.getMinutes(),
        hour: date.getHours(),
        dayOfTheMonth: date.getDate(),
        monthOfTheYear: date.getMonth()+1,
        dayOfTheWeek: date.getDay()
    }

    for (const key in cronObj) {
        if (cronObj.hasOwnProperty(key)) {
            if (cronObj[key] != '*' && cronObj[key] != dateObj[key]) {
                return false
            }
        }
    }
    return true
}
