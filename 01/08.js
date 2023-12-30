// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function removeCharFromString(str = 'as', position) {
    if (position > str.length || position <= 0) {
        return str
    }
    else {
        let startingPart = str.slice(0, position - 1)
        let endingPart = str.slice(position)
        return startingPart + endingPart
    }
}

console.log(removeCharFromString('Sanket', 5))
console.log(removeCharFromString('ABCD', 2))
console.log(removeCharFromString('Java Script', 5))
