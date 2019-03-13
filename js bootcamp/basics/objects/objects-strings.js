let isValidPassword = function (password){
    return password.length >8 && !password.includes('password')
}

console.log(isValidPassword('asdf'))
console.log(isValidPassword('12345678!'))
console.log(isValidPassword('asdfpasswordfff'))