const sign = (num) => {
    if (num > 0) {
        return 1
    }else if (num == 0) {
        return 0
    }else {
        return -1
    }
}
const sameSign = (a, b) => {
    if (sign(a) == sign(b)) {
        return true
    }else {
        return false
    }
}