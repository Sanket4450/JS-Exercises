// Write a JavaScript program to create an array by taking the first and last elements from a given array of integers.

function createArrayWithFirstLast(arr) {
    if (arr.length > 1) {
        const newArr = []
        newArr.push(arr[0], arr[arr.length - 1])

        return newArr
    }

    return arr
}

let result1 = createArrayWithFirstLast([10, 35, 40, 90])
let result2 = createArrayWithFirstLast([1, 2, 3, 4, 5])
let result3 = createArrayWithFirstLast([100])

console.log(result1)
console.log(result2)
console.log(result3)
