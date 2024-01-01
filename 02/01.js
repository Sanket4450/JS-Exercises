// Write a JavaScript program to find the closest value to 100 from two numerical values.

function closestValuetoHundred(num1, num2) {
    return Math.abs(num1 - 100) <= Math.abs(num2 - 100) ? num1 : num2
}

console.log(closestValuetoHundred(91, 45))
console.log(closestValuetoHundred(94, 105))
console.log(closestValuetoHundred(120, 67))
