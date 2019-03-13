let getTemp = function (tempF){

    return {
        farenheit: tempF,
        celsius: (tempF - 32) * 5/9,
        kelvin: (tempF + 459.67) * 5/9
    }
}


console.log(getTemp(76))