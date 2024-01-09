// Write a JavaScript program to extract the first half of a even string.

function extractFirstHalf(str) {
    if (str.length <= 0 || str.length % 2 !== 0) {
        return false
    }
    return str.slice(0, str.length / 2)
}

let result1 = extractFirstHalf('Sanket')
let result2 = extractFirstHalf('')
let result3 = extractFirstHalf('XYZ')

console.log(result1)
console.log(result2)
console.log(result3)
