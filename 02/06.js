// Write a JavaScript program to count the number of vowels in a given string.

function countVowels(str) {
    let count = 0
    for (let letter of str) {
        if (letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U' || letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            count++
        }
    }
    return count
}

console.log(countVowels('Sanket'))
console.log(countVowels('Entrepreneurship'))
console.log(countVowels('ABCD abcd'))
