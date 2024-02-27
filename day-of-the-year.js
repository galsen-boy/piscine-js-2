function dayOfTheYear(date) {
    let firstDay = new Date(date.toISOString().slice(0, 4) + '-01-01')
    let diff = (date.getTime() - firstDay.getTime())
    return (diff / 1000 / 60 / 60 / 24) + 1
}
