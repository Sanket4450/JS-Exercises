// Write a JavaScript program to add two digits to a given positive integer of length two.

function addTwoDigits(num) {
    return num % 10 + Math.floor(num / 10)
}

console.log(addTwoDigits(10))
console.log(addTwoDigits(24))
console.log(addTwoDigits(99))
