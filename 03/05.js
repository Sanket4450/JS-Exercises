// Write a JavaScript program to swap the first and last elements of a given array of integers.

function swapFirstAndLast(arr) {
    if (arr.length >= 1) {
        [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]

        return arr
    }

    return arr
}

let result1 = swapFirstAndLast([10, 20, 30, 40, 50])
let result2 = swapFirstAndLast([24, 48])
let result3 = swapFirstAndLast([786])

console.log(result1)
console.log(result2)
console.log(result3)
