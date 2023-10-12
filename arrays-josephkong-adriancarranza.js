
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

var numbers = [2, 4, 6, 8, 10]

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
var number2 = [0]
console.log(number2.concat(numbers))