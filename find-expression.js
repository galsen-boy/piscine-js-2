const findExpression = (num, start = 1, res = "1") => {
    if (start === num) {
        return res;
    }
    else if (start > num) {
        return undefined;
    }
    else {
        return findExpression(num, start + 4, res + " " + add4) || findExpression(num, start * 2, res + " " + mul2)
    }
}