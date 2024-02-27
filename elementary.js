const multiply = (a, b) => {
    let result = 0;
    let flag = false
    if (b < 0) {
        b = -b
        flag = true
    }
    while (b > 0) {
        result += a
        b--
    }
    if (flag) {
        result = -result
    }
    return result
}
const divide = (a, b) => {
    let count = 0
    let flag = false
    if (a < 0 && b < 0) {
        a = -a
        b = -b
    }

    if (a < 0) {
        a = -a
        flag = true
    }
    if (b < 0) {
        b = -b
        flag = true
    }
    let result = a
    while (result >= b) {
        result -= b
        count++
    }
    if (flag) {
        count = -count
    }
    return count
}
const modulo = (a, b) => {
    const quotient = divide(a, b);
    const remainder = a - multiply(b, quotient)
    return remainder;
}


// console.log(modulo(50, 2))