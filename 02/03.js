// Write a JavaScript program that checks whether the last digit of three positive integers is the same.

function areLastDigitsSame(int1, int2, int3) {
    let lastDigit1 = int1 % 10
    let lastDigit2 = int2 % 10
    let lastDigit3 = int3 % 10

    return lastDigit1 === lastDigit2 && lastDigit1 === lastDigit3 && lastDigit2 === lastDigit3
}

let result1 = areLastDigitsSame(12, 35, 59)
let result2 = areLastDigitsSame(46, 106, 3496)
let result3 = areLastDigitsSame(100, 430, 20)

console.log(result1)
console.log(result2)
console.log(result3)
