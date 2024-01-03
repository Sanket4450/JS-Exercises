// Write a JavaScript program to convert letters of a given string alphabetically.

function convertAlphabetically(str) {
    const strLetters = str.split('').sort()
    
    return strLetters.join('')
}

let result1 = convertAlphabetically('sanket')
let result2 = convertAlphabetically('AXBYCZ')
let result3 = convertAlphabetically('class')

console.log(result1)
console.log(result2)
console.log(result3)
