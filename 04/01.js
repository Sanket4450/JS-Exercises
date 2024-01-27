// Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

function findMaximumDiff(arr) {
    const differences = []

    for (let i = 0; i < arr.length; i++) {

        if (i > 0) {
            differences.push(Math.abs(arr[i] - arr[i - 1]))
        }
    }

    return Math.max.apply(null, differences)
}

let result1 = findMaximumDiff([1, 2, 3, 4, 5])
let result2 = findMaximumDiff([1, 3, 7, 13, 21])
let result3 = findMaximumDiff([10, 25, 35, 40])

console.log(result1)
console.log(result2)
console.log(result3)
