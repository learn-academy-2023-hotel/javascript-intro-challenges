// // Consider the variable:

// // var groceryList = ["chips", "dip", "cookies"]
// // Write the code that will add "soda" to the end of the original array.
// // groceryList.push("soda")
// // console.log(groceryList)
// // Write the code that will add "granola" to the end of the array without altering the original array.
// // var updatedGroceryList = groceryList.concat("granola")
// // console.log(updatedGroceryList)
// // Write the code that will return a subset of the array containing only "chips" and "dip".
// // console.log(groceryList.slice(0,2))
// // Write the code that will add "beans" to the "chips" and "dip" array.
// // var itemtoAdd = "beans"
// // groceryList.pop()
// // console.log(groceryList.concat(itemtoAdd))

// // Consider the variable:

// var numbers = [2, 4, 6, 8, 10]

// // Write the code that will add the number 0 to the beginning of the array.
// // console.log(numbers.unshift("0"))
// // console.log(numbers)
// // // Write the code that will add the number 12 to the end of the array.
// // console.log(numbers.push("12"))
// // console.log(numbers)
// // Write the code that will remove the first number from the array.
// // console.log(numbers.shift())
// // console.log(numbers)
// // Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
// // var newNumbers = [0, 2, 4, 6, 10]
// // console.log(newNumbers)

// // Consider the variable:

// // var numSet = [2, 13, 6, 8, 4, 2]
// // Write the code that finds the index of the first appearance of the number 2.
// // Write the code that finds the index of the last appearance of the number 2.
// // Write the code that returns the number at the third index.
// // Consider the variable:

// // var characters = ["y", "a", "r", "r", "a"]
// // Write the code that brings all the letters in the characters array together into a string.
// // Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
// // Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
// // Write the code that brings all the letters in the charsReversed array together into a string without separators.
// // Create two arrays consisting of three first names of your cohort members in each array.

// // Write the code that sorts the names in alphabetical order.
// // Write the code that sorts the names in reverse alphabetical order.
// // Write the code that sorts all the names in alphabetical order in a single array.
// // Consider the variables:

// // var numbers = [42, 221, 71, 7, 18, 87]
// // var oddIndexes = []
// // Write the code that logs the values from the numbers array that are at odd indexes.
// // Write the code that adds the values from odd indexes into the oddIndexes array.


// Create a for loop that logs each number from 1 - 20.
// for (let i = 0; i <= 20; i++) {
//     console.log(i)
// }
// Create a for loop that logs every other number from 1 - 20.
// for (let i = 0; i <= 20; i+=2) {
//     console.log(i)
// }
// Create a for loop that logs the result of each number from 1 - 20 tripled.
// for (let i = 0; i <= 20; i++) {
//     console.log(i*3)
// }
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     } else {
//       console.log("ODD");
//     }
//   }  

// Consider this variable:

const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
// let largestNumber = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > largestNumber) {
//         largestNumber = nums[i];
//     }
// }
// console.log(largestNumber)
// Create the code that will log the smallest number from the array.
// let smallestNumber = 0
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < smallestNumber ) {
// smallestNumber = nums[i];
//     }
// }
// console.log(smallestNumber)
// Create the code that will log the remainder of each number when divided by 2.
// for (let i = 0; i < nums.length; i++) {
//     const remainder = nums[i] % 2
//     console.log(remainder) }
// Expected output: 1, 1, -1, 0, 1
// Consider this variable:

const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
// let count = 0
// for (let i = 0; i < myString.length; i++) {
//     if(myString[i] === "e") {
//         count ++
//     }
// }console.log(count)
// Create the code that will log every other character in the string.
let result = ""
for (let i = 0; i < myString.length; i += 2) {
    result += myString[i]
} console.log(result)