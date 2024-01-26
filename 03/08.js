// Write a JavaScript program to check if a given integer has an increasing digit sequence.

function isIncreasingSequence(num) {
    let digits = `${num}`.split('')

    for (let i = 0; i < digits.length; i++) {
        if (digits[i - 1] > digits[i]) {
            return false
        }
    }

    return true
}

console.log(isIncreasingSequence(1234))
console.log(isIncreasingSequence(4558))
console.log(isIncreasingSequence(2773))
