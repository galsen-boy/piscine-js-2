const letterSpaceNumber = (str) => {
    let res = str.match(/. \d((?=\W)|$)/g);
    if (res) {
        return res
    }
    return []
}