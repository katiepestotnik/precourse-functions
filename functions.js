// Write a function that accepts one parameter, a string
// The function should simply console.log a greeting saying "Hello there, _____" 
// Insert the given string into the blank in the message being logged
const greeting = (name) => {
    console.log(`Hello ${name}`)
}
greeting('Klondike')
// Write a function that accepts two parameters, num1 and num2
// The function should return whichever of the two numbers is larger
const larger = (n1, n2) => {
    let largest
    n1 > n2 ? largest = n1 : largest = n2
    return largest
}
console.log(larger(2,19))
// Write a function that accepts one parameter, a list
// The function should return the sum total of all numbers in the list, using a loop
const sumIt = (arr) => {
    let total = 0
    arr.forEach((num) => {
        total += num
    })
    return total
}
console.log(sumIt([1, 4, 6, 20]))
// BONUS FUNCTIONS: Write a function to solve each of the given problem statements
// Determine whether a given list contains a given value
const valCheck = (arr, val) => {
    return arr.includes(val)
}
console.log(valCheck([2,6,8], 8))
// Find the longest string in a given array of strings
const longest = (arr) => {
    let long = ''
    arr.forEach((str) => {
        str.length > long.length ? long = str : ''
    })
    return long
}
console.log(longest(['kat', 'missy', 'a']))
// Count how many times a given string contains a given letter
const counter = (str, l) => {
    const arr = [...str]
    let count = 0
    arr.forEach((letter) => {
        letter === l ? count ++ : ''
    })
    return count
}

console.log(counter('hlello', 'l'))