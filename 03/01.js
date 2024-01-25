// Write a JavaScript program to check whether the first and last elements are the same in a given array of integers.

function areElementsSame(arr) {
    return arr[0] === arr[arr.length - 1]
}

console.log(areElementsSame([10, 23, 45, 10]))
console.log(areElementsSame([24, 12, 108, 43, 12]))
console.log(areElementsSame([45, 92, '45']))
