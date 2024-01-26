// Write a JavaScript program to find the longest string in a given array.

function findLongestStr(arr) {
    let longestStr = ''
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= longestStr.length) {
            longestStr = arr[i]
        }
    }

    return longestStr
}

let result1 = findLongestStr(['A', 'AB', 'ABC', 'ABCD'])
let result2 = findLongestStr(['Sanket', 'Talaviya'])
let result3 = findLongestStr(['JS', 'Python', 'Java', 'C++', 'Golang'])

console.log(result1)
console.log(result2)
console.log(result3)
