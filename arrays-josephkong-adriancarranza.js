
var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
groceryList.push("soda")

console.log(groceryList)
// Write the code that will add "granola" to the end of the array without altering the original array.
//  groceryList = groceryList.push("soda") 
// // console.log 
var granola = ['granola']
console.log(groceryList.concat(granola))
console.log(groceryList)
// Write the code that will return a subset of the array containing only "chips" and "dip".
// console.log(groceryList.slice(0,1)) --> outputs 'chips'
// console.log(groceryList.slice(0,2)) --> outputs 'chips', "dips"
console.log(groceryList.slice(0,1)) 
console.log(groceryList.slice(0,2)) 
// Write the code that will add "beans" to the "chips" and "dip" array.
console.log(groceryList.slice(0 , 2).push("beans"))
console.log(groceryList)

// var groceryList2 = console.log(groceryList.slice(0 , 2))   --->console.log cannot be a part of the variable declaration ; variable declaration 
// console.log(groceryList2.push("beans"))
// console.log(groceryList2)

var groceryList2 = (groceryList.slice(0 , 2))
console.log(groceryList2.push("beans"))
console.log(groceryList2)

console.log(groceryList.slice(0 , 2).push("beans"))
console.log(groceryList2)
