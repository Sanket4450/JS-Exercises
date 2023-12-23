// Write a JavaScript program to calculate the days left before Makar Sankranti.

const currentDate = new Date()
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth()

const makarSankranti = currentMonth === 0 ? new Date(currentYear, 0, 14).getTime() : new Date(currentYear + 1, 0, 14).getTime()

const milliSeconds = makarSankranti - currentDate.getTime()

const date = new Date(milliSeconds)

console.log(`${date.getMonth()} months & ${date.getDate()} days left for Makar Sankranti`)
