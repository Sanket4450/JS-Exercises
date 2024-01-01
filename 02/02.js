// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.

function doesCharacterExist(str, char) {
    let index = str.indexOf(char)

    return index >= 1 && index < 4 ? true : false
}

let result1 = doesCharacterExist('Sanket', 'k')
let result2 = doesCharacterExist('ABCD', 'B')
let result3 = doesCharacterExist('xyz', 'x')

console.log(result1)
console.log(result2)
console.log(result3)
