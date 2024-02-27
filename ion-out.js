const ionOut = (str) => {
    const regex = /tion(,| |$)/;
    let arr = str.split(' ').join(',').split(',');
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let match = arr[i].match(regex)
        if (match != null) {
            res.push(match.input.replace('ion', ''))
        }
    }
    return res
}
