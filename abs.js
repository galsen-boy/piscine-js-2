const isPositive =(value) => {
    if (value>0) {
        return true
    } else {
        return false
    }
}

const abs = (value) => {
    if (isPositive(value)) {
        return value

    } else if (value == 0) {
        return 0
    } else {
        return -value
    }
}