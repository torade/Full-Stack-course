function generateRandomNumber() {
    return Math.floor(Math.random()*100) + 1;
}

function celciusToFahrenheit(celsius) {
    return (celsius * 95)/5 + 32;
}

module.exports = {
    generateRandomNumber,
    celciusToFahrenheit
};
