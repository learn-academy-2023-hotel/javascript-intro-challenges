// // Create a for loop that logs each number from 1 - 20.
// for (let i = 1; i < 21; i++) {
//     console.log(i)
//   }

// // Create a for loop that logs every other number from 1 - 20.
// for (let i = 1; i < 21; i+=2) {
//     console.log(i)
//   }

// Create a for loop that logs the result of each number from 1 - 20 tripled.
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// // for (let i = 0; i < array.length; i++) {
// //     console.log(array[i] * 3)
// //   }

// // Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// for (let i = 1; i < array.length; i++) {
//     if(array[i] % 2 !== 0){
//         console.log("ODD", i)
//     }
// }

// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc
// Consider this variable:

const nums = [3, 57, -9, 20, 67]
// Create the code that will log the largest number from the array.
let biggestNumber = 0
for (let i = 0; i < nums.length; i++) {
if (nums[i] > biggestNumber){
biggestNumber = nums[i]
}
}
console.log(biggestNumber)
// Create the code that will log the smallest number from the array.
// Create the code that will log the remainder of each number when divided by 2.
// Expected output: 1, 1, -1, 0, 1
// Consider this variable:

// const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
// Create the code that will log every other character in the string.