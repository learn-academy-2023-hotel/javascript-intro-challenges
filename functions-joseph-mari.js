// Write a function named marco that returns "polo".
// pseudocode: we need function (marco) that takes whatever input, and returns "polo"
// input: nothing
// out: a string "polo"
const marco = () => {
    return "polo"
}
console.log(marco())


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
 
const greeting = (name) =>{
    return `Welcome, ${name}!`
} 
console.log(greeting("Joseph"))


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//pesudocode: 
// need to define a funtion called oddOrEven
// input = a number 9 or 10 --> number
// output = "odd" or "even" --> string
// need to run if/statements 
//if number % 2 == 0 --> "even"
//if number % 2 !== 0 --> "odd"

const oddOrEven = (number) => {
    if(number % 2 === 0){
        console.log("even")
    }else if(number % 2 !== 0){
        console.log("odd")
    }
    else {console.log("EEROR")}
}
console.log(oddOrEven(6))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
//pseudocode: need a function called triple
// input = a number  
// output = number*3 -->the product
// code --> return (number * 3)

const triple = (num) => {
    return (num * 3)
}
console.log(triple(6))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// pseudocode: need a function caled multiply
// input = two numbers
// output = product of the two numbers multiplied together--> a number
// num1 num2 as parameters
// code = return (num1 * num2)

const multiply = (num1, num2) => {
    return (num1 * num2)
}
console.log(multiply(4,8))


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

//pseudocde: need a funtion called divisibleBy that takes in two numbers and outputs a string IF the condition of the first number is evenly dividible by the second number is met. 
// input --> two numbers 
// outpu --> string --> `${firstNum} is evenly divisible by ${secondNum}`
// twooutcomes 1. evenly divisible 2. not evenly divisible 
//code:
// return if (firstNum % secondNum === 0 ) { `${firstNum} is evenly divisible by ${secondNum}` }
// else if (firstN % secondNum !== 0)

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.