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