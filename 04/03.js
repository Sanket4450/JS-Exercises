// Write a JavaScript program to compute the sum of the absolute differences of consecutive numbers in a given array of integers.

function sumOfAbsoluteDifferences(arr) {
    let sum = 0

    for (let i = 1; i < arr.length; i++) {
        sum += Math.abs(arr[i] - arr[i - 1])
    }

    return sum
}

let result1 = sumOfAbsoluteDifferences([1, 2, 3, 4, 5])
let result2 = sumOfAbsoluteDifferences([10, 25, 40, 60])
let result3 = sumOfAbsoluteDifferences([20, -5, 8, 14, 24])

console.log(result1)
console.log(result2)
console.log(result3)
