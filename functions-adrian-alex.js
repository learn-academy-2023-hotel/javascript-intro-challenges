// // Write a function named marco that returns "polo".
// const marco = () => {
//     return "polo"
// }

// console.log(marco())

// // Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//     return `"Welcome, ${name}!"`
// }

// console.log(greeting("Alex"))

// // Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOrEven = (number) => {
//     if(number % 2 === 0){
//         return "Even"
//     } else if(number % 2 !== 0){
//         return "Odd"
//     }
// }

// console.log(oddOrEven(20))
// console.log(oddOrEven(41))

// // Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (total) => {
//     return total * 3
// }

// console.log(triple(3))

// // Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiply(3,4))

// // Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (num3, num4) => {
//     if(num3 % num4 === 0) {
//         return `${num3} is evenly divisible by ${num4}.`
//     // } else(num3 % num4 !== 0) {
//     //     return `${num3} is not evenly divisible by ${num4}.`
//  }
// }

// console.log(divisibleBy(10,5))
// console.log(divisibleBy(5,3))

// // Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (score) => {
//     if(score >= 90){
//         return "A"
//     } else if(score >= 80) {
//         return "B"
//     } else if(score >= 74) {
//         return "C"
//     } else if(score >= 70) {
//         return "D"
//     } else if(score < 70) {
//         return "F"
//     }   
// }
// console.log(assignGrade(95))
// console.log(assignGrade(85))
// console.log(assignGrade(75))
// console.log(assignGrade(72))
// console.log(assignGrade(65))

// // Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (string1, string2) => {
//     if(string1.length > string2.length) {
//         return string1
//     } else {
//         return string2
//     }
// }

// console.log(isLonger("longer", "short"))
// console.log(isLonger("short", "longer"))

// // Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (num5, num6) => {
//     if(num5 > num6) {
//         return num5
//     } else {
//         return num6
//     }
// }

// console.log(greaterNum(7, 10))
// console.log(greaterNum(10, 8))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// const yelling = (words) => {
//     return words.toUpperCase()
// }

// console.log(yelling("hello"))

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.

// Have your function default to returning English.

// const helloWorld = (language) => {
//     if(language === "es") {
//         return "hola mundo"
//     } else if(language === "de") {
//         return "hallo welt"
//     } else 
//         return "hello world"
// } 

// console.log(helloWorld("de"))
// console.log(helloWorld("es"))
// console.log(helloWorld())