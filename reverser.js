const reverse = (arr) => {
    let arrs = ''
    let arrf = []
    for (let i = arr.length-1 ; i>= 0; i--) {
        if (typeof arr === 'string') {
            arrs += arr[i]
        }
        if (Array.isArray(arr)) {
            arrf.push(arr[i])
        }
    }
    if (typeof arr === 'string') {
        return arrs
    }
    if (Array.isArray(arr)) {
    return arrf
    }
    
}
 console.log(reverse('je'));