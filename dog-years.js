function dogYears(planet, seconds) {
    switch (planet) {
        case 'earth':
            return Number(((seconds / (1 * 31557600)) * 7).toFixed(2))
        case 'mercury':
            return Number(((seconds / (0.2408467 * 31557600)) * 7).toFixed(2))
        case 'venus':
            return Number(((seconds / (0.61519726 * 31557600)) * 7).toFixed(2))
        case 'mars':
            return Number(((seconds / (1.8808158 * 31557600)) * 7).toFixed(2))
        case 'jupiter':
            return Number(((seconds / (11.862615 * 31557600)) * 7).toFixed(2))
        case 'saturn':
            return Number(((seconds / (29.447498 * 31557600)) * 7).toFixed(2))
        case 'uranus':
            return Number(((seconds / (84.016846 * 31557600)) * 7).toFixed(2))
        case 'neptune':
            return Number(((seconds / (164.79132 * 31557600)) * 7).toFixed(2))
    }
}