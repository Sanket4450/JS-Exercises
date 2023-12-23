// Write a JavaScript program to find the area of a triangle where three sides are 10, 12, 15.

const a = 10, b = 12, c = 15

const s = (a + b + c) / 2

const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2)

console.log(area)
