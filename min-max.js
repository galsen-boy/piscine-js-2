const min = (a, b) => {
    let diff = a-b
    if (diff<0) {
        return a
    } else {
        return b
    }
}
const max = (a, b) => {
    let diff = a-b
    if (diff<0) {
        return b
    } else {
        return a
    }
}
