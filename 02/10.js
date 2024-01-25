/* Write a JavaScript program to move the last three characters to the start of a given string.
The string length must be greater than or equal to three. */

function moveLastThreeToFirst(str) {
    if (str.length >= 3) {
        return str.slice(str.length - 3) + str.slice(0, str.length - 3)
    }

    return str
}

let result1 = moveLastThreeToFirst('Sanket Talaviya')
let result2 = moveLastThreeToFirst('Golang')
let result3 = moveLastThreeToFirst('C#')

console.log(result1)
console.log(result2)
console.log(result3)
