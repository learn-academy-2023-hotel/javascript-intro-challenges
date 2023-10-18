// Write a function named marco that returns "polo".
// pseudocode: we need function (marco) that takes whatever input, and returns "polo"
// input: nothing
// // out: a string "polo"
// const marco = () => {
//     return "polo"
// }
// console.log(marco())


// const nameOfFunction = ("parameter") => {
//     return:action
// }
// console.log(nameOfFuntion("argument"))

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
//pseudocode: write a funtion called greeting
//input: string that holds the name "Joseph"
// a name -->arugment/actual data-->placeholder/aka parameter
//output: a string "Welcome, person's name here!"
// this function called greeting should take in a name, and returns the message: "Welcome, <person's name here>!"
// input = a string  
// output = a string
 
// const greeting = (name) =>{
//     return `Welcome, ${name}!`
// } 
// console.log(greeting("Joseph"))


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//pesudocode: 
// need to define a funtion called oddOrEven
// input = a number 9 or 10 --> number
// output = "odd" or "even" --> string
// need to run if/statements 
//if number % 2 == 0 --> "even"
//if number % 2 !== 0 --> "odd"

// const oddOrEven = (number) => {
//     if(number % 2 === 0){
//         console.log("even")
//     }else if(number % 2 !== 0){
//         console.log("odd")
//     }
//     else {console.log("EEROR")}
// }
// console.log(oddOrEven(6))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//pseudocode: need a function called triple
// input = a number  
// output = number*3 -->the product
// code --> return (number * 3)

// const triple = (num) => {
//     return (num * 3)
// }
// console.log(triple(6))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// pseudocode: need a function caled multiply
// input = two numbers
// output = product of the two numbers multiplied together--> a number
// num1 num2 as parameters
// code = return (num1 * num2)

// const multiply = (num1, num2) => {
//     return (num1 * num2)
// }
// console.log(multiply(4,8))


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

//pseudocde: need a funtion called divisibleBy that takes in two numbers and outputs a string IF the condition of the first number is evenly dividible by the second number is met. 
// input --> two numbers 
// output --> string --> `${firstNum} is evenly divisible by ${secondNum}`
// twooutcomes 1. evenly divisible 2. not evenly divisible 
//code:
// return if (firstNum % secondNum === 0 ) { `${firstNum} is evenly divisible by ${secondNum}` }
// else if (firstN % secondNum !== 0)

// const divisibleBy = (firstNum, secondNum) => {
//     if(firstNum % secondNum === 0) {
//         return `${firstNum} is evenly divisible by ${secondNum}` }
//     else {return `${firstNum} is not evenly divisible by ${secondNum}`}
// }
// console.log(divisibleBy(92, 4))
// console.log(divisibleBy(3, 2))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// Pseudo code: 
// input: number 
// output: string 
// if number is >= 90, output is "A"
// else if number is >= 80, output is "B"
// else if number is >= 70, output is "C"
// else, output is "FAIL"

// const assignGrade = (score) => {
//     if (score >= 90){
//         return "A"
//     } else if (score >= 80){
//         return "B"
//     } else if (score >= 70){
//         return "C"
//     } else{
//         return "FAIL"
//     }
// }
// console.log(assignGrade(95))
// console.log(assignGrade(85))
// console.log(assignGrade(75))
// console.log(assignGrade(65))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// Pseudo Code:
// Input: two strings 
// Output: the longer string of the two
// 1. declare a function called isLonger
// 2. use two strings as arguments
// 3. if (stringOne.length > stringTwo.length) { return `${stringOne}`}
// 4. else if (stringOne.length < stringTwo.length) { return `${stringTwo}`}
// 5. else { return `${stringOne} equal ${stringTwo}`}

// const isLonger = (stringOne, stringTwo) => {
//     if (stringOne.length > stringTwo.length) { return `${stringOne}`}
//     else if (stringOne.length < stringTwo.length) { return `${stringTwo}`}
//     else { return `${stringOne} equal ${stringTwo}`}
// }
// console.log(isLonger("ABC", "ABCDE"))
// console.log(isLonger("ABC", "AB"))
// console.log(isLonger("ABC", "ABD"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// Input: two numbers
// Output: the greater of the two 
// Pseudo Code:
// Declare a function called greaterNum that has two parameters.
// return: if(numOne > numTwo) { return `${numbOne}`}
// else if(numOne < numTwo) { return `${numTwo}`}
// else {"two numbers are the same"}

// const greaterNum = (numOne, numTwo) => {
//     if(numOne > numTwo) { 
//         return `${numOne}`} else if(numOne < numTwo) { 
//         return `${numTwo}`
//     }else {
//         return "two numbers are the same"
//     }
// }
// console.log(greaterNum(50, 700))
// console.log(greaterNum(600, 4))
// console.log(greaterNum(58, 58))

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// Input: string 
// Output: string in all uppercase
// Pseudo Code: 
// Declare a function called yelling that takes in a string and returns the string as uppercase. 
// 1. Establish a parameter stringLowerCase
// 2. use built-in function .toUpperCase() on the parameter
// 3. return and call function

// const yelling = (stringLowerCase) => {
//     return (stringLowerCase.toUpperCase())
// }
// console.log(yelling("mari"))