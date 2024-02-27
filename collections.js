const arrToSet = (arr) => {
    return new Set(arr)
}
const arrToStr = (arr) => {
    return arr.join('')
}
const setToArr = (set) => {
    return Array.from(set)
}
const setToStr = (set) => {
    return setToArr(set).join('')
}
const strToArr = (str) => {
    return str.split('')
}
const strToSet = (str) => {
    return new Set(strToArr(str))
}
const mapToObj = (map) => {
    return Object.fromEntries(map)
}
const objToArr = (obj) => {
    return Object.values(obj)
}
const objToMap = (obj) => {
    return  new Map(Object.entries(obj))
}
const arrToObj = (arr) => {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i]
    }
    return obj
}
const strToObj = (str) => {
    const obj = {}
    for (let i = 0; i < str.length; i++) {
        obj[i] = str[i]
    }
    return obj
}

function superTypeOf(value) {
    if (value === null) {
      return 'null';
    } else if (Array.isArray(value)) {
      return 'Array';
    } else if (value instanceof Map) {
      return 'Map';
    } else if (value instanceof Set) {
      return 'Set';
    } else if (typeof value === 'object' ) {
        return 'Object';
    } else if (typeof value === 'function') {
        return 'Function';
    } else if (typeof value === 'number') {
        return 'Number';
    } else if (typeof value ==='string') {
        return 'String';
    } else if (typeof value === 'boolean') {
        return 'Boolean';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else {
        return 'Unknown';
    }
}
   
  