// Write the code that will add "soda" to the end of the original array.
// Write the code that will add "granola" to the end of the array without altering the original array.
// Write the code that will return a subset of the array containing only "chips" and "dip".
// Write the code that will add "beans" to the "chips" and "dip" array.

// var groceryList = ["chips", "dip", "cookies"]
// console.log(groceryList.push("soda"))
// console.log(groceryList)

// var newList = ["granola"]
// var comboArrays = groceryList.concat(newList)
// console.log(comboArrays)

// console.log(groceryList.slice(0,2))

// var mySubset = groceryList.slice(0,2)
// console.log(mySubset.push("beans", "chips", "dip"))
// console.log(mySubset)


// Write the code that will add the number 0 to the beginning of the array.
// Write the code that will add the number 12 to the end of the array.
// Write the code that will remove the first number from the array.
// Write the code that will add the number 0 to the beginning of the array without altering the original array. 
// HINT: it's not .unshift You'll have to get creative! ;)

// var numbers = [2, 4, 6, 8, 10]
// console.log(numbers.unshift(0))
// console.log(numbers)

// console.log(numbers.push(12))
// console.log(numbers)

// console.log(numbers.shift())
// console.log(numbers)

// var notUnshift = [0]
// var conCat = [notUnshift.concat(numbers)]
// console.log(conCat)

// Write the code that finds the index of the first appearance of the number 2.
// Write the code that finds the index of the last appearance of the number 2.
// Write the code that returns the number at the third index.

// var numSet = [2, 13, 6, 8, 4, 2]

//console.log(numSet.indexOf(2)
// console.log(numSet.lastIndexOf(2))
// console.log(numSet.indexOf(8))







/////////////// ********LOOPS******//////////////

// Javascript Loops
// Create a for loop that logs each number from 1 - 20.
// Create a for loop that logs every other number from 1 - 20.
// Create a for loop that logs the result of each number from 1 - 20 tripled.
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc


// var myList = []
// for(let i=1; i < 21; i++){
//     myList.push(i)
//     console.log(i)
// }
// console.log(myList)


// for(let i=1; i < 21; i +=2){
//     console.log(i)
// }

// for(let i=1; i < 21; i++){
//     console.log(i * 3)
// }

// for(let i=1; i <21; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
//     else(console.log("ODD"))

//     }

//                Part two          ///////

// Create the code that will log the largest number from the array.
// Create the code that will log the smallest number from the array.
// Create the code that will log the remainder of each number when divided by 2.
// Expected output: 1, 1, -1, 0, 1

//const nums = [3, 57, -9, 20, 67]
// let largestNumber = nums[0]

// for(let i = 1; i < nums.length; i ++){
//     if(nums[i] > largestNumber){
//         largestNumber = nums[i]
//     }
//     }
// console.log(largestNumber)

// let smallestNumber = nums[0]
// for(let i = 1; i < nums.length; i++){
//     if(nums[i] < smallestNumber){
//         smallestNumber = nums[i]
//     }
// }
// console.log(smallestNumber)
// const nums = [3, 57, -9, 20, 67]
// for(let i=0; i < nums.length; i++){
//     console.log(nums[i] % 2)
// }

