// Write a JavaScript program to find the number of even digits in a given integer.

function evenDigits(num) {
    let digits = `${num}`.split('')
    let count = 0

    for (let digit of digits) {
        if (digit % 2 === 0) {
            count++
        }
    }

    return count
}

console.log(evenDigits(1234))
console.log(evenDigits(4000))
console.log(evenDigits(13579))
