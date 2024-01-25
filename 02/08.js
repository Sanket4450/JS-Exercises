// Write a JavaScript program to create a new string without the first and last characters of a given string.

function without_first_last(str) {
    if (str.length <= 2) {
        return ''
    }

    return str.slice(1, str.length - 1)
}

let result1 = without_first_last('Sanket')
let result2 = without_first_last('ABCD')
let result3 = without_first_last(' XYZ ')

console.log(result1)
console.log(result2)
console.log(result3)
