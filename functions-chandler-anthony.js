// Write a function named marco that returns "polo".
// Psuedocode: 
// Write a variable declaration -
const marco = () =>{ 
    //parameter not needed, since only return is Polo.
    return "Polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
//Write variable declaration using "const"
const greeting = (name) =>{
    return `Welcome, ${name}!` //create return to say Welcome with arguement passed (name)
}
console.log(greeting("Anthony"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
//Write a variable declaration using "const"
const oddOrEven = (number) =>{
    //create comparative statement that says if number divided by 2 has no remainder the return even
    if (number % 2 === 0 ){
        return `Number: ${number} is even!`
        //Create else statement that says all other numbers are odd
    } else {          
        return `Number: ${number} is odd!`
    }
}
console.log(oddOrEven(2))
console.log(oddOrEven(531))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

//Write a variable declaration named triple
const triple = (number) => {
    // create statement that multiplies arguement by 3
    return number * 3
}
console.log(triple(3))
console.log(triple(33))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
    //create a variable declaration named multiply
// const multiply = (number, number2) => {
//     // create statement that multiplies two numbers and gives you an outcome of them multiplied together
//     let newNumber = number * number2
//     return newNumber
//}
// console.log(multiply(5, 8))
// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
    //create a variable declaration named divisibleBy for two variables
    const divisibleBy = (numbers, numbers2) => {
    // create a function that states if number 1 divided by number 2 has no remainder it returns the statement.  
    // let remainder =  []
    // for (let )
    if (numbers % numbers2 === 0){
        return `${numbers} is evenly divisible by ${numbers2}`
    
    }
}
 console.log(divisibleBy(25, 5))
// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
  // create a function that states
  const assignGrade = (grade) => {
    if (grade > 89){
        return "A"
    } else if (grade > 79){
        return "B"
    } else if (grade > 69){
        return "C"
    } else if  (grade > 59){
        return "D"
    } else {
     return "F" }
}
console.log(assignGrade(76))
// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
const isLonger = (string, string2) => {
if (string.length > string2.length){
    return {string}
 } else {
    return string2  
    }
}
 console.log(isLonger("food", "tenth"))



