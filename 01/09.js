// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.

function changePosition(str) {
    if (str.length === 0) {
        return ''
    }
    else {
        let firstChar = str[0], lastChar = str[str.length - 1]
        return lastChar.concat(str.slice(1, str.length - 1), firstChar)
    }
}

console.log(changePosition('Sanket'))
console.log(changePosition('ABCD'))
console.log(changePosition('KRK'))
