// Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.

function isAnyCommonElem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            return true
        }
    }

    return false
}

console.log(isAnyCommonElem([1, 2, 3], [2, 4, 6]))
console.log(isAnyCommonElem([10, 24, 50, 100], [25, 40, 95]))
console.log(isAnyCommonElem([12, 0, 0, 5], [20, 4, 10]))
