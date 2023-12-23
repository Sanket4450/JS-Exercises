// Write a JavaScript program to display the current day and time in a proper format.

const date = new Date()

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const day = date.getDay()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()

console.log(`Today is : ${days[day]}`)
console.log(`Time is : ${hours} : ${minutes} : ${seconds}`)
