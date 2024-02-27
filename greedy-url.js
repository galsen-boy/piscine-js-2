const getURL = (data) => {
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return data.match(urlRegex)
}
const greedyQuery = (data) => {
    let res = getURL(data);
    let regex = /=/g;
    let result = [];
    for (let i = 0; i < res.length; i++) {
        let match = res[i].match(regex)
        if (match !== null && match.length >= 3) {
            result.push(res[i])
        }
    }
    return result;

}

const notSoGreedy = (data) => {
    let res = getURL(data);
    let regex = /=/g;
    let result = [];
    for (let i = 0; i < res.length; i++) {
        let match = res[i].match(regex)
        if (match !== null && match.length >= 2 && match.length <= 3) {
            result.push(res[i])
        }
    }
    return result;
}