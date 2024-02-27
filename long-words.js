function longWords(arr) {
    return arr.every(obj => obj.length >= 5)
}

function oneLongWord(arr) {
    return arr.some(obj => obj.length >= 10)
}

function noLongWords(arr) {
    return arr.every(obj => obj.length < 7)
}