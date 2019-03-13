let guessNum = function ( guess){

    let randomNumber = Math.floor( 1+ (Math.random() * 5))
    console.log(`The number was ${randomNumber} you guessed ${guess}`)
    return randomNumber==guess
}
console.log(guessNum(3))