function forEach(arr = [], fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr)
    }
}