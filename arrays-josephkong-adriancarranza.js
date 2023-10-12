//part 1
// var groceryList = ["chips", "dip", "cookies"]
// // Write the code that will add "soda" to the end of the original array.
// groceryList.push("soda")

// console.log(groceryList)
// // Write the code that will add "granola" to the end of the array without altering the original array.
// //  groceryList = groceryList.push("soda") 
// // // console.log 
// var granola = ['granola']
// console.log(groceryList.concat(granola))
// console.log(groceryList)
// // Write the code that will return a subset of the array containing only "chips" and "dip".
// // console.log(groceryList.slice(0,1)) --> outputs 'chips'
// // console.log(groceryList.slice(0,2)) --> outputs 'chips', "dips"
// console.log(groceryList.slice(0,1)) 
// console.log(groceryList.slice(0,2)) 
// // Write the code that will add "beans" to the "chips" and "dip" array.
// console.log(groceryList.slice(0 , 2).push("beans"))
// console.log(groceryList)

// // var groceryList2 = console.log(groceryList.slice(0 , 2))   --->console.log cannot be a part of the variable declaration ; variable declaration 
// // console.log(groceryList2.push("beans"))
// // console.log(groceryList2)

// var groceryList2 = (groceryList.slice(0 , 2))
// console.log(groceryList2.push("beans"))
// console.log(groceryList2)

// console.log(groceryList.slice(0 , 2).push("beans"))
// console.log(groceryList2)

//part 2
// var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.
// console.log(numbers.unshift(0))
// console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
// console.log(numbers.push(12))
// console.log(numbers)
// Write the code that will remove the first number from the array.
// console.log(numbers.shift())
// console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array.
// var number2 = [0]
// console.log(number2.concat(numbers))

//part 3
// var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
// for(let i = 0; i < numSet.length; i++){
//     if (numSet[i] === 2){
//         console.log(i)
//     }
// }
// console.log(numSet.indexOf(2))
// // Write the code that finds the index of the last appearance of the number 2.
// console.log(numSet.lastIndexOf(2))
// // Write the code that returns the number at the third index.
// // console.log(numSet.slice(3))  ---->outputs 8,4,2
// console.log(numSet.slice(3,4))

// var learnStudents = ["Debra", "Mary", "Jonas", "Joel"]
// console.log(learnStudents.slice(2,3))

var characters = ["y", "a", "r", "r", "a"]

// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""))
// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
console.log(characters.reverse())
var charsReversed = characters.reverse()
console.log(charsReversed)
// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))




// Create two arrays consisting of three first names of your cohort members in each array.
var members1 = ["joseph", "adrian", "justin"]
var members2 = ["jean", "ron", "judas"]
// Write the code that sorts the names in alphabetical order.
console.log(members1.sort())
console.log(members2.sort())
// Write the code that sorts the names in reverse alphabetical order.
console.log(members1.sort().reverse())
console.log(members2.sort().reverse())
// Write the code that sorts all the names in alphabetical order in a single array.
console.log(members1.concat(members2).sort())