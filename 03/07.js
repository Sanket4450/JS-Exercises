// Write a JavaScript program to replace all numbers with a specified number in an array of integers.

function replaceNum(arr, oldVal, newVal) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === oldVal) {
            arr[i] = newVal
        }
    }

    return arr
}

let result1 = replaceNum([10, 25, 40, 25, 35], 25, 50)
let result2 = replaceNum([5, 5, 5, 5, 5], 5, 7)
let result3 = replaceNum([10, 20, 30, 40, 50], 100, 50)

console.log(result1)
console.log(result2)
console.log(result3)
