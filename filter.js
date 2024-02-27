function filter(arr, func) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}

function reject(arr, func) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}

function partition(arr, func) {
    let resoui = []
    let resnon = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            resoui.push(arr[i])
        } else {
            resnon.push(arr[i])
        }
    }
    return [resoui, resnon]
}