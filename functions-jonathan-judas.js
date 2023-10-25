//Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

//Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
} 
console.log(marco())

//Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (name) => {
    return `Welcome, ${name}!`
}
console.log(greeting("Judas"))
// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
if (number % 2 === 0) {
    return "even"
} else {
    return "odd"
}
}
console.log(oddOrEven(6))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (number) => {
    return number * 3
}
console.log(triple(10))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(3 , 7))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    if (num1 % num2  === 0) {
        return `${num1} is evenly divisible by ${num2}`
    } 
}
console.log(divisibleBy(20, 10))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score. 
const assignGrade = (score) => {
    if (score > 89) {
        return "you got an A"
    }
    else if (score > 79 && score < 90) {
        return "you got a B"
    }
    else if (score > 69 && score < 80) {
        return "you got a C"
    }
    else if (score > 59 && score < 70) {
        return "you got a D"
    }
    else {
        return "you got an F"
    }
}
console.log(assignGrade(34))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string1, string2) => {
    if (string1.length > string2.length) {
        return `${string1} is longer than ${string2}`
    }
    else if (string1.length < string2.length) {
        return `${string2} is longer than ${string1}`
    }
    else {
        return "they are the same length"
    }
}
console.log(isLonger("the", "two"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
