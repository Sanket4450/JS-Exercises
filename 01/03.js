// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function isLeapYear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
}

console.log(isLeapYear(2020))
console.log(isLeapYear(1600))
console.log(isLeapYear(1265))
console.log(isLeapYear(1700))
