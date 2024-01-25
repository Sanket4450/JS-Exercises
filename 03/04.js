// Write a JavaScript program to test whether an array of integers does not contain 1 or 3.

function doesContain(arr) {
    for (let elem of arr) {
        if (elem === 1 || elem === 3) {
            return false
        }
    }

    return true
}

console.log(doesContain([20, 43, 2, 10, 3, 500]))
console.log(doesContain([12, 1, 3, 4, 40, 2, 1]))
console.log(doesContain([10, 20, 30, 40, 50]))
