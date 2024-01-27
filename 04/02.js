// Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.

function findMaximumDiff(arr) {
    const differences = []

    for (let i of arr) {
        for (let j of arr) {
            differences.push(Math.abs(i - j))
        }
    }

    return Math.max.apply(null, differences)
}

let result1 = findMaximumDiff([10, 30, 400, 21, 48, 72])
let result2 = findMaximumDiff([1, 5, 3, 10, 5, 0])
let result3 = findMaximumDiff([25, -2, -30, 12, 100])

console.log(result1)
console.log(result2)
console.log(result3)
