// Write a JavaScript program to find the largest of three given integers.

function findLargest(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2
    }
    else {
        return num3
    }
}

console.log(findLargest(2, 3, 5))
console.log(findLargest(60, 60, 25))
console.log(findLargest(6, 6, 6))
