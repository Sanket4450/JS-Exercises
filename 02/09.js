// Write a JavaScript program to concatenate two strings except for their first character.

function concat_except_first(str1, str2) {
    return str1.slice(1) + str2.slice(1)
}

let result1 = concat_except_first('Sanket', 'Talaviya')
let result2 = concat_except_first('AB', 'CD')
let result3 = concat_except_first('Asynchronous', ' JS')

console.log(result1)
console.log(result2)
console.log(result3)
