const sameAmount = (str, regex1, regex2) => {
    regex1 = new RegExp(regex1, 'g');
    regex2 = new RegExp(regex2, 'g')

    let res1 = str.match(regex1);
    let res2 = str.match(regex2);

    if (res1 == null) {
        res1 = []
    }
    if (res2 == null) {
        res2 = []
    }

    return res1.length === res2.length
}