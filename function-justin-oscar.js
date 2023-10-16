// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (parameter) => {
    return `Welcome, ${parameter}`
}
console.log(greeting("Justin"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
    if (number % 2 !== 0) {
    return `${number} is odd.`
    } else {
    return `${number} is even.`
    }
}
console.log(oddOrEven(28))
// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
    return number * 3
}
console.log(triple(3))
// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(5,6))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    if(num1 % num2 === 0) {
        console.log(`${num1} is evenly divisible by ${num2}`)
    } else {
        console.log(`${num1} is not evenly divisible by ${num2}`)
    }
}
divisibleBy(30,8)
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
const assignGrade = (number) => {
    if(number >= 90) {
        return "You scored an A"
    } else if (number >=80) {
        return "You scored a B"
    } else if (number >=70) {
        return "You scored a C"
    } else {
        return "F"
    }
}
console.log(assignGrade(71))


// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (string1, string2) => {
    if(string1.length > string2.length){
        return `${string1} is the longer string`
    }
    else {
        return `${string2} is the longer string` 
    }
}
console.log(isLonger("sleep", "no sleep"))
// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"
