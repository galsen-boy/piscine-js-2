const cutFirst = (str) => {
    return str.slice(2)
}
const cutLast = (str) => {
    return str.slice(0, -2)
}
const cutFirstLast = (str) => {
    return str.slice(2, -2)
}
const keepFirst = (str) => {
    return str.slice(0, 2)
}
const keepLast = (str) => {
    return str.slice(-2)
}
const keepFirstLast = (str) => {
    if (str.length>=4){
    return str.slice(0, 2) + str.slice(-2)
    }else {
        return str
    }
}
console.log(keepFirstLast('af')) 