// Write a JavaScript program to create another string by adding "Py" in front of a given string.
// If the given string begins with "Py" return the original string.

function concatString(str) {
    if (str[0] === 'P' && str[1] === 'y') {
        return str
    }
    else {
        return 'Py' + str
    }
}

console.log(concatString('chart'))
console.log(concatString('Python'))
console.log(concatString('pyramid'))
