const RNA = (adnstr) => {
    let res = ''
    for(let i = 0;i<adnstr.length;i++){
        if(adnstr[i] === 'A'){
            res += 'U'
        }else if(adnstr[i] === 'C'){
            res += 'G'
        }else if(adnstr[i] === 'G'){
            res += 'C'
        }else if(adnstr[i] === 'T'){
            res += 'A'
        }
    }
    return res
}
const DNA = (arnstr) => {
    let res = ''
    for(let i = 0;i<arnstr.length;i++){
        if(arnstr[i] === 'A'){
            res += 'T'
        }else if(arnstr[i] === 'C'){
            res += 'G'
        }else if(arnstr[i] === 'G'){
            res += 'C'
        }else if(arnstr[i] === 'U'){
            res += 'A'
        }
    }
    return res
}