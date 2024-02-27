const groupPrice = (str) => {
    str = str.split(' ')
    let count = 0
    let tab = []
    let res = []
    let price = ""
    let pattern = /\$|USD/g
    for (let i = 0; i < str.length; i++) {
        price = ""
        count = 0
        if (pattern.exec(str[i]) != null) {
            for (let x of str[i]) {
                if (x === '.') {
                    count++
                }
                if (count === 2) {
                    break
                }
                price += x
            }
            tab.push(price)
            price = price.split('.')
            if (price[0][0] === '$') {
                tab.push(price[0].slice(1, price[0].length))
            } else {
                tab.push(price[0].slice(3, price[0].length))
            }
            tab.push(price[1])
            res.push(tab)
            tab = []
        }
    }
    return res
}