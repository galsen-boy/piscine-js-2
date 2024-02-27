function hasCity(country, arr) {
    return function (city) {
        if(arr.includes(city)) {
            return `${city} is a city from ${country}`
        } else {
            return `${city} is not a city from ${country}`
        }
    }
}