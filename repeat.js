const repeat = (str, num) => {
    let result = ''
    while (num > 0) {
        result = result + str
        num--
    }
    return result
}
//  console.log(repeat('Hello', 8))